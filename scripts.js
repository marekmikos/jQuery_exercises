// Change the text of the first blue box from Velox to Macrotis

$("#fox-1").text("Macrotis");
//$("#fox-1").text("Macrotis");

// Change the border color of the second from blue to purple

$("#fox-2").css("border-color","purple");

// Change the background color of all 3 blue boxes to yellow

$("#fox-1,#fox-2,#fox-3").css("background","yellow");

// Let's create some variables with the following names and values:
// color: purple
// number: 10
// word: cool

let color = 'purple';
let number = 10;
let word = 'cool';

// Change the background color of the first box 
// to purple, if the color is purple

if (color === "purple") {
$(".north").css("background",color);
}

// Change the text of the second
// if the number is bigger than 100 to whoah, that's a big number.
// otherwise just a regular number, please.
if (number > 100) {
    $(".east").text("whoah, that's a big number");  
} else {
    $(".east").text("just a regular number, please");
}

// Change the text to Power of DOM of the third if the word is cool, 
// otherwise change the fourth one

if (word === 'cool') {
    $(".south").text("Power of DOM");
} else {
    $(".west").text("Power of DOM");
} 
