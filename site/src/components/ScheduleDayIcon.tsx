import Image from "next/image";
import type { ScheduleImage } from "@/content/wedding";

/**
 * Aquarela decorativa exibida acima do título de cada dia na Programação
 * (`icon` em content/wedding.ts).
 */
export function ScheduleDayIcon({ icon }: { icon: ScheduleImage }) {
  return (
    <Image
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      unoptimized
      className="h-20 w-auto"
    />
  );
}
