`use strict`;

window.addEventListener("DOMContentLoaded", start);

let i = 0;
let maxLen = 10;
let result = [];

function start() {
  console.log("start");
  initLoop();
}

function initLoop() {
  console.log("initLoop");
  loop();
}

function loop() {
  //   console.log("loop");
  i++;
  if (i < maxLen) {
    result.unshift(i);
    console.log(result);
    // console.log("I nr.:", i);
    setTimeout(loop, 250);
    // loop();
  } else {
    i - 2;
    result.pop(i);
    result.unshift(i);
    console.log(result);
    setTimeout(loop, 250);
    // console.log("done");
  }
}
