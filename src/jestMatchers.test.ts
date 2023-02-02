/**
 * @description Jest 匹配器
 * 
 * Jest 提供了许多有用的[匹配器函数](https://jestjs.io/zh-Hans/docs/expect)，下
 * 面是一些常用匹配器简单示例。
 * 
 */

/**
 * describe 是对当前测试组的一个简短描述。通常，将一个要被测试的函数按照场景/功能等拆
 * 分为多个测试用例，将这些用例放在一个测试组中。一个测试文件中可以存在多个 describe。
 */
describe("Jest 匹配器示例", () => {
  test("toBe", () => {
    // toBe 匹配器可用来比较原始值，使用 `===` 严格相等特性。
    expect(1 + 1).toBe(2);
  });

  // toEqual 检查两个对象是否相等。它会递归的检查所有值的相等性，称为“深度相等”。
  test("toEqual", () => {
    const data: { name: string; age?: number } = { name: "Olive" };
    data["age"] = 18;
    expect(data).toEqual({ name: "Olive", age: 18 });
  });

  // 所有匹配器都有对应的 not 匹配器，只需在匹配器前使用链式的写法加上 not 即可。
  test("not matcher", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        // 期望 a + b 不等于 0
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
    // 期望 value 值大于 3
    expect(value).toBeGreaterThan(3);
    // 期望 value 值大于等于 3.5。注意比较整数和小数时使用的匹配器不同。
    expect(value).toBeGreaterThanOrEqual(3.5);

    // 期望 value 值小于 5
    expect(value).toBeLessThan(5);
    // 期望 value 值小于等于 4.5
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
