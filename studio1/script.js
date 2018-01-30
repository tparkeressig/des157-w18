/*  Studio 1 "Madlibs"
    Tara Parker-Essig
    DES 157 WQ 2018  */
'use strict';
console.log("Hello! We're ready to go!");


// to capture form submission and send it to a function
document.fillThisForm.onsubmit = processForm;

//to capture the clear event and send it to a function
document.fillThisForm.onreset = clearForm;

var bgTrack = new Audio(); //new var to hold audio
bgTrack.src = "babygotbgtrack.mp3";

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
    var nounSmall = document.fillThisForm.nounSmall.value;
    var greatThing = document.fillThisForm.greatThing.value;
    var feeling = document.fillThisForm.feeling.value;

    seeThis.style.display = "block";


    lyrics.innerHTML = "I like big " + noun1 + " and I cannot " + action + "! My other " + nounPlural + " cannot deny – when a " + noun2 + " " + verbIn + " in with an itty bitty " + nounSmall + " and a " + greatThing + " thing in your face, you get " + feeling + "!";

    //play the audio!
    bgTrack.play();
    bgTrack.currentTime = 17.5; //set to the start of the song
    console.log("Is the music playing?");

    //last but not least: prevent the page from reloading and wasting all this effort! Dx
    return false;
}

function clearForm() {
    console.log("Form cleared!");

    //pause the audio!
    bgTrack.pause();
    console.log("Hope the music paused!");

    seeThis.style.display = "none";

    //guess this just refreshes the page, then?
}
