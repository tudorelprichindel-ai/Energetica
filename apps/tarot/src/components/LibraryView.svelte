<script>
  import { tarotDeck } from "../tarotData.js";
  import { playTapSound } from "../lib/audio.js";

  export let onClose = () => {};

  let activeFilter = "all";
  let selectedCard = null;
  let selectedZoomCard = null;
  let searchTerm = "";

  const suitNames = {
    cups: "Cups",
    swords: "Swords",
    wands: "Wands",
    pentacles: "Pentacles"
  };

  const suitElements = {
    cups: "Water",
    swords: "Air",
    wands: "Fire",
    pentacles: "Earth"
  };

  const suitLifeAreas = {
    cups: "emotions, relationships and intuition",
    swords: "mind, decisions and truth",
    wands: "action, courage and passion",
    pentacles: "money, body and stability"
  };

  const filters = [
    {
      id: "all",
      label: "All",
      count: tarotDeck.length
    },
    {
      id: "major",
      label: "Major",
      count: tarotDeck.filter((card) => card.arcana !== "minor").length
    },
    {
      id: "cups",
      label: "Cups",
      count: tarotDeck.filter((card) => card.suit === "cups").length
    },
    {
      id: "swords",
      label: "Swords",
      count: tarotDeck.filter((card) => card.suit === "swords").length
    },
    {
      id: "wands",
      label: "Wands",
      count: tarotDeck.filter((card) => card.suit === "wands").length
    },
    {
      id: "pentacles",
      label: "Pentacles",
      count: tarotDeck.filter((card) => card.suit === "pentacles").length
    }
  ];

  $: filteredByType =
    activeFilter === "all"
      ? tarotDeck
      : activeFilter === "major"
        ? tarotDeck.filter((card) => card.arcana !== "minor")
        : tarotDeck.filter((card) => card.suit === activeFilter);

  $: filteredCards = filteredByType.filter((card) => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return true;

    const searchable = [
      card.name,
      card.englishName,
      card.suit,
      card.arcana,
      card.element,
      card.lifeArea,
      card.upright,
      card.reversed,
      card.affirmation,
      card.reflection,
      ...(card.keywords || []),
      ...(card.reversedKeywords || [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });

  $: selectedFilter = filters.find((filter) => filter.id === activeFilter) || filters[0];

  function setFilter(filterId) {
    playTapSound();
    activeFilter = filterId;
  }

  function clearSearch() {
    playTapSound();
    searchTerm = "";
  }

  function openCard(card) {
    playTapSound();
    selectedCard = card;
    selectedZoomCard = null;
  }

  function closeCard() {
    playTapSound();
    selectedCard = null;
    selectedZoomCard = null;
  }

  function openZoomCard(card) {
    playTapSound();
    selectedZoomCard = card;
  }

  function closeZoomCard() {
    playTapSound();
    selectedZoomCard = null;
  }

  function closeLibrary() {
    playTapSound();
    onClose();
  }

  function handleCardModalKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();

      if (selectedZoomCard) {
        closeZoomCard();
        return;
      }

      closeCard();
    }
  }

  function handleZoomKeydown(event) {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      closeZoomCard();
    }
  }

  function getCardType(card) {
    if (card.arcana === "minor") {
      return suitNames[card.suit] || "Minor Arcana";
    }

    return "Major Arcana";
  }

  function getCardElement(card) {
    if (card.element) return card.element;

    if (card.arcana !== "minor") {
      return "Spirit";
    }

    return suitElements[card.suit] || "Element";
  }

  function getLifeArea(card) {
    if (card.lifeArea) return card.lifeArea;

    if (card.arcana !== "minor") {
      return "major lessons, archetypes and transformation";
    }

    return suitLifeAreas[card.suit] || "general energy";
  }

  function getKeywords(card) {
    return card.keywords || [];
  }

  function getReversedKeywords(card) {
    return card.reversedKeywords || [];
  }

  function getGuideText(card) {
    if (card.arcana !== "minor") {
      return `${card.name} points to an important archetypal theme. It is not only a momentary energy, but a lesson that asks for awareness, maturity and conscious choice.`;
    }

    if (card.suit === "cups") {
      return "This card works with emotions, connection and the way the heart responds to the situation.";
    }

    if (card.suit === "swords") {
      return "This card works with the mind, communication, truth and the decisions that need clarity.";
    }

    if (card.suit === "wands") {
      return "This card works with willpower, energy, courage and the way you choose to act.";
    }

    if (card.suit === "pentacles") {
      return "This card works with stability, money, the body, resources and concrete reality.";
    }

    return "This card reveals an energy that needs to be observed and integrated consciously.";
  }
</script>

