# 🎉 TaskSync - Entrega Final de Prueba Técnica

## 📦 Proyecto Completo y Subido a GitHub

**Repositorio:** https://github.com/Ale241302/prueba-tecnica-jorge

---

## ✅ TODO COMPLETADO

### Sección 1 - Preguntas Teóricas ✅

Todas las respuestas en:
- `RESPUESTAS_TEORICAS.md` (documento completo)
- `README.md` (sección de respuestas teóricas)

Incluye:
- ✅ useEffect, useMemo, useCallback con ejemplos
- ✅ Cache y sincronización offline
- ✅ Expo vs React Native CLI
- ✅ Optimización de rendimiento
- ✅ Arquitectura y backend
- ✅ Estructura de carpetas
- ✅ CI/CD conceptual

### Sección 2 - Ejercicios de Código ✅

Carpeta `/ejercicios/`:
- ✅ `ejercicio1-palindromo.ts` - Función palindromo completa
- ✅ `ejercicio2-lista-sin-duplicados.ts` - Función uniqueUsers
- ✅ `ejercicio3-rotacion-matriz.ts` - Función rotateMatrix
- ✅ `probar-ejercicios.js` - Script de prueba manual
- ✅ Tests unitarios en `src/utils/__tests__/`

Backend `/backend/`:
- ✅ `server.js` - API REST completa con CRUD
- ✅ Endpoints: GET, POST, PUT, DELETE
- ✅ CORS configurado
- ✅ Documentación incluida

### Sección 3 - Mini Proyecto TaskSync ✅

**Aplicación móvil completa** con:

#### Funcionalidades Implementadas ✅
1. ✅ Listar tareas desde API
2. ✅ Crear nuevas tareas (botón + y formulario)
3. ✅ Editar tareas (tocar tarea)
4. ✅ Eliminar tareas (botón 🗑️ con confirmación)
5. ✅ Marcar como completada (checkbox)
6. ✅ Estados de carga, error y vacío
7. ✅ **EXTRA**: Protección de tareas completadas

#### Requerimientos Técnicos ✅
1. ✅ **Estado global con Zustand**
2. ✅ **Integración con API** (Axios + retry)
3. ✅ **Cache + Offline First** (AsyncStorage + sincronización)
4. ✅ **Funcionalidad nativa** (Notificaciones locales)
5. ✅ **TypeScript completo**
6. ✅ **Linter + Prettier**
7. ✅ **Tests con Jest**
8. ✅ **Documentación completa**

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0
- **Expo Go SDK 51** instalado

### Paso 1: Instalar Expo Go SDK 51

**IMPORTANTE:** La app requiere Expo Go SDK 51.

**Android:** https://expo.dev/go?sdkVersion=51  
**iOS:** https://expo.dev/go?platform=ios&sdkVersion=51

Si tienes SDK 54, desinstala primero y luego instala SDK 51 desde el link.

### Paso 2: Clonar e Instalar

```bash
# Clonar repositorio
git clone https://github.com/Ale241302/prueba-tecnica-jorge.git
cd prueba-tecnica-jorge

# Instalar dependencias
npm install --legacy-peer-deps

# Instalar backend
cd backend
npm install
cd ..
```

### Paso 3: Ejecutar

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

Deberías ver: `🚀 Servidor corriendo en http://localhost:3000`

**Terminal 2 - App React Native:**
```bash
npx expo start --tunnel
```

Espera a que aparezca el código QR.

**Terminal 3 - Tests (opcional):**
```bash
npm test
```

### Paso 4: Abrir en Android/iOS

1. Abre **Expo Go SDK 51** en tu dispositivo
2. Escanea el código QR
3. Espera a que cargue (primera vez puede tardar)
4. ¡Listo! 🎉

---

## 📱 Funcionalidades de la App

### CRUD Completo
- ✅ **Ver tareas** - Lista con pull-to-refresh
- ✅ **Crear tarea** - Botón `+` flotante
- ✅ **Editar tarea** - Tocar una tarea
- ✅ **Eliminar tarea** - Botón 🗑️ (solo en pendientes)
- ✅ **Completar tarea** - Checkbox verde

### Offline-First
- ✅ **Funciona sin internet** - Muestra tareas cacheadas
- ✅ **Guarda acciones offline** - Queue de sincronización
- ✅ **Sincroniza automáticamente** - Al reconectar
- ✅ **Indicador de estado** - Barra naranja cuando está offline

### Notificaciones
- ✅ **Al crear tarea** - "Tarea creada exitosamente"
- ✅ **Al sincronizar** - "X acción(es) sincronizada(s)"

### Protección de Datos
- ✅ **Tareas completadas protegidas** - No se pueden editar/eliminar
- ✅ **Indicador visual** - Candado 🔒 en lugar de 🗑️
- ✅ **Fácil de revertir** - Solo desmarcar para editar

---

## 📂 Estructura del Proyecto

