import { Song } from "./Song";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { Discography } from "./Discography";
import { Single } from "./Single";

/**
 * Clase que representa una librería de música genérica.
 * @module
 * @class MusicLibrary
 * @template T Tipo de la discografía (Álbum, Single o ambos).
 * @example
 * const library = new MusicLibrary<Album | Single>([artist1, artist2]);
 */
export class MusicLibrary<T extends Album | Single> {
    /**
     * Librería que contiene diferentes artistas con sus discografías.
     */
    private library: Artist<T>[];

    /**
     * Constructor de la clase MusicLibrary.
     * @param library - Lista de artistas en la biblioteca musical.
     */
    constructor(library: Artist<T>[]) {
        this.library = library;
    }

    /**
     * Devuelve la lista de artistas en la biblioteca.
     * @returns {Artist<T>[]} - Lista de artistas.
     */
    get getLibrary(): Artist<T>[] {
        return this.library.slice();
    }

    /**
     * Agrega un nuevo artista a la biblioteca.
     * @param artist - Artista a agregar.
     */
    addArtist(artist: Artist<T>): void {
        this.library.push(artist);
    }

    /**
     * Busca un artista por su nombre.
     * @param name - Nombre del artista a buscar.
     * @returns {Artist<T> | undefined} - Artista encontrado o undefined si no existe.
     */
    findArtist(name: string): Artist<T> | undefined {
        return this.library.find((a) => a.getNameArtist === name);
    }

    /**
     * Busca un álbum por su nombre.
     * @param name - Nombre del álbum a buscar.
     * @returns {Album | undefined} - Álbum encontrado o undefined si no existe.
     */
    findAlbum(name: string): Album | undefined {
        for (const artist of this.library) {
            const found = artist.discography.getAllItems().find(
                (item) => item instanceof Album && item.name.toLowerCase() === name.toLowerCase()
            );
            if (found) return found as Album;
        }
        return undefined;
    }

    /**
     * Busca una canción por su nombre.
     * @param name - Nombre de la canción a buscar.
     * @returns {Song | undefined} - Canción encontrada o undefined si no existe.
     */
    findSong(name: string): Song | undefined {
        for (const artist of this.library) {
            for (const item of artist.discography.getAllItems()) {
                if (item instanceof Album) {
                    const songFound = item.songs.find((s) => s.getNameSong === name);
                    if (songFound) return songFound;
                } else if (item instanceof Single) {
                    const songs = Array.isArray(item.song) ? item.song : [item.song];
                    const songFound = songs.find((s) => s.getNameSong === name);
                    if (songFound) return songFound;
                }
            }
        }
        return undefined;
    }

    /**
     * Obtiene el número total de canciones en la biblioteca.
     * @returns {number} - Total de canciones.
     */
    getTotalSongs(): number {
        const uniqueItems = new Set();
        this.library.forEach(artist => {
          artist.discography.getAllItems().forEach(item => uniqueItems.add(item));
        });
        let totalSongs = 0;
        uniqueItems.forEach(item => {
          if (item instanceof Album) {
            totalSongs += item.getSongCount();
          } else if (item instanceof Single) {
            totalSongs += Array.isArray(item.song) ? item.song.length : 1;
          }
        });
        return totalSongs;
    }

    /**
     * Obtiene la duración total de todas las canciones en la biblioteca.
     * @returns {number} - Duración total en minutos.
     */
    getTotalDuration(): number {
        const uniqueItems = new Set();
        this.library.forEach(artist => {
          artist.discography.getAllItems().forEach(item => uniqueItems.add(item));
        });
        let totalDuration = 0;
        uniqueItems.forEach(item => {
          if (item instanceof Album) {
            totalDuration += item.getDuration();
          } else if (item instanceof Single) {
            totalDuration += item.getDuration();
          }
        });
        return totalDuration;
    }

    /**
     * Obtiene el número total de reproducciones de todas las canciones en la biblioteca.
     * @returns {number} - Total de reproducciones.
     */
    getTotalPlays(): number {
        const uniqueItems = new Set();
        this.library.forEach(artist => {
          artist.discography.getAllItems().forEach(item => uniqueItems.add(item));
        });
        let totalPlays = 0;
        uniqueItems.forEach(item => {
          if (item instanceof Album) {
            totalPlays += item.getTotalPlays();
          } else if (item instanceof Single) {
            totalPlays += item.getTotalPlays();
          }
        });
        return totalPlays;
    }
}
