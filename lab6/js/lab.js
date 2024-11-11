​​// index.js - purpose and description here
// Author: Nayezca Guzman-Jubb
// Date: October 22, 2024


// Define variables
myTransport = ["Honda Fit", "carpool", "walking"];


// create an object for my main ride
myMainRide = {
   make: "Honda",
   model : "Fit",
   color : "Blue",
   year : 2012,
   age : function() {
     return 2024 - this.year;
   }
}


// Output
document.writeln("Modes of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
   JSON.stringify(myMainRide, null, '\t'), "<pre>");


  
// Functions


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
 // some code here
 // return results;
}


function main() {
 console.log("Main function started.");
 // the code that makes everything happen
}


// let's get this party started
main();
