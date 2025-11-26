import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types';

const STORAGE_KEYS = {
  TASKS: '@tasksync:tasks',
  PENDING_ACTIONS: '@tasksync:pending_actions',
};

export interface PendingAction {
  id: string;
  type: 'create' | 'update' | 'delete';
  data: any;
  timestamp: number;
}

export const storageService = {
  /**
   * Guardar tareas en el almacenamiento local
   */
  saveTasks: async (tasks: Task[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error al guardar tareas:', error);
      throw error;
    }
  },

  /**
   * Obtener tareas del almacenamiento local
   */
  getTasks: async (): Promise<Task[]> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.TASKS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      return [];
    }
  },

  /**
   * Guardar una acción pendiente (para sincronización offline)
   */
  savePendingAction: async (action: PendingAction): Promise<void> => {
    try {
      const pending = await storageService.getPendingActions();
      pending.push(action);
      await AsyncStorage.setItem(
        STORAGE_KEYS.PENDING_ACTIONS,
        JSON.stringify(pending)
      );
    } catch (error) {
      console.error('Error al guardar acción pendiente:', error);
      throw error;
    }
  },

  /**
   * Obtener todas las acciones pendientes
   */
  getPendingActions: async (): Promise<PendingAction[]> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.PENDING_ACTIONS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error al obtener acciones pendientes:', error);
      return [];
    }
  },

  /**
   * Eliminar una acción pendiente después de sincronizarla
   */
  removePendingAction: async (actionId: string): Promise<void> => {
    try {
      const pending = await storageService.getPendingActions();
      const filtered = pending.filter(action => action.id !== actionId);
      await AsyncStorage.setItem(
        STORAGE_KEYS.PENDING_ACTIONS,
        JSON.stringify(filtered)
      );
    } catch (error) {
      console.error('Error al eliminar acción pendiente:', error);
      throw error;
    }
  },

  /**
   * Limpiar todas las acciones pendientes
   */
  clearPendingActions: async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.PENDING_ACTIONS);
    } catch (error) {
      console.error('Error al limpiar acciones pendientes:', error);
      throw error;
    }
  },
};

