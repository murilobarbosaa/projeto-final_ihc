document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");
  let userPhotoBase64 = null;

  // Lógica para o campo de upload de foto
  const fotoUploadInput = document.getElementById("foto-upload");
  if (fotoUploadInput) {
    fotoUploadInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          userPhotoBase64 = e.target.result;
          document.querySelector(".nome-arquivo").textContent = file.name;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome-completo").value;
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
      nome: nome,
      email: email,
      password: password,
      foto: userPhotoBase64,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    displayMessage("Conta criada com sucesso!", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });

  function displayMessage(message, type) {
    const messageContainer = document.querySelector(".form-message");
    if (!messageContainer) return;
    messageContainer.className = `form-message ${type}`;
    messageContainer.textContent = message;
    setTimeout(() => {
      messageContainer.textContent = "";
    }, 3000);
  }
});
