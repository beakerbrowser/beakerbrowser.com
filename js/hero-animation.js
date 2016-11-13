var WIDTH = 256
var HEIGHT = 256

var container

var camera, scene, renderer;
var wiremeshObjs = []

init();
animate();

function init() {

  container = document.getElementById( 'hero-animation' );

  camera = new THREE.PerspectiveCamera( 45, WIDTH / HEIGHT, 1, 2000 );
  camera.position.y = 0;

  scene = new THREE.Scene();

  var light, object;

  scene.add( new THREE.AmbientLight( 0xffffff ) );

  light = new THREE.DirectionalLight( 0x444444 );
  light.position.set( 1, 1, 0 );
  scene.add( light );

  var material = new THREE.MeshLambertMaterial( {color: 0x016fde, shading: THREE.SmoothShading, reflectivity: 0} );
  object = new THREE.Mesh( new THREE.SphereGeometry( 360, 30, 15 ), material );
  object.position.set( 0, 0, 0 );
  scene.add( object );

  var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: true, opacity: 0.25, transparent: true} );
  object = new THREE.Mesh( new THREE.SphereGeometry( 368, 20, 10 ), material );
  wiremeshObjs.push(object)
  object.position.set( 0, 0, 0 );
  scene.add( object );

  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load( "/img/logo/256x256-icon.png" );
  var material = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture, transparent: true } );
  object = new THREE.Mesh( new THREE.PlaneGeometry( 500, 500, 1, 1 ), material );
  object.position.set( 0, 0, 400 );
  scene.add( object );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( WIDTH, HEIGHT );
  renderer.setClearColor( 0xffffff );

  document.getElementById('hero-img').style.display = 'none'
  container.appendChild( renderer.domElement );

}

//

function animate() {

  requestAnimationFrame( animate );

  render();

}

function render() {

  var timer = Date.now() * 0.00005;

  // camera.position.x = 600;
  camera.position.z = 1000;

  camera.lookAt( scene.position );

  wiremeshObjs.forEach(function (o) {
    o.rotation.y = timer;
  })

  renderer.render( scene, camera );

}
