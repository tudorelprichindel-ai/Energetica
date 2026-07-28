<script>
  import {
    playBreathStartSound,
    playBreathCompleteSound,
    playTapSound
  } from "../lib/audio.js";

  let duration = 60;
  let isRunning = false;
  let remaining = 60;
  let phase = "Prepare";
  let intervalId = null;
  let completedCycles = 0;

  const durations = [
    {
      value: 30,
      label: "30s",
      description: "Quick reset"
    },
    {
      value: 60,
      label: "1 min",
      description: "Centering"
    },
    {
      value: 180,
      label: "3 min",
      description: "Full ritual"
    }
  ];

  const phaseDetails = {
    Prepare: {
      instruction: "Settle your body, relax your shoulders and let your attention move into the breath.",
      mantra: "I am here. I am present.",
      icon: "◇"
    },
    Inhale: {
      instruction: "Inhale slowly through the nose. Do not force it. Let the air enter naturally.",
      mantra: "I receive clarity.",
      icon: "☽"
    },
    Hold: {
      instruction: "Hold the breath gently. Notice the space between impulse and reaction.",
      mantra: "I remain centered.",
      icon: "✦"
    },
    Exhale: {
      instruction: "Exhale slowly. Release tension, urgency and mental noise.",
      mantra: "I release what is not mine.",
      icon: "☉"
    },
    Complete: {
      instruction: "The ritual is complete. Notice the state of your body before moving forward.",
      mantra: "I act from clarity.",
      icon: "✧"
    },
    Pause: {
      instruction: "The breath ritual is paused. Continue when you are ready.",
      mantra: "I do not rush.",
      icon: "◌"
    }
  };

  $: activePhase = phaseDetails[phase] || phaseDetails.Prepare;
  $: minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  $: seconds = String(remaining % 60).padStart(2, "0");
  $: progress =
    duration > 0 ? Math.max(0, Math.min(100, ((duration - remaining) / duration) * 100)) : 0;
  $: cyclePosition = (duration - remaining) % 14;
  $: cycleLabel = getCycleLabel(cyclePosition);

  function startBreath() {
    playBreathStartSound();
    stopBreath(false);

    if (remaining <= 0 || phase === "Complete") {
      remaining = duration;
      completedCycles = 0;
    }

    isRunning = true;
    updatePhase();

    intervalId = setInterval(() => {
      remaining -= 1;
      updatePhase();

      if (remaining <= 0) {
        stopBreath(false);
        remaining = 0;
        phase = "Complete";
        playBreathCompleteSound();
      }
    }, 1000);
  }

  function stopBreath(setPause = true) {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }

    isRunning = false;

    if (setPause && remaining > 0 && phase !== "Prepare") {
      phase = "Pause";
    }
  }

  function resetBreath() {
    playTapSound();

    stopBreath(false);
    remaining = duration;
    completedCycles = 0;
    phase = "Prepare";
  }

  function changeDuration(value) {
    playTapSound();

    duration = value;
    remaining = value;
    completedCycles = 0;
    phase = "Prepare";
    stopBreath(false);
  }

  function updatePhase() {
    const elapsed = duration - remaining;
    const currentCycle = Math.floor(elapsed / 14);

    completedCycles = currentCycle;

    const position = elapsed % 14;

    if (position < 4) {
      phase = "Inhale";
    } else if (position < 8) {
      phase = "Hold";
    } else {
      phase = "Exhale";
    }
  }

  function getCycleLabel(position) {
    if (!isRunning && phase === "Prepare") return "4 · 4 · 6";

    if (position < 4) {
      return `${4 - position}s inhale`;
    }

    if (position < 8) {
      return `${8 - position}s hold`;
    }

    return `${14 - position}s exhale`;
  }
</script>

<section class="screen-card breathe-screen lux-breathe-screen premium-breathe-screen">
  <div class="screen-top">
    <div>
      <p class="section-label">Breath Ritual</p>
      <h2>Sacred Breathing</h2>
    </div>

    <div class="screen-badge">
      <span>{activePhase.icon}</span>
    </div>
  </div>

  <div class="premium-breathe-intro">
    <p>
      Before a reading, calm the body. Breath changes the state from which you receive and interpret the message.
    </p>
  </div>

  <div class="premium-breathe-status">
    <div>
      <span>State</span>
      <strong>{phase}</strong>
    </div>

    <div>
      <span>Time</span>
      <strong>{minutes}:{seconds}</strong>
    </div>

    <div>
      <span>Cycles</span>
      <strong>{completedCycles}</strong>
    </div>
  </div>

  <div class="lux-breath-stage premium-breath-stage">
    <div class:breathing={isRunning} class="lux-breath-orb premium-breath-orb">
      <div class="lux-orbit lux-orbit-one"></div>
      <div class="lux-orbit lux-orbit-two"></div>
      <div class="lux-orbit lux-orbit-three"></div>

      <div class="premium-breath-progress" style={`--progress:${progress}%`}></div>

      <div class="lux-breath-core premium-breath-core">
        <span>{phase}</span>
        <strong>{minutes}:{seconds}</strong>
        <small>{cycleLabel}</small>
      </div>
    </div>
  </div>

  <div class="premium-breathe-guidance-card">
    <span>Instruction</span>
    <p>{activePhase.instruction}</p>
  </div>

  <div class="premium-breathe-mantra">
    <span>Mantra</span>
    <p>{activePhase.mantra}</p>
  </div>

  <div class="duration-options lux-duration-options premium-duration-options">
    {#each durations as option}
      <button
        class:active={duration === option.value}
        on:click={() => changeDuration(option.value)}
        type="button"
        disabled={isRunning}
      >
        <strong>{option.label}</strong>
        <span>{option.description}</span>
      </button>
    {/each}
  </div>

  <div class="breath-actions premium-breath-actions">
    {#if !isRunning}
      <button class="primary-btn" on:click={startBreath} type="button">
        {phase === "Pause" ? "Continue" : "Begin Ritual"}
      </button>
    {:else}
      <button class="primary-btn" on:click={() => stopBreath(true)} type="button">
        Pause
      </button>
    {/if}

    <button class="secondary-compact-btn" on:click={resetBreath} type="button">
      Reset
    </button>
  </div>

  <div class="lux-breath-guidance premium-breath-pattern">
    <div class:active-step={phase === "Inhale"}>
      <span>Inhale</span>
      <strong>4s</strong>
    </div>

    <div class:active-step={phase === "Hold"}>
      <span>Hold</span>
      <strong>4s</strong>
    </div>

    <div class:active-step={phase === "Exhale"}>
      <span>Exhale</span>
      <strong>6s</strong>
    </div>
  </div>
</section>