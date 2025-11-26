import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Switch,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTaskStore } from '../store/taskStore';

type RootStackParamList = {
  TaskList: undefined;
  TaskForm: { taskId?: number };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TaskForm'>;
type RouteProp = {
  params?: { taskId?: number };
};

export const TaskFormScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp>();
  const taskId = route.params?.taskId;
  const { tasks, createTask, updateTask, loading } = useTaskStore();

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskId) {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        setTitle(task.title);
        setCompleted(task.completed);
      }
    }
  }, [taskId, tasks]);

  useEffect(() => {
    navigation.setOptions({
      title: taskId ? 'Editar Tarea' : 'Nueva Tarea',
    });
  }, [taskId]);

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('Error', 'El título es requerido');
      return;
    }

    try {
      if (taskId) {
        await updateTask(taskId, { title: title.trim(), completed });
      } else {
        await createTask({ title: title.trim(), completed });
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar la tarea');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Escribe el título de la tarea"
          placeholderTextColor="#999"
          autoFocus={!taskId}
          multiline
        />
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Completada</Text>
          <Switch
            value={completed}
            onValueChange={setCompleted}
            trackColor={{ false: '#767577', true: '#4CAF50' }}
            thumbColor={completed ? '#ffffff' : '#f4f3f4'}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.saveButtonLarge,
          (!title.trim() || loading) && styles.saveButtonDisabled,
        ]}
        onPress={handleSave}
        disabled={!title.trim() || loading}
      >
        <Text style={styles.saveButtonLargeText}>
          {loading ? 'Guardando...' : taskId ? 'Actualizar Tarea' : 'Guardar Tarea'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveButtonLarge: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonDisabled: {
    backgroundColor: '#ccc',
    opacity: 0.6,
  },
  saveButtonLargeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

