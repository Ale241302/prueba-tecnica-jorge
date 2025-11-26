# 🔧 Solución de Error "Something went wrong"

## Pasos para Diagnosticar y Solucionar

### Paso 1: Ver el Log de Errores Completo

En tu teléfono Android, toca **"View error log"** en la pantalla de error. Esto te mostrará el error específico.

O en la terminal donde corre Expo, deberías ver el error en los logs.

### Paso 2: Soluciones Comunes

#### Solución 1: Limpiar Cache y Reinstalar

```bash
# Detener Expo (Ctrl+C)

# Limpiar cache de Metro
npm start -- --reset-cache

# Si no funciona, reinstalar dependencias
rm -rf node_modules
npm install --legacy-peer-deps
npm start -- --reset-cache
```

#### Solución 2: Verificar que babel-plugin-module-resolver esté instalado

```bash
npm install babel-plugin-module-resolver --save-dev --legacy-peer-deps
```

#### Solución 3: Simplificar babel.config.js temporalmente

Si el problema es con module-resolver, podemos simplificarlo:

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

#### Solución 4: Verificar errores de sintaxis

```bash
npm run lint
```

#### Solución 5: Probar sin el store al inicio

Temporalmente comentar el uso del store en App.tsx para ver si ese es el problema.

### Paso 3: Verificar Logs en Tiempo Real

En la terminal de Expo, deberías ver errores específicos. Busca líneas que digan:
- `Error:`
- `TypeError:`
- `Cannot find module:`
- `SyntaxError:`

### Paso 4: Verificar Versiones de Paquetes

Las advertencias sobre versiones pueden causar problemas:

```bash
npm install @react-native-async-storage/async-storage@1.23.1 --legacy-peer-deps
npm install @react-native-community/netinfo@11.3.1 --legacy-peer-deps
```

## 🔍 Diagnóstico Rápido

**¿Qué error específico ves en "View error log"?**

Comparte el error completo para poder ayudarte mejor.

