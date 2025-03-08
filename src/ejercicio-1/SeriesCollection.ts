import { Streamable } from "./Streamable";
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Series } from "./StreamableItem";

export class SeriesCollection extends BasicStreamableCollection<Series> {
    /**
     * Constructor of the class
     */
    constructor (items: Series[] = []) {
        super(items);
    }

    /**
     * 
     * @param name - Name of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the name
     */
    searchByName(name: string): Series[] {
        return this.items.filter((item) => item.title.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * 
     * @param year - Year of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the year
     */
    searchByYear(year: number): Series[] {
        return this.items.filter((item) => item.year === year);
    }

    /**
     * 
     * @param season - Season of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the season
     */
    searchBySeason(season: number): Series[] {
        return this.items.filter((item) => item.seasons === season);
    }

    /**
     * 
     * @param episodes - Episodes of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the episodes
     */
    searchByEpisodes(episodes: number): Series[] {
        return this.items.filter((item) => item.episodes === episodes);
    }
}