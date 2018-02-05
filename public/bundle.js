/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Application = __webpack_require__(1);

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var application = new _Application2.default();

application.init();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

var _pixel_chuck = __webpack_require__(3);

var _pixel_chuck2 = _interopRequireDefault(_pixel_chuck);

var _Chuck = __webpack_require__(4);

var _Chuck2 = _interopRequireDefault(_Chuck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
  function Application() {
    _classCallCheck(this, Application);

    this.chuckImage = document.querySelector('.chuck__image');
    this.closeChuck = document.querySelector('.chuck__close');

    this.initDefaultEvents = this.initDefaultEvents.bind(this);
    this.unsetDefaultEvents = this.unsetDefaultEvents.bind(this);

    this.init = this.init.bind(this);

    this.Chuck = new _Chuck2.default(this.initDefaultEvents, this.unsetDefaultEvents, this.chuckImage);
  }

  _createClass(Application, [{
    key: 'init',
    value: function init() {
      this.chuckImage.setAttribute('src', _pixel_chuck2.default);
      this.initDefaultEvents();
    }
  }, {
    key: 'initDefaultEvents',
    value: function initDefaultEvents() {
      this.chuckImage.addEventListener('mouseout', this.Chuck.mouseleftFromChuck);
      this.chuckImage.addEventListener('mouseover', this.Chuck.mouseoverChuck);
      this.chuckImage.addEventListener('click', this.Chuck.talk);

      this.chuckImage.removeEventListener('click', this.Chuck.thanks);
      this.closeChuck.removeEventListener('click', this.Chuck.thanks);
    }
  }, {
    key: 'unsetDefaultEvents',
    value: function unsetDefaultEvents() {
      this.chuckImage.removeEventListener('mouseout', this.Chuck.mouseleftFromChuck);
      this.chuckImage.removeEventListener('mouseover', this.Chuck.mouseoverChuck);
      this.chuckImage.removeEventListener('click', this.Chuck.talk);
      this.chuckImage.removeEventListener('click', this.Chuck.thanks);

      this.chuckImage.addEventListener('click', this.Chuck.thanks);
      this.closeChuck.addEventListener('click', this.Chuck.thanks);
    }
  }]);

  return Application;
}();

exports.default = Application;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Network = __webpack_require__(5);

var _Network2 = _interopRequireDefault(_Network);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chuck = function () {
  function Chuck(initDefaultEvents, unsetDefaultEvents, chuckImage) {
    _classCallCheck(this, Chuck);

    this.talk = this.talk.bind(this); // call chuck
    this.thanks = this.thanks.bind(this); // close chuck
    this.mouseoverChuck = this.mouseoverChuck.bind(this);
    this.mouseleftFromChuck = this.mouseleftFromChuck.bind(this);
    this.changeAnimationKeyFrame = this.changeAnimationKeyFrame.bind(this);

    this.initDefaultEvents = initDefaultEvents;
    this.unsetDefaultEvents = unsetDefaultEvents;

    this.jokeBoard = document.querySelector('.chuck__joke');
    this.chuckImage = chuckImage;

    this.network = new _Network2.default();
  }

  _createClass(Chuck, [{
    key: 'mouseoverChuck',
    value: function mouseoverChuck(e) {
      var item = e.target;
      // calculate Bottom value
      var currentBottom = -(60 + (item.offsetTop + 1));
      this.changeAnimationKeyFrame(currentBottom);
      item.classList.add('animation-focused');
    }
  }, {
    key: 'mouseleftFromChuck',
    value: function mouseleftFromChuck(e) {
      e.target.classList.remove('animation-focused');
    }
  }, {
    key: 'changeAnimationKeyFrame',
    value: function changeAnimationKeyFrame(currentBottom) {
      var rules = document.styleSheets[0].cssRules;
      var newRule = void 0;

      for (var item in rules) {
        if (rules.hasOwnProperty(item) && rules[item].constructor.name == "CSSKeyframesRule") {
          if (rules[item].name == "animation-focused") {
            newRule = rules[item].cssText.replace(/bottom: (-?\d{1,})px;/, 'bottom: ' + currentBottom + 'px');
          }

          if (newRule !== undefined) {
            document.styleSheets[0].deleteRule(item);
            document.styleSheets[0].insertRule(newRule, item);
          }
        }
      }
    }
  }, {
    key: 'talk',
    value: function talk(e) {
      var item = e.target;
      item.classList.remove('animation-focused');
      item.classList.remove('animation-jumping');

      this.unsetDefaultEvents();

      this.jokeBoard.classList.add('chuck__joke--open');
      this.network.getJoke();

      setTimeout(function () {
        // slow unsetting events
        item.style.bottom = "10px";
      }, 10);
    }
  }, {
    key: 'thanks',
    value: function thanks(e) {
      var _this = this;

      var item = e.target;
      this.chuckImage.classList.add('animation-jumping');

      this.initDefaultEvents();
      this.jokeBoard.classList.remove('chuck__joke--open');

      setTimeout(function () {
        _this.chuckImage.removeAttribute('style');
      }, 0);
    }
  }]);

  return Chuck;
}();

exports.default = Chuck;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Network = function () {
  function Network() {
    _classCallCheck(this, Network);

    this.getJoke = this.getJoke.bind(this);
  }

  _createClass(Network, [{
    key: "getJoke",
    value: function getJoke() {
      var xhr = new XMLHttpRequest();

      var resolver = function resolver() {
        if (this.readyState == 4 && this.status == 200) {
          var joke = JSON.parse(xhr.responseText).value;

          var board = document.querySelector('.chuck__content');
          board.innerHTML = joke;
        }
      };

      xhr.onreadystatechange = resolver;
      xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
      xhr.send();
    }
  }, {
    key: "sendNumber",
    value: function sendNumber() {
      var xhr = new XMLHttpRequest();

      var resolver = function resolver() {
        if (this.readyState == 4 && this.status == 200) {
          var joke = JSON.parse(xhr.responseText).value;

          var board = document.querySelector('.chuck__content');
          board.innerHTML = joke;
        }
      };

      xhr.onreadystatechange = resolver;
      xhr.open("POST", "/send", true);
      xhr.send();
    }
  }]);

  return Network;
}();

exports.default = Network;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map