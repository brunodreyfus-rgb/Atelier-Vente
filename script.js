const sceneLink = "https://www.youtube.com/watch?v=agqca6Qo20I";
const slides = [
  { type: "cover", title: "Vendre avec confiance", subtitle: "Oser parler de ce qu'on apporte, simplement et avec impact", bg: "bg1.png", note: `🎤 Exercice d'ouverture (5 min) : Quand vous pensez au mot vente, vous ressentez quoi (mot, image, sentiment)\n\nBonjour a toutes, je suis Malorie, ancienne des Maagalot, passionnee par la vente et la nego, plus encore passionnee par l humain, et aujourdhui on va parler de vente, mais surtout on va deminer en douceur vos principaux freins a la vente ou a la presentation de vos activite. \nOn va mettre de cote pour une heure cette idee de vente forcee ou de commerciaux vendeurs de voiture (que je respecte enormement par ailleurs, j ai beaucoup appris d eux cary en a des tres bons, j ai achete une voiture verte fluo/. Mais c est une autre histoire!` },
  { title: "La vente, c’est/ ce n’est pas...", body: `Un échange ≠ un monologue\n\nS’adapter ≠ plaquer un discours tout fait\n\nUne mise en relation entre un besoin et une solution  ≠  une tentative d’imposer quoique ce soit/ vendre quelque chose d’inutile\n\nUne rencontre / expérience humaine  ≠ une démonstration de pouvoir/ manipulation`, quote: `Vous ne vendez pas un produit ou un service. \nVous offrez une solution, un impact… et une expérience.`, cta: "Voir l’extrait Serge Benhamou", link: sceneLink, bg: "bg2.png", note: `Les marchands qui vendent des rapes a legumes dans les marches.. Et que toutes les menageres regardent.. Et meme leurs maris agaces arrivent, et se laissent seduire. Pas par la rape elle meme mais par l experience,` },
  { title: "Pourquoi on n'ose pas vendre ?", body: `Par peur\nPeur de déranger:  intrusion.\nPeur du jugement: crainte d’être perçue comme incompétente.\nPeur du rejet: peur sociale profonde, validée par les neurosciences\n\nDistinguer les peurs (justifiées) de la réalité\nLe rejet fait partie du processus : aucune offre n’est pour tout le monde, tout le temps\nUn "non" n’est pas un rejet personnel, c’est juste un non contextuel.`, quote: `Votre objectif: désacraliser la vente et s’assumer en tant que créateur de valeur`, bg: "bg3.png", note: `y a t il d autres peurs associees a la vente? Resultat: on attend, on reste flou, on ne propose pas…les slides s enchainent, ou en prospecte pas, ou on relance pas ….\n\nDistinguer les peurs (naturelles) de la realite\nTraitement des objections: donner mon exemple em comite d adminstration projet sans interet, il faut le suspender (=objection)` },
  { type: "transition", title: "Alors que faire?", symbol: "?", bg: "bg4.png", note: `Que faire quand on est pas a l aise avec la vente \nEn quoi puis-je vous aider?\n\nAdopter une posture d’alliance: je suis pas contre toi mais avec toi pour resoudre (ou pas) ton probleme.\nLe non est une etape, pas une fin (traitement des objections, permet de comprendre ou s’améliorer , etc) et peut être l occasion d un plus grand oui… ou pas!\n\n4 ans de sales, 2 ans de non récurrents. Autant d étapes vers des plus grands oui\n Non, non, non, non.. Oui!\n\nTraitement des objections: donner mon exemple em comite d adminstration projet sans interet, il faut le suspender (=objection)` },
  { title: "Alors que faire?", body: `Changer de posture:   En quoi puis-je vous aider?\n\nArrêter de vendre, apporter une aide\n\nAdopter une posture d’alliance\n\nSavoir entendre un NON et en tirer profit\n\nPrendre le OUI et clore`, accent: "aider", bg: "bg1.png", note: `Que faire quand on est pas a l aise avec la vente \nEn quoi puis-je vous aider?\n\nAdopter une posture d’alliance: je suis pas contre toi mais avec toi pour resoudre (ou pas) ton probleme.\nLe non est une etape, pas une fin (traitement des objections, permet de comprendre ou s’améliorer , etc) et peut être l occasion d un plus grand oui… ou pas!\n\n4 ans de sales, 2 ans de non récurrents. Autant d étapes vers des plus grands oui\n Non, non, non, non.. Oui!\n\nTraitement des objections: donner mon exemple em comite d adminstration projet sans interet, il faut le suspender (=objection)` },
  { title: "Écouter avec empathie (et s’adapter)", body: `Inspirez vous des personnes qui réussissent dans vos domaines\n\nBeaucoup pensent qu’il faut savoir ‘se vendre’. \n\nLes meilleurs vendeurs ne convainquent pas. Ils écoutent pour comprendre, pas pour répondre. Et donc ils créent du lien.\n\nEn réalité, il faut surtout savoir poser les bonnes questions (= rechercher la problématique ), écouter et s’adapter\n\n« Say my name »: appeler, lorsqu’ applicable, les gens par leur nom`, accent: "écouter", bg: "bg2.png", note: `J’ai ete sales en israel dans une entreprise de High tech. et pendant deux ans, j ai essaye de toutes mes forces de convaincre mes interlocuteurs que mon produit etait revolutionnaire. Et j y croyais.    Veolia, j ai Presque reussit a convaincre (j etais sympa ca leur plaisait) . Changement de direction. Dej, objection: je change de sujet. On se commande 2 verres de vin, on parle de lui\n\nRaconter mon experience avec Veolia (reprise du dossier par une personne tres ferme a priori pas sympa. Resto a lens .. Et signature du contrat. 2 ans apres on est toujours en contact/ j avais vraiment envie de l ecouter plus que de lui vendre` },
  { title: "Les types de personnalité", quote: `Objectif : ancrer la posture d’écoute active, parler le langage de l’autre`, bg: "bg3.png", note: `Identifier les persona et parler leur langage. Mirorring \n\nLes chaleureuses sont les plus difficiles Presque parce qu elles donnent leur confiance a tout le monde, donc a personne vraiment\n\nPrendre le temps, cest pas perdu, elles reviendront et vous recommanderont` },
  { title: "Parler de ce qu’on résout… et le formuler clairement", body: `On parle souvent de ce qu’on fait.\n\nMais ce qui fait acheter, c’est de comprendre ce qu’on change pour l’autre.\n\nTravailler la clarté de son offre en répondant à des questions simples\nPour qui? (Client idéal)\nPourquoi ? (problème ou désir, quelle frustration disparait)\nComment? (ce que je propose, en quoi c’est différenciant, quelles émotions je fais passer)`, quote: `reformulez votre offre en commençant par “J’aide [qui] à [résultat] grâce à [comment].”`, bg: "bg4.png", note: `une phrase ce qu’elle fait, dans une optique non tournee vers soi (je fais, je propose) mais vers l’autre: j’aide, , dites moi ce que vous proposez\n\nJ’aide les CEO debordes à se concentrer sur l’essentiel en déléguant avec confiance ce qui les ralentit.\n\nSalon de coiffure afro\n“J’aide les femmes aux cheveux crépus ou frisés à retrouver la fierté de leur texture naturelle grâce à des soins adaptés et un accueil chaleureux.”\nTravail de clarté :Identifier les profils clients prioritaires (femmes ? mères ? ados ? hommes aussi ?)Choisir ce qu’on fait de spécial (type de coiffure ? routine capillaire ? conseil ?)\n\nVêtements de seconde main pour “Je propose des vêtements de seconde main pour enfants qui veulent courir, tomber, grandir — sans ruiner leurs parents ni la planète.”\nTravail de clarté :Se positionner : pratique ? engagée ? pas chère ? Trouver le bon ton (humour ? éthique ? économie ?)Préciser le canal (site ? vide-dressing ? abonnement ?)\n\n Bijoux personnalisés “Je crée des bijoux uniques pour célébrer les gens qu’on aime — à offrir ou à s’offrir.” Travail de clarté :Penser usage : cadeau d’anniversaire ? bijou-mémoire ? souvenir de naissance ?Clarifier ce qu’on personnalise (mot, prénom, symbole ?)Se différencier (fait main ? matériaux ? message ?)\n\nJ’aide les femmes de 50 ans à poser les bases d’une santé durable — avec des bilans personnalisés, une nutrition ciblée, des compléments adaptés et une activité physique sur mesure.` },
  { title: "Oser proposer, simplement", body: `Vaincre la peur de « closer » . La maladresse vient souvent de l’improvisation.\n\n1. Préparer son discours\ns'entraîner, encore et encore, devant la glace, à voix haute, devant des amis. \n\n2. Enoncer clairement sa proposition, de façon assumée, sans arrogance\nson offre, ses tarifs, ses conditions\n\n\n2. Proposer, simplement \nvoici ce que je vous propose, vous en pensez quoi?\n\n\nSoyez bienveillantes envers vous-mêmes aussi : chaque essai est une avancée. \nMieux vaut un essai imparfait qu’un silence parfait.`, accent: "oser", bg: "bg1.png", note: `Peur de closer donc on dillue le message, on tourne autour du pot, ou on relance pas, \n\nTester et affiner votre discours, connaissez le sur le bout des ongles\n\nLa maladresse vient souvent de l’improvisation` },
  { title: "Conclusion", body: `Et surtout, soyez fières de parler de ce que vous avez créé.\n Vous êtes des porteuses de solution!`, quote: `Vendre, ce n’est pas imposer/ s’imposer. C’est oser dire : j’ai quelque chose qui peut vous aider.\n\nVendre avec confiance, c’est :\nÉcouter avec curiosité, empathie et respect.\nÊtre claire sur ce que vous apportez.\nOser proposer simplement`, bg: "bg2.png", note: `Et maintenant, quand je vous dis vente, vous ressentez quoi?` }
];

