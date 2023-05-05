const container = document.querySelector(".container");
const unsplashurl = "https://source.unsplash.com/random/";
const dropDown = document.querySelector("#rowCount");

let rows = 15;

function changedValue() {
  dropDown.addEventListener("change", function (event) {
    rows = +event.target.value;
    generateImages();
  });
}

generateImages();

function generateImages() {
  container.innerHTML = "";
  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashurl}${getRandomSize()}`;
    container.appendChild(img);
    changedValue();
  }
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
