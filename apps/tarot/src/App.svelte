<script>
  import { onMount } from "svelte";
  import "./styles.css";

  import { JOURNAL_KEY, loadJson, saveJson, removeItem } from "./lib/storage.js";

  import BrandHero from "./components/BrandHero.svelte";
  import BottomNav from "./components/BottomNav.svelte";
  import ReadingView from "./components/ReadingView.svelte";
  import TodayView from "./components/TodayView.svelte";
  import JournalView from "./components/JournalView.svelte";
  import BreatheView from "./components/BreatheView.svelte";
  import LibraryView from "./components/LibraryView.svelte";
  import OnboardingView from "./components/OnboardingView.svelte";

  const ONBOARDING_KEY = "thePowerTarotOnboardingDone";
  const INTENTION_KEY = "thePowerTarotFirstIntention";

  let activeTab = "today";
  let journal = [];
  let onboardingDone = true;
  let isReady = false;

  onMount(() => {
    journal = loadJson(JOURNAL_KEY, []);
    onboardingDone = localStorage.getItem(ONBOARDING_KEY) === "true";
    isReady = true;
  });

  function setActiveTab(tab) {
    activeTab = tab;
  }

  function openLibrary() {
    activeTab = "library";
  }

  function closeLibrary() {
    activeTab = "today";
  }

  function completeOnboarding(event) {
    const intention = event.detail?.intention || "";

    localStorage.setItem(ONBOARDING_KEY, "true");

    if (intention) {
      localStorage.setItem(INTENTION_KEY, intention);
    }

    onboardingDone = true;
    activeTab = "today";
  }

  function saveJournalEntry(event) {
    const entry = event.detail;

    if (!entry) return;

    journal = [entry, ...journal].slice(0, 60);
    saveJson(JOURNAL_KEY, journal);
  }

  function clearJournal() {
    journal = [];
    removeItem(JOURNAL_KEY);
  }

  function deleteJournalEntry(event) {
    const id = event.detail?.id;

    if (!id) return;

    journal = journal.filter((entry) => entry.id !== id);
    saveJson(JOURNAL_KEY, journal);
  }

  function toggleJournalFavorite(event) {
    const id = event.detail?.id;

    if (!id) return;

    journal = journal.map((entry) => {
      if (entry.id !== id) return entry;

      return {
        ...entry,
        favorite: !entry.favorite
      };
    });

    saveJson(JOURNAL_KEY, journal);
  }
</script>

{#if isReady}
  {#if !onboardingDone}
    <main class="app-shell onboarding-shell">
      <OnboardingView on:complete={completeOnboarding} />
      <p class="app-disclaimer">
        Your intention stays on this device. The Power Tarot is for reflection and entertainment,
        not professional advice.
      </p>
    </main>
  {:else}
    <main class="app-shell">
      <BrandHero />

      <section class="app-content">
        {#if activeTab === "today"}
          <TodayView {openLibrary} />
        {:else if activeTab === "reading"}
          <ReadingView on:savejournal={saveJournalEntry} />
        {:else if activeTab === "breathe"}
          <BreatheView />
        {:else if activeTab === "journal"}
          <JournalView
            {journal}
            on:clearjournal={clearJournal}
            on:deletejournalentry={deleteJournalEntry}
            on:togglejournalfavorite={toggleJournalFavorite}
          />
        {:else if activeTab === "library"}
          <LibraryView onClose={closeLibrary} />
        {/if}
      </section>

      <p class="app-disclaimer">
        Private by design: your journal stays on this device. For reflection and entertainment,
        not professional advice.
      </p>

      {#if activeTab !== "library"}
        <BottomNav {activeTab} {setActiveTab} />
      {/if}
    </main>
  {/if}
{/if}
