// Conteúdo do site — tudo o que é específico do casal fica aqui (nomes,
// monograma, domínio, SEO, textos, programação, dicas, etc.). Os componentes
// só leem daqui, então trocar de casal é editar este arquivo e as imagens em
// public/images/.
//
// Fonte: briefing "Orientações site.docx" enviado por Samara e Caio
// (nov/2026). Itens com `TODO` ainda não têm material dos noivos.

export const couple = {
  names: "Samara e Caio",
  initials: "SC",
  // Monograma em imagem (ex.: "/images/monograma-sc.png"). Enquanto for
  // `null`, o componente <Monogram> desenha as iniciais na fonte cursiva.
  // TODO: arte do monograma SC.
  monogram: null as { src: string; width: number; height: number } | null,
};

export const wedding = {
  city: "São Miguel dos Milagres",
  state: "Alagoas",
  // TODO: confirmar o domínio definitivo com os noivos.
  domain: "www.samaraecaio.com.br",
  siteUrl: "https://www.samaraecaio.com.br",
  // TODO: Instagram do casamento (se houver). Sem ele, o link some do rodapé.
  instagramHandle: null as string | null,
  instagramUrl: null as string | null,
  // Data/hora do casamento (dia 3, ver `schedule`) — alvo da contagem regressiva.
  ceremonyDateTimeISO: "2027-11-06T15:00:00-03:00",
  dateRangeLabel: "04 a 06 de Novembro de 2027",
  cityStateLabel: "São Miguel dos Milagres - AL",
};

// Título e descrição usados no <head> (layout.tsx) e nas páginas internas.
export const seo = {
  title: `${couple.names} | São Miguel dos Milagres`,
  description: `Site do casamento de ${couple.names}, em São Miguel dos Milagres, Alagoas. Três dias de celebração à beira-mar.`,
  shortDescription: `Site do casamento de ${couple.names}, em São Miguel dos Milagres, Alagoas.`,
};

/** "Galeria" → "Galeria | Samara e Caio". */
export function pageTitle(title: string): string {
  return `${title} | ${couple.names}`;
}

export type HeroImage = { src: string; alt: string };

// Capa da home. O briefing pede aquarela + 3 fotos do Raizeiro / Milagres,
// alternando automaticamente. Enquanto a lista estiver vazia, a capa mostra só
// a seção em papel com monograma, nomes e data.
// TODO: imagens da capa (e o carrossel automático).
export const hero = {
  images: [] as HeroImage[],
};

// TODO: texto aos amigos e familiares — "será enviado posteriormente".
export const invitation = {
  heading: "Queridos amigos e familiares,",
  paragraphs: [
    "Em breve, um recado especial dos noivos para vocês.",
  ],
  signature: `Com carinho,\n${couple.names}.`,
};

export type ScheduleImage = { src: string; width: number; height: number };

export type ScheduleDay = {
  day: number;
  date: string;
  title: string;
  // Aquarela decorativa acima do título do dia.
  icon?: ScheduleImage;
  time?: string;
  venue?: string;
  location?: string;
  venueLabel?: string;
  price?: string;
  // Texto livre, exibido antes de horário/local.
  description?: string[];
  dressCode?: string;
  dressNotes?: string[];
  // Aquarela do traje sugerido (sem legenda, a pedido dos noivos).
  dressIllustration?: ScheduleImage;
  // Frase exibida logo abaixo da aquarela do traje sugerido.
  illustrationNote?: string;
};

