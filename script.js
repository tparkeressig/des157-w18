// p5.js file for 157 portal page
// Tara Parker-Essig
// DES 157 WQ 2018

console.log("Hey you linked that js alright!");

var d; //for distance later

function preload() {
    soundFormats('mp3', 'ogg');
    catPurr = loadSound('bigboy.mp3');
}

function setup() { //once
    var myCanvas = createCanvas(800, 250); //capture the createCanvas to a variable so you can infuence it with CSS
    myCanvas.parent('mySketch'); //parent the myCanvas var to the mySketch id for CSS
    loadImage('sleep-cat.png', function(img) {
        image(img, 300, 50);
    });
    background(250); //color
}

function draw() { //repeating
}

function mousePressed() { //when you press down on the mouse
    var d = dist(mouseX, mouseY, 410, 120);
    if (d < 75) {
        background(250, 250); //color, alpha
        loadImage('purr-cat.png', function(img) { //loving cat
            image(img, 300, 50);
        });
        catPurr.play();
        catPurr.playMode('sustain');
        print("Should be purring.");
    }
    print("You clicked");
    print(d);
}

function mouseReleased() {
    background(250, 250); //color, alpha
    loadImage('sleep-cat.png', function(img) { //sleeping cat
            image(img, 300, 50);
        });
        catPurr.stop();
        print("Should stop purring.");
    }
