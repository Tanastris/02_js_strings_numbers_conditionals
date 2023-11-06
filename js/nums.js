"use strict";
console.log("nums.js");

let num1 = 4.4;
console.log("num1: ", num1);
console.group("floor ceil round");
// floor
console.log("Floor-------");
console.log("Math.floor(num1)", Math.floor(num1));
console.log("Math.floor(4.99)", Math.floor(4.99));
console.log("Math.floor(-4.99)", Math.floor(-4.99));
// ceil
console.log("CEIL-------");
console.log("Math.ceil(num1)", Math.ceil(num1));
console.log("Math.ceil(4.99)", Math.ceil(4.99));
console.log("Math.ceil(-4.99)", Math.ceil(-4.99));
// round
console.log("round-------");
console.log("Math.round(num1)", Math.round(num1));
console.log("Math.round(4.99)", Math.round(4.99));
console.log("Math.round(-4.99)", Math.round(-4.99));
// trunc
console.log("trunc-------");
console.log("Math.trunc(num1)", Math.trunc(num1));
console.log("Math.trunc(4.99)", Math.trunc(4.99));
console.log("Math.trunc(-4.99)", Math.trunc(-4.99));
console.groupEnd();

Math.max(5, 10 - 5, 2);
console.log("Math.max(5, 10 -5, 2)", Math.max(5, 10 - 5, 2));
console.log("Math.min(5, 10 -5, 2)", Math.min(5, 10 - 5, 2));

Math.random();
console.log("Math.random()", Math.random());
let randUpTo100 = Math.floor(Math.random() * 100 + 1);
console.log("randUpTo100", randUpTo100);

Math.abs(-45); // absoliutus skaicius(teigiamas)
console.log(Math.abs(-45.4));

console.log("1.2e9", 1.2e9);
console.log("1.2e-9", 1.2e-9);
