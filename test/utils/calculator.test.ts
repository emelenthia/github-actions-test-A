import { Calculator } from '../../src/utils/calculator';

describe('Calculator', () => {
    const calculator = new Calculator();

    test('add', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('subtract', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('multiply', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('divide', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide by zero throws error', () => {
        expect(() => calculator.divide(1, 0)).toThrow('Division by zero');
    });
});
