function getKeywords(card) {
  const keywords = card?.isReversed ? card?.reversedKeywords : card?.keywords;

  if (Array.isArray(keywords) && keywords.length) {
    return keywords;
  }

  return ["clarity"];
}

function getMeaning(card) {
  if (!card) return "";

  return card.isReversed
    ? card.reversed || card.upright || ""
    : card.upright || card.reversed || "";
}

function getOrientation(card) {
  return card?.isReversed ? "reversed" : "upright";
}

function getArcana(card) {
  if (card?.arcana === "minor" || card?.suit) return "minor";
  return "major";
}

function getSuitName(card) {
  const names = {
    cups: "Cups",
    swords: "Swords",
    wands: "Wands",
    pentacles: "Pentacles"
  };

  return names[card?.suit] || "Major Arcana";
}

function getElement(card) {
  const elements = {
    cups: "Water",
    swords: "Air",
    wands: "Fire",
    pentacles: "Earth"
  };

  if (card?.element) return card.element;
  if (card?.suit) return elements[card.suit] || "Element";

  return "Spirit";
}

function getLifeArea(card) {
  if (card?.lifeArea) return card.lifeArea;

  const areas = {
    cups: "emotions, love, relationships and intuition",
    swords: "mind, communication, truth and decisions",
    wands: "action, courage, energy and passion",
    pentacles: "money, body, work and stability"
  };

  return areas[card?.suit] || "major lessons, transformation and inner direction";
}

function getDominantTone(cards) {
  const reversedCount = cards.filter((card) => card.isReversed).length;

  if (reversedCount === 0) {
    return {
      title: "open energy",
      text:
        "This reading carries open energy. The cards do not point to heavy resistance, but to a direction that can be followed with awareness, clarity and presence."
    };
  }

  if (reversedCount === cards.length) {
    return {
      title: "blocked energy",
      text:
        "This reading shows blocked energy. This does not mean failure. It points to resistance, fear, delay or an inner lesson that needs to be seen before clear action can happen."
    };
  }

  return {
    title: "mixed energy",
    text:
      "This reading carries mixed energy. There is real potential, but also an area that asks for correction. The key is to notice where energy flows and where it becomes blocked."
  };
}

function getArcanaProfile(cards) {
  const majorCount = cards.filter((card) => getArcana(card) === "major").length;
  const minorCount = cards.length - majorCount;

  if (majorCount === cards.length) {
    return {
      title: "archetypal reading",
      text:
        "All cards belong to the Major Arcana. The message is deeper, symbolic and connected to an important life lesson or inner transformation."
    };
  }

  if (minorCount === cards.length) {
    return {
      title: "practical reading",
      text:
        "The reading is made of Minor Arcana cards. The focus is on daily choices, practical action, emotions, communication and real-life situations."
    };
  }

  return {
    title: "mixed reading",
    text:
      "This reading combines Major and Minor Arcana. An inner lesson is being expressed through practical situations in everyday life."
  };
}

function getDominantSuit(cards) {
  const counts = {};

  for (const card of cards) {
    if (!card.suit) continue;
    counts[card.suit] = (counts[card.suit] || 0) + 1;
  }

  const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];

  if (!dominant) {
    return {
      title: "no dominant suit",
      text:
        "The reading is led by Major Arcana energy, so the focus is on archetypes, life lessons and inner transformation rather than one practical area."
    };
  }

  const suit = dominant[0];

  return {
    title: `${getSuitName({ suit })} dominant`,
    text: `The dominant energy comes through ${getSuitName({ suit })}, connected with the element of ${getElement({ suit })}. The main theme is: ${getLifeArea({ suit })}.`
  };
}

function getCardLine(card) {
  const keyword = getKeywords(card)[0];

  return `${card.position || "Card"}: ${card.name} appears ${getOrientation(card)}. The main theme is "${keyword}". ${getMeaning(card)}`;
}

function getSpreadMessage(cards, type) {
  if (type === "one") {
    const card = cards[0];

    return `The central message comes through ${card.name}. This card concentrates the energy of the reading around the theme of "${getKeywords(card)[0]}".`;
  }

  if (cards.length < 3) {
    return cards.map(getCardLine).join(" ");
  }

  const [past, present, future] = cards;

  return `The reading forms a line between ${past.name}, ${present.name} and ${future.name}. The past is represented by ${past.name}, the present by ${present.name}, and the possible direction by ${future.name}. The movement goes from "${getKeywords(past)[0]}" toward "${getKeywords(present)[0]}", with the potential of "${getKeywords(future)[0]}".`;
}

function getDetailedMessage(cards, type) {
  if (type === "one") {
    return getCardLine(cards[0]);
  }

  return cards.map(getCardLine).join(" ");
}

