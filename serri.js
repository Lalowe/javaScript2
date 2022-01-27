/*var user = prompt("Type your name");
if (user == "Serri") { // if you want to comparing the value you use == , and if you use === then...
    console.log("Hello Admin");
} else {
    console.log("Hello User");
}

*/

/*var user = prompt("Type your name");
if (user == "Serri") { // if you want to comparing the value you use == , and if you use === then...
    console.log("Hello Admin");
} else if (user == "Delia") {
    console.log("Hello Delia");
} else {
    console.log("Hello User");
}
// to write in one line condition for Serri and Delia :  if (user == "Serri" ||"Delia" );


var number = Math.floor(Math.random()*31); // between one and 30 , withou math.floor it wil shown decimals
var number = Math.floor(Math.random()*31 -10; // it is going to - numbers and max tu 21 *20

if(number >= -10 && number <= 3) {
    console.log ("Weather is frezing")
} else if (number >= 4 && number <=10){
    console.log("Weather is cold");
} else if (number >= 11 && number <=22){
    console.log("weather is fine");
    else {
        console.log("weather is hot");
    }
}

or
if( number <= 3) {
    console.log ("Weather is frezing")
} else if (number <=10){
    console.log("Weather is cold");
} else if (number <=22){
    console.log("weather is fine");
    else {
        console.log("weather is hot");
    }
}


switch (number)  // when you passed (true) vzdy to ukaze nahodne log bez overovania number !!!// recomendation from serri better pase a strong{
case (number <= 3):
    console.log("Weahter is freezing");
    break; // when i do not want to continue 

    case (number <= 10):
    console.log("Weahter is freezing");
    break; // when i do not want to continue 

    case (number <= 22):
    console.log("Weahter is freezing");
    break; // when i do not want to continue 

    default: // is like else
        console.log ("Weather does not exist")
}

*/
function showMeNumber(i) {
    var num = document.getElementById("input").value;
    console.log(num, i);
}

//i want to triger showMeNumber by button here two solutions : plus one is in html
document.getElementBzId("btn").onclick = showMeNumber;
document.getElementBzId("btn").addEventListener("click", showMeNumber);
// tu napriklad este doplnim ze ked klikne tak ukazse showme number 7 a plus hello form console
document.getElementBzId("btn").onclick = function() {
    showMeNumber(7);
    console.log("Hello from console")
};