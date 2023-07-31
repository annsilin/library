function toggleBurger() {
  let burgerButton = document.getElementById("burger-button");
  let navigation = document.getElementById("navigation");
  let burgerButtonClose = document.getElementById("burger-button-close");
  let navigationMenu = document.getElementById("navigation-menu");
  let navigationIcons = document.getElementById("navigation-icons");
  let navigationLinks = document.getElementById("navigation__links");

  if (burgerButton.className === "burger-button") {
    burgerButton.className += " onclick";
  }
  else {
    burgerButton.className = "burger-button";
  }

  if (navigation.className === "navigation") {
    navigation.className += " onclick";
  }
  else {
    navigation.className = "navigation";
  }

  if (burgerButtonClose.className === "burger-button-close") {
    burgerButtonClose.className += " onclick";
  }
  else {
    burgerButtonClose.className = "burger-button-close";
  }

  if (navigationMenu.className === "navigation-menu") {
    navigationMenu.className += " onclick";
  }
  else {
    navigationMenu.className = "navigation-menu";
  }

  if (navigationIcons.className === "navigation-icons") {
    navigationIcons.className += " onclick";
  }
  else {
    navigationIcons.className = "navigation-icons";
  }

  if (navigationLinks.className === "navigation__links") {
    navigationLinks.className += " onclick";
  }
  else {
    navigationLinks.className = "navigation__links";
  }
}
