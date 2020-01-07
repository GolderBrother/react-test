import {
  add,
  minus,
  multiply,
  divide
} from "../src/math";

describe("测试add方法", () => {
  it("测试2+4=6", () => {
    expect(add(2, 4)).toBe(6);
  });
  it("测试3+6=9", () => {
    expect(add(3, 6)).toBe(9);
  });
});

describe("测试minus方法", () => {
  it("测试2-4=-2", () => {
    expect(minus(2, 4)).toBe(-2);
  });
  it("测试3-6=-3", () => {
    expect(minus(3, 6)).toBe(-3);
  });
});

describe("测试multiply方法", () => {
  it("测试2*4=8", () => {
    expect(multiply(2, 4)).toBe(8);
  });
  it("测试3*6=18", () => {
    expect(multiply(3, 6)).toBe(18);
  });
});

describe("测试divide方法", () => {
  it("测试2/4=8", () => {
    expect(divide(2, 4)).toBe(0.5);
  });
  it("测试6/3=18", () => {
    expect(divide(6, 3)).toBe(2);
  });
});