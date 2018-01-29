/*  Studio 1 "Madlibs"
    Tara Parker-Essig
    DES 157 WQ 2018  */

console.log("Hello! We're ready to go!");

// to capture form submission and send it to a function
document.fillThisForm.onsubmit = processForm;

//to capture the clear event and send it to a function
document.fillThisForm.onreset = clearForm;

function processForm() {
    var noun1 = document.fillThisForm.noun1.value;
    console.log(noun1);
    //prevent page from reloading
    return false;
}

function clearForm() {
    console.log("Form cleared!");
}
