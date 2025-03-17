// src/models/WeatherStation.ts
import { Observable } from "./Observable.js";
import { Observer } from "./Observer.js";

/**
 * Clase que implementa la interfaz Observable.
 * Representa una estación meteorológica que notifica a sus observadores cada vez que cambia la información del clima.
 */
export class WeatherStation implements Observable {
  private observers: Observer[] = [];
  
  /**
   * Propiedad que almacena la información meteorológica actual.
   */
  public weatherData: any;

  /**
   * Registra un observador.
   * @param observer - Observador a registrar.
   */
  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  /**
   * Elimina un observador.
   * @param observer - Observador a eliminar.
   */
  detach(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  /**
   * Notifica a todos los observadores llamando a su método update y pasando la información actual.
   */
  notify(): void {
    this.observers.forEach(observer => observer.update(this));
  }

  /**
   * Actualiza la información meteorológica y notifica a los observadores.
   * @param newData - Nueva información meteorológica.
   */
  public updateWeather(newData: any): void {
    this.weatherData = newData;
    console.log(`WeatherStation: Actualizando datos meteorológicos -> ${JSON.stringify(this.weatherData)}`);
    this.notify();
  }
}
