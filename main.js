import * as THREE from 'https://unpkg.com/three@0.159.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.159.0/examples/jsm/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'https://unpkg.com/three@0.159.0/examples/jsm/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.159.0/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('bread.glb', gltf => {
  const model = gltf.scene;
  model.scale.set(2, 2, 2);
  scene.add(model);
});

const canvas = document.getElementById('breadCanvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
resize();

const scene = new THREE.Scene();

// Lighting
const hemi = new THREE.HemisphereLight(0xffffff, 0x884400, 1.0);
scene.add(hemi);

const dir = new THREE.DirectionalLight(0xffffff, 0.8);
dir.position.set(5, 10, 7);
scene.add(dir);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 1.5, 3);

// Bread geometry
const breadMat = new THREE.MeshStandardMaterial({
  color: 0xd6a373,
  roughness: 0.8,
  metalness: 0
});

const crustMat = new THREE.MeshStandardMaterial({
  color: 0x8a5a2c,
  roughness: 0.9,
  metalness: 0
});

const loaf = new THREE.Group();

// Main loaf body
const loafGeom = new RoundedBoxGeometry(2, 1, 1, 10, 0.2);
const loafMesh = new THREE.Mesh(loafGeom, breadMat);
loaf.add(loafMesh);

// Crust layer (slightly larger & darker)
const crustGeom = new RoundedBoxGeometry(2.02, 1.02, 1.02, 10, 0.25);
const crustMesh = new THREE.Mesh(crustGeom, crustMat);
loaf.add(crustMesh);

scene.add(loaf);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// Render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', resize);

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
