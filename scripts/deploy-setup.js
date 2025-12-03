const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Configurando despliegue para GitHub Pages...');

const outDir = path.join(__dirname, '..', 'out');

// 1. VERIFICAR que la carpeta out existe
if (!fs.existsSync(outDir)) {
  console.error('❌ Error: La carpeta "out/" no existe. Ejecuta npm run build primero.');
  process.exit(1);
}

// 2. CREAR .nojekyll (IMPORTANTÍSIMO)
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✅ .nojekyll creado');

// 3. CREAR 404.html para SPA
const indexPath = path.join(outDir, 'index.html');
const notFoundPath = path.join(outDir, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✅ 404.html creado (copia de index.html)');
} else {
  console.error('❌ Error: index.html no encontrado en out/');
  process.exit(1);
}

// 4. CORREGIR TODAS las rutas en index.html
console.log('🔄 Convirtiendo rutas absolutas a relativas...');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Patrones a reemplazar
const replacements = [
  // Rutas de Next.js comunes
  [/(href|src)="\/_next\//g, '$1="./_next/'],
  [/(href|src)="\/Portfolio-Profesional\//g, '$1="./'],
  // Rutas absolutas generales
  [/(href|src)="\/([^"#?]+)"/g, '$1="./$2"'],
  // Rutas de assets
  [/(href|src)="\/assets\//g, '$1="./assets/'],
  // Rutas de iconos
  [/(href|src)="\/favicon/g, '$1="./favicon'],
];

replacements.forEach(([pattern, replacement]) => {
  const matches = htmlContent.match(pattern);
  if (matches) {
    htmlContent = htmlContent.replace(pattern, replacement);
    console.log(`   ↪ Reemplazado: ${pattern.toString()} → ${replacement}`);
  }
});

// Guardar los cambios
fs.writeFileSync(indexPath, htmlContent);
fs.writeFileSync(notFoundPath, htmlContent); // También actualizar 404.html

console.log('✅ Rutas convertidas correctamente');

// 5. VERIFICAR estructura final
console.log('\n📁 Estructura final de la carpeta out/:');
const listFiles = (dir, prefix = '') => {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    console.log(`${prefix}${item.isDirectory() ? '📁' : '📄'} ${item.name}`);
    if (item.isDirectory() && item.name !== 'node_modules') {
      listFiles(path.join(dir, item.name), prefix + '  ');
    }
  });
};

listFiles(outDir);

console.log('\n🎉 Configuración completada. Listo para desplegar!');
console.log('👉 Ejecuta: npm run deploy');
