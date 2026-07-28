export const cardBack = "../assets/tarot/cards/CardBacks.webp";

const majorCards = [
  {
    id: 0,
    name: "The Fool",
    image: "../assets/tarot/cards/00-TheFool.webp",
    keywords: ["new beginning", "trust", "freedom"],
    reversedKeywords: ["recklessness", "delay", "naivety"],
    upright: "The Fool invites you to begin with openness, curiosity and trust. A new path is appearing, even if you cannot see every step yet.",
    reversed: "The Fool reversed warns against rushing without awareness. Pause, check the risks and make sure freedom is not becoming avoidance.",
    affirmation: "I trust the next step while staying aware and grounded.",
    reflection: "Where am I being invited to begin again?"
  },
  {
    id: 1,
    name: "The Magician",
    image: "../assets/tarot/cards/01-TheMagician.webp",
    keywords: ["manifestation", "focus", "power"],
    reversedKeywords: ["scattered energy", "manipulation", "blocked will"],
    upright: "The Magician reminds you that you already have tools, skills and energy available. Focus your intention and turn potential into action.",
    reversed: "The Magician reversed shows scattered power or unclear intention. Stop wasting energy and choose one clear direction.",
    affirmation: "I use my energy with focus, clarity and purpose.",
    reflection: "What resource am I underusing right now?"
  },
  {
    id: 2,
    name: "The High Priestess",
    image: "../assets/tarot/cards/02-TheHighPriestess.webp",
    keywords: ["intuition", "mystery", "inner knowing"],
    reversedKeywords: ["confusion", "secrets", "ignored intuition"],
    upright: "The High Priestess asks you to listen beneath the surface. Not everything needs to be forced, explained or exposed immediately.",
    reversed: "The High Priestess reversed suggests that you may be ignoring your intuition or hiding from a truth you already sense.",
    affirmation: "I trust the wisdom that speaks quietly within me.",
    reflection: "What do I already know, but keep avoiding?"
  },
  {
    id: 3,
    name: "The Empress",
    image: "../assets/tarot/cards/03-TheEmpress.webp",
    keywords: ["abundance", "creation", "nurturing"],
    reversedKeywords: ["overgiving", "stagnation", "lack of care"],
    upright: "The Empress brings growth, beauty, creativity and nourishment. What you care for consistently can now begin to flourish.",
    reversed: "The Empress reversed points to neglect, overgiving or blocked creativity. Your energy needs care before it can create.",
    affirmation: "I nourish what I want to grow.",
    reflection: "What needs more care, patience or beauty in my life?"
  },
  {
    id: 4,
    name: "The Emperor",
    image: "../assets/tarot/cards/04-TheEmperor.webp",
    keywords: ["structure", "authority", "stability"],
    reversedKeywords: ["control", "rigidity", "weak boundaries"],
    upright: "The Emperor asks for structure, discipline and clear leadership. Stability is built through decisions, boundaries and responsibility.",
    reversed: "The Emperor reversed warns against control, rigidity or lack of structure. Power must be used with maturity, not fear.",
    affirmation: "I create stability through clear and mature choices.",
    reflection: "Where do I need stronger structure or boundaries?"
  },
  {
    id: 5,
    name: "The Hierophant",
    image: "../assets/tarot/cards/05-TheHierophant.webp",
    keywords: ["tradition", "teaching", "spiritual guidance"],
    reversedKeywords: ["rebellion", "dogma", "limited beliefs"],
    upright: "The Hierophant points to learning, guidance, tradition and spiritual structure. Wisdom may come through a teacher, system or practice.",
    reversed: "The Hierophant reversed asks you to question inherited beliefs. Not every rule is truth.",
    affirmation: "I learn deeply while staying connected to my own truth.",
    reflection: "Which belief am I ready to question or refine?"
  },
  {
    id: 6,
    name: "The Lovers",
    image: "../assets/tarot/cards/06-TheLovers.webp",
    keywords: ["choice", "union", "alignment"],
    reversedKeywords: ["misalignment", "indecision", "dependency"],
    upright: "The Lovers speaks of alignment, love, values and meaningful choice. Choose what reflects your deeper truth.",
    reversed: "The Lovers reversed shows disconnection, confusion or a choice made from fear instead of alignment.",
    affirmation: "I choose what aligns with my heart and values.",
    reflection: "What choice would bring me closer to my truth?"
  },
  {
    id: 7,
    name: "The Chariot",
    image: "../assets/tarot/cards/07-TheChariot.webp",
    keywords: ["direction", "willpower", "victory"],
    reversedKeywords: ["force", "loss of control", "scattered direction"],
    upright: "The Chariot brings movement, focus and determination. Progress comes when your will and direction are aligned.",
    reversed: "The Chariot reversed warns against forcing progress or moving without inner alignment.",
    affirmation: "I move forward with discipline and direction.",
    reflection: "Where do I need to take control of my direction?"
  },
  {
    id: 8,
    name: "Strength",
    image: "../assets/tarot/cards/08-Strength.webp",
    keywords: ["courage", "compassion", "inner power"],
    reversedKeywords: ["self-doubt", "repression", "inner conflict"],
    upright: "Strength shows quiet courage, emotional mastery and compassionate power. True strength does not need to dominate.",
    reversed: "Strength reversed reveals self-doubt, suppressed emotion or fear of your own power.",
    affirmation: "My strength is calm, steady and compassionate.",
    reflection: "Where can I respond with courage instead of force?"
  },
  {
    id: 9,
    name: "The Hermit",
    image: "../assets/tarot/cards/09-TheHermit.webp",
    keywords: ["wisdom", "solitude", "inner search"],
    reversedKeywords: ["isolation", "avoidance", "loneliness"],
    upright: "The Hermit invites inner reflection, silence and spiritual insight. Step away from noise so you can hear your truth.",
    reversed: "The Hermit reversed warns against isolation, withdrawal or avoiding support.",
    affirmation: "I find wisdom in stillness and honest reflection.",
    reflection: "What can silence reveal to me now?"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: "../assets/tarot/cards/10-WheelOfFortune.webp",
    keywords: ["change", "cycle", "destiny"],
    reversedKeywords: ["resistance", "delay", "lack of control"],
    upright: "The Wheel of Fortune signals change, movement and turning cycles. Life is shifting; respond with awareness.",
    reversed: "The Wheel reversed shows resistance to change or attachment to a cycle that is ready to move.",
    affirmation: "I adapt to change and trust the turning of life.",
    reflection: "What cycle is changing in my life?"
  },
  {
    id: 11,
    name: "Justice",
    image: "../assets/tarot/cards/11-Justice.webp",
    keywords: ["truth", "fairness", "accountability"],
    reversedKeywords: ["dishonesty", "imbalance", "avoidance"],
    upright: "Justice asks for truth, balance and responsibility. Clear decisions must be based on honesty, not avoidance.",
    reversed: "Justice reversed points to imbalance, denial or refusal to take responsibility.",
    affirmation: "I choose truth, fairness and accountability.",
    reflection: "Where do I need to be more honest?"
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: "../assets/tarot/cards/12-TheHangedMan.webp",
    keywords: ["pause", "surrender", "new perspective"],
    reversedKeywords: ["stagnation", "resistance", "victimhood"],
    upright: "The Hanged Man asks you to pause and see differently. Progress may come through surrender, not force.",
    reversed: "The Hanged Man reversed shows resistance, delay or staying stuck without learning from the pause.",
    affirmation: "I allow a new perspective to transform my next step.",
    reflection: "What changes if I stop forcing the answer?"
  },
  {
    id: 13,
    name: "Death",
    image: "../assets/tarot/cards/13-Death.webp",
    keywords: ["ending", "transformation", "release"],
    reversedKeywords: ["resistance", "fear of change", "clinging"],
    upright: "Death brings transformation, release and necessary endings. Something must close so something more truthful can begin.",
    reversed: "Death reversed shows resistance to an ending that has already begun internally.",
    affirmation: "I release what is complete and make space for renewal.",
    reflection: "What am I still holding onto that is already finished?"
  },
  {
    id: 14,
    name: "Temperance",
    image: "../assets/tarot/cards/14-Temperance.webp",
    keywords: ["balance", "healing", "integration"],
    reversedKeywords: ["extremes", "impatience", "disharmony"],
    upright: "Temperance invites balance, patience and integration. Healing happens through steady adjustment.",
    reversed: "Temperance reversed warns against extremes, impatience or emotional imbalance.",
    affirmation: "I create harmony through patience and moderation.",
    reflection: "Where do I need more balance?"
  },
  {
    id: 15,
    name: "The Devil",
    image: "../assets/tarot/cards/15-TheDevil.webp",
    keywords: ["attachment", "shadow", "temptation"],
    reversedKeywords: ["release", "awareness", "breaking chains"],
    upright: "The Devil reveals attachment, temptation and unconscious patterns. What controls you must first be seen clearly.",
    reversed: "The Devil reversed shows the possibility of release. You are becoming aware of a chain you can break.",
    affirmation: "I reclaim my power from what binds me.",
    reflection: "What pattern has more power over me than it should?"
  },
  {
    id: 16,
    name: "The Tower",
    image: "../assets/tarot/cards/16-TheTower.webp",
    keywords: ["breakthrough", "collapse", "truth"],
    reversedKeywords: ["avoided change", "fear", "delayed collapse"],
    upright: "The Tower brings sudden truth and the collapse of false structures. What is not real cannot hold forever.",
    reversed: "The Tower reversed shows avoided change or resistance to a truth that is already shaking the foundation.",
    affirmation: "I allow false structures to fall so truth can stand.",
    reflection: "What truth am I trying not to face?"
  },
  {
    id: 17,
    name: "The Star",
    image: "../assets/tarot/cards/17-TheStar.webp",
    keywords: ["hope", "renewal", "guidance"],
    reversedKeywords: ["discouragement", "disconnection", "lost faith"],
    upright: "The Star brings hope, healing and gentle guidance. Trust that renewal is possible.",
    reversed: "The Star reversed shows lost faith or disconnection from inspiration. Hope must be rebuilt gently.",
    affirmation: "I allow hope and healing to return.",
    reflection: "What helps me reconnect with faith?"
  },
  {
    id: 18,
    name: "The Moon",
    image: "../assets/tarot/cards/18-TheMoon.webp",
    keywords: ["intuition", "illusion", "subconscious"],
    reversedKeywords: ["confusion clearing", "fear", "hidden truth"],
    upright: "The Moon reveals dreams, fears, intuition and uncertainty. Do not rush decisions while the path is unclear.",
    reversed: "The Moon reversed suggests confusion is beginning to clear, but fear may still distort perception.",
    affirmation: "I move gently through uncertainty and listen to my intuition.",
    reflection: "What fear might be coloring my perception?"
  },
  {
    id: 19,
    name: "The Sun",
    image: "../assets/tarot/cards/19-TheSun.webp",
    keywords: ["joy", "success", "vitality"],
    reversedKeywords: ["blocked joy", "ego", "temporary delay"],
    upright: "The Sun brings clarity, warmth, success and life force. Let yourself be seen in your truth.",
    reversed: "The Sun reversed shows blocked joy or temporary delay. Light is present, but something may be limiting your openness to it.",
    affirmation: "I welcome joy, clarity and authentic expression.",
    reflection: "Where can I allow more light into my life?"
  },
  {
    id: 20,
    name: "Judgement",
    image: "../assets/tarot/cards/20-Judgement.webp",
    keywords: ["awakening", "calling", "renewal"],
    reversedKeywords: ["self-judgment", "avoidance", "fear of change"],
    upright: "Judgement calls you to awaken, answer a deeper calling and rise into a more honest version of yourself.",
    reversed: "Judgement reversed shows fear of answering the call or being trapped in guilt and self-judgment.",
    affirmation: "I answer my inner calling with courage and honesty.",
    reflection: "What calling can I no longer ignore?"
  },
  {
    id: 21,
    name: "The World",
    image: "../assets/tarot/cards/21-TheWorld.webp",
    keywords: ["completion", "integration", "fulfillment"],
    reversedKeywords: ["unfinished cycle", "delay", "lack of closure"],
    upright: "The World marks completion, integration and fulfillment. A cycle is closing and wisdom has been earned.",
    reversed: "The World reversed shows an unfinished cycle or a lesson that still needs integration.",
    affirmation: "I honor what is complete and step forward whole.",
    reflection: "What cycle is ready to be completed?"
  }
];

