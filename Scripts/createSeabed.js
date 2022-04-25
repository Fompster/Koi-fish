import { Crator } from './cratorClass.js';

const scene = document.getElementById("ocean");

// viewBox w x h, target to append the <svg /> element to
const crator = new Crator(200, 200, 4, "ocean");
crator.generateCrator();
