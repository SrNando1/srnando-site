// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", function () {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === current && !link.classList.contains("nav-cta")) {
      link.style.color = "var(--primary)";
    }
  });
});
