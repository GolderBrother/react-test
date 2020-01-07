let counter: number = 0;
// describe： 一类功能的测试描述
describe("钩子函数测试", () => {
  // 所有的测试用例执行之前执行
  beforeAll(() => {
    console.log("beforeAll执行啦");
    counter++;
  });
  // 每个测试用例执行之前执行
  beforeEach(() => {
    console.log("beforeEach执行啦");
    counter++;
  });
  // 每个测试用例执行之后执行
  afterEach(() => {
    console.log("afterEach执行啦");
    counter++;
  });
  // 所有的测试用例执行之后执行
  afterAll(() => {
    console.log("afterAll执行啦");
    counter++;
    console.log("counter", counter);
  });
  //   it: 一个功能的测试用例;
  it("测试用例1", () => {
    console.log("测试用例1");
    counter++;
  });
  it("测试用例2", () => {
    console.log("测试用例2");
    counter++;
  });
});

// 输出顺序：
/* beforeAll执行啦
beforeEach执行啦
测试用例1
afterEach执行啦
beforeEach执行啦
测试用例2
afterEach执行啦
afterAll执行啦
counter 8 */

// 所以总结执行顺序如下：
// beforeAll > beforeEach > 测试用例xxx > afterEach > afterAll

