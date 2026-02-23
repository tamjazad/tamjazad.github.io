// inspired by a three.js tutorial:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

var color = new THREE.Color( 0xffffff );
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth /
window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( color );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 12, 6 );
var material = new THREE.MeshBasicMaterial(
 {
   color : 0xfa8072,
   wireframe : false
 }
);

var secondgeometry = new THREE.IcosahedronGeometry( 50, 0 );
var secondmaterial = new THREE.MeshNormalMaterial();

var geometry3 = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 12, 6 );
var material3 = new THREE.MeshBasicMaterial(
 {
   color : 0xff007f,
   wireframe : true
 }
);

var torus = new THREE.Mesh( geometry, material );
var secondtorus = new THREE.Mesh( secondgeometry, secondmaterial );
var thirdtorus = new THREE.Mesh( geometry3, material3 );

scene.add( torus );
scene.add( secondtorus );
scene.add( thirdtorus );

camera.position.z = 500;

// Use time-based animation so rotation speed is consistent across browsers
var lastTime = performance.now();
// per-frame increments converted to per-second velocities (approx at 60fps)
var torusVel = { x: 0.005 * 60, y: 0.01 * 60 };
var secondTorVel = { x: -0.01 * 60, y: -0.02 * 60 };
var thirdTorVel = { x: 0.005 * 60, y: 0.01 * 60 };

function animate(time) {
  requestAnimationFrame( animate );
  if (time === undefined) time = performance.now();
  var delta = (time - lastTime) / 1000; // seconds
  lastTime = time;

  torus.rotation.x += torusVel.x * delta;
  torus.rotation.y += torusVel.y * delta;
  secondtorus.rotation.x += secondTorVel.x * delta;
  secondtorus.rotation.y += secondTorVel.y * delta;
  thirdtorus.rotation.x += thirdTorVel.x * delta;
  thirdtorus.rotation.y += thirdTorVel.y * delta;

  renderer.render( scene, camera );
}

requestAnimationFrame( animate );
