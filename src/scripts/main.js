class SidebarListComponent {
  constructor(componentElement) {
    const listItem = componentElement.querySelectorAll("[data-component='sidebar-list-component-item']")
    for(let i = 0; i<listItem.length; i++) {
      listItem[i].addEventListener('click', () => {
        listItem[i].classList.toggle('active')
      })
    }
  }
}

class SidebarNav {
  constructor(sidebarElement) {

    this.bodyEl = document.querySelector('body')

    this.addEvents(
      document.querySelectorAll('[data-control="toggle-sidebar"]'),
      'sidebar-active'
    )

    const listComponent = sidebarElement.querySelectorAll("[data-component='sidebar-list-component']")

    for(let i = 0; i<listComponent.length; i++) {
      new SidebarListComponent(listComponent[i])
    }
  }

  addEvents(toggle, className) {
    for(let i = 0; i< toggle.length; i++) {
      toggle[i].addEventListener('click', () => {
        this.bodyEl.classList.toggle(className)
      })
    }
  }
}

function initMap() {
  const map = new google.maps.Map(document.getElementById('asset-map'), {
    center: {
      lat: 5.1214,
      lng: -52.0907
    },
    zoom: 8,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });
}

document.addEventListener("DOMContentLoaded", () => {

  if(document.querySelector('#sidebar')) {
    new SidebarNav(document.querySelector('#sidebar'))
  }

  const searchCloseToggle = document.querySelector("[data-toggle-icon='search-close']")
  const headerSearch = document.querySelector("[data-component='header-search']")
  if(searchCloseToggle && headerSearch) {
    headerSearch.addEventListener('keyup', (event) => {
      searchCloseToggle.innerHTML = event.target.value.length > 0 ? 'close' : 'search'
    })

    searchCloseToggle.addEventListener('click', () => {
      headerSearch.value = ''
      searchCloseToggle.innerHTML = 'search'
    })
  }
}, false)
