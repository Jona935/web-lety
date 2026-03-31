"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DemoParallaxImage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const tween = gsap.fromTo(
      img,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-cream py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Parallax image */}
        <div className="relative h-[420px] overflow-hidden">
          <div ref={imgRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
              alt="Boda"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-12 py-16 bg-ebony">
          <p className="label text-taupe mb-4">Paralaje</p>
          <h3 className="font-serif text-4xl text-cream font-light mb-6">
            La imagen se mueve <span className="italic text-taupe-light">más lento</span>
          </h3>
          <p className="text-cream/50 leading-relaxed text-sm">
            Al hacer scroll, la foto se desplaza a una velocidad diferente al contenido creando profundidad.
            Este efecto funciona excelente en la sección "Ojo en el Detalle" de Quién Soy y en el hero de inicio.
          </p>
        </div>
      </div>
    </div>
  );
}
