const sceneLink = "https://www.youtube.com/watch?v=agqca6Qo20I";

const slides = [
  {
    chapter: "Introduction",
    title: "Vendre avec confiance",
    subtitle: "Oser parler de ce qu'on apporte, simplement et avec impact",
    bg: "bg-soft.png",
    layout: "hero",
    art: "confiance",
    chips: ["atelier visio", "vente humaine", "impact"],
    note: `🎤 Exercice d'ouverture (5 min) : Quand vous pensez au mot vente, vous ressentez quoi (mot, image, sentiment)\n\nBonjour a toutes, je suis Malorie, ancienne des Maagalot, passionnee par la vente et la nego, plus encore passionnee par l humain, et aujourdhui on va parler de vente, mais surtout on va deminer en douceur vos principaux freins a la vente ou a la presentation de vos activite. \nOn va mettre de cote pour une heure cette idee de vente forcee ou de commerciaux vendeurs de voiture (que je respecte enormement par ailleurs, j ai beaucoup appris d eux cary en a des tres bons, j ai achete une voiture verte fluo/. Mais c est une autre histoire!`
  },
  {
    chapter: "Représentation",
    title: "La vente, c’est / ce n’est pas...",
    bg: "bg-wave.png",
    layout: "contrast",
    quote: `Vous ne vendez pas un produit ou un service. \nVous offrez une solution, un impact… et une expérience.`,
    cta: "Voir l’extrait Serge Benhamou",
    link: sceneLink,
    pairs: [
      ["Un échange", "un monologue"],
      ["S’adapter", "plaquer un discours tout fait"],
      ["Une mise en relation entre un besoin et une solution", "une tentative d’imposer quoique ce soit/ vendre quelque chose d’inutile"],
      ["Une rencontre / expérience humaine", "une démonstration de pouvoir/ manipulation"]
    ],
    note: `Les marchands qui vendent des rapes a legumes dans les marches.. Et que toutes les menageres regardent.. Et meme leurs maris agaces arrivent, et se laissent seduire. Pas par la rape elle meme mais par l experience,`
  },
  {
    chapter: "Freins",
    title: "Pourquoi on n'ose pas vendre ?",
    bg: "bg-empathy.png",
    layout: "questions",
    intro: "Cliquez sur chaque peur pour révéler la réalité derrière.",
    questions: [
      { q: "Peur de déranger", a: "intrusion." },
      { q: "Peur du jugement", a: "crainte d’être perçue comme incompétente." },
      { q: "Peur du rejet", a: "peur sociale profonde, validée par les neurosciences" },
      { q: "Distinguer les peurs (justifiées) de la réalité", a: `Le rejet fait partie du processus : aucune offre n’est pour tout le monde, tout le temps\nUn "non" n’est pas un rejet personnel, c’est juste un non contextuel.` }
    ],
    quote: `Votre objectif: désacraliser la vente et s’assumer en tant que créateur de valeur`,
    note: `y a t il d autres peurs associees a la vente? Resultat: on attend, on reste flou, on ne propose pas…les slides s enchainent, ou en prospecte pas, ou on relance pas ….\n\nDistinguer les peurs (naturelles) de la realite\nTraitement des objections: donner mon exemple em comite d adminstration projet sans interet, il faut le suspender (=objection)`
  },
  {
    chapter: "Déclic",
    title: "Alors que faire?",
    bg: "bg-arc.png",
    layout: "big-question",
    art: "?",
    questions: [
      { q: "Que faire quand on est pas a l aise avec la vente", a: "En quoi puis-je vous aider?" },
      { q: "Le non est-il une fin ?", a: `Le non est une etape, pas une fin (traitement des objections, permet de comprendre ou s’améliorer , etc) et peut être l occasion d un plus grand oui… ou pas!\n\n4 ans de sales, 2 ans de non récurrents. Autant d étapes vers des plus grands oui\n Non, non, non, non.. Oui!` }
    ],
    note: `Que faire quand on est pas a l aise avec la vente \nEn quoi puis-je vous aider?\n\nAdopter une posture d’alliance: je suis pas contre toi mais avec toi pour resoudre (ou pas) ton probleme.\nLe non est une etape, pas une fin (traitement des objections, permet de comprendre ou s’améliorer , etc) et peut être l occasion d un plus grand oui… ou pas!\n\n4 ans de sales, 2 ans de non récurrents. Autant d étapes vers des plus grands oui\n Non, non, non, non.. Oui!\n\nTraitement des objections: donner mon exemple em comite d adminstration projet sans interet, il faut le suspender (=objection)`
  },
  {
    chapter: "Posture",
    title: "Changer de posture",
    bg: "bg-soft.png",
    layout: "steps",
    art: "aider",
    steps: [
      "Arrêter de vendre, apporter une aide",
      "Adopter une posture d’alliance",
      "Savoir entendre un non et en tirer profit",
      "Empathie"
    ],
    note: `Changer de posture\n\nArrêter de vendre, apporter une aide\n\nAdopter une posture d’alliance\n\nSavoir entendre un non et en tirer profit\n\nEmpathie`
  },
  {
    chapter: "Posture",
    title: "Alors que faire?",
    bg: "bg-wave.png",
    layout: "questions",
    intro: "Une posture simple, assumée, et orientée aide.",
    questions: [
      { q: "Changer de posture", a: "En quoi puis-je vous aider?" },
      { q: "Arrêter de vendre", a: "apporter une aide" },
      { q: "Adopter une posture d’alliance", a: "je suis pas contre toi mais avec toi pour resoudre (ou pas) ton probleme." },
      { q: "Savoir entendre un NON", a: "et en tirer profit" },
      { q: "Prendre le OUI", a: "et clore" }
    ],
    note: `Que faire quand on est pas a l aise avec la vente \nEn quoi puis-je vous aider?\n\nAdopter une posture d’alliance: je suis pas contre toi mais avec toi pour resoudre (ou pas) ton probleme.\nLe non est une etape, pas une fin (traitement des objections, permet de comprendre ou s’améliorer , etc) et peut être l occasion d un plus grand oui… ou pas!\n\n4 ans de sales, 2 ans de non récurrents. Autant d étapes vers des plus grands oui\n Non, non, non, non.. Oui!\n\nTraitement des objections: donner mon exemple em comite d adminstration projet sans interet, il faut le suspender (=objection)`
  },
  {
    chapter: "Écoute",
    title: "Écouter avec empathie (et s’adapter)",
    bg: "bg-empathy.png",
    layout: "questions",
    intro: "Les meilleurs vendeurs ne convainquent pas. Ils écoutent pour comprendre.",
    questions: [
      { q: "Beaucoup pensent qu’il faut savoir ‘se vendre’. ", a: "Les meilleurs vendeurs ne convainquent pas. Ils écoutent pour comprendre, pas pour répondre. Et donc ils créent du lien." },
      { q: "En réalité, il faut surtout savoir...", a: "poser les bonnes questions (= rechercher la problématique ), écouter et s’adapter" },
      { q: "« Say my name »", a: "appeler, lorsqu’ applicable, les gens par leur nom" },
      { q: "Inspirez vous", a: "des personnes qui réussissent dans vos domaines" }
    ],
    note: `J’ai ete sales en israel dans une entreprise de High tech. et pendant deux ans, j ai essaye de toutes mes forces de convaincre mes interlocuteurs que mon produit etait revolutionnaire. Et j y croyais.    Veolia, j ai Presque reussit a convaincre (j etais sympa ca leur plaisait) . Changement de direction. Dej, objection: je change de sujet. On se commande 2 verres de vin, on parle de lui\n\nRaconter mon experience avec Veolia (reprise du dossier par une personne tres ferme a priori pas sympa. Resto a lens .. Et signature du contrat. 2 ans apres on est toujours en contact/ j avais vraiment envie de l ecouter plus que de lui vendre`
  },
  {
    chapter: "Persona",
    title: "Les types de personnalité",
    bg: "bg-soft.png",
    layout: "persona",
    quote: "Objectif : ancrer la posture d’écoute active, parler le langage de l’autre",
    personas: [
      ["Analytique", "rassurer avec des faits, un cadre, des preuves"],
      ["Directe", "aller à l’essentiel, proposer clairement"],
      ["Chaleureuse", "créer du lien, prendre le temps"],
      ["Visionnaire", "parler impact, transformation, désir"]
    ],
    note: `Identifier les persona et parler leur langage. Mirorring \n\nLes chaleureuses sont les plus difficiles Presque parce qu elles donnent leur confiance a tout le monde, donc a personne vraiment\n\nPrendre le temps, cest pas perdu, elles reviendront et vous recommanderont`
  },
  {
    chapter: "Clarté",
    title: "Parler de ce qu’on résout… et le formuler clairement",
    bg: "bg-arc.png",
    layout: "formula",
    lead: `On parle souvent de ce qu’on fait.\n\nMais ce qui fait acheter, c’est de comprendre ce qu’on change pour l’autre.`,
    formula: `J’aide [qui]\nà [résultat]\ngrâce à [comment].`,
    questions: [
      { q: "Pour qui?", a: "(Client idéal)" },
      { q: "Pourquoi ?", a: "(problème ou désir, quelle frustration disparait)" },
      { q: "Comment?", a: "(ce que je propose, en quoi c’est différenciant, quelles émotions je fais passer)" }
    ],
    note: `une phrase ce qu’elle fait, dans une optique non tournee vers soi (je fais, je propose) mais vers l’autre: j’aide, , dites moi ce que vous proposez\nJ’aide les CEO debordes à se concentrer sur l’essentiel en déléguant avec confiance ce qui les ralentit.`
  },
  {
    chapter: "Clarté",
    title: "Exemples de formulation",
    bg: "bg-wave.png",
    layout: "examples",
    examples: [
      "J’aide les CEO debordes à se concentrer sur l’essentiel en déléguant avec confiance ce qui les ralentit.",
      "J’aide les femmes aux cheveux crépus ou frisés à retrouver la fierté de leur texture naturelle grâce à des soins adaptés et un accueil chaleureux.",
      "Je propose des vêtements de seconde main pour enfants qui veulent courir, tomber, grandir — sans ruiner leurs parents ni la planète.",
      "Je crée des bijoux uniques pour célébrer les gens qu’on aime — à offrir ou à s’offrir.",
      "J’aide les femmes de 50 ans à poser les bases d’une santé durable — avec des bilans personnalisés, une nutrition ciblée, des compléments adaptés et une activité physique sur mesure."
    ],
    note: `Salon de coiffure afro\nTravail de clarté :Identifier les profils clients prioritaires (femmes ? mères ? ados ? hommes aussi ?)Choisir ce qu’on fait de spécial (type de coiffure ? routine capillaire ? conseil ?)\n\nVêtements de seconde main pour\nTravail de clarté :Se positionner : pratique ? engagée ? pas chère ? Trouver le bon ton (humour ? éthique ? économie ?)Préciser le canal (site ? vide-dressing ? abonnement ?)\n\nBijoux personnalisés\nTravail de clarté :Penser usage : cadeau d’anniversaire ? bijou-mémoire ? souvenir de naissance ?Clarifier ce qu’on personnalise (mot, prénom, symbole ?)Se différencier (fait main ? matériaux ? message ?)`
  },
  {
    chapter: "Closer",
    title: "Oser proposer, simplement",
    bg: "bg-empathy.png",
    layout: "questions",
    intro: "Vaincre la peur de « closer ». La maladresse vient souvent de l’improvisation.",
    questions: [
      { q: "1. Préparer son discours", a: "s'entraîner, encore et encore, devant la glace, à voix haute, devant des amis." },
      { q: "2. Enoncer clairement sa proposition", a: "de façon assumée, sans arrogance\nson offre, ses tarifs, ses conditions" },
      { q: "2. Proposer, simplement", a: "voici ce que je vous propose, vous en pensez quoi?" },
      { q: "Soyez bienveillantes envers vous-mêmes aussi", a: "chaque essai est une avancée. \nMieux vaut un essai imparfait qu’un silence parfait." }
    ],
    note: `Peur de closer donc on dillue le message, on tourne autour du pot, ou on relance pas, \n\nTester et affiner votre discours, connaissez le sur le bout des ongles\n\nLa maladresse vient souvent de l’improvisation`
  },
  {
    chapter: "Conclusion",
    title: "Conclusion",
    bg: "bg-soft.png",
    layout: "finale",
    lead: `Et surtout, soyez fières de parler de ce que vous avez créé.\n Vous êtes des porteuses de solution!`,
    quote: `Vendre, ce n’est pas imposer/ s’imposer. C’est oser dire : j’ai quelque chose qui peut vous aider.`,
    steps: [
      "Écouter avec curiosité, empathie et respect.",
      "Être claire sur ce que vous apportez.",
      "Oser proposer simplement"
    ],
    finalQuestion: "Et maintenant, quand je vous dis vente, vous ressentez quoi?",
    note: `Et maintenant, quand je vous dis vente, vous ressentez quoi?`
  }
];

