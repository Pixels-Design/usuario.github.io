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