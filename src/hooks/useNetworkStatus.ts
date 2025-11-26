import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useTaskStore } from '../store/taskStore';

export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const setOnlineStatus = useTaskStore(state => state.setOnlineStatus);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const connected = state.isConnected ?? false;
      setIsConnected(connected);
      setOnlineStatus(connected);
    });

    // Obtener estado inicial
    NetInfo.fetch().then(state => {
      const connected = state.isConnected ?? false;
      setIsConnected(connected);
      setOnlineStatus(connected);
    });

    return () => {
      unsubscribe();
    };
  }, [setOnlineStatus]);

  return isConnected;
};

