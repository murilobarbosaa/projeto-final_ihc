document.addEventListener("DOMContentLoaded", function () {
  // Pega o email do usuário que está na sessão do navegador
  const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");

  // Se não encontrar um usuário na sessão, protege a página e redireciona para o login
  if (!loggedInUserEmail) {
    window.location.href = "../auth/login.html";
    return; // Para a execução do script
  }

  // Carrega a lista de todos os usuários salvos no localStorage
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Encontra os dados do usuário que está logado atualmente
  const currentUser = allUsers.find((user) => user.email === loggedInUserEmail);

  // Lógica do Botão de Logout
  const logoutButton = document.getElementById("logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      // Remove a informação do usuário da sessão, efetivamente "deslogando"
      sessionStorage.removeItem("loggedInUserEmail");
      // Redireciona de volta para a página de login
      window.location.href = "../auth/login.html";
    });
  }

  if (currentUser) {
    // Se encontrou os dados do usuário, chama a função para preencher a página
    populateUserData(currentUser);
  } else {
    // Se não encontrou (por alguma inconsistência), força o logout
    sessionStorage.removeItem("loggedInUserEmail");
    window.location.href = "../auth/login.html";
  }
});

/**
 * Preenche os elementos da página com os dados do usuário.
 * @param {object} user - O objeto do usuário contendo nome, email, foto, etc.
 */
function populateUserData(user) {
  // --- Preenche a Sidebar (comum a todas as páginas) ---
  const userNameElement = document.getElementById("user-name");
  const photoContainer = document.getElementById("profile-picture-container");
  const photoImgElement = document.getElementById("user-photo");

  // Preenche o nome do usuário
  if (userNameElement) {
    userNameElement.textContent = user.nome || "Usuário";
  }

  // Lógica para exibir a foto ou o ícone padrão
  if (photoContainer && photoImgElement) {
    // Limpa qualquer conteúdo anterior do container (como um ícone antigo)
    photoContainer.innerHTML = "";

    if (user.foto) {
      // Se o usuário TEM uma foto salva
      photoImgElement.src = user.foto;
      photoImgElement.style.display = "block"; // Garante que a tag <img> esteja visível
      photoContainer.appendChild(photoImgElement); // Adiciona a imagem de volta
    } else {
      // Se o usuário NÃO tem foto, cria e insere um ícone
      const defaultIcon = document.createElement("i");
      defaultIcon.className = "fa-solid fa-user default-user-icon"; // Classes do Font Awesome e nossa classe customizada
      photoContainer.appendChild(defaultIcon);
    }
  }

  // --- Preenche os dados específicos da página "Meu Currículo" (se os elementos existirem) ---
  const displayNameElement = document.getElementById("display-nome");
  const displayEmailElement = document.getElementById("display-email");

  if (displayNameElement) {
    displayNameElement.textContent = user.nome || "--";
  }
  if (displayEmailElement) {
    displayEmailElement.textContent = user.email || "--";
  }
}
