import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
    color: 'orange',
});

const planeGeometry = new THREE.PlaneGeometry(200, 5);
const planeMaterial = new THREE.MeshStandardMaterial();
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI * 1.5;
plane.receiveShadow = true;
plane.position.y = -2;
scene.add(plane);

const box = new THREE.Mesh(geometry, material);
box.position.set(1, -1, 1)
box.castShadow = true;

scene.add(box);
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.castShadow = true;
spotLight.position.set(1, 1, 3);
const helper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLight, helper);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas') as HTMLCanvasElement,
    antialias: true,
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    controls.update();
    box.rotateY(0.008);
    spotLight.position.x -= 0.001;
}

animate();