const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? primaryNav.setAttribute("aria-expanded", "false")
    : primaryNav.setAttribute("aria-expanded", "true");

  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  resopnsive: {
    480: {
      dots: false,
    },
  },
});
