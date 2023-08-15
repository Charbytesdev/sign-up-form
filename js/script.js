const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-btn");
const phoneNumber = document.getElementById("phone-number");

function equalsPasswords(password, confirmPassword) {
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity("");
  } else {
    confirmPassword.setCustomValidity("Passwords do not match.");
  }
}

function preventNonNumeric(e) {
  if (isNaN(parseFloat(e.key))) e.preventDefault();
}

phoneNumber.addEventListener("keypress", (e) => preventNonNumeric(e));

confirmPassword.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);

password.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);
