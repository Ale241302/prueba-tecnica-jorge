# Checklist de Entrega - Prueba Técnica

Usa este checklist para verificar que tu entrega esté completa antes de enviarla.

## ✅ Sección 1 - Preguntas Teóricas

- [x] Respuesta 1.1: useEffect, useMemo, useCallback
- [x] Respuesta 1.2: Cache, sincronización offline, doble request
- [x] Respuesta 1.3: Expo vs React Native CLI
- [x] Respuesta 1.4: Optimización de rendimiento
- [x] Respuesta 1.5: Arquitectura simple
- [x] Respuesta 1.6: Estructura interna de la app
- [x] Respuesta 1.7: CI/CD con EAS Build o Fastlane

**Ubicación**: `RESPUESTAS_TEORICAS.md` y `README.md`

## ✅ Sección 2 - Ejercicios de Código

- [x] Ejercicio 1: Palíndromo (`ejercicios/ejercicio1-palindromo.ts`)
- [x] Ejercicio 2: Lista sin duplicados (`ejercicios/ejercicio2-lista-sin-duplicados.ts`)
- [x] Ejercicio 3: Rotación de matriz (`ejercicios/ejercicio3-rotacion-matriz.ts`)
- [x] Tests para los ejercicios (`src/utils/__tests__/`)

## ✅ Sección 3 - Mini Proyecto TaskSync

### Funcionalidad Requerida

- [x] Listar tareas desde API
- [x] Crear nuevas tareas
- [x] Editar tareas existentes
- [x] Eliminar tareas
- [x] Marcar tarea como completada
- [x] Manejo de estados de carga
- [x] Manejo de errores
- [x] Manejo de estados vacíos

### Requerimientos Técnicos Obligatorios

- [x] **Manejo de estado global** (Zustand implementado)
- [x] **Integración con API** (Axios con retry)
- [x] **Cache + Offline First** (AsyncStorage + sincronización)
- [x] **Funcionalidad nativa** (Notificaciones locales)
- [x] **TypeScript completo** (Todo el proyecto)
- [x] **Estructura clara** (Carpetas organizadas)
- [x] **Linter + Prettier** (Configurados)
- [x] **Componentes reutilizables** (TaskItem, LoadingSpinner, etc.)
- [x] **Código limpio** (Comentado donde necesario)
- [x] **Testing** (Jest + React Native Testing Library)
- [x] **Documentación** (README completo)

### Backend

- [x] Endpoint REST funcional
- [x] CRUD completo de tareas
- [x] CORS configurado
- [x] Documentación en `backend/README.md`

## 📝 Documentación

- [x] README principal con instrucciones
- [x] README del backend
- [x] README de ejercicios
- [x] Respuestas teóricas documentadas
- [x] Decisiones técnicas explicadas
- [x] Arquitectura documentada

## 🧪 Testing

- [x] Tests de componentes (`TaskItem.test.tsx`)
- [x] Tests de ejercicios (palindrome, uniqueUsers, rotateMatrix)
- [x] Jest configurado correctamente
- [x] Tests ejecutables con `npm test`

## 🎨 Assets (Opcional pero Recomendado)

- [ ] `assets/icon.png` (1024x1024)
- [ ] `assets/splash.png` (1242x2436)
- [ ] `assets/adaptive-icon.png` (1024x1024)
- [ ] `assets/favicon.png` (48x48)

**Nota**: Los assets son opcionales para desarrollo, pero necesarios para producción.

## 🚀 Verificación Final

Antes de enviar, verifica:

- [ ] El proyecto se ejecuta sin errores
- [ ] El backend funciona correctamente
- [ ] La app se conecta al backend
- [ ] Las funcionalidades offline funcionan
- [ ] Las notificaciones funcionan
- [ ] Los tests pasan (`npm test`)
- [ ] No hay errores de linting (`npm run lint`)
- [ ] El código está formateado (`npm run format`)

## 📦 Forma de Entrega

- [ ] Repositorio GitHub creado y actualizado
- [ ] README actualizado con enlace al repositorio
- [ ] Video demostrativo grabado (máx 2 minutos)
- [ ] Todos los archivos incluidos en el repositorio
- [ ] `.gitignore` configurado correctamente

## 📋 Archivos a Incluir

- [x] `package.json` (dependencias del proyecto)
- [x] `tsconfig.json` (configuración TypeScript)
- [x] `.eslintrc.js` (configuración ESLint)
- [x] `.prettierrc` (configuración Prettier)
- [x] `babel.config.js` (configuración Babel)
- [x] `jest.config.js` (configuración Jest)
- [x] `App.tsx` (componente raíz)
- [x] Todo el código fuente en `src/`
- [x] Ejercicios en `ejercicios/`
- [x] Backend en `backend/`
- [x] Documentación (README, respuestas teóricas)

## 🎯 Checklist de Funcionalidades

Prueba manualmente cada funcionalidad:

- [ ] La app inicia correctamente
- [ ] Se muestran las tareas desde la API
- [ ] Se puede crear una nueva tarea
- [ ] Se puede editar una tarea existente
- [ ] Se puede eliminar una tarea
- [ ] Se puede marcar una tarea como completada
- [ ] El pull-to-refresh funciona
- [ ] Los estados de carga se muestran correctamente
- [ ] Los errores se manejan correctamente
- [ ] El estado vacío se muestra cuando no hay tareas
- [ ] La app funciona sin conexión
- [ ] Las acciones offline se guardan
- [ ] La sincronización funciona al reconectar
- [ ] Las notificaciones se muestran correctamente
- [ ] El indicador de estado offline funciona

## ✅ Listo para Entregar

Una vez completado este checklist, tu proyecto está listo para ser entregado.

**¡Buena suerte!** 🚀

