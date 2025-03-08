import { Song } from "./Song";
/**
 * Interfaz que representa un album
 * @module
 * @interface IAlbum
 * @property {string} name - Nombre del album
 * @property {number} release - Año de lanzamiento del album
 * @property {Song[]} songs - Lista de canciones
 * @example
 * const album: IAlbum = { name: "Album", release: 2010, songs: [song1, song2] };
 */
export interface IAlbum {
    name: string;
    release: number;
    songs: Song[];
}

/**
 * Clase que representa un album
 * @module
 * @class Album
 * @example
 * const album: Album = new Album("Album", 2021, [song1, song2]);
 */
export class Album implements IAlbum {
    /**
     * 
     * Constructor de la clase Album, para crear un objeto como si fuera un disco.
     * 
     * @param name - Nombre del album
     * @param release - Numero de oyentes
     * @param songs - Lista de canciones
     */
    constructor(public name: string, public release: number, public songs: Song[]) {
        this.name = name;
        this.release = release;
        this.songs = songs;
    }

    /**
     * Getter para obtener el nombre del album
     */
    get getNameAlbum(): string {
        return this.name;
    }
    /**
     * Getter para obtener el año de lanzamiento del album
     */
    get getreleaseAlbum(): number {
        return this.release;
    }
    /**
     * Getter para obtener la lista de canciones del album
     */
    get getSongsAlbum(): Song[] {
        return this.songs;
    }

    /**
     * 
     * Método para obtener el número de canciones de un albúm
     * 
     * @returns - Devuelve el número de canciones de un albúm
     */
    getSongCount(): number {
        return this.getSongsAlbum.length;
    }

    /**
     * 
     * Método que obtiene la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
     * 
     * @returns - Devuelve la duración total de las canciones.
     */
    getDuration(): number {
        let duration: number = 0;
        const songs = this.songs;

        songs.forEach((song) => {
            duration += song.getDurationSong;
        });

        return duration;
    }

    /**
     *  
     * Método que obtiene el número total de reproducciones de un disco, a partir del número de reproducciones de todas y
     * cada una de las canciones incluidas en el mismo.
     * 
     * @returns - Devuelve el número total de reproduciones.
     */
    getTotalPlays(): number {
        let plays: number = 0;
        const songs = this.songs;

        songs.forEach((song) => {
            plays += song.getPlaysSong;
        });

        return plays;
    }
}