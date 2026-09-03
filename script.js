(() => {
  const languageButtons = document.querySelectorAll("[data-lang-option]");
  const translatableElements = document.querySelectorAll("[data-en][data-zh]");
  const responsiveCells = document.querySelectorAll("[data-label-en][data-label-zh]");
  const translatableAriaLabels = document.querySelectorAll("[data-aria-en][data-aria-zh]");
  const navigationLinks = document.querySelectorAll(".sidebar-nav a");
  const observedSections = document.querySelectorAll(".anchor-section");

  function setLanguage(language) {
    const nextLanguage = language === "zh" ? "zh" : "en";

    document.documentElement.lang = nextLanguage === "zh" ? "zh-CN" : "en";
    document.title = nextLanguage === "zh" ? "C++程序设计" : "C++ Programming";

    translatableElements.forEach((element) => {
      element.textContent = element.dataset[nextLanguage];
    });

    responsiveCells.forEach((cell) => {
      cell.dataset.label = cell.dataset[`label${nextLanguage === "zh" ? "Zh" : "En"}`];
    });

    translatableAriaLabels.forEach((element) => {
      element.setAttribute("aria-label", element.dataset[`aria${nextLanguage === "zh" ? "Zh" : "En"}`]);
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.langOption === nextLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelector(".language-switch")?.setAttribute(
      "aria-label",
      nextLanguage === "zh" ? "语言切换" : "Language switch"
    );
    document.querySelector(".course-sidebar")?.setAttribute(
      "aria-label",
      nextLanguage === "zh" ? "课程导航" : "Course navigation"
    );
    document.querySelector(".sidebar-nav")?.setAttribute(
      "aria-label",
      nextLanguage === "zh" ? "主要导航" : "Primary navigation"
    );
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langOption));
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        navigationLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.45] }
    );

    observedSections.forEach((section) => observer.observe(section));
  }

  // English is intentionally the default on every fresh page load.
  setLanguage("en");
})();
