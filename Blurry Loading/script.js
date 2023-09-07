//Blur to decrease
//Percentage to rise
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;  
 
let int = setInterval(blurring, 20);

function blurring() {
  load++; 
  // if load is 100%, stop blurring
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  // percentage should be opaque then as int grows, becomes 100% opaque.
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // control the amoung of blur, 30 - 0
  bg.style.filter = `blur(${scale(load, 0, 100, 2, 0)}rem)`;
  // if load is under 100%, keep blurring
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
