import { spline } from './spline.js';

export function generateBlob(color, level){
    // new svg
    const svg = generateSVG(); 

    // create path
    const numberOfPoints = Math.floor(Math.random() * 12) + 3; 
    const newPath = generatePath(numberOfPoints, color, level);


    newPath.setAttributeNS(null, "style", `fill: ${color};`);//stroke: white; stroke-width: 1px

    // assign
    svg.appendChild(newPath);

    // return the SVG
    return svg;
  }
  
  // empty svg
  function generateSVG(){
    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.setAttribute('width', '100%');
    svgEl.setAttribute('height', '100%');
    svgEl.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    
    return svgEl;
  }
  
  // choose a number within a range, integer (whole number) by default
  function random(min, max, float = false) {
    const val = Math.random() * (max - min) + min;

    if (float) {
      return val;
    }

    return Math.floor(val);
  }
  
  function generatePath(numberOfPoints, color, level){
    const angleStep = (Math.PI * 2) / numberOfPoints;
    const radius = 100 + level*100;
    var x, y;
    const coords = [];

    // create basic path
    const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    for (let i = 1; i <= numberOfPoints; i++){
      const pull = random(0.1, 1, true);
      
      [x,y] = circlePoints(angleStep*i, radius);

      x *= pull;
      y *= pull;
      coords.push({ x, y });
    }

    // draws a smooth curve through a set of x,y points
    let pathCoords = spline(coords, 1, true);

    // for some reason get line inside shape if I dont do this
    let indexC = pathCoords.lastIndexOf("C");
    pathCoords = pathCoords.slice(0, indexC);

    // draw rectangle
    pathCoords += ("M 0 0 v " + window.innerHeight + "h" + window.innerWidth + " v -" + window.innerHeight + " h -" + window.innerWidth + "z");
    
    newPath.setAttributeNS(null, "d", pathCoords);

    return newPath; 
  }
  

  // finds points on a circle
  function circlePoints(rad, radius){
    var x = radius * Math.cos(rad);
    var y = radius * Math.sin(rad);

    return [x,y];
  }

