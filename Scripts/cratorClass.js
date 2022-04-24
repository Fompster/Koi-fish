import { generateBlob } from './blobGenerator.js';

const levelColors = ["#45A9D3", "#53BADA", "#60C7E0", "#84D5E6", "#9DE0E9"];

export class Crator {
    constructor(width, height, level) {
      // viewBox width & height dimensions
      this.width = width;
      this.height = height;
      this.color = levelColors[level];
  
      // position within the viewBox (the center)
      this.x = this.width / 2;
      this.y = this.height / 2;
    }

    generateCrator() {

      return generateBlob(this.color);
    }
  }