/**
 * Interface for file handling operations.
 * SRP - Single Responsibility Principle
 */
export interface IFileHandler {
    /**
     * Reads the contents of a file.
     * @returns The contents of the file as a string.
     */
    readFile(): string;
    /**
     * Writes data to a file.
     * @param data - The data to write to the file.
     */
    writeFile(data: string): void;
}