document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const submitButton = document.querySelector("#btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please fill out all fields!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        window.location.href = "resume.html";
    });

    emailInput.addEventListener("input", () => {
        emailInput.style.borderColor = validateEmail(emailInput.value.trim()) ? "green" : "red";
    });

    passwordInput.addEventListener("input", () => {
        passwordInput.style.borderColor = validatePassword (passwordInput.value.trim()) ? "green" : "red";
    });

    function validateEmail(email) {
        const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return check.test(email);
    }
});
