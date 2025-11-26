# Respuestas Teóricas - Prueba Técnica

## SECCIÓN 1 — PREGUNTAS TEÓRICAS

### 1.1 React / React Native

#### 1. Explica la diferencia entre useEffect, useMemo y useCallback. ¿Cuándo usarías cada uno para mejorar el rendimiento en móviles?

**useEffect:**
- Hook para efectos secundarios (side effects)
- Se ejecuta después del render
- Útil para: llamadas API, suscripciones, manipulación del DOM, limpieza de recursos
- No afecta directamente el rendimiento del render, pero puede optimizar cuándo se ejecutan los efectos

**useMemo:**
- Memoiza el resultado de un cálculo costoso
- Solo recalcula cuando las dependencias cambian
- Útil para: cálculos pesados, filtrado/transformación de arrays grandes, evitar re-renders innecesarios
- Mejora el rendimiento evitando cálculos repetidos

**useCallback:**
- Memoiza una función
- Retorna la misma referencia de función si las dependencias no cambian
- Útil para: funciones pasadas como props a componentes memoizados, evitar recrear funciones en cada render
- Mejora el rendimiento evitando re-renders de componentes hijos

**Ejemplos para móviles:**

```typescript
// useMemo: Filtrar lista grande de tareas
const filteredTasks = useMemo(() => {
  return tasks.filter(t => {
    // Cálculo costoso
    return matchesSearch(t, searchQuery) && matchesFilter(t, filter);
  });
}, [tasks, searchQuery, filter]);

// useCallback: Función para toggle que se pasa a muchos items
const handleToggle = useCallback((id: number) => {
  toggleTask(id);
}, [toggleTask]);

// useEffect: Cargar datos al montar
useEffect(() => {
  fetchTasks();
}, []);
```

**Cuándo usar cada uno:**
- **useMemo**: Cuando tienes cálculos costosos que no quieres repetir en cada render
- **useCallback**: Cuando pasas funciones a componentes memoizados o como dependencias de otros hooks
- **useEffect**: Para efectos secundarios que deben ejecutarse después del render

#### 2. Explica cómo manejarías:

**Cache de datos con React Query o Apollo Client:**

**React Query:**
```typescript
const { data, isLoading, refetch } = useQuery(
  'tasks',
  fetchTasks,
  {
    staleTime: 5 * 60 * 1000, // 5 minutos
    cacheTime: 10 * 60 * 1000, // 10 minutos en cache
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  }
);
```

**Apollo Client:**
```typescript
const { data, loading } = useQuery(GET_TASKS, {
  fetchPolicy: 'cache-first', // Usar cache primero
  nextFetchPolicy: 'cache-and-network', // Luego actualizar
});
```

**Sincronización offline → online:**

1. **Queue de acciones pendientes**: Guardar acciones en AsyncStorage cuando está offline
2. **Detección de conexión**: Usar `@react-native-community/netinfo` para detectar cambios
3. **Sincronización automática**: Al reconectar, procesar la cola de acciones pendientes
4. **Conflict resolution**: Estrategia de "last write wins" o usar timestamps para resolver conflictos

```typescript
// Ejemplo de implementación
const syncPendingActions = async () => {
  const pendingActions = await getPendingActions();
  for (const action of pendingActions) {
    try {
      await executeAction(action);
      await removePendingAction(action.id);
    } catch (error) {
      // Manejar error, mantener en cola
    }
  }
};

// Escuchar cambios de red
NetInfo.addEventListener(state => {
  if (state.isConnected) {
    syncPendingActions();
  }
});
```

**Prevención de doble request en pantallas navegables:**

```typescript
// Opción 1: Flag de loading
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

// Opción 2: React Query (ya maneja esto automáticamente)
const { data, refetch } = useQuery('key', fetcher, {
  enabled: false, // No auto-fetch
});

// Opción 3: Debounce
const debouncedFetch = useMemo(
  () => debounce(fetchData, 300),
  [fetchData]
);
```

#### 3. ¿Qué diferencia existe entre desarrollar una app con Expo versus React Native CLI?

**Expo:**
- ✅ Desarrollo más rápido y fácil
- ✅ Over-the-air updates (actualizaciones sin pasar por stores)
- ✅ Builds en la nube con EAS Build
- ✅ Muchas APIs nativas pre-configuradas (cámara, notificaciones, etc.)
- ✅ No requiere Xcode/Android Studio para desarrollo básico
- ❌ Limitado a APIs disponibles en Expo SDK
- ❌ Bundle más grande (incluye Expo runtime)
- ❌ Menos control sobre código nativo

