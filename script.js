// p5.js file for 157 portal page

console.log("Hey you linked that js alright!");

function setup() {
    var myCanvas = createCanvas(800, 250); //capture the createCanvas to a variable so you can infuence it with CSS
    myCanvas.parent('mySketch'); //parent the myCanvas var to the mySketch id for CSS
}

function draw() { //put your interaction here meow meow
    if (mouseIsPressed) {
        background(250, 50); //color, alpha
        loadImage('purr-cat.png', function(img) {
            image(img, 300, 50);
        });
    } else {
        background(250, 50); //color, alpha
        loadImage('sleep-cat.png', function(img) {
            image(img, 300, 50);
        });
    }
    print(mouseIsPressed);
}
