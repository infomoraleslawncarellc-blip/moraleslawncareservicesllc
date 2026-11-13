const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

// The live form is intentionally not activated until the owner's Formspree ID is added.
const form = document.getElementById("estimate-form");
form?.addEventListener("submit", (event) => {
  if (form.action.includes("YOUR_FORMSPREE_ID")) {
    event.preventDefault();
    document.getElementById("form-status").textContent =
      "The quote form needs your existing Formspree form ID before it can receive submissions.";
  }
});
