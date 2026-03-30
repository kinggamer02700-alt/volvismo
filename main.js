import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";

import { createPlayer, updatePlayer } from "./player.js";
import { createCamera, updateCamera } from "./camera.js";
import { createWorld } from "./world.js";
import { updateHealth } from "./ui.js";
import { triggerQuestion } from "./quiz.js";
import { createEnemies, updateEnemies, attackEnemies } from "./enemy.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 20, 10);
scene.add(light);

// mundo
createWorld(scene);

// player
const player = createPlayer(scene);

// camera
const camera = createCamera();

// inimigos
createEnemies(scene, 5);

// controles
const keys = {};
document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

// ataque
document.addEventListener("keydown", e => {
    if (e.key === "f") {
        attackEnemies(player);
    }
});

function animate() {
    requestAnimationFrame(animate);

    updatePlayer(player, keys);
    updateCamera(camera, player);
    updateEnemies(player);

    renderer.render(scene, camera);
}

animate();
updateHealth();

// quiz automático
setInterval(() => {
    triggerQuestion();
}, 10000);
