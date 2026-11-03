const basePath = new URL(".", window.location.href).pathname.replace(/\/$/, "");
const mediaUrl = (path) => `${basePath}${path}`;
const storageKey = "consul-cpb36-step";

const title = document.querySelector("#step-title");
const text = document.querySelector("#step-text");
const image = document.querySelector("#step-image");
const imagePlaceholder = document.querySelector("#image-placeholder");
const progress = document.querySelector("#progress");
const progressCopy = document.querySelector("#progress-copy");
const audio = document.querySelector("#audio");
const audioStatus = document.querySelector("#audio-status");
const playButton = document.querySelector("#play-audio");
const replayButton = document.querySelector("#replay-audio");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
let steps = [];
let current = 0;
let memoryStep = 0;

function readSavedStep() {
  try {
    const saved = Number(localStorage.getItem(storageKey));
    return Number.isInteger(saved) && saved >= 0 && saved < steps.length ? saved : 0;
  } catch {
    return memoryStep;
  }
}

function saveStep() {
  memoryStep = current;
  try { localStorage.setItem(storageKey, String(current)); } catch { /* armazenamento indisponível */ }
}

function setAudioButton(label, icon) {
  playButton.innerHTML = `${icon} <span>${label}</span>`;
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  audio.removeAttribute("src");
  audio.load();
  setAudioButton("Ouvir explicação", "▶");
  audioStatus.textContent = "O áudio só começa quando você tocar no botão.";
}

function showStep(index, announce = true) {
  current = Math.max(0, Math.min(index, steps.length - 1));
  const step = steps[current];
  stopAudio();
  title.textContent = step.title;
  text.textContent = step.text;
  image.alt = step.imageAlt;
  image.hidden = true;
  imagePlaceholder.hidden = false;
  image.onload = () => { image.hidden = false; imagePlaceholder.hidden = true; };
  image.onerror = () => { image.hidden = true; imagePlaceholder.hidden = false; };
  image.src = mediaUrl(step.image);
  progress.value = current + 1;
  progressCopy.textContent = `Passo ${current + 1} de ${steps.length}`;
  previousButton.disabled = current === 0;
  nextButton.textContent = current === steps.length - 1 ? "Concluir" : "Próximo";
  document.querySelector("#help").hidden = !["04", "05"].includes(step.id);
  document.querySelector("#activation-note").hidden = step.id !== "09";
  saveStep();
  if (announce) document.querySelector("#step-announcement").textContent = `Passo ${current + 1} de ${steps.length}: ${step.title}`;
}

async function startAudio(restart = false) {
  if (!audio.getAttribute("src") || restart) audio.src = mediaUrl(steps[current].audio);
  if (restart) audio.currentTime = 0;
  try {
    await audio.play();
    audioStatus.textContent = "Reproduzindo explicação.";
  } catch {
    audioStatus.textContent = "O áudio desta etapa ainda não está disponível. Você pode continuar lendo e avançar normalmente.";
    setAudioButton("Ouvir explicação", "▶");
  }
}

playButton.addEventListener("click", () => {
  if (audio.paused && audio.getAttribute("src")) {
    audio.play().catch(() => {});
  } else if (audio.paused) {
    startAudio();
  } else {
    audio.pause();
  }
});
replayButton.addEventListener("click", () => startAudio(true));
audio.addEventListener("play", () => setAudioButton("Pausar áudio", "Ⅱ"));
audio.addEventListener("pause", () => {
  if (audio.hasAttribute("src") && audio.currentTime < audio.duration) setAudioButton("Continuar áudio", "▶");
});
audio.addEventListener("ended", () => { setAudioButton("Ouvir explicação", "▶"); audioStatus.textContent = "Explicação concluída."; });
audio.addEventListener("error", () => {
  setAudioButton("Ouvir explicação", "▶");
  audioStatus.textContent = "O áudio desta etapa ainda não está disponível. Você pode continuar lendo e avançar normalmente.";
});
previousButton.addEventListener("click", () => showStep(current - 1));
nextButton.addEventListener("click", () => {
  if (current < steps.length - 1) showStep(current + 1);
  else showStep(0);
});
document.querySelector("#restart").addEventListener("click", () => showStep(0));

fetch(mediaUrl("/etapas.json"))
  .then((response) => { if (!response.ok) throw new Error("Não foi possível carregar as etapas."); return response.json(); })
  .then((data) => {
    steps = data;
    progress.max = steps.length;
    showStep(readSavedStep(), false);
  })
  .catch(() => {
    title.textContent = "Não foi possível abrir o audiomanual";
    text.textContent = "Confira se está usando um servidor local ou o endereço publicado corretamente.";
    document.querySelector("#progress").hidden = true;
    previousButton.disabled = true;
    nextButton.disabled = true;
    playButton.disabled = true;
    replayButton.disabled = true;
  });
