# Guía de Optimización de Rendimiento

## Tareas Pendientes

### 1. Convertir Imágenes JPG a WebP

Las siguientes imágenes deben convertirse a WebP para reducir el tamaño total de ~9.1MB a ~2MB:

| Imagen | Tamaño Actual | Tamaño Objetivo |
|--------|---------------|-----------------|
| `public/imagen1.jpg` | 2.3 MB | < 500 KB |
| `public/imagen-con-cofre.jpg` | 2.9 MB | < 500 KB |
| `public/imagen-sin-puerta.jpg` | 1.5 MB | < 500 KB |
| `public/imagen-batalla.jpg` | 2.4 MB | < 500 KB |

#### Opción 1: Usando Sharp (recomendado)

```bash
node -e "
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  'imagen1.jpg',
  'imagen-con-cofre.jpg',
  'imagen-sin-puerta.jpg',
  'imagen-batalla.jpg'
];

async function convertImages() {
  for (const img of images) {
    const inputPath = path.join('./public', img);
    const outputPath = path.join('./public', img.replace('.jpg', '.webp'));

    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    console.log(\`Converted: \${img} → \${img.replace('.jpg', '.webp')}\`);
  }
}

convertImages();
"
```

#### Opción 2: Usando cwebp (CLI de Google)

```bash
# Instalar cwebp
# macOS: brew install webp
# Ubuntu: sudo apt install webp

# Convertir imágenes
cwebp -q 82 public/imagen1.jpg -o public/imagen1.webp
cwebp -q 82 public/imagen-con-cofre.jpg -o public/imagen-con-cofre.webp
cwebp -q 82 public/imagen-sin-puerta.jpg -o public/imagen-sin-puerta.webp
cwebp -q 82 public/imagen-batalla.jpg -o public/imagen-batalla.webp
```

#### Opción 3: Usando Squoosh online

1. Ir a https://squoosh.app
2. Cargar cada imagen
3. Seleccionar formato WebP con calidad 82
4. Descargar y reemplazar en `public/`

### 2. Después de convertir

Una vez convertidas las imágenes a WebP, actualizar las referencias en los componentes:

```typescript
// components/landing/hero.tsx
src="/imagen1.webp"  // antes: /imagen1.jpg

// components/landing/features.tsx
src="/imagen-sin-puerta.webp"  // antes: /imagen-sin-puerta.jpg

// components/landing/pricing.tsx
src="/imagen-con-cofre.webp"  // antes: /imagen-con-cofre.jpg

// components/landing/cta.tsx
src="/imagen-batalla.webp"  // antes: /imagen-batalla.jpg
```

## Optimizaciones Ya Implementadas

- [x] Throttle en scroll listener (navbar.tsx)
- [x] CSS animations para sparkles (hero.tsx, globals.css)
- [x] Lazy loading en imágenes de sección (features, pricing, cta)
- [x] Interfaces TypeScript (types/index.ts)
- [x] Memoización de arrays estáticos

## Impacto Esperado

- **LCP:** -500ms (después de convertir imágenes)
- **FPS móvil:** +15-20fps (CSS animations)
- **Bundle:** Sin cambios significativos
- **Mantenibilidad:** +30% (tipos TypeScript)
