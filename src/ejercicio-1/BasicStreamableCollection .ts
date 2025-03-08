import { Streamable } from "./Streamable";

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    /**
     * @param items - Array of items
     */
    protected items: T[];

    /**
     * Constructor of the class
     * @param items - Array of items
     */
    constructor(items: T[]) {
        this.items = items;
    }

    /**
     * Add a element to the list
     * @param item - Element to add
     */
    addItem(item: T): void {
        this.items.push(item);
    }

    /**
     * Remove a element from the list
     * @param item - Element to remove
     */
    removeItem(item: T): void {
        this.items = this.items.filter((i) => i !== item);
    }

    /**
     * Get all the items
     * @return - Array of all the items
     */
    getAllItems(): T[] {
        return this.items;
    }

    /**
     * Abstract method to search items by name
     * @param name - The name to search for
     * @return An array of items that match the name
     */
    abstract searchByName(name: string): T[];

    /**
     * Abstract method to search items by year
     * @param year - The year to search for
     * @return An array of items that match the year
     */
    abstract searchByYear(year: number): T[];

    /**
     * Abstract method to search items by genre
     * @param genre - The genre to search for
     * @return An array of items that match the genre
     */
    abstract searchByGenre(genre: string): T[];

    /**
     * Abstract method to search items by director
     * @param director - The director to seach for
     * @return An array of items that match the director
     */
    abstract searchByDirector(director: string): T[];
}