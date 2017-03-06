// Core
import {App} from '@whs/core/App';

import {
  ElementModule,
  SceneModule,
  CameraModule,
  RenderingModule
} from '@whs:app';

import * as THREE from 'three';

import {OrbitModule} from '@whs:controls/orbit';

import {FancyMaterialModule} from './modules/FancyMaterialModule';

// Components
import {Plane} from '@whs+meshes/Plane';
import {GeometryComponent} from './components/GeometryComponent';
import {BasicComponent} from './components/BasicComponent';
import {SpotLight} from '@whs+lights/SpotLight';

const cameraFar = 30000;

const app = new App([
  new ElementModule({
    container: document.getElementById('app')
  }),
  new SceneModule(),
  new CameraModule({
    position: {
      z: -70
    },
    far: cameraFar
  }),
  new RenderingModule({
    bgColor: 0x162129,
    renderer: {
      antialias: true,
      shadowmap: {
        renderReverseSided: false,
        enabed: true,
        type: THREE.PCFSoftShadowMap
      }
    }
  }, {shadow: true}),
  new OrbitModule()
]);

const sphere = new BasicComponent({
  modules: [
    new FancyMaterialModule(app)
  ]
})
//app.add(sphere);

const plane = new Plane({
  geometry: {
    width: 10000,
    height: 10000
  },
  position: [0, -180, 100],
  rotation: {
    y: 0,
    x: - Math.PI / 2
  },
  receiveShadow: true,
  material: new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  })
});
app.add(plane);

const logo = new GeometryComponent({});
app.add(logo);

app.add(new SpotLight( {
  light: {
    color: 0xffffff,
    intensity: 3,
    distance: 2000,
    angle: Math.PI/5
  },
  shadow: {
      cast: true,
      bias: 0.000005,
      radius: 1,
      mapSize: {
        width: 2024,
        height: 2024
      },
      camera: {
        near: true,
        far: 200,
        fov: 90,
        top: 2000,
        bottom: -2000,
        left: -200,
        right: 200
      }
    },
  castShadow: true,
  position: [200, 1000, -1000]
}));

app.start();
