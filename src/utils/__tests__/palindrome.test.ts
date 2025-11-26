import isPalindrome from '../../../ejercicios/ejercicio1-palindromo';

describe('isPalindrome', () => {
  it('debe retornar true para un palíndromo simple', () => {
    expect(isPalindrome('ana')).toBe(true);
    expect(isPalindrome('reconocer')).toBe(true);
  });

  it('debe ignorar mayúsculas', () => {
    expect(isPalindrome('Ana')).toBe(true);
    expect(isPalindrome('Reconocer')).toBe(true);
    expect(isPalindrome('A')).toBe(true);
  });

  it('debe ignorar espacios', () => {
    expect(isPalindrome('a man a plan a canal panama')).toBe(true);
    expect(isPalindrome('anita lava la tina')).toBe(true);
  });

  it('debe ignorar acentos', () => {
    expect(isPalindrome('reconocer')).toBe(true);
    expect(isPalindrome('sometemos')).toBe(true);
  });

  it('debe retornar false para palabras que no son palíndromos', () => {
    expect(isPalindrome('casa')).toBe(false);
    expect(isPalindrome('hola')).toBe(false);
    expect(isPalindrome('mundo')).toBe(false);
  });

  it('debe manejar strings vacíos', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('debe manejar strings con un solo carácter', () => {
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('A')).toBe(true);
  });
});

