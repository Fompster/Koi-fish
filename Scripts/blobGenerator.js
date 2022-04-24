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
  
  function getRandomPoint(maxDim){
    //generate a number between 1 and 100. 
    const pos = Math.round(Math.random());
    var point = Math.floor(Math.random() * maxDim); 

    if (pos == 0) {
      point *= -1;
    }

    return point;
  }
  
  function randomHexColor(){
    /* courtesy of Paul Irish, https://www.paulirish.com/2009/random-hex-color-code-snippets/ */
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    return randomColor;
  }
  
  
  function generatePath(numberOfPoints, color){
    //get viewport width and height
    const pathWidth = document.documentElement.clientWidth;
    const pathHeight = document.documentElement.clientHeight;
    const angleStep = (Math.PI * 2) / numberOfPoints;
    const radius = 100;
    var angle = 0;
    var controlX, controlY, x, y;
     // keep track of our points
    const points = [];

    // create basic path
    const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    for (let i = 1; i <= numberOfPoints; i++){
      [x,y] = circlePoints(angle, radius);
      points.push({ x, y });
      angle += angleStep;
    }
    // draws a smooth curve through a set of x,y points
    let pathCoords = spline(points, 1, true);
    newPath.setAttributeNS(null, "d", pathCoords);
    newPath.setAttributeNS(null, "style", `fill: none; stroke: ${color}; stroke-width: 12px`);

    return newPath; 
  }
  

  // finds points on a circle
  function circlePoints(rad, radius){
    var x = radius * Math.cos(rad);//cx + 
    var y = radius * Math.sin(rad);//cy +

    
    x = round(x);
    y = round(y);

    return [x,y];
  }

  function round(x){
    return Math.round(x * 100) / 100;
  }