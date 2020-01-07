it('演示matchers的用法', () => {
    expect(1 + 1).toBe(2); // 严格等于
    expect({name: 'golderBrother'}).toEqual({name: 'golderBrother'});
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect([1,2,3]).toContain(2);
    expect('golderBrother').toContain('golder');
    expect({name: 'golderBrother', age: 18}).toHaveProperty('age');
    expect('abc').toMatch(/\w+/);
    expect([1,2,3]).not.toContain(4);
    // more Api look here https://jestjs.io/docs/zh-Hans/expect
})