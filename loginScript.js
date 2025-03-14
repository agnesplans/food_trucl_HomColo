document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos del DOM
    const loginForm = document.getElementById("loginForm"); // Formulario de login
    const usernameInput = document.getElementById("username"); // Input del nombre de usuario
    const passwordInput = document.getElementById("password"); // Input de la contraseña
    const cancelButton = document.getElementById("cancelButton"); // Botón de cancelar
    const logoutButton = document.getElementById("logoutButton");
    const welcomeMessage = document.createElement("span"); // Mensaje de bienvenida

    // Añadir el mensaje de bienvenida a la navbar
    const navbar = document.querySelector(".navbar-nav");
    welcomeMessage.classList.add("navbar-text", "ms-3"); // Volvemos a los estilos básicos
    navbar.appendChild(welcomeMessage);

    // Manejar el envío del formulario
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar que el formulario se envíe

        const username = usernameInput.value.trim(); // Obtener el valor del input de usuario
        const password = passwordInput.value.trim(); // Obtener el valor del input de contraseña

        if (username && password) {
            // Mostrar el mensaje de bienvenida en la navbar
            welcomeMessage.textContent = `Benvingut ${username}`;
            
            // Cerrar el modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
            modal.hide();
            loginForm.reset();
        } else {
            alert("Si us plau, introdueix un nom d'usuari i contrasenya."); // Validación si los campos están vacíos
        }
    });

    // Manejar el clic en el botón de cancelar
    cancelButton.addEventListener("click", function () {
        // Limpiar todos los campos del formulario
        loginForm.reset();
    });

    // Manejar el clic en el botón de logout
    logoutButton.addEventListener("click", function() {
        // Eliminar el mensaje de bienvenida
        welcomeMessage.textContent = "";
        // Limpiar los campos del formulario por si acaso
        loginForm.reset();
    });
});