**React Native CLI:**
- ✅ Control total sobre código nativo
- ✅ Puede usar cualquier librería nativa
- ✅ Bundle más pequeño
- ✅ Más flexible para casos específicos
- ❌ Configuración más compleja
- ❌ Requiere conocimiento de iOS/Android nativo
- ❌ Más tiempo de setup inicial

**¿Cuál usarías para un proyecto productivo con cámara, deep linking y builds automatizadas?**

**Recomendación: Expo con EAS Build**

Razones:
1. **Cámara**: `expo-camera` funciona perfectamente y es fácil de usar
2. **Deep linking**: Expo maneja esto automáticamente con `expo-linking` y `expo-router`
3. **Builds automatizadas**: EAS Build es excelente para CI/CD, más fácil que Fastlane
4. **Over-the-air updates**: Útil para hotfixes rápidos sin pasar por stores
5. **Menos mantenimiento**: Expo maneja muchas configuraciones automáticamente

Si necesitas librerías muy específicas no disponibles en Expo, usar **Expo bare workflow** o migrar a **React Native CLI**.

#### 4. Describe cómo optimizarías el rendimiento de una app React Native en:

**Renderizado de listas:**
- Usar `FlatList` en lugar de `ScrollView` + `map` (virtualización)
- `getItemLayout` para listas de altura fija (evita cálculos)
- `removeClippedSubviews={true}` (elimina vistas fuera de pantalla)
- `maxToRenderPerBatch` y `windowSize` ajustados
- `keyExtractor` optimizado (usar IDs únicos)
- `React.memo` en componentes de items si es necesario

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
  initialNumToRender={10}
/>
```

**Navegación:**
- Usar `React Navigation` (optimizado y mantenido)
- Lazy loading de pantallas con `React.lazy` o carga condicional
- `useMemo` para opciones de navegación
- Evitar re-renders innecesarios con `React.memo` en componentes de navegación
- Usar `useCallback` para funciones pasadas a `navigation.setOptions`

**Tamaño del bundle:**
- Code splitting con lazy imports
- Tree shaking (eliminar código no usado)
- Usar `react-native-bundle-visualizer` para identificar problemas
- Eliminar dependencias innecesarias
- Usar `hermes` engine (más eficiente)
- Optimizar imágenes y assets
- Considerar usar `react-native-reanimated` en lugar de `Animated` para mejor rendimiento

**Imágenes y assets:**
- Optimizar imágenes antes de incluirlas (comprimir, redimensionar)
- Usar formatos WebP cuando sea posible (mejor compresión)
- Lazy loading de imágenes con `react-native-fast-image`
- `resizeMode` apropiado para evitar redimensionamiento en runtime
- Considerar CDN para producción
- Usar `require()` para assets locales (mejor que URLs)

### 1.2 Arquitectura y Backend

#### 5. Describe (o dibuja) una arquitectura simple con:

```
┌─────────────────────────────────────┐
│      React Native App               │
│                                     │
│  ┌───────────────────────────────┐ │
│  │      UI Layer (Screens)       │ │
│  └───────────────────────────────┘ │
│              │                     │
│  ┌───────────────────────────────┐ │
│  │   State Management (Zustand)  │ │
│  └───────────────────────────────┘ │
│              │                     │
│  ┌───────────────────────────────┐ │
│  │   Service Layer (API Client)  │ │
│  │   - Retry Logic               │ │
│  │   - Error Handling            │ │
│  └───────────────────────────────┘ │
│              │                     │
│  ┌───────────────────────────────┐ │
│  │   Storage (AsyncStorage)      │ │
│  │   - Cache                     │ │
│  │   - Pending Actions           │ │
│  └───────────────────────────────┘ │
└──────────────┼─────────────────────┘
               │ HTTPS/REST
               │
┌──────────────┼─────────────────────┐
│   API Server (Express/Node.js)     │
│                                     │
│  ┌───────────────────────────────┐ │
│  │   Authentication Middleware   │ │
│  │   (JWT Verification)          │ │
│  └───────────────────────────────┘ │
│              │                     │
│  ┌───────────────────────────────┐ │
│  │   Business Logic              │ │
│  └───────────────────────────────┘ │
│              │                     │
│  ┌───────────────────────────────┐ │
│  │   Database (PostgreSQL)       │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘

