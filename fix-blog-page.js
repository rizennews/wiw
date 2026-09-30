const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

Object.assign(en, {
  BlogPage: {
    "title": "Blog & Updates",
    "description": "Read the latest news, updates, and community stories from the Women-in-WACREN network."
  }
});
Object.assign(fr, {
  BlogPage: {
    "title": "Blog et Mises à jour",
    "description": "Lisez les dernières nouvelles, mises à jour et histoires de la communauté du réseau Women-in-WACREN."
  }
});
Object.assign(pt, {
  BlogPage: {
    "title": "Blog e Atualizações",
    "description": "Leia as últimas notícias, atualizações e histórias da comunidade da rede Women-in-WACREN."
  }
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
