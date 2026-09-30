const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const partnershipStrings = {
    heroTitle: "Partnership and Collaboration",
    heroDesc: "Join hands with WACREN to empower women in STEM across West and Central Africa.",
    pathwaysTitle: "Fund it, teach on it, or join it.",
    pathwaysDesc: "There are four ways into the programme. Pick the one that matches who you are.",
    card1Title: "Fund a cohort",
    card1Desc: "For donors, agencies and corporate partners.",
    card1Btn: "Partnership options",
    card2Title: "Host a workshop",
    card2Desc: "For NRENs, universities and research institutes.",
    card2Btn: "Talk to us",
    card3Title: "Mentor or train",
    card3Desc: "For women in STEM and allies with skills to share.",
    card3Btn: "Volunteer",
    card4Title: "Join as a participant",
    card4Desc: "For students, researchers and early-career professionals.",
    card4Btn: "See open calls",
    fundingTitle: "What your funding buys.",
    fundingDesc: "WACREN welcomes partnerships with regional and national RENs, women's organisations, international donors, government agencies and regional bodies to scale the programme across the region.",
    trackRecordTitle: "Track record",
    trackRecordDesc: "Eight years of continuous delivery since 2018, over 2,000 women trained, and existing co-funding relationships through the AfricaConnect programme with the European Commission.",
    deliveryCapacityTitle: "Delivery capacity",
    deliveryCapacityDesc: "Programmes run through an established regional network of NRENs and universities, with an experienced Secretariat in Accra handling coordination, finance and reporting.",
    alignmentTitle: "Alignment",
    alignmentDesc: "Contributes directly to SDG 5 on gender equality and SDG 4 on quality education, alongside regional digital and climate priorities."
  };

  const contactStrings = {
    heroTitle: "Get in touch.",
    formTitle: "Tell us which of the four routes above applies and we will point you to the right person.",
    nameLabel: "Your name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email",
    emailPlaceholder: "jane@example.com",
    roleLabel: "I am getting in touch as",
    roleSelect: "Select an option...",
    roleFunder: "A potential funder or partner",
    roleHost: "A host institution or NREN",
    roleMentor: "A mentor or trainer",
    roleParticipant: "A prospective participant",
    roleMedia: "Media",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    sendButton: "Send message",
    sendingButton: "Sending...",
    successMessage: "Message sent successfully. We will get back to you soon.",
    errorMessage: "Something went wrong.",
    officeTitle: "WACREN Secretariat",
    newsletterTitle: "Newsletter",
    newsletterDesc: "Open calls, grants and community news — a few times a year, in English, French or Portuguese.",
    emailAddressPlaceholder: "Email address",
    subscribeButton: "Subscribe"
  };

  en.PartnershipPage = partnershipStrings;
  fr.PartnershipPage = {};
  pt.PartnershipPage = {};

  en.ContactPage = contactStrings;
  fr.ContactPage = {};
  pt.ContactPage = {};

  console.log("Translating PartnershipPage strings...");
  for (const [key, value] of Object.entries(partnershipStrings)) {
    try { fr.PartnershipPage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.PartnershipPage[key] = value; }
    try { pt.PartnershipPage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.PartnershipPage[key] = value; }
  }

  console.log("Translating ContactPage strings...");
  for (const [key, value] of Object.entries(contactStrings)) {
    try { fr.ContactPage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.ContactPage[key] = value; }
    try { pt.ContactPage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.ContactPage[key] = value; }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
