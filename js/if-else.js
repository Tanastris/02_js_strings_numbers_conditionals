"use strict";
console.log("if else loaded");

// //palyginimas
// console.log("(5 < 10)", 5 < 10);
// console.log("(5 > 10)", 5 > 10);

// //if blokas

/*
if (salyga) {
  ivyks jei salyga yra true (truefy)

}


// */
// let num1 = "devyni";
// if (num1 < 10) {
//   console.log(`tiesa ${num1} < 10`);
// } else {
//   console.log(`${num1} nera maziau uz 10`);
// }

let sk1 = +prompt("iveskite skaiciu");
console.log(typeof sk1);
console.log(sk1);
if (sk1 === 19) {
  console.log("jusu skaicius lygus 19");
} else if (typeof sk1 === "number") {
  console.log("jusu skaicius nelygus 19");
} else {
  console.log("iveskite skaiciu");
}
