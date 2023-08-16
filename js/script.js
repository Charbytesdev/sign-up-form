const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-btn");
const phoneNumber = document.getElementById("phone-number");

function equalsPasswords(password, confirmPassword) {
  if (password.value === confirmPassword.value && password.checkValidity()) {
    confirmPassword.setCustomValidity("");
  } else {
    confirmPassword.setCustomValidity("Passwords do not match.");
  }
}

function validatePassword(password) {
  if (password.value.length < 8)
    password.setCustomValidity("Password must be 8 characters or more.");
  else if (!password.value.match(/[a-z]/g)) {
    password.setCustomValidity("Password must include a lowercase Character.");
  } else if (!password.value.match(/[A-Z]/g)) {
    password.setCustomValidity("Password must include an UPPERCASE Character.");
  } else if (!password.value.match(/[0-9]/g)) {
    password.setCustomValidity("Password must include a Number.");
  } else if (!password.value.match(/[!@#$%^&*]/g)) {
    password.setCustomValidity(
      "Password must include a Special Character(!@#$%^&*)."
    );
  } else {
    password.setCustomValidity("");
  }
}

function preventNonNumeric(e) {
  if (isNaN(parseFloat(e.key))) e.preventDefault();
}

phoneNumber.addEventListener("keypress", (e) => preventNonNumeric(e));

confirmPassword.addEventListener("keyup", () =>
  equalsPasswords(password, confirmPassword)
);

password.addEventListener("keyup", () => {
  validatePassword(password);
  equalsPasswords(password, confirmPassword);
});
