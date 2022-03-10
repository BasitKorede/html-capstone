const toggleButton = document.querySelector('.toggle-button')
const menuButton = document.querySelector('.x-button')
const navbarLinks = document.querySelector('.nav-ul')
const bodyElement = document.querySelector('body')
const featuredSpeaker = document.querySelector('.featured-speakers-ul')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none')
  toggleButton.classList.add('display-none')
  menuButton.classList.toggle('display-none')
  bodyElement.style.overflow = 'hidden'
})

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none')
  toggleButton.classList.toggle('display-none')
  menuButton.classList.toggle('display-none')
  bodyElement.style.overflow = 'auto'
})

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('display-none')
  toggleButton.classList.toggle('display-none')
  menuButton.classList.toggle('display-none')
  bodyElement.style.overflow = 'auto'
})