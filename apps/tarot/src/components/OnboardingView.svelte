<script>
  import { createEventDispatcher } from "svelte";
  import { playTapSound } from "../lib/audio.js";

  const dispatch = createEventDispatcher();

  let step = 0;
  let intention = "";

  const steps = [
    {
      label: "Welcome",
      title: "The Power Tarot",
      text:
        "A ritual space for clarity, reflection and connection with the energy of the day.",
      icon: "✦"
    },
    {
      label: "Ritual",
      title: "How to use the app",
      text:
        "Draw your daily card, make an intuitive reading, breathe before interpretation and save important messages in your journal.",
      icon: "◇"
    },
    {
      label: "Intention",
      title: "Set your intention",
      text:
        "Write a short intention. It will appear in the Today section and guide your first reading.",
      icon: "☽"
    }
  ];

  $: currentStep = steps[step];
  $: progress = ((step + 1) / steps.length) * 100;
  $: isLastStep = step === steps.length - 1;

  function nextStep() {
    playTapSound();

    if (isLastStep) {
      completeOnboarding();
      return;
    }

    step += 1;
  }

  function previousStep() {
    if (step === 0) return;

    playTapSound();
    step -= 1;
  }

  function skipOnboarding() {
    playTapSound();

    dispatch("complete", {
      intention: intention.trim()
    });
  }

  function completeOnboarding() {
    playTapSound();

    dispatch("complete", {
      intention: intention.trim()
    });
  }
</script>

<section class="screen-card onboarding-screen">
  <div class="onboarding-content">
    <div class="onboarding-sigil" aria-hidden="true">
      <div class="onboarding-ring">
        <div class="onboarding-orbit">
          <span>{currentStep.icon}</span>
        </div>
      </div>
    </div>

    <div>
      <p class="section-label">{currentStep.label}</p>
      <h2>{currentStep.title}</h2>
      <p class="premium-summary">{currentStep.text}</p>
    </div>

    {#if isLastStep}
      <div class="onboarding-intention">
        <label for="first-intention">Your intention</label>
        <textarea
          id="first-intention"
          bind:value={intention}
          placeholder="Example: I want clarity about my next step..."
        ></textarea>
      </div>
    {:else}
      <div class="onboarding-ritual-list">
        <article class="daily-intention-card">
          <span>Today</span>
          <p>Receive the energy of the day and a recommended action.</p>
        </article>

        <article class="daily-intention-card">
          <span>Reading</span>
          <p>Create a one-card or three-card reading and save the interpretation.</p>
        </article>

        <article class="daily-intention-card">
          <span>Journal</span>
          <p>Return to important readings and mark them as favorites.</p>
        </article>
      </div>
    {/if}

    <div class="onboarding-progress" aria-label="Onboarding progress">
      <span style={`width: ${progress}%`}></span>
    </div>

    <div class="onboarding-actions">
      {#if step > 0}
        <button class="secondary-btn" on:click={previousStep} type="button">
          Back
        </button>
      {/if}

      <button class="primary-btn" on:click={nextStep} type="button">
        {isLastStep ? "Begin" : "Continue"}
      </button>

      {#if !isLastStep}
        <button class="secondary-btn" on:click={skipOnboarding} type="button">
          Skip
        </button>
      {/if}
    </div>
  </div>
</section>