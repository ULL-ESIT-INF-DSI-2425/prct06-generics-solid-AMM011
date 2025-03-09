import { INotificationService } from "./INotificationService";

/**
 * Class EmailService
 * This class implements the INotificationService interface and provides a method to print the contents of the object.
 */
export class EmailService implements INotificationService {
    /**
     * Print the content of the message
     * @param message - Email to print
     */
    notify(message: string): void {
        console.log(`Sending notification by email: ${message}`);
    }
}