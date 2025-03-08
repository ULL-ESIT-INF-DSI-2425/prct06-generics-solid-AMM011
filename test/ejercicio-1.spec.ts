import { describe, test, expect, beforeEach } from 'vitest';
import { BasicStreamableCollection } from '../src/ejercicio-1/BasicStreamableCollection';
import { SeriesCollection } from '../src/ejercicio-1/SeriesCollection';
import { MoviesCollection } from '../src/ejercicio-1/MoviesCollection';
import { DocumentariesCollection } from '../src/ejercicio-1/DocumentariesCollection';
import { Series } from '../src/ejercicio-1/StreamableItem';
import { Movies } from '../src/ejercicio-1/StreamableItem';
import { Documentary } from '../src/ejercicio-1/StreamableItem';

let mySeriesCollection: SeriesCollection;
let breakingBad: Series;
let strangerThings: Series;

let myMoviesCollection: MoviesCollection;
let inception: Movies;
let interstellar: Movies;

let myDocumentariesCollection: DocumentariesCollection;
let planetEarth: Documentary;
let theLastDance: Documentary;

beforeEach(() => {
    breakingBad = { title: 'Breaking Bad', year: 2008, seasons: 5, episodes: 62 };
    strangerThings = { title: 'Stranger Things', year: 2016, seasons: 4, episodes: 34 };
    mySeriesCollection = new SeriesCollection([breakingBad]);

    inception = { title: 'Inception', year: 2010, duration: 148, genre: 'Sci-Fi' };
    interstellar = { title: 'Interstellar', year: 2014, duration: 169, genre: 'Sci-Fi' };
    myMoviesCollection = new MoviesCollection([inception]);

    planetEarth = { title: 'Planet Earth', year: 2006, topic: 'Nature', duration: 5400 };
    theLastDance = { title: 'The Last Dance', year: 2020, topic: 'Sports', duration: 300 };
    myDocumentariesCollection = new DocumentariesCollection([planetEarth]);
});

describe('SeriesCollection Tests', () => {
    test('debería agregar una serie a la colección', () => {
        mySeriesCollection.addItem(strangerThings);
        expect(mySeriesCollection.getAllItems()).toContain(strangerThings);
    })

    test('debería eliminar una serie de la colección', () => {
        mySeriesCollection.removeItem(breakingBad);
        expect(mySeriesCollection.getAllItems()).not.toContain(breakingBad);
    });

    test('debería buscar por nombre correctamente', () => {
        const found = mySeriesCollection.searchByName('Breaking Bad');
        expect(found).toEqual([breakingBad]);
    });

    test(`debería buscar por año correctamente`, () => {
        const found = mySeriesCollection.searchByYear(2008);
        expect(found).toEqual([breakingBad]);
    });

    test('debería buscar por temporadas correctamente', () => { 
        const found = mySeriesCollection.searchBySeason(5);
        expect(found).toEqual([breakingBad]);
    });

    test('debería buscar por episodios correctamente', () => {  
        const found = mySeriesCollection.searchByEpisodes(62);
        expect(found).toEqual([breakingBad]);
    });
});

describe('MoviesCollection Tests', () => {
    test('debería agregar una película a la colección', () => {
        myMoviesCollection.addItem(interstellar);
        expect(myMoviesCollection.getAllItems()).toContain(interstellar);
    });

    test('debería eliminar una película de la colección', () => {
        myMoviesCollection.removeItem(inception);
        expect(myMoviesCollection.getAllItems()).not.toContain(inception);
    });

    test('debería buscar por nombre correctamente', () => {
        const found = myMoviesCollection.searchByName('Inception');
        expect(found).toEqual([inception]);
    });

    test(`debería buscar por año correctamente`, () => {
        const found = myMoviesCollection.searchByYear(2010);
        expect(found).toEqual([inception]);
    });

    test('debería buscar por duración correctamente', () => { 
        const found = myMoviesCollection.searchByDuration(148);
        expect(found).toEqual([inception]);
    });

    test('debería buscar por género correctamente', () => {  
        const found = myMoviesCollection.searchByGenre('Sci-Fi');
        expect(found).toEqual([inception]);
    });
});

describe('DocumentariesCollection Tests', () => {
    test('debería agregar un documental a la colección', () => {
        myDocumentariesCollection.addItem(theLastDance);
        expect(myDocumentariesCollection.getAllItems()).toContain(theLastDance);
    });

    test('debería eliminar un documental de la colección', () => {
        myDocumentariesCollection.removeItem(planetEarth);
        expect(myDocumentariesCollection.getAllItems()).not.toContain(planetEarth);
    });

    test('debería buscar por nombre correctamente', () => {
        const found = myDocumentariesCollection.searchByName('Planet Earth');
        expect(found).toEqual([planetEarth]);
    });

    test(`debería buscar por año correctamente`, () => {
        const found = myDocumentariesCollection.searchByYear(2006);
        expect(found).toEqual([planetEarth]);
    });

    test('debería buscar por tema correctamente', () => { 
        const found = myDocumentariesCollection.searchByTopic('Nature');
        expect(found).toEqual([planetEarth]);
    });

    test('debería buscar por duración correctamente', () => {  
        const found = myDocumentariesCollection.searchByDuration(5400);
        expect(found).toEqual([planetEarth]);
    });
});