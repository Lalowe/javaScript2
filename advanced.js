function input(number) {
    let weeks = Math.floor(number / 604800)
    let rest = number % 604800;
    let days = Math.floor(rest / 86400);
    rest = rest % 86400;
    let hours = Math.floor(rest / 3600);
    rest = rest % 3600;
    let minutes = Math.floor(rest / 60);
    rest %= 60; // same like  rest = rest % 60 
    console.log(`It is ${weeks} weeks and ${days} days and ${hours} hours and ${minutes} minutes and ${rest} seconds`)

}
input(800000);


// input from user 
function input() {
    var number = prompt("Type your number")
    let weeks = Math.floor(number / 604800)
    let rest = number % 604800;
    let days = Math.floor(rest / 86400);
    rest = rest % 86400;
    let hours = Math.floor(rest / 3600);
    rest = rest % 3600;
    let minutes = Math.floor(rest / 60);
    rest %= 60; // same like  rest = rest % 60 
    console.log(`It is ${weeks} weeks and ${days} days and ${hours} hours and ${minutes} minutes and ${rest} seconds.`)

}
input(); // here we called functions