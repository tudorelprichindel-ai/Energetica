<script>
  import { getMutedState, toggleMute, playTapSound } from "../lib/audio.js";

  let muted = getMutedState();

  function handleToggle() {
    muted = toggleMute();

    if (!muted) {
      playTapSound();
    }
  }
</script>

<button
  class:muted
  class="sound-toggle"
  on:click={handleToggle}
  type="button"
  aria-label={muted ? "Turn sound on" : "Turn sound off"}
  title={muted ? "Turn sound on" : "Turn sound off"}
>
  <span aria-hidden="true">{muted ? "♪̸" : "♪"}</span>
</button>