const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
  const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
  const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
  const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

  const programmeStrings = {
    heroTitle: "Women-In-WACREN Network",
    title: "Hands-on, technical, and free to participants.",
    desc: "WiW runs intensive practical training in the tools women actually need for research and technical careers — with materials kept open so anyone in the region can use them."
  };

  const impactStrings = {
    heroTitle: "Impact",
    section1Title: "Connecting women, building solutions.",
    section1Desc: "The Women-In-WACREN Network is where women connect, exchange knowledge and experience, access mentorship and learning, collaborate across disciplines, and develop solutions to challenges affecting their communities — beyond any single programme.",
    impactNetworkTitle: "Networking",
    impactNetworkDesc: "Meet women working in STEM across sixteen-plus countries and three language zones.",
    impactMentorTitle: "Mentorship",
    impactMentorDesc: "Be matched with a mentor, or mentor someone earlier in their career.",
    impactPeerTitle: "Peer learning",
    impactPeerDesc: "Study groups, technical clinics and shared problem-solving between cohorts.",
    impactOppTitle: "Opportunities",
    impactOppDesc: "Early notice of calls, grants, fellowships and events across the network.",
    joinButton: "Join the Women-In-WACREN Network",
    testimonialTitle: "What participants did next.",
    test1: "The WiW initiative not only built my capacity in quantitative analysis using Python but was also very inspiring - to have women who have accomplished great feats in the same room with you, teaching and sharing their experiences with you, is priceless!",
    test1Mark: "built my capacity in quantitative analysis",
    test2: "Amazing experience ... We set up a weather station. Despite the challenges, we configured the raspberry pi, got the wind speed of our anemometer working.",
    test2Mark: "got the wind speed of our anemometer working",
    test3: "This is a third placeholder. It shows how the layout looks when filled out completely. It proves that the programme is highly effective and scalable.",
    test3Mark: "highly effective and scalable",
    test4: "Fourth placeholder. The community is incredibly supportive. I was able to expand my network across multiple borders effortlessly.",
    test4Mark: "expand my network",
    test5: "Fifth placeholder. Finding mentors who look like me and understand the context has been a total game changer for my career trajectory.",
    test5Mark: "a total game changer",
    test6: "Sixth and final placeholder. The technical clinics alone provided insights that helped our institution secure critical funding for the year.",
    test6Mark: "secure critical funding"
  };

  en.ProgrammePage = programmeStrings;
  fr.ProgrammePage = {};
  pt.ProgrammePage = {};

  en.ImpactPage = impactStrings;
  fr.ImpactPage = {};
  pt.ImpactPage = {};

  console.log("Translating ProgrammePage strings...");
  for (const [key, value] of Object.entries(programmeStrings)) {
    try { fr.ProgrammePage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.ProgrammePage[key] = value; }
    try { pt.ProgrammePage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.ProgrammePage[key] = value; }
  }

  console.log("Translating ImpactPage strings...");
  for (const [key, value] of Object.entries(impactStrings)) {
    try { fr.ImpactPage[key] = (await translate(value, { to: 'fr' })).text; } catch(e) { fr.ImpactPage[key] = value; }
    try { pt.ImpactPage[key] = (await translate(value, { to: 'pt' })).text; } catch(e) { pt.ImpactPage[key] = value; }
  }

  fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
  fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
  fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
  console.log("Translation complete!");
}

main();
