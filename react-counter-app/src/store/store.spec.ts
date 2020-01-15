import store from "./";
import * as types from "./actionsTypes";
import actions from "./actions/counter1";
describe("测试store", () => {
  //在每个用例执行前把store重置一下
  beforeEach(() => {
    store.dispatch({ type: types.RESET });
  });

  it("store必须是存在的", () => {
    // 对象是否存在，不能为undefined
    expect(store).toBeTruthy();
  });

  it("store需要要有初始状态", () => {
    expect(store.getState()).toMatchObject({
      counter1: { number: 0 },
      counter2: { number: 0 }
    });
  });

  it('向仓库派发一个动作{type:"INCREMENT1"},counter1的number+1', () => {
    store.dispatch(actions.increment1());
    expect(store.getState()).toMatchObject({
      counter1: { number: 1 },
      counter2: { number: 0 }
    });
  });

  it('向仓库派发一个动作{type:"DECREMENT1"},counter1的number-1', () => {
    store.dispatch(actions.decrement1());
    expect(store.getState()).toMatchObject({
      counter1: { number: -1 },
      counter2: { number: 0 }
    });
  });

  it("测试异步+1", () => {
    store.dispatch(actions.asyncIncrement1() as any);
    setTimeout(() => {
      expect(store.getState()).toMatchObject({
        counter1: { number: 1 },
        counter2: { number: 0 }
      });
    }, 1500);
  });
});
