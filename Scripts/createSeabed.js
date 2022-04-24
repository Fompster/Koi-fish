import { Crator } from './cratorClass.js';

const scene = document.getElementById("scene");

// viewBox w x h, target to append the <svg /> element to
const crator = new Crator(200, 200, 0);
const blob = crator.generateCrator();

// drop it into the desired container
scene.appendChild(blob); 
