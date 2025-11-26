# 🔧 Solución: Dependencias Faltantes de React Navigation

## Problema

Ves un error 500 que menciona:
```
Unable to resolve module react-native-safe-area-context
Unable to resolve module react-native-screens
```

## Causa

React Navigation requiere dependencias adicionales que no se instalaron automáticamente.

## Solución

### Instalar dependencias faltantes:

```bash
npx expo install react-native-safe-area-context react-native-screens
```

Este comando instala las versiones compatibles con tu SDK de Expo.

### Reiniciar Expo:

```bash
# Detener Expo (Ctrl+C)
npm start
```

O con tunnel:
```bash
npx expo start --tunnel
```

## Dependencias Requeridas por React Navigation

Para que React Navigation funcione correctamente, necesitas:

1. **react-native-safe-area-context** ✅ (ya instalado)
2. **react-native-screens** ✅ (ya instalado)
3. **@react-navigation/native** ✅ (ya estaba)
4. **@react-navigation/native-stack** ✅ (ya estaba)

## Verificar Instalación

En `package.json` deberías ver:

```json
{
  "dependencies": {
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "react-native-safe-area-context": "^...",
    "react-native-screens": "^..."
  }
}
```

## Si Sigue Sin Funcionar

### 1. Limpiar cache y reinstalar:

```bash
# Limpiar cache
npm start -- --reset-cache
```

### 2. Reinstalar todo:

```bash
# Eliminar node_modules
rimraf node_modules

# Reinstalar
npm install --legacy-peer-deps

# Instalar dependencias de React Navigation
npx expo install react-native-safe-area-context react-native-screens

# Iniciar
npx expo start --tunnel
```

## Otros Errores Comunes

### Error: "Unable to resolve module X"

**Solución:** Instala el módulo faltante:
```bash
npx expo install [nombre-del-modulo]
```

### Error: "Package X has unmet peer dependency Y"

**Solución:** Usa `--legacy-peer-deps`:
```bash
npm install --legacy-peer-deps
```

## Comando Todo-en-Uno

Si tienes múltiples errores de módulos faltantes:

```bash
# Instalar todas las dependencias de React Navigation
npx expo install react-native-safe-area-context react-native-screens @react-navigation/native @react-navigation/native-stack

# Reiniciar con cache limpio
npm start -- --reset-cache
```

---

**Las dependencias ya están instaladas. Escanea el nuevo QR cuando aparezca.** 🚀

