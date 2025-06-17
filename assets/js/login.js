document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      displayMessage("Login bem-sucedido!", "success");
      setTimeout(() => {
        window.location.href = "../app/home.html";
      }, 1500);
    } else {
      displayMessage("E-mail ou senha inválidos!", "error");
    }
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
