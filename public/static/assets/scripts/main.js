"use strict";

function initMap() {
  var map = new google.maps.Map(document.getElementById('asset-map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}

document.addEventListener("DOMContentLoaded", function () {}, false);