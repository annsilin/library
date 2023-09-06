const cardForm = document.getElementById("card-form");
const nameInput = document.getElementById("readers-name");
const cardNumberInput = document.getElementById("card-number");

cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardNumber = cardNumberInput.value.trim();
  console.log(cardNumber);
  const foundUser = users.find(user => user.cardNumber === cardNumber.toUpperCase());
  const name = nameInput.value.trim().replace(/\s/g, '').toLowerCase();

  if (foundUser) {
    if (name === foundUser.firstName.toLowerCase() + foundUser.lastName.toLowerCase()) {
      cardForm.style.display = 'none';
      changeReadersCard(foundUser);
      setTimeout(function() {
        document.querySelector(".card-form.filled").style.display = 'none';
        cardForm.style.display = 'flex';
        nameInput.value = "";
        cardNumberInput.value = "";
      }, 10000);
    }
  }

});

const changeReadersCard = (user) => {
  document.querySelector(".card-form.filled").style.display = 'flex';
  document.querySelector(".card-input.filled.name").innerText = user.firstName + " " + user.lastName;
  document.querySelector(".card-input.filled.card").innerText = user.cardNumber;
  document.querySelector(".card-form .modal-profile__info-card-visits").innerText = user.visits;
  document.querySelector(".card-form .modal-profile__info-card-books").innerText = user.books.length;
}