let current = 0;
const stage = document.getElementById("stage");
const menu = document.getElementById("menu");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const chapterPill = document.getElementById("chapterPill");
const notesPanel = document.getElementById("notesPanel");
const notesContent = document.getElementById("notesContent");
const sidebar = document.getElementById("sidebar");

function esc(text = "") {
  return String(text).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
}
function nl(text = "") { return esc(text).replace(/\n/g, "<br>"); }

function renderMenu() {
  menu.innerHTML = slides.map((s, i) => `<button type="button" class="${i === current ? "active" : ""}" data-goto="${i}"><span>${String(i+1).padStart(2,"0")}</span><span>${esc(s.chapter)}</span></button>`).join("");
  menu.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => go(Number(btn.dataset.goto))));
}

function heroArt(word) {
  return `<div class="hero-art"><div class="gold-dot"></div><div class="big-word">${esc(word)}</div></div>`;
}

function renderSlide() {
  const s = slides[current];
  stage.style.setProperty("--slide-bg", `url('assets/${s.bg}')`);
  chapterPill.textContent = s.chapter;
  counter.textContent = `${String(current + 1).padStart(2,"0")} / ${slides.length}`;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  notesContent.textContent = s.note || "";
  document.getElementById("prevBtn").disabled = current === 0;
  document.getElementById("nextBtn").disabled = current === slides.length - 1;

  const leftBase = `<div><div class="kicker">${esc(s.chapter)}</div><h1>${esc(s.title)}</h1>${s.subtitle ? `<p class="subtitle">${esc(s.subtitle)}</p>` : ""}${s.lead ? `<p class="lead">${nl(s.lead)}</p>` : ""}${s.quote && s.layout !== "contrast" && s.layout !== "persona" ? `<div class="quote">${nl(s.quote)}</div>` : ""}</div>`;
  let right = "";

  if (s.layout === "hero") {
    right = `<div class="stack">${heroArt(s.art)}<div>${s.chips.map(c => `<span class="chip">✦ ${esc(c)}</span>`).join(" ")}</div></div>`;
  } else if (s.layout === "contrast") {
    right = `<div class="stack"><div class="contrast-grid">${s.pairs.map(p => `<div class="contrast-card"><strong>${esc(p[0])}</strong><em>≠ ${esc(p[1])}</em></div>`).join("")}</div><div class="quote">${nl(s.quote)}</div><a class="cta-link" href="${s.link}" target="_blank" rel="noopener">▶ ${esc(s.cta)}</a></div>`;
  } else if (s.layout === "questions" || s.layout === "big-question") {
    const intro = s.intro ? `<p class="lead">${esc(s.intro)}</p>` : "";
    const qhtml = `<div class="reveal-zone">${s.questions.map((q,idx) => `<button class="question-card" type="button"><h3>${esc(q.q)} <span>+</span></h3><div class="answer">${nl(q.a)}</div></button>`).join("")}</div>`;
    right = s.layout === "big-question" ? `<div class="stack">${heroArt(s.art)}${qhtml}</div>` : `<div class="stack">${intro}${qhtml}${s.quote ? `<div class="quote">${nl(s.quote)}</div>` : ""}</div>`;
  } else if (s.layout === "steps") {
    right = `<div class="stack">${heroArt(s.art)}${s.steps.map((step,i) => `<div class="chip">${i+1}. ${esc(step)}</div>`).join("")}</div>`;
  } else if (s.layout === "persona") {
    right = `<div class="stack"><div class="quote">${esc(s.quote)}</div><div class="persona-grid">${s.personas.map(p => `<div class="persona"><b>${esc(p[0])}</b><p>${esc(p[1])}</p></div>`).join("")}</div></div>`;
  } else if (s.layout === "formula") {
    right = `<div class="stack"><div class="glass formula">${nl(s.formula)}</div><div class="reveal-zone">${s.questions.map(q => `<button class="question-card" type="button"><h3>${esc(q.q)} <span>+</span></h3><div class="answer">${nl(q.a)}</div></button>`).join("")}</div></div>`;
  } else if (s.layout === "examples") {
    right = `<div class="example-list">${s.examples.map(ex => `<div class="example">${esc(ex)}</div>`).join("")}</div>`;
  } else if (s.layout === "finale") {
    right = `<div class="stack"><div class="quote">${nl(s.quote)}</div>${s.steps.map((step,i) => `<div class="chip">${i+1}. ${esc(step)}</div>`).join("")}<button class="question-card open" type="button"><h3>${esc(s.finalQuestion)} <span>✨</span></h3></button></div>`;
  }

  stage.innerHTML = `<article class="slide">${leftBase}${right}</article>`;
  stage.querySelectorAll(".question-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("open");
      const sign = card.querySelector("h3 span");
      if (sign) sign.textContent = card.classList.contains("open") ? "−" : "+";
    });
  });
  renderMenu();
}

