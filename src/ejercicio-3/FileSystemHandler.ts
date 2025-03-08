// Para utilizarlo hay que instalar el paquete @types/node
// npm install @types/node --save-dev
import * as fs from "fs";
import { IFileHandler } from './IFileHandler';

export class FileSystemHandler implements IFileHandler {
    /**
     * 
     * @param filePath - Ruta del archivo a leer o escribir
     */
    constructor(private filePath: string) {}

    /**
     * Lee el contenido del archivo
     * @returns El contenido del archivo como una cadena
     */
    public readFile(): string {
        try {
            return fs.readFileSync(this.filePath, "utf-8");
        } catch (error) {
            console.error("Error al leer el archivo");
            return "";
        }
    }


    /**
     * Escribe datos en el archivo
     * @param data - Datos a escribir en el archivo
     */
    public writeFile(data: string): void {
        try {
            fs.writeFileSync(this.filePath, data, "utf-8");
            console.log("Archivo escrito exitosamente.");
        } catch (error) {
            console.error("Error al escribir en el archivo");
        }
    }
}