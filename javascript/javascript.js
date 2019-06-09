// Utility
const inView = element => {
  const rect = element.getBoundingClientRect()
  const top = rect.top
  const screenHeight = $(window).innerHeight()

  return top > 0 && top <= screenHeight
}

// Typewriting Effect
const typewriterElements = $(".typewriter")

const startTypewriter = element => {
  const text = element.textContent
  const textArr = text.split("")

  element.typing = true
  element.innerHTML = ""

  const intId = setInterval(() => {
    if (textArr.length < 1) {
      clearInterval(intId)
    }

    const word = textArr.splice(0, 1)

    element.innerHTML += word
  }, 3000 / textArr.length)
}

$(window).scroll(() => {
  for (let i = 0; i < typewriterElements.length; i++) {
    const element = typewriterElements[i]

    if (inView(element)) {
      element.inView = true

      if (element.typing !== true) {
        startTypewriter(element)
      }
    } else {
      element.inView = false
    }
  }
})

// Pop-in effect
const popInElements = $('.popper')

const addPop = element => {
  element.classList.add("pop")
}

$(window).scroll(() => {
  for (let i = 0; i < popInElements.length; i++) {
    const element = popInElements[i]

    if (inView(element)) {
      addPop(element)
    }
  }
})

$(window).ready(() => {
  $(window).trigger('scroll')
})



