let playerHP = 100;

export function updateHealth() {
    const bar = document.getElementById("health");
    bar.style.width = playerHP + "%";

    if (playerHP <= 0) {
        alert("Você morreu 😢");
        location.reload();
    }
}

export function damagePlayer(amount) {
    playerHP -= amount;
    if (playerHP < 0) playerHP = 0;
    updateHealth();
}

export function healPlayer(amount) {
    playerHP += amount;
    if (playerHP > 100) playerHP = 100;
    updateHealth();
}
