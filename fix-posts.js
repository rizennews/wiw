const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

en.Home.posts = {
  "wiw-webinar-mentorship-sponsorship-networks": {
    "title": "Mentorship, Sponsorship and Networks: What Actually Move Women Forward in STEM?",
    "excerpt": "This WiW webinar explores the practical differences between mentorship, sponsorship and networking — and how each can contribute to the growth of women in STEM."
  },
  "wiw-call-for-facilitators-2026": {
    "title": "Women-In-WACREN Call for Facilitators",
    "excerpt": "Women-in-WACREN is seeking volunteer facilitators for the Climate Innovation Lab 2026 to guide multidisciplinary teams in building digital climate solutions."
  },
  "wiw-call-for-mentors-2026": {
    "title": "Women-In-WACREN Call for Mentors",
    "excerpt": "Women-in-WACREN is looking for mentors (men & women) to volunteer to support teams in the Climate Innovation Lab 2026 as they build digital solutions to climate challenges."
  }
};

fr.Home.posts = {
  "wiw-webinar-mentorship-sponsorship-networks": {
    "title": "Mentorat, parrainage et réseaux : qu'est-ce qui fait vraiment avancer les femmes dans les STEM ?",
    "excerpt": "Ce webinaire WiW explore les différences pratiques entre le mentorat, le parrainage et le réseautage — et comment chacun peut contribuer à la croissance des femmes dans les STEM."
  },
  "wiw-call-for-facilitators-2026": {
    "title": "Women-In-WACREN Appel aux facilitateurs",
    "excerpt": "Women-in-WACREN recherche des facilitateurs bénévoles pour le Laboratoire d'Innovation Climatique 2026 afin de guider les équipes multidisciplinaires dans la création de solutions climatiques numériques."
  },
  "wiw-call-for-mentors-2026": {
    "title": "Women-In-WACREN Appel aux mentors",
    "excerpt": "Women-in-WACREN recherche des mentors (hommes et femmes) bénévoles pour soutenir les équipes du Laboratoire d'Innovation Climatique 2026 dans la création de solutions numériques aux défis climatiques."
  }
};

pt.Home.posts = {
  "wiw-webinar-mentorship-sponsorship-networks": {
    "title": "Mentoria, Patrocínio e Redes: O que realmente move as mulheres para frente em STEM?",
    "excerpt": "Este webinar da WiW explora as diferenças práticas entre mentoria, patrocínio e networking — e como cada um pode contribuir para o crescimento das mulheres em STEM."
  },
  "wiw-call-for-facilitators-2026": {
    "title": "Women-In-WACREN Chamada para Facilitadores",
    "excerpt": "A Women-in-WACREN busca facilitadores voluntários para o Laboratório de Inovação Climática 2026 para orientar equipes multidisciplinares na construção de soluções climáticas digitais."
  },
  "wiw-call-for-mentors-2026": {
    "title": "Women-In-WACREN Chamada para Mentores",
    "excerpt": "A Women-in-WACREN procura mentores (homens e mulheres) voluntários para apoiar as equipes no Laboratório de Inovação Climática 2026 enquanto constroem soluções digitais para desafios climáticos."
  }
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
