import { callCallback, callPromise } from "../src/api";

describe("异步测试", () => {
  // 问题：异步代码没有执行完毕，测试用例就执行完成了
  // 解决办法：测试用例执行结束后，接受一个done的回调函数，执行done回调函数就可以了
  it("测试callCallback", (done: Function) => {
    callCallback((result: any) => {
      expect(result).toEqual({ code: 0 });
      done && done();
    });
  });

  it("测试callPromise done", (done: Function) => {
    callPromise().then((result: any) => {
      expect(result).toEqual({ code: 0 });
      done && done();
    });
  });

  it("测试async/await", async (done: Function) => {
    const result: any = await callPromise();
    expect(result).toEqual({ code: 0 });
    done && done();
  });

  it("测试callPromise resolves", () => {
    (expect(callPromise()).resolves as any).toMatch({ code: 0 });
  });
});
