document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forgot-password-form");
  const instructionText = document.getElementById("form-instruction");
  const emailInput = document.getElementById("email");
  const newPasswordSection = document.getElementById("new-password-section");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const mainButton = document.getElementById("main-button");
  const messageContainer = document.getElementById("form-message");

  let formStep = "verify_email";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (formStep === "verify_email") {
      handleVerifyEmail();
    } else if (formStep === "reset_password") {
      handleResetPassword();
    }
  });

  function handleVerifyEmail() {
    const email = emailInput.value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      displayMessage("E-mail encontrado! Defina sua nova senha.", "success");
      instructionText.textContent = "Crie sua nova senha";
      emailInput.readOnly = true;
      mainButton.textContent = "Redefinir Senha";
      newPasswordSection.classList.remove("hidden");
      formStep = "reset_password";
    } else {
      displayMessage("E-mail não cadastrado em nosso sistema.", "error");
    }
  }

  function handleResetPassword() {
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword.length < 6) {
      displayMessage("A nova senha deve ter no mínimo 6 caracteres.", "error");
      return;
    }

    if (newPassword !== confirmPassword) {
      displayMessage("As novas senhas não coincidem.", "error");
      return;
    }

    const email = emailInput.value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      displayMessage("Senha redefinida com sucesso!", "success");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } else {
      displayMessage("Ocorreu um erro. Tente novamente.", "error");
    }
  }

  function displayMessage(message, type) {
    messageContainer.className = `form-message ${type}`;
    messageContainer.textContent = message;

    setTimeout(() => {
      messageContainer.textContent = "";
      messageContainer.classList.remove("success", "error");
    }, 3000);
  }
});
