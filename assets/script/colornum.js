const container = document.getElementById('main-container')

// checkpoint for prime numbers 
function prime (num) {
  if (num < 2) return false
  for(let i = 2; i <= Math.sqrt(num); i++ ) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

for (let i = 1; i <= 100; i++) {
  const numCont = document.createElement('div')
  numCont.className = 'numba'
  numCont.textContent = i
  if (i % 2 === 0) {
    numCont.classList.add("even")
  } else {
    numCont.classList.add("odd")
  }
  if (prime(i)) {
    numCont.classList.add("prime")
  }
  container.appendChild(numCont)
}
