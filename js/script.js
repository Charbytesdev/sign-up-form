const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-btn");

function equalsPasswords(password, confirmPassword) {
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity("");
  } else {
    confirmPassword.setCustomValidity("Passwords Must be Matching.");
  }
}

confirmPassword.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);

password.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);
