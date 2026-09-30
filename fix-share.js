const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

en.ShareMenu = {
  "copyLink": "Copy Link",
  "copied": "Copied!",
  "shareOnX": "Share on X",
  "shareOnLinkedIn": "Share on LinkedIn",
  "shareOnFacebook": "Share on Facebook",
  "shareViaWhatsApp": "Share via WhatsApp",
  "sendViaEmail": "Send via Email"
};

fr.ShareMenu = {
  "copyLink": "Copier le lien",
  "copied": "Copié !",
  "shareOnX": "Partager sur X",
  "shareOnLinkedIn": "Partager sur LinkedIn",
  "shareOnFacebook": "Partager sur Facebook",
  "shareViaWhatsApp": "Partager via WhatsApp",
  "sendViaEmail": "Envoyer par e-mail"
};

pt.ShareMenu = {
  "copyLink": "Copiar Link",
  "copied": "Copiado!",
  "shareOnX": "Compartilhar no X",
  "shareOnLinkedIn": "Compartilhar no LinkedIn",
  "shareOnFacebook": "Compartilhar no Facebook",
  "shareViaWhatsApp": "Compartilhar via WhatsApp",
  "sendViaEmail": "Enviar por Email"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
