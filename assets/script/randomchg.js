function bckgrdColorChg () {
  const colors = ['#ff0000', '#ff5723', '#32ff03', '#09fa02', '#98ff02'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
setInterval(bckgrdColorChg, 1500);