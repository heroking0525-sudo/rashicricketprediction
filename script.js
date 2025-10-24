let timeLeft = 60;
const timerDisplay = document.getElementById("timer");
const joinBtn = document.querySelector(".join-btn");

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerDisplay.textContent = "Ready!";
    joinBtn.textContent = "Get Tips Now";
    joinBtn.classList.remove("fade");
  }
}, 1000);
