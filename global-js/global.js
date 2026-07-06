/* ==================================================
   GLOBAL THEME PERSISTENCE
   ================================================== */

(() => {
  const savedTheme = localStorage.getItem("mashaletheme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
})();

const rtlToggle = document.getElementById("rtlToggle");
const rtlLabel = document.getElementById("rtlLabel");

function updateRTLLabel() {
  if (document.documentElement.dir === "rtl") {
    rtlLabel.textContent = "RTL";
  } else {
    rtlLabel.textContent = "LTR";
  }
}

// toggle direction
rtlToggle?.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.getAttribute("dir") === "rtl") {
    html.setAttribute("dir", "ltr");
    localStorage.setItem("dir", "ltr");
  } else {
    html.setAttribute("dir", "rtl");
    localStorage.setItem("dir", "rtl");
  }

  updateRTLLabel(); // update after toggle
});

// initial load
updateRTLLabel();
/* =========================
   CLOSE MOBILE MENU ON LINK CLICK
========================= */

const mobileLinks = document.querySelectorAll(".mobile-menu .mob-link");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");
    navBurger.classList.remove("open");
    navBurger.setAttribute("aria-expanded", "false");

    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");

  });
});

function updateForceLightGold() {
    const color =
        document.documentElement.dataset.theme === "light"
            ? "#5A4300"
            : "#CFA96E";

    document.querySelectorAll(".force-light-gold").forEach(el => {
        el.style.setProperty("color", color, "important");
    });
}

updateForceLightGold();

new MutationObserver(updateForceLightGold).observe(
    document.documentElement,
    {
        attributes: true,
        attributeFilter: ["data-theme"]
    }
);
