
function initMap() {
  const map = new google.maps.Map(document.getElementById('asset-map'), {
    center: {
      lat: 5.1214,
      lng: -52.0907
    },
    zoom: 8,
    zoomControl: false,
    streetViewControl: false
  });
}

document.addEventListener("DOMContentLoaded", () => {
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
