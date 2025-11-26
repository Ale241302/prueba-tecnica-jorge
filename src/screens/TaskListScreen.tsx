import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTaskStore } from '../store/taskStore';
import { TaskItem } from '../components/TaskItem';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { EmptyState } from '../components/EmptyState';
import { ErrorMessage } from '../components/ErrorMessage';
import { NetworkStatusBar } from '../components/NetworkStatusBar';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { Task } from '../types';

type RootStackParamList = {
  TaskList: undefined;
  TaskForm: { taskId?: number };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TaskList'>;

export const TaskListScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    tasks,
    loading,
    error,
    fetchTasks,
    loadTasksFromStorage,
  } = useTaskStore();
  const isConnected = useNetworkStatus();

  useEffect(() => {
    // Cargar desde storage primero para mostrar datos inmediatamente
    loadTasksFromStorage().catch(console.error);
    // Luego intentar obtener desde API
    fetchTasks().catch(console.error);
  }, [loadTasksFromStorage, fetchTasks]);

  const handleRefresh = () => {
    fetchTasks();
  };

  const handleTaskPress = (task: Task) => {
    navigation.navigate('TaskForm', { taskId: task.id });
  };

  const handleAddTask = () => {
    navigation.navigate('TaskForm');
  };

  if (loading && tasks.length === 0) {
    return <LoadingSpinner message="Cargando tareas..." />;
  }

  return (
    <View style={styles.container}>
      <NetworkStatusBar />
      {error && !tasks.length ? (
        <ErrorMessage error={error} onRetry={fetchTasks} />
      ) : (
        <>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TaskItem task={item} onPress={() => handleTaskPress(item)} />
            )}
            contentContainerStyle={
              tasks.length === 0 ? styles.emptyContainer : styles.listContainer
            }
            ListEmptyComponent={<EmptyState />}
            refreshControl={
              <RefreshControl
                refreshing={loading && tasks.length > 0}
                onRefresh={handleRefresh}
                tintColor="#4CAF50"
              />
            }
          />
          <TouchableOpacity
            style={styles.fab}
            onPress={handleAddTask}
            activeOpacity={0.8}
          >
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 32,
  },
});

