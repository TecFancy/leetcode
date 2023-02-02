/**
 * @description 计时器模拟
 */

// 让 Jest 使用假的全局定时器、时间、日期和性能 API。
// https://jestjs.io/zh-Hans/docs/jest-object#jestusefaketimersfaketimersconfig
jest.useFakeTimers();

// 模拟 setTimeout 函数，类似 jest.fn()
// https://jestjs.io/zh-Hans/docs/jest-object#jestspyonobject-methodname
jest.spyOn(global, "setTimeout");

import timerGame from "./timerGame";

describe("timer game", () => {
  test("游戏开始前等待 1s", () => {
    // 1. 调用函数
    timerGame();
    // 2. 期望函数被调用 1 次
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // 3. 测试函数 timerGame 的参数。第一个参数是函数，第二个参数是数字 1000
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // lastCalledWith 是 toHaveBeenLastCalledWith 的别名
    expect(setTimeout).lastCalledWith(expect.any(Function), 1000);
  });

  test("回调函数在 1s 后被调用", () => {
    // 1. 模拟回调函数
    const callback = jest.fn();

    // 2. 调用 timerGame 函数并传入模拟的回调函数
    timerGame(callback);

    // 3. 此时，调用 timerGame 后还没到 1s 的时间，因此回调函数不会被调用
    expect(callback).not.toBeCalled();

    // 4. 快进到 1s
    jest.runAllTimers();

    // 5. 回调函数应被调用，并被调用了 1 次
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
