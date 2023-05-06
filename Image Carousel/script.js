const imgs = document.getElementById('imgs')
const prev = document.getElementById('left')
const next = document.getElementById('right') 

const img = document.querySelectorAll('#imgs img')

let idx = 0

// let interval = setInterval(run, 2000)

// function run () {
//   idx++

//   changeImg()
// }

function changeImg () {
  if (idx > img.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = img.length - 1  
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`
  
}

function resetInterval () {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

next.addEventListener('click', () => {
  idx++
  changeImg() 
  resetInterval()
}) 
prev.addEventListener('click', () => {
  idx--
  changeImg()
  resetInterval()
}) 