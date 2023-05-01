const share = document.getElementById("share");
const avatar = document.getElementById("avatar");
const iconShare = document.getElementById("icon-share");
const svgShare = document.querySelector("#icon-share svg");
const speechBubble = document.querySelector(".speech-bubble");

const handleShareClickMobile = () => {
  avatar.classList.add("hidden");
  share.classList.remove("hidden");
};

const handleShareClickLaptop = () => {
  speechBubble.classList.remove("hidden");
  iconShare.classList.add("bg-dark-grayish-blue");
  svgShare.classList.remove("fill-dark-grayish-blue");
  svgShare.classList.add("fill-light-grayish-blue");
};

const mediaQuery = window.matchMedia("(max-width: 1439px)");

const handleResize = () => {
  if (mediaQuery.matches) {
    iconShare.classList.remove("bg-dark-grayish-blue");
    iconShare.removeEventListener("click", handleShareClickLaptop);
    iconShare.addEventListener("click", handleShareClickMobile);
    speechBubble.classList.add("hidden");
    iconShare.classList.remove("bg-grayish-blue");
    svgShare.classList.remove("fill-light-grayish-blue");
  } else {
    share.classList.add("hidden");
    avatar.classList.remove("hidden");
    iconShare.removeEventListener("click", handleShareClickMobile);
    iconShare.addEventListener("click", handleShareClickLaptop);
  }
};

//Initial set up based on screen size
handleResize();

//Add resize listener
window.addEventListener("resize", handleResize);
