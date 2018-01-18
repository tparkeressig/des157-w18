// p5.js file for 157 portal page
// Tara Parker-Essig
// DES 157 WQ 2018

console.log("Hey you linked that js alright!");

function setup() {
    var myCanvas = createCanvas(800, 250); //capture the createCanvas to a variable so you can infuence it with CSS
    myCanvas.parent('mySketch'); //parent the myCanvas var to the mySketch id for CSS
    loadImage('sleep-cat.png', function(img) {
            image(img, 300, 50);
        });
    background(250); //color

    }

    function draw() { //put your interaction here meow meow
        var d = dist(mouseX, mouseY, 400, 80);
        if (d < 50) {
            if (mouseIsPressed) {
                background(250, 80); //color, alpha
                loadImage('purr-cat.png', function(img) { //loving cat
                    image(img, 300, 50);
                });
            } else {
                background(250, 80); //color, alpha
                loadImage('sleep-cat.png', function(img) { //sleeping cat
                    image(img, 300, 50);
                });
            }
        }
        print(mouseIsPressed);
    }
