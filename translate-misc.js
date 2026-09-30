const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const notFoundStrings = {
    title: "Page not found",
    description: "That link isn't available. Head home to continue exploring the Women-in-WACREN network, programmes, and impact.",
    goHome: "Go home"
  };

  const activitiesStrings = {
    title: "Activities",
    h2: "Our Activities",
    p: "Details about our activities will be added here."
  };

  const documentsStrings = {
    title: "Documents",
    h2: "Resource Documents"
  };

  const documentLibraryStrings = {
    searchPlaceholder: "Search documents...",
    folders: "Folders",
    items: "items",
    home: "Home",
    files: "Files",
    name: "Name",
    dateModified: "Date Modified",
    size: "Size",
    download: "Download",
    noFiles: "No files found.",
    noFolders: "No folders found matching your search."
  };

  en.NotFoundPage = notFoundStrings;
  fr.NotFoundPage = {};
  pt.NotFoundPage = {};

  en.ActivitiesPage = activitiesStrings;
  fr.ActivitiesPage = {};
  pt.ActivitiesPage = {};

  en.DocumentsPage = documentsStrings;
  fr.DocumentsPage = {};
  pt.DocumentsPage = {};

  en.DocumentLibrary = documentLibraryStrings;
  fr.DocumentLibrary = {};
  pt.DocumentLibrary = {};

  const sections = [
    { name: 'NotFoundPage', data: notFoundStrings },
    { name: 'ActivitiesPage', data: activitiesStrings },
    { name: 'DocumentsPage', data: documentsStrings },
    { name: 'DocumentLibrary', data: documentLibraryStrings }
  ];

  for (const section of sections) {
    console.log(`Translating ${section.name} strings...`);
    for (const [key, value] of Object.entries(section.data)) {
      try { fr[section.name][key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr[section.name][key] = value; }
      try { pt[section.name][key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt[section.name][key] = value; }
    }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
