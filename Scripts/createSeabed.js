import { Crator } from './cratorClass.js';

const minCratorRadius = 100;
const maxCratorRadius = 250;



// viewBox w x h, target to append the <svg /> element to
const crator = new Crator(250, 20, 4, "ocean");
crator.generateCrator();
