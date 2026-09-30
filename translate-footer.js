const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const footerStrings = {
    brandDescription: "Building a regional community of women in science and technology. Managed by the West and Central African Research and Education Network (WACREN).",
    explore: "Explore",
    about: "About WiW",
    programmes: "Programmes",
    communityImpact: "Community & Impact",
    getInvolved: "Get involved",
    fundedBy: "Funded by",
    fundedText: "The Women-in-WACREN programme is supported by the European Union through the AfricaConnect project.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service"
  };

  en.Footer = footerStrings;
  fr.Footer = {};
  pt.Footer = {};

  console.log("Translating Footer strings...");
  for (const [key, value] of Object.entries(footerStrings)) {
    try { fr.Footer[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.Footer[key] = value; }
    try { pt.Footer[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.Footer[key] = value; }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
