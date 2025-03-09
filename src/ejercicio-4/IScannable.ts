/**
 * Interface for objects that can be scanned.
 * This interface defines a contract for classes that can be scanned.
 */
export interface IScannable {
    /**
     * Scans the contents of the object.
     * @returns The scanned contents as a string.
     */
    scan(): void;
}