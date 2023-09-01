const profileBtn = document.querySelector(".btn-profile");
const profileMenu = document.querySelector(".drop-menu-profile-no-auth");

profileBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  e.stopPropagation();
  profileMenu.classList.toggle("drop-menu-profile-active");
});

document.addEventListener("click", (e) => {
  if (!profileMenu.contains(e.target)) {
    profileMenu.classList.remove("drop-menu-profile-active");
  }
});