// Programação do briefing (nov/2026). Tudo no Raizeiro dos Milagres.
// TODO: aquarelas de traje próprias do casal. As de Welcome Drinks e
// Casamento são as do site anterior (mesmos trajes), mantidas como
// provisórias; o Jangaday ainda não tem.
export const schedule: ScheduleDay[] = [
  {
    day: 1,
    date: "04.11.2027",
    title: "Welcome Drinks",
    icon: { src: "/images/welcome-drinks.png", width: 190, height: 190 },
    time: "16h",
    venue: "Raizeiro dos Milagres",
    dressCode: "Roupa Branca",
    dressNotes: [
      "Mulheres: roupas leves, como vestidos longos ou curtos, saia fluída e short; salto bloco ou rasteirinhas são bem-vindos.",
      "Homens: camisa social leve ou de linho, calça leve ou bermuda; fiquem à vontade para usar chinelo ou tênis.",
    ],
    dressIllustration: { src: "/images/traje-dia1.png", width: 950, height: 1254 },
  },
  {
    day: 2,
    date: "05.11.2027",
    title: "Jangaday",
    icon: { src: "/images/jangaday.png", width: 220, height: 220 },
    time: "10h",
    venueLabel: "Local de saída",
    venue: "Raizeiro dos Milagres",
    dressCode: "Roupa de banho",
    dressNotes: [
      "Mulheres: biquíni, maiô e saída de praia.",
      "Homens: sunga e short.",
      "Não se esqueçam de levar protetor solar e óculos de sol!",
    ],
  },
  {
    day: 3,
    date: "06.11.2027",
    title: "Casamento",
    icon: { src: "/images/casamento.png", width: 197, height: 179 },
    time: "15h",
    venue: "Raizeiro dos Milagres",
    dressCode: "Social",
    dressNotes: [
      "Mulheres: vestido de material leve e confortável; recomendamos salto bloco.",
      "Homens: a gravata é opcional; preferência por camisa clara de tecido mais leve, com sapato social confortável.",
    ],
    dressIllustration: { src: "/images/traje-dia3.png", width: 972, height: 1316 },
    illustrationNote:
      "Neste dia o branco será exclusivamente da noiva, por isso pedimos que evitem tons claros.",
  },
];

// Galeria — fotos em `public/images/galeria/`. Enquanto `photos` estiver
// vazio a página mostra placeholders.
// TODO: fotos que os noivos selecionaram (depois, as do pré-wedding).
export const gallery = {
  note: `Em breve, uma seleção de fotos de ${couple.names}.`,
  photos: [] as { src: string; width: number; height: number; alt: string }[],
};

export type SimplePage = {
  title: string;
  intro: string;
  note: string;
};

// Páginas de apoio fora do menu (herdadas do site anterior). Sem material
// dos noivos por enquanto.
export const cerimonia: SimplePage = {
  title: "Cerimônia",
  intro:
    "Não percam nossa linda e emocionante cerimônia. Contamos com vocês para tornar esse dia ainda mais especial!",
  note: "Fotos e detalhes do local entram aqui em breve.",
};

export const festa: SimplePage = {
  title: "Festa",
  intro:
    "Com muita alegria no coração, convidamos vocês para compartilharem conosco este dia tão especial. Mal podemos esperar para celebrar o amor com todos vocês e criar memórias incríveis juntos!",
  note: "Fotos e detalhes do local entram aqui em breve.",
};

export const chaBar: SimplePage = {
  title: "Chá Bar",
  intro:
    "As comemorações já começaram e nada melhor do que compartilhar risadas e bons momentos com quem amamos. Venham brindar, celebrar, se divertir muito e fazer desse dia algo ainda mais especial!",
  note: "Fotos e detalhes do local entram aqui em breve.",
};

export type DicaContact = {
  name?: string;
  phone?: string;
  instagram?: string;
  note?: string;
};

export type DicaItem = {
  name: string;
  detail?: string;
  address?: string;
  contacts?: DicaContact[];
};

export type DicaSection = {
  key: string;
  title: string;
  icon: { src: string; width: number; height: number };
  intro?: string;
  items: DicaItem[];
};

