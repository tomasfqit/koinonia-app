#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando build para GitHub Pages...\n');

// Verificar que existe el directorio out
if (!fs.existsSync('out')) {
  console.error('❌ Error: No se encontró el directorio "out"');
  console.log('   Ejecuta "npm run build" primero');
  process.exit(1);
}

// Verificar archivos esenciales
const requiredFiles = [
  'out/index.html',
  'out/manifest.json',
  'out/sw.js',
  'out/.nojekyll',
  'out/icons/icon-192x192.svg',
  'out/icons/icon-512x512.svg'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - FALTANTE`);
    allFilesExist = false;
  }
});

// Verificar que el manifest.json sea válido
try {
  const manifestPath = 'out/manifest.json';
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  
  if (manifest.name && manifest.short_name && manifest.icons && manifest.icons.length > 0) {
    console.log('✅ manifest.json es válido');
  } else {
    console.log('❌ manifest.json tiene campos faltantes');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ manifest.json no es un JSON válido');
  allFilesExist = false;
}

console.log('\n📋 Resumen:');
if (allFilesExist) {
  console.log('🎉 ¡Todo listo para GitHub Pages!');
  console.log('   Puedes hacer push a GitHub para desplegar automáticamente.');
} else {
  console.log('⚠️  Hay problemas que deben resolverse antes del deploy.');
  process.exit(1);
} 