import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Task } from '../types';
import { useTaskStore } from '../store/taskStore';

interface TaskItemProps {
  task: Task;
  onPress: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onPress }) => {
  const { deleteTask, toggleTask } = useTaskStore();

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handlePress = () => {
    if (task.completed) {
      Alert.alert(
        'Tarea completada',
        'Las tareas completadas no se pueden editar. Desmarca la tarea primero si quieres editarla.',
        [{ text: 'OK' }]
      );
      return;
    }
    onPress();
  };

  const handleDelete = () => {
    if (task.completed) {
      Alert.alert(
        'No se puede eliminar',
        'Las tareas completadas no se pueden eliminar. Desmarca la tarea primero si quieres eliminarla.',
        [{ text: 'OK' }]
      );
      return;
    }

    Alert.alert(
      'Eliminar tarea',
      `¿Estás seguro de que quieres eliminar "${task.title}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => deleteTask(task.id),
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      style={[styles.container, task.completed && styles.completed]}
      onPress={handlePress}
      activeOpacity={task.completed ? 1 : 0.7}
    >
      <TouchableOpacity
        style={[styles.checkbox, task.completed && styles.checkboxChecked]}
        onPress={handleToggle}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            task.completed && styles.titleCompleted,
          ]}
        >
          {task.title}
        </Text>
        {task.createdAt && (
          <Text style={styles.date}>
            {new Date(task.createdAt).toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'short',
            })}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.deleteButton,
          task.completed && styles.deleteButtonDisabled,
        ]}
        onPress={handleDelete}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        disabled={task.completed}
      >
        <Text style={[
          styles.deleteText,
          task.completed && styles.deleteTextDisabled,
        ]}>
          {task.completed ? '🔒' : '🗑️'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completed: {
    opacity: 0.6,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  deleteButton: {
    padding: 8,
  },
  deleteButtonDisabled: {
    opacity: 0.5,
  },
  deleteText: {
    fontSize: 20,
  },
  deleteTextDisabled: {
    opacity: 0.3,
  },
});

