import { generateBlob } from './blobGenerator.js';

const levelColors = ["#45A9D3", "#60C7E0", "#84D5E6", "#9DE0E9"];

export class Crator {
    constructor(width, height, maxLevel, target) {
      // viewBox width & height dimensions
      this.width = width;
      this.height = height;
      this.maxLevel = maxLevel;

      this.target = document.getElementById(target);
    }

    generateCrator() {
      const group = document.createElement("div");
      group.setAttribute("class", "crator");
      this.target.appendChild(group);

      var startLevel = levelColors.length - this.maxLevel;

      for (var i=startLevel; i < levelColors.length; i++) {
        const blob = generateBlob(levelColors[i], i, this.height, this.width);
        group.appendChild(blob);
      }
    }
  }