import rotateMatrix from '../../../ejercicios/ejercicio3-rotacion-matriz';

describe('rotateMatrix', () => {
  it('debe rotar una matriz 2x2 correctamente', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [3, 1],
      [4, 2],
    ];
    expect(rotateMatrix(matrix)).toEqual(expected);
  });

  it('debe rotar una matriz 3x3 correctamente', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    expect(rotateMatrix(matrix)).toEqual(expected);
  });

  it('debe rotar una matriz 4x4 correctamente', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];
    expect(rotateMatrix(matrix)).toEqual(expected);
  });

  it('debe manejar una matriz 1x1', () => {
    const matrix = [[42]];
    expect(rotateMatrix(matrix)).toEqual([[42]]);
  });

  it('debe lanzar error si la matriz no es cuadrada', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5],
    ];
    expect(() => rotateMatrix(matrix)).toThrow();
  });
});

