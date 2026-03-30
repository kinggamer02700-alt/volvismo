export function createPlayer(scene) {
    const group = new THREE.Group();

    const body = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x00aaff })
    );

    const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.4),
        new THREE.MeshStandardMaterial({ color: 0xffccaa })
    );

    head.position.y = 1.5;

    group.add(body);
    group.add(head);

    group.position.y = 1;

    scene.add(group);

    return group;
}
