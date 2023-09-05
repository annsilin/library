let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = users.find(users => users.isLoggedIn === true);

