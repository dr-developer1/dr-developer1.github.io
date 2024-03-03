import * as THREE from "three";

// scene
const scene = new THREE.Scene();

// Mesh1
const geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material1 = new THREE.MeshBasicMaterial({color: "yellow"});
const cube1 = new THREE.Mesh(geometry1, material1);
cube1.position.set(-2, 1, 0);

scene.add(cube1);

// Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};

const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
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
const animate = () => {

    renderer.render(scene, camera);

    requestAnimationFrame(animate)
}
animate();