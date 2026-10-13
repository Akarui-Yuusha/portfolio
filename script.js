// Putting DOM elements into reusable variables.
var menuButton = document.getElementById("menu-button");
var navLinks = document.getElementById("nav-links");
var themeToggleBtn = document.getElementById("theme-toggle");
var htmlElement = document.documentElement;

// ==========================================
// Dark / Light Mode Toggle
// ==========================================

// Check for saved user preference in localStorage on page load
var savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.setAttribute("data-theme", savedTheme);
  if (themeToggleBtn) {
    themeToggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }
}

// When the theme toggle button is clicked, switch themes
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    var currentTheme = htmlElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      htmlElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeToggleBtn.textContent = "🌙";
    } else {
      htmlElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggleBtn.textContent = "☀️";
    }
  });
}

// ==========================================
// Mobile Menu Toggle
// ==========================================

// When the button is clicked, toggle the menu open or closed.
menuButton.addEventListener("click", function () {
  // toggle() adds the "show" class if it is missing,
  // and removes it if it is already there.
  navLinks.classList.toggle("show");

  // Update the button label so the user knows what will happen next.
  if (navLinks.classList.contains("show")) {
    menuButton.textContent = "✕ Close";
    menuButton.setAttribute("aria-label", "Close menu");
  } else {
    menuButton.textContent = "☰ Menu";
    menuButton.setAttribute("aria-label", "Open menu");
  }
});

// When a navigation link is clicked on mobile, close the menu again.
var links = document.querySelectorAll("#nav-links a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    navLinks.classList.remove("show");
    menuButton.textContent = "☰ Menu";
    menuButton.setAttribute("aria-label", "Open menu");
  });
}