玩转React单元测试与e2e实战 - 2020.1.5

手工测试(断言)
console.assert(2+4===6, '2+4!==6');

如果断言不通过，会输出第二个参数

it/test: 测试用例
就是一组测试规则

describe:类似的测试用例分组

jest
- jest由Facebook出品，非常适合React测试

20%的知识点来解决80%的问题

node不支持ESModule模式，需要使用Commonjs规范

vue用的(mocha+chai)/jest

description和test是jest提供的全局函数

使用coverge，测试报告提供覆盖率

Stmts:语句
Line:行

一条语句可能有多行，一行可能有多条语句;所以是多对多的关系

使用es6+Typescript+jsx

生成jest配置文件
jest --init

yarn add --dev babel-jest @types/ @babel/preset-env @babel/preset-react @babel/preset-typescript
targets: {
	node: "current"
}

将当前代码转换成当前node的版本

xxx.spec.(j|t)s(x)?

jsdom:在node端模拟浏览器的DOM操作的插件，因为node本身不支持

生成ts.config配置文件

tsc --init

Matchers
匹配器

基本类型的使用 toBe 方法,严格比较(===)
引用类型(对象)的使用 toEqual 方法，深度比较(==)
toBeNull
toBeUndefined
toContain
toHavaProperty
toMatch // 匹配
.not.toContain // 不包含

归为四大类
相等、包含、逻辑、not

官方文档
https://jestjs.io/docs/zh-Hans/expect

babel/preset-env此处的用处在于转义ESModule模块化语法(import/export),因为node本身不支持
在babel.config.js中有配置

自动化测试,自动监听文件代码改动后再自动测试
jest --watchAll

测试异步代码
异步代码没有执行完毕，测试用例就执行完成了
解决办法：测试用例执行结束后，接受一个done的回调函数，执行done回调函数就可以了

测试Promise

expect(callPromise()).resolves.toMatch({ code: 0 })

钩子函数

beforeAll 所有之前
beforeEach 每个之前
afterAll 所有之后
afterEach 每个之后

mock 模拟

toBeCalled() 被调用了没有
toBeCalledTimes() 被调用了几次
toBeCalledWith('123') 被调用了传入了什么参数

instances:调用了有无产生实例，有无产生this指针

测试axios

jest.mock('axios'); //让jest自己模拟axios

jest模拟定时器
jest.useFakeTimers()

开发的时候用模拟接口测试
联调的时候测试真正的接口

api测试是后端测试的

TDD: 测试驱动开发(Test Driver Development)
先写测试用例 -> 再写对应的业务代码
刚开始的时候测试用例是失败的，不断更改直至成功，然后再写对应的业务代码

http://img.zhufengpeixun.cn/msg.html

react另外一个测试框架:enzyme
主要用来测试组件

能够使用 react 断言，enzyme配置的文件：
setupTests.ts
这个文件名可以配置

react-app-env.d.tx
react类型声明文件

存放测试用例的文件夹 __test__

先写测试用例，再写业务逻辑代码(组件)

借助enzyme的mount方法，传入组件，会返回wrapper对象，这是一个类似jQuery的对象

测试用例的代码量是业务代码的3倍

MessageList组件

listItems.at(0) // 取第0个元素

表单测试
MessageForm
输入框+按钮

jest模拟函数,用来获取入参和返回值
let mockFn = jest.fn();

模拟change事件
let newValue = '';
input.simulate('change', {
    target: {
	value: newValue  
    }
})

内部为空，点击按钮，就不可以提交表单

expect(mockFn).not.toHaveBeenCalled();

toBeTruthy:有这个元素

获取组件的默认状态
wrapper.state().toMatchObject({messages: []});

TDD需要对业务非常熟悉才能写，一般开发人员来写

黑盒测试才是测试人员  白盒测试只有开发能写

如何测试类组件
类组件有实例和状态

业务代码一般不需要写测试用例，都是写库才写用例。
因为一旦需求变了，就要改很多

打印覆盖率报告
test --coverage

可以提高代码质量，但是效率很差，一般用在写库

BDD
行为驱动开发
初始化项目

create-react-app BDD_demo --typescript

站在用户的角度，use story 用户故事，来收集要测试的内容

张老师39，年薪百万

p6是高级开发、p7是技术专家、p8是高级专家(专家)

用友 > 百度 > 爱奇艺

hooks不能完全替代redux

自律+时间管理
身体和技术都要兼顾
要学技术，又要抽空锻炼，还要上班

管理时间精力：gtd
getting things done

GTD就是Getting Things Done的缩写，翻译过来就是“把事情处理完”，是一个管理时间的方法。GTD的核心理念概括就是必须记录下来要做的事，然后整理安排并使自己一一去执行。GTD...

https://www.zhihu.com/topic/19671540/hot

单元测试下半节：
spec.ts结尾的也是测试用例
simulate: 模拟点击
toHaveLength: 有几个元素
toBeTruthy: 是否存在，不能是undefined

写业务的单元测试不多，写工具库的时候多

puppeteer jest-puppeteer
启动无头浏览器

生成jest配置文件
jest --init

jest.config.js文件改动
改动：preset: "jest-puppeteer"
注释：testEnvironment

test: "jest"会走本地的babel配置文件来解析react jsx语法

E2E：端到端测试
node快速删除目录的依赖：rimraf

cra找的测试用例目录是src下面的

jest-puppeteer.json 配置

会往测试用例中注入page对象
jest: jest-puppeteer

