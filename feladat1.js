console.log("js running")

var name = window.prompt("Hogy hívnak?");
var favNum = window.prompt("Mi a kedvenc számod?");

//Név+szám

var result = "Név:" + name + ", " + "Kedvenc száma:" + favNum;

//Feladatok
console.log(result)
window.alert(result)
document.write(result)
document.getElementById("feladat1").innerHTML = result;