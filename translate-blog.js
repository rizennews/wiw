const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');
const ts = require('typescript');

async function main() {
  console.log("Starting translation...");
  // Read original TS file
  const srcCode = fs.readFileSync('src/lib/blog-data.ts', 'utf8');
  
  // We need to parse the file or just use the JSON approach.
  // Instead of modifying the TS file, we can write a localized version or generate JSONs.
  // Wait, if we use next-intl, we can just load the blog posts from the messages file!
  // BUT the easiest way is to modify blog-data.ts to export getLocalizedPosts(locale)
  // Let's create blog-data-fr.json and blog-data-pt.json in the messages folder.
  
  // Compile TS to JS in memory to extract POSTS safely
  const jsCode = ts.transpileModule(srcCode, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  fs.writeFileSync('temp-blog-data.js', jsCode);
  const { POSTS } = require('./temp-blog-data.js');

  const enPosts = {};
  const frPosts = {};
  const ptPosts = {};

  for (let i = 0; i < POSTS.length; i++) {
    const post = POSTS[i];
    console.log(`Translating post ${i+1}/${POSTS.length}: ${post.title}`);
    
    // Save EN
    enPosts[post.slug] = {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content
    };

    // Translate to FR
    try {
      const frTitle = (await translate(post.title, { to: 'fr' })).text;
      const frExcerpt = (await translate(post.excerpt, { to: 'fr' })).text;
      const frContent = (await translate(post.content, { to: 'fr' })).text;
      frPosts[post.slug] = { title: frTitle, excerpt: frExcerpt, content: frContent };
    } catch (e) {
      console.error("Error translating to FR:", e.message);
      frPosts[post.slug] = enPosts[post.slug];
    }

    // Translate to PT
    try {
      const ptTitle = (await translate(post.title, { to: 'pt' })).text;
      const ptExcerpt = (await translate(post.excerpt, { to: 'pt' })).text;
      const ptContent = (await translate(post.content, { to: 'pt' })).text;
      ptPosts[post.slug] = { title: ptTitle, excerpt: ptExcerpt, content: ptContent };
    } catch (e) {
      console.error("Error translating to PT:", e.message);
      ptPosts[post.slug] = enPosts[post.slug];
    }
  }

  // Load existing dictionaries
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  // Merge blogs
  en.Blog = enPosts;
  fr.Blog = frPosts;
  pt.Blog = ptPosts;

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