const suits = {
  cups: {
    label: "Cups",
    file: "Cups",
    startId: 22,
    element: "Water",
    lifeArea: "emotions, love, relationships and intuition",
    theme: "emotional truth, connection, compassion and inner feeling"
  },
  swords: {
    label: "Swords",
    file: "Swords",
    startId: 36,
    element: "Air",
    lifeArea: "mind, communication, truth and decisions",
    theme: "thought, truth, clarity, conflict and communication"
  },
  wands: {
    label: "Wands",
    file: "Wands",
    startId: 50,
    element: "Fire",
    lifeArea: "action, courage, passion and creativity",
    theme: "energy, desire, initiative, courage and movement"
  },
  pentacles: {
    label: "Pentacles",
    file: "Pentacles",
    startId: 64,
    element: "Earth",
    lifeArea: "money, body, work and stability",
    theme: "resources, stability, health, work and material growth"
  }
};

const ranks = [
  {
    rank: "Ace",
    upright: "a new beginning, pure potential and the seed of a fresh cycle",
    reversed: "blocked potential, hesitation or a delayed beginning",
    keywords: ["beginning", "potential", "opening"],
    reversedKeywords: ["delay", "block", "hesitation"]
  },
  {
    rank: "Two",
    upright: "choice, balance, partnership or the need to hold two energies at once",
    reversed: "imbalance, avoidance or difficulty making a clear choice",
    keywords: ["choice", "balance", "partnership"],
    reversedKeywords: ["imbalance", "avoidance", "confusion"]
  },
  {
    rank: "Three",
    upright: "growth, expression, collaboration and the first visible result",
    reversed: "blocked growth, poor cooperation or scattered expression",
    keywords: ["growth", "expression", "support"],
    reversedKeywords: ["block", "disharmony", "scatter"]
  },
  {
    rank: "Four",
    upright: "stability, structure, reflection and the need to create a firm base",
    reversed: "rigidity, stagnation or resistance to emotional or practical movement",
    keywords: ["stability", "pause", "foundation"],
    reversedKeywords: ["stagnation", "rigidity", "resistance"]
  },
  {
    rank: "Five",
    upright: "challenge, tension, conflict or the lesson hidden inside discomfort",
    reversed: "release from conflict, recovery or the need to stop feeding the struggle",
    keywords: ["challenge", "tension", "lesson"],
    reversedKeywords: ["release", "recovery", "peace"]
  },
  {
    rank: "Six",
    upright: "harmony, support, healing and a movement toward greater balance",
    reversed: "disharmony, dependency or difficulty receiving support",
    keywords: ["harmony", "support", "healing"],
    reversedKeywords: ["disharmony", "dependency", "imbalance"]
  },
  {
    rank: "Seven",
    upright: "assessment, inner testing, strategy and the need to choose wisely",
    reversed: "confusion, avoidance, unrealistic thinking or lack of trust",
    keywords: ["assessment", "strategy", "discernment"],
    reversedKeywords: ["confusion", "avoidance", "illusion"]
  },
  {
    rank: "Eight",
    upright: "movement, effort, mastery or the pressure to keep progressing",
    reversed: "delay, exhaustion, resistance or effort without direction",
    keywords: ["movement", "effort", "progress"],
    reversedKeywords: ["delay", "burnout", "resistance"]
  },
  {
    rank: "Nine",
    upright: "near-completion, personal truth, resilience and the result of inner work",
    reversed: "exhaustion, insecurity or difficulty trusting the progress already made",
    keywords: ["resilience", "result", "inner work"],
    reversedKeywords: ["exhaustion", "insecurity", "doubt"]
  },
  {
    rank: "Ten",
    upright: "completion, culmination, responsibility and the full expression of the suit",
    reversed: "burden, unfinished closure or difficulty releasing a completed cycle",
    keywords: ["completion", "culmination", "responsibility"],
    reversedKeywords: ["burden", "unfinished", "release"]
  },
  {
    rank: "Page",
    upright: "curiosity, learning, messages and the beginning of a new relationship with the suit",
    reversed: "immaturity, distraction or a message that needs more honesty",
    keywords: ["learning", "message", "curiosity"],
    reversedKeywords: ["immaturity", "distraction", "delay"]
  },
  {
    rank: "Knight",
    upright: "movement, pursuit, courage and active engagement with the suit",
    reversed: "impulsiveness, inconsistency or action without enough awareness",
    keywords: ["movement", "pursuit", "drive"],
    reversedKeywords: ["impulse", "inconsistency", "rush"]
  },
  {
    rank: "Queen",
    upright: "mature inner mastery, receptivity, wisdom and emotional intelligence within the suit",
    reversed: "overextension, insecurity or difficulty holding healthy emotional boundaries",
    keywords: ["wisdom", "receptivity", "mastery"],
    reversedKeywords: ["insecurity", "overgiving", "imbalance"]
  },
  {
    rank: "King",
    upright: "leadership, maturity, responsibility and clear command of the suit’s energy",
    reversed: "control, rigidity, misuse of power or emotional distance",
    keywords: ["leadership", "maturity", "command"],
    reversedKeywords: ["control", "rigidity", "misuse"]
  }
];

