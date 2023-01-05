"use strict";

let colors = ["piros", "kék", "sárga", "zöld"];

let mixing = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      counter++;
    }
  }
  console.log(counter);
};

mixing(colors);
