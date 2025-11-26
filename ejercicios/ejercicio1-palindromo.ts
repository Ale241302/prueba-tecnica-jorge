/**
 * Ejercicio 1 - Palíndromo
 * Implementa una función en TypeScript que determine si una palabra o frase es un palíndromo.
 * Debe ignorar mayúsculas, acentos y espacios.
 */

function isPalindrome(word: string): boolean {
  // Normalizar la palabra: convertir a minúsculas, eliminar acentos y espacios
  const normalized = word
    .toLowerCase()
    .normalize('NFD') // Descompone caracteres con acentos
    .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos (acentos)
    .replace(/\s+/g, ''); // Elimina todos los espacios

  // Comparar la palabra normalizada con su reverso
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}

// Ejemplos de uso:
// isPalindrome("Ana") => true
// isPalindrome("A man a plan a canal Panama") => true
// isPalindrome("reconocer") => true
// isPalindrome("casa") => false

export default isPalindrome;

