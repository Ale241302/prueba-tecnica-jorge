/**
 * Backend simple para TaskSync
 * Endpoint REST que retorna y maneja tareas
 */

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos en memoria (simulada)
let tasks = [
  {
    id: 1,
    title: 'Demo item',
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Tarea de ejemplo',
    completed: true,
    createdAt: new Date().toISOString(),
  },
];

let nextId = 3;

// GET /api/tasks - Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// GET /api/tasks/:id - Obtener una tarea por ID
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  res.json(task);
});

// POST /api/tasks - Crear una nueva tarea
app.post('/api/tasks', (req, res) => {
  const { title, completed = false } = req.body;

  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'El título es requerido' });
  }

  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: Boolean(completed),
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Actualizar una tarea
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const { title, completed } = req.body;
  const existingTask = tasks[taskIndex];

  tasks[taskIndex] = {
    ...existingTask,
    ...(title !== undefined && { title: String(title).trim() }),
    ...(completed !== undefined && { completed: Boolean(completed) }),
  };

  res.json(tasks[taskIndex]);
});

// DELETE /api/tasks/:id - Eliminar una tarea
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📋 Endpoints disponibles:`);
  console.log(`   GET    /api/tasks`);
  console.log(`   GET    /api/tasks/:id`);
  console.log(`   POST   /api/tasks`);
  console.log(`   PUT    /api/tasks/:id`);
  console.log(`   DELETE /api/tasks/:id`);
});

module.exports = app;

