// page fade in
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

// page fade out navigation
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (!link) return;

  const url = link.getAttribute("href");

  if (!url || url.startsWith("#") || url.startsWith("http")) return;

  e.preventDefault();

  document.body.classList.remove("loaded");

  setTimeout(() => {
    window.location.href = url;
  }, 250);
});