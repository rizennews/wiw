const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('messages/fr.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('messages/pt.json', 'utf8'));

en.ImpactPage.test1 = "&ldquo;The WiW initiative not only <mark>built my capacity in quantitative analysis</mark> using Python but was also very inspiring - to have women who have accomplished great feats in the same room with you, teaching and sharing their experiences with you, is priceless!&rdquo;";
en.ImpactPage.test2 = "&ldquo;Amazing experience &hellip; We set up a weather station. Despite the challenges, we configured the raspberry pi, <mark>got the wind speed of our anemometer working</mark>.&rdquo;";
en.ImpactPage.test3 = "&ldquo;This is a third placeholder. It shows how the layout looks when filled out completely. It proves that the programme is <mark>highly effective and scalable</mark>.&rdquo;";
en.ImpactPage.test4 = "&ldquo;Fourth placeholder. The community is incredibly supportive. I was able to <mark>expand my network</mark> across multiple borders effortlessly.&rdquo;";
en.ImpactPage.test5 = "&ldquo;Fifth placeholder. Finding mentors who look like me and understand the context has been <mark>a total game changer</mark> for my career trajectory.&rdquo;";
en.ImpactPage.test6 = "&ldquo;Sixth and final placeholder. The technical clinics alone provided insights that helped our institution <mark>secure critical funding</mark> for the year.&rdquo;";

fr.ImpactPage.test1 = "&ldquo;L'initiative WiW a non seulement <mark>renforcé mes capacités en analyse quantitative</mark> à l'aide de Python, mais a également été très inspirante. Avoir des femmes qui ont accompli de grandes choses dans la même pièce que vous, qui vous enseignent et partagent leurs expériences avec vous, n'a pas de prix !&rdquo;";
fr.ImpactPage.test2 = "&ldquo;Expérience incroyable &hellip; Nous avons installé une station météorologique. Malgré les défis, nous avons configuré le raspberry pi, <mark>fait fonctionner la vitesse du vent de notre anémomètre</mark>.&rdquo;";
fr.ImpactPage.test3 = "&ldquo;Ceci est un troisième espace réservé. Il montre à quoi ressemble la mise en page lorsqu'elle est entièrement remplie. Il prouve que le programme est <mark>très efficace et évolutif</mark>.&rdquo;";
fr.ImpactPage.test4 = "&ldquo;Quatrième espace réservé. La communauté est incroyablement solidaire. J'ai pu <mark>élargir mon réseau</mark> à travers de multiples frontières sans effort.&rdquo;";
fr.ImpactPage.test5 = "&ldquo;Cinquième espace réservé. Trouver des mentors qui me ressemblent et comprennent le contexte a été <mark>un véritable tournant</mark> pour ma trajectoire professionnelle.&rdquo;";
fr.ImpactPage.test6 = "&ldquo;Sixième et dernier espace réservé. Les cliniques techniques ont à elles seules fourni des informations qui ont aidé notre institution à <mark>obtenir un financement essentiel</mark> pour l'année.&rdquo;";

pt.ImpactPage.test1 = "&ldquo;A iniciativa WiW não apenas <mark>desenvolveu minha capacidade em análise quantitativa</mark> usando Python, mas também foi muito inspiradora - ter mulheres que realizaram grandes feitos na mesma sala que você, ensinando e compartilhando suas experiências com você, não tem preço!&rdquo;";
pt.ImpactPage.test2 = "&ldquo;Experiência incrível &hellip; Montamos uma estação meteorológica. Apesar dos desafios, configuramos o raspberry pi, <mark>fizemos a velocidade do vento do nosso anemômetro funcionar</mark>.&rdquo;";
pt.ImpactPage.test3 = "&ldquo;Este é um terceiro espaço reservado. Mostra como o layout fica quando totalmente preenchido. Isso prova que o programa é <mark>altamente eficaz e escalável</mark>.&rdquo;";
pt.ImpactPage.test4 = "&ldquo;Quarto espaço reservado. A comunidade é incrivelmente solidária. Consegui <mark>expandir minha rede</mark> em várias fronteiras sem esforço.&rdquo;";
pt.ImpactPage.test5 = "&ldquo;Quinto espaço reservado. Encontrar mentores que se parecem comigo e entendem o contexto foi <mark>um divisor de águas</mark> para a trajetória da minha carreira.&rdquo;";
pt.ImpactPage.test6 = "&ldquo;Sexto e último espaço reservado. Só as clínicas técnicas forneceram percepções que ajudaram nossa instituição a <mark>garantir financiamento crítico</mark> para o ano.&rdquo;";

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('messages/pt.json', JSON.stringify(pt, null, 2));
