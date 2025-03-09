import { describe, test, expect, vi } from "vitest";
import { EmailService } from "../src/ejercicio-5/EmailService";
import { Notifier } from "../src/ejercicio-5/Notifier";
import { ShortMessageService } from "../src/ejercicio-5/ShortMessageService";

// Mock para capturar console.log
const consoleSpy = vi.spyOn(console, "log");

describe('EmailService Tests', () => {
    test('debería imprimir correctamente', () => {
        const Email = new EmailService();
        Email.notify("Mensaje de prueba");
        expect(consoleSpy).toHaveBeenCalledWith("Sending notification by email: Mensaje de prueba");
    })
});

describe('ShortMessageService Tests', () => {
    test('debería imprimir correctamente', () => {
        const sms = new ShortMessageService();
        sms.notify("Mensaje de prueba");
        expect(consoleSpy).toHaveBeenCalledWith("Sending notification by SMS: Mensaje de prueba");
    })
});

describe('Notifier Tests', () => {
    test(`debería imprimir correctamente`, () => {
        const emailService = new EmailService();
        const notifier = new Notifier(emailService);
        notifier.sendNotification("Mensaje de prueba");
        expect(consoleSpy).toHaveBeenCalledWith("Sending notification by email: Mensaje de prueba");
    })
});