// Briefing (nov/2026): só Hospedagem, Maquiagem e Restaurantes. Maquiagem e
// Restaurantes mantêm as indicações do site anterior (Pra Quê Salão agora é
// @studiopqs). Distâncias de hospedagem até o Raizeiro dos Milagres.
export const dicas = {
  title: "Dicas",
  intro:
    "Separamos algumas opções que indicamos para ajudar vocês, nossos queridos convidados, a se prepararem para o grande dia.",
  guideTitle: "Guia São Miguel dos Milagres",
  warning:
    "Atenção: não há Uber em Milagres. Recomendamos o aluguel de carro ou o agendamento dos transfers com antecedência.",
  // Quadro opcional abaixo do aviso do Uber (ex.: transfer no dia do
  // casamento). O trecho em `highlight` aparece em negrito.
  transfer: null as { highlight: string; paragraphs: string[] } | null,
  sections: [
    {
      key: "hospedagem",
      title: "Hospedagem",
      icon: { src: "/images/dica-hospedagem.png", width: 109, height: 225 },
      intro:
        "Pousadas e hotéis em São Miguel dos Milagres, com a distância até o Raizeiro dos Milagres, local de todos os eventos.",
      items: [
        { name: "Villa Kamby Milagres", detail: "240 m" },
        { name: "Pousada Haya", detail: "500 m" },
        { name: "Pousada Paraíso dos Milagres", detail: "550 m" },
        { name: "Sítio Villa da Mata", detail: "850 m" },
        { name: "Riacho dos Milagres", detail: "1,5 km" },
        { name: "Taboo Milagres", detail: "1,8 km" },
        { name: "Naluum Residence – Casa", detail: "1,8 km" },
        { name: "Mahré Hotel e SPA", detail: "1,8 km" },
        { name: "Nannai – antigo Tuju Boutique Hotel", detail: "1,9 km" },
        { name: "Pousada Oribá Chalé Boutique", detail: "2 km" },
        { name: "Pousada Quadrado", detail: "2,1 km" },
        { name: "Natú Boutique Stay", detail: "2,3 km" },
        { name: "Casas Naquê", detail: "2,3 km" },
        { name: "Ocacoar", detail: "2,4 km" },
        { name: "Pousada Encanto das Águas", detail: "2,5 km" },
        { name: "Vila Chuá", detail: "2,6 km" },
        { name: "Paru Boutique Hotel", detail: "2,6 km" },
        { name: "Aqualuna Pousada", detail: "2,9 km" },
        { name: "Casa Kamara – Casa", detail: "3,4 km" },
        { name: "Villas Taturé", detail: "3,5 km" },
        { name: "Pousada Zaya", detail: "4,9 km" },
        { name: "Pousada do Toque", detail: "5,3 km" },
        { name: "Casa Acayu", detail: "5,7 km" },
      ],
    },
    {
      key: "maquiagem",
      title: "Maquiagem",
      icon: { src: "/images/dica-cabeleireiro.png", width: 192, height: 188 },
      intro:
        "Esses profissionais são de Maceió — é preciso agendar com bastante antecedência.",
      items: [
        {
          name: "Lays Marques – Espaço 172",
          contacts: [
            { phone: "(82) 99934-3798", instagram: "@lays.makeup" },
          ],
        },
        {
          name: "Pra Quê Salão",
          contacts: [
            { phone: "(82) 99988-1568", instagram: "@studiopqs" },
          ],
        },
        {
          name: "Make Up N",
          contacts: [{ phone: "(82) 99939-5644", instagram: "@makeupn" }],
        },
        {
          name: "Lua Oliveira",
          contacts: [
            { phone: "(82) 99994-6060", instagram: "@luaoliveirabeauty" },
          ],
        },
        {
          name: "Studio Camilla Barros",
          contacts: [
            { phone: "(82) 99322-1450", instagram: "@studiocamillabarros" },
          ],
        },
        {
          name: "Tânia Lucena",
          contacts: [
            { phone: "(82) 9627-8007", instagram: "@tanialucenamakeup" },
          ],
        },
        {
          name: "DeLuca",
          contacts: [{ phone: "(82) 98149-6516", instagram: "@isdeluca" }],
        },
        {
          name: "Gab Make Up",
          contacts: [
            { phone: "(82) 99928-5492", instagram: "@gabmakeuphair" },
          ],
        },
        {
          name: "Concept Glow",
          detail:
            "Fornecedor de Milagres — não precisa agendar com tanta antecedência. Tem serviços de massagem, drenagem, produção de mulheres, homens, crianças, etc.",
          contacts: [
            { phone: "(82) 99416-9097", instagram: "@conceptglow_" },
          ],
        },
      ],
    },
    {
      key: "restaurantes",
      title: "Restaurantes",
      icon: { src: "/images/dica-restaurantes.png", width: 192, height: 143 },
      items: [
        {
          name: "Restaurante Sur",
          detail: "Funciona apenas para jantar. Localizado na Pousada Quadrado.",
          contacts: [
            { phone: "(82) 99678-1687", instagram: "@restaurantesur" },
          ],
        },
        {
          name: "Tahafa",
          detail:
            "Cozinha oriental tropical. Localizado na entrada do Raizeiro dos Milagres, Rota dos Milagres.",
          contacts: [{ phone: "(82) 98161-5022" }],
        },
        {
          name: "Quintal do Zé",
          detail:
            "Massas artesanais, risotos deliciosos e uma das melhores avaliações da cidade. Ambiente acolhedor e agradável. Só funciona para jantar.",
          address: "R. Felisberto de Ataíde, 126, São Miguel dos Milagres",
          contacts: [
            { phone: "(82) 99301-8686", instagram: "@quintaldozemilagres" },
          ],
        },
        {
          name: "Jardim Secreto",
          detail:
            "Cantinho na Rota Ecológica dos Milagres que lembra casa de vó, com cheirinho de café coado e bolo fresquinho.",
          address: "AL 101, Tatuamunha, Porto de Pedras",
          contacts: [
            { phone: "(82) 99902-2120", instagram: "@jardimsecretomilagres" },
          ],
        },
        {
          name: "Delícias Alagoanas",
          detail:
            "Café da manhã e pratos executivos baratinhos para o almoço — também é uma lojinha de delícias para levar de lembrança (doces típicos, bolachas, etc.).",
          address: "Vilinha do Marceneiro",
          contacts: [{ instagram: "@deliciasalagoanas.milagres" }],
        },
        {
          name: "Enildo Restaurante",
          detail:
            "Restaurante beira-mar com comidas típicas e bastante opção de frutos do mar.",
          address: "Rua da Praia, 09, São Miguel dos Milagres — Porto da Rua",
          contacts: [{ phone: "(82) 3295-1310" }],
        },
        {
          name: "Patrícia Bistro",
          address: "Rua Eurico Marinho Leão, 37, São Miguel dos Milagres",
          contacts: [{ phone: "(82) 99175-3663" }],
        },
        {
          name: "Tapioca da Elisangela",
          detail: "A melhor tapioca de Alagoas! Patrimônio cultural alagoano.",
          address: "Vilinha do Marceneiro",
        },
        {
          name: "Restaurante Origami",
          address: "Rua Sitio Suzuki, Praia do Toque",
          contacts: [{ phone: "(82) 99963-2223" }],
        },
        {
          name: "General Bacon",
          detail:
            "Deliciosas opções de hambúrguer e pizza feita no forno à lenha.",
          address:
            "R. Luiz Ferreira Dorta, 625 — Tatuamunha, Porto de Pedras (Vila Guajá)",
          contacts: [{ instagram: "@fornariaegeneralbaconvilaguaja" }],
        },
        {
          name: "Bali Sorvetes",
          address:
            "R. Luiz Ferreira Dorta, 625 — Tatuamunha, Porto de Pedras (Vila Guajá)",
        },
        {
          name: "Massagueirinha",
          address:
            "R. Luiz Ferreira Dorta, 625 — Tatuamunha, Porto de Pedras (Vila Guajá)",
        },
        {
          name: "Tatuah Fornaria",
          detail: "Pizza no forno à lenha.",
          address: "R. Luiz Ferreira Dorta — Tatuamunha, Porto de Pedras",
          contacts: [
            { phone: "(82) 98779-2341", instagram: "@tatuahforneria" },
          ],
        },
        {
          name: "Restaurante Wassu",
          address: "Sítio Belo dos Milagres, s/n°, Praia do Toque",
          contacts: [
            { phone: "(82) 98103-1001", instagram: "@pousadawassu" },
          ],
        },
        {
          name: "Villa Italiana Ristorante",
          address: "R. Ana Marinho Braga, São Miguel dos Milagres",
          contacts: [{ phone: "(82) 99806-0051" }],
        },
        {
          name: "Banami",
          detail:
            "Localizado na Pousada Haya. Ambiente bucólico e cardápio elogiado por vários chefs.",
          contacts: [
            { phone: "(82) 99651-0404", instagram: "@pousadahaya" },
          ],
        },
        {
          name: "No Quintal",
          detail:
            "Almoço das 12h às 15h sem reservas. Jantar das 19h às 21h, somente com reservas (reservation-widget.tagme.com.br).",
          address: "Rua do Campo, s/n° — Praia do Toque",
          contacts: [
            { phone: "(82) 99910-7078", instagram: "@restaurantenoquintal" },
          ],
        },
        {
          name: "Paru Boutique Hotel",
          address: "AL 101 Norte, km 3, s/n°, Passo de Camaragibe",
          contacts: [
            {
              phone: "(82) 3258-5155 / (82) 99404-4050",
              instagram: "@paruboutiquehotel",
            },
          ],
        },
        {
          name: "Ascua Burguer",
          detail: "Por Mister Brasa. Terça a domingo, das 16h às 22h.",
          address: "Villa Buriti, Tatuamunha, Porto de Pedras",
        },
      ],
    },
  ] satisfies DicaSection[],
};

