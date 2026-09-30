const fs = require('fs');
['en', 'fr', 'pt'].forEach(lang => {
  const path = `messages/${lang}.json`;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”').replace(/&hellip;/g, '…');
  fs.writeFileSync(path, content);
});
