
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario
      
        // Obtiene los valores de usuario y contraseña
        let username = document.getElementById("email").value;
        let password = document.getElementById("pass").value;
      
        // Comprueba las credenciales (¡Aquí debes implementar tu lógica de autenticación!)
        if (username === "user@wallet.cl" && password === "1234") {
          // Credenciales correctas, redirige a la página de menú
          window.location.href = "menu.html";
        } else {
          // Credenciales incorrectas, muestra un mensaje de error
          document.getElementById("errorMessage").style.display = "block";
        }
      });


      