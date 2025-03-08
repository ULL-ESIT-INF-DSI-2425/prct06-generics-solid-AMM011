import { describe, test, expect, beforeEach, vi } from 'vitest';
import { FileManager } from '../src/ejercicio-3/FileManager';
import { IFileHandler } from '../src/ejercicio-3/IFileHandler';

/**
 * Mock para simular el comportamiento de un manejador de archivos.
 */
class MockFileHandler implements IFileHandler {
    private content: string = "";

    readFile(): string {
        return this.content;
    }

    writeFile(data: string): void {
        this.content = data;
    }
}

let fileManager: FileManager;
let mockFileHandler: MockFileHandler;

beforeEach(() => {
    mockFileHandler = new MockFileHandler();
    fileManager = new FileManager(mockFileHandler);
});

describe('FileManager Tests', () => {
    test('debería leer un archivo vacío inicialmente', () => {
        expect(fileManager.read()).toBe("");
    });

    test('debería escribir en un archivo y luego leerlo', () => {
        const data = "Contenido de prueba";
        fileManager.write(data);
        expect(fileManager.read()).toBe(data);
    });

    test('debería sobrescribir el contenido al escribir un nuevo dato', () => {
        fileManager.write("Primer contenido");
        fileManager.write("Segundo contenido");
        expect(fileManager.read()).toBe("Segundo contenido");
    });
});
