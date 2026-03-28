const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-nav]");

if (navToggle && siteNav) {
  const closeNav = () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });
}

const filterButtons = document.querySelectorAll("[data-filter-button]");
const filterCards = document.querySelectorAll("[data-filter-card]");

if (filterButtons.length && filterCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filterButton;

      filterButtons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", String(item === button));
      });

      filterCards.forEach((card) => {
        const category = card.dataset.category;
        card.hidden = filter !== "all" && category !== filter;
      });
    });
  });
}

document.querySelectorAll(".current-year").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
