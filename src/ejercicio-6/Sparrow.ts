import { IFlyingBird } from "./IFlyingBird";
/**
 * Class Sparrow
 * @description Class that implements the IFlyingBird interface.
 */
export class Sparrow implements IFlyingBird {
    /**
     * Method to simulate the eating behavior of a sparrow.
     */
    eat(): void {
        console.log("The sparrow is eating.");
    }
    /**
     * Method to simulate the flying behavior of a sparrow.
     */
    fly(): void {
        console.log("The sparrow is flying.");
    }
}