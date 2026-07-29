# Origen — Specialty Coffee Brand Website

A premium marketing/e-commerce website for a specialty single-origin coffee brand, built with Next.js, React Three Fiber, and GSAP.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Framework, routing, SSR |
| React Three Fiber + Drei | 3D rendering (three deliberate moments + splash intro) |
| Three.js | 3D engine |
| GSAP + ScrollTrigger | Scroll-driven animations |
| Tailwind CSS v4 | Styling with design tokens |

## 🎨 3D Moments & Splash Intro

1. **Splash Intro (First Visit Only)**:
   - Centered 3D coffee bean on pastel cream background with `"Đang rang..."` caption.
   - Click to split bean using `THREE.Plane` clipping planes (`material.clippingPlanes = [plane]`).
   - Smooth 0.6s split animation revealing solid interior before fading out into the site.
   - Saved in `sessionStorage` (`hasSeenSplash`); only shows on fresh sessions.
2. **Hero Coffee Cup**: Scale-in animation + mouse-parallax rotation.
3. **Scroll Story**: 4-stage morph (grow → harvest → roast split bean → package) driven by scroll progress.
4. **Product Cards**: Hover-activated rotation on desktop.

## 📦 3D Model Sources & Licenses

| Model | Source | License / Attribution |
|---|---|---|
| Coffee Bean Splash | [Poly by Google on Poly Pizza](https://poly.pizza/m/diD0JCvAWcR) | CC-BY 3.0 ("Coffee bean model by Poly by Google") |
| Coffee Cup | Poly Pizza / Sketchfab CC0 | Programmatic lathe geometry |
| Product Package | Programmatic RoundedBox | Brand colors |

## 🔄 How to Swap/Update a .glb Model

1. **Download** the model from Poly Pizza or Sketchfab (CC0/CC-BY license)
2. **Place** the file in `public/models/`:
   ```
   public/models/coffee-bean-splash.glb
   ```
3. **Update** the component to use `useGLTF`:
   ```tsx
   import { useGLTF } from '@react-three/drei'

   function CoffeeBeanModel() {
     const { scene } = useGLTF('/models/coffee-bean-splash.glb')
     return <primitive object={scene} />
   }

   useGLTF.preload('/models/coffee-bean-splash.glb')
   ```

## 📐 Design Tokens

### Colors
| Name | Hex | Usage |
|---|---|---|
| Cream | `#F7E2CE` | Primary background |
| Clay | `#D99B78` | Secondary bg / soft accent |
| Rust | `#B8623A` | CTAs, links, badges (commerce/action) |
| Espresso | `#3F2416` | Text (never pure black) |
| Olive | `#8A9A6E` | Farm/origin sections only |

## ⚡ Performance Budget Checklist

- [x] LCP < 2.5s — Headline text is the LCP element
- [x] CLS < 0.1 — Canvas containers have explicit dimensions
- [x] Only 1 active 3D canvas at a time — IntersectionObserver pauses off-screen
- [x] First visit splash overlay with `sessionStorage` flag
- [x] WebGL & CSS fallbacks working
- [x] Mobile fallbacks working (scroll story → video/CSS, product cards → static)

## 📝 License

Private project. Assets licensed under CC-BY 3.0 / CC0 as noted.