```
mini-app/
├── backend/                    # API REST con Node.js + Express
├── ejercicios/                # Ejercicios de código resueltos
├── src/
│   ├── components/            # Componentes reutilizables
│   ├── screens/               # Pantallas de la app
│   ├── services/              # API client y Storage
│   ├── store/                 # Estado global (Zustand)
│   ├── hooks/                 # Custom hooks
│   ├── types/                 # TypeScript types
│   └── utils/                 # Utilidades y tests
├── App.tsx                    # Componente raíz
├── README.md                  # Documentación principal
├── RESPUESTAS_TEORICAS.md    # Respuestas teóricas
└── [15+ archivos de guías]
```

---

## 📋 Checklist de Entrega

### Proyecto Final ✅
- [x] Mini-app React Native (TaskSync)
- [x] Código funcional y probado
- [x] SDK 51 compatible

### Código Fuente ✅
- [x] Ejercicios de código en `/ejercicios/`
- [x] Backend en `/backend/`
- [x] Tests implementados

### Respuestas Teóricas ✅
- [x] RESPUESTAS_TEORICAS.md
- [x] Sección en README.md

### README ✅
- [x] Instrucciones de instalación
- [x] Cómo correr el proyecto
- [x] Requerimientos (Node, Expo Go SDK 51)
- [x] Decisiones técnicas
- [x] Arquitectura de carpetas
- [x] Funcionalidad nativa (notificaciones)
- [x] Mejoras futuras

### Repositorio GitHub ✅
- [x] Subido a: https://github.com/Ale241302/prueba-tecnica-jorge
- [x] Commits claros y descriptivos
- [x] Todo el código fuente incluido

---

## 🎯 Características Destacadas

### Técnicas
- ✅ TypeScript en todo el proyecto
- ✅ Zustand para estado global
- ✅ Axios con retry automático
- ✅ AsyncStorage para cache
- ✅ NetInfo para detección de red
- ✅ Expo Notifications
- ✅ React Navigation
- ✅ Jest + Testing Library

### UX/UI
- ✅ Diseño moderno y limpio
- ✅ Animaciones suaves
- ✅ Loading states
- ✅ Error states con retry
- ✅ Empty states
- ✅ Pull to refresh
- ✅ Botón flotante (FAB)
- ✅ Protección de tareas completadas

### Código
- ✅ Código limpio y comentado
- ✅ Componentes reutilizables
- ✅ Estructura clara
- ✅ Buenas prácticas
- ✅ Tests pasando
- ✅ Sin errores de linting

---

## 📊 Estadísticas

- **Archivos creados**: 50+
- **Líneas de código**: ~4,000+
- **Componentes**: 6 reutilizables
- **Tests**: 21 pasando
- **Documentación**: 20+ archivos

---

## 🎥 Para el Video Demostrativo (máx 2 minutos)

Muestra:

1. **Inicio** (10 seg)
   - Abrir la app
   - Mostrar lista de tareas

2. **Crear tarea** (20 seg)
   - Tocar botón `+`
   - Escribir título
   - Tocar botón verde "Guardar Tarea"
   - Ver notificación

3. **Editar tarea** (15 seg)
   - Tocar una tarea pendiente
   - Modificar título
   - Guardar

4. **Completar tarea** (15 seg)
   - Tocar checkbox
   - Mostrar que cambia a 🔒

5. **Intentar editar completada** (15 seg)
   - Tocar tarea completada
   - Mostrar alerta de protección

6. **Eliminar tarea** (15 seg)
   - Desmarcar tarea
   - Tocar 🗑️
   - Confirmar

7. **Modo offline** (30 seg)
   - Desactivar WiFi
   - Crear tarea
   - Mostrar barra naranja
   - Reactivar WiFi
   - Mostrar sincronización

---

## 📝 Instrucciones para Evaluadores

### Instalación

```bash
git clone https://github.com/Ale241302/prueba-tecnica-jorge.git
cd prueba-tecnica-jorge
npm install --legacy-peer-deps
cd backend && npm install && cd ..
```

### Ejecución

```bash
# Terminal 1: Backend
cd backend && npm start

# Terminal 2: App
npx expo start --tunnel
```

### Requisitos

- Expo Go SDK 51: https://expo.dev/go?sdkVersion=51
- Node.js >= 18.0.0
- npm >= 9.0.0

### Probar Ejercicios

```bash
# Tests automatizados
npm test

# Script manual
node ejercicios/probar-ejercicios.js
```

### Backend

Abre en navegador: http://localhost:3000/api/tasks

---

## 🔗 Enlaces Importantes

- **Repositorio GitHub**: https://github.com/Ale241302/prueba-tecnica-jorge
- **Expo Go SDK 51 Android**: https://expo.dev/go?sdkVersion=51
- **Expo Go SDK 51 iOS**: https://expo.dev/go?platform=ios&sdkVersion=51

---

## ✨ Estado Final

**✅ PROYECTO COMPLETO Y LISTO PARA ENTREGA**

- Repositorio GitHub: ✅ Actualizado
- Código funcional: ✅ Probado en Android
- Tests: ✅ 21/21 pasando
- Documentación: ✅ Completa
- Ejercicios: ✅ Resueltos con tests
- Backend: ✅ API REST funcional
- README: ✅ Instrucciones actualizadas

---

**¡Gracias por la oportunidad!** 🚀

Desarrollado como parte de la prueba técnica para **Desarrollador Fullstack Mid React Native**.

