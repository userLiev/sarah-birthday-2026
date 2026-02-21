// =============================================================================
// SARAH BIRTHDAY — CONTENT CONFIGURATION
// =============================================================================
// Edite este arquivo para personalizar todo o conteúdo do site.
// Adicione fotos na pasta /public/photos/ e referencie-as aqui.

// Hotspots: áreas clicáveis sobre a imagem (posições em % do canvas 16:9)
export const HOTSPOTS = [
  {
    id: "mapa",
    label: "Mapa",
    position: { left: "5%", top: "3%", width: "22%", height: "35%" },
    action: "singlePhoto",
    photo: {
      src: "/photos/map/map.jpg",
      title: "😮",
      caption: "Presente de Natal",
    },
  },
  {
    id: "fotos",
    label: "Fotos",
    position: { left: "38%", top: "4%", width: "28%", height: "30%" },
    action: "gallery",
    galleryId: "photos",
  },
  {
    id: "carta",
    label: "Carta de Amor",
    position: { left: "66%", top: "15%", width: "12%", height: "28%" },
    action: "loveLetter",
  },
  {
    id: "radio",
    label: "Rádio",
    position: { left: "63%", top: "46%", width: "12%", height: "15%" },
    action: "radio",
  },
  {
    id: "tv",
    label: "TV",
    position: { left: "78%", top: "25%", width: "22%", height: "40%" },
    action: "movieList",
  },
  {
    id: "cake",
    label: "Aniversário",
    position: { left: "64%", top: "63%", width: "18%", height: "22%" },
    action: "singlePhoto",
    photo: {
      src: "/photos/birthday/birthday.png",
      title: "Aniversário 2025",
      caption: "Surpresa",
    },
  },
  {
    id: "books",
    label: "Presente de Natal",
    position: { left: "79%", top: "72%", width: "14%", height: "21%" },
    action: "singlePhoto",
    photo: {
      src: "/photos/books/books.jpeg",
      title: "Natal 2024",
      caption: "Presente de Natal",
    },
  },
  {
    id: "rengar",
    label: "Rengar",
    position: { left: "30%", top: "26%", width: "12%", height: "12%" },
    action: "singlePhoto",
    photo: {
      src: "/photos/cats/rengar.jpeg",
      title: "Rengar",
      caption: "Soninho",
    },
  },
  {
    id: "sofia",
    label: "Sofia",
    position: { left: "30%", top: "67%", width: "15%", height: "14%" },
    action: "singlePhoto",
    photo: {
      src: "/photos/cats/sofia.jpeg",
      title: "Sofia",
      caption: "Sofi S2",
    },
  },
  {
    id: "Piu-piu",
    label: "Piu-piu",
    position: { left: "54%", top: "50%", width: "10%", height: "20%" },
    action: "singlePhoto",
    photo: {
      src: "/photos/cats/piu.jpeg",
      title: "Piu-piu",
      caption: "Piu",
    },
  },
];

// Galerias de fotos
// Adicione objetos { src, caption } nos arrays abaixo.
// Coloque os arquivos de imagem em /public/photos/
export const GALLERIES = {
  photos: {
    title: "Nossas Fotos",
    images: [
      { src: "/photos/us/00.jpeg", caption: "Primeira foto juntos" },
      { src: "/photos/us/01.jpeg", caption: "Ibira" },
      { src: "/photos/us/1.jpg", caption: "Alegro" },
      { src: "/photos/us/2.jpg", caption: "Shopping" },
      { src: "/photos/us/3.jpg", caption: "Primeiro almoço de Natal" },
      { src: "/photos/us/4.jpg", caption: "Ibira" },
      { src: "/photos/us/5.jpg", caption: "De moto no sítio" },
      { src: "/photos/us/6.jpg", caption: "Teté" },
      { src: "/photos/us/7.jpg", caption: "Elevador da Casa Joka" },
      { src: "/photos/us/8.jpg", caption: "Oiki" },
      { src: "/photos/us/9.jpeg", caption: "All Star" },
      { src: "/photos/us/10.jpeg", caption: "Se arrumando em SP" },
      { src: "/photos/us/11.jpeg", caption: "Ibira Natal" },
      { src: "/photos/us/12.jpeg", caption: "Pastel na feira" },
      { src: "/photos/us/13.jpeg", caption: "El Ternero" },
      { src: "/photos/us/14.jpeg", caption: "No carro" },
      { src: "/photos/us/15.jpeg", caption: "Lavando cabelo" },
      { src: "/photos/us/16.jpeg", caption: "Gatos" },
      { src: "/photos/us/17.jpeg", caption: "Quebra-cabeça" },
      { src: "/photos/us/18.jpeg", caption: "Rolê de moto" },
      { src: "/photos/us/19.jpeg", caption: "Casamento do Márcio" },
      {
        src: "/photos/us/20.jpeg",
        caption: "Roda gigante em Campos do Jordão",
      },
      { src: "/photos/us/21.jpeg", caption: "Motoca" },
      { src: "/photos/us/22.jpeg", caption: "Se arrumando em Itajubá" },
    ],
  },
};

