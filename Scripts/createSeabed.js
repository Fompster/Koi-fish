import { Crator } from './cratorClass.js';

const scene = document.getElementById("scene");

// viewBox w x h, target to append the <svg /> element to
const crator = new Crator(200, 200, 0);
const blob = crator.generateCrator();

const crator2 = new Crator(200, 200, 1);
const blob2 = crator2.generateCrator();

const crator3 = new Crator(200, 200, 2);
const blob3 = crator3.generateCrator();

const crator4 = new Crator(200, 200, 3);
const blob4 = crator3.generateCrator();


// drop it into the desired container
scene.appendChild(blob); 
scene.appendChild(blob2); 
scene.appendChild(blob3); 
scene.appendChild(blob4); 
