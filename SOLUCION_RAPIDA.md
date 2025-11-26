# 🚨 Solución Rápida para Error en Android

## Pasos Inmediatos

### 1. Ver el Error Completo

En tu teléfono Android:
- Toca **"View error log"** en la pantalla de error
- Copia el error completo y compártelo

O en la terminal de Expo, busca líneas que digan `Error:` o `TypeError:`

### 2. Solución Rápida - Reiniciar con Cache Limpio

```bash
# Detener Expo (Ctrl+C en la terminal)

# Limpiar cache y reiniciar
npm start -- --reset-cache
```

### 3. Si No Funciona - Reinstalar Dependencias

```powershell
# Detener Expo (Ctrl+C)

# Eliminar node_modules y reinstalar
Remove-Item -Recurse -Force node_modules
npm install --legacy-peer-deps

# Reiniciar con cache limpio
npm start -- --reset-cache
```

### 4. Verificar que el Backend Esté Corriendo

En otra terminal:
```powershell
cd backend
npm start
```

Deberías ver: `🚀 Servidor corriendo en http://localhost:3000`

### 5. Probar en Web Primero (Para Diagnosticar)

```bash
# En Expo, presiona 'w' para abrir en web
Press w │ open web
```

Si funciona en web pero no en Android, el problema es específico de Android/Expo Go.

## Errores Comunes y Soluciones

### Error: "Cannot find module"
**Solución:** Reinstalar dependencias con `--legacy-peer-deps`

### Error: "__DEV__ is not defined"
**Solución:** Ya está corregido en el código con `@ts-ignore`

### Error: "Network request failed"
**Solución:** 
1. Verifica que el backend esté corriendo
2. Verifica que la IP sea correcta (`192.168.0.121`)
3. Verifica que PC y móvil estén en la misma WiFi

### Error: "AsyncStorage is null"
**Solución:** Ya está mockeado en `jest.setup.js`, pero en runtime necesita estar instalado correctamente

## Próximos Pasos

1. **Comparte el error completo** de "View error log" para diagnóstico preciso
2. **Prueba reiniciar con cache limpio** primero
3. **Verifica que el backend esté corriendo**

---

**¿Qué error específico ves en "View error log"?**

