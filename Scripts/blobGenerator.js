import { spline } from './spline.js';

export function generateBlob(blobOpts){
    // new svg
    const svg = generateSVG(); 

    // group to be able to transform position
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("transform", "translate(200 200)");

    // create path
    const numberOfPoints = 3//blobOpts && blobOpts.numberOfPoints || Math.floor(Math.random() * 12) + 3; 
    const color = blobOpts && blobOpts.color || randomHexColor();
    const newPath = generatePath(numberOfPoints, color);

    // assign
    svg.appendChild(group);
    group.appendChild(newPath);

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
  
  function randomHexColor(){
    /* courtesy of Paul Irish, https://www.paulirish.com/2009/random-hex-color-code-snippets/ */
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    return randomColor;
  }
  
  
  function generatePath(numberOfPoints, color){
    const angleStep = (Math.PI * 2) / numberOfPoints;
    const radius = 100;
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
    newPath.setAttributeNS(null, "d", pathCoords);
    newPath.setAttributeNS(null, "style", `fill: none; stroke: ${color}; stroke-width: 12px`);

    return newPath; 
  }
  

  // finds points on a circle
  function circlePoints(rad, radius){
    var x = radius * Math.cos(rad);//cx + 
    var y = radius * Math.sin(rad);//cy +

    return [x,y];
  }

