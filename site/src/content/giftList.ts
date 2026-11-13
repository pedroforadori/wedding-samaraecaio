// Lista de presentes. Herdado do site anterior: sem destino, sem descrição e
// sem cota livre. As cotas são só controle interno — o convidado não vê
// quantas restam; o presente some da lista quando todas as cotas são
// escolhidas.

// Taxa do Stripe repassada no valor de todos os presentes, inclusive no Pix
// (decisão dos noivos, out/2026), com os centavos exatos — sem arredondar
// (SITE_v4): R$ 200 → R$ 210,00, R$ 275 → R$ 288,75.
const STRIPE_FEE_PERCENT = 5;

function withStripeFee(baseCents: number): number {
  return Math.round((baseCents * (100 + STRIPE_FEE_PERCENT)) / 100);
}

type GiftEntry = {
  id: string;
  title: string;
  /** Valor da cota na planilha, em centavos, antes da taxa. */
  basePriceCents?: number;
  /** Valor final já com a taxa, quando os noivos enviaram assim (SITE_v4). */
  priceCents?: number;
  /**
   * Nº de cotas (coluna "Nº de presentes disponíveis") — controle interno, não
   * exibido. É o valor inicial: os noivos ajustam pelo admin (lib/giftQuantityStore).
   */
  quantity: number;
  image: string;
};

export type Gift = GiftEntry & {
  /** Valor cobrado do convidado (base + taxa), compatível com o unit_amount do Stripe. */
  priceCents: number;
};

// TODO: lista de presentes de Samara e Caio ("mais para frente", briefing de
// nov/2026). Cada entrada: { id, title, basePriceCents | priceCents, quantity,
// image } — imagens em public/images/presentes/. Lembre de ligar
// `presentes.enabled` em content/wedding.ts.
const giftEntries: GiftEntry[] = [];

export const gifts: Gift[] = giftEntries.map((gift) => ({
  ...gift,
  priceCents: gift.priceCents ?? withStripeFee(gift.basePriceCents ?? 0),
}));

// Seleção exibida primeiro no carrossel da home; a lista completa fica em
// /presentes. TODO: ids dos presentes exibidos primeiro no carrossel da home.
export const featuredGiftIds: string[] = [];

export function findGift(id: string): Gift | undefined {
  return gifts.find((gift) => gift.id === id);
}

/** O que vai para o navegador: sem `quantity`, para as cotas não vazarem nem no HTML. */
export type PublicGift = Omit<Gift, "quantity" | "basePriceCents">;

function toPublic(gift: Gift): PublicGift {
  return { id: gift.id, title: gift.title, priceCents: gift.priceCents, image: gift.image };
}

/** Presentes que ainda têm cota — os esgotados somem da lista. */
export function availableGifts(
  takenQuotas: Record<string, number>,
  quantities: Record<string, number>,
): PublicGift[] {
  return gifts
    .filter((gift) => (takenQuotas[gift.id] ?? 0) < (quantities[gift.id] ?? gift.quantity))
    .map(toPublic);
}

const CAROUSEL_SIZE = 8;

/** Destaques disponíveis primeiro, completados com outros presentes se algum esgotar. */
export function carouselGifts(
  takenQuotas: Record<string, number>,
  quantities: Record<string, number>,
): PublicGift[] {
  const available = availableGifts(takenQuotas, quantities);
  const featured = available.filter((gift) => featuredGiftIds.includes(gift.id));
  const others = available.filter((gift) => !featuredGiftIds.includes(gift.id));
  return [...featured, ...others].slice(0, CAROUSEL_SIZE);
}
