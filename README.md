# TaskSync - Mini App React Native

Aplicación móvil desarrollada con React Native y Expo para la gestión de tareas con soporte offline y sincronización automática.

## 📋 Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Funcionalidades](#funcionalidades)
- [Respuestas Teóricas](#respuestas-teóricas)
- [Testing](#testing)
- [Mejoras Futuras](#mejoras-futuras)

## 🚀 Requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0 o yarn >= 1.22.0
- Expo CLI (se instala automáticamente con npm install)
- Para desarrollo móvil:
  - iOS: Xcode (solo macOS)
  - Android: Android Studio y Android SDK

## 📦 Instalación

### ⚠️ IMPORTANTE: Expo Go SDK 51

**Esta app requiere Expo Go SDK 51.** Si tienes instalada una versión más reciente, necesitas:

1. **Desinstalar Expo Go actual** (si tienes SDK 54)
2. **Instalar Expo Go SDK 51:**
   - **Link directo Android**: https://expo.dev/go?sdkVersion=51
   - **Link directo iOS**: https://expo.dev/go?platform=ios&sdkVersion=51
   - O visita: https://expo.dev/go y busca SDK 51

### Instalación del Proyecto

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd mini-app
```

2. Instalar dependencias:
```bash
npm install --legacy-peer-deps
```

**Nota:** Usa `--legacy-peer-deps` para evitar conflictos de dependencias. Ver `INSTALACION.md` para más detalles.

3. Instalar dependencias del backend:
```bash
cd backend
npm install
cd ..
```

## ⚙️ Configuración

### ⚠️ IMPORTANTE: Expo Go SDK 51

**Esta aplicación requiere Expo Go SDK 51.** Descarga la versión correcta:

- **Android**: https://expo.dev/go?sdkVersion=51
- **iOS**: https://expo.dev/go?platform=ios&sdkVersion=51
- **Página principal**: https://expo.dev/go

### Backend API

El backend debe estar corriendo antes de iniciar la aplicación móvil.

1. Iniciar el servidor backend:
```bash
cd backend
npm install
npm start
```

El servidor estará disponible en `http://localhost:3000`

### Configuración de la API en la app

Si necesitas cambiar la URL de la API, edita el archivo `src/services/api.ts`:

```typescript
const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'  // Cambiar si es necesario
  : 'https://your-production-api.com/api';
```

**Nota para dispositivos físicos**: Si ejecutas la app en un dispositivo físico, necesitarás usar la IP de tu máquina en lugar de `localhost`. Ejemplo: `http://192.168.1.100:3000/api`

## 🏃 Ejecución

### Desarrollo

1. **Iniciar el backend** (en una terminal):
```bash
cd backend
npm install
npm start
```

Deberías ver: `🚀 Servidor corriendo en http://localhost:3000`

2. **Iniciar Expo con Tunnel** (en otra terminal):
```bash
npx expo start --tunnel
```

**⚠️ IMPORTANTE:** Usa `--tunnel` para evitar problemas de conectividad.

3. **Escanear el código QR:**
   - Abre **Expo Go SDK 51** en tu dispositivo
   - Escanea el código QR que aparece en la terminal
   - Espera a que la app cargue

**Nota:** Si el puerto 8081 está ocupado, Expo usará automáticamente otro puerto. El modo tunnel funciona independientemente del puerto.

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Formateo de código

```bash
npm run format
```

## 📁 Estructura del Proyecto

```
mini-app/
├── backend/                 # API REST simple
│   ├── server.js           # Servidor Express
│   └── package.json
├── ejercicios/             # Ejercicios de código
│   ├── ejercicio1-palindromo.ts
│   ├── ejercicio2-lista-sin-duplicados.ts
│   └── ejercicio3-rotacion-matriz.ts
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── TaskItem.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── NetworkStatusBar.tsx
│   ├── screens/            # Pantallas de la app
│   │   ├── TaskListScreen.tsx
│   │   └── TaskFormScreen.tsx
│   ├── services/           # Servicios y APIs
│   │   ├── api.ts          # Cliente API con retry
│   │   └── storage.ts      # AsyncStorage wrapper
│   ├── store/              # Estado global (Zustand)
│   │   └── taskStore.ts
│   ├── hooks/              # Hooks personalizados
│   │   └── useNetworkStatus.ts
│   ├── types/              # Tipos TypeScript
│   │   └── index.ts
│   └── utils/              # Utilidades
├── App.tsx                  # Componente raíz
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## 🎯 Decisiones Técnicas

### Manejo de Estado: Zustand

**¿Por qué Zustand?**

- **Simplicidad**: API minimalista y fácil de entender
- **Rendimiento**: Menos overhead que Redux, más ligero
- **TypeScript**: Excelente soporte nativo
- **Sin boilerplate**: No requiere providers ni acciones/reducers complejos
- **Ideal para móviles**: Menor tamaño de bundle que Redux Toolkit

Alternativas consideradas:
- **Redux Toolkit**: Demasiado boilerplate para este proyecto
- **React Context**: Puede causar re-renders innecesarios
- **Jotai**: Similar a Zustand pero con sintaxis más compleja

### Funcionalidad Nativa: Notificaciones Locales

Se implementó **expo-notifications** para notificaciones locales porque:
- Es una funcionalidad nativa común y útil
- No requiere configuración compleja de permisos
- Mejora la UX al informar al usuario sobre acciones importantes
- Fácil de extender a notificaciones push en el futuro

### Arquitectura Offline-First

1. **AsyncStorage**: Almacenamiento local persistente
2. **Queue de acciones pendientes**: Guarda acciones offline para sincronizar después
3. **Detección de red**: Usa `@react-native-community/netinfo`
4. **Sincronización automática**: Al reconectar, sincroniza automáticamente

### Integración API

- **Axios**: Cliente HTTP con interceptores para retry automático
- **Exponential backoff**: Reintentos inteligentes con delay progresivo
- **Manejo de errores**: Fallback a datos en cache si falla la API
- **Timeout**: 10 segundos para evitar esperas infinitas

## ✨ Funcionalidades

### ✅ Funcionalidades Implementadas

1. **CRUD completo de tareas**
   - Listar tareas desde API
   - Crear nuevas tareas
   - Editar tareas existentes
   - Eliminar tareas
   - Marcar como completada/no completada

2. **Manejo de estados**
   - Loading states
   - Error states con retry
   - Empty states

3. **Offline-First**
   - Funciona sin conexión
   - Guarda acciones pendientes
   - Sincronización automática al reconectar
   - Indicador visual de estado offline

4. **Notificaciones locales**
   - Notificación al crear tarea
   - Notificación al sincronizar acciones pendientes

5. **UI/UX**
   - Diseño moderno y limpio
   - Pull-to-refresh
   - Animaciones suaves
   - Feedback visual inmediato

## 📚 Respuestas Teóricas

### 1.1 React / React Native

#### 1. useEffect, useMemo y useCallback

**useEffect**: Hook para efectos secundarios (side effects). Se ejecuta después del render y puede tener dependencias.

```typescript
useEffect(() => {
  // Efecto secundario (API call, suscripciones, etc.)
}, [dependencies]);
```

**useMemo**: Memoiza el resultado de un cálculo costoso. Solo recalcula cuando las dependencias cambian.

```typescript
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

**useCallback**: Memoiza una función. Útil para evitar recrear funciones en cada render.

```typescript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Cuándo usar cada uno en móviles:**

- **useMemo**: Para cálculos pesados, filtrado/transformación de listas grandes, evitar re-renders innecesarios
- **useCallback**: Para funciones pasadas como props a componentes memoizados, evitar recrear funciones en listas
- **useEffect**: Para suscripciones, llamadas API, limpieza de recursos

**Ejemplo práctico móvil:**
```typescript
// useMemo: Filtrar lista grande de tareas
const filteredTasks = useMemo(() => {
  return tasks.filter(t => t.completed === filterCompleted);
}, [tasks, filterCompleted]);

// useCallback: Función para toggle que se pasa a muchos items
const handleToggle = useCallback((id: number) => {
  toggleTask(id);
}, [toggleTask]);
```

#### 2. Manejo de Cache y Sincronización

**Cache con React Query o Apollo Client:**

**React Query:**
```typescript
const { data, isLoading } = useQuery('tasks', fetchTasks, {
  staleTime: 5 * 60 * 1000, // 5 minutos
  cacheTime: 10 * 60 * 1000, // 10 minutos
  refetchOnWindowFocus: false,
});
```

**Apollo Client:**
```typescript
const { data, loading } = useQuery(GET_TASKS, {
  fetchPolicy: 'cache-first',
  nextFetchPolicy: 'cache-and-network',
});
```

**Sincronización Offline → Online:**

1. **Queue de acciones pendientes**: Guardar acciones en AsyncStorage
2. **Detección de conexión**: Usar NetInfo para detectar cambios
3. **Sincronización automática**: Al reconectar, procesar la cola
4. **Conflict resolution**: Estrategia de "last write wins" o timestamps

**Prevención de doble request:**

```typescript
// Usando flags o debounce
const [isFetching, setIsFetching] = useState(false);

const fetchData = useCallback(async () => {
  if (isFetching) return;
  setIsFetching(true);
  try {
    await api.getData();
  } finally {
    setIsFetching(false);
  }
}, [isFetching]);

// O con React Query
const { refetch } = useQuery('key', fetcher, {
  enabled: false, // No auto-fetch
});
```

#### 3. Expo vs React Native CLI

**Expo:**
- ✅ Desarrollo más rápido
- ✅ Over-the-air updates
- ✅ Builds en la nube (EAS Build)
- ✅ Muchas APIs nativas pre-configuradas
- ❌ Limitado a APIs disponibles en Expo
- ❌ Bundle más grande

**React Native CLI:**
- ✅ Control total sobre código nativo
- ✅ Cualquier librería nativa
- ✅ Bundle más pequeño
- ❌ Configuración más compleja
- ❌ Requiere conocimiento de iOS/Android nativo

**Para proyecto productivo con cámara, deep linking y builds automatizadas:**

**Recomendación: Expo con EAS Build**

Razones:
1. **Cámara**: `expo-camera` funciona perfectamente
2. **Deep linking**: Expo maneja esto automáticamente con `expo-linking`
3. **Builds automatizadas**: EAS Build es excelente para CI/CD
4. **Over-the-air updates**: Útil para hotfixes rápidos

Si necesitas librerías muy específicas no disponibles en Expo, usar **Expo bare workflow** o migrar a **React Native CLI**.

#### 4. Optimización de Rendimiento

**Renderizado de listas:**
- Usar `FlatList` en lugar de `ScrollView` + `map`
- `getItemLayout` para listas de altura fija
- `removeClippedSubviews={true}`
- `maxToRenderPerBatch` y `windowSize`
- `keyExtractor` optimizado

```typescript
<FlatList
  data={items}
  keyExtractor={item => item.id.toString()}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews
  maxToRenderPerBatch={10}
  windowSize={5}
/>
```

**Navegación:**
- Usar `React Navigation` (optimizado)
- Lazy loading de pantallas
- `useMemo` para opciones de navegación
- Evitar re-renders innecesarios con `React.memo`

**Tamaño del bundle:**
- Code splitting con lazy imports
- Tree shaking
- Usar `react-native-bundle-visualizer`
- Eliminar dependencias innecesarias
- Usar `hermes` engine

**Imágenes y assets:**
- Optimizar imágenes antes de incluirlas
- Usar formatos WebP cuando sea posible
- Lazy loading de imágenes
- `resizeMode` apropiado
- Considerar CDN para producción

### 1.2 Arquitectura y Backend

#### 5. Arquitectura Simple

```
┌─────────────────┐
│  React Native   │
│     App         │
│                 │
│  ┌───────────┐  │
│  │  Zustand  │  │  Estado Global
│  │   Store   │  │
│  └───────────┘  │
│        │        │
│  ┌───────────┐  │
│  │  Service  │  │  API Client
│  │   Layer   │  │  + Retry Logic
│  └───────────┘  │
│        │        │
└────────┼────────┘
         │ HTTPS/REST
         │
┌────────┼────────┐
│  API REST/      │
│  GraphQL        │
│  Server         │
└─────────────────┘
         │
┌────────┼────────┐
│  Database      │
│  (PostgreSQL/  │
│   MongoDB)     │
└─────────────────┘

Cache Local:
┌─────────────────┐
│  AsyncStorage   │
│                 │
│  - Tasks Cache  │
│  - Pending      │
│    Actions      │
└─────────────────┘

Autenticación:
┌─────────────────┐
│  JWT Flow:      │
│                 │
│  1. Login       │
│  2. Get Token   │
│  3. Store Token │
│  4. Add to      │
│     Headers     │
└─────────────────┘
```

#### 6. Estructura Interna de la App

```
src/
├── components/        # Componentes reutilizables (UI pura)
│   ├── TaskItem/
│   │   ├── TaskItem.tsx
│   │   ├── TaskItem.styles.ts
│   │   └── TaskItem.test.tsx
│   └── ...
├── screens/          # Pantallas completas (lógica + UI)
│   ├── TaskList/
│   └── TaskForm/
├── services/         # Lógica de negocio y APIs
│   ├── api.ts        # Cliente HTTP
│   ├── storage.ts    # AsyncStorage wrapper
│   └── auth.ts       # Autenticación
├── store/            # Estado global (Zustand/Redux)
│   ├── taskStore.ts
│   └── authStore.ts
├── hooks/            # Custom hooks
│   ├── useNetworkStatus.ts
│   └── useDebounce.ts
├── types/            # TypeScript types/interfaces
│   └── index.ts
├── utils/            # Utilidades puras
│   ├── formatters.ts
│   └── validators.ts
└── constants/        # Constantes
    └── index.ts
```

**Principios:**
- Separación de responsabilidades
- Componentes pequeños y reutilizables
- Hooks para lógica compartida
- Tipos TypeScript en todos lados
- Servicios para abstraer APIs

#### 7. CI/CD para React Native

**Con EAS Build:**

```yaml
# .github/workflows/build.yml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm install -g eas-cli
      - run: eas build --platform android --profile production --non-interactive
      - run: eas build --platform ios --profile production --non-interactive
      - run: eas submit --platform all --latest
```

**Con Fastlane:**

```ruby
# fastlane/Fastfile
platform :android do
  desc "Build Android APK"
  lane :build do
    gradle(
      task: "assembleRelease",
      build_type: "Release"
    )
  end
end

platform :ios do
  desc "Build iOS"
  lane :build do
    build_app(
      scheme: "TaskSync",
      export_method: "app-store"
    )
  end
end
```

**Flujo típico:**
1. Push a `main` → Trigger CI
2. Run tests → Si pasan, continuar
3. Build app → EAS Build o Fastlane
4. Deploy → App Store / Play Store (automático o manual)
5. OTA Update → Expo Updates para cambios JS

## 🧪 Testing

Los tests están ubicados en `src/**/__tests__/` y cubren:

- Componentes: `TaskItem.test.tsx`
- Utilidades: Tests para los ejercicios de código

Ejecutar tests:
```bash
npm test
```

## 🚀 Mejoras Futuras

1. **Autenticación completa**
   - Login/Registro
   - JWT tokens con refresh
   - Biometría (Face ID / Touch ID)

2. **Mejoras de UX**
   - Búsqueda y filtros avanzados
   - Categorías y etiquetas
   - Fechas de vencimiento
   - Recordatorios programados

3. **Funcionalidades nativas adicionales**
   - Cámara para adjuntar fotos a tareas
   - GPS para ubicación
   - Deep linking para compartir tareas

4. **Rendimiento**
   - Virtualización mejorada de listas
   - Lazy loading de imágenes
   - Optimización de bundle size

5. **Testing**
   - Más tests unitarios
   - Tests de integración
   - E2E tests con Detox

6. **Backend**
   - Base de datos real (PostgreSQL/MongoDB)
   - Autenticación JWT
   - WebSockets para sincronización en tiempo real

## 📝 Notas Adicionales

- El backend está en modo desarrollo y usa almacenamiento en memoria
- Para producción, conectar a una base de datos real
- Las notificaciones requieren permisos del usuario
- La sincronización offline es básica pero funcional

## 👤 Autor

Desarrollado como parte de la prueba técnica para Desarrollador Fullstack Mid React Native.

---

**¡Gracias por revisar el proyecto!** 🎉

