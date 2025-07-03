import * as THREE from 'https://unpkg.com/three@0.159.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.159.0/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('breadCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#fff0e0');

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 2, 3);

const light = new THREE.HemisphereLight(0xffffff, 0x996633, 1);
scene.add(light);

const geometry = new THREE.BoxGeometry(2, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0xd6a373,
  roughness: 0.9,
});
const bread = new THREE.Mesh(geometry, material);
scene.add(bread);

const crust = new THREE.Mesh(
  new THREE.BoxGeometry(2.1, 1.1, 1.1),
  new THREE.MeshStandardMaterial({ color: 0x8a5a2c, roughness: 1 })
);
crust.scale.set(1.01, 1.01, 1.01);
scene.add(crust);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});
