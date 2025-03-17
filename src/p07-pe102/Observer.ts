import { Observable } from "./Observable";

/**
 * Interfaz que define el comportamiento de los dispositivos observadores.
 * S (Single Responsibility): La interfaz solo define qué es un observador, no cómo se comportan los sujetos.
 * L (Liskov Substitution): Cualquier observador puede intercambiarse sin romper el código.
 */
export interface Observer {
    /**
     * Método que recibe actualizaciones desde la estación meteorológica.
     * @param data Información meteorológica actualizada.
     */
    update(data: Observable): void;
}