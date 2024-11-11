/**
* Author: Nayezca Guzman-Jubb
* Created: 11.02.24
*
*/


function isEven(x){
    return (x % 2 == 0);
 }
 
 
 // test function
 console.log("Is 1 even? ", isEven(1));
 console.log("Is 2 even? ", isEven(2));
 
 
 array = [200, 64, 85, 780, 3000, 15, 2]
 console.log("My array", array);
 
 
 var result = array.map(isEven);
 console.log("Test of evenness of array:", result);
 
 
 var result = array.map(function(x){
    return x ** 0.5;
 })
 