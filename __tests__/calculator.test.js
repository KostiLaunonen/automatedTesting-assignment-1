import { add } from "../src/calculator.js";
import { divide } from "../src/calculator.js";

/*
describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    it('adds negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    it('throws when inputs are not numbers', () => {
        expect(() => add('2', 3)).toThrow('add expects two numbers');
    });
});
*/

describe('divide', () => {
    it('divides two positive numbers', () => {
        expect(divide(10, 5)).toBe(2);
    })

    it('throws when inputs are not numbers', () => {
        expect(() => divide('string', 2)).toThrow("Both arguments must be numbers");
    })

    it('throws when inputs are NaN', () => {
        expect(() => divide(NaN, NaN)).toThrow("Arguments cannot be NaN")
    })

    it('throws when dividing by zero', () => {
        expect(() => divide(2, 0)).toThrow("Division by zero is not allowed")
    })

    // Lähestulkoon sama testi kuin 2. testi, mutta tehtävänannon mukaan piti olla vähintään 4 negatiivista testiä
    // Oletan, ettei divide koodia ole tarkoitus muuttaa, esim. kirjoittaa infinity luvulle oma throw case, joten tässä vaikka tämmöinen
    it('throws when argument is undefined', () => {
        expect(() => divide(undefined, 5)).toThrow("Both arguments must be numbers");
    })

})