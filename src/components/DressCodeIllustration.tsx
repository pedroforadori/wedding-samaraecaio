import Image from "next/image";
import type { ScheduleImage } from "@/content/wedding";

/**
 * Aquarela do traje sugerido do dia (`dressIllustration` em
 * content/wedding.ts). Sem legenda, a pedido dos noivos.
 */
export function DressCodeIllustration({
  image,
  dressCode,
}: {
  image: ScheduleImage;
  dressCode?: string;
}) {
  return (
    <div className="mx-auto mt-6 w-40 sm:w-48">
      <Image
        src={image.src}
        alt={dressCode ? `Aquarela do traje sugerido: ${dressCode}` : "Aquarela do traje sugerido"}
        width={image.width}
        height={image.height}
        sizes="12rem"
        className="block h-auto w-full"
      />
    </div>
  );
}
