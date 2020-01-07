import axios from "axios";
import { exec, createInstance, getUser, delay } from "../src/mock";
// 让jest自己模拟axios
jest.mock("axios");

describe("测试mock", () => {
  it("测试exec", () => {
    // jest 模拟创建个函数
    const callback = jest.fn();
    // 调用一次返回的值
    callback.mockReturnValueOnce("abc");
    callback.mockReturnValueOnce("def");
    exec(callback);
    expect(callback).toBeCalled();
    expect(callback).toBeCalledTimes(2);
    // expect(callback()).toBe('abc');
    expect(callback).toBeCalledWith("123");
    // console.log("测试exec callback.mock：", callback.mock);
  });

  it("测试createInstance", () => {
    const callback = jest.fn();
    const instance = createInstance(callback);
    // console.log("测试createInstance callback.mock：", callback.mock);
    // console.log("instance：", instance);
  });

  it("测试getUsers接口", async () => {
    // 模拟单次请求的返回值
    (axios.get as any).mockResolvedValue({ data: { code: 0 } });
    const result: any = await getUser();
    expect(result.data).toEqual({ code: 0 });
  });

  // 来启用假定时器
  jest.useFakeTimers();

  it("测试delay", done => {
    delay((result: any) => {
      expect(result).toBe(5000);
      done();
    }, 5000);
    jest.runAllTimers();
  });

});
