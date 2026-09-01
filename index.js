const startQuiz = document.getElementById("startQuiz");
const buttonRunners = document.getElementById("runners");

const runnerSound = new Audio("./sons/runners.mp3");

function runnersAudio() {
  runnerSound.currentTime = 0;
  runnerSound.play();
  startQuiz.style.display = "inline-block";
}

buttonRunners.addEventListener("click", runnersAudio);
