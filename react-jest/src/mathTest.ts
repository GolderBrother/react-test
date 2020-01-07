/*
 * @Description: 模拟实现个jest
 * @Author: golderBrother
 * @Date: 2020-01-06 22:35:17
 * @Last Modified by: yaohuang.zhang
 * @Last Modified time: 2020-01-07 16:01:26
 */

import { add, minus, multiply, divide } from "./math";

describe("测试add方法", () => {
  it("测试2+4=6", () => {
    assert(add(2, 4) === 6, "2+4!==6");
  });
  it("测试3+6=9", () => {
    assert(add(3, 6) === 9, "3+6!==9");
  });
});

describe("测试minus方法", () => {
  it("测试2-4=-2", () => {
    assert(minus(2, 4) === -2, "2-4!==-2");
  });
  it("测试3-6=-3", () => {
    assert(minus(3, 6) === -3, "3-6!==-3");
  });
});

describe("测试multiply方法", () => {
  it("测试2*4=8", () => {
    assert(multiply(2, 4) === 8, "2*4!==8");
  });
  it("测试3*6=18", () => {
    assert(multiply(3, 6) === 18, "3*6!==18");
  });
});

describe("测试divide方法", () => {
  it("测试2/4=0.5", () => {
    assert(divide(2, 4) === 0.5, "2/4!==0.5");
  });
  it("测试6/3=2", () => {
    assert(divide(6, 3) === 2, "6/3!==2");
  });
});

function describe(message: string, testSuite: any) {
  testSuite && testSuite();
}

function it(message: string, testCase: any) {
  testCase && testCase();
}

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}
