function crystalGazer(param1, param2, param3, param4) {
    let result = `${param1} in ${param2} and married ${param3} with numbers of childrens ${param4}`;
    console.log(result);
    return result; // vrati len do konzoly result , je to funkcia na zobrazovanie outputu rovnako ako doc.write,console.log,alert
}
crystalGazer("Manager", "Vienna", "Alexandra", 3);

var crystalGazer2 = (param1, param2, param3, param4) => { // to iste len zapisane inak !!! po novom !
    let result = `${param1} in ${param2} and married ${param3} with numbers of childrens ${param4}`;
    console.log(result);
}



crystalGazer2("name", "place", "test", 2);
document.write(crystalGazer("Manager", "Vienna", "Alexandra", 3));
alert(crystalGazer("Manager", "Vienna", "Alexandra", 3));