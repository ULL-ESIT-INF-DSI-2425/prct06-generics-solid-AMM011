import { Song } from "./Song";
import { Album } from "./Album";
import { Artist } from "./Artist";

/**
 * Clase que representa una librería de música
 * @module
 * @class MusicLibrary
 * @example
 * const library: MusicLibrary = new MusicLibrary([artist]);
 */
export class MusicLibrary {
    /**
     * Librería que contiene diferentes artistas con sus diferentes datos.
     */
    private library: Artist[];

    /**
     * @param library - Artista principal de la biblioteca musical
     */
    constructor(library: Artist[]) {
        this.library = library;
    }

    get getLibrary(): Artist[] {
        return this.library;
    }

    /**
     * Método para agregar un artista a la librería
     * 
     * @param artist - Artista a agregar
     */
    addArtist(artist: Artist): void {
        this.getLibrary.push(artist);
    }

    /**
     * 
     * Método que busca un artista por el nombre
     * 
     * @param name - Nombre del artista que se busca
     * @returns - El artista o undefined si no se encontro
     */
    findArtist(name: string): Artist | undefined {
        return this.getLibrary.find((a) => a.getNameArtist === name);
    }

    /**
     * 
     * Método que busca un albúm por el nombre
     * 
     * @param album - Album a buscar
     * @returns - Album encontrado o undefined si no se encontro
     */
    findAlbum(album: string): Album | undefined {
        const library: Artist[] = this.getLibrary;
        let albums: Album[] = [];

        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        return albums.find((a) => a.getNameAlbum === album);
    }

    /**
     * 
     * Método que busca una canción por el nombre
     * 
     * @param song - Canción a buscar
     * @returns - Canción encontrada o undefined si no se encontro
     */
    findSong(song: string): Song | undefined {
        const library: Artist[] = this.getLibrary;
        let albums: Album[] = [];

        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        for (const album of albums) {
            const foundSong = album.getSongsAlbum.find((s) => s.getNameSong === song);
            if (foundSong) {
                return foundSong;
            }
        }

        return undefined;
    }

    /**
     * Muestra la consola la información de la biblioteca en formato tabl
     */
    displayLibrary(): void {
        console.table(this.getLibrary);
    }

    /**
     * Método para obtener el número de canciones de un albúm
     * 
     * @returns - Devuelve el número de canciones 
     */
    getSongs(): number {
        const library = this.getLibrary;
        let albums: Album[] = [];
        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        let count: number = 0;
        albums.forEach((album) => {
            count += album.getSongCount();
        });

        return count;
    }

    /**
     * 
     * Método que obtiene la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
     * 
     * @returns - Devuelve la duración total de las canciones.
     */
    getDuration(): number {
        const library = this.getLibrary;
        let albums: Album[] = [];
        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        let duration: number = 0;
        albums.forEach((album) => {
            duration += album.getDuration();
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
        const library = this.getLibrary;
        let albums: Album[] = [];
        library.forEach((artist) => {
            albums = albums.concat(artist.getAlbumsArtist);
        });

        let plays: number = 0;
        albums.forEach((album) => {
            plays += album.getTotalPlays();
        });

        return plays;
    }
}