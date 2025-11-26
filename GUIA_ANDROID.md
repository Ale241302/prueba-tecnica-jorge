# 📱 Guía para Probar la App en Android

## 🚀 Opciones para Probar en Android

Tienes **3 formas** de probar la app en Android:

### Opción 1: Expo Go en Dispositivo Físico (MÁS FÁCIL) ⭐

**Requisitos:**
- Dispositivo Android con Expo Go SDK 51 instalado
- Ambos (PC y móvil) en la misma red WiFi

**⚠️ IMPORTANTE: Esta app usa Expo SDK 51**

1. **Instalar Expo Go SDK 51** en tu Android:
   
   **Opción A - Link directo (Recomendado):**
   - Abre este link en tu Android: https://expo.dev/go?sdkVersion=51
   - Descarga e instala la versión para SDK 51
   
   **Opción B - Página de Expo:**
   - Ve a https://expo.dev/go desde tu móvil
   - Busca la versión compatible con SDK 51
   - Descarga e instala
   
   **Opción C - Si ya tienes Expo Go instalado:**
   - Si tienes SDK 54 u otra versión, desinstala primero
   - Luego sigue la Opción A o B

2. **Asegúrate de que el backend esté corriendo:**
   ```bash
   # En otra terminal
   cd backend
   npm start
   ```

3. **En la terminal donde corre Expo, presiona `a`**:
   ```
   Press a │ open Android
   ```
   
   O escanea el código QR con:
   - **Android**: Abre Expo Go → Escanear QR
   - **iOS**: Usa la app Cámara nativa

4. **IMPORTANTE - Cambiar localhost por tu IP:**
   
   Si usas dispositivo físico, necesitas cambiar la IP en `src/services/api.ts`:
   
   ```typescript
   // Encontrar tu IP local:
   // Windows: ipconfig (busca "IPv4 Address")
   // Ejemplo: 192.168.1.100
   
   const API_BASE_URL = __DEV__
     ? 'http://192.168.1.100:3000/api'  // Cambia por TU IP
     : 'https://your-production-api.com/api';
   ```

### Opción 2: Emulador de Android

**Requisitos:**
- Android Studio instalado
- Emulador configurado

**Pasos:**

1. **Abrir Android Studio** y iniciar un emulador

2. **Con Expo corriendo, presiona `a`**:
   ```
   Press a │ open Android
   ```

3. **El emulador puede usar `localhost`** directamente (no necesitas cambiar la IP)

### Opción 3: Build APK (Producción)

Para crear un APK instalable:

```bash
# Instalar EAS CLI
npm install -g eas-cli

# Login en Expo
eas login

# Configurar build
eas build:configure

# Build para Android
eas build --platform android
```

## 🔧 Solución de Problemas

### Error: "Unable to connect to Metro"

**Solución:**
1. Asegúrate de que PC y móvil estén en la misma WiFi
2. Reinicia Expo: `Ctrl+C` y luego `npm start`
3. Presiona `r` para recargar

### Error: "Network request failed" al cargar tareas

**Solución:**
1. Verifica que el backend esté corriendo (`http://localhost:3000/api/tasks`)
2. Si usas dispositivo físico, cambia `localhost` por tu IP local
3. Verifica que el firewall no bloquee el puerto 3000

### Error: "Cannot connect to Metro bundler"

**Solución:**
```bash
# Limpiar cache y reiniciar
npm start -- --reset-cache
```

### Advertencia sobre versiones de paquetes

Las advertencias sobre versiones no son críticas, pero puedes actualizarlas:

```bash
npm install @react-native-async-storage/async-storage@1.23.1 --legacy-peer-deps
npm install @react-native-community/netinfo@11.3.1 --legacy-peer-deps
```

## 📋 Checklist Antes de Probar

- [ ] Backend corriendo en `http://localhost:3000`
- [ ] Expo corriendo (`npm start`)
- [ ] Si usas dispositivo físico: IP cambiada en `src/services/api.ts`
- [ ] Expo Go instalado en Android (si usas dispositivo físico)
- [ ] Emulador iniciado (si usas emulador)
- [ ] PC y móvil en la misma WiFi (si usas dispositivo físico)

## 🎯 Comandos Rápidos

```bash
# Terminal 1: Backend
cd backend
npm start

# Terminal 2: Expo
npm start
# Luego presiona 'a' para Android
```

## 📱 Funcionalidades a Probar

Una vez que la app esté corriendo, prueba:

1. ✅ Ver lista de tareas (desde API)
2. ✅ Crear nueva tarea (botón +)
3. ✅ Editar tarea (tocar una tarea)
4. ✅ Marcar como completada (checkbox)
5. ✅ Eliminar tarea (botón 🗑️)
6. ✅ Pull to refresh
7. ✅ Modo offline (desactivar WiFi)
8. ✅ Sincronización (reactivar WiFi)

## 💡 Tips

- **Emulador**: Más rápido para desarrollo, puede usar `localhost`
- **Dispositivo físico**: Mejor para probar funcionalidades nativas, necesita IP local
- **Expo Go**: La forma más rápida de probar sin builds
- **Backend**: Debe estar corriendo siempre que pruebes la app

---

**¡Listo para probar en Android!** 🚀

