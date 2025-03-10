import { describe, test, expect, beforeEach } from 'vitest';
import { GenericList } from '../src/PE102/GenericList';

let numberList: GenericList<number>;
let stringList: GenericList<string>;
let mixedList: GenericList<number | string>;

beforeEach(() => {
    numberList = new GenericList([1, 2, 3, 4, 5]);
    stringList = new GenericList(['a', 'b', 'c']);
    mixedList = new GenericList([1, 'two', 3, 'four']);
});

describe('GenericList Test', () => {
    test('debería calcular la longitud de la lista', () => {
        expect(numberList.length()).toBe(5);
        expect(stringList.length()).toBe(3);
        expect(mixedList.length()).toBe(4);
      });
    
      test('debería agregar elementos de otra lista con append', () => {
        const newList = new GenericList([6, 7, 8]);
        numberList.append(newList);
        expect(numberList.length()).toBe(8);
    
        const emptyList = new GenericList<number>();
        numberList.append(emptyList);
        expect(numberList.length()).toBe(8);
    
        const singleElementList = new GenericList([9]);
        numberList.append(singleElementList);
        expect(numberList.length()).toBe(9);
      });
    
      test('debería concatenar múltiples listas', () => {
        const result = numberList.concatenate(new GenericList([6, 7]), new GenericList([8, 9]));
        expect(result.length()).toBe(9);
    
        const emptyConcat = numberList.concatenate();
        expect(emptyConcat.length()).toBe(5);
    
        const singleConcat = numberList.concatenate(new GenericList([10]));
        expect(singleConcat.length()).toBe(6);
      });
    
      test('debería filtrar elementos según el predicado', () => {
        const filtered = numberList.filter(n => n % 2 === 0);
        expect(filtered.length()).toBe(2);
    
        const allPass = numberList.filter(n => n > 0);
        expect(allPass.length()).toBe(5);
    
        const nonePass = numberList.filter(n => n > 10);
        expect(nonePass.length()).toBe(0);
      });
    
      test('debería mapear elementos y transformar la lista', () => {
        const mapped = numberList.map(n => n * 2);
        expect(mapped.length()).toBe(5);
    
        const stringMapped = stringList.map(s => s.toUpperCase());
        expect(stringMapped.length()).toBe(3);
    
        const booleanMapped = numberList.map(n => n + 2);
        expect(booleanMapped.length()).toBe(5);
      });

      test('debería reducir la lista a un único valor', () => {
        const sum = numberList.reduce((acc, val) => acc + val, 0);
        expect(sum).toBe(15);
    
        const product = numberList.reduce((acc, val) => acc * val, 1);
        expect(product).toBe(120);
    
        const stringConcat = stringList.reduce((acc, val) => acc + val, '');
        expect(stringConcat).toBe('abc');
      });

      test('debería revertir los elementos de la lista', () => {
        const reversedString = stringList.reverse();
        expect(reversedString.reduce((acc, val) => acc + val, '')).toBe('cba');
    
        const reversedEmpty = new GenericList<number>().reverse();
        expect(reversedEmpty.length()).toBe(0);
      });

      test('debería ejecutar una función en cada elemento con forEach', () => {
        let count = 0;
        numberList.forEach(() => count++);
        expect(count).toBe(5);
    
        let stringConcat = '';
        stringList.forEach(s => (stringConcat += s));
        expect(stringConcat).toBe('abc');
      });
})