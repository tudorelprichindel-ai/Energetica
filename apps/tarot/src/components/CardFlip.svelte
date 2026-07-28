<script>
  import { cardBack } from "../tarotData.js";

  export let card;
  export let revealed = false;
  export let reversedAnimationReady = false;

  $: cardName = card?.name || "Tarot card";
  $: cardImage = card?.image || cardBack;
  $: isReversed = Boolean(card?.isReversed && reversedAnimationReady);
</script>

<div class="flip-card clean-flip-card" class:revealed>
  <div class="flip-inner clean-flip-inner">
    <div class="flip-face flip-back clean-card-back">
      <img src={cardBack} alt="Tarot card back" loading="eager" />
    </div>

    <div class="flip-face flip-front clean-card-front">
      <div class="card-image-holder clean-card-image-holder" class:rotate-reversed={isReversed}>
        <img src={cardImage} alt={cardName} loading="eager" />
      </div>
    </div>
  </div>
</div>