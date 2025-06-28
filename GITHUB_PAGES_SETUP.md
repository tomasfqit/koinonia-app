# Configuración GitHub Pages para PWA

## ✅ Archivos Configurados

### 1. Workflow de GitHub Actions
- ✅ `.github/workflows/nextjs.yml` - Workflow para build y deploy automático
- ✅ Configurado para ejecutarse en pushes a `main`
- ✅ Permisos correctos para GitHub Pages

### 2. Configuración Next.js
- ✅ `next.config.ts` - Configurado para export estático
- ✅ `output: 'export'` - Genera páginas estáticas
- ✅ `trailingSlash: true` - Compatible con GitHub Pages
- ✅ `images: { unoptimized: true }` - Para export estático

### 3. Archivos de Soporte
- ✅ `public/.nojekyll` - Evita procesamiento con Jekyll
- ✅ Script `build:static` en package.json

## 🚀 Pasos para Activar GitHub Pages

### 1. Configurar el Repositorio
1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda la configuración

### 2. Hacer Push del Código
```bash
git add .
git commit -m "Add GitHub Pages configuration"
git push origin main
```

### 3. Verificar el Deploy
1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow se ejecute correctamente
3. Una vez completado, tu sitio estará disponible en:
   `https://[tu-usuario].github.io/[nombre-repositorio]/`

## 📱 Configuración PWA para GitHub Pages

### Actualizar URLs en el Código
Antes de hacer deploy, actualiza las URLs en `src/app/layout.tsx`:

```typescript
metadataBase: new URL('https://[tu-usuario].github.io/[nombre-repositorio]'),
```

### Verificar HTTPS
GitHub Pages proporciona HTTPS automáticamente, por lo que tu PWA funcionará correctamente.

## 🔧 Solución de Problemas

### Si el build falla:
1. Verifica que estés en la rama `main`
2. Revisa los logs en la pestaña Actions
3. Asegúrate de que todas las dependencias estén en `package.json`

### Si la PWA no funciona:
1. Verifica que las URLs en el manifest sean correctas
2. Asegúrate de que los iconos se carguen correctamente
3. Revisa la consola del navegador para errores

### Si las rutas no funcionan:
1. Verifica que `trailingSlash: true` esté configurado
2. Asegúrate de que los enlaces usen rutas relativas

## 📝 Notas Importantes

- **Rama principal**: El workflow se ejecuta en pushes a `main`
- **Build estático**: La app se genera como páginas estáticas
- **HTTPS**: GitHub Pages proporciona HTTPS automáticamente
- **Cache**: Los archivos se cachean automáticamente

## 🎯 Próximos Pasos

1. **Hacer push** del código a GitHub
2. **Configurar GitHub Pages** en Settings
3. **Verificar el deploy** en Actions
4. **Probar la PWA** en tu dispositivo Android

¡Tu PWA estará disponible en GitHub Pages con HTTPS automático! 🎉 