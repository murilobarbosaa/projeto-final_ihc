document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const successMessage = document.createElement("div");
    successMessage.classList.add("success-popup");
    successMessage.textContent = "Conta criada com sucesso!";

    document.body.appendChild(successMessage);

    setTimeout(function () {
      window.location.href = "login.html";
    }, 2000);
  });
});
