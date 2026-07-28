<script>
  import { createEventDispatcher } from "svelte";
  import { playTapSound } from "../lib/audio.js";

  export let journal = [];

  const dispatch = createEventDispatcher();

  let selectedEntry = null;
  let selectedZoomCard = null;
  let activeJournalFilter = "all";

  $: filteredJournal =
    activeJournalFilter === "favorites"
      ? journal.filter((entry) => entry.favorite)
      : journal;

  function formatDate(value) {
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(value));
  }

  function clearJournal() {
    playTapSound();
    selectedEntry = null;
    selectedZoomCard = null;
    dispatch("clearjournal");
  }

  function deleteEntry(entry) {
    playTapSound();

    dispatch("deletejournalentry", {
      id: entry.id
    });

    if (selectedEntry?.id === entry.id) {
      selectedEntry = null;
      selectedZoomCard = null;
    }
  }

  function toggleFavorite(entry) {
    playTapSound();

    dispatch("togglejournalfavorite", {
      id: entry.id
    });

    if (selectedEntry?.id === entry.id) {
      selectedEntry = {
        ...selectedEntry,
        favorite: !selectedEntry.favorite
      };
    }
  }

  function setJournalFilter(filter) {
    playTapSound();
    activeJournalFilter = filter;
  }

  function openEntry(entry) {
    playTapSound();
    selectedEntry = entry;
    selectedZoomCard = null;
  }

  function closeEntry() {
    playTapSound();
    selectedEntry = null;
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

  function handleModalKeydown(event) {
    if (event.key !== "Escape") return;

    event.preventDefault();

    if (selectedZoomCard) {
      closeZoomCard();
      return;
    }

    closeEntry();
  }

  function handleZoomKeydown(event) {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      closeZoomCard();
    }
  }

  function getOrientation(card) {
    return card.isReversed ? "Reversed" : "Upright";
  }

  function getCardNames(entry) {
    return entry.cards.map((card) => card.name).join(" · ");
  }

  function getReadingType(entry) {
    return entry.type === "one" ? "Intuitive Reading" : "Past · Present · Future";
  }
</script>

