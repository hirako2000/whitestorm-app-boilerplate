import {
  Mesh,
  IcosahedronGeometry,
  MeshBasicMaterial
} from '@three';

import {MeshComponent} from '@whs/core/MeshComponent';
import {Model} from '@whs+meshes/Model';
import cubeGeometry from '../assets/geometry/whitestorm-logo.json';
import * as THREE from 'three';

export class GeometryComponent {
  constructor() {
    return new Model({
      geometry: {
        path: cubeGeometry,
      },
      material: new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        emissive: 0xb5d0dd,
      }),
      scale: [-1, -1, -1],
      position: [1, -180, 200],
      rotation: [Math.PI, 0, 0],
      castShadow: true,
      useCustomMaterial: true,

    });
  }
}
