document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const switchToRegister = document.getElementById("switchToRegister");
    const switchToLogin = document.getElementById("switchToLogin");
    const loginEmailInput = document.getElementById("loginEmail");
    const loginPasswordInput = document.getElementById("loginPassword");
    const registerNameInput = document.getElementById("registerName");
    const registerEmailInput = document.getElementById("registerEmail");
    const registerPasswordInput = document.getElementById("registerPassword");
    const loginBtn = document.getElementById("loginBtn");
    const logOutBtn = document.getElementById("logOutBtn");
    const registerBtn = document.getElementById("registerBtn");

    // Функция для получения пользователей из localStorage
    function getUsers() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users;
    }

    // Функция для сохранения пользователей в localStorage
    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Проверяем, существует ли пользователь в localStorage при загрузке страницы
    if (localStorage.getItem("loggedInUser")) {
    } else {
        loginForm.style.display = "block";
    }

    switchToRegister.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    switchToLogin.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    loginBtn.addEventListener("click", function() {
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;
        const users = getUsers();

        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = "index.html";
        } else {
            alert("Неверный email или пароль. Пожалуйста, попробуйте снова.");
        }
    });



    registerBtn.addEventListener("click", function() {
        if (!registerNameInput.value || !registerEmailInput.value || !registerPasswordInput.value) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        const users = getUsers();
        if (users.find(u => u.email === registerEmailInput.value)) {
            alert("Пользователь с таким email уже существует.");
            return;
        }

        const newUser = {
            name: registerNameInput.value,
            email: registerEmailInput.value,
            password: registerPasswordInput.value
        };

        users.push(newUser);
        saveUsers(users);
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        window.location.href = "index.html";
        alert("Регистрация прошла успешно");

    });
});
