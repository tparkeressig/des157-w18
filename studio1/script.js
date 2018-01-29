/*  Studio 1 "Madlibs"
    Tara Parker-Essig
    DES 157 WQ 2018  */

console.log("Hello! We're ready to go!");

// to capture form submission and send it to a function
document.fillThisForm.onsubmit = processForm;

//to capture the clear event and send it to a function
document.fillThisForm.onreset = clearForm;

//now go define your functions
function processForm() {
    console.log("Form processed!");

    //capture the elements of the page in vars
    var lyrics = document.getElementById("lyrics");
    var seeThis = document.getElementById("seeThis");

    //capture the form field responses as vars, too
    var noun1 = document.fillThisForm.noun1.value;
    var action = document.fillThisForm.action.value;
    var nounPlural = document.fillThisForm.nounPlural.value;
    var noun2 = document.fillThisForm.noun2.value;
    var verbIn = document.fillThisForm.verbIn.value;
    var noun3 = document.fillThisForm.noun3.value;
    var geoShape = document.fillThisForm.geoShape.value;
    var feeling = document.fillThisForm.feeling.value;


    lyrics.innerHTML = "I like big " + noun1 + " and I cannot " + action + "! My other " + nounPlural + " cannot deny – when a " + noun2 + " " + verbIn + " in with an itty bitty " + noun3 + " and a " + geoShape + " in your face, you get " + feeling + "!";


    //last but not least: prevent the page from reloading and wasting all this effort! Dx
    return false;
}

function clearForm() {
    console.log("Form cleared!");

    lyrics.innerHTML = ""; //temp till I made a 3rd function

    //guess this just refreshes the page, then?
}
