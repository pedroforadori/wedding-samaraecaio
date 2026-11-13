import Image from "next/image";
import { couple } from "@/content/wedding";

/**
 * Monograma do casal. Usa a arte de `couple.monogram` quando houver; enquanto
 * for `null`, desenha as iniciais (`couple.initials`) na fonte cursiva, com a
 * mesma proporção da arte, para o layout não mudar quando ela chegar.
 */
export function Monogram({ className = "" }: { className?: string }) {
  const art = couple.monogram;

  if (art) {
    return (
      <Image
        src={art.src}
        alt={`Monograma ${couple.initials}`}
        width={art.width}
        height={art.height}
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 120 100"
      role="img"
      aria-label={`Monograma ${couple.initials}`}
      className={`text-gold-deep ${className}`}
    >
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fill="currentColor"
        fontSize="70"
        style={{ fontFamily: "var(--font-script)" }}
      >
        {couple.initials}
      </text>
    </svg>
  );
}
