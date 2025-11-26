# 🧪 Cómo Probar los Ejercicios - Guía Completa

## 📋 Resumen Rápido

Tienes **4 formas principales** de probar los ejercicios:

1. ✅ **Tests automatizados** (Recomendado) - `npm test`
2. ✅ **Script manual** - `node ejercicios/probar-ejercicios.js`
3. ✅ **Consola del navegador** - Copiar y pegar código
4. ✅ **Playground online** - TypeScript Playground, CodeSandbox, etc.

---

## 🚀 Método 1: Tests Automatizados (RECOMENDADO)

Los ejercicios ya tienen tests unitarios implementados. Esta es la forma más profesional:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar solo tests de ejercicios
npm test -- ejercicios
```

**Ventajas:**
- ✅ Verificación automática
- ✅ Múltiples casos de prueba
- ✅ Formato profesional
- ✅ Integrado con Jest

**Resultado esperado:**
```
PASS  src/utils/__tests__/palindrome.test.ts
PASS  src/utils/__tests__/uniqueUsers.test.ts
PASS  src/utils/__tests__/rotateMatrix.test.ts

Test Suites: 3 passed, 3 total
Tests:       15 passed, 15 total
```

---

## 🎯 Método 2: Script Manual (MÁS FÁCIL)

He creado un script que puedes ejecutar directamente:

```bash
node ejercicios/probar-ejercicios.js
```

**Ventajas:**
- ✅ Muy fácil de usar
- ✅ Muestra resultados visuales
- ✅ No requiere configuración adicional

**Resultado:**
Verás todos los ejercicios probados con sus resultados en consola.

---

## 🌐 Método 3: Consola del Navegador

1. Abre tu navegador (Chrome, Firefox, Edge)
2. Presiona `F12` para abrir las herramientas de desarrollador
3. Ve a la pestaña **Console**
4. Copia y pega el código del ejercicio

### Ejemplo - Ejercicio 1:

```javascript
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
console.log(isPalindrome("Ana")); // true
console.log(isPalindrome("casa")); // false
```

### Ejemplo - Ejercicio 2:

```javascript
function uniqueUsers(list) {
  const uniqueMap = new Map();
  for (const user of list) {
    if (!uniqueMap.has(user.id)) {
      uniqueMap.set(user.id, user);
    }
  }
  return Array.from(uniqueMap.values());
}

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Carlos" },
  { id: 1, name: "Ana Duplicate" },
];

console.log(uniqueUsers(users));
```

### Ejemplo - Ejercicio 3:

```javascript
function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotated = Array(n).fill(null).map(() => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }
  
  return rotated;
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateMatrix(matrix));
```

---

## 💻 Método 4: Playground Online

### TypeScript Playground
1. Ve a: https://www.typescriptlang.org/play
2. Copia el código del ejercicio
3. Ejecuta y ve los resultados

### CodeSandbox
1. Ve a: https://codesandbox.io
2. Crea un nuevo proyecto Node.js
3. Copia el código y ejecuta

---

## 🔧 Probar el Backend

### Paso 1: Iniciar el servidor

```bash
cd backend
npm install  # Solo la primera vez
npm start
```

Deberías ver:
```
🚀 Servidor corriendo en http://localhost:3000
📋 Endpoints disponibles:
   GET    /api/tasks
   GET    /api/tasks/:id
   POST   /api/tasks
   PUT    /api/tasks/:id
   DELETE /api/tasks/:id
```

### Paso 2: Probar los endpoints

#### Opción A: Navegador (solo GET)
Abre en tu navegador:
```
http://localhost:3000/api/tasks
```

Deberías ver un JSON como:
```json
[
  {
    "id": 1,
    "title": "Demo item",
    "completed": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Opción B: PowerShell (Windows)

```powershell
# Obtener todas las tareas
Invoke-RestMethod -Uri http://localhost:3000/api/tasks -Method Get

# Crear una tarea
$body = @{
    title = "Nueva tarea"
    completed = $false
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:3000/api/tasks -Method Post -Body $body -ContentType "application/json"

# Actualizar una tarea
$body = @{
    title = "Tarea actualizada"
    completed = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:3000/api/tasks/1 -Method Put -Body $body -ContentType "application/json"

# Eliminar una tarea
Invoke-RestMethod -Uri http://localhost:3000/api/tasks/1 -Method Delete
```

#### Opción C: Postman o Insomnia

1. **GET** `http://localhost:3000/api/tasks` - Obtener todas las tareas
2. **POST** `http://localhost:3000/api/tasks` - Crear tarea
   - Body (JSON):
     ```json
     {
       "title": "Mi nueva tarea",
       "completed": false
     }
     ```
3. **GET** `http://localhost:3000/api/tasks/1` - Obtener tarea por ID
4. **PUT** `http://localhost:3000/api/tasks/1` - Actualizar tarea
   - Body (JSON):
     ```json
     {
       "title": "Tarea actualizada",
       "completed": true
     }
     ```
5. **DELETE** `http://localhost:3000/api/tasks/1` - Eliminar tarea

#### Opción D: curl (si tienes Git Bash o WSL)

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

---

## ✅ Verificación Completa

Para verificar que **todo funciona correctamente**, ejecuta:

```bash
# 1. Probar ejercicios con script manual
node ejercicios/probar-ejercicios.js

# 2. Ejecutar tests automatizados
npm test

# 3. Verificar linting
npm run lint

# 4. Iniciar backend (en otra terminal)
cd backend
npm start

# 5. Probar backend (en navegador o con PowerShell)
# Abre: http://localhost:3000/api/tasks
```

---

## 📊 Resultados Esperados

### ✅ Ejercicio 1 - Palíndromo
- `isPalindrome("Ana")` → `true`
- `isPalindrome("A man a plan a canal Panama")` → `true`
- `isPalindrome("casa")` → `false`

### ✅ Ejercicio 2 - Lista sin duplicados
- Input: `[{id:1,name:"Ana"},{id:2,name:"Carlos"},{id:1,name:"Ana Duplicate"}]`
- Output: `[{id:1,name:"Ana"},{id:2,name:"Carlos"}]`

### ✅ Ejercicio 3 - Rotación de matriz
- `[[1,2],[3,4]]` rotada → `[[3,1],[4,2]]`
- `[[1,2,3],[4,5,6],[7,8,9]]` rotada → `[[7,4,1],[8,5,2],[9,6,3]]`

### ✅ Backend
- `GET /api/tasks` → Retorna array de tareas
- `POST /api/tasks` → Crea nueva tarea
- `PUT /api/tasks/:id` → Actualiza tarea
- `DELETE /api/tasks/:id` → Elimina tarea

---

## 🎥 Para el Video Demostrativo

Si necesitas grabar un video, muestra:

1. **Ejecutar script manual** (30 seg):
   ```bash
   node ejercicios/probar-ejercicios.js
   ```

2. **Ejecutar tests** (20 seg):
   ```bash
   npm test
   ```

3. **Probar backend** (30 seg):
   - Iniciar servidor
   - Abrir navegador en `http://localhost:3000/api/tasks`
   - Mostrar el JSON retornado

4. **Mostrar código** (20 seg):
   - Abrir archivos de ejercicios
   - Mostrar estructura del código

---

## 💡 Tips

- ✅ Los tests son la forma más profesional de verificar
- ✅ El script manual es la forma más rápida de ver resultados
- ✅ El backend debe estar corriendo para probar la app completa
- ✅ Puedes usar cualquier método, todos funcionan igual de bien

---

**¡Listo para probar!** 🚀

