import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";

export function createPlayer(scene) {
    const geometry = new THREE.BoxGeometry(1, 2, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
    const player = new THREE.Mesh(geometry, material);

    player.position.y = 1;
    scene.add(player);

    return player;
}

export function updatePlayer(player, keys) {
    const speed = 0.1;

    if (keys["w"]) player.position.z -= speed;
    if (keys["s"]) player.position.z += speed;
    if (keys["a"]) player.position.x -= speed;
    if (keys["d"]) player.position.x += speed;
}
