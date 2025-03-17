import { describe, test, expect, beforeEach, vi } from 'vitest';
import { WeatherStation } from '../src/p07-pe102/WeatherStation.js';
import { MobileDevice } from '../src/p07-pe102/MobileDevice.js';
import { PanelDevice } from '../src/p07-pe102/PanelDevice.js';

let weatherStation: WeatherStation;
let mobile: MobileDevice;
let panel: PanelDevice;

beforeEach(() => {
    weatherStation = new WeatherStation();
    mobile = new MobileDevice(1);
    panel = new PanelDevice(1);
})

describe('Pruebas del patrón Observer', () => {
    test('Notifica a los observadores cuando se actualiza el clima', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      weatherStation.attach(mobile);
      weatherStation.attach(panel);
      const weatherData = { temperatura: '30°C' };
  
      weatherStation.updateWeather(weatherData);
  
      const calls = consoleSpy.mock.calls;
      // Primera llamada: WeatherStation
      expect(calls[0][0]).toBe(
        `WeatherStation: Actualizando datos meteorológicos -> ${JSON.stringify(weatherData)}`
      );
      // Segunda llamada: MobileDevice
      expect(calls[1][0]).toBe('MobileDevice 1 actualiza su información:');
      expect(calls[1][1]).toEqual(weatherData);
      // Tercera llamada: PanelDevice
      expect(calls[2][0]).toBe('PanelDevice 1 muestra la información:');
      expect(calls[2][1]).toEqual(weatherData);
  
      consoleSpy.mockRestore();
    });
  
    test('No notifica a un observador que fue removido', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      weatherStation.attach(mobile);
      weatherStation.attach(panel);
      weatherStation.detach(panel);
      const weatherData = { temperatura: '18°C' };
  
      weatherStation.updateWeather(weatherData);
  
      const calls = consoleSpy.mock.calls;
      // Primera llamada: WeatherStation
      expect(calls[0][0]).toBe(
        `WeatherStation: Actualizando datos meteorológicos -> ${JSON.stringify(weatherData)}`
      );
      // Segunda llamada: MobileDevice
      expect(calls[1][0]).toBe('MobileDevice 1 actualiza su información:');
      expect(calls[1][1]).toEqual(weatherData);
      // No debe haber llamada para PanelDevice
      expect(calls.length).toBe(2);
  
      consoleSpy.mockRestore();
    });
  });