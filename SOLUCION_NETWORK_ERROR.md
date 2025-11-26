# 🔧 Solución: "Failed to download remote update"

Este error significa que tu dispositivo Android no puede conectarse al servidor Metro de Expo.

## 🚀 Solución 1: Usar Tunnel de Expo (MÁS FÁCIL) ⭐

Expo tiene un modo "tunnel" que funciona incluso si hay problemas de red:

```bash
# Detener Expo (Ctrl+C)

# Iniciar con tunnel
npx expo start --tunnel
```

Esto creará un túnel público que tu dispositivo puede alcanzar.

**Ventajas:**
- ✅ Funciona incluso si hay problemas de red local
- ✅ No necesitas estar en la misma WiFi
- ✅ Más confiable

**Desventajas:**
- ⚠️ Puede ser un poco más lento
- ⚠️ Requiere conexión a internet

## 🔧 Solución 2: Verificar Conectividad de Red

### Paso 1: Verificar que estés en la misma red WiFi

Tu PC y tu Android deben estar en la misma red WiFi.

### Paso 2: Verificar que el firewall no bloquee

En Windows:
1. Abre "Firewall de Windows Defender"
2. Permite Node.js y Expo a través del firewall
3. O temporalmente desactiva el firewall para probar

### Paso 3: Verificar la IP

Asegúrate de que la IP en `src/services/api.ts` sea correcta:
- Tu IP actual: `192.168.0.121`
- Verifica con `ipconfig` que no haya cambiado

### Paso 4: Probar conectividad desde el dispositivo

En tu Android, abre un navegador y prueba:
```
http://192.168.0.121:8081
```

Si no carga, hay un problema de conectividad.

## 🔧 Solución 3: Usar LAN en lugar de Tunnel

```bash
# Detener Expo (Ctrl+C)

# Iniciar en modo LAN
npx expo start --lan
```

Esto fuerza a Expo a usar la red local.

## 🔧 Solución 4: Especificar IP Manualmente

```bash
# Detener Expo (Ctrl+C)

# Iniciar con IP específica
npx expo start --host 192.168.0.121
```

## 📋 Checklist de Verificación

- [ ] PC y Android en la misma WiFi
- [ ] Firewall permite Node.js/Expo
- [ ] IP correcta (`192.168.0.121`)
- [ ] Backend corriendo en puerto 3000
- [ ] Expo corriendo en puerto 8081

## 🎯 Solución Recomendada (Paso a Paso)

1. **Detener Expo actual** (Ctrl+C)

2. **Iniciar con tunnel** (más confiable):
   ```bash
   npx expo start --tunnel
   ```

3. **Esperar a que aparezca el QR** (puede tardar unos segundos)

4. **Escanear el QR** con Expo Go

5. **Si funciona**, el problema era de conectividad de red local

## 💡 Alternativa: Probar en Emulador

Si tienes problemas con dispositivo físico, prueba con emulador:

1. Abre Android Studio
2. Inicia un emulador
3. En Expo, presiona `a`
4. El emulador puede usar `localhost` directamente

---

**Prueba primero con `--tunnel` que es la solución más rápida y confiable.**

