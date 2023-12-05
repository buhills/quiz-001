function bckgrdColorChg () {
// Adding colors
  const colors = ['#ff0000', '#ff5723', '#32ff03', '#09fa02', '#98ff02']
  // Color display method
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
}
setInterval(bckgrdColorChg, 1500) // Delay duration after every color change
