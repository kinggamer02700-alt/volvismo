import { damagePlayer, healPlayer } from "./ui.js";

let score = 0;
let currentQuestionIndex = 0;

const questions = [
    { q: "Volvismo envolve transformação?", a: ["sim"] },
    { q: "O volvismo ocorre no tempo?", a: ["sim"] },
    { q: "Volvismo precisa de ação?", a: ["sim"] },
    { q: "Volvismo é dinâmico?", a: ["sim"] },
    { q: "Volvismo depende de movimento contínuo?", a: ["sim"] },
    { q: "Volvismo pode mudar estados?", a: ["sim"] },
    { q: "Volvismo é imóvel?", a: ["não", "nao"] },
    { q: "Volvismo envolve processo?", a: ["sim"] }
];

export function triggerQuestion() {
    const quizBox = document.getElementById("quizBox");
    const questionText = document.getElementById("question");
    
    // Escolhe uma pergunta aleatória
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    questionText.innerText = questions[currentQuestionIndex].q;
    
    quizBox.style.display = "block"; // Mostra o quiz
    document.getElementById("answer").value = ""; // Limpa o campo
    document.getElementById("answer").focus();
}

// Criamos a função e penduramos no 'window' para o botão do HTML conseguir achar
window.submitAnswer = function() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
    const quizBox = document.getElementById("quizBox");
    const scoreText = document.getElementById("score");

    if (questions[currentQuestionIndex].a.includes(userAnswer)) {
        score += 10;
        scoreText.innerText = `Pontuação: ${score}`;
        healPlayer(10); // Recupera vida se acertar
        alert("Correto!");
    } else {
        damagePlayer(20); // Perde vida se errar
        alert("Errado!");
    }

    quizBox.style.display = "none"; // Esconde o quiz depois de responder
};
