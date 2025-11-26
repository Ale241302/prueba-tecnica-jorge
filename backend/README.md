# Backend API - TaskSync

API REST simple desarrollada con Node.js y Express para la aplicación TaskSync.

## Instalación

```bash
npm install
```

## Ejecución

### Desarrollo
```bash
npm start
```

### Con auto-reload (requiere nodemon)
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints

### GET /api/tasks
Obtiene todas las tareas.

**Respuesta:**
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

### GET /api/tasks/:id
Obtiene una tarea por ID.

### POST /api/tasks
Crea una nueva tarea.

**Body:**
```json
{
  "title": "Nueva tarea",
  "completed": false
}
```

### PUT /api/tasks/:id
Actualiza una tarea existente.

**Body:**
```json
{
  "title": "Tarea actualizada",
  "completed": true
}
```

### DELETE /api/tasks/:id
Elimina una tarea.

### GET /health
Health check del servidor.

## Notas

- El backend usa almacenamiento en memoria (no persistente)
- Para producción, conectar a una base de datos real (PostgreSQL, MongoDB, etc.)
- Agregar autenticación JWT para producción
- Implementar validación de datos más robusta

