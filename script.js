const header = document.querySelector(".site-header");
const langButtons = document.querySelectorAll(".lang-button");

const setHeaderState = () => {
  if (!header) return;
  header.dataset.scrolled = String(window.scrollY > 24);
};

const setLanguage = (lang) => {
  const nextLang = lang === "en" ? "en" : "ja";
  document.body.classList.toggle("lang-en", nextLang === "en");
  document.body.classList.toggle("lang-ja", nextLang === "ja");
  document.documentElement.lang = nextLang;
  localStorage.setItem("coco-lp-lang", nextLang);
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLang);
  });
};

setHeaderState();
setLanguage(localStorage.getItem("coco-lp-lang") || "ja");

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", setHeaderState, { passive: true });
