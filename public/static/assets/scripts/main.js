'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AssetCard = function AssetCard(assetCardElement) {
  _classCallCheck(this, AssetCard);

  var assetDetailView = document.querySelector("[data-component='assets-list-view']");

  assetCardElement.addEventListener('click', function () {
    assetDetailView.classList.toggle('active');
  });

  var closeAssetDetail = document.querySelector("[data-component='close-detail-view']").addEventListener('click', function () {
    assetDetailView.classList.remove('active');
  });
};

var SidebarListComponent = function SidebarListComponent(componentElement) {
  _classCallCheck(this, SidebarListComponent);

  var listItem = componentElement.querySelectorAll("[data-component='sidebar-list-component-item']");

  var _loop = function _loop(i) {
    listItem[i].addEventListener('click', function () {
      listItem[i].classList.toggle('active');
    });
  };

  for (var i = 0; i < listItem.length; i++) {
    _loop(i);
  }
};

var SidebarNav = function () {
  function SidebarNav(sidebarElement) {
    _classCallCheck(this, SidebarNav);

    this.bodyEl = document.querySelector('body');

    this.addEvents(document.querySelectorAll('[data-control="toggle-sidebar"]'), 'sidebar-active');

    var listComponent = sidebarElement.querySelectorAll("[data-component='sidebar-list-component']");

    for (var i = 0; i < listComponent.length; i++) {
      new SidebarListComponent(listComponent[i]);
    }
  }

  _createClass(SidebarNav, [{
    key: 'addEvents',
    value: function addEvents(toggle, className) {
      var _this = this;

      for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener('click', function () {
          _this.bodyEl.classList.toggle(className);
        });
      }
    }
  }]);

  return SidebarNav;
}();

function initMap() {
  var map = new google.maps.Map(document.getElementById('asset-map'), _defineProperty({
    center: {
      lat: 5.1214,
      lng: -52.0907
    },
    zoom: 8,
    streetViewControl: false,
    mapTypeControl: false,
    zoomControl: false
  }, 'streetViewControl', false));
}

document.addEventListener("DOMContentLoaded", function () {

  var assetCards = document.querySelectorAll("[data-component='asset-card']");
  if (assetCards.length) {
    for (var i = 0; i < assetCards.length; i++) {
      new AssetCard(assetCards[i]);
    }
  }

  if (document.querySelector('#sidebar')) {
    new SidebarNav(document.querySelector('#sidebar'));
  }

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