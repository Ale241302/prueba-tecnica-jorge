import uniqueUsers from '../../../ejercicios/ejercicio2-lista-sin-duplicados';

describe('uniqueUsers', () => {
  it('debe eliminar usuarios duplicados por id', () => {
    const users = [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Carlos' },
      { id: 1, name: 'Ana Duplicate' },
    ];

    const result = uniqueUsers(users);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Ana');
    expect(result[1].name).toBe('Carlos');
  });

  it('debe mantener el primer usuario cuando hay duplicados', () => {
    const users = [
      { id: 1, name: 'Primero' },
      { id: 1, name: 'Segundo' },
      { id: 1, name: 'Tercero' },
    ];

    const result = uniqueUsers(users);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Primero');
  });

  it('debe retornar un array vacío si el input está vacío', () => {
    expect(uniqueUsers([])).toEqual([]);
  });

  it('debe retornar el mismo array si no hay duplicados', () => {
    const users = [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Carlos' },
      { id: 3, name: 'María' },
    ];

    const result = uniqueUsers(users);
    expect(result).toHaveLength(3);
    expect(result).toEqual(users);
  });
});

