import { IScannable } from "./IScannable";
import { IPrintable } from "./IPrintable";

/**
 * Class PrinterScanner
 * This class implements both the IPrintable and IScannable interfaces,
 * allowing it to print and scan documents.
 */
export class PrinterScanner implements IPrintable, IScannable {
    /**
     * Prints the contents of the object.
     * @returns The contents of the object as a string.
     */
    public print(): void {
        console.log("Printing...");
    }
    /**
     * Scans the contents of the object.
     * @returns The scanned contents as a string.
     */
    public scan(): void {
        console.log("Scanning...");
    }
}