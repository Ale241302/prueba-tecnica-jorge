# Instrucciones de Entrega

## 📦 Contenido de la Entrega

Esta entrega incluye todos los elementos solicitados en la prueba técnica:

### ✅ Proyecto Final (Mini-app React Native)
- **Ubicación**: Raíz del proyecto
- **Tecnología**: React Native con Expo
- **Nombre**: TaskSync

### ✅ Código Fuente de Ejercicios
- **Ubicación**: `/ejercicios/`
  - `ejercicio1-palindromo.ts`
  - `ejercicio2-lista-sin-duplicados.ts`
  - `ejercicio3-rotacion-matriz.ts`

### ✅ Respuestas Teóricas
- **Ubicación**: 
  - `RESPUESTAS_TEORICAS.md` (documento completo)
  - `README.md` (sección de respuestas teóricas)

### ✅ README con Instrucciones
- **Archivo**: `README.md`
- Incluye:
  - Instrucciones para correr el proyecto
  - Requerimientos
  - Decisiones técnicas
  - Arquitectura de carpetas
  - Explicación de funcionalidad nativa
  - Mejoras futuras

### ✅ Backend API
- **Ubicación**: `/backend/`
- **Tecnología**: Node.js + Express
- **Documentación**: `/backend/README.md`

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0
- Expo CLI (se instala con `npm install`)

### Pasos

1. **Instalar dependencias del proyecto principal:**
```bash
npm install
```

2. **Instalar dependencias del backend:**
```bash
cd backend
npm install
cd ..
```

3. **Iniciar el servidor backend (Terminal 1):**
```bash
cd backend
npm start
```

4. **Iniciar Expo (Terminal 2):**
```bash
npm start
```

5. **Ejecutar en dispositivo/emulador:**
   - Presiona `a` para Android
   - Presiona `i` para iOS
   - Escanea el QR con Expo Go

**Nota**: Si ejecutas en dispositivo físico, cambia `localhost` por la IP de tu máquina en `src/services/api.ts`

## 📋 Checklist de Requerimientos

### Funcionalidad Requerida ✅
- [x] Listar tareas desde API
- [x] Crear nuevas tareas
- [x] Editar tareas
- [x] Eliminar tareas
- [x] Marcar tarea como completada
- [x] Manejo de estados de carga
- [x] Manejo de errores
- [x] Manejo de estados vacíos

### Requerimientos Técnicos Obligatorios ✅
- [x] Manejo de estado global (Zustand)
- [x] Integración con API
- [x] Manejo de errores y estados de carga
- [x] Retry básico en requests
- [x] Cache + Offline First
- [x] Funcionalidad nativa (Notificaciones locales)
- [x] TypeScript completo
- [x] Estructura clara de carpetas
- [x] Linter + Prettier configurado
- [x] Componentes reutilizables
- [x] Código limpio y comentado
- [x] Tests con Jest + React Native Testing Library

## 🎥 Video Demostrativo

Para el video de demostración (máx 2 minutos), mostrar:

1. **Inicio de la app** (5 seg)
2. **Listar tareas** desde API (10 seg)
3. **Crear nueva tarea** (15 seg)
4. **Editar tarea** (15 seg)
5. **Marcar como completada** (10 seg)
6. **Eliminar tarea** (10 seg)
7. **Modo offline** - Desactivar WiFi y crear tarea (20 seg)
8. **Sincronización** - Activar WiFi y mostrar sincronización (15 seg)
9. **Notificaciones** - Mostrar notificación al crear tarea (10 seg)

## 📝 Notas Importantes

### Configuración de API

Si necesitas cambiar la URL de la API, edita:
- `src/services/api.ts` → Variable `API_BASE_URL`

Para dispositivos físicos, usa la IP de tu máquina:
```typescript
const API_BASE_URL = __DEV__
  ? 'http://192.168.1.100:3000/api'  // Cambiar por tu IP
  : 'https://your-production-api.com/api';
```

### Assets Requeridos

El proyecto requiere los siguientes assets (crear o usar placeholders):
- `assets/icon.png` (1024x1024)
- `assets/splash.png` (1242x2436)
- `assets/adaptive-icon.png` (1024x1024)
- `assets/favicon.png` (48x48)

Puedes generar estos assets usando herramientas como:
- [Expo Asset Generator](https://www.npmjs.com/package/@expo/asset-generator)
- O crear imágenes simples para desarrollo

## 🔗 Enlaces Útiles

- **Repositorio GitHub**: [Agregar URL del repositorio]
- **Video Demostrativo**: [Agregar enlace al video]
- **Documentación Expo**: https://docs.expo.dev/
- **Documentación React Native**: https://reactnative.dev/

## 📧 Contacto

Para cualquier pregunta sobre la entrega, contactar al evaluador.

---

**¡Gracias por la oportunidad!** 🎉

