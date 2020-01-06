/*
 * @Description: 模拟实现个jest
 * @Author: golderBrother 
 * @Date: 2020-01-06 22:35:17 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2020-01-06 22:45:25
 */


// import { add, minus, multiply, divide } from "../src/math";
let {
    add,
    minus,
    multiply,
    divide
} = require('./math');

describe('测试add方法', () => {
    it('测试2+4=6', () => {
        assert(add(2+4) === 6, '2+4!==6');
    });
    it('测试3+6=9', () => {
        assert(add(3+6) === 9, '3+6!==9');
    });
})

describe('测试minus方法', () => {
    it('测试2-4=-2', () => {
        assert(minus(2-4) === -2, '2-4!==-2');
    });
    it('测试3-6=-3', () => {
        assert(minus(3-6) === -3, '3-6!==-3');
    });
})

function describe(message, testSuite){
    testSuite && testSuite();
}

function it(mesage, testCase){
    testCase && testCase();
}

function assert(condition, message){
    if(!condition) throw new Error(message);
}