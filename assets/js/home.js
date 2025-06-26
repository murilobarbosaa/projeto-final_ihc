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

  function calculateProgress(fieldGroup, userData) {
    let completed = 0;
    fieldGroup.fields.forEach((field) => {
      if (userData[field] && userData[field] !== "") {
        completed++;
      }
    });
    const percentage = (completed / fieldGroup.fields.length) * fieldGroup.weight;
    return percentage;
  }

  const mandatoryProgress = calculateProgress(mandatoryFields, user);
  const additionalProgress = calculateProgress(additionalFields, user);
  const totalPercentage = Math.round(mandatoryProgress + additionalProgress);

  const progressBarFill = document.querySelector(".progress-bar-fill");
  const progressText = document.querySelector(".progress-info .progress-text span:last-child");
  const profileStatusText = document.querySelector(".progress-info .progress-text span:first-child");

  if (progressBarFill) {
    progressBarFill.style.width = totalPercentage + "%";
  }
  if (progressText) {
    progressText.textContent = totalPercentage + "%";
  }
  if (profileStatusText) {
    if (totalPercentage === 100) {
      profileStatusText.textContent = "Perfil completo!";
    } else {
      profileStatusText.textContent = "Perfil quase completo";
    }
  }

  const notificationCard = document.getElementById("notificacoes");
  if (notificationCard) {
    if (totalPercentage === 100) {
      notificationCard.style.display = "none";
    } else {
      notificationCard.style.display = "block";
    }
  }

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
}
