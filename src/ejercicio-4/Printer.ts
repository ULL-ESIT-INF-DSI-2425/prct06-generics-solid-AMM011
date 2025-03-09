import { IPrintable } from './IPrintable';
/**
 * Class Printer
 * This class implements the IPrintable interface and provides a method to print the contents of the object.
 */
export class Printer implements IPrintable {
    /**
     * Prints the contents of the object.
     * @returns The contents of the object as a string.
     */
    public print(): void {
        console.log("Printing...");
    }
}