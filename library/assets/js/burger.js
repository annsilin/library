let burgerButton = document.getElementById("burger-button");
let navigation = document.getElementById("navigation");
let navigationMenu = document.getElementById("navigation-menu");
let navigationIcons = document.getElementById("navigation-icons");
let navigationLinks = document.getElementById("navigation__links");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("onclick");
  navigation.classList.toggle("onclick");
  navigationMenu.classList.toggle("onclick");
  navigationIcons.classList.toggle("onclick");
  navigationLinks.classList.toggle("onclick");
})

