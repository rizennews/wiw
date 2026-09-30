const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

Object.assign(en, {
  ProgrammeTabs: {
    "tabOpenNow": "Open now",
    "tabPastWorkshops": "Past workshops",
    "badgeOpen": "Applications opening",
    "titleClimate": "Climate Innovation Lab 2026",
    "descClimate": "A structured innovation programme strengthening women's capacity to collaboratively develop digital solutions to climate challenges. Teams progress from learning and problem identification through prototype development, with mentorship continuing afterwards.",
    "metaClimate": "Format: team-based • Eligibility: women 18+ in the WACREN region • Dates to confirm",
    "btnApply": "Apply",
    "badgeReg": "Registration open",
    "titleComm": "Community of Practice launch",
    "descComm": "A 75-minute virtual session introducing WiW, the Community of Practice and the Climate Innovation Lab, with time for questions and networking.",
    "metaComm": "25 August 2026 • Virtual • Free",
    "btnRegister": "Register",
    "badge2024": "2024",
    "badge2018": "2018",
    "badgeOngoing": "Ongoing",
    "titlePython1": "Python for Weather & Climate Data Analysis",
    "descPython1": "Intensive practical sessions on Python for weather and climate data, for women researchers, recent graduates and early-career professionals. Supported by AfricaConnect3.",
    "titlePython2": "Python for Weather & Climate Data Analysis, Francophone",
    "descPython2": "A dedicated French-language edition of the climate data training, extending the programme across the region's language zones.",
    "titlePhysical": "Physical Computing with Python",
    "descPhysical": "The first WiW event: 30 women from 5 countries at the University of Lagos, followed by a ten-week online programme. Co-sponsored by Eko-Konnect, UNILAG and AfricaConnect2.",
    "titleGit": "Programming, Git and DevOps",
    "descGit": "Foundational software skills for research computing, including version control and collaborative development practice.",
    "titleIoT": "Embedded systems, sensors and IoT",
    "descIoT": "Raspberry Pi, sensors and connected devices – the skills behind environmental monitoring deployments.",
    "titleAI": "AI and open science",
    "descAI": "Emerging technologies and open research practice for women building scientific computing careers."
  }
});

Object.assign(fr, {
  ProgrammeTabs: {
    "tabOpenNow": "Ouvert maintenant",
    "tabPastWorkshops": "Ateliers passés",
    "badgeOpen": "Ouverture des candidatures",
    "titleClimate": "Laboratoire d'Innovation Climatique 2026",
    "descClimate": "Un programme d'innovation structuré renforçant la capacité des femmes à développer en collaboration des solutions numériques aux défis climatiques. Les équipes progressent de l'apprentissage et l'identification des problèmes au développement de prototypes, avec un mentorat qui se poursuit par la suite.",
    "metaClimate": "Format : en équipe • Éligibilité : femmes 18+ dans la région WACREN • Dates à confirmer",
    "btnApply": "Postuler",
    "badgeReg": "Inscriptions ouvertes",
    "titleComm": "Lancement de la Communauté de Pratique",
    "descComm": "Une session virtuelle de 75 minutes présentant WiW, la Communauté de Pratique et le Laboratoire d'Innovation Climatique, avec du temps pour les questions et le réseautage.",
    "metaComm": "25 août 2026 • Virtuel • Gratuit",
    "btnRegister": "S'inscrire",
    "badge2024": "2024",
    "badge2018": "2018",
    "badgeOngoing": "En cours",
    "titlePython1": "Python pour l'analyse des données météorologiques et climatiques",
    "descPython1": "Sessions pratiques intensives sur Python pour les données météorologiques et climatiques, destinées aux chercheuses, aux jeunes diplômées et aux professionnelles en début de carrière. Soutenu par AfricaConnect3.",
    "titlePython2": "Python pour l'analyse des données météorologiques et climatiques, Francophone",
    "descPython2": "Une édition francophone dédiée de la formation sur les données climatiques, étendant le programme aux zones linguistiques de la région.",
    "titlePhysical": "Informatique physique avec Python",
    "descPhysical": "Le premier événement WiW : 30 femmes de 5 pays à l'Université de Lagos, suivi d'un programme en ligne de dix semaines. Coconçu par Eko-Konnect, UNILAG et AfricaConnect2.",
    "titleGit": "Programmation, Git et DevOps",
    "descGit": "Compétences logicielles fondamentales pour l'informatique de recherche, y compris le contrôle de version et la pratique du développement collaboratif.",
    "titleIoT": "Systèmes embarqués, capteurs et IoT",
    "descIoT": "Raspberry Pi, capteurs et appareils connectés – les compétences derrière les déploiements de surveillance environnementale.",
    "titleAI": "IA et science ouverte",
    "descAI": "Technologies émergentes et pratiques de recherche ouverte pour les femmes construisant des carrières en informatique scientifique."
  }
});

Object.assign(pt, {
  ProgrammeTabs: {
    "tabOpenNow": "Aberto agora",
    "tabPastWorkshops": "Workshops anteriores",
    "badgeOpen": "Abertura de inscrições",
    "titleClimate": "Laboratório de Inovação Climática 2026",
    "descClimate": "Um programa estruturado de inovação fortalecendo a capacidade das mulheres de desenvolver colaborativamente soluções digitais para os desafios climáticos. As equipes progridem do aprendizado e identificação de problemas até o desenvolvimento de protótipos, com a mentoria continuando depois.",
    "metaClimate": "Formato: baseado em equipe • Elegibilidade: mulheres 18+ na região WACREN • Datas a confirmar",
    "btnApply": "Aplicar",
    "badgeReg": "Inscrições abertas",
    "titleComm": "Lançamento da Comunidade de Prática",
    "descComm": "Uma sessão virtual de 75 minutos apresentando a WiW, a Comunidade de Prática e o Laboratório de Inovação Climática, com tempo para perguntas e networking.",
    "metaComm": "25 de agosto de 2026 • Virtual • Grátis",
    "btnRegister": "Inscrever-se",
    "badge2024": "2024",
    "badge2018": "2018",
    "badgeOngoing": "Em andamento",
    "titlePython1": "Python para Análise de Dados Meteorológicos e Climáticos",
    "descPython1": "Sessões práticas intensivas de Python para dados meteorológicos e climáticos, para mulheres pesquisadoras, recém-formadas e profissionais em início de carreira. Apoiado pelo AfricaConnect3.",
    "titlePython2": "Python para Análise de Dados Meteorológicos e Climáticos, Francófono",
    "descPython2": "Uma edição dedicada em língua francesa do treinamento em dados climáticos, estendendo o programa às zonas linguísticas da região.",
    "titlePhysical": "Computação Física com Python",
    "descPhysical": "O primeiro evento WiW: 30 mulheres de 5 países na Universidade de Lagos, seguido de um programa online de dez semanas. Co-patrocinado por Eko-Konnect, UNILAG e AfricaConnect2.",
    "titleGit": "Programação, Git e DevOps",
    "descGit": "Habilidades fundamentais de software para computação de pesquisa, incluindo controle de versão e práticas de desenvolvimento colaborativo.",
    "titleIoT": "Sistemas embarcados, sensores e IoT",
    "descIoT": "Raspberry Pi, sensores e dispositivos conectados – as habilidades por trás das implantações de monitoramento ambiental.",
    "titleAI": "IA e ciência aberta",
    "descAI": "Tecnologias emergentes e práticas de pesquisa aberta para mulheres construindo carreiras em computação científica."
  }
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
