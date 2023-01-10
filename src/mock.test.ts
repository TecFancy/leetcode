/**
 * @description 模拟函数 - mock
 */

import axios from "axios";

import Users from "./users";
import defaultExport, { foo, bar } from "./fooBarBaz";

jest.mock("axios");

jest.mock("./fooBarBaz", () => {
  const originalModule = jest.requireActual("./fooBarBaz");

  // 模拟 foo 变量和默认导出的函数
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});

function forEach(items: number[], callback: (idx: number) => void) {
  for (let idx = 0; idx < items.length; idx++) {
    callback(items[idx]); // 模拟该函数
  }
}

// 模拟 forEach 函数中的回调函数 callback
const mockCallback = jest.fn((idx) => 42 + idx);

describe("Mock 函数", () => {
  test("模拟 forEach 中的回调函数", () => {
    forEach([100, 200], mockCallback);
    expect(mockCallback.mock.calls).toHaveLength(2);
    expect(mockCallback.mock.calls[0][0]).toBe(100);
    expect(mockCallback.mock.calls[1][0]).toBe(200);
    expect(mockCallback.mock.results[0].value).toBe(142);
  });

  test("模拟模块：测试获取 users 数据", async () => {
    const users = [{ name: "Sam", age: 20 }];
    const resp = { data: users };

    (axios.get as jest.Mock).mockResolvedValue(resp);
    // 也可以用这种方法
    // (axios.get as jest.Mock).mockImplementation(() => Promise.resolve(resp))

    const data = await Users.all();
    return expect(data).toEqual(users);
  });

  test("模拟部分模块", () => {
    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe("mocked baz");
    expect(defaultExport).toHaveBeenCalled();
    expect(foo).toBe("mocked foo");
    expect(bar).toBe("bar");
  });
});
