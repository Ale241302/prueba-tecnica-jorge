export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt?: string;
}

export interface TaskFormData {
  title: string;
  completed: boolean;
}

export interface ApiError {
  message: string;
  status?: number;
}

export type NetworkStatus = 'online' | 'offline' | 'unknown';

