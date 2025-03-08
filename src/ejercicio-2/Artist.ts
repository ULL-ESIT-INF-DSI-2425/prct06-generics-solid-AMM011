import { Album } from './Album';
/**
 * Interfaz que representa un artista
 * @module
 * @interface IArtist
 * @property {string} name - Nombre del artista
 * @property {number} listeners - Numero de oyentes
 * @property {Album[]} albums - Lista de albumes
 * @example
 * const artist: IArtist = { name: "Artist", listeners: 1000, albums: [album1, album2] };
 */
export interface IArtist {
    name: string;
    listeners: number;
    albums: Album[];
}
/**
 * Clase que representa un artista
 * @module
 * @class Artist
 * @example
 * const artist: Artist = new Artist("Artist", 1000, [album1, album2]);
 */
export class Artist implements IArtist {
    /**
     * 
     * Constructor de la clase Artist, para crear un objeto como si fuera un artista.
     * 
     * @param name - Nombre del artista
     * @param listeners - Numero de oyentes
     * @param albums - Lista de albumes
     */
    constructor(public name: string, public listeners: number, public albums: Album[]) {
        this.name = name;
        this.listeners = listeners;
        this.albums = albums;
    }

    /**
     * Getter para obtener el nombre del artista
     */
    get getNameArtist(): string {
        return this.name;
    }
    /**
     * Getter para obtener el numero de oyentes del artista
     */
    get getListenersArtist(): number {
        return this.listeners;
    }
    /**
     * Getter para obtener la lista de albumes del artista
     */
    get getAlbumsArtist(): Album[] {
        return this.albums;
    }
}