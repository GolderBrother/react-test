import counter1, { initialState } from "./counter1";
import * as TYPES from "../actionsTypes";

describe("测试counter1 reducer", () => {
  it("counter1必须是个函数", () => {
    expect(counter1).toBeTruthy();
  });
  it("验证初始状态{number:0}", () => {
    expect(counter1(undefined, { type: "test/initState" })).toEqual(
      initialState
    );
  });
  it("派发一个INCREMENT1动作,状态变成{number:1}", () => {
    expect(counter1(initialState, { type: TYPES.INCREMENT1 })).toEqual({
      number: 1
    });
  });
  it("派发一个DECREMENT1动作,状态变成{number:1}", () => {
    expect(
      counter1(initialState, {
        type: TYPES.DECREMENT1
      })
    ).toEqual({
      number: -1
    });
  });
});
