// inspired by a three.js tutorial:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var color = new THREE.Color( 0xffffff );
renderer.setClearColor( color );
document.body.appendChild( renderer.domElement );

var torus_geo = new THREE.TorusKnotGeometry( 170, 25, 100, 8, 1, 1 );
var torus_material = new THREE.MeshBasicMaterial({
  color : 0xf9f9f9
});
var torus = new THREE.Mesh( torus_geo, torus_material );

var inner_torus_geo = new THREE.TorusKnotGeometry( 16, 36, 31, 3, 6, 16);
var inner_torus_material = new THREE.MeshBasicMaterial({
  color : 0x221c35
});
var inner_torus = new THREE.Mesh( inner_torus_geo, inner_torus_material );

var torus_outline_geo = new THREE.TorusKnotGeometry( 170, 25, 100, 8, 1, 1 );
var t_outline_material = new THREE.MeshBasicMaterial({
  color : 0xc6c1ff,
  wireframe : true
});
var torus_outline = new THREE.Mesh( torus_outline_geo, t_outline_material );

var inner_torus_outline_geo = new THREE.TorusKnotGeometry( 16, 36, 31, 3, 6, 16 );
var d_outline_material = new THREE.MeshBasicMaterial({
  color : 0xff007f,
  wireframe : true
});
var inner_torus_outline = new THREE.Mesh( inner_torus_outline_geo, d_outline_material );


scene.add( torus );
scene.add( torus_outline );
scene.add( inner_torus );
scene.add( inner_torus_outline );

camera.position.z = 500;

function animate() {
  requestAnimationFrame( animate );
  torus.rotation.x += 0.01;
  torus.rotation.y -= 0.005;
  torus_outline.rotation.x += 0.01;
  torus_outline.rotation.y -= 0.005;
  inner_torus.rotation.x -= 0.01;
  inner_torus.rotation.y -= 0.005;
  inner_torus_outline.rotation.x -= 0.01;
  inner_torus_outline.rotation.y -= 0.005;

  renderer.render( scene, camera );
}

animate();
