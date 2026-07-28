export const JOURNAL_KEY = "thePowerTarotJournal";
export const DAILY_KEY = "thePowerTarotDaily";

export function loadJson(key, fallback) {
  if (typeof localStorage === "undefined") return fallback;

  const saved = localStorage.getItem(key);

  if (!saved) return fallback;

  try {
    return JSON.parse(saved);
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

export function saveJson(key, value) {
  if (typeof localStorage === "undefined") return;

  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key) {
  if (typeof localStorage === "undefined") return;

  localStorage.removeItem(key);
}