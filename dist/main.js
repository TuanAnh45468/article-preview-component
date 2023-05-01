const share = document.getElementById("share");
const avatar = document.getElementById("avatar");
const iconShare = document.getElementById("icon-share");
const svgShare = iconShare.nextElementSibling;
const speechBubble = document.querySelector(".speech-bubble");

const handleShareClickMobile = () => {
  avatar.classList.add("hidden");
  share.classList.remove("hidden");
};

const handleShareClickLaptop = () => {
  speechBubble.classList.remove("hidden");
  iconShare.classList.add("bg-grayish-blue");
  svgShare.classList.add("fill-light-grayish-blue");
};

const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
  iconShare.addEventListener("click", handleShareClickMobile);
} else {
  iconShare.removeEventListener("click", handleShareClickMobile);
  iconShare.addEventListener("click", handleShareClickLaptop);
}
