const fs = require('fs');
const path = require('path');

console.log('🚀 PREPARANDO PARA GITHUB PAGES...');
console.log('====================================');

const outDir = path.join(__dirname, '..', 'out');

// 1. VERIFICAR que existe la carpeta out
if (!fs.existsSync(outDir)) {
  console.error('❌ ERROR: La carpeta "out/" no existe.');
  console.error('   Ejecuta primero: npm run build');
  process.exit(1);
}

// 2. CREAR .nojekyll (ESENCIAL para carpetas que empiezan con _)
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✅ .nojekyll creado');

// 3. PROCESAR index.html
const indexPath = path.join(outDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ ERROR: index.html no encontrado');
  process.exit(1);
}

let content = fs.readFileSync(indexPath, 'utf8');

console.log('🔄 Convirtiendo rutas absolutas a relativas...');

// Reemplazar TODAS las rutas que empiecen con /
const replacements = [
  // Rutas de CSS y JS de Next.js
  [/(href|src)="\/_next\//g, '$1="./_next/'],
  // Rutas de assets
  [/(href|src)="\/assets\//g, '$1="./assets/'],
  // Rutas genéricas que empiezan con /
  [/(href|src)="\/([^"']*)"/g, '$1="./$2"'],
  // Rutas en style attributes (menos común)
  [/(url\()\/([^)]*)\)/g, '$1./$2)'],
];

let totalReplacements = 0;
replacements.forEach(([pattern, replacement], index) => {
  const matches = content.match(pattern);
  if (matches) {
    totalReplacements += matches.length;
    content = content.replace(pattern, replacement);
  }
});

console.log(`   ↪ ${totalReplacements} rutas convertidas`);

// 4. GUARDAR index.html corregido
fs.writeFileSync(indexPath, content);

// 5. CREAR 404.html (copia exacta de index.html)
const notFoundPath = path.join(outDir, '404.html');
fs.writeFileSync(notFoundPath, content);
console.log('✅ 404.html creado (SPA routing)');

// 6. VERIFICAR estructura final
console.log('\n📁 ESTRUCTURA FINAL:');
const items = fs.readdirSync(outDir, { withFileTypes: true });
items.forEach(item => {
  const icon = item.isDirectory() ? '📁' : '📄';
  console.log(`   ${icon} ${item.name}`);
  
  // Si es la carpeta _next, mostrar su contenido
  if (item.isDirectory() && item.name === '_next') {
    const nextItems = fs.readdirSync(path.join(outDir, '_next'), { withFileTypes: true });
    nextItems.forEach(nextItem => {
      console.log(`     📁 ${nextItem.name}`);
    });
  }
});

console.log('\n🎉 ¡PREPARACIÓN COMPLETADA!');
console.log('👉 Para desplegar ejecuta: npm run deploy');
console.log('👉 O usa: npm run full-deploy (para todo en uno)');