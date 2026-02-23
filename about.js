// inspired by a three.js tutorial:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var color = new THREE.Color( 0xffffff );
renderer.setClearColor( color );
document.body.appendChild( renderer.domElement );

var torus_geo = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 1, 2 );
var torus_material = new THREE.MeshBasicMaterial({
  color : 0x461e52
});
var torus = new THREE.Mesh( torus_geo, torus_material );

var dodec_geo = new THREE.DodecahedronGeometry( 50, 0 );
var dodec_material = new THREE.MeshBasicMaterial({
  color : 0xe68e36
});
var dodec = new THREE.Mesh( dodec_geo, dodec_material );

var torus_outline_geo = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 1, 2 );
var t_outline_material = new THREE.MeshBasicMaterial({
  color : 0xdd517f,
  wireframe : true
});
var torus_outline = new THREE.Mesh( torus_outline_geo, t_outline_material );

var dodec_outline_geo = new THREE.DodecahedronGeometry( 50, 0 );
var d_outline_material = new THREE.MeshBasicMaterial({
  color : 0xff007f,
  wireframe : true
});
var dodec_outline = new THREE.Mesh( dodec_outline_geo, d_outline_material );


scene.add( torus );
scene.add( torus_outline );
scene.add( dodec );
scene.add( dodec_outline );

camera.position.z = 500;

// Use time-based animation so rotation speed is consistent across browsers
var lastTime = performance.now();
var torusVel = { x: 0.005 * 60, y: -0.015 * 60 };
var dodecVel = { x: 0.01 * 60, y: 0.005 * 60 };

function animate(time) {
  requestAnimationFrame( animate );
  if (time === undefined) time = performance.now();
  var delta = (time - lastTime) / 1000;
  lastTime = time;

  torus.rotation.x += torusVel.x * delta;
  torus.rotation.y += torusVel.y * delta;
  torus_outline.rotation.x += torusVel.x * delta;
  torus_outline.rotation.y += torusVel.y * delta;
  dodec.rotation.x += dodecVel.x * delta;
  dodec.rotation.y += dodecVel.y * delta;
  dodec_outline.rotation.x += dodecVel.x * delta;
  dodec_outline.rotation.y += dodecVel.y * delta;

  renderer.render( scene, camera );
}

requestAnimationFrame( animate );
