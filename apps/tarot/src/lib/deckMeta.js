export const suitMeta = {
  cups: {
    name: "Cups",
    element: "Water",
    theme: "emotions, love, relationships, healing and intuition",
    shadow: "attachment, emotional confusion, idealization or emotional dependency"
  },
  swords: {
    name: "Swords",
    element: "Air",
    theme: "mind, truth, communication, decisions and clarity",
    shadow: "fear, mental conflict, overthinking or harsh words"
  },
  wands: {
    name: "Wands",
    element: "Fire",
    theme: "courage, action, passion, energy and initiative",
    shadow: "rush, impulsiveness, ego, exhaustion or lack of direction"
  },
  pentacles: {
    name: "Pentacles",
    element: "Earth",
    theme: "money, body, work, stability and concrete resources",
    shadow: "stagnation, fear of lack, material attachment or rigidity"
  }
};

export function getCardArcana(card) {
  if (card?.arcana) return card.arcana;
  return card?.suit ? "minor" : "major";
}

export function getSuitMeta(cardOrSuit) {
  const suit = typeof cardOrSuit === "string" ? cardOrSuit : cardOrSuit?.suit;

  return suitMeta[suit] || {
    name: "Major Arcana",
    element: "Spirit",
    theme: "major lessons, transformation and inner direction",
    shadow: "resistance, fear or unconscious patterns"
  };
}

export function getCardElement(card) {
  if (card?.element) return card.element;
  return getSuitMeta(card).element;
}

export function getCardLifeArea(card) {
  if (card?.lifeArea) return card.lifeArea;
  return getSuitMeta(card).theme;
}

export function getCardTheme(card) {
  return getSuitMeta(card).theme;
}

export function getCardShadow(card) {
  return getSuitMeta(card).shadow;
}

export function getMajorMeta(card) {
  return {
    stage: "transformation",
    energy: "awareness",
    gift: "clarity, insight and a deeper understanding of the situation.",
    shadow: "resistance, avoidance or unconscious patterns.",
    lesson: "the card asks for awareness, maturity and conscious choice."
  };
}

export function getCardStage(card) {
  return getMajorMeta(card).stage;
}

export function getCardEnergy(card) {
  return getMajorMeta(card).energy;
}

export function getCardGift(card) {
  if (card?.affirmation) return card.affirmation;
  return getMajorMeta(card).gift;
}

export function getCardLesson(card) {
  if (card?.reflection) return card.reflection;
  return getMajorMeta(card).lesson;
}