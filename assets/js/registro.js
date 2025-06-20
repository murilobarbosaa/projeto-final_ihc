document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    const confirmPassword = document.getElementById("confirma-senha").value;

    if (password !== confirmPassword) {
      displayMessage("As senhas não coincidem!", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      displayMessage("Este e-mail já está cadastrado!", "error");
      return;
    }

    const newUser = {
      email: email,
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    displayMessage("Conta criada com sucesso!", "success");

    setTimeout(function () {
      window.location.href = "login.html";
    }, 2000);
  });

  function displayMessage(message, type) {
    const messageContainer = document.querySelector(".form-message");
    if (!messageContainer) return;

    messageContainer.classList.remove("success", "error");
    messageContainer.classList.add(type);

    messageContainer.textContent = message;

    setTimeout(() => {
      messageContainer.textContent = "";
      messageContainer.classList.remove("success", "error");
    }, 3000);
  }
});
