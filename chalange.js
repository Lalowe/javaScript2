function atm() {
    var input = prompt("Insert a amount of whitdraw")
    let firstBanknote = Math.floor(input / 500)
    let rest = input % 500;
    let secondBanknote = Math.floor(rest / 200)
    rest = rest % 200;
    let thirdBanknote = Math.floor(rest / 100)
    rest = rest % 100;
    let fourthBanknote = Math.floor(rest / 50)
    rest = rest % 50;
    let fifthBanknote = Math.floor(rest / 20)
    rest = rest % 20;
    let sixthBanknote = Math.floor(rest / 10)
    rest = rest % 10;
    let seventhBanknote = Math.floor(rest / 5)
    rest = rest % 5;

    console.log(`You will get ${firstBanknote} 500 notes   ${secondBanknote} 200 notes ${thirdBanknote}  100 notes ${fourthBanknote} 50 notes ${fifthBanknote} 20 notes  ${sixthBanknote} 10 notes ${seventhBanknote} 5 notes`)
}
atm()