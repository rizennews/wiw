const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const networkStrings = {
    heroTitle: "Join the Women-in-WACREN Network",
    description: "Request to be a part of the WiW Network to connect with fellow women in STEM and be added to our Google Group.",
    nameLabel: "Your name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email",
    emailPlaceholder: "jane@example.com",
    institutionLabel: "Institution",
    institutionPlaceholder: "University / Organization",
    submitButton: "Submit Request",
    submittingButton: "Submitting...",
    successMessage: "Request submitted successfully. We will be in touch.",
    errorMessage: "Something went wrong."
  };

  en.NetworkPage = networkStrings;
  fr.NetworkPage = {};
  pt.NetworkPage = {};

  console.log("Translating NetworkPage strings...");
  for (const [key, value] of Object.entries(networkStrings)) {
    try { fr.NetworkPage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.NetworkPage[key] = value; }
    try { pt.NetworkPage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.NetworkPage[key] = value; }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
