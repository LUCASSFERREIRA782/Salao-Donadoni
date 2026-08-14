/* =========================================================
   CONFIG.JS — LP Studio
   ÚNICO arquivo que deve ser editado ao trocar de cliente.
   Nenhum texto de conteúdo deve ficar direto no HTML.
   ========================================================= */

const CONFIG = {

  empresa: {
    nome: "DONADONI",
    slogan: "Beleza que se sente antes de se ver",
    logoTexto: "DONADONI",
  },

  contato: {
    telefone: "(11) 99999-9999",
    whatsapp: "5511999999999",
    whatsappMensagemPadrao: "Olá! Quero agendar um horário no DONADONI.",
    email: "contato@donadonisalao.com.br",
    endereco: "Vila Luzita, Santo André — SP",
    googleMapsLink: "https://maps.google.com/?q=Vila+Luzita+Santo+Andr%C3%A9",
  },

  redes: {
    instagram: "https://instagram.com/donadoni.salao",
    facebook: "https://facebook.com/donadonisalao",
  },

  boksy: {
    // Link de agendamento externo (ex: Boksy). Trocar aqui quando o cliente tiver o link real.
    url: "https://boksy.com/donadoni",
    label: "Agendar horário",
  },

  horarios: [
    { dia: "Terça a Sexta", horario: "9h às 19h" },
    { dia: "Sábado",        horario: "9h às 17h" },
    { dia: "Domingo e Segunda", horario: "Fechado" },
  ],

  hero: {
    eyebrow: "Salão de beleza · Vila Luzita, Santo André",
    tituloPrefixo: "Sua beleza,",
    tituloDestaque: "no seu tempo",
    subtitulo: "Cabelo, unhas, estética e maquiagem em um espaço pensado pra você se sentir incrível — do agendamento ao resultado.",
    stats: [
      { numero: "12+", label: "anos de experiência" },
      { numero: "5.0", label: "avaliação média" },
      { numero: "3k+", label: "clientes atendidas" },
    ],
  },

  sobre: {
    eyebrow: "Sobre o DONADONI",
    titulo: "Um salão pensado pra sua rotina, não contra ela",
    texto: "Cada atendimento no DONADONI é planejado pra caber na sua semana: agendamento rápido pelo celular, horário respeitado e uma equipe que entende exatamente o que você quer antes de você terminar de explicar.",
  },

  servicos: [
    {
      icone: "✂️",
      nome: "Corte & Coloração",
      descricao: "Corte personalizado e coloração com produtos de tratamento incluso.",
      preco: "a partir de R$ 90",
    },
    {
      icone: "💅",
      nome: "Unhas",
      descricao: "Manicure, pedicure e alongamento em gel com acabamento de salão.",
      preco: "a partir de R$ 45",
    },
    {
      icone: "✨",
      nome: "Estética Facial",
      descricao: "Limpeza de pele, hidratação e procedimentos faciais não invasivos.",
      preco: "a partir de R$ 80",
    },
    {
      icone: "👁️",
      nome: "Sobrancelha & Design",
      descricao: "Design com henna ou fio a fio, do jeito que valoriza seu olhar.",
      preco: "a partir de R$ 35",
    },
    {
      icone: "💄",
      nome: "Maquiagem",
      descricao: "Maquiagem para o dia a dia ou eventos especiais.",
      preco: "a partir de R$ 70",
    },
    {
      icone: "🌿",
      nome: "Spa Dia",
      descricao: "Pacote completo de relaxamento: cabelo, unhas e estética em um único dia.",
      preco: "a partir de R$ 180",
    },
  ],

  diferenciais: [
    { titulo: "Agendamento em 1 minuto", texto: "Marque pelo WhatsApp ou pelo app, sem precisar ligar." },
    { titulo: "Produtos profissionais", texto: "Linhas de tratamento usadas pelas melhores redes do país." },
    { titulo: "Equipe especializada", texto: "Profissionais com formação contínua em tendências e técnicas." },
    { titulo: "Ambiente exclusivo", texto: "Espaço planejado pra você relaxar do início ao fim do atendimento." },
  ],

  galeria: [
    { legenda: "Coloração", tall: true },
    { legenda: "Corte moderno" },
    { legenda: "Unhas em gel" },
    { legenda: "Maquiagem de festa" },
    { legenda: "Design de sobrancelha" },
    { legenda: "Ambiente do salão", tall: true },
    { legenda: "Spa dia" },
    { legenda: "Finalização" },
  ],

  avaliacoes: [
    { estrelas: 5, texto: "Saí de lá me sentindo outra pessoa. Atendimento rápido e o resultado ficou exatamente como eu queria.", autora: "Cliente DONADONI" },
    { estrelas: 5, texto: "Agendei pelo WhatsApp em menos de um minuto e fui atendida no horário certinho.", autora: "Cliente DONADONI" },
    { estrelas: 5, texto: "Equipe atenciosa do início ao fim. Já virei cliente fixa.", autora: "Cliente DONADONI" },
  ],

  cta: {
    titulo: "Pronta pra marcar seu horário?",
    texto: "Fale agora com a gente pelo WhatsApp e garanta o dia que você quiser.",
  },

  seo: {
    titulo: "DONADONI Salão de Beleza — Vila Luzita, Santo André",
    descricao: "Cabelo, unhas, estética facial e maquiagem em Santo André. Agende pelo WhatsApp.",
  },
};
