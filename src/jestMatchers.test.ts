/**
 * @description Jest 匹配器
 */

describe("Jest 匹配器示例", () => {
  test("toBe", () => {
    expect(1 + 1).toBe(2);
  });

  test("toEqual", () => {
    const data: { name: string; age?: number } = { name: "Olive" };
    data["age"] = 18;
    expect(data).toEqual({ name: "Olive", age: 18 });
  });

  test("not matcher", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test("与数字相关的匹配器", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // 对于数字来说，toBe 和 toEqual 是等价的
    expect(value).toBe(4);
    expect(value).toEqual(4);

    // 两个浮点数比较，应使用 toBeCloseTo 而不是 toEqual
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  test("与字符串相关的匹配器", () => {
    expect("team").not.toMatch(/I/);
    expect("Christoph").toMatch(/top/);
  });

  test("数组和可迭代对象", () => {
    const shoppingList = [
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "milk",
    ];
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });

  test("捕获抛出的错误", () => {
    const errMsg = "you are using the wrong JDK!";
    // 如果想要测试某个函数在调用时是否抛出了错误，用 toThrow
    function compileAndroidCode() {
      throw new Error("you are using the wrong JDK!");
    }
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // 不通过
    expect(() => compileAndroidCode()).toThrow(
      /^you are using the wrong JDK!$/
    );
  });
});
