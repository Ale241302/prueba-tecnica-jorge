/**
 * Script para probar manualmente los ejercicios (versión JavaScript)
 * Ejecutar con: node ejercicios/probar-ejercicios.js
 */

// Ejercicio 1 - Palíndromo
function isPalindrome(word) {
  const normalized = word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '');

  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Ejercicio 2 - Lista sin duplicados
function uniqueUsers(list) {
  const uniqueMap = new Map();
  for (const user of list) {
    if (!uniqueMap.has(user.id)) {
      uniqueMap.set(user.id, user);
    }
  }
  return Array.from(uniqueMap.values());
}

// Ejercicio 3 - Rotación de matriz
function rotateMatrix(matrix) {
  const n = matrix.length;
  if (n === 0 || matrix.some(row => row.length !== n)) {
    throw new Error('La matriz debe ser cuadrada (NxN)');
  }

  const rotated = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }

  return rotated;
}

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

console.log('\n' + '='.repeat(50));
console.log('✅ Todas las pruebas completadas\n');