function go(i) { current = Math.max(0, Math.min(slides.length - 1, i)); renderSlide(); }
function step(d) { go(current + d); }

document.getElementById("prevBtn").addEventListener("click", () => step(-1));
document.getElementById("nextBtn").addEventListener("click", () => step(1));
document.getElementById("notesBtn").addEventListener("click", () => notesPanel.hidden = !notesPanel.hidden);
document.getElementById("closeNotes").addEventListener("click", () => notesPanel.hidden = true);
document.getElementById("fullscreenBtn").addEventListener("click", () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());
document.getElementById("collapseBtn").addEventListener("click", () => { sidebar.classList.add("is-hidden"); document.body.classList.add("menu-collapsed"); });
document.getElementById("menuBtn").addEventListener("click", () => { sidebar.classList.toggle("is-open"); sidebar.classList.remove("is-hidden"); document.body.classList.toggle("menu-collapsed", false); });

document.addEventListener("keydown", e => {
  if (["ArrowRight","PageDown"," "].includes(e.key)) step(1);
  if (["ArrowLeft","PageUp","Backspace"].includes(e.key)) step(-1);
  if (e.key.toLowerCase() === "n") notesPanel.hidden = !notesPanel.hidden;
  if (e.key.toLowerCase() === "m") { sidebar.classList.toggle("is-hidden"); document.body.classList.toggle("menu-collapsed"); }
});

renderSlide();
