const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

Object.assign(en.Home, {
  "missionTitle": "A regional response to the gender gap in STEM",
  "missionDesc1": "Launched in 2018, Women-In-WACREN (WiW) is WACREN's initiative to address gender inequality and the under-representation of women in science, technology, engineering and mathematics across West and Central Africa.",
  "missionDesc2": "We work through the region's National Research and Education Networks (NRENs), universities and research institutions — the same infrastructure that carries Africa's research data — to reach women where they already study and work.",
  "learnMore": "Learn more about our work",
  "impact1Title": "Train",
  "impact1Desc": "Hands-on technical workshops in Python, physical computing, IoT, AI, open science and climate data analysis.",
  "impact2Title": "Connect",
  "impact2Desc": "A regional Community of Practice for mentorship, peer learning and cross-border collaboration between programmes.",
  "impact3Title": "Innovate",
  "impact3Desc": "Structured innovation labs where women build digital solutions to challenges in their own communities.",
  "stat1": "Women trained since 2018",
  "stat2": "Countries reached",
  "stat3": "Workshops & bootcamps",
  "testimonialsTitle": "Voices of Women-in-WACREN",
  "testimonialsDesc": "Hear from the researchers, innovators, and leaders who have participated in our programmes."
});

Object.assign(fr.Home, {
  "missionTitle": "Une réponse régionale à l'écart entre les sexes dans les STEM",
  "missionDesc1": "Lancée en 2018, Women-In-WACREN (WiW) est l'initiative du WACREN visant à lutter contre les inégalités entre les sexes et la sous-représentation des femmes dans les sciences, la technologie, l'ingénierie et les mathématiques en Afrique de l'Ouest et du Centre.",
  "missionDesc2": "Nous travaillons par l'intermédiaire des Réseaux Nationaux de Recherche et d'Enseignement (NREN), des universités et des instituts de recherche — la même infrastructure qui achemine les données de recherche de l'Afrique — pour atteindre les femmes là où elles étudient et travaillent déjà.",
  "learnMore": "En savoir plus sur notre travail",
  "impact1Title": "Former",
  "impact1Desc": "Ateliers techniques pratiques sur Python, l'informatique physique, l'IoT, l'IA, la science ouverte et l'analyse des données climatiques.",
  "impact2Title": "Connecter",
  "impact2Desc": "Une communauté de pratique régionale pour le mentorat, l'apprentissage entre pairs et la collaboration transfrontalière.",
  "impact3Title": "Innover",
  "impact3Desc": "Des laboratoires d'innovation structurés où les femmes construisent des solutions numériques pour leurs propres communautés.",
  "stat1": "Femmes formées depuis 2018",
  "stat2": "Pays atteints",
  "stat3": "Ateliers et bootcamps",
  "testimonialsTitle": "Voix de Women-in-WACREN",
  "testimonialsDesc": "Écoutez les chercheuses, innovatrices et leaders qui ont participé à nos programmes."
});

Object.assign(pt.Home, {
  "missionTitle": "Uma resposta regional à disparidade de gênero em STEM",
  "missionDesc1": "Lançada em 2018, Women-In-WACREN (WiW) é a iniciativa da WACREN para combater a desigualdade de gênero e a sub-representação das mulheres na ciência, tecnologia, engenharia e matemática na África Ocidental e Central.",
  "missionDesc2": "Trabalhamos através das Redes Nacionais de Pesquisa e Educação (NRENs), universidades e instituições de pesquisa — a mesma infraestrutura que transporta os dados de pesquisa da África — para alcançar as mulheres onde elas já estudam e trabalham.",
  "learnMore": "Saiba mais sobre o nosso trabalho",
  "impact1Title": "Treinar",
  "impact1Desc": "Workshops técnicos práticos em Python, computação física, IoT, IA, ciência aberta e análise de dados climáticos.",
  "impact2Title": "Conectar",
  "impact2Desc": "Uma Comunidade de Prática regional para mentoria, aprendizagem entre pares e colaboração transfronteiriça.",
  "impact3Title": "Inovar",
  "impact3Desc": "Laboratórios de inovação estruturados onde as mulheres constroem soluções digitais para suas próprias comunidades.",
  "stat1": "Mulheres treinadas desde 2018",
  "stat2": "Países alcançados",
  "stat3": "Workshops e bootcamps",
  "testimonialsTitle": "Vozes da Women-in-WACREN",
  "testimonialsDesc": "Ouça as pesquisadoras, inovadoras e líderes que participaram de nossos programas."
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
