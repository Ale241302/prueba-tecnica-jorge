import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { TaskListScreen } from './src/screens/TaskListScreen';
import { TaskFormScreen } from './src/screens/TaskFormScreen';
import { useTaskStore } from './src/store/taskStore';

export type RootStackParamList = {
  TaskList: undefined;
  TaskForm: { taskId?: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const loadTasksFromStorage = useTaskStore(state => state.loadTasksFromStorage);

  useEffect(() => {
    // Solicitar permisos de notificaciones al iniciar
    Notifications.requestPermissionsAsync().catch(console.error);

    // Cargar tareas desde storage al iniciar
    loadTasksFromStorage().catch(console.error);
  }, [loadTasksFromStorage]);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="TaskList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      >
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{ title: 'TaskSync' }}
        />
        <Stack.Screen name="TaskForm" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

