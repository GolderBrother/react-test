export {}
declare var page;

describe('测试App', ()=> {
    // 会往测试用例中注入`page`对象
    beforeAll(async () => {
        // 自动打开浏览器
        await page.goto('http://localhost:3000/')
    });

    it('标题是React Counter', async () => {
        // page.title() 返回的是Promise
        await expect(page.title()).resolves.toMatch('React Counter');
    });

    it('点击第一导航按钮可以跳到/counter1页面去,显示Counter组件', async () => {
        await page.click('#counter1');
        let text = await page.$eval('p', (el: HTMLElement) => el.innerText);
        expect(text).toBe('Counter1：0');
        await page.click('#counter12');
        text = await page.$eval('p', (el: HTMLElement) => el.innerText);
        expect(text).toBe('Counter2：0');
    });
})

