import { damagePlayer, healPlayer } from "./ui.js";

let score = 0;

const questions = [
    { q: "O que é volvismo?", a: ["movimento"] },
    { q: "Volvismo envolve interação?", a: ["sim"] },
    { q: "Volvismo está ligado à ação?", a: ["sim"] },
    { q: "O volvismo depende de dinâmica?", a: ["sim"] },
    { q: "Qual conceito central do volvismo?", a: ["movimento"] },

    { q: "Volvismo é estático?", a: ["nao", "não"] },
    { q: "Volvismo envolve mudança?", a: ["sim"] },
    { q: "Volvismo é passivo?", a: ["nao", "não"] },
    { q: "Interação é importante no volvismo?", a: ["sim"] },
    { q: "Volvismo envolve transformação?", a: ["sim"] },

    { q: "O volvismo ocorre no tempo?", a: ["sim"] },
    { q: "Volvismo precisa de ação?", a: ["sim"] },
    { q: "Volvismo é dinâmico?", a: ["sim"] },
    { q: "Volvismo depende de movimento contínuo?", a: ["sim"] },
    { q: "Volvismo pode mudar estados?", a: ["sim"] },

    { q: "Volvismo é imóvel?", a: ["nao", "não"] },
    { q: "Volvismo envolve processo?", a: ["sim"] },
    { q: "Volvismo depende de interação?", a: ["sim"] },
    { q: "Volvismo ocorre sem ação?", a: ["nao", "não"] },
    { q: "Volvismo envolve evolução?", a: ["sim"] }
];

let currentQuestion = null;

export function triggerQuestion() {
    const box = document.getElementById("quizBox");
    const qText = document.getElementById("question");

    currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    qText.innerText = currentQuestion.q;
    box.style.display = "block";
}

window.submitAnswer = function () {
    const input = document.getElementById("answer");
    const answer = input.value.toLowerCase();

    if (!currentQuestion) return;

    if (currentQuestion.a.some(a => answer.includes(a))) {
        score += 10;
        healPlayer(10);
        alert("✅ Acertou! +10 pontos +vida");
    } else {
        score -= 5;
        damagePlayer(15);
        alert("❌ Errou! -5 pontos -vida");
    }

    updateScore();

    input.value = "";
    document.getElementById("quizBox").style.display = "none";
};

function updateScore() {
    const scoreEl = document.getElementById("score");
    if (scoreEl) {
        scoreEl.innerText = "Pontuação: " + score;
    }
}
