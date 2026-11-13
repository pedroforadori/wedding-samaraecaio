import QRCode from "qrcode";
import { buildPixPayload } from "./pix";

// Dados do recebedor do Pix vêm de variáveis de ambiente (PIX_KEY,
// PIX_MERCHANT_NAME, PIX_MERCHANT_CITY — ver .env.example) para não deixar
// chave e nome completo dos noivos no repositório. Sem elas, o Pix fica
// indisponível: o QR direto some e o checkout responde 503.
export type PixConfig = {
  key: string;
  merchantName: string;
  merchantCity: string;
};

export function getPixConfig(): PixConfig | null {
  const key = process.env.PIX_KEY?.trim();
  const merchantName = process.env.PIX_MERCHANT_NAME?.trim();
  const merchantCity = process.env.PIX_MERCHANT_CITY?.trim();
  if (!key || !merchantName || !merchantCity) return null;
  return { key, merchantName, merchantCity };
}

/**
 * Código "Pix Copia e Cola" com a chave dos noivos; sem valor quando omitido.
 * `null` quando o Pix não está configurado.
 */
export function giftPixCode(amountCents?: number, txid?: string): string | null {
  const config = getPixConfig();
  if (!config) return null;
  return buildPixPayload({ ...config, amountCents, txid });
}

export function pixQrDataUrl(code: string): Promise<string> {
  return QRCode.toDataURL(code, { margin: 1, width: 480 });
}
