const question = document.getElementById("question");
const verifyQuestion = document.getElementById("verifyQuestion");
const nextQuestion = document.getElementById("nextQuestion");
const result = document.getElementById("result");
const soundClick = new Audio("./sons/click.wav");
const soundCorrect = new Audio("./sons/correct.wav");
const soundIncorrect = new Audio("./sons/incorrect.wav");
const hoverSound = new Audio("./sons/hover.wav");

verifyQuestion.disabled = true;
nextQuestion.disabled = true;

let index = 0;
let acertos = 0;
let quantidadePerguntas = perguntasPT.length;

verifyQuestion.addEventListener("click", () => {
  const perguntaAtual = perguntasPT[index];
  const alternativaSelecionada = question.querySelector(".selected");
  const alternativaCorreta = perguntaAtual.resposta;
  const explanation = perguntaAtual.explicacao;
  const motivation = perguntaAtual.motivacao;

  if (alternativaSelecionada.textContent === alternativaCorreta) {
    acertos++;
    soundCorrect.currentTime = 0;
    soundCorrect.play();
    alternativaSelecionada.classList.remove("selected");
    alternativaSelecionada.classList.add("certa");
    result.textContent = `${explanation}`;
    result.classList.remove("resultCSS");
    result.classList.add("resultadoCerto");
  } else {
    soundIncorrect.currentTime = 0;
    soundIncorrect.play();
    alternativaSelecionada.classList.remove("selected");
    alternativaSelecionada.classList.add("errada");
    result.textContent = `${motivation}`;
    result.classList.remove("resultCSS");
    result.classList.add("resultadoErrado");
  }

  const alternativas = question.querySelectorAll(".alternativeCSS");
  alternativas.forEach((desabilitar) => {
    desabilitar.style.pointerEvents = "none";
  });

  nextQuestion.disabled = false;
  verifyQuestion.disabled = true;
});

function mostrarPergunta() {
  if (index >= perguntasPT.length) {
    question.innerHTML = "";
    const resultDIV = document.createElement("div");
    question.appendChild(resultDIV);
    resultDIV.classList.add("resultDivCSS");

    resultDIV.textContent = `Você acertou ${acertos} pergunta(s)`;

    result.innerHTML = "";
    result.textContent = "Teste encerrado";
    result.classList.remove("resultadoCerto", "resultadoErrado", "resultCSS");
    result.classList.add("finalCSS");
    verifyQuestion.disabled = true;
    nextQuestion.disabled = true;

    return;
  }

  question.innerHTML = "";
  result.textContent = "";
  result.classList.remove("resultadoCerto", "resultadoErrado");
  result.classList.add("resultCSS");
  verifyQuestion.disabled = true;
  nextQuestion.disabled = true;
  const perguntaAtual = perguntasPT[index];
  const questionDIV = document.createElement("div");
  questionDIV.classList.add("questionDivCSS");
  const enunciado = document.createElement("p");
  enunciado.textContent = perguntaAtual.pergunta;
  enunciado.classList.add("enunciadoCSS");

  questionDIV.appendChild(enunciado);
  question.appendChild(questionDIV);

  perguntaAtual.alternativas.forEach((alternativa) => {
    const alternativaP = document.createElement("p");
    alternativaP.textContent = alternativa;
    alternativaP.classList.add("alternativeCSS");
    questionDIV.appendChild(alternativaP);

    alternativaP.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });

    alternativaP.addEventListener("click", () => {
      const unclick = questionDIV.querySelectorAll(".alternativeCSS");
      soundClick.currentTime = 0;
      soundClick.play();

      unclick.forEach((deletar) => {
        deletar.classList.remove("selected");
      });

      alternativaP.classList.add("selected");
      verifyQuestion.disabled = false;
    });
  });
}

nextQuestion.addEventListener("click", () => {
  index++;
  return mostrarPergunta();
});

mostrarPergunta();
