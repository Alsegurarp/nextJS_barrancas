# Barrancas Premium - Next.js Migration

This project has been migrated from Vite + React Router to Next.js 16 with App Router.

## Project Structure

```
nextjs_barrancas_premium/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (/)
│   │   ├── prueba/
│   │   │   └── page.tsx       # Test route (/prueba)
│   │   └── globals.css        # Global styles
│   ├── views/                  # Page components (renamed from Pages)
│   │   └── IdeaPage/
│   ├── components/             # Reusable components
│   │   └── Layout/            # Layout components (moved from app/Layout)
│   ├── components-gsap/        # GSAP animation components
│   ├── Componentes/            # Utility components
│   └── assets/                 # Static assets
└── public/                     # Public assets
```

## Router Setup

### Next.js App Router

This project uses Next.js App Router (not Pages Router). Routes are defined by the folder structure in `src/app/`:

- **Root route (`/`)**: `src/app/page.tsx`
- **Test route (`/prueba`)**: `src/app/prueba/page.tsx`

### Creating New Routes

1. Create a new folder in `src/app/` with the route name
2. Add a `page.tsx` file inside that folder
3. Export a default React component

Example for `/about` route:
```tsx
// src/app/about/page.tsx
'use client';

export default function AboutPage() {
  return <div>About Page</div>;
}
```

### Client vs Server Components

- Use `'use client'` directive at the top of files that:
  - Use React hooks (`useState`, `useEffect`, etc.)
  - Use browser APIs
  - Use GSAP animations
  - Handle user interactions
- Server components (no directive) are used for:
  - Static content
  - Data fetching
  - SEO metadata

## Image Handling

### Importing Images

Next.js automatically optimizes imported images. There are two ways to use images:

#### 1. Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';
import myImage from '@/assets/images/photo.webp';

<Image
  src={myImage}
  alt="Description"
  width={800}
  height={600}
  priority // Optional: for above-the-fold images
/>
```

#### 2. Using Standard HTML img Tag

When using the standard `<img>` tag, you must access the `.src` property of imported images:

```tsx
import myImage from '@/assets/images/photo.webp';

// ❌ WRONG - will cause type errors
<img src={myImage} alt="Description" />

// ✅ CORRECT - use .src property
<img src={myImage.src} alt="Description" />
```

### StaticImageData Type

Imported images in Next.js have the type `StaticImageData`, which includes:
- `src`: string - The actual image path
- `width`: number
- `height`: number
- `blurDataURL`: string (optional)

When passing images as props, use:
```tsx
import type { StaticImageData } from 'next/image';

interface Props {
  image: string | StaticImageData; // Allow both types
}

// In component, handle both types:
const imgSrc = typeof image === 'string' ? image : image.src;
```

## Import Aliases

The project uses TypeScript path aliases for cleaner imports:

```tsx
'@/*'              → './src/*'
'@/components-gsap/*' → './src/components-gsap/*'
'@/Componentes/*'  → './src/Componentes/*'
'@/views/*'        → './src/views/*'
'@/Layout/*'       → './src/components/Layout/*'
'@/assets/*'       → './src/assets/*'
```

Example:
```tsx
// Instead of: import Hero from '../../components-gsap/Hero'
import Hero from '@/components-gsap/Hero';
```

## GSAP Animations

GSAP components are located in `src/components-gsap/`. All GSAP components must:

1. Use `'use client'` directive
2. Register plugins before use:
```tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

3. Use `useGSAP` hook for animations:
```tsx
import { useGSAP } from '@gsap/react';

useGSAP(() => {
  gsap.to('.element', { x: 100 });
}, { dependencies: [] });
```

## Smooth Scrolling

The project uses Lenis for smooth scrolling. Wrap page components with `SmoothScrollProvider`:

```tsx
import SmoothScrollProvider from '@/Componentes/utils/SmoothScrollProvider';

export default function Page() {
  return (
    <SmoothScrollProvider>
      {/* Your page content */}
    </SmoothScrollProvider>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Key Dependencies

- **Next.js 16.0.7** - React framework with Turbopack
- **React 19.2.0** - UI library
- **GSAP 3.13.0** - Animation library
- **Lenis 1.3.15** - Smooth scrolling
- **Framer Motion 12.23.25** - Animation library
- **Tailwind CSS 4** - Styling

## Common Issues

### Type Errors with Images

If you see: `Type 'StaticImageData' is not assignable to type 'string'`

**Solution**: Use `.src` property:
```tsx
<img src={myImage.src} alt="..." />
```

### GSAP Callback Type Errors

If you see: `Type '() => Promise<void>' is not assignable to type 'Callback'`

**Solution**: Wrap async calls in a block:
```tsx
// ❌ WRONG
onStart: () => video.play()

// ✅ CORRECT
onStart: () => { video.play(); }
```

### Module Not Found Errors

If imports fail:
1. Check the path alias in `tsconfig.json`
2. Ensure the file exists in the correct location
3. Restart the development server

## Migration Notes

This project was migrated from Vite + React Router. Key changes:

- ✅ Renamed `src/Pages` → `src/views`
- ✅ Moved `src/app/Layout` → `src/components/Layout`
- ✅ Deleted `src/app/Routes` directory
- ✅ Updated all import paths to use Next.js aliases
- ✅ Fixed all StaticImageData type errors
- ✅ Configured Tailwind CSS 4
- ✅ Set up GSAP with Next.js
- ✅ Implemented smooth scrolling with Lenis

## License

Private project - All rights reserved
