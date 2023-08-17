(function () {
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
      password.setCustomValidity(
        "Password must include a lowercase Character."
      );
    } else if (!password.value.match(/[A-Z]/g)) {
      password.setCustomValidity(
        "Password must include an UPPERCASE Character."
      );
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
})();

//Audio
let isMuted = true;

const backgroundMusic = document.querySelector("#background-music");
const buttonClickAudio = document.querySelector("#button-click-audio");
const allButtons = document.querySelectorAll("button");
const soundButton = document.querySelector("#sound-button");

allButtons.forEach((button) =>
  button.addEventListener("click", () => playSoundEffect(buttonClickAudio))
);

soundButton.addEventListener("click", changeAudioState);

function playBackgroundMusic() {
  if (!isMuted) {
    backgroundMusic.volume = 0.1;
    backgroundMusic.play();
  }
}

function pauseBackgroundMusic() {
  backgroundMusic.pause();
}

function playSoundEffect(audio) {
  audio.currentTime = 0;
  audio.play();
}

function muteSoundEffect(audio) {
  audio.muted = true;
}

function unmuteSoundEffect(audio) {
  audio.muted = false;
}

function changeSoundImage(soundImage) {
  if (soundImage.src.includes("/unmuted.png")) {
    soundImage.src = soundImage.src.replace("/unmuted", "/muted");
  } else {
    soundImage.src = soundImage.src.replace("/muted", "/unmuted");
  }
}

function changeAudioState() {
  if (!isMuted) {
    isMuted = true;
    pauseBackgroundMusic();
    muteSoundEffect(buttonClickAudio);
  } else {
    isMuted = false;
    backgroundMusic.play();
    unmuteSoundEffect(buttonClickAudio);
  }
  changeSoundImage(soundButton);
}
