"use client";

import Link from "next/link";
import DemoHeroTextReveal from "@/components/demos/DemoHeroTextReveal";
import DemoCounterStats from "@/components/demos/DemoCounterStats";
import DemoParallaxImage from "@/components/demos/DemoParallaxImage";
import DemoStaggerCards from "@/components/demos/DemoStaggerCards";
import DemoMagneticButton from "@/components/demos/DemoMagneticButton";

export default function GsapDemosPage() {
  return (
    <div className="bg-cream min-h-screen pt-24">
      {/* Header */}
      <div className="bg-ebony text-cream py-10 text-center mb-0">
        <p className="label text-taupe mb-2">GSAP Demos</p>
        <h1 className="font-serif text-4xl font-light">
          Animaciones para tu sitio
        </h1>
        <p className="text-cream/50 mt-3 text-sm">
          Ejemplos reales usando tu paleta de colores y tipografía
        </p>
      </div>

      {/* Demo 1 — Hero Text Reveal */}
      <section className="border-b border-ebony/10">
        <div className="bg-cream-warm px-8 py-4 flex items-center justify-between">
          <div>
            <span className="text-xs tracking-widest uppercase text-taupe font-sans">Demo 01</span>
            <h2 className="font-serif text-xl text-ebony mt-1">Hero — Text Reveal</h2>
            <p className="text-xs text-ebony-muted mt-1">Palabras que suben una a una. Ideal para el hero de inicio.</p>
          </div>
        </div>
        <DemoHeroTextReveal />
      </section>

      {/* Demo 2 — Counter Stats */}
      <section className="border-b border-ebony/10">
        <div className="bg-cream-warm px-8 py-4">
          <span className="text-xs tracking-widest uppercase text-taupe font-sans">Demo 02</span>
          <h2 className="font-serif text-xl text-ebony mt-1">Stats — Contador Animado</h2>
          <p className="text-xs text-ebony-muted mt-1">Los números cuentan hacia arriba al entrar en pantalla. Para la sección de estadísticas en Nosotros.</p>
        </div>
        <DemoCounterStats />
      </section>

      {/* Demo 3 — Parallax Image */}
      <section className="border-b border-ebony/10">
        <div className="bg-cream-warm px-8 py-4">
          <span className="text-xs tracking-widest uppercase text-taupe font-sans">Demo 03</span>
          <h2 className="font-serif text-xl text-ebony mt-1">Parallax al Scroll</h2>
          <p className="text-xs text-ebony-muted mt-1">La imagen se mueve más lento que el contenido al hacer scroll. Efecto de profundidad elegante.</p>
        </div>
        <DemoParallaxImage />
      </section>

      {/* Demo 4 — Stagger Cards */}
      <section className="border-b border-ebony/10">
        <div className="bg-cream-warm px-8 py-4">
          <span className="text-xs tracking-widest uppercase text-taupe font-sans">Demo 04</span>
          <h2 className="font-serif text-xl text-ebony mt-1">Cards — Stagger Reveal</h2>
          <p className="text-xs text-ebony-muted mt-1">Las tarjetas aparecen en cascada al hacer scroll. Para servicios o portafolio.</p>
        </div>
        <DemoStaggerCards />
      </section>

      {/* Demo 5 — Magnetic Button */}
      <section className="border-b border-ebony/10">
        <div className="bg-cream-warm px-8 py-4">
          <span className="text-xs tracking-widest uppercase text-taupe font-sans">Demo 05</span>
          <h2 className="font-serif text-xl text-ebony mt-1">Botón Magnético</h2>
          <p className="text-xs text-ebony-muted mt-1">El botón se "atrae" hacia el cursor al acercarse. Muy impactante en CTAs.</p>
        </div>
        <DemoMagneticButton />
      </section>

      <div className="py-12 text-center">
        <Link href="/" className="btn-dark">← Volver al sitio</Link>
      </div>
    </div>
  );
}
