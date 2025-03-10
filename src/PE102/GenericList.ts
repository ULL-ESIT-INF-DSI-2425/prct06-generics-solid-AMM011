/**
 * Clase genérica que representa una lista de elementos de tipo T.
 */
export class GenericList<T> {
    /**
     * Almacén interno para los elementos de la lista.
     */
    private items: T[] = [];
  
    /**
     * Constructor opcional que permite inicializar la lista con elementos.
     * @param elements - Elementos iniciales de la lista.
     */
    constructor(elements?: T[]) {
      if (elements) {
        this.items = [...elements];
      }
    }
  
    /**
     * Retorna el número de elementos en la lista.
     * @returns Número de elementos en la lista.
     */
    length(): number {
      return this.items.length;
    }

    /**
     * Añade al final de la lista actual los elementos de otra lista.
     * @param list - Lista cuyos elementos serán añadidos al final de la lista actual.
     */
    append(list: GenericList<T>): void {
        for (let i = 0; i < list.length(); i++) {
            this.items[this.items.length] = list.items[i];
        }
    }

    /**
     * Combina múltiples listas en una nueva lista sin modificar las originales.
     * @param lists - Listas a combinar.
     * @returns Una nueva lista con los elementos combinados.
    */
    concatenate(...lists: GenericList<T>[]): GenericList<T> {
        const newList = new GenericList<T>(this.items);
        for (const list of lists) {
            newList.append(list);
        }
        return newList;
    }

    /**
     * Filtra los elementos de la lista según un predicado lógico.
     * @param predicate - Función que determina si un elemento debe incluirse en la nueva lista.
     * @returns Una nueva lista con los elementos que cumplen el predicado.
     */
    filter(predicate: (item: T) => boolean): GenericList<T> {
        const filteredList = new GenericList<T>();
        for (let i = 0; i < this.length(); i++) {
            if (predicate(this.items[i])) {
                filteredList.items[filteredList.length()] = this.items[i];
            }
        }
        return filteredList;
    }

    /**
     * Aplica una función a cada elemento de la lista y retorna una nueva lista con los valores transformados.
     * Los elementos de Tipo T se tranforman a elementos de Tipo U.
     * @param fn - Función de transformación.
     * @returns Una nueva lista con los elementos transformados.
     */
    map<U>(fn: (item: T) => U): GenericList<U> {
        const mappedList = new GenericList<U>();
        for (let i = 0; i < this.length(); i++) {
            mappedList.items[mappedList.length()] = fn(this.items[i]);
        }
        return mappedList;
    }

  }
  