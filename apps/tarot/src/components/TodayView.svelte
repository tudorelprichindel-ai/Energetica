<script>
  import { onMount } from "svelte";
  import { tarotDeck } from "../tarotData.js";
  import { DAILY_KEY, loadJson, saveJson } from "../lib/storage.js";
  import CardFlip from "./CardFlip.svelte";
  import { playDrawSound, playRevealSound, playTapSound } from "../lib/audio.js";

  export let openLibrary = () => {};

  const INTENTION_KEY = "thePowerTarotFirstIntention";

  let dailyCard = null;
  let dailyRevealed = false;
  let reversedAnimationReady = false;
  let selectedCard = null;
  let firstIntention = "";
  let dailyInsight = null;

  const dailyColors = [
    "Royal violet",
    "Solar gold",
    "Astral blue",
    "Mystic rose",
    "Emerald green",
    "Lunar silver"
  ];

  const dailyElements = [
    "Clarity",
    "Healing",
    "Courage",
    "Abundance",
    "Intuition",
    "Transformation"
  ];

  const dailyActions = [
    "Choose one important thing and do it without overcomplicating it.",
    "Tell the truth more simply than you normally would.",
    "Do not force the outcome. Notice where the energy flows naturally.",
    "Make one clear decision, even if you do not have every guarantee.",
    "Protect your energy. Not everyone deserves access to your inner world.",
    "Bring order to one space, one idea or one relationship."
  ];

  $: hasDailyCard = Boolean(dailyCard);

  onMount(() => {
    firstIntention = localStorage.getItem(INTENTION_KEY) || "";

    const savedDaily = loadJson(DAILY_KEY, null);
    const todayKey = getTodayKey();

    if (savedDaily?.date === todayKey && savedDaily?.card) {
      dailyCard = savedDaily.card;
      dailyRevealed = true;
      reversedAnimationReady = true;
      dailyInsight = buildDailyInsight(dailyCard);
    }
  });

  function getTodayKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function getSeedFromDate() {
    return getTodayKey()
      .split("")
      .reduce((total, character) => total + character.charCodeAt(0), 0);
  }

  function buildDailyInsight(card) {
    const seed = getSeedFromDate() + card.id;

    return {
      color: dailyColors[seed % dailyColors.length],
      element: dailyElements[seed % dailyElements.length],
      action: dailyActions[seed % dailyActions.length],
      dominantEnergy: card.isReversed
        ? "this energy asks you to slow down, observe and correct an imbalance"
        : "this energy supports conscious action, clarity and openness",
      morningPrompt: `Where can I apply the energy of ${card.name} without sabotaging myself?`,
      eveningPrompt: "What did I understand today about myself, my choices and my energy?"
    };
  }

  function drawDailyCard() {
    playDrawSound();

    dailyRevealed = false;
    reversedAnimationReady = false;
    selectedCard = null;

    const seed = getSeedFromDate();
    const baseCard = tarotDeck[seed % tarotDeck.length];

    dailyCard = {
      ...baseCard,
      isReversed: seed % 5 === 0,
      position: "Energy of the day"
    };

    dailyInsight = buildDailyInsight(dailyCard);

    saveJson(DAILY_KEY, {
      date: getTodayKey(),
      card: dailyCard
    });

    setTimeout(() => {
      dailyRevealed = true;

      setTimeout(() => {
        reversedAnimationReady = true;
        playRevealSound();
      }, 800);
    }, 350);
  }

  function openCardDetails() {
    if (!dailyCard || !dailyRevealed) return;

    playTapSound();
    selectedCard = dailyCard;
  }

  function closeCardDetails() {
    playTapSound();
    selectedCard = null;
  }

  function goToLibrary() {
    playTapSound();
    openLibrary();
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

  function handleModalKeydown(event) {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      closeCardDetails();
    }
  }
</script>

