# 阅读指南

安装依赖并执行 `yarn test` 或 `yarn test --watch`。

单元测试使用的工具是 Jest，按照以下顺序阅读，

1. sum.test.ts
2. jestMatchers.test.ts
3. timerGamer.test.ts
4. asynchronous.test.ts
5. mock.test.ts
6. [快照测试](https://jestjs.io/zh-Hans/docs/snapshot-testing)（这部分比较简单，就不单独写了）

更多[文档](https://jestjs.io/zh-Hans/docs/getting-started)。

UI 测试可以用 Jest，也可以用 [React 测试库](https://testing-library.com/react)，可以参考[这里](https://zh-hans.reactjs.org/docs/testing.html)。

单元测试中，常用的工具除了 Jest 外还有 [Mocha](https://mochajs.org/) ，根据需要自行了解。
