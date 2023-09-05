const updateUI = () => {
  // Change profile button icon to first name and last name initials in header
  let btnProfile = document.querySelector(".btn-profile");
  btnProfile.innerHTML = `${Array.from(currentUser.firstName)[0].toUpperCase() + Array.from(currentUser.lastName)[0].toUpperCase()}`;
  btnProfile.style.backgroundColor = '#FFFFFF'

  // Replace sign up and log in buttons with profile button in 'Get Card' section
  document.querySelector(".get-card-buttons-wrapper").style.display = 'none';
  document.getElementById("profile-btn").style.display = 'block';
};

addEventListener("DOMContentLoaded", () => {
  if (currentUser) {
    updateUI();
  }
});
