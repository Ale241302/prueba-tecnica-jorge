/**
 * Ejercicio 2 - Lista sin duplicados
 * Dado un arreglo de objetos, devuelve una nueva lista sin duplicados según el campo id.
 */

type User = {
  id: number;
  name: string;
};

function uniqueUsers(list: User[]): User[] {
  // Usar Map para mantener solo el primer elemento con cada id único
  const uniqueMap = new Map<number, User>();

  for (const user of list) {
    // Solo agregar si el id no existe en el Map
    if (!uniqueMap.has(user.id)) {
      uniqueMap.set(user.id, user);
    }
  }

  // Convertir Map a array
  return Array.from(uniqueMap.values());
}

// Alternativa más concisa usando reduce:
// function uniqueUsers(list: User[]): User[] {
//   const seen = new Set<number>();
//   return list.filter(user => {
//     if (seen.has(user.id)) {
//       return false;
//     }
//     seen.add(user.id);
//     return true;
//   });
// }

// Ejemplo de uso:
// const users = [
//   { id: 1, name: "Ana" },
//   { id: 2, name: "Carlos" },
//   { id: 1, name: "Ana Duplicate" },
// ];
// uniqueUsers(users) => [{ id: 1, name: "Ana" }, { id: 2, name: "Carlos" }]

export default uniqueUsers;