Flujo de Autenticación (JWT):
1. Usuario hace login → API valida credenciales
2. API genera JWT token → Envía token al cliente
3. Cliente guarda token en AsyncStorage
4. Cliente incluye token en headers de requests
5. API valida token en cada request
6. Si token expira → Refresh token o re-login
```

#### 6. Explica cómo estructurarías la arquitectura interna de tu app (carpetas, componentes, servicios, hooks, estados).

```
src/
├── components/           # Componentes reutilizables (UI pura)
│   ├── TaskItem/
│   │   ├── TaskItem.tsx
│   │   ├── TaskItem.styles.ts
│   │   └── TaskItem.test.tsx
│   ├── Button/
│   ├── Input/
│   └── ...
│
├── screens/             # Pantallas completas (lógica + UI)
│   ├── TaskList/
│   │   ├── TaskListScreen.tsx
│   │   └── TaskListScreen.styles.ts
│   ├── TaskForm/
│   └── ...
│
├── services/           # Lógica de negocio y APIs
│   ├── api.ts          # Cliente HTTP con interceptores
│   ├── storage.ts      # AsyncStorage wrapper
│   ├── auth.ts         # Autenticación
│   └── notifications.ts
│
├── store/              # Estado global (Zustand/Redux)
│   ├── taskStore.ts
│   ├── authStore.ts
│   └── index.ts
│
├── hooks/              # Custom hooks
│   ├── useNetworkStatus.ts
│   ├── useDebounce.ts
│   └── useAuth.ts
│
├── types/              # TypeScript types/interfaces
│   ├── index.ts
│   ├── task.ts
│   └── auth.ts
│
├── utils/              # Utilidades puras
│   ├── formatters.ts   # formatDate, formatCurrency, etc.
│   ├── validators.ts   # validateEmail, etc.
│   └── constants.ts
│
├── navigation/         # Configuración de navegación
│   ├── AppNavigator.tsx
│   └── types.ts
│
└── constants/          # Constantes
    ├── colors.ts
    ├── sizes.ts
    └── index.ts
```

**Principios de organización:**
- **Separación de responsabilidades**: Cada carpeta tiene un propósito claro
- **Componentes pequeños**: Fáciles de testear y reutilizar
- **Hooks para lógica compartida**: Evitar duplicación
- **Tipos TypeScript**: En todos lados para type safety
- **Servicios para abstraer APIs**: Fácil de mockear en tests
- **Store centralizado**: Estado global en un solo lugar

#### 7. Explica cómo implementarías un flujo básico de CI/CD para React Native usando EAS Build o Fastlane (solo conceptual).

**Con EAS Build (Expo):**

```yaml
# .github/workflows/build.yml
name: Build and Deploy

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build-android:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm install -g eas-cli
      - run: eas build --platform android --profile production --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}

  build-ios:
    needs: test
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm install -g eas-cli
      - run: eas build --platform ios --profile production --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}

  deploy:
    needs: [build-android, build-ios]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install -g eas-cli
      - run: eas submit --platform all --latest --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
```

**Con Fastlane (React Native CLI):**

```ruby
# fastlane/Fastfile
platform :android do
  desc "Build Android APK"
  lane :build do
    gradle(
      task: "assembleRelease",
      build_type: "Release",
      properties: {
        "android.injected.signing.store.file" => ENV["KEYSTORE_PATH"],
        "android.injected.signing.store.password" => ENV["KEYSTORE_PASSWORD"],
        "android.injected.signing.key.alias" => ENV["KEY_ALIAS"],
        "android.injected.signing.key.password" => ENV["KEY_PASSWORD"]
      }
    )
  end

  desc "Deploy to Play Store"
  lane :deploy do
    build
    upload_to_play_store(
      track: "internal",
      aab: "android/app/build/outputs/bundle/release/app-release.aab"
    )
  end
end

platform :ios do
  desc "Build iOS"
  lane :build do
    build_app(
      scheme: "TaskSync",
      export_method: "app-store",
      export_options: {
        method: "app-store",
        provisioningProfiles: {
          "com.tasksync.app" => "TaskSync Distribution Profile"
        }
      }
    )
  end

  desc "Deploy to App Store"
  lane :deploy do
    build
    upload_to_app_store(
      skip_screenshots: true,
      skip_metadata: true
    )
  end
end
```

**Flujo típico:**
1. **Push a branch** → Trigger CI
2. **Run tests** → Si pasan, continuar
3. **Lint check** → Verificar código
4. **Build app** → EAS Build o Fastlane
5. **Deploy** → App Store / Play Store (automático o manual)
6. **OTA Update** → Expo Updates para cambios JS (solo Expo)

**Ventajas de cada uno:**
- **EAS Build**: Más fácil, menos configuración, builds en la nube
- **Fastlane**: Más control, builds locales, más flexible

