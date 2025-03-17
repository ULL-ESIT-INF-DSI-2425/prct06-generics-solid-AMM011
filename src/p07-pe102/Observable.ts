import { Observer } from './Observer.js';

/**
 * Interfaz que define el comportamiento del observable.
 */
export interface Observable {
    /**
     * Registraun observador.
     * @param observer - Observador a registrar.
     */
    attach(observer: Observer): void;

    /**
     * Elimina un observador.
     * @param observer - Observador a eliminar.
     */
    detach(observer: Observer): void;

    /**
     * Notifica llamando a update.
     */
    notify(): void;
}