let index = 0;
const stage = document.getElementById("stage");
const counter = document.getElementById("counter");
const notesText = document.getElementById("notesText");
const notesPanel = document.getElementById("notesPanel");

function lines(text = "") {
  return text.split("\n").map((line) => line.trim() === "" ? "<br>" : `<span>${line}</span>`).join("");
}

function render() {
  const slide = slides[index];
  document.body.style.setProperty("--bg", `url('assets/${slide.bg}')`);
  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${slides.length}`;
  notesText.textContent = slide.note || "";
  const progress = ((index + 1) / slides.length) * 100;
  const cta = slide.cta ? `<a class="cta" href="${slide.link}" target="_blank" rel="noopener">${slide.cta}</a>` : "";
  const accent = slide.accent ? `<div class="accent-word">${slide.accent}</div>` : "";
  const symbol = slide.symbol ? `<div class="symbol">${slide.symbol}</div>` : "";
  stage.innerHTML = `
    <article class="slide ${slide.type || ''}">
      <div class="brand">Atelier vente</div>
      <div class="content">
        <h1>${slide.title}</h1>
        ${slide.subtitle ? `<p class="subtitle">${slide.subtitle}</p>` : ""}
        ${slide.body ? `<div class="body-card">${lines(slide.body)}</div>` : ""}
        ${slide.quote ? `<div class="quote-card">${lines(slide.quote)}</div>` : ""}
        ${cta}
        ${accent}
        ${symbol}
      </div>
      <div class="progress"><span style="width:${progress}%"></span></div>
    </article>`;
}

function go(delta) {
  index = Math.max(0, Math.min(slides.length - 1, index + delta));
  render();
}

document.getElementById("prev").addEventListener("click", () => go(-1));
document.getElementById("next").addEventListener("click", () => go(1));
document.getElementById("notesBtn").addEventListener("click", () => {
  notesPanel.hidden = !notesPanel.hidden;
});
document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) go(1);
  if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) go(-1);
  if (event.key.toLowerCase() === "n") notesPanel.hidden = !notesPanel.hidden;
});

render();
