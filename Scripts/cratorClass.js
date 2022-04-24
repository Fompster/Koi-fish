import { generateBlob } from './blobGenerator.js';

export class Crator {
    constructor(width, height, level) {
      // viewBox width & height dimensions
      this.width = width;
      this.height = height;
      this.level = level;
  
      // position within the viewBox (the center)
      this.x = this.width / 2;
      this.y = this.height / 2;
    }

    generateCrator() {
      return generateBlob();
    }
  }