const fs = require('fs');
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

Object.assign(en, {
  TestimonialMarquee: {
    t1_quoteStart: "The WiW initiative not only ",
    t1_highlight: "built my capacity in quantitative analysis",
    t1_quoteEnd: " using Python but was also very inspiring - to have women who have accomplished great feats in the same room with you, teaching and sharing their experiences with you, is priceless!",
    t2_quoteStart: "Amazing experience \u2026 We set up a weather station. Despite the challenges, we configured the raspberry pi, ",
    t2_highlight: "got the wind speed of our anemometer working",
    t2_quoteEnd: ".",
    t3_quoteStart: "Before joining the WiW initiative, I struggled to find female mentors in my field. Through the Community of Practice, I have not only found mentors but also ",
    t3_highlight: "built lifelong friendships",
    t3_quoteEnd: " that propel my career forward.",
    t4_quoteStart: "The technical clinics alone provided insights that helped our institution ",
    t4_highlight: "secure critical funding",
    t4_quoteEnd: " for the year.",
    t5_quoteStart: "Finding mentors who look like me and understand the context has been ",
    t5_highlight: "a total game changer",
    t5_quoteEnd: " for my career trajectory."
  }
});

Object.assign(fr, {
  TestimonialMarquee: {
    t1_quoteStart: "L'initiative WiW n'a pas seulement ",
    t1_highlight: "renforcé mes capacités en analyse quantitative",
    t1_quoteEnd: " avec Python, mais a aussi été très inspirante - avoir des femmes qui ont accompli de grandes choses dans la même pièce que vous, enseignant et partageant leurs expériences, ça n'a pas de prix !",
    t2_quoteStart: "Expérience incroyable... Nous avons installé une station météorologique. Malgré les défis, nous avons configuré le Raspberry Pi, ",
    t2_highlight: "fait fonctionner la vitesse du vent de notre anémomètre",
    t2_quoteEnd: ".",
    t3_quoteStart: "Avant de rejoindre l'initiative WiW, j'avais du mal à trouver des mentors féminins dans mon domaine. Grâce à la Communauté de Pratique, je n'ai pas seulement trouvé des mentors, j'ai aussi ",
    t3_highlight: "noué des amitiés durables",
    t3_quoteEnd: " qui propulsent ma carrière.",
    t4_quoteStart: "Les cliniques techniques à elles seules ont fourni des informations qui ont aidé notre institution à ",
    t4_highlight: "sécuriser un financement essentiel",
    t4_quoteEnd: " pour l'année.",
    t5_quoteStart: "Trouver des mentors qui me ressemblent et qui comprennent le contexte a été ",
    t5_highlight: "un véritable tournant",
    t5_quoteEnd: " pour ma trajectoire professionnelle."
  }
});

Object.assign(pt, {
  TestimonialMarquee: {
    t1_quoteStart: "A iniciativa WiW não apenas ",
    t1_highlight: "desenvolveu minha capacidade em análise quantitativa",
    t1_quoteEnd: " usando Python, mas também foi muito inspiradora - ter mulheres que realizaram grandes feitos na mesma sala que você, ensinando e compartilhando suas experiências com você, não tem preço!",
    t2_quoteStart: "Experiência incrível... Montamos uma estação meteorológica. Apesar dos desafios, configuramos o Raspberry Pi, ",
    t2_highlight: "fizemos a velocidade do vento do nosso anemômetro funcionar",
    t2_quoteEnd: ".",
    t3_quoteStart: "Antes de me juntar à iniciativa WiW, eu lutava para encontrar mentoras na minha área. Através da Comunidade de Prática, não apenas encontrei mentoras, mas também ",
    t3_highlight: "construí amizades para a vida toda",
    t3_quoteEnd: " que impulsionam minha carreira.",
    t4_quoteStart: "As clínicas técnicas sozinhas forneceram insights que ajudaram nossa instituição a ",
    t4_highlight: "garantir financiamento crítico",
    t4_quoteEnd: " para o ano.",
    t5_quoteStart: "Encontrar mentoras que se parecem comigo e entendem o contexto tem sido ",
    t5_highlight: "um verdadeiro divisor de águas",
    t5_quoteEnd: " para a minha trajetória de carreira."
  }
});

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
