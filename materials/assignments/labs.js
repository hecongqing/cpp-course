(() => {
  const buttons = document.querySelectorAll("[data-lang-option]");
  function setLanguage(language) {
    const lang = language === "zh" ? "zh" : "en";
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
      element.textContent = element.dataset[lang];
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langOption === lang));
    });
    document.title = `${document.querySelector("h1").textContent} · ${lang === "zh" ? "C++程序设计" : "C++ Programming"}`;
    document.querySelector(".language-switch").setAttribute("aria-label", lang === "zh" ? "语言切换" : "Language switch");
    document.querySelector(".section-nav").setAttribute("aria-label", lang === "zh" ? "实验目录" : "Lab sections");
    document.querySelector(".lab-nav").setAttribute("aria-label", lang === "zh" ? "实验导航" : "Lab navigation");
    document.querySelector(".source-code").setAttribute("aria-label", lang === "zh" ? "C++代码框架" : "C++ starter code");
    document.querySelectorAll('.lab-nav a[href^="lab"]').forEach((link) => {
      const url = new URL(link.href);
      url.searchParams.set("lang", lang);
      link.href = url.href;
    });
  }
  buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.langOption)));
  setLanguage(new URLSearchParams(window.location.search).get("lang"));
})();
