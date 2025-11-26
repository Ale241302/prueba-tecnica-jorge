/**
 * Ejercicio 3 - Rotación de matriz
 * Dada una matriz NxN, retorna la matriz rotada 90° hacia la derecha sin usar librerías.
 */

function rotateMatrix(matrix: number[][]): number[][] {
  const n = matrix.length;

  // Validar que sea una matriz cuadrada
  if (n === 0 || matrix.some(row => row.length !== n)) {
    throw new Error('La matriz debe ser cuadrada (NxN)');
  }

  // Crear una nueva matriz con las mismas dimensiones
  const rotated: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  // Rotar 90° hacia la derecha:
  // El elemento en [i][j] va a [j][n-1-i]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }

  return rotated;
}

// Ejemplo de uso:
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// rotateMatrix(matrix) => [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

export default rotateMatrix;

