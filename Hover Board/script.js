const container = document.getElementById("container");
const colors = ["#4e0866", "#7ea459", "#0deaf5", "#729178"];
const SQUARES = 500;

// 1. Create 500 Squares as a div element
// 2. Add setColor Function (randomColors as well)
// 3. Add removeColor fading function
// 4. Add the squares as a child to the container parent element

for (let i = 0; i < SQUARES; i++) {
  // ???? 500 times
  const square = document.createElement("div");
  square.classList.add("square");
  // Adds a square div 500 times

  square.addEventListener("mouseover", () => setColor(square));
  // Adds setColor when mouseovers the square
  square.addEventListener("mouseout", () => removeColor(square));
  // Adds removeColor when mouseouts the square
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = "0 0 2px ${color}, 0 0 10px ${color}";
}
// setColor function

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}
// removeColor Function

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
// getRandomColor Function
