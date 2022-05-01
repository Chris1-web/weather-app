import githubIcon from "./icons/github.png";
import searchIcon from "./icons/search.png";

const loadImages = function () {
  const footerIcon = document.querySelector(".contact-github-icon");
  const searchButton = document.querySelector(".search-icon");
  footerIcon.src = githubIcon;
  searchButton.src = searchIcon;
};

export default loadImages;
