import { describe, test, expect, beforeEach } from 'vitest';
import { MusicLibrary } from '../src/ejercicio-2/MusicLibrary';
import { Artist } from '../src/ejercicio-2/Artist';
import { Discography } from '../src/ejercicio-2/Discography';
import { Album } from '../src/ejercicio-2/Album';
import { Single } from '../src/ejercicio-2/Single';
import { Song } from '../src/ejercicio-2/Song';
import { A } from 'vitest/dist/chunks/environment.d8YfPkTm.js';

let musicLibrary: MusicLibrary<Album | Single>;
let artist1: Artist<Album | Single>;
let artist2: Artist<Album | Single>;
let album1: Album;
let single1: Single;
let song1: Song;
let song2: Song;
let song3: Song;

beforeEach(() => {
    song1 = new Song("Song 1", 180, "Pop", true, 5000);
    song2 = new Song("Song 2", 200, "Rock", false, 3000);
    song3 = new Song("Song 3", 220, "Jazz", true, 7000);

    album1 = new Album("Album 1", 2020, [song1, song2]);
    single1 = new Single("Single 1", 2021, song3);

    artist1 = new Artist('Artist 1', 100000, new Discography<Album | Single>([album1, single1]));
    artist2 = new Artist('Artist 2', 50000, new Discography<Album>([album1]));

    musicLibrary = new MusicLibrary<Album | Single>([artist1, artist2]);
});

describe('MusicLibrary Tests', () => {
    test('debería agregar un artista a la librería', () => {
        const artist3 = new Artist('Artist 3', 25000, new Discography<Single>([single1]));
        musicLibrary.addArtist(artist3);
        expect(musicLibrary.getLibrary).toContain(artist3);
    });

    test('debería encontrar un artista por su nombre', () => {
        const found = musicLibrary.findArtist('Artist 1');
        expect(found).toBe(artist1);
    });

    test('debería encontrar un álbum por su nombre', () => {
        const found = musicLibrary.findAlbum('Album 1');
        expect(found).toBe(album1);
    });

    test('debería encontrar una canción por su nombre', () => {
        const found = musicLibrary.findSong('Song 1');
        expect(found).toBe(song1);
    });

    test('debería calcular el total de canciones en la biblioteca', () => {
        expect(musicLibrary.getTotalSongs()).toBe(3);
    });

    test('debería calcular la duración total de la biblioteca', () => {
        expect(musicLibrary.getTotalDuration()).toBe(600);
    });

    test('debería calcular el total de reproducciones en la biblioteca', () => {
        expect(musicLibrary.getTotalPlays()).toBe(15000);
    });
});