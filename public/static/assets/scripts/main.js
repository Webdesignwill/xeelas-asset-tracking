"use strict";

function initMap() {
  var map = new google.maps.Map(document.getElementById('asset-map'), {
    center: {
      lat: 5.1214,
      lng: -52.0907
    },
    zoom: 8,
    zoomControl: false,
    streetViewControl: false
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var searchCloseToggle = document.querySelector("[data-toggle-icon='search-close']");
  var headerSearch = document.querySelector("[data-component='header-search']");
  if (searchCloseToggle && headerSearch) {
    headerSearch.addEventListener('keyup', function (event) {
      searchCloseToggle.innerHTML = event.target.value.length > 0 ? 'close' : 'search';
    });

    searchCloseToggle.addEventListener('click', function () {
      headerSearch.value = '';
      searchCloseToggle.innerHTML = 'search';
    });
  }
}, false);