# Site do casamento — Samara & Caio

Site do casamento de Samara e Caio (04 a 06/11/2027, São Miguel dos Milagres - AL),
criado a partir do site de Camila e Victor. App Next.js (App Router, TypeScript,
Tailwind CSS) na estrutura padrão, direto na raiz do repositório.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

Local e produção rodam exatamente o mesmo código: o que muda são só as chaves.
Copie `.env.example` para `.env.local` e preencha (a descrição de cada
variável está no próprio arquivo):

1. **Redis**: banco Upstash próprio deste site (não reaproveite o de outro
   casamento). Rode `npx vercel link` (uma vez) e `npx vercel env pull .env.local`, ou copie `KV_REST_API_URL`/`KV_REST_API_TOKEN` de Vercel →
   Storage → banco Upstash → aba `.env.local`. Todas as chaves usam o prefixo
   `REDIS_KEY_PREFIX` (padrão `samaraecaio`); para testar localmente sem sujar a
   produção, use por exemplo `REDIS_KEY_PREFIX=samaraecaio-dev`. Sem Redis, Pix
   por presente, RSVP e contador de visitas respondem 503.
2. **Stripe**: chaves de teste em dashboard.stripe.com/test/apikeys
   (`STRIPE_SECRET_KEY=sk_test_…`). Para o webhook local, instale a
   [Stripe CLI](https://docs.stripe.com/stripe-cli) e rode
   `stripe listen --forward-to localhost:3000/api/stripe/webhook` — o `whsec_…`
   impresso vai em `STRIPE_WEBHOOK_SECRET`. Cartão de teste: `4242 4242 4242 4242`.
3. **Pix**: `PIX_KEY`, `PIX_MERCHANT_NAME` e `PIX_MERCHANT_CITY` (chave e titular
   da conta dos noivos). Ficam só nas env vars, nunca no código. Sem elas, o QR
   Code direto some e o Pix por presente responde 503.
4. **Admin**: `ADMIN_NOIVOS_PASSWORD` com qualquer senha local.

Reinicie o `npm run dev` depois de editar o `.env.local`. Para produção, cadastre
as mesmas variáveis em Vercel → Settings → Environment Variables (Stripe com as
chaves live e o webhook apontando para `https://<domínio>/api/stripe/webhook`).

### Contador de visitas (rodapé)

O contador em `Footer.tsx` usa Redis (via a integração "Upstash for Redis" no
Marketplace da Vercel) para persistir a contagem entre requisições — o site roda em
funções serverless na Vercel, sem disco persistente, então não dá pra usar o mesmo
padrão de `data/*.jsonl` do RSVP aqui.

Para funcionar em produção: no dashboard da Vercel, Storage → Marketplace →
"Upstash for Redis" → conectar ao projeto. Isso injeta `KV_REST_API_URL` e
`KV_REST_API_TOKEN` automaticamente. Sem essas variáveis (ex.: localmente, antes de
rodar `vercel env pull`), `/api/visits` responde 503 e o componente simplesmente não
renderiza nada — não quebra o build nem o resto da página.

## Conteúdo e status

Tudo o que é específico do casal fica em `src/content/wedding.ts`: nomes,
iniciais/monograma, domínio, SEO, convite, programação, dicas, como chegar,
RSVP e menu. A lista de presentes fica em `src/content/giftList.ts`. Os
componentes só leem desses arquivos.

O conteúdo vem do briefing "Orientações site.docx" dos noivos (nov/2026). O que
ainda não chegou está marcado com `TODO` em `wedding.ts`:

- texto de abertura (convite) e imagens da capa (aquarela + 3 fotos, em carrossel);
- arte do monograma SC (por ora as iniciais são desenhadas na fonte cursiva);
- fotos da galeria;
- aquarelas de traje próprias (Welcome Drinks e Casamento usam provisoriamente as
  do site anterior; Jangaday ainda não tem);
- fontes ITC Edwardian Script / Exmouth (precisam dos arquivos licenciados);
- domínio definitivo e Instagram do casamento;
- Presentes e Mensagem aos Noivos ("mais para frente") — desligados com
  `presentes.enabled` e `guestbook.enabled`.
