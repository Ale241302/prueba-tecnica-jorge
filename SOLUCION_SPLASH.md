# 🚨 Solución: App se queda en Splash Screen

## Diagnóstico Rápido

Si la app se queda en la pantalla de splash (solo muestra "TaskSync"), significa que hay un error de JavaScript que está bloqueando el render.

## Pasos para Solucionar

### Paso 1: Ver los Logs de Error

**En la terminal donde corre Expo**, busca líneas en rojo que digan:
- `ERROR`
- `Warning:`
- `TypeError:`
- `ReferenceError:`

**O en tu Android:**
- Agita el dispositivo (shake gesture)
- Selecciona "Show Dev Menu"
- Toca "Debug Remote JS"
- Esto abrirá Chrome DevTools con los errores

### Paso 2: Verificar Backend

Asegúrate de que el backend esté corriendo:

```powershell
cd backend
npm start
```

Deberías ver: `🚀 Servidor corriendo en http://localhost:3000`

### Paso 3: Limpiar Cache y Reiniciar

```powershell
# Detener Expo (Ctrl+C)

# Limpiar cache
npm start -- --reset-cache
```

### Paso 4: Verificar Errores Comunes

#### Error: "Cannot read property of undefined"
**Causa:** Alguna dependencia no está inicializada correctamente
**Solución:** Ya agregué `.catch(console.error)` a las llamadas async

#### Error: "Network request failed"
**Causa:** El backend no está corriendo o hay problema de red
**Solución:** 
1. Verifica que backend esté corriendo
2. Verifica IP en `src/services/api.ts` (`192.168.0.121`)

#### Error: "AsyncStorage is null"
**Causa:** Problema con la instalación de AsyncStorage
**Solución:** Ya está resuelto, pero verifica que esté instalado

### Paso 5: Probar Versión Simplificada

Si sigue sin funcionar, prueba esta versión mínima de App.tsx:

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TaskSync Funcionando!</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
```

Si esto funciona, el problema está en alguna dependencia específica.

## Qué Debería Ver

Una vez que funcione, deberías ver:

1. **Pantalla de lista de tareas** con:
   - Header verde "TaskSync"
   - Lista de tareas (si hay alguna)
   - Botón `+` flotante (abajo a la derecha)
   - Barra de estado de red (si está offline)

2. **Si no hay tareas:**
   - Mensaje "No hay tareas disponibles"
   - Instrucciones para crear la primera tarea

3. **Si hay error de red:**
   - Mensaje de error con botón "Reintentar"

## Próximos Pasos

1. **Comparte el error** que ves en los logs de Expo
2. **Verifica que el backend esté corriendo**
3. **Prueba limpiar cache** con `npm start -- --reset-cache`

---

**¿Qué error específico ves en los logs de Expo?**

