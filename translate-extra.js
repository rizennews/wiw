const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const libraryStrings = {
    allDocuments: "All Documents",
    searchResultsFor: "Search results for",
    lastModified: "Last Modified",
    noDocsFound: "No documents found",
    noDocsMatching: "We couldn't find any documents matching",
    folderEmpty: "This folder is empty",
    noDocsInFolder: "There are no documents in this folder yet."
  };

  Object.assign(en.DocumentLibrary, libraryStrings);

  console.log("Translating extra library strings...");
  for (const [key, value] of Object.entries(libraryStrings)) {
    try { fr.DocumentLibrary[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.DocumentLibrary[key] = value; }
    try { pt.DocumentLibrary[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.DocumentLibrary[key] = value; }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation extra complete!");
}

main();
