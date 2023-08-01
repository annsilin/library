let burgerButton = document.getElementById("burger-button");
let burgerButtonBars = document.getElementsByClassName("burger-button__bar")
let navigation = document.getElementById("navigation");
let navigationMenu = document.getElementById("navigation-menu");
let navigationIcons = document.getElementById("navigation-icons");
let navigationLinks = document.getElementById("navigation__links");

[burgerButton, burgerButtonBars].forEach(e => e.addEventListener("click", () => {
  burgerButton.classList.toggle("onclick");
  navigation.classList.toggle("onclick");
  navigationMenu.classList.toggle("onclick");
  navigationIcons.classList.toggle("onclick");
  navigationLinks.classList.toggle("onclick");
}))

document.onclick = (e) => {
  if (![navigation, navigationMenu, navigationIcons, navigationLinks, burgerButton].includes(e.target)) {
    burgerButton.classList.remove("onclick");
    navigation.classList.remove("onclick");
    navigationMenu.classList.remove("onclick");
    navigationIcons.classList.remove("onclick");
    navigationLinks.classList.remove("onclick");
  }
}
