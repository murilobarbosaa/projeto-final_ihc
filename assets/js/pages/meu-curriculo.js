document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("open-edit-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalOverlay = document.getElementById("edit-modal-overlay");
  const editDataForm = document.getElementById("edit-data-form");
  const profileForm = document.getElementById("profile-form");
  const pretensaoInput = document.getElementById("pretensao");
  const profilePictureContainer = document.getElementById("profile-picture-container");
  const photoModalOverlay = document.getElementById("photo-modal-overlay");
  const closePhotoModalBtn = document.getElementById("close-photo-modal-btn");
  const editPhotoButton = document.getElementById("edit-photo-btn");
  const removePhotoButton = document.getElementById("remove-photo-btn");
  const photoUploadInput = document.getElementById("photo-upload-input");
  const modalTelefone1 = document.getElementById("modal-telefone1");
  const modalTelefone2 = document.getElementById("modal-telefone2");

  const loggedInUserEmailOnLoad = sessionStorage.getItem("loggedInUserEmail");
  if (loggedInUserEmailOnLoad) {
    const allUsersOnLoad = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserOnLoad = allUsersOnLoad.find((user) => user.email === loggedInUserEmailOnLoad);
    if (currentUserOnLoad && currentUserOnLoad.foto) {
      const userPhotoOnLoad = document.getElementById("user-photo");
      userPhotoOnLoad.src = currentUserOnLoad.foto;
      userPhotoOnLoad.style.display = "block";
    }
  }

  function applyPhoneMask(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, "");
    value = value.substring(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    input.value = value;
  }

  function openPhotoModal() {
    const userPhoto = document.getElementById("user-photo");
    const modalPhotoPreview = document.getElementById("modal-photo-preview");
    const photoPlaceholder = document.getElementById("photo-placeholder");
    const currentUserPhotoSrc = userPhoto.getAttribute("src");
    if (currentUserPhotoSrc && userPhoto.style.display !== "none") {
      modalPhotoPreview.src = currentUserPhotoSrc;
      modalPhotoPreview.style.display = "block";
      photoPlaceholder.style.display = "none";
    } else {
      modalPhotoPreview.style.display = "none";
      photoPlaceholder.style.display = "block";
    }
    photoModalOverlay.classList.remove("hidden");
  }

  function closePhotoModal() {
    photoModalOverlay.classList.add("hidden");
  }

  function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const newPhotoSrc = e.target.result;
      document.getElementById("user-photo").src = newPhotoSrc;
      document.getElementById("user-photo").style.display = "block";
      const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userIndex = allUsers.findIndex((user) => user.email === loggedInUserEmail);
      if (userIndex !== -1) {
        allUsers[userIndex].foto = newPhotoSrc;
        localStorage.setItem("users", JSON.stringify(allUsers));
      }
      closePhotoModal();
      showToast("Foto de perfil atualizada!");
    };
    reader.readAsDataURL(file);
  }

  function handlePhotoRemove() {
    const userPhoto = document.getElementById("user-photo");
    userPhoto.src = "";
    userPhoto.style.display = "none";
    const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = allUsers.findIndex((user) => user.email === loggedInUserEmail);
    if (userIndex !== -1) {
      delete allUsers[userIndex].foto;
      localStorage.setItem("users", JSON.stringify(allUsers));
    }
    closePhotoModal();
    showToast("Foto de perfil removida!");
  }

  function openEditModal() {
    const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = allUsers.find((user) => user.email === loggedInUserEmail);
    for (const key in currentUser) {
      const input = editDataForm.querySelector(`[name="${key}"]`);
      if (input) {
        input.value = currentUser[key];
      }
    }
    modalOverlay.classList.remove("hidden");
  }

  function closeModal() {
    modalOverlay.classList.add("hidden");
  }

  function handleModalFormSubmit(event) {
    event.preventDefault();
    const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = allUsers.findIndex((user) => user.email === loggedInUserEmail);
    if (userIndex === -1) return;

    const formData = new FormData(editDataForm);
    const updatedData = Object.fromEntries(formData.entries());
    allUsers[userIndex] = { ...allUsers[userIndex], ...updatedData };
    localStorage.setItem("users", JSON.stringify(allUsers));
    if (typeof populateUserData === "function") {
      populateUserData(allUsers[userIndex]);
    }
    closeModal();
    showToast("Dados básicos atualizados com sucesso!");
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = allUsers.findIndex((user) => user.email === loggedInUserEmail);
    if (userIndex === -1) return;

    const formData = new FormData(profileForm);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.pretensaoBolsa = document.getElementById("pretensao").value.replace(/\D/g, "");
    allUsers[userIndex] = { ...allUsers[userIndex], ...updatedData };
    localStorage.setItem("users", JSON.stringify(allUsers));
    if (typeof populateUserData === "function") {
      populateUserData(allUsers[userIndex]);
    }
    showToast("Perfil atualizado com sucesso!");

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  }

  function showToast(message) {
    const popup = document.createElement("div");
    popup.className = "app-popup success";
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 3500);
  }

  profilePictureContainer.addEventListener("click", openPhotoModal);
  closePhotoModalBtn.addEventListener("click", closePhotoModal);
  photoModalOverlay.addEventListener("click", (event) => {
    if (event.target === photoModalOverlay) closePhotoModal();
  });
  editPhotoButton.addEventListener("click", () => photoUploadInput.click());
  removePhotoButton.addEventListener("click", handlePhotoRemove);
  photoUploadInput.addEventListener("change", handlePhotoUpload);
  profileForm.addEventListener("submit", handleFormSubmit);
  openModalBtn.addEventListener("click", openEditModal);
  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) closeModal();
  });
  editDataForm.addEventListener("submit", handleModalFormSubmit);

  modalTelefone1.addEventListener("input", applyPhoneMask);
  modalTelefone2.addEventListener("input", applyPhoneMask);

  pretensaoInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^0+/, "");
    if (value.length === 0) {
      e.target.value = "";
      return;
    }
    while (value.length < 3) {
      value = "0" + value;
    }
    let integerPart = value.substring(0, value.length - 2);
    let decimalPart = value.substring(value.length - 2);
    if (integerPart.length === 0) {
      integerPart = "0";
    }
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    e.target.value = "R$ " + integerPart + "," + decimalPart;
  });
});
