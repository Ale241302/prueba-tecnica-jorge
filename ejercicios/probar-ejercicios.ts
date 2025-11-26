/**
 * Script para probar manualmente los ejercicios
 * Ejecutar con: npx ts-node ejercicios/probar-ejercicios.ts
 * O compilar y ejecutar: tsc ejercicios/probar-ejercicios.ts && node ejercicios/probar-ejercicios.js
 */

import isPalindrome from './ejercicio1-palindromo';
import uniqueUsers from './ejercicio2-lista-sin-duplicados';
import rotateMatrix from './ejercicio3-rotacion-matriz';

console.log('🧪 PROBANDO EJERCICIOS DE CÓDIGO\n');
console.log('='.repeat(50));

// Ejercicio 1 - Palíndromo
console.log('\n📝 EJERCICIO 1 - Palíndromo\n');

const palindromos = [
  'Ana',
  'reconocer',
  'A man a plan a canal Panama',
  'anita lava la tina',
  'casa',
  'hola',
  '',
  'A',
];

palindromos.forEach(word => {
  const result = isPalindrome(word);
  const icon = result ? '✅' : '❌';
  console.log(`${icon} isPalindrome("${word}") => ${result}`);
});

// Ejercicio 2 - Lista sin duplicados
console.log('\n📝 EJERCICIO 2 - Lista sin duplicados\n');

const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Carlos' },
  { id: 1, name: 'Ana Duplicate' },
  { id: 3, name: 'María' },
  { id: 2, name: 'Carlos Duplicate' },
];

console.log('Input:', JSON.stringify(users, null, 2));
const unique = uniqueUsers(users);
console.log('Output:', JSON.stringify(unique, null, 2));
console.log(`✅ Eliminados ${users.length - unique.length} duplicados`);

// Ejercicio 3 - Rotación de matriz
console.log('\n📝 EJERCICIO 3 - Rotación de matriz\n');

const matrix2x2 = [
  [1, 2],
  [3, 4],
];

const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix4x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log('Matriz 2x2:');
console.log('Original:');
matrix2x2.forEach(row => console.log(row));
console.log('Rotada 90°:');
const rotated2x2 = rotateMatrix(matrix2x2);
rotated2x2.forEach(row => console.log(row));

console.log('\nMatriz 3x3:');
console.log('Original:');
matrix3x3.forEach(row => console.log(row));
console.log('Rotada 90°:');
const rotated3x3 = rotateMatrix(matrix3x3);
rotated3x3.forEach(row => console.log(row));

console.log('\nMatriz 4x4:');
console.log('Original:');
matrix4x4.forEach(row => console.log(row));
console.log('Rotada 90°:');
const rotated4x4 = rotateMatrix(matrix4x4);
rotated4x4.forEach(row => console.log(row));

console.log('\n' + '='.repeat(50));
console.log('✅ Todas las pruebas completadas\n');

