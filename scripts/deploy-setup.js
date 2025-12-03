const fs = require('fs');
const path = require('path');

console.log('🚀 CONFIGURACIÓN COMPLETA PARA GITHUB PAGES');
console.log('===========================================\n');

const outDir = path.join(__dirname, '..', 'out');

// 1. VERIFICAR que existe la carpeta out
if (!fs.existsSync(outDir)) {
  console.error('❌ ERROR: La carpeta "out/" no existe.');
  console.error('   Ejecuta primero: npm run build');
  process.exit(1);
}

console.log('📁 Carpeta out encontrada\n');

// 2. CREAR .nojekyll (OBLIGATORIO para GitHub Pages)
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✅ 1. .nojekyll creado');

// 3. LEER index.html
const indexPath = path.join(outDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ ERROR: index.html no encontrado en out/');
  process.exit(1);
}

let content = fs.readFileSync(indexPath, 'utf8');

console.log('✅ 2. index.html leído\n');

// 4. CONVERTIR TODAS las rutas absolutas a relativas
console.log('🔄 3. Convirtiendo rutas absolutas (/) a relativas (./)...');

// REEMPLAZOS CRÍTICOS para GitHub Pages
const replacements = [
  // 1. CSS de Next.js
  { desc: 'CSS de Next.js', pattern: /href="\/(_next\/static\/css\/[^"]*\.css)"/g, replacement: 'href="./$1"' },
  
  // 2. JavaScript de Next.js
  { desc: 'JavaScript de Next.js', pattern: /src="\/(_next\/static\/[^"]*\.js)"/g, replacement: 'src="./$1"' },
  
  // 3. Webpack chunks
  { desc: 'Webpack chunks', pattern: /src="\/(_next\/static\/chunks\/[^"]*)"/g, replacement: 'src="./$1"' },
  
  // 4. Assets (videos, PDFs, etc.)
  { desc: 'Assets (videos/PDFs)', pattern: /(href|src)="\/(assets\/[^"]*)"/g, replacement: '$1="./$2"' },
  
  // 5. Rutas generales que empiezan con / (FALLBACK GENERAL)
  { desc: 'Rutas generales', pattern: /(href|src)="\/([^"#?][^"]*)"/g, replacement: '$1="./$2"' },
  
  // 6. URL en scripts (menos común)
  { desc: 'URLs en scripts', pattern: /(self\.__next_f\.push\(\[1,"[^"]*)"\/([^"]*)"/g, replacement: '$1"./$2"' },
];

let totalReplacements = 0;

replacements.forEach(({ desc, pattern, replacement }) => {
  const matches = content.match(pattern);
  if (matches) {
    totalReplacements += matches.length;
    content = content.replace(pattern, replacement);
    console.log(`   ↪ ${desc}: ${matches.length} reemplazos`);
  }
});

console.log(`\n✅ Total: ${totalReplacements} rutas convertidas\n`);

// 5. GUARDAR index.html corregido
fs.writeFileSync(indexPath, content);
console.log('✅ 4. index.html guardado con rutas relativas');

// 6. CREAR 404.html (IMPORTANTE para SPA en GitHub Pages)
const notFoundPath = path.join(outDir, '404.html');
fs.writeFileSync(notFoundPath, content);
console.log('✅ 5. 404.html creado (para SPA routing)');

// 7. VERIFICAR que los cambios fueron aplicados
console.log('\n🔍 6. VERIFICACIÓN FINAL:');
console.log('-------------------------');

// Verificar primeras rutas CSS
const firstCssMatch = content.match(/href="\.\/_next\/static\/css\/[^"]*\.css"/);
if (firstCssMatch) {
  console.log(`✅ CSS: ${firstCssMatch[0].substring(0, 60)}...`);
} else {
  console.log('⚠️  No se encontraron rutas CSS relativas');
}

// Verificar primeras rutas JS
const firstJsMatch = content.match(/src="\.\/_next\/static\/[^"]*\.js"/);
if (firstJsMatch) {
  console.log(`✅ JS: ${firstJsMatch[0].substring(0, 60)}...`);
} else {
  console.log('⚠️  No se encontraron rutas JS relativas');
}

// 8. VER ESTRUCTURA DE ARCHIVOS
console.log('\n📂 7. ESTRUCTURA DE out/:');
console.log('------------------------');

const listTopLevel = (dir, prefix = '') => {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    const icon = item.isDirectory() ? '📁' : '📄';
    const name = item.name === '.nojekyll' ? '.nojekyll (oculto)' : item.name;
    console.log(`${prefix}${icon} ${name}`);
  });
};

listTopLevel(outDir);

console.log('\n🎉 8. ¡CONFIGURACIÓN COMPLETADA!');
console.log('================================');
console.log('\n📋 PASOS SIGUIENTES:');
console.log('   1. Verifica que las rutas sean relativas (./_next/...)');
console.log('   2. Ejecuta: npm run deploy');
console.log('   3. Visita: https://christophernr.github.io/Portfolio-Profesional/');
console.log('\n⚠️  NOTA: Si hay errores 404, revisa que .nojekyll esté en la raíz de gh-pages');