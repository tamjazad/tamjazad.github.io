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

// Use time-based animation so rotation speed is consistent across browsers
var lastTime = performance.now();
var torusVel = { x: 0.01 * 60, y: -0.005 * 60 };
var innerTorVel = { x: -0.01 * 60, y: -0.005 * 60 };

function animate(time) {
  requestAnimationFrame( animate );
  if (time === undefined) time = performance.now();
  var delta = (time - lastTime) / 1000;
  lastTime = time;

  torus.rotation.x += torusVel.x * delta;
  torus.rotation.y += torusVel.y * delta;
  torus_outline.rotation.x += torusVel.x * delta;
  torus_outline.rotation.y += torusVel.y * delta;
  inner_torus.rotation.x += innerTorVel.x * delta;
  inner_torus.rotation.y += innerTorVel.y * delta;
  inner_torus_outline.rotation.x += innerTorVel.x * delta;
  inner_torus_outline.rotation.y += innerTorVel.y * delta;

  renderer.render( scene, camera );
}

requestAnimationFrame( animate );
