const links = document.querySelectorAll(
  'a[href*="#"]:not([href="#"]):not([href="#0"])'
)
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.hash)
    if (target) {
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  })
})