function getRelationshipMessage(cards, type) {
  if (type === "one") {
    return "For a one-card reading, the important relationship is between the card message and your current state. Ask yourself where this energy is reflected in your choices, emotions or behavior today.";
  }

  if (cards.length < 3) {
    return "The cards create a symbolic sequence. Read them as a story, not as isolated messages.";
  }

  const [past, present, future] = cards;

  return `${past.name} shows what you are bringing from the past, ${present.name} shows what must be handled now, and ${future.name} shows the direction that can open through your choices.`;
}

function getPracticalAdvice(cards, type) {
  const reversedCards = cards.filter((card) => card.isReversed);

  if (type === "one") {
    const card = cards[0];

    if (card.isReversed) {
      return `Practically, do not force the situation. ${card.name} reversed asks for correction, honesty and awareness of a pattern that may block you.`;
    }

    return `Practically, use the energy of ${card.name} through one small, clear and realistic action today.`;
  }

  if (reversedCards.length >= 2) {
    return "Practically, this reading asks you to slow down. Do not push things by force. Identify the real block, repair the foundation and act only after you gain clarity.";
  }

  if (reversedCards.length === 1) {
    return `Practically, the key of this reading is ${reversedCards[0].name} reversed. This is the area that needs the most attention.`;
  }

  return "Practically, the energy is open. Choose conscious action instead of passive waiting. The result depends on the clarity with which you respond.";
}

function getGift(cards) {
  const first = cards[0];

  return first?.affirmation || "The gift of this reading is clarity, presence and the ability to see the situation without projection.";
}

function getShadow(cards) {
  const reversed = cards.find((card) => card.isReversed);

  if (reversed) {
    return `The main shadow appears through ${reversed.name}. This is where a lesson, fear or resistance needs to be observed.`;
  }

  return "The shadow to observe is the tendency to ignore small details or subtle signs that reveal where energy is not aligned.";
}

function getLesson(cards) {
  const central = cards.length === 3 ? cards[1] : cards[0];

  return central?.reflection || "The lesson of this reading is to turn awareness into concrete action.";
}

function getAffirmation(cards, type) {
  if (type === "one") {
    return cards[0]?.affirmation || "I choose to see this situation with clarity and presence.";
  }

  return cards[2]?.affirmation || "I integrate the message of this reading and choose my next step with clarity.";
}

function getReflection(cards, type) {
  if (type === "one") {
    return cards[0]?.reflection || "What is this card showing me about my current situation?";
  }

  return cards[1]?.reflection || "What do I need to understand now in order to shift the direction of this situation?";
}

export function generatePremiumInterpretation(cards = [], type = "three") {
  if (!cards.length) {
    return {
      title: "No cards selected",
      summary: "",
      dominantEnergy: "",
      gift: "",
      shadow: "",
      lesson: "",
      action: "",
      sections: [],
      affirmation: "",
      reflection: ""
    };
  }

  const tone = getDominantTone(cards);
  const arcana = getArcanaProfile(cards);
  const suit = getDominantSuit(cards);
  const action = getPracticalAdvice(cards, type);
  const affirmation = getAffirmation(cards, type);
  const reflection = getReflection(cards, type);

  const title =
    type === "one"
      ? `Central message: ${cards[0].name}`
      : `The story of the reading: ${cards.map((card) => card.name).join(" · ")}`;

  const summary =
    type === "one"
      ? `${cards[0].name} appears ${getOrientation(cards[0])} and concentrates the reading around the theme of "${getKeywords(cards[0])[0]}".`
      : `This reading describes a movement between ${cards.map((card) => card.name).join(", ")}. The general energy is ${tone.title}.`;

  return {
    title,
    summary,
    dominantEnergy: tone.title,
    gift: getGift(cards),
    shadow: getShadow(cards),
    lesson: getLesson(cards),
    action,
    sections: [
      {
        heading: "General energy",
        body: tone.text
      },
      {
        heading: "Reading profile",
        body: arcana.text
      },
      {
        heading: "Suit and element",
        body: suit.text
      },
      {
        heading: "Reading thread",
        body: getSpreadMessage(cards, type)
      },
      {
        heading: "Relationship between the cards",
        body: getRelationshipMessage(cards, type)
      },
      {
        heading: "Detailed interpretation",
        body: getDetailedMessage(cards, type)
      },
      {
        heading: "Practical message",
        body: action
      }
    ],
    affirmation,
    reflection
  };
}

export function generateJournalMessage(cards = [], type = "three") {
  const interpretation = generatePremiumInterpretation(cards, type);

  return `${interpretation.summary} ${interpretation.sections
    .map((section) => section.body)
    .join(" ")} Affirmation: ${interpretation.affirmation}`;
}