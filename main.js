import * as THREE from "https://cdn.jsdelivr.net";
import { updateHealth } from "./ui.js";
import { triggerQuestion } from "./quiz.js";
import { createPlayer, updatePlayer } from "./player.js";
import { createCamera, updateCamera } from "./camera.js";
import { createWorld } from "./world.js";
import { createEnemies, updateEnemies, attackEnemies } from "./enemy.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 20, 10);
scene.add(light);

createWorld(scene);
const player = createPlayer(scene);
const camera = createCamera();
createEnemies(scene, 5); 

const keys = {};
document.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
document.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "f") attackEnemies(player);
});

function animate() {
    requestAnimationFrame(animate);
    updatePlayer(player, keys);
    updateCamera(camera, player);
    updateEnemies(player); 
    renderer.render(scene, camera);
}

animate(); 

setInterval(() => {
    triggerQuestion();
}, 10000);
