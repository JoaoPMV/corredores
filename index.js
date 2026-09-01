const startQuiz = document.getElementById("startQuiz");
const buttonRunners = document.getElementById("runners");

const runnerSound = new Audio("./audios/runners.mp3");

function runnersAudio() {
  startQuiz.style.display = "none"; // garante que começa escondido
  runnerSound.currentTime = 0;
  runnerSound.play();
}

runnerSound.addEventListener("ended", () => {
  startQuiz.style.display = "inline-block";
});

buttonRunners.addEventListener("click", runnersAudio);
