# 📱 Instalar Expo Go para SDK 51

## ⚠️ IMPORTANTE

Esta aplicación **TaskSync** usa **Expo SDK 51**. Si tienes instalada una versión más reciente de Expo Go (como SDK 54), necesitas instalar la versión compatible con SDK 51.

## 🤔 ¿Cómo saber qué versión tengo?

Si al abrir la app ves un error que dice:
- "Incompatible SDK version"
- "Project uses SDK 51"
- "Installed version is SDK 54"

Entonces necesitas instalar Expo Go SDK 51.

## 📥 Instalar Expo Go SDK 51

### Para Android

#### Opción 1: Link Directo (Recomendado) ⭐

1. **Abre este link en tu dispositivo Android:**
   ```
   https://expo.dev/go?sdkVersion=51
   ```

2. Se abrirá la página de descarga de Expo Go SDK 51

3. Toca "Download" y espera a que descargue

4. Instala el APK (permite instalar desde fuentes desconocidas si te lo pide)

#### Opción 2: Desde la Web de Expo

1. **Abre en tu navegador móvil:**
   ```
   https://expo.dev/go
   ```

2. Busca o selecciona **"SDK 51"**

3. Toca el botón de descarga para Android

4. Instala el APK descargado

#### Opción 3: APKMirror (Alternativa)

Si los links anteriores no funcionan:

1. Ve a https://www.apkmirror.com/
2. Busca "Expo Go"
3. Busca una versión que sea compatible con SDK 51 (versión 2.31.x aproximadamente)
4. Descarga e instala

### Para iOS

1. **Abre este link en tu iPhone/iPad:**
   ```
   https://expo.dev/go?platform=ios&sdkVersion=51
   ```

2. O usa TestFlight para instalar versiones específicas

**Nota:** En iOS es más complicado instalar versiones anteriores. Considera usar un emulador Android o actualizar el proyecto a SDK 54.

## 🔄 Si ya tienes Expo Go instalado

### Desinstalar versión actual

1. Ve a Configuración → Apps
2. Busca "Expo Go"
3. Toca "Desinstalar"
4. Confirma

### Instalar SDK 51

Sigue cualquiera de las opciones anteriores (se recomienda Opción 1).

## ✅ Verificar Instalación

Una vez instalado Expo Go SDK 51:

1. Abre la app Expo Go
2. En la esquina inferior deberías ver algo como "SDK 51" o "v2.31.x"
3. Escanea el código QR de tu proyecto
4. La app debería cargar sin errores de SDK

## 🚨 Problemas Comunes

### Error: "La app no se instala"

**Solución:** Permite instalar desde fuentes desconocidas:
1. Ve a Configuración → Seguridad
2. Activa "Fuentes desconocidas" o "Instalar apps desconocidas"
3. Intenta instalar nuevamente

### Error: "App is not compatible with this device"

**Solución:** Tu dispositivo puede ser muy antiguo. Intenta:
1. Actualizar Android a la última versión disponible
2. Usar un emulador en tu PC
3. Actualizar el proyecto a SDK 54

### Error: "Cannot open APK"

**Solución:** Descarga el APK nuevamente, puede estar corrupto.

## 📋 Resumen Rápido

```
1. Desinstala Expo Go actual (si tienes SDK 54)
2. Abre: https://expo.dev/go?sdkVersion=51
3. Descarga e instala
4. Escanea el QR del proyecto
5. ¡Listo!
```

## 🔗 Links Útiles

- **Android SDK 51**: https://expo.dev/go?sdkVersion=51
- **iOS SDK 51**: https://expo.dev/go?platform=ios&sdkVersion=51
- **Página principal**: https://expo.dev/go
- **Documentación Expo**: https://docs.expo.dev/

---

**¿Sigues teniendo problemas?**

Comparte el error exacto que ves y podremos ayudarte mejor.

