const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

const homeEn = {
  "heroSubtitle": "Women in Science, Technology, Engineering, and Mathematics",
  "heroTitle": "Empowering Women in STEM Across West & Central Africa",
  "heroDesc": "We are a vibrant community of female researchers, innovators, and tech professionals driving change and fostering inclusivity in the digital landscape.",
  "heroCta": "Join the Network",
  "heroSecondary": "Explore our Programmes",
  "impactTitle": "Our Impact in Numbers",
  "impactDesc": "Real results from our initiatives across the region.",
  "stat1Label": "Women Trained",
  "stat2Label": "Countries Reached",
  "stat3Label": "Active Mentors",
  "stat4Label": "Community Driven",
  "eventsTitle": "Upcoming events",
  "eventsDesc": "Join our latest workshops, webinars, and innovation labs designed for women in STEM.",
  "event1Title": "Mentorship, Sponsorship and Networks: What Actually Move Women Forward in STEM?",
  "event1Desc": "This webinar will explore how mentorship, sponsorship and professional networks can help women in STEM gain visibility, access opportunities, build confidence and advance their careers.",
  "event1Tag": "[Webinar]",
  "register": "Register",
  "event2Title": "Climate Innovation Lab 2026",
  "event2Desc": "Teams of women move from problem identification to working prototype, with mentorship throughout — building digital solutions to climate challenges in the region.",
  "event2Tag": "[Innovation Lab]",
  "newsTitle": "Insights & News",
  "newsDesc": "Stories from the ground, upcoming events, and updates from the WiW community across West and Central Africa.",
  "viewAll": "View all stories"
};

const homeFr = {
  "heroSubtitle": "Femmes dans les sciences, technologies, ingénierie et mathématiques",
  "heroTitle": "Autonomiser les femmes dans les STEM en Afrique de l'Ouest et du Centre",
  "heroDesc": "Nous sommes une communauté dynamique de chercheuses, innovatrices et professionnelles de la technologie qui favorisent le changement et l'inclusion dans le paysage numérique.",
  "heroCta": "Rejoindre le réseau",
  "heroSecondary": "Explorer nos programmes",
  "impactTitle": "Notre impact en chiffres",
  "impactDesc": "Résultats concrets de nos initiatives à travers la région.",
  "stat1Label": "Femmes Formées",
  "stat2Label": "Pays Atteints",
  "stat3Label": "Mentors Actifs",
  "stat4Label": "Axé sur la communauté",
  "eventsTitle": "Événements à venir",
  "eventsDesc": "Rejoignez nos derniers ateliers, webinaires et laboratoires d'innovation conçus pour les femmes dans les STEM.",
  "event1Title": "Mentorat, parrainage et réseaux : qu'est-ce qui fait vraiment avancer les femmes dans les STEM ?",
  "event1Desc": "Ce webinaire explorera comment le mentorat, le parrainage et les réseaux professionnels peuvent aider les femmes dans les STEM à gagner en visibilité, accéder à des opportunités, renforcer leur confiance et faire avancer leur carrière.",
  "event1Tag": "[Webinaire]",
  "register": "S'inscrire",
  "event2Title": "Laboratoire d'Innovation Climatique 2026",
  "event2Desc": "Les équipes de femmes passent de l'identification du problème au prototype fonctionnel, avec un mentorat tout au long du processus — pour construire des solutions numériques aux défis climatiques de la région.",
  "event2Tag": "[Laboratoire d'Innovation]",
  "newsTitle": "Aperçus et Actualités",
  "newsDesc": "Histoires de terrain, événements à venir et mises à jour de la communauté WiW à travers l'Afrique de l'Ouest et Centrale.",
  "viewAll": "Voir toutes les histoires"
};

const homePt = {
  "heroSubtitle": "Mulheres na Ciência, Tecnologia, Engenharia e Matemática",
  "heroTitle": "Capacitando Mulheres em STEM na África Ocidental e Central",
  "heroDesc": "Somos uma comunidade vibrante de pesquisadoras, inovadoras e profissionais de tecnologia impulsionando a mudança e promovendo a inclusão no cenário digital.",
  "heroCta": "Junte-se à Rede",
  "heroSecondary": "Explore nossos Programas",
  "impactTitle": "Nosso Impacto em Números",
  "impactDesc": "Resultados reais de nossas iniciativas em toda a região.",
  "stat1Label": "Mulheres Treinadas",
  "stat2Label": "Países Alcançados",
  "stat3Label": "Mentores Ativos",
  "stat4Label": "Movido pela Comunidade",
  "eventsTitle": "Próximos eventos",
  "eventsDesc": "Participe de nossos mais recentes workshops, webinars e laboratórios de inovação projetados para mulheres em STEM.",
  "event1Title": "Mentoria, Patrocínio e Redes: O que realmente move as mulheres para frente em STEM?",
  "event1Desc": "Este webinar explorará como mentoria, patrocínio e redes profissionais podem ajudar mulheres em STEM a ganhar visibilidade, acessar oportunidades, construir confiança e avançar em suas carreiras.",
  "event1Tag": "[Webinar]",
  "register": "Registrar",
  "event2Title": "Laboratório de Inovação Climática 2026",
  "event2Desc": "Equipes de mulheres vão da identificação do problema ao protótipo funcional, com mentoria durante todo o processo — construindo soluções digitais para os desafios climáticos na região.",
  "event2Tag": "[Laboratório de Inovação]",
  "newsTitle": "Insights e Notícias",
  "newsDesc": "Histórias do campo, próximos eventos e atualizações da comunidade WiW em toda a África Ocidental e Central.",
  "viewAll": "Ver todas as histórias"
};

en.Home = homeEn;
fr.Home = homeFr;
pt.Home = homePt;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
console.log("i18n updated");
