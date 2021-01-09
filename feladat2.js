console.log("js running")

let no1 = window.prompt("Kérek egy számot");
let no2 = window.prompt("Kérek még egy számot");

no1 = Number.parseInt(no1);
no2 = Number.parseInt(no2);

//számítások

console.log(no1 + no2);

console.log(no1 * no2);

console.log(no1**no1);

console.log(no1**no2);

let kerulet = 2 * 3.14 * no1;
console.log(kerulet)

let terulet = 3.14 * no2 ** 2;
console.log(terulet);

let aabb = (no1 ** no1)+(no2 ** 2);
console.log(Math.sqrt(aabb));