<section class="screen-card today-screen premium-today-screen">
  <div class="screen-top">
    <div>
      <p class="section-label">Daily Arcana</p>
      <h2>Energy of the Day</h2>
    </div>

    <div class="screen-badge">
      <span>✦</span>
    </div>
  </div>

  {#if firstIntention}
    <div class="daily-intention-card">
      <span>Your intention</span>
      <p>{firstIntention}</p>
    </div>
  {/if}

  <div class="daily-stage premium-daily-stage" class:has-card={hasDailyCard}>
    {#if hasDailyCard}
      <button class="daily-card-button premium-daily-card-wrap" on:click={openCardDetails} type="button">
        <CardFlip
          card={dailyCard}
          revealed={dailyRevealed}
          reversedAnimationReady={reversedAnimationReady}
        />

        {#if dailyRevealed}
          <div class="daily-card-title">
            <span>{dailyCard.position}</span>
            <strong>{dailyCard.name}</strong>
            <small class:reversed={dailyCard.isReversed}>{getOrientation(dailyCard)}</small>
          </div>
        {:else}
          <div class="daily-card-title">
            <span>Energy of the day</span>
            <strong>The card is revealing</strong>
            <small>Breathe and observe</small>
          </div>
        {/if}
      </button>
    {:else}
      <div class="daily-empty premium-daily-empty">
        <div class="daily-orb">
          <span>✦</span>
        </div>

        <h3>Draw your daily card</h3>
        <p>Receive a main energy, a recommended action and a reflection question.</p>
      </div>
    {/if}
  </div>

  {#if !hasDailyCard}
    <button class="primary-btn daily-draw-btn" on:click={drawDailyCard} type="button">
      Draw Daily Card
    </button>
  {:else}
    <button class="primary-btn daily-draw-btn" on:click={openCardDetails} type="button">
      View Today’s Message
    </button>
  {/if}

  {#if dailyRevealed && dailyInsight}
    <div class="daily-energy-grid">
      <article>
        <span>Color</span>
        <strong>{dailyInsight.color}</strong>
      </article>

      <article>
        <span>Energy</span>
        <strong>{dailyInsight.element}</strong>
      </article>

      <article>
        <span>Orientation</span>
        <strong>{getOrientation(dailyCard)}</strong>
      </article>
    </div>

    <div class="premium-daily-guidance">
      <article>
        <span>Dominant energy</span>
        <p>{dailyInsight.dominantEnergy}</p>
      </article>

      <article>
        <span>Recommended action</span>
        <p>{dailyInsight.action}</p>
      </article>

      <article>
        <span>Affirmation</span>
        <p>{dailyCard.affirmation}</p>
      </article>
    </div>

    <div class="daily-prompts">
      <article>
        <span>Morning</span>
        <p>{dailyInsight.morningPrompt}</p>
      </article>

      <article>
        <span>Evening</span>
        <p>{dailyInsight.eveningPrompt}</p>
      </article>
    </div>
  {/if}

  <button class="secondary-btn library-open-btn" on:click={goToLibrary} type="button">
    Explore the full deck
  </button>
</section>

{#if selectedCard}
  <div
    class="meaning-backdrop"
    role="button"
    tabindex="0"
    aria-label="Close today’s message"
    on:click={closeCardDetails}
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
      <button class="modal-close" on:click={closeCardDetails} type="button">
        ×
      </button>

      <div class="modal-card-preview lux-modal-card-preview">
        <img
          class:modal-reversed={selectedCard.isReversed}
          src={selectedCard.image}
          alt={selectedCard.name}
        />
      </div>

      <div>
        <p class="section-label">Today’s message</p>
        <h2>{selectedCard.name}</h2>
        <p class="english-name">{selectedCard.englishName}</p>

        <span class:reversed={selectedCard.isReversed} class="orientation">
          {getOrientation(selectedCard)}
        </span>

        {#if getKeywords(selectedCard).length}
          <div class="keyword-row">
            {#each getKeywords(selectedCard) as keyword}
              <span>{keyword}</span>
            {/each}
          </div>
        {/if}

        <p>{getMeaning(selectedCard)}</p>

        {#if dailyInsight}
          <div class="premium-final-box card-detail-box">
            <span>Action of the day</span>
            <p>{dailyInsight.action}</p>
          </div>
        {/if}

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