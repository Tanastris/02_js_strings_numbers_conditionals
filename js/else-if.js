"use strict";
console.log("else if loaded");

let sk1 = 5;
let rezultatas;
if (sk1 <= 10) {
  rezultatas = "nedidelis skaicius";
} else if (sk1 <= 60) {
  rezultatas = "vidutinis skaicius";
} else {
  rezultatas = "didelis skaicius";
}

console.log("rezultatas", rezultatas);
