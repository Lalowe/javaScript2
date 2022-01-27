//Serri
function age(birth_year) {
    let current_year = new Date().getFullYear();
    return current_year - birth_year;
}
let text = "You are";
console.log(`${text} ${age(1993)} old`);

//Ours
const age = (birthYear, currentYear) => {
    return currentYear - birthYear;
}
const currentDate = new Date();
let text = "You are";
console.log(`${text} ${age(1997, currentDate.getFullYear())} old`);