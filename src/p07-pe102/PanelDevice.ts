import { Observer } from "./Observer.js";
import { Observable } from "./Observable.js";

/**
 * Clase que implementa la interfaz Observer.
 * Representa un panel que muestra las actualizaciones meteorológicas.
 */
export class PanelDevice implements Observer {
  private id: number;

  /**
   * Crea una instancia de PanelDevice.
   * @param id - Identificador único del panel.
   */
  constructor(id: number) {
    this.id = id;
  }

  /**
   * Recibe la actualización del Observable.
   * @param data - Instancia del Observable con la información meteorológica actualizada.
   */
    update(data: Observable): void {
        console.log(`PanelDevice ${this.id} muestra la información:`, (data as any).weatherData);
    }
}