<section class="screen-card library-screen lux-library-screen premium-library-screen final-library-screen">
  <div class="library-top final-library-top">
    <button class="library-back-btn" on:click={closeLibrary} type="button">
      ← Today
    </button>

    <div>
      <p class="section-label">Tarot Library</p>
      <h2>Deck Guide</h2>
    </div>

    <div class="screen-badge">
      <span>✧</span>
    </div>
  </div>

  <div class="library-summary-card premium-library-summary final-library-summary">
    <div>
      <span>{tarotDeck.length}</span>
      <small>cards</small>
    </div>

    <p>
      Explore each card as a symbol, energy and practical guide. The library becomes the complete
      manual for The Power Tarot deck.
    </p>
  </div>

  <div class="library-search-box final-library-search">
    <input
      bind:value={searchTerm}
      placeholder="Search: love, money, clarity, The Star..."
      autocomplete="off"
    />

    {#if searchTerm}
      <button on:click={clearSearch} type="button" aria-label="Clear search">
        ×
      </button>
    {/if}
  </div>

  <div class="library-filter-row premium-library-filter-row final-library-filter-row" aria-label="Tarot card filters">
    {#each filters as filter}
      <button
        class:active={activeFilter === filter.id}
        on:click={() => setFilter(filter.id)}
        type="button"
      >
        <span>{filter.label}</span>
        <small>{filter.count}</small>
      </button>
    {/each}
  </div>

  <div class="library-result-line final-library-result-line">
    <span>{selectedFilter.label}</span>
    <p>{filteredCards.length} results</p>
  </div>

  {#if filteredCards.length}
    <div class="library-grid premium-library-grid final-library-grid">
      {#each filteredCards as card}
        <button class="library-card premium-library-card final-library-card" on:click={() => openCard(card)} type="button">
          <div class="library-card-image">
            <img src={card.image} alt={card.name} loading="lazy" />
          </div>

          <div class="library-card-info">
            <span>{getCardType(card)}</span>
            <strong>{card.name}</strong>
            <small>{card.englishName}</small>
          </div>
        </button>
      {/each}
    </div>
  {:else}
    <div class="library-empty-state">
      <span>✦</span>
      <h3>No cards found</h3>
      <p>Try a different keyword or change the filter.</p>
    </div>
  {/if}
</section>

{#if selectedCard}
  <div
    class="meaning-backdrop final-library-backdrop"
    role="button"
    tabindex="0"
    aria-label="Close card details"
    on:click={closeCard}
    on:keydown={handleCardModalKeydown}
  >
    <div
      class="meaning-modal lux-meaning-modal library-card-modal premium-library-modal final-library-modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button class="modal-close" on:click={closeCard} type="button">
        ×
      </button>

      <button
        class="library-modal-preview premium-library-modal-preview final-library-modal-preview"
        on:click={() => openZoomCard(selectedCard)}
        type="button"
        aria-label="Zoom card"
      >
        <img src={selectedCard.image} alt={selectedCard.name} />
        <span>Tap the card to zoom</span>
      </button>

      <div class="library-modal-content premium-library-modal-content final-library-modal-content">
        <p class="section-label">{getCardType(selectedCard)}</p>
        <h2>{selectedCard.name}</h2>
        <p class="english-name">{selectedCard.englishName}</p>

        <div class="library-meta-grid">
          <article>
            <span>Type</span>
            <strong>{getCardType(selectedCard)}</strong>
          </article>

          <article>
            <span>Element</span>
            <strong>{getCardElement(selectedCard)}</strong>
          </article>

          <article>
            <span>Area</span>
            <strong>{getLifeArea(selectedCard)}</strong>
          </article>
        </div>

        {#if getKeywords(selectedCard).length}
          <div class="keyword-row">
            {#each getKeywords(selectedCard) as keyword}
              <span>{keyword}</span>
            {/each}
          </div>
        {/if}

        <div class="library-guide-box">
          <span>Card role</span>
          <p>{getGuideText(selectedCard)}</p>
        </div>

        <div class="library-meaning-block">
          <span>Upright</span>
          <p>{selectedCard.upright}</p>
        </div>

        {#if getReversedKeywords(selectedCard).length}
          <div class="keyword-row reversed-keywords">
            {#each getReversedKeywords(selectedCard) as keyword}
              <span>{keyword}</span>
            {/each}
          </div>
        {/if}

        <div class="library-meaning-block reversed-block">
          <span>Reversed</span>
          <p>{selectedCard.reversed}</p>
        </div>

        {#if selectedCard.affirmation}
          <div class="premium-final-box card-detail-box">
            <span>Affirmation</span>
            <p>{selectedCard.affirmation}</p>
          </div>
        {/if}

        {#if selectedCard.reflection}
          <div class="premium-final-box card-detail-box">
            <span>Reflection</span>
            <p>{selectedCard.reflection}</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

{#if selectedZoomCard}
  <div
    class="library-card-zoom-backdrop"
    role="button"
    tabindex="0"
    aria-label="Close zoomed card"
    on:click={closeZoomCard}
    on:keydown={handleZoomKeydown}
  >
    <div
      class="library-card-zoom-modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button class="modal-close library-zoom-close" on:click={closeZoomCard} type="button">
        ×
      </button>

      <div class="library-zoom-image-wrap">
        <img src={selectedZoomCard.image} alt={selectedZoomCard.name} />
      </div>

      <div class="library-zoom-info">
        <p class="section-label">{getCardType(selectedZoomCard)}</p>
        <h2>{selectedZoomCard.name}</h2>
        <span>{selectedZoomCard.englishName}</span>
      </div>
    </div>
  </div>
{/if}