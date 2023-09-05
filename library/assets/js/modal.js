const modalProfile = document.querySelector(".modal-profile");
const modalSignUp = document.querySelector(".modal-register");
const modalSignIn = document.querySelector(".modal-login");
const modalBuyCard = document.querySelector(".modal-buy-card");
const overlay = document.querySelector(".overlay");
const signUpBtns = document.querySelectorAll(".sign-up");
const signInBtns = document.querySelectorAll(".log-in");
const profileBtns = document.querySelectorAll(".my-profile");
const closeBtns = document.querySelectorAll(".btn-close");
const modals = [modalProfile, modalSignUp, modalSignIn, modalBuyCard];

signUpBtns.forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal(modals);
    openModal(modalSignUp);
  });
});

signInBtns.forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal(modals);
    openModal(modalSignIn);
  });
});

profileBtns.forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal(modals);
    openModal(modalProfile);
  });
});

/* Close modals upon clicking on close button or overlay */
[...closeBtns, overlay].forEach(button => {
  button.addEventListener("click", () => {
    closeModal(modals);
  })
});

/* Helper function to open modal */
const openModal = (modal) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

/* Helper function to close modal */
const closeModal = (modals) => {
  modals.forEach(modal => {modal.classList.add("hidden")});
  overlay.classList.add("hidden");
}
