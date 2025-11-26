import axios, { AxiosError } from 'axios';
import { Task, TaskFormData, ApiError } from '../types';

const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://your-production-api.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para retry en caso de error de red
apiClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const config = error.config as any;

    // Si no hay config o ya se intentó retry, rechazar
    if (!config || config.__retryCount >= 3) {
      return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;
    config.__retryCount += 1;

    // Esperar antes de reintentar (exponential backoff)
    const delay = Math.min(1000 * Math.pow(2, config.__retryCount - 1), 5000);
    await new Promise(resolve => setTimeout(resolve, delay));

    return apiClient(config);
  }
);

export const taskApi = {
  /**
   * Obtener todas las tareas
   */
  getAll: async (): Promise<Task[]> => {
    try {
      const response = await apiClient.get<Task[]>('/tasks');
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw {
        message: axiosError.message || 'Error al obtener las tareas',
        status: axiosError.response?.status,
      } as ApiError;
    }
  },

  /**
   * Obtener una tarea por ID
   */
  getById: async (id: number): Promise<Task> => {
    try {
      const response = await apiClient.get<Task>(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw {
        message: axiosError.message || 'Error al obtener la tarea',
        status: axiosError.response?.status,
      } as ApiError;
    }
  },

  /**
   * Crear una nueva tarea
   */
  create: async (data: TaskFormData): Promise<Task> => {
    try {
      const response = await apiClient.post<Task>('/tasks', data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw {
        message: axiosError.message || 'Error al crear la tarea',
        status: axiosError.response?.status,
      } as ApiError;
    }
  },

  /**
   * Actualizar una tarea
   */
  update: async (id: number, data: Partial<TaskFormData>): Promise<Task> => {
    try {
      const response = await apiClient.put<Task>(`/tasks/${id}`, data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw {
        message: axiosError.message || 'Error al actualizar la tarea',
        status: axiosError.response?.status,
      } as ApiError;
    }
  },

  /**
   * Eliminar una tarea
   */
  delete: async (id: number): Promise<void> => {
    try {
      await apiClient.delete(`/tasks/${id}`);
    } catch (error) {
      const axiosError = error as AxiosError;
      throw {
        message: axiosError.message || 'Error al eliminar la tarea',
        status: axiosError.response?.status,
      } as ApiError;
    }
  },
};

