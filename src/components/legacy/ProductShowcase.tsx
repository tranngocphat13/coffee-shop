"use client";

import { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { products } from "@/data/products";
const ProductPackage3D = (_props: any) => null;
import { useCanvasVisibility } from "@/hooks/useCanvasVisibility";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useIsDesktop } from "@/hooks/useMediaQuery";

export function ProductShowcase() {
  return (
    <section id="products" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="label-text text-rust">Our Collection</span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-espresso">
            Single-Origin Selections
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-espresso/60">
            Each origin carefully selected, each roast profile meticulously
            developed to showcase the bean&apos;s true character.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useCanvasVisibility(cardRef);
  const webglSupported = useWebGLSupport();
  const isDesktop = useIsDesktop();

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-espresso/5 bg-cream-light transition-all duration-500 hover:border-rust/20 hover:shadow-xl hover:shadow-rust/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-10 rounded-full bg-rust px-3 py-1">
          <span className="label-text text-[11px] text-cream">
            {product.badge}
          </span>
        </div>
      )}

      {/* 3D Canvas / Static fallback */}
      <div className="relative mx-auto flex h-44 items-center justify-center bg-gradient-to-b from-clay/5 to-transparent">
        {isDesktop && webglSupported ? (
          <Canvas
            camera={{ position: [0, 0.3, 3], fov: 30 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            frameloop={isVisible && isHovered ? "always" : "never"}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <ProductPackage3D color={product.color} isHovered={isHovered} />
            </Suspense>
          </Canvas>
        ) : (
          /* Static fallback for mobile */
          <div className="flex h-full w-full items-center justify-center">
            <div
              className="h-24 w-16 rounded-lg shadow-md"
              style={{ backgroundColor: product.color }}
            />
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="p-5">
        <div className="label-text mb-1.5 text-[11px] text-olive">
          {product.origin} · {product.roastLevel}
        </div>
        <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-espresso">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-espresso/50">
          {product.flavor}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-espresso">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-1.5 text-xs text-espresso/40">
              / {product.weight}
            </span>
          </div>
          <button
            className="rounded-full bg-rust px-4 py-2 text-sm font-medium text-cream transition-all duration-300 hover:bg-rust-dark hover:shadow-md"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
