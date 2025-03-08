/**
 * Interface that represents a streamable object
 * @template T - Type of the object that is streamable
 */
export interface Searchable<T> {
    /**
     * Search by name
     * @param name - Name of the movie or serie or documentary
     * @return - Array of movies or series or documentary that match the name
     */
    searchByName(name: string): T[];

    /**
     * Search by year 
     * @param year - Year of thbe movie or serie or documentary
     * @ return - Array of movies or series or documentary that match the year
     */
    searchByYear(year: number): T[];
}

/**
 * Interface that represents a streamable object
 * @template T - Type of the object that is streamable
 */
export interface Modifiable<T> {
    /**
     * Add a element to the list
     * @param element - Element to add
     */
    addItem(item: T): void;
    /**
     * Remove a element from the list
     * @param element - Element to remove
     */
    removeItem(item: T): void;
}

/**
 * Interface that represents a streamable object
 * @template T - Type of the object that is streamable
 */
export interface Streamable<T> extends Searchable<T>, Modifiable<T> {
    /**
     * Get all the items
     * @return - Array of all the items
     */
    getAllItems(): T[];
}