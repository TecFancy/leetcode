/**
 * @description 测试异步函数
 */

function fetchData(errMsg?: string) {
  if (errMsg) {
    return new Promise((_resolve, reject) => {
      reject("error");
    });
  }
  return new Promise((resolve) => {
    resolve("Hello");
  });
}

describe("测试异步函数", () => {
  test("返回的数据为 Hello", () => {
    return fetchData().then((data) => {
      expect(data).toBe("Hello");
    });
  });

  test("异步：返回的数据为 Hello", async () => {
    const result = await fetchData();
    expect(result).toBe("Hello");
  });

  test("异步函数报错", async () => {
    expect.assertions(1);
    try {
      await fetchData("e");
    } catch (e) {
      expect(e).toMatch("error");
    }
  });

  // async await 和 .resolves .rejects 一起使用
  test("返回的数据为 Hello - async, await, resolves", async () => {
    await expect(fetchData()).resolves.toBe("Hello");
  });
  test("返回的数据为 Hello - resolves", () => {
    return expect(fetchData()).resolves.toBe("Hello");
  });

  test("异步函数报错 - async, await, rejects", async () => {
    await expect(fetchData("e")).rejects.toMatch("error");
  });
  test("异步函数报错 - rejects", () => {
    return expect(fetchData("e")).rejects.toMatch("error");
  });
});
