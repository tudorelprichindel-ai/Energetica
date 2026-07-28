<script>
  import { playTapSound } from "../lib/audio.js";

  export let activeTab = "today";
  export let setActiveTab = () => {};

  const navItems = [
    {
      id: "today",
      label: "Today",
      icon: "☾"
    },
    {
      id: "reading",
      label: "Reading",
      icon: "✦"
    },
    {
      id: "breathe",
      label: "Breathe",
      icon: "◌"
    },
    {
      id: "journal",
      label: "Journal",
      icon: "◇"
    }
  ];

  function changeTab(tab) {
    if (activeTab === tab) return;

    playTapSound();
    setActiveTab(tab);
  }
</script>

<nav class="bottom-nav" aria-label="Main navigation">
  {#each navItems as item}
    <button
      class:active={activeTab === item.id}
      class="nav-item"
      on:click={() => changeTab(item.id)}
      type="button"
      aria-current={activeTab === item.id ? "page" : undefined}
      aria-label={item.label}
    >
      <span>{item.icon}</span>
      {item.label}
    </button>
  {/each}
</nav>