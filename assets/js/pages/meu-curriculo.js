document.addEventListener("DOMContentLoaded", function () {
  const profileForm = document.getElementById("profile-form");

  if (profileForm) {
    profileForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
      if (!loggedInUserEmail) {
        alert("Erro: Sessão não encontrada. Faça o login novamente.");
        return;
      }

      const formData = new FormData(profileForm);
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
