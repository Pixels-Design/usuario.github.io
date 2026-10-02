function setBackground(backgroundClass) {
  const body = document.body;
  body.classList.remove("aqua", "night", "technozen", "aero");
  body.classList.add(backgroundClass);
}

function frutigerAqua() {
  setBackground("aqua");
}

function frutigerNight() {
  setBackground("night");
}

function technozen() {
  setBackground("technozen");
}

function frutigerAero() {
  setBackground("aero");
}

const backgroundAudio = document.getElementById("background-audio");
const musicToggle = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");

if (backgroundAudio && musicToggle && musicStatus) {
  musicToggle.addEventListener("click", async () => {
    if (backgroundAudio.paused) {
      try {
        await backgroundAudio.play();
      } catch {
        musicStatus.textContent = "No se pudo reproducir la música. Inténtalo de nuevo.";
      }
      return;
    }

    backgroundAudio.pause();
  });

  backgroundAudio.addEventListener("play", () => {
    musicToggle.textContent = "Pausar música";
    musicToggle.setAttribute("aria-pressed", "true");
    musicStatus.textContent = "Reproduciendo música.";
  });

  backgroundAudio.addEventListener("pause", () => {
    musicToggle.textContent = "Reproducir música";
    musicToggle.setAttribute("aria-pressed", "false");
    musicStatus.textContent = "La música está pausada.";
  });
}