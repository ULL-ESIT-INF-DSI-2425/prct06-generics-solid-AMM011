import { IScannable } from "./IScannable";
/**
 * Class representing a scanner.
 * This class implements the IScannable interface and provides a method to scan documents.
 */
export class Scanner implements IScannable {
    /**
     * Scans the contents of the object.
     * @returns The scanned contents as a string.
     */
    public scan(): void {
        console.log("Scanning...");
    }
}