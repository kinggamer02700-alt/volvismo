import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";
import { damagePlayer } from "./ui.js";
import { triggerQuestion } from "./quiz.js";

let enemies = [];

export function createEnemies(scene, count = 5) {
    for (let i = 0; i < count; i++) {
        const enemy = new THREE.Mesh(
            new THREE.BoxGeometry(1, 2, 1),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );

        enemy.position.set(
            Math.random() * 20 - 10,
            1,
            Math.random() * 20 - 10
        );

        enemy.hp = 50;

        scene.add(enemy);
        enemies.push(enemy);
    }

    return enemies;
}

export function updateEnemies(const sound = document.getElementById("hitSound");
if (sound) sound.play();) {
    enemies.forEach(enemy => {
        const dx = player.position.x - enemy.position.x;
        const dz = player.position.z - enemy.position.z;

        const dist = Math.sqrt(dx * dx + dz * dz);

        if (dist > 1) {
            enemy.position.x += dx * 0.01;
            enemy.position.z += dz * 0.01;
        } else {
            damagePlayer(0.1);
        }
    });
}

export function attackEnemies(player) {
    enemies.forEach(enemy => {
        const dist = player.position.distanceTo(enemy.position);

        if (dist < 2) {
            triggerQuestion(); // pergunta ao atacar
            enemy.hp -= 25;

            if (enemy.hp <= 0) {
                enemy.visible = false;
            }
        }
    });
}
