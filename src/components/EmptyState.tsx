import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyStateProps {
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No hay tareas disponibles',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📝</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.submessage}>
        Toca el botón + para crear tu primera tarea
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  submessage: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

