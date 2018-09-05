class TagToggler {
  constructor(element) {
    this.element = element
    this.addEvents(
      element.querySelector('[data-control="tags-toggle"]'),
      'show-tags'
    )
  }

  addEvents(toggle, className) {
    toggle.addEventListener('click', (event) => {
      event.preventDefault()
      this.element.classList.toggle(className)
    })
  }
}

class SidebarNav {
  constructor() {

    this.bodyEl = document.querySelector('body')

    this.addEvents(
      document.querySelectorAll('[data-control="toggle-sidebar"]'),
      'sidebar-active'
    )
  }

  addEvents(toggle, className) {
    for(let i = 0; i< toggle.length; i++) {
      toggle[i].addEventListener('click', () => {
        this.bodyEl.classList.toggle(className)
      })
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {

  const profileTags = document.querySelectorAll('[data-control="profile-tags"]')

  if(document.querySelector('#sidebar')) {
    new SidebarNav()
  }

  for(let i = 0; i<profileTags.length; i++) {
    new TagToggler(profileTags[i])
  }
}, false)
