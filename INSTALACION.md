# 📦 Guía de Instalación

## ⚠️ IMPORTANTE: Versión de Expo Go

**Esta app usa SDK 51 de Expo**. Necesitas instalar la versión correcta de Expo Go:

### Instalar Expo Go para SDK 51

1. **Si ya tienes Expo Go instalado con SDK 54:**
   - Desinstala la app actual de Expo Go
   
2. **Descarga Expo Go compatible con SDK 51:**
   - Ve a: https://expo.dev/go
   - Busca "SDK 51" o descarga la versión compatible
   - También puedes buscar versiones anteriores en APKMirror o Google Play

3. **Alternativa (Google Play):**
   - Busca "Expo Go" en Google Play Store
   - Verifica que sea compatible con SDK 51
   - Si solo aparece SDK 54, usa el link de expo.dev/go

**Link directo para Expo Go SDK 51:**
- Android: https://expo.dev/go?sdkVersion=51
- iOS: https://expo.dev/go?platform=ios&sdkVersion=51

## ⚠️ Importante: Resolución de Conflictos de Dependencias

Si encuentras errores al instalar las dependencias, sigue estos pasos:

## 🚀 Instalación Paso a Paso

### 1. Instalar Dependencias del Proyecto Principal

```bash
npm install --legacy-peer-deps
```

**¿Por qué `--legacy-peer-deps`?**
- Hay un conflicto menor entre versiones de `react-test-renderer`
- Esta flag permite instalar las dependencias ignorando conflictos de peer dependencies
- No afecta la funcionalidad del proyecto

### 2. Instalar Dependencias del Backend

```bash
cd backend
npm install
cd ..
```

### 3. Verificar que Todo Funciona

```bash
# Ejecutar tests
npm test

# Deberías ver:
# Test Suites: 4 passed, 4 total
# Tests:       21 passed, 21 total
```

## ✅ Verificación Completa

Después de instalar, verifica que todo funciona:

```bash
# 1. Tests pasan
npm test

# 2. Linting funciona
npm run lint

# 3. Backend funciona
cd backend
npm start
# Deberías ver: "🚀 Servidor corriendo en http://localhost:3000"
```

## 🔧 Solución de Problemas

### Error: "jest no se reconoce como comando"

**Solución:**
```bash
npm install --legacy-peer-deps
```

### Error: "ERESOLVE unable to resolve dependency tree"

**Solución:**
```bash
npm install --legacy-peer-deps
```

### Error: Tests fallan con AsyncStorage

**Solución:** Ya está resuelto en `jest.setup.js` con mocks. Si persiste:

```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Error: Backend no inicia

**Solución:**
```bash
cd backend
npm install
npm start
```

## 📝 Notas

- ✅ Usa `--legacy-peer-deps` siempre que instales dependencias
- ✅ Los tests están configurados y funcionando
- ✅ Los mocks están configurados en `jest.setup.js`
- ✅ El backend es independiente y se instala por separado

## 🎯 Comandos Rápidos

```bash
# Instalar todo
npm install --legacy-peer-deps
cd backend && npm install && cd ..

# Ejecutar tests
npm test

# Ejecutar app
npm start

# Ejecutar backend
cd backend && npm start
```

---

**¡Listo para desarrollar!** 🚀

