console.log("js running")

let celsius = window.prompt("Írd be a celsius hőfokot");

celsius = Number.parseInt(celsius);

let result = (celsius * 1.8) + 32

console.log(result);
window.alert(result)