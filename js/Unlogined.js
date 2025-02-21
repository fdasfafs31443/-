document.addEventListener("DOMContentLoaded", function() {
    const userLoggedIn = localStorage.getItem("loggedInUser");

    if (userLoggedIn === null) {
        // Если пользователь не авторизован, перенаправляем его на страницу входа
        window.location.href = "login.html";
    }
});