export const comoChegar = {
  title: "Como Chegar",
  paragraphs: [
    "O aeroporto mais próximo é o de Maceió, o Zumbi dos Palmares. Distância até Milagres: 100 km (aproximadamente), o trajeto leva em torno de 1h30.",
    "Também é possível ir pelo aeroporto de Recife, o Gilberto Freyre. Distância até Milagres: 200 km (aproximadamente), o trajeto leva em média 3h.",
    "Reforçamos: não há Uber em Milagres! Recomendamos a locação de carro, que pode ser feita nos próprios aeroportos. Caso prefiram, deixamos algumas indicações de transfers para Milagres.",
  ],
  // Mapa ilustrado opcional da região. TODO: mapa com o Raizeiro dos Milagres.
  map: null as { src: string; width: number; height: number; alt: string } | null,
  transferSections: [
    {
      title: "Motoristas / Transfer Maceió–Milagres",
      contacts: [
        { name: "Milagres do Patacho (Van e Carro)", phone: "(82) 9151-0278" },
        { name: "Tizio", phone: "(82) 98858-2934" },
        { name: "Babu", phone: "(82) 99108-5448" },
        { name: "Eduardo", phone: "(82) 99645-9670" },
        { name: "Israel", phone: "(82) 99132-5795" },
        { name: "Diron", phone: "(82) 99117-4182" },
        { name: "Sandro", phone: "(82) 99173-5171" },
        { name: "Kito/Jackson (Van e Carro)", phone: "(82) 99913-7790" },
      ],
    },
    {
      title: "Transfer Recife–Milagres",
      contacts: [
        { name: "Clean Service (Van e Carro)", phone: "(81) 9745-2303" },
        { name: "24h Turismo", phone: "(81) 9682-1621" },
        { name: "Silva Júnior", phone: "(81) 9828-3521" },
        { name: "Ôxe Receptivos", phone: "(81) 8333-1927" },
        { name: "Recife Transporte Executivo", phone: "(81) 9121-3122" },
      ],
    },
  ],
  locadoras: {
    title: "Locadoras de carros",
    names: ["Movida", "Localiza", "Unidas", "Foco"],
    note: "Consultar disponibilidade previamente.",
  },
  farmacia: { name: "Farmácia Porto da Rua", phone: "(82) 3295-1413" },
};

