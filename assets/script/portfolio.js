const headercontainer = document.getElementById('headercontainer')
// Creating porfolio sections

function createPortfolioSection (title, description) {
  const section = document.createElement('div')
  section.classList.add('portfolio-section')

  const titleElement = document.createElement('div')
  titleElement.classList.add('portfolio-title')
  titleElement.textContent = title

  const descriptionElement = document.createElement('div')
  descriptionElement.classList.add('portfolio-title')
  descriptionElement.textContent = title

  section.appendChild(titleElement)
  section.appendChild(descriptionElement)
  return section
}

// Add sections

headercontainer.appendChild(createPortfolioSection('About Me', 'Am a passionate developer with a strong background in HTML and CSS. Currently pursuing innovative solutions to real-world problems'))

