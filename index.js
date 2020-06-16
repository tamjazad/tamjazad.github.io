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

function animate() {
  requestAnimationFrame( animate );
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.01;
  secondtorus.rotation.x -= 0.01;
  secondtorus.rotation.y -= 0.02;
  thirdtorus.rotation.x += 0.005;
  thirdtorus.rotation.y += 0.01;
  renderer.render( scene, camera );
}
animate();
