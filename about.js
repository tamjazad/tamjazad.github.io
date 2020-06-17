// inspired by a three.js tutorial:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var color = new THREE.Color( 0xffffff );
renderer.setClearColor( color );
document.body.appendChild( renderer.domElement );

var torus_geo = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 2, 3 );
var torus_material = new THREE.MeshBasicMaterial({
  color : 0x66ff99
});
var torus = new THREE.Mesh( torus_geo, torus_material );

var dodec_geo = new THREE.DodecahedronGeometry( 50, 0 );
var dodec_material = new THREE.MeshBasicMaterial({
  color : 0xfa8072
});
var dodec = new THREE.Mesh( dodec_geo, dodec_material );

var torus_outline_geo = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 2, 3 );
var t_outline_material = new THREE.MeshNormalMaterial({
  color : 0x58cced,
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

function animate() {
  requestAnimationFrame( animate );
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.015;
  torus_outline.rotation.x += 0.005;
  torus_outline.rotation.y += 0.015;
  dodec.rotation.x += -0.01;
  dodec.rotation.y -= 0.005;
  dodec_outline.rotation.x += -0.01;
  dodec_outline.rotation.y += -0.005;

  renderer.render( scene, camera );
}

animate();
