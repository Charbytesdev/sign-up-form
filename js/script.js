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

phoneNumber.addEventListener("keypress", (e) => {
  if (isNaN(parseFloat(e.key))) e.preventDefault();
});

confirmPassword.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);

password.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);
