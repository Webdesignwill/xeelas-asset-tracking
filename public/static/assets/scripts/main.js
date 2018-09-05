'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TagToggler = function () {
  function TagToggler(element) {
    _classCallCheck(this, TagToggler);

    this.element = element;
    this.addEvents(element.querySelector('[data-control="tags-toggle"]'), 'show-tags');
  }

  _createClass(TagToggler, [{
    key: 'addEvents',
    value: function addEvents(toggle, className) {
      var _this = this;

      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        _this.element.classList.toggle(className);
      });
    }
  }]);

  return TagToggler;
}();

var SidebarNav = function () {
  function SidebarNav() {
    _classCallCheck(this, SidebarNav);

    this.bodyEl = document.querySelector('body');

    this.addEvents(document.querySelectorAll('[data-control="toggle-sidebar"]'), 'sidebar-active');
  }

  _createClass(SidebarNav, [{
    key: 'addEvents',
    value: function addEvents(toggle, className) {
      var _this2 = this;

      for (var i = 0; i < toggle.length; i++) {
        toggle[i].addEventListener('click', function () {
          _this2.bodyEl.classList.toggle(className);
        });
      }
    }
  }]);

  return SidebarNav;
}();

document.addEventListener("DOMContentLoaded", function () {

  var profileTags = document.querySelectorAll('[data-control="profile-tags"]');

  if (document.querySelector('#sidebar')) {
    new SidebarNav();
  }

  for (var i = 0; i < profileTags.length; i++) {
    new TagToggler(profileTags[i]);
  }
}, false);