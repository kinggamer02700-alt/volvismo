import { damagePlayer, healPlayer } from "./ui.js";

const questions = [
    {
        q: "O que é volvismo?",
        a: "movimento"
    },
    {
        q: "Qual o objetivo do volvismo?",
        a: "dinamica"
    },
    {
        q: "Volvismo está ligado a qual conceito?",
        a: "interacao"
    }
];

let currentQuestion = null;

export function triggerQuestion() {
    const box = document.getElementById("quizBox");
    const qText = document.getElementById("question");

    currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    qText.innerText = currentQuestion.q;
    box.style.display = "block";
}

window.submitAnswer = function() {
    const input = document.getElementById("answer");
    const answer = input.value.toLowerCase();

    if (!currentQuestion) return;

    if (answer.includes(currentQuestion.a)) {
        alert("Acertou! +vida");
        healPlayer(10);
    } else {
        alert("Errou! -vida");
        damagePlayer(20);
    }

    input.value = "";
    document.getElementById("quizBox").style.display = "none";
};
