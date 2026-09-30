const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

Object.assign(en.Footer, {
  "about": "About",
  "programmes": "Programmes",
  "communityImpact": "Community & Impact",
  "getInvolved": "Get Involved"
});

Object.assign(fr.Footer, {
  "about": "À propos",
  "programmes": "Programmes",
  "communityImpact": "Communauté & Impact",
  "getInvolved": "S'impliquer"
});

Object.assign(pt.Footer, {
  "about": "Sobre",
  "programmes": "Programas",
  "communityImpact": "Comunidade & Impacto",
  "getInvolved": "Envolva-se"
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
