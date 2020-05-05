<template>
   <div>
    <div id="console"></div>
    <div id="container"></div>
  </div>

</template>

<script>
import {
  AbsoluteOrientationSensor,
  // RelativeOrientationSensor
}  from 'motion-sensors-polyfill';
import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import {  MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';


const params = new URLSearchParams(new URL(window.location.href).search.slice(1));
// const relative = !!Number(params.get("relative"));
const coordinateSystem = params.get("coord");

// let container, camera, scene, renderer, model;
let container, camera, scene, renderer, cube, sensor;
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
    };
  },
mounted: function () {

  this.initScene();
  if (navigator.permissions) {
      // https://w3c.github.io/orientation-sensor/#model
      Promise.all([navigator.permissions.query({ name: "accelerometer" }),
                    navigator.permissions.query({ name: "magnetometer" }),
                    navigator.permissions.query({ name: "gyroscope" })])
              .then(results => {
                  if (results.every(result => result.state === "granted")) {
                      this.initSensor();
                  } else {
                      console.log("Permission to use sensor was denied.");
                  }
              }).catch(err => {
                  console.log("Integration with Permissions API is not enabled, still try to start app." + err);
                  this.initSensor();
              });
  } else {
      console.log("No Permissions API, still try to start app.");
      this.initSensor();
  }

  // this.renderScene();
  this.animate()
  let log = console.log;
  console.log = (message, ...rest) => {
      const div = document.querySelector('#console');
      div.innerText = message;
      log.call(console, message, ...rest);
  }
  console.log("mounted")
  
},
methods: {
  initScene() {
    container = document.getElementById( 'container' );
    // document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 10;

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    // var ambientLight = new THREE.AmbientLight(0x404040, 10);
    // scene.add(ambientLight);
    // camera.position.set( 0, 250, 1000 );
    scene.add( camera );

    scene.add( new THREE.AmbientLight( 0xf0f0f0 ) );
    var light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 1500, 200 );
    light.angle = Math.PI * 0.2;
    light.castShadow = true;
    light.shadow.camera.near = 200;
    light.shadow.camera.far = 2000;
    light.shadow.bias = - 0.000222;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add( light );

    var planeGeometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
    planeGeometry.rotateX( - Math.PI / 2 );
    var planeMaterial = new THREE.ShadowMaterial( { opacity: 0.2 } );

    var plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.y = - 200;
    plane.receiveShadow = true;
    scene.add( plane );

    var helper = new THREE.GridHelper( 2000, 100 );
    helper.position.y = - 199;
    helper.material.opacity = 0.7;
    helper.material.transparent = true;
    scene.add( helper );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;

    // var manager = new THREE.LoadingManager();
    // var mtlLoader = new MTLLoader(manager);
    // // mtlLoader.setPath('..assets/');
    // mtlLoader.load('..assets/phone.mtl', materials => {
    //     materials.preload();
    //     var objLoader = new OBJLoader(manager);
    //     objLoader.setMaterials(materials);
    //     objLoader.load('..assets/phone.obj', object => {
    //         model = object;
    //         scene.add(model);
    //   });
    // });

    // renderer = new THREE.WebGLRenderer({ alpha: true });
    // // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
  	// // document.body.appendChild(renderer.domElement);

    container.appendChild(renderer.domElement);
    // Init BoxGeometry object (rectangular cuboid)
    const geometry = new THREE.BoxGeometry(3, 3, 3);

    // Create material with color
    const material = new THREE.MeshBasicMaterial({ color: 0xf0f00f });

    cube = new THREE.Mesh(geometry, material);
    // Add to scene
    scene.add(cube);

    

    // window.addEventListener('resize', () => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    // }, false);

    // document.addEventListener('mousedown', () => document.documentElement.requestFullscreen());
    // document.addEventListener('fullscreenchange', () => {
    //     if (document.fullscreenElement != null) {
    //         screen.orientation.lock("natural")
    //       }
    //     });
    },

    initSensor() {
        const options = { frequency: 60, coordinateSystem };
        console.log(JSON.stringify(options));
        sensor = new AbsoluteOrientationSensor(options);
        sensor.onreading = () => console.log(sensor.quaternion)//model.quaternion.fromArray(sensor.quaternion).inverse();
        sensor.onerror = (event) => {
          if (event.error.name == 'NotReadableError') {
            console.log("Sensor is not available.");
          }
        }
        sensor.start();
        console.log(sensor)
    },
    // renderScene() {
    //     requestAnimationFrame(this.renderScene);
    //     camera.lookAt(scene.position);
    //     renderer.render(scene, camera);
    // }
    animate() {
      requestAnimationFrame(this.animate);

      // Rotate cube (Change values to change speed)
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
  /* .garden {
  position: relative;
  width : 200px;
  height: 200px;
  border: 5px solid #CCC;
  border-radius: 10px;
}

.ball {
  position: absolute;
  top   : 90px;
  left  : 90px;
  width : 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
} */

</style>
