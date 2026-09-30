const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

en.Home = {
  heroTitle: "Women building the scientific and digital future of West and Central Africa.",
  heroDesc: "Women-In-WACREN trains, connects and funds women in STEM across the region — turning students, researchers and early-career professionals into innovators, makers and technology leaders.",
  heroCta: "Join community of practice",
  heroSecondary: "Partner with us"
};

fr.Home = {
  heroTitle: "Les femmes construisent l'avenir scientifique et numérique de l'Afrique de l'Ouest et du Centre.",
  heroDesc: "Women-In-WACREN forme, connecte et finance les femmes dans les STEM à travers la région — transformant étudiantes, chercheuses et jeunes professionnelles en innovatrices, créatrices et leaders technologiques.",
  heroCta: "Rejoindre la communauté de pratique",
  heroSecondary: "Devenez partenaire"
};

pt.Home = {
  heroTitle: "Mulheres construindo o futuro científico e digital da África Ocidental e Central.",
  heroDesc: "A Women-In-WACREN treina, conecta e financia mulheres em STEM em toda a região — transformando estudantes, pesquisadoras e profissionais em início de carreira em inovadoras, criadoras e líderes tecnológicas.",
  heroCta: "Junte-se à comunidade de prática",
  heroSecondary: "Seja nosso parceiro"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
