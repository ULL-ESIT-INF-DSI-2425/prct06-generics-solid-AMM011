import { describe, test, expect, vi } from 'vitest';
import { Penguin } from '../src/ejercicio-6/Penguin';
import { Sparrow } from '../src/ejercicio-6/Sparrow';

// Mock para capturar console.log
const consoleSpy = vi.spyOn(console, 'log');

describe('Sparrow Tests', () => {
    test('debería comer correctamente', () => {
        const sparrow = new Sparrow();
        sparrow.eat();
        expect(consoleSpy).toHaveBeenCalledWith("The sparrow is eating.");
    });

    test('debería volar correctamente', () => {
        const sparrow = new Sparrow();
        sparrow.fly();
        expect(consoleSpy).toHaveBeenCalledWith("The sparrow is flying.");
    });
});

describe('Penguin Tests', () => {
    test('debería comer correctamente', () => {
        const penguin = new Penguin();
        penguin.eat();
        expect(consoleSpy).toHaveBeenCalledWith("The penguin is eating.");
    });

    test('debería nadar correctamente', () => {
        const penguin = new Penguin();
        penguin.swim();
        expect(consoleSpy).toHaveBeenCalledWith("The penguin is swimming.");
    });
});