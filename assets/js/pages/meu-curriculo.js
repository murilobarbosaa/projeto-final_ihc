document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("open-edit-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalOverlay = document.getElementById("edit-modal-overlay");
  const editDataForm = document.getElementById("edit-data-form");

  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", handleFormSubmit);
  }

  if (openModalBtn) {
    openModalBtn.addEventListener("click", openEditModal);
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (event) {
      if (event.target === modalOverlay) {
        closeModal();
      }
    });
  }
  if (editDataForm) {
    editDataForm.addEventListener("submit", handleModalFormSubmit);
  }

  function openEditModal() {
    const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = allUsers.find((user) => user.email === loggedInUserEmail);

    if (currentUser && editDataForm) {
      for (const key in currentUser) {
        const input = editDataForm.querySelector(`[name="${key}"]`);
        if (input) {
          input.value = currentUser[key];
        }
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

    if (userIndex !== -1) {
      const formData = new FormData(editDataForm);
      const updatedData = Object.fromEntries(formData.entries());

      allUsers[userIndex] = { ...allUsers[userIndex], ...updatedData };
      localStorage.setItem("users", JSON.stringify(allUsers));

      populateUserData(allUsers[userIndex]);
      closeModal();
      showToast("Dados básicos atualizados com sucesso!");
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = allUsers.findIndex((user) => user.email === loggedInUserEmail);

    if (userIndex !== -1) {
      const formData = new FormData(profileForm);
      const updatedData = Object.fromEntries(formData.entries());

      const pretensaoValue = document.getElementById("pretensao").value.replace(/\D/g, "");
      updatedData.pretensaoBolsa = pretensaoValue;

      allUsers[userIndex] = { ...allUsers[userIndex], ...updatedData };
      localStorage.setItem("users", JSON.stringify(allUsers));

      populateUserData(allUsers[userIndex]);
      showToast("Perfil atualizado com sucesso!");

      setTimeout(() => {}, 2000);
    }
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

  const pretensaoInput = document.getElementById("pretensao");
  if (pretensaoInput) {
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
  }
});
