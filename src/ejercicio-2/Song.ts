/**
 * Interfaz para la clase Song
 * @module
 * @interface ISong
 * @property {string} name - Nombre de la canción
 * @property {number} duration - Duración de la canción
 * @property {(string[] | string)} genre - Genero o generos de la canción
 * @property {boolean} single - Si es un single o no
 * @property {number} plays - Reproducciones de la canción
 * @example
 * const song: ISong = { name: "Song", duration: 180, genre: ["Pop", "Rock"], single: true, plays: 1000 };
 */
export interface ISong {
    name: string;
    duration: number;
    genre: (string[] | string);
    single: boolean;
    plays: number;
}

/**
 * Clase que representa una canción
 * @module
 * @class Song
 * @example
 * const song: Song = new Song("Song", 180, ["Pop", "Rock"], true, 1000);
 */
export class Song implements ISong {
    /**
     * 
     * Constructor de la clase Song, para crear un objeto como si fuera un disco.
     * 
     * @param name - Nombre de la canción
     * @param duration - Duración de la canción
     * @param genre - Genero o generos de la canción
     * @param single - Si es un single o no
     * @param plays - Reproducciones de la canción
     */
    constructor(public name: string, public duration: number, public genre: (string[] | string), public single: boolean, public plays: number) {
        this.name = name;
        this.duration = duration;
        this.genre = genre;
        this.single = single;
        this.plays = plays;
    }

    /**
     * Getter para obtener el nombre de la canción
     */
    get getNameSong(): string {
        return this.name;
    }
    /**
     * Getter para obtener la duración de la canción
     */
    get getDurationSong(): number {
        return this.duration;
    }
    /**
     * Getter para obtener el genero de la canción
     */
    get getGenreSong(): (string[] | string) {
        return this.genre;
    }
    /**
     * Getter para saber si la canción es un single
     */
    get getSingleSong(): boolean {
        return this.single;
    }
    /**
     * Getter para obtener las reproducciones de la canción
     */
    get getPlaysSong(): number {
        return this.plays;
    }
}