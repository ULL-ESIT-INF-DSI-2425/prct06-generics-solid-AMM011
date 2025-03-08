import { Streamable } from "./Streamable";
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentary } from "./StreamableItem";

export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
    /**
     * Constructor of the class
     */
    constructor (items: Documentary[] = []) {
        super(items);
    }

    /**
     * 
     * @param name - Name of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the name
     */
    searchByName(name: string): Documentary[] {
        return this.items.filter((item) => item.title.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * 
     * @param year - Year of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the year
     */
    searchByYear(year: number): Documentary[] {
        return this.items.filter((item) => item.year === year);
    }

    /**
     * 
     * @param topic - Topic of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the topic
     */
    seachByTopic(topic: string): Documentary[] {
        return this.items.filter((item) => item.topic.toLowerCase().includes(topic.toLowerCase()));
    }

    /**
     * 
     * @param duration - Duration of the movie or serie or documentary
     * @returns Array of movies or series or documentary that match the duration
     */
    searchByDuration(duration: number): Documentary[] {
        return this.items.filter((item) => item.duration === duration);
    }
}