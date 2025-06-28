# 🚀 Instrucciones de Deploy - GitHub Pages

## ✅ Configuración Completada

Tu aplicación PWA está completamente configurada para GitHub Pages:

### Archivos Creados:
- ✅ `.github/workflows/nextjs.yml` - Workflow de GitHub Actions
- ✅ `next.config.ts` - Configurado para export estático
- ✅ `public/.nojekyll` - Evita procesamiento con Jekyll
- ✅ `scripts/verify-deploy.js` - Script de verificación
- ✅ `GITHUB_PAGES_SETUP.md` - Documentación completa

### Verificación Local:
```bash
npm run build
npm run verify
```

## 🎯 Pasos para Deploy

### 1. Actualizar URLs (IMPORTANTE)
Antes de hacer push, actualiza las URLs en `src/app/layout.tsx`:

```typescript
// Cambia esto:
metadataBase: new URL('https://koinonia-app.vercel.app'),

// Por esto (reemplaza con tu usuario y repositorio):
metadataBase: new URL('https://[tu-usuario].github.io/[nombre-repositorio]'),
```

### 2. Hacer Push a GitHub
```bash
git add .
git commit -m "Add GitHub Pages configuration for PWA"
git push origin main
```

### 3. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda la configuración

### 4. Verificar el Deploy
1. Ve a la pestaña **Actions** en tu repositorio
2. Espera a que el workflow se complete
3. Tu sitio estará disponible en:
   `https://[tu-usuario].github.io/[nombre-repositorio]/`

## 📱 Probar la PWA en Android

### Una vez desplegado:
1. Abre Chrome en tu Android
2. Ve a la URL de tu GitHub Pages
3. Navega por la app
4. Deberías ver:
   - Banner nativo de Chrome para instalar
   - O el banner personalizado abajo de la pantalla

### Si no aparece el banner:
- Asegúrate de visitar la app dos veces
- No uses modo incógnito
- Verifica que no la tengas ya instalada

## 🔧 Comandos Útiles

```bash
# Build local
npm run build

# Verificar build
npm run verify

# Servir build local (para pruebas)
npx serve out
```

## 📝 Notas Importantes

- **HTTPS automático**: GitHub Pages proporciona HTTPS
- **Build estático**: La app se genera como páginas estáticas
- **PWA completa**: Service worker, manifest y cache funcionan
- **Deploy automático**: Cada push a main despliega automáticamente

## 🆘 Solución de Problemas

### Si el workflow falla:
1. Verifica que estés en la rama `main`
2. Revisa los logs en Actions
3. Asegúrate de que las dependencias estén correctas

### Si la PWA no funciona:
1. Verifica las URLs en el manifest
2. Asegúrate de que los iconos se carguen
3. Revisa la consola del navegador

### Si las rutas no funcionan:
1. Verifica que `trailingSlash: true` esté configurado
2. Asegúrate de que los enlaces sean relativos

---

## 🎉 ¡Listo para Deploy!

Tu PWA estará disponible en GitHub Pages con:
- ✅ HTTPS automático
- ✅ Service worker activo
- ✅ Manifest válido
- ✅ Iconos SVG
- ✅ Banner de instalación
- ✅ Deploy automático

¡Solo necesitas hacer push y configurar GitHub Pages! 🚀 