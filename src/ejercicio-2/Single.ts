import { Song } from "./Song";
/**
 * Interfaz que representa un Single
 * @module
 * @interface ISingle
 * @property {string} name - Nombre del single
 * @property {number} release - Año de lanzamiento del single
 * @property {Song | Song[]} song - Una canción o lista de una misma canción pero diferentes versiones
 * @example
 * const single: ISingle = { name: "Single", release: 2000, song: song1};
 */
export interface ISingle {
    name: string;
    release: number;
    song: Song | Song[];
}

/**
 * Clase que representa un single
 * @module
 * @class Single
 */
export class Single implements ISingle {
    /**
     * 
     * @param name - Nombre del single
     * @param release - Año de lanzamiento
     * @param song - Canción o sus diferentes versiones
     */
    constructor(public name: string, public release: number, public song: Song | Song[]) {
        this.name = name;
        this.release = release;
        this.song = song;
    }

    /**
     * Getter para obtener el nombre del single
     * @returns {string} - Nombre del single
     */
    get getNameSingle(): string {
        return this.name;
    }

    /**
     * Getter para obtener el año de lanzamiento del single
     * @returns {number} - Año de lanzamiento
     */
    get getReleaseSingle(): number {
        return this.release;
    }

    /**
     * Getter para obtener la canción o canciones del single
     * @returns {Song | Song[]} - Canción o canciones del single
     */
    get getSongSingle(): Song | Song[] {
        return this.song;
    }

    /**
     * Getter para obtener la duración total del single
     * @returns {number} - Duración total del single
     */
    getDuration(): number {
        return Array.isArray(this.song) 
            ? this.song.reduce((total, songIt) => total + songIt.getDurationSong, 0)
            : this.song.getDurationSong;
    }

    /**
     * Método que obtiene el número total de reproducciones de un single, a partir del número de reproducciones de todas y
     * cada una de las canciones que lo conforman.
     * 
     * @returns - Devuelve el número total de reproducciones
     */
    getTotalPlays(): number {
        return Array.isArray(this.song)
            ? this.song.reduce((total, songIt) => total + songIt.getPlaysSong, 0)
            : this.song.getPlaysSong;
    }
}