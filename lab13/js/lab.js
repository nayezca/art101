/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Nayezca Guzman-Jubb
   Date: 2024
*/

function fizzBuzz() {
    let oneLongString = "";
    
    for (let num = 1; num <= 200; num++) {
        let result = ""; 

        if (num % 3 === 0) {
            result += "Fizz";
        }
        if (num % 5 === 0) {
            result += "Buzz";
        }
        if (num % 7 === 0) {
            result += "Boom";
        }

        if (result === "") result = num;

        oneLongString += result + "<br>"; 
    }

    $("#output").html(oneLongString)
}

// Call the function to run it
fizzBuzz();
