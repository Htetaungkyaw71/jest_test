const calculator = require("./calculator.js")

describe('calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(10, 10)).toBe(20);
      expect(calculator.add(5, 4)).toBe(9);
    });
    test('subtract 5 - 2 to equal 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
        expect(calculator.subtract(2, 1)).toBe(1);
        expect(calculator.subtract(8, 3)).toBe(5);
      });
    test('multiply 5 * 2 to equal 10', () => {
        expect(calculator.multiply(5, 2)).toBe(10);
        expect(calculator.multiply(1, 2)).toBe(2);
        expect(calculator.multiply(3, 3)).toBe(9);
      });
    test('adds 4 / 2 to equal 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
        expect(calculator.divide(9, 3)).toBe(3);
        expect(calculator.divide(10, 2)).toBe(5);
      });
  });


