# 🔍 Diagnóstico: App se queda en Splash Screen

## Pasos para Diagnosticar

### 1. Ver Logs de Error

En la terminal donde corre Expo, busca errores en rojo. Deberías ver algo como:
- `ERROR Warning:`
- `ERROR TypeError:`
- `ERROR ReferenceError:`

### 2. Verificar en el Dispositivo

En tu Android:
- Agita el dispositivo para abrir el menú de desarrollo
- O presiona `Ctrl+M` si usas emulador
- Selecciona "Show Dev Menu"
- Toca "Debug Remote JS"
- Esto abrirá Chrome DevTools donde verás los errores

### 3. Probar Versión Simplificada

Si hay errores, prueba esta versión simplificada de App.tsx:

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TaskSync - Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```

Si esto funciona, el problema está en alguna dependencia o importación.

### 4. Verificar Backend

Asegúrate de que el backend esté corriendo:
```bash
cd backend
npm start
```

### 5. Verificar Red

Si el backend está corriendo, verifica que la app pueda alcanzarlo:
- Abre en navegador: `http://192.168.0.121:3000/api/tasks`
- Debería mostrar JSON con tareas

## Errores Comunes con React 19

React 19 tiene algunos cambios que pueden causar problemas:

1. **useEffect sin dependencias**: Puede causar warnings
2. **Zustand con React 19**: Puede necesitar actualización
3. **Navigation con React 19**: Puede tener problemas de compatibilidad

## Solución Temporal

Si nada funciona, podemos crear una versión mínima que funcione y luego agregar funcionalidades una por una.

