const fs = require('fs');
const path = require('path');

console.log('🔧 Preparando para GitHub Pages...');

const outDir = path.join(__dirname, '..', 'out');

// 1. .nojekyll es OBLIGATORIO
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('✅ .nojekyll creado');

// 2. 404.html para SPA
const indexPath = path.join(outDir, 'index.html');
const notFoundPath = path.join(outDir, '404.html');

if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf8');
  
  // Reemplazar rutas ABSOLUTAS por RELATIVAS
  let fixedContent = content.replace(/(href|src)="\/([^"]*)"/g, '$1="./$2"');
  
  // Guardar ambos archivos
  fs.writeFileSync(indexPath, fixedContent);
  fs.writeFileSync(notFoundPath, fixedContent);
  
  console.log('✅ index.html y 404.html configurados con rutas relativas');
} else {
  console.error('❌ Error: index.html no encontrado');
  process.exit(1);
}

console.log('🎉 ¡Listo para desplegar en GitHub Pages!');