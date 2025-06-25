document.addEventListener("DOMContentLoaded", function () {
  // 1. Pega o email do usuário que está na sessão
  const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");

  if (!loggedInUserEmail) {
    window.location.href = "../auth/login.html";
    return;
  }

  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = allUsers.find((user) => user.email === loggedInUserEmail);

  if (currentUser) {
    populateUserData(currentUser);
  } else {
    sessionStorage.removeItem("loggedInUserEmail");
    window.location.href = "../auth/login.html";
  }
});

function populateUserData(user) {
  const userNameElement = document.getElementById("user-name");
  const userPhotoElement = document.getElementById("user-photo");

  if (userNameElement) {
    userNameElement.textContent = user.nome || "Usuário";
  }

  if (userPhotoElement) {
    if (user.foto) {
      userPhotoElement.src = user.foto;
    } else {
      userPhotoElement.src = "../assets/images/user-default.png";
    }
  }

  const displayNameElement = document.getElementById("display-nome");
  const displayEmailElement = document.getElementById("display-email");

  if (displayNameElement) {
    displayNameElement.textContent = user.nome || "--";
  }
  if (displayEmailElement) {
    displayEmailElement.textContent = user.email || "--";
  }
}
