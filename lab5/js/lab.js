/*
This program stores information about a car
and displays the details using document.writeln().
*/


// Author: Nayezca Guzman-Jubb
// Date: October 21, 2024


// Define variables
var make = "Honda";
var model = "Fit";
var color = "Blue";
var year = 2012;
var age = 2024 - year;


// Output variables to a specific HTML element
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "Make: " + make + "<br>" +
                     "Model: " + model + "<br>" +
                     "Color: " + color + "<br>" +
                     "Year: " + year + "<br>" +
                     "Age: " + age + " years<br>";
