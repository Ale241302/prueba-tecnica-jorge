import { create } from 'zustand';
import { Task, TaskFormData, ApiError } from '../types';
import { taskApi } from '../services/api';
import { storageService, PendingAction } from '../services/storage';
import * as Notifications from 'expo-notifications';

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: ApiError | null;
  isOnline: boolean;
  isSyncing: boolean;

  // Actions
  fetchTasks: () => Promise<void>;
  createTask: (data: TaskFormData) => Promise<void>;
  updateTask: (id: number, data: Partial<TaskFormData>) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  toggleTask: (id: number) => Promise<void>;
  syncPendingActions: () => Promise<void>;
  setOnlineStatus: (status: boolean) => void;
  loadTasksFromStorage: () => Promise<void>;
}

// Configurar notificaciones locales
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const generateActionId = () => `action_${Date.now()}_${Math.random()}`;

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  loading: false,
  error: null,
  isOnline: true,
  isSyncing: false,

  setOnlineStatus: (status: boolean) => {
    set({ isOnline: status });
    // Si se conecta, intentar sincronizar
    if (status) {
      get().syncPendingActions();
    }
  },

  loadTasksFromStorage: async () => {
    try {
      const tasks = await storageService.getTasks();
      set({ tasks });
    } catch (error) {
      console.error('Error al cargar tareas desde storage:', error);
    }
  },

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const tasks = await taskApi.getAll();
      set({ tasks, loading: false });
      // Guardar en storage para uso offline
      await storageService.saveTasks(tasks);
    } catch (error) {
      const apiError = error as ApiError;
      // Si hay error pero tenemos datos en storage, usarlos
      const cachedTasks = await storageService.getTasks();
      if (cachedTasks.length > 0) {
        set({ tasks: cachedTasks, loading: false, error: null });
      } else {
        set({ loading: false, error: apiError });
      }
    }
  },

  createTask: async (data: TaskFormData) => {
    const { isOnline } = get();
    set({ error: null });

    // Crear tarea temporal para UI inmediata
    const tempTask: Task = {
      id: Date.now(), // ID temporal
      title: data.title,
      completed: data.completed,
      createdAt: new Date().toISOString(),
    };

    set(state => ({
      tasks: [...state.tasks, tempTask],
    }));

    // Guardar en storage inmediatamente
    const currentTasks = get().tasks;
    await storageService.saveTasks(currentTasks);

    if (isOnline) {
      try {
        const newTask = await taskApi.create(data);
        // Reemplazar tarea temporal con la real
        set(state => ({
          tasks: state.tasks.map(t => (t.id === tempTask.id ? newTask : t)),
        }));
        await storageService.saveTasks(get().tasks);

        // Enviar notificación local
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Tarea creada',
            body: `"${data.title}" ha sido creada exitosamente`,
          },
          trigger: null,
        });
      } catch (error) {
        // Si falla, guardar como acción pendiente
        const action: PendingAction = {
          id: generateActionId(),
          type: 'create',
          data,
          timestamp: Date.now(),
        };
        await storageService.savePendingAction(action);
        set({ error: error as ApiError });
      }
    } else {
      // Offline: guardar como acción pendiente
      const action: PendingAction = {
        id: generateActionId(),
        type: 'create',
        data,
        timestamp: Date.now(),
      };
      await storageService.savePendingAction(action);
    }
  },

  updateTask: async (id: number, data: Partial<TaskFormData>) => {
    const { isOnline, tasks } = get();
    set({ error: null });

    // Actualizar UI inmediatamente
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, ...data } : task
      ),
    }));

    // Guardar en storage
    await storageService.saveTasks(get().tasks);

    if (isOnline) {
      try {
        const updatedTask = await taskApi.update(id, data);
        set(state => ({
          tasks: state.tasks.map(task => (task.id === id ? updatedTask : task)),
        }));
        await storageService.saveTasks(get().tasks);
      } catch (error) {
        const action: PendingAction = {
          id: generateActionId(),
          type: 'update',
          data: { id, ...data },
          timestamp: Date.now(),
        };
        await storageService.savePendingAction(action);
        set({ error: error as ApiError });
      }
    } else {
      const action: PendingAction = {
        id: generateActionId(),
        type: 'update',
        data: { id, ...data },
        timestamp: Date.now(),
      };
      await storageService.savePendingAction(action);
    }
  },

  deleteTask: async (id: number) => {
    const { isOnline } = get();
    set({ error: null });

    // Eliminar de UI inmediatamente
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    }));

    // Guardar en storage
    await storageService.saveTasks(get().tasks);

    if (isOnline) {
      try {
        await taskApi.delete(id);
      } catch (error) {
        // Si falla, restaurar la tarea y guardar como pendiente
        const deletedTask = get().tasks.find(t => t.id === id);
        if (deletedTask) {
          set(state => ({
            tasks: [...state.tasks, deletedTask].sort((a, b) => a.id - b.id),
          }));
        }
        const action: PendingAction = {
          id: generateActionId(),
          type: 'delete',
          data: { id },
          timestamp: Date.now(),
        };
        await storageService.savePendingAction(action);
        set({ error: error as ApiError });
      }
    } else {
      const action: PendingAction = {
        id: generateActionId(),
        type: 'delete',
        data: { id },
        timestamp: Date.now(),
      };
      await storageService.savePendingAction(action);
    }
  },

  toggleTask: async (id: number) => {
    const task = get().tasks.find(t => t.id === id);
    if (task) {
      await get().updateTask(id, { completed: !task.completed });
    }
  },

  syncPendingActions: async () => {
    const { isOnline, isSyncing } = get();
    if (!isOnline || isSyncing) return;

    set({ isSyncing: true });
    try {
      const pendingActions = await storageService.getPendingActions();

      for (const action of pendingActions) {
        try {
          switch (action.type) {
            case 'create':
              await taskApi.create(action.data);
              break;
            case 'update':
              await taskApi.update(action.data.id, action.data);
              break;
            case 'delete':
              await taskApi.delete(action.data.id);
              break;
          }
          await storageService.removePendingAction(action.id);
        } catch (error) {
          console.error(`Error sincronizando acción ${action.id}:`, error);
          // Continuar con las siguientes acciones
        }
      }

      // Refrescar tareas después de sincronizar
      await get().fetchTasks();

      // Notificación de sincronización exitosa
      if (pendingActions.length > 0) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Sincronización completada',
            body: `${pendingActions.length} acción(es) sincronizada(s)`,
          },
          trigger: null,
        });
      }
    } catch (error) {
      console.error('Error en sincronización:', error);
    } finally {
      set({ isSyncing: false });
    }
  },
}));

