/**
 * @description 计时器模拟
 */

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

import timerGame from "./timerGame";

test('游戏开始前等待 1s', () => {
  timerGame();
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000)
})