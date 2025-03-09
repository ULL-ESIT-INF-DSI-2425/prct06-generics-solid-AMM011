import { INotificationService } from "./INotificationService";

/**
 * Notifier class that uses the INotificationService to send notifications.
 * This class is responsible for sending notifications to users.
 */
export class Notifier {
    /**
     * Constructor for the Notifier class.
     * @param notificationService - An instance of a class that implements INotificationService.
     */
     // Constructor that takes an instance of INotificationService
    constructor(private notificationService: INotificationService) {}

    /**
     * Sends a notification using the provided notification service.
     * @param message - The message to be sent as a notification.
     */
    sendNotification(message: string): void {
        this.notificationService.notify(message);
    }
}