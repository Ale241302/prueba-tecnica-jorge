# 🔧 Solución: Puerto Ocupado (8081)

## Problema

Ves este error:
```
Port 8081 is being used by another process
Failed to connect to /127.0.0.1:8082
```

Esto significa que:
1. Otro proceso está usando el puerto 8081
2. Expo usa el puerto 8082 en su lugar
3. Pero tu dispositivo intenta conectarse al puerto incorrecto o a localhost

## Solución Rápida: Usar Tunnel ⭐

La forma más fácil es usar el modo tunnel:

```bash
# Detener Expo actual (Ctrl+C)

# Iniciar con tunnel
npx expo start --tunnel
```

**Ventajas del tunnel:**
- ✅ No importa qué puerto use
- ✅ Funciona incluso si hay problemas de red
- ✅ No necesita estar en la misma WiFi

## Solución 2: Liberar el Puerto 8081

### Paso 1: Encontrar qué proceso usa el puerto

```powershell
netstat -ano | findstr :8081
```

Verás algo como:
```
TCP    0.0.0.0:8081    0.0.0.0:0    LISTENING    28396
```

El número al final (28396) es el PID del proceso.

### Paso 2: Matar el proceso

```powershell
taskkill /PID 28396 /F
```

**Nota:** Reemplaza `28396` con el PID que encontraste.

### Paso 3: Reiniciar Expo

```bash
npm start
```

## Solución 3: Usar la IP de Red

Si el puerto está ocupado pero quieres usar ese puerto:

```bash
npx expo start --host 192.168.0.121
```

## ¿Qué proceso suele ocupar el puerto 8081?

- Otra instancia de Expo/Metro
- React Native CLI
- Algún servidor de desarrollo anterior
- Android Studio emulator

## Prevenir el Problema

### Antes de iniciar Expo:

1. **Matar todos los procesos de Node:**
```powershell
taskkill /IM node.exe /F
```

2. **Luego iniciar Expo:**
```bash
npm start
```

## Comando Todo-en-Uno

```powershell
# Matar todos los procesos de Node e iniciar Expo con tunnel
taskkill /IM node.exe /F; npx expo start --tunnel
```

## Recomendación

**Usa siempre el modo tunnel para desarrollo:**

```bash
npx expo start --tunnel
```

Es más confiable y evita problemas de puertos y red.

## Si Sigue Sin Funcionar

1. **Reinicia tu PC**
2. **Verifica el firewall** (puede estar bloqueando los puertos)
3. **Usa emulador** en lugar de dispositivo físico temporalmente

---

**Modo tunnel es la solución más fácil y confiable** 🚀

