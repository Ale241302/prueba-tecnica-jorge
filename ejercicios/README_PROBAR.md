# Cómo Probar los Ejercicios

Hay varias formas de probar los ejercicios de código:

## Método 1: Ejecutar Tests Automatizados (Recomendado)

Los ejercicios ya tienen tests unitarios implementados. Para ejecutarlos:

```bash
npm test
```

Esto ejecutará todos los tests, incluyendo los de los ejercicios:
- `src/utils/__tests__/palindrome.test.ts`
- `src/utils/__tests__/uniqueUsers.test.ts`
- `src/utils/__tests__/rotateMatrix.test.ts`

Para ejecutar solo los tests de los ejercicios:

```bash
npm test -- ejercicios
```

## Método 2: Probar Manualmente con Node.js

### Opción A: Usar el script JavaScript (más fácil)

```bash
node ejercicios/probar-ejercicios.js
```

Este script probará todos los ejercicios y mostrará los resultados en consola.

### Opción B: Usar TypeScript directamente

Si tienes `ts-node` instalado:

```bash
npx ts-node ejercicios/probar-ejercicios.ts
```

O compilar primero y luego ejecutar:

```bash
npx tsc ejercicios/probar-ejercicios.ts
node ejercicios/probar-ejercicios.js
```

## Método 3: Probar en la Consola del Navegador

Puedes copiar y pegar el código de cada ejercicio en la consola del navegador:

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Copia y pega el código del ejercicio
4. Ejecuta la función con diferentes valores

Ejemplo:
```javascript
// Copiar función isPalindrome
function isPalindrome(word) {
  const normalized = word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Probar
isPalindrome("Ana"); // true
isPalindrome("casa"); // false
```

## Método 4: Usar un Playground Online

Puedes usar plataformas como:
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [CodeSandbox](https://codesandbox.io)
- [Repl.it](https://replit.com)

Simplemente copia el código del ejercicio y ejecútalo.

## Probar el Backend

Para probar el backend API:

1. **Iniciar el servidor:**
```bash
cd backend
npm install
npm start
```

2. **Probar los endpoints:**

### Con curl (terminal):
```bash
# Obtener todas las tareas
curl http://localhost:3000/api/tasks

# Crear una tarea
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Nueva tarea","completed":false}'

# Obtener una tarea por ID
curl http://localhost:3000/api/tasks/1

# Actualizar una tarea
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Tarea actualizada","completed":true}'

# Eliminar una tarea
curl -X DELETE http://localhost:3000/api/tasks/1
```

### Con Postman o Insomnia:
1. Importa la colección o crea requests manualmente
2. URL base: `http://localhost:3000/api`
3. Endpoints disponibles:
   - `GET /tasks` - Obtener todas las tareas
   - `GET /tasks/:id` - Obtener una tarea
   - `POST /tasks` - Crear tarea
   - `PUT /tasks/:id` - Actualizar tarea
   - `DELETE /tasks/:id` - Eliminar tarea

### Con el navegador:
Simplemente abre: `http://localhost:3000/api/tasks`

## Verificar que Todo Funciona

Ejecuta este comando para verificar que todo está correcto:

```bash
# 1. Ejecutar tests
npm test

# 2. Verificar linting
npm run lint

# 3. Iniciar backend y probar
cd backend && npm start
# En otra terminal:
curl http://localhost:3000/api/tasks
```

## Resultados Esperados

### Ejercicio 1 - Palíndromo
- ✅ `isPalindrome("Ana")` => `true`
- ✅ `isPalindrome("A man a plan a canal Panama")` => `true`
- ✅ `isPalindrome("casa")` => `false`

### Ejercicio 2 - Lista sin duplicados
- ✅ Input: `[{id:1,name:"Ana"},{id:2,name:"Carlos"},{id:1,name:"Ana Duplicate"}]`
- ✅ Output: `[{id:1,name:"Ana"},{id:2,name:"Carlos"}]`

### Ejercicio 3 - Rotación de matriz
- ✅ Matriz `[[1,2],[3,4]]` rotada => `[[3,1],[4,2]]`
- ✅ Matriz `[[1,2,3],[4,5,6],[7,8,9]]` rotada => `[[7,4,1],[8,5,2],[9,6,3]]`

### Backend
- ✅ `GET /api/tasks` retorna array de tareas
- ✅ `POST /api/tasks` crea nueva tarea
- ✅ `PUT /api/tasks/:id` actualiza tarea
- ✅ `DELETE /api/tasks/:id` elimina tarea

