import actions from './counter1';
import * as TYPES from '../actionsTypes';
describe('测试counter1', () => {
    it('counter1必须是个对象', ()=> {
        // toBeTruthy: 是否存在
        expect(actions).toBeTruthy();
    });
    it('actions.increment1执行后的返回值应该是{type: "INCREMENT1"}', () => {
        // toEqual 是用来比较对象的
        expect(actions.increment1()).toEqual({type: TYPES.INCREMENT1});
    });
});