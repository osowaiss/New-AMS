const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁" : "🙈";
});




  function loginTeacher() {
    // You can add validation logic here if needed
    window.location.href = "teacher-dashboard.html";
  }

