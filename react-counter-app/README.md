# BDD

> Behaviour Driver Development

**测试驱动开发**

## 1. 定义用户行为

- 我们要站在用户的角度去思考，我会如何操作，操作之后我会如何得到结果

`jest --init`

> cra 通过 生成了 jest 配置文件

会自动改变`package.json`文件中的`test`命令行内容为`jest`，然后`jest`会使用本地的 babel 配置文件来解析 react jsx 语法。

`cra`找的测试用例目录是`src`下面的

`jest-puppeteer.json` 配置

会往测试用例中注入`page`对象
`jest: jest-puppeteer`
