document.addEventListener("DOMContentLoaded", function () {
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

      e.target.value = integerPart + "," + decimalPart;
    });
  }

  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
      if (!loggedInUserEmail) {
        alert("Erro de sessão. Por favor, faça o login novamente.");
        window.location.href = "../auth/login.html";
        return;
      }

      const formData = new FormData(profileForm);

      const pretensaoValue = document.getElementById("pretensao").value.replace(/\D/g, "");
      formData.set("pretensaoBolsa", pretensaoValue);

      const updatedData = Object.fromEntries(formData.entries());

      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userIndex = allUsers.findIndex((user) => user.email === loggedInUserEmail);

      if (userIndex !== -1) {
        allUsers[userIndex] = { ...allUsers[userIndex], ...updatedData };
        localStorage.setItem("users", JSON.stringify(allUsers));

        const popup = document.createElement("div");
        popup.className = "app-popup success";
        popup.textContent = "Perfil atualizado com sucesso!";
        document.body.appendChild(popup);

        setTimeout(() => {
          popup.remove();
        }, 3500);

        setTimeout(() => {
          window.location.href = "home.html";
        }, 2000);
      } else {
        alert("Erro ao encontrar os dados do usuário.");
      }
    });
  }
});
