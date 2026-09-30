const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const aboutStrings = {
    heroTitle: "Women-In-WACREN Journey",
    section1Title: "Why Women-in-WACREN exists.",
    section1P1: "Women remain under-represented in STEM study, research and technical careers across West and Central Africa. WiW was created in 2018 to change that from inside the region's research and education infrastructure — with training, mentorship, advocacy and now a permanent community.",
    section1P2: "WACREN is the West and Central African Research and Education Network — the regional body connecting National Research and Education Networks and their universities and research institutions. WiW is one of its flagship community programmes, which is why it can reach women through NRENs, campuses and research institutes rather than starting from scratch in each country.",
    ourFuture: "Our Future",
    visionTitle: "Vision",
    visionDesc: "A regional research and education community in which women are equally represented as engineers, researchers, innovators and leaders.",
    ourPurpose: "Our Purpose",
    missionTitle: "Mission",
    missionDesc: "To educate, equip and empower women with the skills, networks and confidence to excel in STEM careers — and to keep them connected long after the training ends.",
    whoTitle: "Who we have worked with.",
    whoDesc: "Member NRENs, universities, technical communities, funders and regional bodies."
  };

  const timelineItems = [
    {
      year: "2018",
      title: "The first workshop",
      description: 'WACREN launches its first Women-in-WACREN event, "Physical Computing with Python", at the University of Lagos Entrepreneurship and Skill Development Centre. Thirty women from five countries take part, co-sponsored by Eko-Konnect, UNILAG and AfricaConnect2, with a ten-week online continuation.'
    },
    {
      year: "2019–2023",
      title: "From workshop to programme",
      description: "Training expands into basic programming, Git and DevOps, embedded systems and sensors, IoT, AI and open science — reaching more than 2,000 young women and building partnerships with NRENs, PyLadies and technical bodies across the region."
    },
    {
      year: "2024",
      title: "Climate data, and a Francophone edition",
      description: "Python for Weather and Climate Data Analysis runs in August, supported by AfricaConnect3, followed by a dedicated Francophone workshop — extending the programme's reach across language zones."
    },
    {
      year: "2026",
      title: "A community, not just a course",
      description: "WiW establishes its Community of Practice and introduces the Climate Innovation Lab, moving from episodic training to a continuous platform for collaboration, mentorship and solution-building."
    }
  ];

  en.AboutPage = aboutStrings;
  fr.AboutPage = {};
  pt.AboutPage = {};

  en.Timeline = { title: "Our story", desc: "Eight years of delivery.", items: timelineItems };
  fr.Timeline = { items: [] };
  pt.Timeline = { items: [] };

  console.log("Translating AboutPage strings...");
  for (const [key, value] of Object.entries(aboutStrings)) {
    try {
      fr.AboutPage[key] = (await translate(value, { to: 'fr' })).text;
    } catch(e) { fr.AboutPage[key] = value; }
    try {
      pt.AboutPage[key] = (await translate(value, { to: 'pt' })).text;
    } catch(e) { pt.AboutPage[key] = value; }
  }

  console.log("Translating Timeline strings...");
  fr.Timeline.title = (await translate(en.Timeline.title, { to: 'fr' })).text;
  fr.Timeline.desc = (await translate(en.Timeline.desc, { to: 'fr' })).text;
  pt.Timeline.title = (await translate(en.Timeline.title, { to: 'pt' })).text;
  pt.Timeline.desc = (await translate(en.Timeline.desc, { to: 'pt' })).text;

  for (let i = 0; i < timelineItems.length; i++) {
    const item = timelineItems[i];
    fr.Timeline.items[i] = { year: item.year, title: "", description: "" };
    pt.Timeline.items[i] = { year: item.year, title: "", description: "" };

    try { fr.Timeline.items[i].title = (await translate(item.title, { to: 'fr' })).text; } catch(e) {}
    try { fr.Timeline.items[i].description = (await translate(item.description, { to: 'fr' })).text; } catch(e) {}

    try { pt.Timeline.items[i].title = (await translate(item.title, { to: 'pt' })).text; } catch(e) {}
    try { pt.Timeline.items[i].description = (await translate(item.description, { to: 'pt' })).text; } catch(e) {}
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
