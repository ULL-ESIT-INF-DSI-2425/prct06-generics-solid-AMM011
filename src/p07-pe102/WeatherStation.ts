import { Observer } from './Observer';

/**
 * Clase que representa una estación meteorológica que notifica eventos a sus observadores.
 */
export class WeatherStation {
    private observers: Observer[] = [];
    private temperature: number = 0;

    /**
     * Agrega un observador a la lista de notificaciones.
     */
    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    /**
     * Elimina un observador de la lista de notificaciones.
     * @param observer - Observador a eliminar.
     */
    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    /**
     * Notifica a todos los observadores con un mensaje de actualización.
     */
    notifyObserver(message: string): void{
        this.observers.forEach(observer => observer.update(message));
    }

    /**
     * Cambia la temperatura y notifica a los observadores.
     * @param newTemparature - Nueva temperatura.
     */
    setTemperature(newTemparature: number): void {
        this.temperature = newTemparature;
        this.notifyObserver(`Nueva temperatura: ${newTemparature} C`);
    }

    /**
     * Simula un evento meteorológico y notifica a los observadores
     * @param event - Descripción del evento.
     */
    triggerWeatherEvent(event: string): void {
        this.notifyObserver(`Evento meteorológico: ${event}`);
    }
}