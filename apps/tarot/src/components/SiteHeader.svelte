<script>
  let menuOpen = false;
  let shopOpen = false;

  function closeMenu() {
    menuOpen = false;
    shopOpen = false;
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    if (!menuOpen) {
      shopOpen = false;
    }
  }

  function handleShopClick(event) {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      event.preventDefault();
      shopOpen = !shopOpen;
    }
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
    <button
      class:open={menuOpen}
      class="site-shell-menu-toggle"
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="tarot-site-navigation"
      on:click={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <a class="site-shell-logo" href="../proiect.html" on:click={closeMenu}>
      The Power Boutique
    </a>

    <span class="site-shell-language" aria-label="Application language: English">EN</span>

    <nav
      id="tarot-site-navigation"
      class:open={menuOpen}
      class="site-shell-navigation"
      aria-label="The Power Boutique navigation"
    >
      <a href="../proiect.html" on:click={closeMenu}>Home</a>
      <a href="../programari.html" on:click={closeMenu}>Consultations</a>
      <div class:open={shopOpen} class="site-shell-shop">
        <a
          class="site-shell-shop-trigger"
          href="../products.html"
          aria-expanded={shopOpen}
          on:click={handleShopClick}
        >
          Shop <span aria-hidden="true">⌄</span>
        </a>
        <div class="site-shell-submenu">
          <a href="../products.html" on:click={closeMenu}>Energy Bracelets</a>
          <a href="../digital-shop.html" on:click={closeMenu}>Digital Shop</a>
          <a href="../tarot-guide.html" on:click={closeMenu}>Tarot Guide</a>
        </div>
      </div>
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
