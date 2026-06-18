document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-auth-form]");
  const message = document.querySelector("[data-auth-message]");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      message.textContent = "Completa tu nombre, correo válido y contraseña de 6 caracteres.";
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem("bowlssUser", JSON.stringify({ name: data.name, email: data.email }));
    message.textContent = `Hola, ${data.name}. Tu cuenta Bowlss está lista.`;
  });
});
