let pwdInput = document.querySelector("#pwd");
let toggle = document.querySelector("#pwdToggle");
let eye = document.querySelector(".fa");

function togglePassword() {
  if (pwdInput.getAttribute("type") === "password") {
    pwdInput.setAttribute("type", "text");
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    pwdInput.setAttribute("type", "password");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
}

toggle.addEventListener("click", togglePassword);
