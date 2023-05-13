const smallCups = document.querySelectorAll('.cup-small') 
const litres = document.querySelector("#litres")
const percentage = document.querySelector("#percentage")
const remained = document.querySelector("#remained")



updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups (idx) {
  if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
  else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
  } else {
    cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup () {
  const inputGoal = document.querySelector('#goal')
  const goal = document.querySelector('.goalText')
  const btn = document.querySelector('button')

  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if (fullCups === totalCups) {
   remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    btn.addEventListener('click', () => {
      goal.innerText = `Goal: ${inputGoal.value} Litres`
    })
    remained.style.visibility = 'visible'
    litres.innerText = `${inputGoal.value - ((fullCups / totalCups) * inputGoal.value) }L`
    

  }
}