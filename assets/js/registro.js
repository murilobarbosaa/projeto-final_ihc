document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");
  let userPhotoBase64 = null;

  const dataNascimentoInput = document.getElementById("data-nascimento");
  if (dataNascimentoInput) {
    dataNascimentoInput.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      value = value.substring(0, 8);

      if (value.length > 4) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4) + "/" + value.substring(4);
      } else if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
      }

      e.target.value = value;
    });
  }

  const passwordInput = document.getElementById("senha");
  const passwordValidationMessage = document.getElementById("password-validation-message");
  let isPasswordValid = false;

  if (passwordInput && passwordValidationMessage) {
    passwordInput.addEventListener("input", function () {
      const password = passwordInput.value;

      const hasMinLength = password.length >= 8;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);

      passwordValidationMessage.innerHTML = `
                <ul>
                    <li class="${hasMinLength ? "valid" : "invalid"}">Mínimo de 8 caracteres</li>
                    <li class="${hasSpecialChar ? "valid" : "invalid"}">Um caractere especial (ex: !@#$)</li>
                    <li class="${hasUpperCase ? "valid" : "invalid"}">Pelo menos uma letra maiúscula</li>
                </ul>
            `;

      isPasswordValid = hasMinLength && hasSpecialChar && hasUpperCase;
    });
  }

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

    if (!isPasswordValid) {
      displayMessage("A senha não atende aos requisitos mínimos.", "error");
      return;
    }

    const password = document.getElementById("senha").value;
    const confirmPassword = document.getElementById("confirma-senha").value;

    if (password !== confirmPassword) {
      displayMessage("As senhas não coincidem!", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const email = document.getElementById("email").value;
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      displayMessage("Este e-mail já está cadastrado!", "error");
      return;
    }

    const newUser = {
      nome: document.getElementById("nome-completo").value,
      nomeSocial: document.getElementById("nome-social").value,
      email: email,
      estadoCivil: document.getElementById("estado-civil").value,
      telefone1: document.getElementById("telefone1").value,
      telefone2: document.getElementById("telefone2").value,
      sexo: document.getElementById("sexo").value,
      dataNascimento: document.getElementById("data-nascimento").value,
      raca: document.getElementById("raca").value,
      comoSoube: document.getElementById("como-soube").value,
      pcd: document.getElementById("pcd").value,
      password: password,
      foto: userPhotoBase64,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    displayMessage("Conta criada com sucesso! Redirecionando...", "success");
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
      messageContainer.classList.remove("success", "error");
    }, 3000);
  }
});
