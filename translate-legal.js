const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const privacyStrings = {
    title: "Privacy Policy",
    h2_1: "1. Introduction",
    p_1: "Welcome to the Women-in-WACREN website. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at",
    h2_2: "2. Information We Collect",
    p_2: "We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website or otherwise contacting us.",
    li_2_1_strong: "Name and Contact Data.",
    li_2_1: "We collect your first and last name, email address, postal address, phone number, and other similar contact data.",
    li_2_2_strong: "Credentials.",
    li_2_2: "We collect passwords, password hints, and similar security information used for authentication and account access.",
    h2_3: "3. How We Use Your Information",
    p_3: "We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
    h2_4: "4. Will Your Information Be Shared With Anyone?",
    p_4: "We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.",
    h2_5: "5. How Long Do We Keep Your Information?",
    p_5: "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).",
    lastUpdated: "Last updated: September 30, 2026"
  };

  const termsStrings = {
    title: "Terms of Use",
    h2_1: "1. Agreement to Terms",
    p_1: "These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\"you\") and Women-in-WACREN (\"we,\" \"us\" or \"our\"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.",
    h2_2: "2. Intellectual Property Rights",
    p_2: "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the \"Content\") and the trademarks, service marks, and logos contained therein (the \"Marks\") are owned or controlled by us or licensed to us.",
    h2_3: "3. User Representations",
    p_3: "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.",
    h2_4: "4. Prohibited Activities",
    p_4: "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
    h2_5: "5. Contact Us",
    p_5: "In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:",
    lastUpdated: "Last updated: September 30, 2026"
  };

  en.PrivacyPolicyPage = privacyStrings;
  fr.PrivacyPolicyPage = {};
  pt.PrivacyPolicyPage = {};

  en.TermsPage = termsStrings;
  fr.TermsPage = {};
  pt.TermsPage = {};

  console.log("Translating PrivacyPolicyPage strings...");
  for (const [key, value] of Object.entries(privacyStrings)) {
    try { fr.PrivacyPolicyPage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.PrivacyPolicyPage[key] = value; }
    try { pt.PrivacyPolicyPage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.PrivacyPolicyPage[key] = value; }
  }

  console.log("Translating TermsPage strings...");
  for (const [key, value] of Object.entries(termsStrings)) {
    try { fr.TermsPage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.TermsPage[key] = value; }
    try { pt.TermsPage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.TermsPage[key] = value; }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
