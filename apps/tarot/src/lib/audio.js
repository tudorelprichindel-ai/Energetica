const AUDIO_MUTED_KEY = "thePowerTarotMuted";

let audioContext = null;
let isMuted = localStorage.getItem(AUDIO_MUTED_KEY) === "true";

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  return audioContext;
}

function createGain(context, volume = 0.08, duration = 1.2) {
  const gain = context.createGain();

  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, context.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
  gain.connect(context.destination);

  return gain;
}

function playTone({
  frequency = 440,
  duration = 0.8,
  type = "sine",
  volume = 0.05,
  delay = 0
} = {}) {
  if (isMuted) return;

  try {
    const context = getAudioContext();
    const oscillator = context.createOscillator();
    const gain = createGain(context, volume, duration + delay);
    const startTime = context.currentTime + delay;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);
    oscillator.connect(gain);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  } catch {
    // Browser audio can fail if blocked. The app should continue silently.
  }
}

function playChord(frequencies = [], duration = 1, volume = 0.045) {
  if (isMuted) return;

  frequencies.forEach((frequency, index) => {
    playTone({
      frequency,
      duration,
      type: "sine",
      volume: volume / Math.max(frequencies.length, 1),
      delay: index * 0.055
    });
  });
}

export function playTapSound() {
  playTone({
    frequency: 880,
    duration: 0.12,
    type: "sine",
    volume: 0.018
  });
}

export function playDrawSound() {
  playChord([220, 330, 440], 0.9, 0.05);
}

export function playRevealSound() {
  playChord([528, 660, 792], 1.05, 0.045);
}

export function playBreathStartSound() {
  playChord([174, 285], 1.2, 0.042);
}

export function playBreathCompleteSound() {
  playChord([396, 528, 639], 1.6, 0.052);
}

export function toggleMute() {
  isMuted = !isMuted;
  localStorage.setItem(AUDIO_MUTED_KEY, String(isMuted));

  return isMuted;
}

export function getMutedState() {
  return isMuted;
}