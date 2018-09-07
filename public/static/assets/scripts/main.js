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

document.addEventListener("DOMContentLoaded", function () {}, false);