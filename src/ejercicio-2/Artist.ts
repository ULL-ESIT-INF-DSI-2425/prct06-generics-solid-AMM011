import { Album } from './Album';
import { Single } from './Single';
import { Discography } from './Discography';

/**
 * Interfaz que representa un artista de manera genérica.
 * @template T Tipo de la discografía (Álbum, Single o ambos).
 */
export interface IArtist<T extends Album | Single> {
    name: string;
    listeners: number;
    discography: Discography<T>;
}

/**
 * Clase que representa un artista con una discografía genérica.
 * @template T Tipo de la discografía (Álbum, Single o ambos).
 */
export class Artist<T extends Album | Single> implements IArtist<T> {
    /**
     * Constructor de la clase Artist.
     * @param name - Nombre del artista.
     * @param listeners - Número de oyentes.
     * @param discography - Discografía del artista.
     */
    constructor(public name: string, public listeners: number, public discography: Discography<T>) {}
   

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
     * Getter para obtener la discografía del artista
     */
    get getDiscographyArtist(): Discography<T> {
        return this.discography;
    }
}