// Carta de amor
export const LOVE_LETTER = {
  title: "Para Sarah,",
  date: "23 de Fevereiro de 2026",
  body: `Feliz 25 anos, meu amor...

Esses 1 ano e 3 meses ao seu lado têm sido muito bons.

Gostaria de ter de dado mais flores, mas nunca faltou vontade de te fazer feliz e de cuidar do que a gente construiu juntos.

Eu te amo, gosto de quem você é e do que a gente vive. E mais do que comemorar seus 25 anos hoje, eu espero poder comemorar todos os próximos aniversários ao seu lado.

Com todo meu amor,
Gabriel`,
  signature: "❤️",
};

// Rádio — Spotify embed
// Para obter a URL de embed: abra a playlist no Spotify → ... → Share → Embed Playlist
// O formato é: https://open.spotify.com/embed/playlist/SEU_ID_AQUI
export const RADIO = {
  title: "Nossa Playlist",
  spotifyEmbedUrl:
    "https://open.spotify.com/embed/playlist/1neCMzvfV1NM3urS7r5M7b?utm_source=generator",
};

// Lista de filmes
export const MOVIE_LIST = {
  title: "Filmes que assistimos juntos",
  movies: [
    {
      title: "La La Land",
      year: 2016,
      note: "Romântico demais!",
      poster: "/photos/movies/lalaland.png",
    },
    {
      title: "Efeito Borboleta",
      year: 2004,
      note: "Hold ooooon",
      poster: "/photos/movies/efeitoborboleta.jpg",
    },
    {
      title: "Questão de Tempo",
      year: 2013,
      note: "Muito bom!!",
      poster: "/photos/movies/questaodetempo.png",
    },
    {
      title: "Enrolados",
      year: 2011,
      note: "😙",
      poster: "/photos/movies/enrolados.png",
    },
    {
      title: "High School Musical",
      year: 2006,
      note: "Mehh",
      poster: "/photos/movies/highschoolmusical.jpg",
    },
    {
      title: "Crepúsculo",
      year: 2008,
      note: "🧛✨",
      poster: "/photos/movies/twilight.jpg",
    },
    {
      title: "Solo Leveling",
      year: 2024,
      note: "Dahora",
      poster: "/photos/movies/sololeveling.jpg",
    },
    {
      title: "O Poderoso Chefão",
      year: 1972,
      note: "Clássico",
      poster: "/photos/movies/poderosochefao.jpg",
    },
    {
      title: "Vanilla Sky",
      year: 2002,
      note: "De mais!",
      poster: "/photos/movies/vanillasky.jpg",
    },
    {
      title: "Dirty Dancing",
      year: 1987,
      note: "💃",
      poster: "/photos/movies/dirtydancing.jpg",
    },
    {
      title: "Entrevista com o Vampiro",
      year: 1994,
      note: "Melhor que Crepúsculo",
      poster: "/photos/movies/entrevistavampiro.png",
    },
    {
      title: "Cruella",
      year: 2021,
      note: "Maneirasso!",
      poster: "/photos/movies/cruella.jpg",
    },
  ],
};
