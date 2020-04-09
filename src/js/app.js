const home = document.getElementById("home");
const second = document.getElementById("second");

const explorationBlock = document.getElementsByClassName("exploration")[0];
const scrollIndicator = document.getElementById("scroll-indicator");

const hideHomeElementClassName = "hide-section";

const siteOpen = () => {
  setHandlersToSiteElements();
  home.style.display = "flex";
};

const setHandlersToSiteElements = () => {
  scrollIndicator.addEventListener("click", hideHomeShowSecond);
};

const hideHomeShowSecond = () => {
  explorationBlock.classList.add(hideHomeElementClassName);
  scrollIndicator.classList.add(hideHomeElementClassName);
  home.classList.add(hideHomeElementClassName);
  setTimeout(() => {
    home.style.display = "none";
    second.style.display = "flex";
    second.classList.add("show-section");
  }, 2000);
};

siteOpen();
