import { INonFlyingBird } from "./INonFlyingBird";

/**
 * Class Penguin
 * @description Class that implements the INonFlyingBird interface.
 */
export class Penguin implements INonFlyingBird {
    /**
     * Method to simulate the eating behavior of a penguin.
     */
    eat(): void {
        console.log("The penguin is eating.");
    }
    /**
     * Method to simulate the swimming behavior of a penguin.
     */
    swim(): void {
        console.log("The penguin is swimming.");
    }
}