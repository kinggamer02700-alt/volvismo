import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    return camera;
}

export function updateCamera(camera, player) {
    const offset = new THREE.Vector3(0, 5, 8);

    camera.position.copy(player.position).add(offset);
    camera.lookAt(player.position);
}
