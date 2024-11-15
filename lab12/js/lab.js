/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Nayezca Guzman-Jubb
   Date: 2024
*/

// Return Light Blue, Hot Pink, Mathca Green, Lavender
// depending on length mod 4
function colorPicker(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "♡ Light Blue 🩵 ♡"
    }
    else if (mod == 1) {
        return "♡ Hot Pink 🩷 ♡"
    }
    else if (mod == 2) {
        return "♡ Matcha Green 🌱 ♡"
    }
    else if (mod == 3) {
        return "♡ Lavender 🪻 ♡"
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var color = colorPicker(name);

    // Separate the text and color
    newText = "<p>Your color is... </p>";
    var colorText = "<span class='color'>" + color + "</span>";

    document.getElementById("output").innerHTML = newText + colorText;
})