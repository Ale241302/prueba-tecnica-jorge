# Ejercicios de Código

Esta carpeta contiene los ejercicios de código solicitados en la prueba técnica.

## Ejercicio 1 - Palíndromo

**Archivo**: `ejercicio1-palindromo.ts`

Implementa una función que determina si una palabra o frase es un palíndromo, ignorando mayúsculas, acentos y espacios.

**Uso:**
```typescript
import isPalindrome from './ejercicio1-palindromo';

isPalindrome("Ana"); // true
isPalindrome("A man a plan a canal Panama"); // true
isPalindrome("casa"); // false
```

## Ejercicio 2 - Lista sin duplicados

**Archivo**: `ejercicio2-lista-sin-duplicados.ts`

Dado un arreglo de objetos, devuelve una nueva lista sin duplicados según el campo `id`.

**Uso:**
```typescript
import uniqueUsers from './ejercicio2-lista-sin-duplicados';

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Carlos" },
  { id: 1, name: "Ana Duplicate" },
];

uniqueUsers(users); // [{ id: 1, name: "Ana" }, { id: 2, name: "Carlos" }]
```

## Ejercicio 3 - Rotación de matriz

**Archivo**: `ejercicio3-rotacion-matriz.ts`

Dada una matriz NxN, retorna la matriz rotada 90° hacia la derecha sin usar librerías.

**Uso:**
```typescript
import rotateMatrix from './ejercicio3-rotacion-matriz';

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

rotateMatrix(matrix);
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
```

## Tests

Los tests para estos ejercicios se encuentran en `src/utils/__tests__/`.

Ejecutar tests:
```bash
npm test
```

