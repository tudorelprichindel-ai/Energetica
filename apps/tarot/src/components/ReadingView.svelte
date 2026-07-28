<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { tarotDeck } from "../tarotData.js";
  import CardFlip from "./CardFlip.svelte";
  import { playDrawSound, playRevealSound, playTapSound } from "../lib/audio.js";
  import {
    generatePremiumInterpretation,
    generateJournalMessage
  } from "../lib/interpretationEngine.js";

  const dispatch = createEventDispatcher();

  const INTENTION_KEY = "thePowerTarotFirstIntention";

  let selectedCards = [];
  let readingType = "three";
  let question = "";
  let ritualStage = "prepare";
  let reversedAnimationReady = false;
  let selectedMeaningCard = null;
  let premiumInterpretation = null;
  let journalSaved = false;
  let ritualRunId = 0;

  const positions = {
    one: ["Your message"],
    three: ["Past", "Present", "Future"]
  };

  $: previewPositions = positions[readingType];
  $: isPrepare = ritualStage === "prepare";
  $: isShuffling = ritualStage === "shuffling";
  $: isReadyToReveal = ritualStage === "ready";
  $: isRevealing = ritualStage === "revealing";
  $: isRevealed = ritualStage === "revealed";
  $: hasSelectedCards = selectedCards.length > 0;

  onMount(() => {
    const savedIntention = localStorage.getItem(INTENTION_KEY);

    if (savedIntention && !question.trim()) {
      question = savedIntention;
    }
  });

  function createEntryId() {
    if (globalThis.crypto?.randomUUID) {
      return globalThis.crypto.randomUUID();
    }

    return `journal-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function shuffleDeck(deck) {
    return [...deck].sort(() => Math.random() - 0.5);
  }

  function prepareCards() {
    const count = readingType === "one" ? 1 : 3;
    const shuffled = shuffleDeck(tarotDeck);

    selectedCards = shuffled.slice(0, count).map((card, index) => ({
      ...card,
      position: positions[readingType][index],
      isReversed: Math.random() < 0.25,
      isVisible: false
    }));

    premiumInterpretation = generatePremiumInterpretation(selectedCards, readingType);
  }

  function startShuffle() {
    playDrawSound();

    const runId = ritualRunId + 1;
    ritualRunId = runId;

    selectedMeaningCard = null;
    premiumInterpretation = null;
    selectedCards = [];
    reversedAnimationReady = false;
    journalSaved = false;
    ritualStage = "shuffling";

    setTimeout(() => {
      if (ritualRunId !== runId) return;

      prepareCards();
      ritualStage = "ready";
    }, 1450);
  }

  function revealCards() {
    if (!selectedCards.length) return;

    playTapSound();

    const runId = ritualRunId + 1;
    ritualRunId = runId;

    ritualStage = "revealing";
    reversedAnimationReady = false;

    selectedCards = selectedCards.map((card) => ({
      ...card,
      isVisible: false
    }));

    selectedCards.forEach((_, index) => {
      setTimeout(() => {
        if (ritualRunId !== runId) return;

        selectedCards = selectedCards.map((card, cardIndex) => ({
          ...card,
          isVisible: cardIndex <= index
        }));

        if (index === selectedCards.length - 1) {
          setTimeout(() => {
            if (ritualRunId !== runId) return;

            selectedCards = selectedCards.map((card) => ({
              ...card,
              isVisible: true
            }));

            reversedAnimationReady = true;
            ritualStage = "revealed";
            playRevealSound();
            saveReadingToJournal();
          }, 950);
        }
      }, 350 + index * 650);
    });
  }

  function resetReading(playSound = true) {
    if (playSound) {
      playTapSound();
    }

    ritualRunId += 1;
    selectedCards = [];
    premiumInterpretation = null;
    ritualStage = "prepare";
    reversedAnimationReady = false;
    selectedMeaningCard = null;
    journalSaved = false;
  }

  function changeReadingType(type) {
    if (readingType === type) return;

    playTapSound();
    readingType = type;
    resetReading(false);
  }

  function getMeaning(card) {
    return card.isReversed ? card.reversed : card.upright;
  }

  function getKeywords(card) {
    const keywords = card.isReversed ? card.reversedKeywords : card.keywords;
    return keywords || [];
  }

  function getOrientation(card) {
    return card.isReversed ? "Reversed" : "Upright";
  }

  function saveReadingToJournal() {
    if (!selectedCards.length || journalSaved) return;

    const interpretation =
      premiumInterpretation || generatePremiumInterpretation(selectedCards, readingType);

    const entry = {
      id: createEntryId(),
      date: new Date().toISOString(),
      type: readingType,
      question: question.trim() || "General reading",
      cards: selectedCards.map((card) => ({
        id: card.id,
        name: card.name,
        englishName: card.englishName,
        image: card.image,
        position: card.position,
        isReversed: card.isReversed,
        upright: card.upright,
        reversed: card.reversed,
        keywords: card.keywords,
        reversedKeywords: card.reversedKeywords,
        affirmation: card.affirmation,
        reflection: card.reflection
      })),
      interpretation,
      message: generateJournalMessage(selectedCards, readingType)
    };

    journalSaved = true;
    dispatch("savejournal", entry);
  }

  function openMeaning(card) {
    if (!isRevealed) return;

    playTapSound();
    selectedMeaningCard = card;
  }

  function closeMeaning() {
    playTapSound();
    selectedMeaningCard = null;
  }

  function openGeneralMessage() {
    if (!isRevealed) return;

    playTapSound();

    if (!premiumInterpretation) {
      premiumInterpretation = generatePremiumInterpretation(selectedCards, readingType);
    }

    selectedMeaningCard = {
      general: true
    };
  }

  function handleModalKeydown(event) {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      closeMeaning();
    }
  }
</script>

<section class="screen-card reading-screen lux-reading-screen ritual-reading-screen">
  <div class="screen-top">
    <div>
      <p class="section-label">Sacred Reading</p>
      <h2>{readingType === "one" ? "Intuitive Reading" : "Past · Present · Future"}</h2>
    </div>

    <div class="screen-badge lux-reading-badge">
      <span>✦</span>
    </div>
  </div>

  <div class="lux-question-block">
    <label for="question">Your question</label>
    <input
      id="question"
      bind:value={question}
      placeholder="Write your intention or question..."
      autocomplete="off"
      disabled={isShuffling || isRevealing}
    />
  </div>

  <div class="lux-reading-controls">
    <div class="reading-options lux-reading-options">
      <button
        class:active={readingType === "one"}
        on:click={() => changeReadingType("one")}
        type="button"
        disabled={isShuffling || isRevealing}
      >
        1 card
      </button>

      <button
        class:active={readingType === "three"}
        on:click={() => changeReadingType("three")}
        type="button"
        disabled={isShuffling || isRevealing}
      >
        3 cards
      </button>
    </div>

    {#if isPrepare}
      <button class="primary-btn lux-draw-btn" on:click={startShuffle} type="button">
        Shuffle
      </button>
    {:else if isShuffling}
      <button class="primary-btn lux-draw-btn" type="button" disabled>
        Shuffling
      </button>
    {:else if isReadyToReveal}
      <button class="primary-btn lux-draw-btn" on:click={revealCards} type="button">
        Reveal
      </button>
    {:else if isRevealing}
      <button class="primary-btn lux-draw-btn" type="button" disabled>
        Revealing
      </button>
    {:else}
      <button class="primary-btn lux-draw-btn" on:click={() => resetReading(true)} type="button">
        Reset
      </button>
    {/if}
  </div>

  <div class="ritual-status">
    {#if isPrepare}
      <span>1</span>
      <p>Choose your spread, focus on your question and shuffle the deck.</p>
    {:else if isShuffling}
      <span>2</span>
      <p>The deck is shuffling. Hold your intention in mind.</p>
    {:else if isReadyToReveal}
      <span>3</span>
      <p>The cards have been chosen. Press Reveal.</p>
    {:else if isRevealing}
      <span>4</span>
      <p>The cards are turning over one by one.</p>
    {:else}
      <span>✦</span>
      <p>The reading is complete. Open each card or view the full interpretation.</p>
    {/if}
  </div>

  <div
    class:one-card-layout={readingType === "one"}
    class:is-drawn={hasSelectedCards}
    class:is-shuffling={isShuffling}
    class:is-ready={isReadyToReveal}
    class:is-revealing={isRevealing}
    class:is-complete={isRevealed}
    class="lux-reading-stage ritual-reading-stage"
  >
    <div class="lux-spread-aura"></div>
    <div class="lux-spread-line"></div>

    {#if hasSelectedCards}
      {#each selectedCards as card, index}
        <button
          class="lux-reading-card ritual-card"
          class:card-left={readingType === "three" && index === 0}
          class:card-center={readingType === "three" && index === 1}
          class:card-right={readingType === "three" && index === 2}
          class:card-visible={card.isVisible}
          on:click={() => openMeaning(card)}
          type="button"
          disabled={!isRevealed}
        >
          <span class="lux-card-position">{card.position}</span>

          <div class="lux-card-frame">
            <CardFlip
              {card}
              revealed={card.isVisible}
              reversedAnimationReady={reversedAnimationReady && card.isVisible}
            />
          </div>

          {#if card.isVisible}
            <strong>{card.name}</strong>

            <small class:reversed={card.isReversed}>
              {getOrientation(card)}
            </small>
          {:else}
            <strong>Chosen card</strong>
            <small>Hidden</small>
          {/if}
        </button>
      {/each}
    {:else}
      {#each previewPositions as position, index}
        <div
          class="lux-reading-card ritual-card preview-reading-card"
          class:card-left={readingType === "three" && index === 0}
          class:card-center={readingType === "three" && index === 1}
          class:card-right={readingType === "three" && index === 2}
        >
          <span class="lux-card-position">{position}</span>

          <div class="lux-card-frame">
            <div class="flip-card clean-flip-card preview-card-back">
              <div class="flip-inner clean-flip-inner">
                <div class="flip-face flip-back clean-card-back">
                  <img src="../assets/tarot/cards/CardBacks.webp" alt="Tarot card back" />
                </div>
              </div>
            </div>
          </div>

          <strong>Hidden card</strong>
          <small>Ready</small>
        </div>
      {/each}
    {/if}
  </div>

  {#if isRevealed}
    <button class="general-message-btn lux-general-message-btn" on:click={openGeneralMessage} type="button">
      View full interpretation
    </button>
  {/if}
</section>

{#if selectedMeaningCard}
  <div
    class="meaning-backdrop"
    role="button"
    tabindex="0"
    aria-label="Close interpretation"
    on:click={closeMeaning}
    on:keydown={handleModalKeydown}
  >
    <div
      class="meaning-modal lux-meaning-modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button class="modal-close" on:click={closeMeaning} type="button">
        ×
      </button>

      {#if selectedMeaningCard.general}
        <div class="premium-reading-modal oracle-premium-modal">
          <p class="section-label">Oracle Reading</p>

          <h2>{premiumInterpretation?.title}</h2>

          <div class="oracle-reading">
            <section class="oracle-card hero-card">
              <span>Central message</span>
              <p>{premiumInterpretation?.summary}</p>
            </section>

            <section class="oracle-card energy-card">
              <span>Dominant energy</span>
              <p>{premiumInterpretation?.dominantEnergy}</p>
            </section>

            <section class="oracle-card">
              <span>Gift of the reading</span>
              <p>{premiumInterpretation?.gift}</p>
            </section>

            <section class="oracle-card shadow-card">
              <span>Shadow to observe</span>
              <p>{premiumInterpretation?.shadow}</p>
            </section>

            <section class="oracle-card">
              <span>Spiritual lesson</span>
              <p>{premiumInterpretation?.lesson}</p>
            </section>

            <section class="oracle-card">
              <span>Recommended action</span>
              <p>{premiumInterpretation?.action}</p>
            </section>

            <section class="oracle-card affirmation-card">
              <span>Affirmation</span>
              <p>{premiumInterpretation?.affirmation}</p>
            </section>

            <section class="oracle-card reflection-card">
              <span>Reflection question</span>
              <p>{premiumInterpretation?.reflection}</p>
            </section>

            <details class="full-reading">
              <summary>Full interpretation</summary>

              {#each premiumInterpretation?.sections || [] as section}
                <section class="full-section">
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </section>
              {/each}
            </details>
          </div>
        </div>
      {:else}
        <div class="modal-card-preview lux-modal-card-preview">
          <img
            class:modal-reversed={selectedMeaningCard.isReversed}
            src={selectedMeaningCard.image}
            alt={selectedMeaningCard.name}
          />
        </div>

        <div>
          <p class="section-label">{selectedMeaningCard.position}</p>
          <h2>{selectedMeaningCard.name}</h2>
          <p class="english-name">{selectedMeaningCard.englishName}</p>

          <span class:reversed={selectedMeaningCard.isReversed} class="orientation">
            {getOrientation(selectedMeaningCard)}
          </span>

          {#if getKeywords(selectedMeaningCard).length}
            <div class="keyword-row">
              {#each getKeywords(selectedMeaningCard) as keyword}
                <span>{keyword}</span>
              {/each}
            </div>
          {/if}

          <p>{getMeaning(selectedMeaningCard)}</p>

          {#if selectedMeaningCard.affirmation}
            <div class="premium-final-box card-detail-box">
              <span>Affirmation</span>
              <p>{selectedMeaningCard.affirmation}</p>
            </div>
          {/if}

          {#if selectedMeaningCard.reflection}
            <div class="premium-final-box card-detail-box">
              <span>Reflection</span>
              <p>{selectedMeaningCard.reflection}</p>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}