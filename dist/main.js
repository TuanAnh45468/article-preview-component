const share = document.getElementById("share");
const avatar = document.getElementById("avatar");
const iconShare = document.getElementById("icon-share");

const handleShareClick = () => {
  avatar.classList.add("hidden");
  share.classList.remove("hidden");
};

const mediaQuery = window.matchMedia("(max-width: 1439px)");

if (mediaQuery.matches) {
  console.log("matched");
  iconShare.addEventListener("click", handleShareClick);
} else {
  iconShare.removeEventListener("click", handleShareClick);
}