function createMinorCards(suitKey, suit) {
  return ranks.map((rank, index) => {
    const number = String(index + 1).padStart(2, "0");
    const name = `${rank.rank} of ${suit.label}`;

    return {
      id: suit.startId + index,
      name,
      englishName: name,
      arcana: "minor",
      suit: suitKey,
      element: suit.element,
      lifeArea: suit.lifeArea,
      image: `../assets/tarot/cards/${suit.file}${number}.webp`,
      keywords: rank.keywords,
      reversedKeywords: rank.reversedKeywords,
      upright: `${name} brings ${rank.upright}. In the area of ${suit.theme}, this card asks you to notice what is ready to move, grow or be understood.`,
      reversed: `${name} reversed points to ${rank.reversed}. In the area of ${suit.theme}, it asks for honesty, correction and a more conscious response.`,
      affirmation: `I work with the energy of ${name} with clarity and presence.`,
      reflection: `How is the energy of ${name} showing up in my life right now?`
    };
  });
}

const minorCards = Object.entries(suits).flatMap(([suitKey, suit]) =>
  createMinorCards(suitKey, suit)
);

export const tarotDeck = [
  ...majorCards.map((card) => ({
    ...card,
    englishName: card.name,
    arcana: "major",
    element: "Spirit",
    lifeArea: "major lessons, transformation and inner direction"
  })),
  ...minorCards
];