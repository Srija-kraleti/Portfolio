/*==================== MENU SHOW / HIDDEN ====================*/
const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== CLOSE MENU ON LINK CLICK ====================*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader  = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach(el => el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const tabs        = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => tc.classList.remove('qualification__active'))
        target.classList.add('qualification__active')

        tabs.forEach(t => t.classList.remove('qualification__active'))
        tab.classList.add('qualification__active')
    })
})

/*==================== ACTIVE NAV LINK ON SCROLL ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop    = current.offsetTop - 50,
              sectionId     = current.getAttribute('id'),
              navLink       = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link')
            } else {
                navLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ON SCROLL ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP BUTTON ====================*/
function scrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up')
    if (this.scrollY >= 560) {
        scrollUpBtn.classList.add('show-scroll')
    } else {
        scrollUpBtn.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK / LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme   = 'dark-theme'
const iconTheme   = 'uil-sun'

// Load previously saved preference
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon  = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== CONTACT FORM ====================*/
const contactForm = document.getElementById('contact-form')

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault()

        const name    = document.getElementById('contact-name').value.trim()
        const email   = document.getElementById('contact-email').value.trim()
        const message = document.getElementById('contact-message').value.trim()

        if (!name || !email || !message) {
            alert('Please fill in all fields before sending.')
            return
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.')
            return
        }

        // When you set up a backend or EmailJS, replace this block
        alert('Thank you, ' + name + '! Your message has been received. I will get back to you soon.')
        contactForm.reset()
    })
}
