const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');
const ts = require('typescript');

async function main() {
  console.log("Starting TOC translation...");
  const srcCode = fs.readFileSync('src/lib/blog-data.ts', 'utf8');
  const jsCode = ts.transpileModule(srcCode, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  fs.writeFileSync('temp-blog-data.js', jsCode);
  const { POSTS } = require('./temp-blog-data.js');

  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  for (let i = 0; i < POSTS.length; i++) {
    const post = POSTS[i];
    const slug = post.slug;
    console.log(`Translating TOC for post ${i+1}/${POSTS.length}: ${slug}`);
    
    en.Blog[slug].toc = {};
    fr.Blog[slug].toc = {};
    pt.Blog[slug].toc = {};

    for (let j = 0; j < post.toc.length; j++) {
      const item = post.toc[j];
      const id = item.id;
      const title = item.title;

      en.Blog[slug].toc[id] = title;
      
      try {
        const frTitle = (await translate(title, { to: 'fr' })).text;
        fr.Blog[slug].toc[id] = frTitle;
      } catch (e) {
        fr.Blog[slug].toc[id] = title;
      }

      try {
        const ptTitle = (await translate(title, { to: 'pt' })).text;
        pt.Blog[slug].toc[id] = ptTitle;
      } catch (e) {
        pt.Blog[slug].toc[id] = title;
      }
    }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("TOC translation complete!");
}

main();
