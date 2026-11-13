# Site de Casamento — Samara e Caio

Site do casamento de Samara e Caio (04 a 06/11/2027, São Miguel dos Milagres - AL).
Criado a partir do site de Camila e Victor, com o mesmo código e o conteúdo do
casal centralizado em `site/src/content/wedding.ts`.

## Estrutura

```
.
└── site/  → site do casamento (Next.js + TypeScript + Tailwind CSS)
```

Gerenciado como monorepo com [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces).

## Rodando

```bash
npm install     # na raiz — instala as dependências
npm run dev     # sobe o site em http://localhost:3000
```

Veja [site/README.md](site/README.md) para variáveis de ambiente (Redis, Stripe,
Pix, admin) e o que ainda está pendente de material dos noivos.
