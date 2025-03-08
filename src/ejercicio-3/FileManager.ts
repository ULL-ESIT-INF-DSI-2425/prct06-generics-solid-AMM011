import { IFileHandler } from "./IFileHandler";

/**
 * Class FileManager is responsible for managing file operations.
 */
export class FileManager {
    constructor(private fileHandler: IFileHandler) {}

    /**
     * Reads the contents of a file.
     * @returns The contents of the file as a string.
     */
    public read(): string {
        return this.fileHandler.readFile();
    }

    /**
     * Writes data to a file.
     * @param data - The data to write to the file.
     */
    public write(data: string): void {
        this.fileHandler.writeFile(data);
    }
}