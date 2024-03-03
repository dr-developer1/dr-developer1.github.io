import * as THREE from "three";

// scene
const scene: THREE.Scene = new THREE.Scene();

// Mesh1
const geometry1: THREE.BoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material1: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: "yellow"});
const cube1: THREE.Mesh = new THREE.Mesh(geometry1, material1);
cube1.position.set(-2, 1, 0);

scene.add(cube1);

interface IAspect {
    width: number;
    height: number;
}

// Camera
const aspect: IAspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw");

if (!canvas) {
    throw new Error("Canvas not found");
}

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);

// Animation
const animate = (): void => {

    renderer.render(scene, camera);

    requestAnimationFrame(animate)
}
animate();