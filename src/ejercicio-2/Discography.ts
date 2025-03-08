import { Album } from "./Album";
import { Single } from "./Single";

export class Discography<T extends Album | Single> {
    /**
     * 
     * @param items - Lista de albumes o singles
     */
    private items: T[] = [];

    /**
     * Constructor de la clase Discography, para crear un objeto como si fuera una discografía.
     * @param items - Lista de albumes o singles
     */
    constructor(items: T[]) {
        this.items = items;
    }

    /**
     * Agrega un item a la discografía
     * @param item - Album o single a agregar
     */
    addItem(item: T): void {
        this.items.push(item);
    }

    /**
     * Elimina un item de la discografía
     * @param item - Album o single a eliminar
     */
    removeItem(item: T): void {
        this.items = this.items.filter((item) => item.name.toLowerCase() !== item.name.toLowerCase());
    }

    /**
     * Devuelve la lista de albumes o singles
     * @returns - Devuelve la lista de albumes o singles
     */
    getAllItems(): T[] {
        return this.items.slice();
    }

    /**
     * Busca un item por el nombre
     * @param name - Nombre del album o single a buscar
     * @returns - Album o single encontrado o undefined si no se encontro
     */
    searchByName(name: string): T[] {
        return this.items.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * Obtiene el total de la duración de todos los albumes y singles
     * @returns - Devuelve el número total de la duración de todos los albumes y singles
     */
    getTotalDuration(): number {
        return this.items.reduce((total, item) => total + item.getDuration(), 0);
    }

    /**
     * Obtiene el número total de reproducciones de todos los albumes y singles
     * @returns - Devuelve el número total de reproducciones de todos los albumes y singles
     */
    getTotalPlays(): number {
        return this.items.reduce((total, item) => total + item.getTotalPlays(), 0);
    }
}