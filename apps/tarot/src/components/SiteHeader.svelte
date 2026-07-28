<script>
  let menuOpen = false;

  function closeMenu() {
    menuOpen = false;
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="site-shell-header">
  <div class="site-shell-header-inner">
    <a class="site-shell-logo" href="../proiect.html" on:click={closeMenu}>
      The Power Boutique
    </a>

    <button
      class:open={menuOpen}
      class="site-shell-menu-toggle"
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="tarot-site-navigation"
      on:click={() => (menuOpen = !menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav
      id="tarot-site-navigation"
      class:open={menuOpen}
      class="site-shell-navigation"
      aria-label="The Power Boutique navigation"
    >
      <a href="../proiect.html" on:click={closeMenu}>Home</a>
      <a href="../programari.html" on:click={closeMenu}>Consultations</a>
      <a href="../products.html" on:click={closeMenu}>Energy Bracelets</a>
      <a href="../digital-shop.html" on:click={closeMenu}>Digital Shop</a>
      <a href="../digital-shop.html#product-tarot-guide" on:click={closeMenu}>Tarot Guide</a>
      <a href="../despre.html" on:click={closeMenu}>About</a>
      <a href="../contact.html" on:click={closeMenu}>Contact</a>
    </nav>
  </div>

  {#if menuOpen}
    <button
      class="site-shell-menu-backdrop"
      type="button"
      aria-label="Close menu"
      on:click={closeMenu}
    ></button>
  {/if}
</header>
