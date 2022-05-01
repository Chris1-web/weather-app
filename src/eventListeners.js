import convertDataToObject from "./getApi";
import { loaderView, clearView } from "./uiView";

const allEventListeners = function () {
  const searchForm = document.querySelector(".search-form");
  const articleContainer = document.querySelector("article");
  // get search input value
  const getSearchValue = function (e) {
    const searchValue = document.querySelector(".location").value.trim();
    e.preventDefault();
    clearSeachValue();
    // clear all content in article tag
    clearView();
    // show loader
    loaderView();
    convertDataToObject(searchValue, "metric");
  };
  // clear search input value
  const clearSeachValue = function () {
    document.querySelector(".location").value = "";
  };
  // listen to form submit event
  searchForm.addEventListener("submit", getSearchValue);
  articleContainer.addEventListener("click", function (e) {
    const bottomContainer = document.querySelector(".top-button");
    if (!e.target.classList.contains("temp-display")) return;
    const currentCard = e.target.closest(".card");
    const leftSide = currentCard.querySelector(".left-side");
    const cityNameCard = leftSide.querySelector(".city");
    const cityName = cityNameCard.textContent.slice(0, -1).trim();
    // clear all content in article tag
    clearView();
    // show loader
    loaderView();
    if (e.target.textContent === "C") {
      convertDataToObject(cityName, "imperial");
    } else {
      convertDataToObject(cityName, "metric");
    }
  });
};

export default allEventListeners;
