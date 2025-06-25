document.addEventListener("DOMContentLoaded", function () {
  const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");

  if (!loggedInUserEmail) {
    window.location.href = "../auth/login.html";
    return;
  }

  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = allUsers.find((user) => user.email === loggedInUserEmail);

  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      sessionStorage.removeItem("loggedInUserEmail");
      window.location.href = "../auth/login.html";
    });
  }

  if (currentUser) {
    populateUserData(currentUser);
  } else {
    sessionStorage.removeItem("loggedInUserEmail");
    window.location.href = "../auth/login.html";
  }
});

function populateUserData(user) {
  const userNameElement = document.getElementById("user-name");
  const photoContainer = document.getElementById("profile-picture-container");
  const photoImgElement = document.getElementById("user-photo");

  if (userNameElement) {
    userNameElement.textContent = user.nome || "Usuário";
  }

  if (photoContainer && photoImgElement) {
    photoContainer.innerHTML = "";

    if (user.foto) {
      photoImgElement.src = user.foto;
      photoImgElement.style.display = "block";
      photoContainer.appendChild(photoImgElement);
    } else {
      const defaultIcon = document.createElement("i");
      defaultIcon.className = "fa-solid fa-user default-user-icon";
      photoContainer.appendChild(defaultIcon);
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
