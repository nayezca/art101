/*
* This program prompts the user to enter their name, then sorts
* the letters alphabetically and displays the sorted name.
*/
function sortUserName() {
    // Prompt the user to enter their name
    var userName = window.prompt("Hi! Please enter your name so I can sort the letters.");
   
    // Check if userName is null (user clicked "Cancel" or closed the prompt)
    if (userName === null || userName === "") {
        return "No name provided";
    }
   
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =",nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
 }
 
 
 //output
 document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "<br>");