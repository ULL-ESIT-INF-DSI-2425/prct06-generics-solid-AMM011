/**
 * Interface representing a streamable item.
 */
export interface StreamableItem {
    title: string;
    year: number;
}

/**
 * Interface representing a streamable item.
 */
export interface Series extends StreamableItem {
    seasons: number;
    episodes: number;
}

/**
 * Interface representing a streamable item.
 */
export interface Movies extends StreamableItem {
    duration: number; 
    genre: string;
}

/**
 * Interface representing a streamable item.
 */
export interface Documentary extends StreamableItem {
    topic: string;
    duration: number;
}