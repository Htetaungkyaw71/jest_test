const calculator = require("./calculator.js")

describe('calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('subtract 5 - 2 to equal 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
      });
    test('multiply 5 * 2 to equal 10', () => {
        expect(calculator.multiply(5, 2)).toBe(10);
      });
    test('adds 4 / 2 to equal 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
      });
  });


