document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const togglePasswordBtn = document.getElementById("toggle-password");
  const successMessage = document.getElementById("success-message");

  togglePasswordBtn.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    togglePasswordBtn.setAttribute("aria-pressed", String(isPassword));
    togglePasswordBtn.setAttribute(
      "aria-label",
      isPassword ? "Ocultar senha" : "Mostrar senha"
    );
  });

  function showError(input, errorEl, message) {
    input.classList.add("input-error");
    errorEl.textContent = message;
    errorEl.classList.add("is-visible");
  }

  function clearError(input, errorEl) {
    input.classList.remove("input-error");
    errorEl.textContent = "";
    errorEl.classList.remove("is-visible");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let hasError = false;

    if (usernameInput.value.trim() === "") {
      showError(usernameInput, usernameError, "Digite seu e-mail ou usuário.");
      hasError = true;
    } else {
      clearError(usernameInput, usernameError);
    }

    if (passwordInput.value.trim() === "") {
      showError(passwordInput, passwordError, "Digite sua senha.");
      hasError = true;
    } else {
      clearError(passwordInput, passwordError);
    }

    if (hasError) {
      successMessage.hidden = true;
      return;
    }

    form.hidden = true;
    successMessage.hidden = false;
  });
});