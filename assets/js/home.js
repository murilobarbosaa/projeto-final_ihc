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
  const mandatoryFields = {
    weight: 70,
    fields: ["nome", "email", "estadoCivil", "telefone1", "sexo", "dataNascimento", "pcd"],
  };
  const additionalFields = {
    weight: 30,
    fields: ["foto", "habilidades", "cursoInteresse", "idiomas", "sintese"],
  };
  const calculateProgress = (fieldGroup, userData) => {
    let completed = 0;
    fieldGroup.fields.forEach((field) => {
      if (userData[field] && userData[field] !== "") {
        completed++;
      }
    });
    return (completed / fieldGroup.fields.length) * fieldGroup.weight;
  };
  const totalPercentage = Math.round(calculateProgress(mandatoryFields, user) + calculateProgress(additionalFields, user));

  const progressBarFill = document.querySelector(".progress-bar-fill");
  if (progressBarFill) progressBarFill.style.width = totalPercentage + "%";
  const progressText = document.querySelector(".progress-info .progress-text span:last-child");
  if (progressText) progressText.textContent = totalPercentage + "%";
  const profileStatusText = document.querySelector(".progress-info .progress-text span:first-child");
  if (profileStatusText) profileStatusText.textContent = totalPercentage === 100 ? "Perfil completo!" : "Perfil quase completo";

  const notificationCard = document.getElementById("notificacoes");
  if (notificationCard) {
    notificationCard.style.display = totalPercentage === 100 ? "none" : "block";
  }

  const userNameElement = document.getElementById("user-name");
  if (userNameElement) userNameElement.textContent = user.nome || "Usuário";
  const photoContainer = document.getElementById("profile-picture-container");
  if (photoContainer) {
    photoContainer.innerHTML = "";
    if (user.foto) {
      const photoImgElement = document.createElement("img");
      photoImgElement.id = "user-photo";
      photoImgElement.src = user.foto;
      photoContainer.appendChild(photoImgElement);
    } else {
      const defaultIcon = document.createElement("i");
      defaultIcon.className = "fa-solid fa-user default-user-icon";
      photoContainer.appendChild(defaultIcon);
    }
  }

  for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
      const displayElement = document.getElementById(`display-${key}`);
      if (displayElement) {
        displayElement.textContent = user[key] || "--";
      }

      const inputElement = document.querySelector(`[name="${key}"]`);
      if (inputElement) {
        inputElement.value = user[key] || "";
      }
    }
  }
}
