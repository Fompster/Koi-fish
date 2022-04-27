import { generateBlob } from './blobGenerator.js';

const levelColors = ["#45A9D3", "#60C7E0", "#84D5E6", "#9DE0E9"];

export class Crator {
    constructor(radius, position, maxLevel, scene) {
      this.radius = radius;
      this.maxLevel = maxLevel;
      this.position = position;

      this.scene = document.getElementById(scene);
    }

    generateCrator() {
      const group = document.createElement("div");
      group.setAttribute("class", "crator");
      this.scene.appendChild(group);

      var startLevel = levelColors.length - this.maxLevel;

      for (var i=startLevel; i < levelColors.length; i++) {
        const blob = generateBlob(levelColors[i], i, this.radius);
        group.appendChild(blob);
      }
    }
  }