export const padrinhos = {
  title: "Padrinhos",
  intro: "Nossa singela homenagem aos padrinhos de casamento.",
  note: "Lista e fotos dos padrinhos em breve.",
};

// Presentes — "adicionaremos esse item mais para frente" (briefing). Com
// `enabled: false` a seção some da home e do menu, e /presentes dá 404.
// A chave Pix vem das env vars PIX_KEY / PIX_MERCHANT_NAME /
// PIX_MERCHANT_CITY (ver lib/giftPix.ts) e a lista em content/giftList.ts.
export const presentes = {
  enabled: false,
  title: "Presentes",
  intro:
    "A sua presença é o maior presente que podemos receber, mas caso queira nos presentear, preparamos uma lista de presentes com carinho!",
  qrIntro:
    "Segue abaixo o QR Code da nossa conta bancária, caso também prefiram nos presentear diretamente.",
};

export const fornecedores = {
  title: "Fornecedores",
  intro:
    "Aqueles que nos deram uma forcinha para que esse sonho se tornasse realidade, fazemos questão de lembrar e indicar!",
  note: "A lista de fornecedores entra aqui em breve.",
};

// "Confirme sua presença" no lugar de R.S.V.P. (briefing). As opções são os
// nomes dos eventos da programação.
export const rsvp = {
  title: "Confirme sua presença",
  eventOptions: schedule.map((day) => day.title),
  declineOption: "Não poderei comparecer",
  // Cerimonial também é o Éden (briefing).
  // TODO: confirmar se a assessora/contato é o mesmo do site anterior.
  assistance: {
    text: "Em caso de dúvidas sobre qualquer um dos eventos, nossa assessora estará disponível para ajudá-los.",
    name: "Eden Cerimonial – Eva Ryane",
    phoneLabel: "+55 82 8892-7552",
    whatsappUrl: "https://wa.me/558288927552",
  },
};

// Mensagem aos noivos — também "mais para frente". Com `enabled: false` a
// seção some da home e do menu (o admin continua funcionando).
export const guestbook = {
  enabled: false,
  title: "Mensagem aos Noivos",
};

export type NavLink = { label: string; href: string };

// Menu fixo com âncoras da página única, mais a Galeria como página própria.
export const primaryNav: NavLink[] = [
  { label: "Início", href: "/#topo" },
  { label: "Programação", href: "/#programacao" },
  { label: "Confirme sua Presença", href: "/#rsvp" },
  { label: "Dicas", href: "/#dicas" },
  { label: "Como Chegar", href: "/#como-chegar" },
  ...(presentes.enabled ? [{ label: "Presentes", href: "/presentes" }] : []),
  ...(guestbook.enabled ? [{ label: "Mensagens", href: "/#mensagens" }] : []),
  { label: "Galeria", href: "/galeria" },
];
