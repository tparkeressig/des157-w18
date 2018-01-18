// p5.js file for 157 portal page

console.log("Hey you linked that js alright!");

var count;

function setup() {
    var myCanvas = createCanvas(800, 250); //capture the createCanvas to a variable so you can infuence it with CSS
    myCanvas.parent('mySketch'); //parent the myCanvas var to the mySketch id for CSS

    // loadImage('sleep-cat.png', function(img) {
    //     image(img, 300, 50);
    // });
}

function draw() { //put your interaction here meow meow
    if (mouseIsPressed) {
        background(0, 50); //color, alpha
        loadImage('sleep-cat.png', function(img) {
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
