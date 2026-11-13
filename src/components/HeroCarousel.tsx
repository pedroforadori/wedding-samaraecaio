"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/content/wedding";

/**
 * Imagens da capa trocando sozinhas, com fade, como um banner de e-commerce.
 *
 * - Com uma imagem só, ela fica fixa (sem timer nem bolinhas).
 * - Pausa enquanto o mouse está em cima e enquanto a aba está escondida.
 * - Quem pede menos movimento no sistema (prefers-reduced-motion) não tem
 *   troca automática, mas ainda pode trocar pelas bolinhas.
 *
 * Preenche o contêiner pai, que precisa ser `relative` e ter altura.
 */
export function HeroCarousel({
  images,
  intervalMs,
}: {
  images: HeroImage[];
  intervalMs: number;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (count < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrent((i) => (i + 1) % count);
      }
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs, paused, current]);

  return (
    <div
      className="absolute inset-0"
      role={count > 1 ? "region" : undefined}
      aria-roledescription={count > 1 ? "carrossel" : undefined}
      aria-label={count > 1 ? "Imagens da capa" : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={i === current ? image.alt : ""}
          aria-hidden={i !== current}
          fill
          // A primeira é a imagem principal da página; as outras carregam
          // logo em seguida, para já estarem prontas quando entrarem.
          {...(i === 0 ? { preload: true } : { loading: "eager" as const })}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2 sm:bottom-6">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Mostrar imagem ${i + 1} de ${count}`}
              aria-current={i === current}
              className={`h-2 rounded-full bg-foam shadow ring-1 ring-ink/25 transition-all ${
                i === current ? "w-6 opacity-100" : "w-2 opacity-60 hover:opacity-90"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
