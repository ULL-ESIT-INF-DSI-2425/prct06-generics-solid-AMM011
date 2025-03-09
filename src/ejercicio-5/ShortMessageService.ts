import { INotificationService } from "./INotificationService";

export class ShortMessageService implements INotificationService {
        /**
     * Print the content of the message
     * @param message - SMS to print
     */
        notify(message: string): void {
            console.log(`Sending notification by SMS: ${message}`);
        }
}