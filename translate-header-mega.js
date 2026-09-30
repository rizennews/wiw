const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

en.Header.megaMenu = {
  about: {
    journey: "Women-in-WACREN Journey",
    network: "Women-in-WACREN Network",
    impact: "Impact"
  },
  resources: {
    photos: "Photos",
    videos: "Videos"
  },
  getInvolved: {
    partnership: "Partnership and Collaboration Opportunities",
    facilitators: "Call for Facilitators",
    mentors: "Call for Mentors",
    contact: "Contact Us",
    socials: "Socials"
  }
};

fr.Header.megaMenu = {
  about: {
    journey: "Parcours Women-in-WACREN",
    network: "Réseau Women-in-WACREN",
    impact: "Impact"
  },
  resources: {
    photos: "Photos",
    videos: "Vidéos"
  },
  getInvolved: {
    partnership: "Opportunités de partenariat et de collaboration",
    facilitators: "Appel aux facilitateurs",
    mentors: "Appel aux mentors",
    contact: "Contactez-nous",
    socials: "Réseaux sociaux"
  }
};

pt.Header.megaMenu = {
  about: {
    journey: "Jornada Women-in-WACREN",
    network: "Rede Women-in-WACREN",
    impact: "Impacto"
  },
  resources: {
    photos: "Fotos",
    videos: "Vídeos"
  },
  getInvolved: {
    partnership: "Oportunidades de Parceria e Colaboração",
    facilitators: "Chamada para Facilitadores",
    mentors: "Chamada para Mentores",
    contact: "Contate-nos",
    socials: "Redes Sociais"
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
