import { generateBlob } from './blobGenerator.js';

// get a blob SVG element
const blob = generateBlob();
// drop it into the desired container
const scene = document.getElementById("scene");
scene.appendChild(blob); 
