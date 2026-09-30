const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

Object.assign(en.BlogPage, {
  "search": "Search articles...",
  "loadMore": "Load More Posts",
  "noResults": "No posts found matching your criteria.",
  "categories": {
    "All": "All",
    "Community": "Community",
    "Research": "Research",
    "News": "News",
    "Events": "Events"
  }
});
Object.assign(fr.BlogPage, {
  "search": "Rechercher des articles...",
  "loadMore": "Charger plus d'articles",
  "noResults": "Aucun article ne correspond à vos critères.",
  "categories": {
    "All": "Tous",
    "Community": "Communauté",
    "Research": "Recherche",
    "News": "Actualités",
    "Events": "Événements"
  }
});
Object.assign(pt.BlogPage, {
  "search": "Pesquisar artigos...",
  "loadMore": "Carregar mais artigos",
  "noResults": "Nenhum artigo encontrado com esses critérios.",
  "categories": {
    "All": "Todos",
    "Community": "Comunidade",
    "Research": "Pesquisa",
    "News": "Notícias",
    "Events": "Eventos"
  }
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
