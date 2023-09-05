const profileBtn = document.querySelector(".btn-profile");
let profileMenu = document.getElementById("drop-menu-profile-no-auth");

if (currentUser) {
  profileMenu = document.getElementById("drop-menu-profile-auth");
  document.getElementById("drop-menu-profile-card-number").innerText = currentUser.cardNumber;
}

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileMenu.classList.toggle("drop-menu-profile-active");
});

document.addEventListener("click", (e) => {
  if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
    profileMenu.classList.remove("drop-menu-profile-active");
  }
}, { capture: true });
