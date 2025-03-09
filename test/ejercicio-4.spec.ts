import { describe, test, expect, vi } from 'vitest';
import { Printer } from '../src/ejercicio-4/Printer';
import { Scanner } from '../src/ejercicio-4/Scanner';
import { PrinterScanner } from '../src/ejercicio-4/PrinterScanner';

// Mock para capturar console.log
const consoleSpy = vi.spyOn(console, 'log');

describe('Printer Tests', () => {
    test('debería imprimir correctamente', () => {
        const printer = new Printer();
        printer.print();
        expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    });
});

describe('Scanner Tests', () => {
    test('debería escanear correctamente', () => {
        const scanner = new Scanner();
        scanner.scan();
        expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    });
});

describe('PrinterScanner Tests', () => {
    test('debería imprimir y escanear correctamente', () => {
        const printerScanner = new PrinterScanner();
        printerScanner.print();
        expect(consoleSpy).toHaveBeenCalledWith('Printing...');
        printerScanner.scan();
        expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    });
});

