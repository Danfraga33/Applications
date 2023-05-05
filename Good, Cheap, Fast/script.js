const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.querySelector('#fast')
const img = document.querySelector(".img")
const sun = document.querySelector(".sun")
const sundown = document.querySelector(".sun-down")
const night = document.querySelector(".Night")

toggles.forEach(toggle => toggle.addEventListener('change', () => showImg()))

function showImg() {
  if (good.checked) {
    resetSwitch()
    removeImgs()
    sun.style.display = "block"
  }
  
  if (cheap.checked) {
    resetSwitch()
    removeImgs()
    sundown.style.display = "block"
  }
  if (fast.checked) {
    resetSwitch()
    removeImgs()
    night.style.display = "block"
  }
  

}

function resetSwitch () {
  if (good.checked) {
    cheap.checked = false
    fast.checked = false
  }
   if (cheap.checked) {
    good.checked = false
    fast.checked = false
  }
  else if (fast.checked) {
    cheap.checked = false
    good.checked = false
  }
}

function removeImgs () {
  sun.style.display = "none"
  night.style.display = "none"
  sundown.style.display = "none"
}
// toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

// function doTheTrick(theClickedOne) {
//   if (good.checked && cheap.checked && fast.checked) {
//     if (good === theClickedOne) {
//     fast.checked = false
//   }
   
//     if (cheap === theClickedOne) {
//       good.checked = false
//     }

//     if (fast === theClickedOne) {
//       cheap.checked = false
//     }
//   }
// } 

