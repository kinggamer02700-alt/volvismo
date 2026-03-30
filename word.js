import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";

export function createWorld(scene) {
    const groundGeo = new THREE.PlaneGeometry(100, 100);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const ground = new THREE.Mesh(groundGeo, groundMat);

    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // árvores simples
    for (let i = 0; i < 20; i++) {
        const tree = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, 0.5, 3),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );

        tree.position.set(
            Math.random() * 50 - 25,
            1.5,
            Math.random() * 50 - 25
        );

        scene.add(tree);
    }
}