<section class="screen-card journal-screen clean-journal-screen">
  <div class="screen-top">
    <div>
      <p class="section-label">Sacred Archive</p>
      <h2>Journal</h2>
    </div>

    <div class="screen-badge">
      <span>◇</span>
    </div>
  </div>

  <div class="clean-archive-summary">
    <div>
      <span>{journal.length}</span>
    </div>

    <p>
      Your saved readings. Mark important messages as favorites and return to them whenever you need clarity.
    </p>
  </div>

  {#if journal.length}
    <div class="journal-filter-tabs">
      <button
        class:active={activeJournalFilter === "all"}
        on:click={() => setJournalFilter("all")}
        type="button"
      >
        All
        <span>{journal.length}</span>
      </button>

      <button
        class:active={activeJournalFilter === "favorites"}
        on:click={() => setJournalFilter("favorites")}
        type="button"
      >
        Favorites
        <span>{journal.filter((entry) => entry.favorite).length}</span>
      </button>
    </div>

    <div class="clean-journal-toolbar">
      <span>
        {activeJournalFilter === "favorites" ? "Favorite readings" : "Latest readings"}
      </span>

      <button on:click={clearJournal} type="button">
        Clear all
      </button>
    </div>

    {#if filteredJournal.length}
      <div class="clean-journal-timeline">
        {#each filteredJournal as entry}
          <article class:favorite-entry={entry.favorite} class="clean-journal-entry-wrap">
            <button class="clean-journal-entry" on:click={() => openEntry(entry)} type="button">
              <div class="timeline-dot"></div>

              <div class="clean-entry-main">
                <div class="clean-entry-meta">
                  <span>{formatDate(entry.date)}</span>
                  <em>{entry.type === "one" ? "1 card" : "3 cards"}</em>

                  {#if entry.favorite}
                    <strong class="favorite-pill">★ Favorite</strong>
                  {/if}
                </div>

                <h3>{getReadingType(entry)}</h3>

                <p>{getCardNames(entry)}</p>
              </div>

              <div class="clean-entry-action">
                <span>Open</span>
              </div>
            </button>

            <div class="journal-entry-actions-row">
              <button
                class:active={entry.favorite}
                class="journal-favorite-btn"
                on:click={() => toggleFavorite(entry)}
                type="button"
              >
                {entry.favorite ? "★ Favorite" : "☆ Favorite"}
              </button>

              <button class="journal-delete-one-btn" on:click={() => deleteEntry(entry)} type="button">
                Delete
              </button>
            </div>
          </article>
        {/each}
      </div>
    {:else}
      <div class="clean-empty-journal small-empty-state">
        <div>
          <span>★</span>
        </div>

        <h3>No favorites yet</h3>

        <p>
          Mark important readings with ★ so you can find them quickly here.
        </p>
      </div>
    {/if}
  {:else}
    <div class="clean-empty-journal">
      <div>
        <span>◇</span>
      </div>

      <h3>Your archive is empty</h3>

      <p>
        Your first reading will be saved here automatically after the cards are revealed.
      </p>
    </div>
  {/if}
</section>

{#if selectedEntry}
  <div
    class="meaning-backdrop"
    role="button"
    tabindex="0"
    aria-label="Close archived reading"
    on:click={closeEntry}
    on:keydown={handleModalKeydown}
  >
    <div
      class="meaning-modal lux-meaning-modal journal-entry-modal clean-journal-modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button class="modal-close" on:click={closeEntry} type="button">
        ×
      </button>

      <div class="clean-modal-header">
        <p class="section-label">Archived Reading</p>
        <h2>{selectedEntry.question}</h2>
        <span>{formatDate(selectedEntry.date)}</span>

        {#if selectedEntry.favorite}
          <strong class="modal-favorite-badge">★ Favorite</strong>
        {/if}
      </div>

      <div class="journal-modal-actions">
        <button
          class:active={selectedEntry.favorite}
          class="modal-favorite-action"
          on:click={() => toggleFavorite(selectedEntry)}
          type="button"
        >
          {selectedEntry.favorite ? "Remove from favorites" : "Add to favorites"}
        </button>

        <button on:click={() => deleteEntry(selectedEntry)} type="button">
          Delete this reading
        </button>
      </div>

      <div class="clean-modal-cards journal-zoomable-cards">
        {#each selectedEntry.cards as card}
          <button class="journal-modal-card-btn" on:click={() => openZoomCard(card)} type="button">
            <img
              class:mini-reversed={card.isReversed}
              src={card.image}
              alt={card.name}
            />

            <div>
              <span>{card.position}</span>
              <strong>{card.name}</strong>
              <small>{getOrientation(card)}</small>
              <em>Tap to enlarge</em>
            </div>
          </button>
        {/each}
      </div>

      {#if selectedEntry.interpretation}
        <div class="oracle-reading">
          <section class="oracle-card hero-card">
            <span>Central message</span>
            <p>{selectedEntry.interpretation.summary}</p>
          </section>

          <section class="oracle-card energy-card">
            <span>Dominant energy</span>
            <p>{selectedEntry.interpretation.dominantEnergy}</p>
          </section>

          <section class="oracle-card">
            <span>Gift of the reading</span>
            <p>{selectedEntry.interpretation.gift}</p>
          </section>

          <section class="oracle-card shadow-card">
            <span>Shadow to observe</span>
            <p>{selectedEntry.interpretation.shadow}</p>
          </section>

          <section class="oracle-card">
            <span>Spiritual lesson</span>
            <p>{selectedEntry.interpretation.lesson}</p>
          </section>

          <section class="oracle-card">
            <span>Recommended action</span>
            <p>{selectedEntry.interpretation.action}</p>
          </section>

          <section class="oracle-card affirmation-card">
            <span>Affirmation</span>
            <p>{selectedEntry.interpretation.affirmation}</p>
          </section>

          {#if selectedEntry.interpretation.reflection}
            <section class="oracle-card reflection-card">
              <span>Reflection question</span>
              <p>{selectedEntry.interpretation.reflection}</p>
            </section>
          {/if}

          <details class="full-reading">
            <summary>Full interpretation</summary>

            {#each selectedEntry.interpretation.sections || [] as section}
              <section class="full-section">
                <h3>{section.heading}</h3>
                <p>{section.body}</p>
              </section>
            {/each}
          </details>
        </div>
      {:else}
        <div class="premium-final-box">
          <span>Saved message</span>
          <p>{selectedEntry.message}</p>
        </div>
      {/if}
    </div>
  </div>
{/if}

{#if selectedZoomCard}
  <div
    class="journal-card-zoom-backdrop"
    role="button"
    tabindex="0"
    aria-label="Close enlarged card"
    on:click={closeZoomCard}
    on:keydown={handleZoomKeydown}
  >
    <div
      class="journal-card-zoom-modal"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button class="modal-close journal-zoom-close" on:click={closeZoomCard} type="button">
        ×
      </button>

      <div class="journal-zoom-image-wrap">
        <img
          class:zoom-reversed={selectedZoomCard.isReversed}
          src={selectedZoomCard.image}
          alt={selectedZoomCard.name}
        />
      </div>

      <div class="journal-zoom-info">
        <p class="section-label">{selectedZoomCard.position}</p>
        <h2>{selectedZoomCard.name}</h2>
        <span class:reversed={selectedZoomCard.isReversed} class="orientation">
          {getOrientation(selectedZoomCard)}
        </span>
      </div>
    </div>
  </div>
{/if}