import { Streamable } from "./Streamable";
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movies } from "./StreamableItem";

export class MoviesCollection extends BasicStreamableCollection<Movies> {
    /**
     * Constructor of the class
     */
    constructor (items: Movies[] = []) {
        super(items);
    }

    /**
     * 
     * @param name - Name of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the name
     */
    searchByName(name: string): Movies[] {
        return this.items.filter((item) => item.title.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * 
     * @param year - Year of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the year
     */
    searchByYear(year: number): Movies[] {
        return this.items.filter((item) => item.year === year);
    }

    /**
     * 
     * @param duration - Duration of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the duration
     */
    searchByDuration(duration: number): Movies[] {
        return this.items.filter((item) => item.duration === duration);
    }

    /**
     * 
     * @param genre - Genre of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the genre
     */
    searchByGenre(genre: string): Movies[] {
        return this.items.filter((item) => item.genre.toLowerCase().includes(genre.toLowerCase()));
    }
}