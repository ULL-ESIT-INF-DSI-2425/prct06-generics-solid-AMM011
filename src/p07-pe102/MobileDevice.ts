import { Observer } from "./Observer.js";
import { Observable } from "./Observable.js";

/**
 * Clase que implementa la interfaz Observer.
 * Representa un dispositivo móvil que recibe notificaciones de la estación meteorológica.
 */
export class MobileDevice implements Observer {
    private id: number;
  
    /**
     * Crea una instancia de MobileDevice.
     * @param id - Identificador único del dispositivo.
     */
    constructor(id: number) {
      this.id = id;
    }
  
    /**
     * Recibe la actualización del Observable.
     * @param data - Instancia del Observable con la información meteorológica actualizada.
     */
    update(data: Observable): void {
      // Se asume que data es una instancia de WeatherStation que posee la propiedad weatherData.
      console.log(`MobileDevice ${this.id} actualiza su información:`, (data as any).weatherData);
    }
  }