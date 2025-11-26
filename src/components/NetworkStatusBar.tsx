import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTaskStore } from '../store/taskStore';

export const NetworkStatusBar: React.FC = () => {
  const { isOnline, isSyncing } = useTaskStore();

  if (isOnline) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isSyncing ? '🔄 Sincronizando...' : '📴 Modo offline'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff9800',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

