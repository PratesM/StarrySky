/// <reference path="../node_modules/@types/p5/lib/addons/p5.dom.d.ts"/>

// A Starry Sky generator 
// For now it generates a static image of a starry sky


// TODO
// Adding a way to regenerate the starry sky without leaving the page.

var stars = [];


function setup(){
    createCanvas(1920,1080);
    createLoop({duration: 10, gif:true}); 
    background(0);
    var starsNumber = random(300, 500); // Generates between 300 and 500 stars

    for(let i=0; i<starsNumber; i++){ // For each star, it will run this loop and give it a random diameter and a random position in the canvas.
        stars[i] = new Star();
        noStroke;
        fill(255);
        ellipse(stars[i].x, stars[i].y, stars[i].diameter, stars[i].diameter);
    }
}

function draw(){
    background(0);
    for(let i=0; i<stars.length; i++){
        //let willTinkle = 5;
        //if (random(1, 100) > )
        stars[i].twinkling();
    }
}

class Star {
    x: number;
    y: number;
    t: number;
    diameter: number;

    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.diameter = random(0.25, 3);
        this.t = random(PI);
    }

    // Work on the animation
    twinkling(){
        this.t += 0.025;
        var scale = this.diameter + sin(this.t) * 2;
        noStroke();
        ellipse(this.x, this.y, scale, scale);
    }
}