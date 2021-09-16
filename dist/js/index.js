/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/insert-css/index.js":
/*!*******************************************!*\
  !*** ../node_modules/insert-css/index.js ***!
  \*******************************************/
/***/ (function(module) {

var inserted = [];

module.exports = function (css) {
  if (inserted.indexOf(css) >= 0) return;
  inserted.push(css);
  var elem = document.createElement('style');
  var text = document.createTextNode(css);
  elem.appendChild(text);

  if (document.head.childNodes.length) {
    document.head.insertBefore(elem, document.head.childNodes[0]);
  } else {
    document.head.appendChild(elem);
  }
};

/***/ }),

/***/ "../node_modules/normalize-css/index.js":
/*!**********************************************!*\
  !*** ../node_modules/normalize-css/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var insert = __webpack_require__(/*! insert-css */ "../node_modules/insert-css/index.js");

var normalize = __webpack_require__(/*! ./normalize */ "../node_modules/normalize-css/normalize.js");

insert(normalize);

/***/ }),

/***/ "../node_modules/normalize-css/normalize.js":
/*!**************************************************!*\
  !*** ../node_modules/normalize-css/normalize.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "/*! normalize.css v2.1.3 | MIT License | git.io/normalize */\n\n/* ==========================================================================\n   HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined in IE 8/9.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n    display: block;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 8/9.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9.\n * Hide the `template` element in IE, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n    display: none;\n}\n\n/* ==========================================================================\n   Base\n   ========================================================================== */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-family: sans-serif; /* 1 */\n    -ms-text-size-adjust: 100%; /* 2 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n    background: transparent;\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/* ==========================================================================\n   Typography\n   ========================================================================== */\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari 5, and Chrome.\n */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9, Safari 5, and Chrome.\n */\n\nabbr[title] {\n    border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\n */\n\nb,\nstrong {\n    font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari 5 and Chrome.\n */\n\ndfn {\n    font-style: italic;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n    background: #ff0;\n    color: #000;\n}\n\n/**\n * Correct font family set oddly in Safari 5 and Chrome.\n */\n\ncode,\nkbd,\npre,\nsamp {\n    font-family: monospace, serif;\n    font-size: 1em;\n}\n\n/**\n * Improve readability of pre-formatted text in all browsers.\n */\n\npre {\n    white-space: pre-wrap;\n}\n\n/**\n * Set consistent quote types.\n */\n\nq {\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsup {\n    top: -0.5em;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\n/* ==========================================================================\n   Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9.\n */\n\nimg {\n    border: 0;\n}\n\n/**\n * Correct overflow displayed oddly in IE 9.\n */\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n/* ==========================================================================\n   Figures\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari 5.\n */\n\nfigure {\n    margin: 0;\n}\n\n/* ==========================================================================\n   Forms\n   ========================================================================== */\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Correct font family not being inherited in all browsers.\n * 2. Correct font size not being inherited in all browsers.\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 2 */\n    margin: 0; /* 3 */\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/* ==========================================================================\n   Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n";

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/normalize-css */ "../node_modules/normalize-css/index.js");
/* harmony import */ var _node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/normalize-scss */ "../node_modules/normalize-scss/sass/_normalize.scss");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ "./js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ (function() {

const menu_links = document.querySelectorAll(".nav__link");
window.addEventListener('scroll', function () {
  let winScroll = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = winScroll / scrollHeight * 100;
  document.querySelector(".menu-slider.menu-slider_active").style.width = scrolled + "%";
});

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ (function() {

/**
 * ChiefSlider by Itchief v2.0.0 (https://github.com/itchief/ui-components/tree/master/simple-adaptive-slider)
 * Copyright 2020 - 2021 Alexander Maltsev
 * Licensed under MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 */
(function () {
  if (typeof window.CustomEvent === 'function') return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return e;
  }

  window.CustomEvent = CustomEvent;
})();

var WRAPPER_SELECTOR = '.slider__wrapper';
var ITEMS_SELECTOR = '.slider__items';
var ITEM_SELECTOR = '.slider__item';
var CONTROL_CLASS = 'slider__control';
/* var ITEM_CLASS_ACTIVE = 'slider__item_active';
var CONTROL_SELECTOR = '.slider__control';
var CONTROL_CLASS_SHOW = 'slider__control_show';
// индикаторы
var INDICATOR_WRAPPER_ELEMENT = 'ol';
var INDICATOR_WRAPPER_CLASS = 'slider__indicators';
var INDICATOR_ITEM_ELEMENT = 'li';
var INDICATOR_ITEM_CLASS = 'slider__indicator';
var INDICATOR_ITEM_CLASS_ACTIVE = 'slider__indicator_active';
// порог для переключения слайда (40%)
var POS_THRESHOLD = 40;
// класс для отключения transition
var TRANSITION_NONE = 'transition-none';*/

var SELECTOR_PREV = '.slider__control[data-slide="prev"]';
var SELECTOR_NEXT = '.slider__control[data-slide="next"]';
var SELECTOR_INDICATOR = '.slider__indicators>li';
var SLIDER_TRANSITION_OFF = 'slider_disable-transition';
var CLASS_CONTROL_HIDE = 'slider__control_hide';
var CLASS_ITEM_ACTIVE = 'slider__item_active';
var CLASS_INDICATOR_ACTIVE = 'active';

function ChiefSlider(selector, config) {
  // элементы слайдера
  var $root = typeof selector === 'string' ? document.querySelector(selector) : selector;
  this._$root = $root;
  this._$wrapper = $root.querySelector(WRAPPER_SELECTOR);
  this._$items = $root.querySelector(ITEMS_SELECTOR);
  this._$itemList = $root.querySelectorAll(ITEM_SELECTOR);
  this._$controlPrev = $root.querySelector(SELECTOR_PREV);
  this._$controlNext = $root.querySelector(SELECTOR_NEXT);
  this._$indicatorList = $root.querySelectorAll(SELECTOR_INDICATOR); // экстремальные значения слайдов

  this._minOrder = 0;
  this._maxOrder = 0;
  this._$itemWithMinOrder = null;
  this._$itemWithMaxOrder = null;
  this._minTranslate = 0;
  this._maxTranslate = 0; // направление смены слайдов (по умолчанию)

  this._direction = 'next'; // determines whether the position of item needs to be determined

  this._balancingItemsFlag = false;
  this._activeItems = []; // текущее значение трансформации

  this._transform = 0; // swipe параметры

  this._hasSwipeState = false;
  this.__swipeStartPos = 0; // slider properties

  this._transform = 0; // текущее значение трансформации

  this._intervalId = null; // configuration of the slider

  this._config = {
    loop: true,
    autoplay: false,
    interval: 5000,
    refresh: true,
    swipe: true
  };

  for (var key in config) {
    if (this._config.hasOwnProperty(key)) {
      this._config[key] = config[key];
    }
  } // create some constants


  var $itemList = this._$itemList;
  var widthItem = $itemList[0].offsetWidth;
  var widthWrapper = this._$wrapper.offsetWidth;
  var itemsInVisibleArea = Math.round(widthWrapper / widthItem); // initial setting properties

  this._widthItem = widthItem;
  this._widthWrapper = widthWrapper;
  this._itemsInVisibleArea = itemsInVisibleArea;
  this._transformStep = 100 / itemsInVisibleArea; // initial setting order and translate items

  for (var i = 0, length = $itemList.length; i < length; i++) {
    $itemList[i].dataset.index = i;
    $itemList[i].dataset.order = i;
    $itemList[i].dataset.translate = 0;

    if (i < itemsInVisibleArea) {
      this._activeItems.push(i);
    }
  }

  if (this._config.loop) {
    // перемещаем последний слайд перед первым
    var count = $itemList.length - 1;
    var translate = -$itemList.length * 100;
    $itemList[count].dataset.order = -1;
    $itemList[count].dataset.translate = -$itemList.length * 100;
    $itemList[count].style.transform = 'translateX(' + translate + '%)';

    this.__refreshExtremeValues();
  } else {
    if (this._$controlPrev) {
      this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
    }
  }

  this._setActiveClass();

  this._addEventListener();

  this._updateIndicators();

  this._autoplay();
} // подключения обработчиков событий для слайдера


ChiefSlider.prototype._addEventListener = function () {
  var $root = this._$root;
  var $items = this._$items;
  var config = this._config;

  function onClick(e) {
    var $target = e.target;

    this._autoplay('stop');

    if ($target.classList.contains(CONTROL_CLASS)) {
      e.preventDefault();
      this._direction = $target.dataset.slide;

      this._move();
    } else if ($target.dataset.slideTo) {
      var index = parseInt($target.dataset.slideTo);

      this._moveTo(index);
    }

    if (this._config.loop) {
      this._autoplay();
    }
  }

  function onMouseEnter(e) {
    this._autoplay('stop');
  }

  function onMouseLeave(e) {
    this._autoplay();
  }

  function onTransitionStart() {
    if (this._balancingItemsFlag) {
      return;
    }

    this._balancingItemsFlag = true;
    window.requestAnimationFrame(this._balancingItems.bind(this));
  }

  function onTransitionEnd() {
    this._balancingItemsFlag = false;
  }

  function onResize() {
    window.requestAnimationFrame(this._refresh.bind(this));
  }

  function onSwipeStart(e) {
    this._autoplay('stop');

    var event = e.type.search('touch') === 0 ? e.touches[0] : e;
    this._swipeStartPos = event.clientX;
    this._hasSwipeState = true;
  }

  function onSwipeEnd(e) {
    if (!this._hasSwipeState) {
      return;
    }

    var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    var diffPos = this._swipeStartPos - event.clientX;

    if (diffPos > 50) {
      this._direction = 'next';

      this._move();
    } else if (diffPos < -50) {
      this._direction = 'prev';

      this._move();
    }

    this._hasSwipeState = false;

    if (this._config.loop) {
      this._autoplay();
    }
  }

  function onDragStart(e) {
    e.preventDefault();
  }

  function onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this._autoplay('stop');
    } else if (document.visibilityState === 'visible') {
      if (this._config.loop) {
        this._autoplay();
      }
    }
  }

  $root.addEventListener('click', onClick.bind(this));
  $root.addEventListener('mouseenter', onMouseEnter.bind(this));
  $root.addEventListener('mouseleave', onMouseLeave.bind(this)); // on resize

  if (config.refresh) {
    window.addEventListener('resize', onResize.bind(this));
  } // on transitionstart and transitionend


  if (config.loop) {
    $items.addEventListener('transition-start', onTransitionStart.bind(this));
    $items.addEventListener('transitionend', onTransitionEnd.bind(this));
  } // on touchstart and touchend


  if (config.swipe) {
    $root.addEventListener('touchstart', onSwipeStart.bind(this));
    $root.addEventListener('mousedown', onSwipeStart.bind(this));
    document.addEventListener('touchend', onSwipeEnd.bind(this));
    document.addEventListener('mouseup', onSwipeEnd.bind(this));
  }

  $root.addEventListener('dragstart', onDragStart.bind(this)); // при изменении активности вкладки

  document.addEventListener('visibilitychange', onVisibilityChange.bind(this));
}; // update values of extreme properties


ChiefSlider.prototype.__refreshExtremeValues = function () {
  var $itemList = this._$itemList;
  this._minOrder = +$itemList[0].dataset.order;
  this._maxOrder = this._minOrder;
  this._$itemByMinOrder = $itemList[0];
  this._$itemByMaxOrder = $itemList[0];
  this._minTranslate = +$itemList[0].dataset.translate;
  this._maxTranslate = this._minTranslate;

  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var order = +$item.dataset.order;

    if (order < this._minOrder) {
      this._minOrder = order;
      this._$itemByMinOrder = $item;
      this._minTranslate = +$item.dataset.translate;
    } else if (order > this._maxOrder) {
      this._maxOrder = order;
      this._$itemByMaxOrder = $item;
      this._minTranslate = +$item.dataset.translate;
    }
  }
}; // update position of item


ChiefSlider.prototype._balancingItems = function () {
  if (!this._balancingItemsFlag) {
    return;
  }

  var $wrapper = this._$wrapper;
  var $wrapperClientRect = $wrapper.getBoundingClientRect();
  var widthHalfItem = $wrapperClientRect.width / this._itemsInVisibleArea / 2;
  var count = this._$itemList.length;
  var translate;
  var clientRect;

  if (this._direction === 'next') {
    var wrapperLeft = $wrapperClientRect.left;
    var $min = this._$itemByMinOrder;
    translate = this._minTranslate;
    clientRect = $min.getBoundingClientRect();

    if (clientRect.right < wrapperLeft - widthHalfItem) {
      $min.dataset.order = this._minOrder + count;
      translate += count * 100;
      $min.dataset.translate = translate;
      $min.style.transform = 'translateX('.concat(translate, '%)'); // update values of extreme properties

      this.__refreshExtremeValues();
    }
  } else {
    var wrapperRight = $wrapperClientRect.right;
    var $max = this._$itemByMaxOrder;
    translate = this._maxTranslate;
    clientRect = $max.getBoundingClientRect();

    if (clientRect.left > wrapperRight + widthHalfItem) {
      $max.dataset.order = this._maxOrder - count;
      translate -= count * 100;
      $max.dataset.translate = translate;
      $max.style.transform = 'translateX('.concat(translate, '%)'); // update values of extreme properties

      this.__refreshExtremeValues();
    }
  } // updating...


  requestAnimationFrame(this._balancingItems.bind(this));
}; // _setActiveClass


ChiefSlider.prototype._setActiveClass = function () {
  var activeItems = this._activeItems;
  var $itemList = this._$itemList;

  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var index = +$item.dataset.index;

    if (activeItems.indexOf(index) > -1) {
      $item.classList.add(CLASS_ITEM_ACTIVE);
    } else {
      $item.classList.remove(CLASS_ITEM_ACTIVE);
    }
  }
}; // _updateIndicators


ChiefSlider.prototype._updateIndicators = function () {
  var $indicatorList = this._$indicatorList;
  var $itemList = this._$itemList;

  if (!$indicatorList.length) {
    return;
  }

  for (var index = 0, length = $itemList.length; index < length; index++) {
    var $item = $itemList[index];

    if ($item.classList.contains(CLASS_ITEM_ACTIVE)) {
      $indicatorList[index].classList.add(CLASS_INDICATOR_ACTIVE);
    } else {
      $indicatorList[index].classList.remove(CLASS_INDICATOR_ACTIVE);
    }
  }
}; // move slides


ChiefSlider.prototype._move = function () {
  var step = this._direction === 'next' ? -this._transformStep : this._transformStep;
  var transform = this._transform + step;

  if (!this._config.loop) {
    var endTransformValue = this._transformStep * (this._$itemList.length - this._itemsInVisibleArea);
    transform = Math.round(transform * 10) / 10;

    if (transform < -endTransformValue || transform > 0) {
      return;
    }

    this._$controlPrev.classList.remove(CLASS_CONTROL_HIDE);

    this._$controlNext.classList.remove(CLASS_CONTROL_HIDE);

    if (transform === -endTransformValue) {
      this._$controlNext.classList.add(CLASS_CONTROL_HIDE);
    } else if (transform === 0) {
      this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
    }
  }

  var activeIndex = [];
  var i = 0;
  var length;
  var index;
  var newIndex;

  if (this._direction === 'next') {
    for (i = 0, length = this._activeItems.length; i < length; i++) {
      index = this._activeItems[i];
      newIndex = ++index;

      if (newIndex > this._$itemList.length - 1) {
        newIndex -= this._$itemList.length;
      }

      activeIndex.push(newIndex);
    }
  } else {
    for (i = 0, length = this._activeItems.length; i < length; i++) {
      index = this._activeItems[i];
      newIndex = --index;

      if (newIndex < 0) {
        newIndex += this._$itemList.length;
      }

      activeIndex.push(newIndex);
    }
  }

  this._activeItems = activeIndex;

  this._setActiveClass();

  this._updateIndicators();

  this._transform = transform;
  this._$items.style.transform = 'translateX(' + transform + '%)';

  this._$items.dispatchEvent(new CustomEvent('transition-start', {
    bubbles: true
  }));
}; // _moveToNext


ChiefSlider.prototype._moveToNext = function () {
  this._direction = 'next';

  this._move();
}; // _moveToPrev


ChiefSlider.prototype._moveToPrev = function () {
  this._direction = 'prev';

  this._move();
}; // _moveTo


ChiefSlider.prototype._moveTo = function (index) {
  var $indicatorList = this._$indicatorList;
  var nearestIndex = null;
  var diff = null;
  var i;
  var length;

  for (i = 0, length = $indicatorList.length; i < length; i++) {
    var $indicator = $indicatorList[i];

    if ($indicator.classList.contains(CLASS_INDICATOR_ACTIVE)) {
      var slideTo = +$indicator.dataset.slideTo;

      if (diff === null) {
        nearestIndex = slideTo;
        diff = Math.abs(index - nearestIndex);
      } else {
        if (Math.abs(index - slideTo) < diff) {
          nearestIndex = slideTo;
          diff = Math.abs(index - nearestIndex);
        }
      }
    }
  }

  diff = index - nearestIndex;

  if (diff === 0) {
    return;
  }

  this._direction = diff > 0 ? 'next' : 'prev';

  for (i = 1; i <= Math.abs(diff); i++) {
    this._move();
  }
}; // _autoplay


ChiefSlider.prototype._autoplay = function (action) {
  if (!this._config.autoplay) {
    return;
  }

  if (action === 'stop') {
    clearInterval(this._intervalId);
    this._intervalId = null;
    return;
  }

  if (this._intervalId === null) {
    this._intervalId = setInterval(function () {
      this._direction = 'next';

      this._move();
    }.bind(this), this._config.interval);
  }
}; // _refresh


ChiefSlider.prototype._refresh = function () {
  // create some constants
  var $itemList = this._$itemList;
  var widthItem = $itemList[0].offsetWidth;
  var widthWrapper = this._$wrapper.offsetWidth;
  var itemsInVisibleArea = Math.round(widthWrapper / widthItem);

  if (itemsInVisibleArea === this._itemsInVisibleArea) {
    return;
  }

  this._autoplay('stop');

  this._$items.classList.add(SLIDER_TRANSITION_OFF);

  this._$items.style.transform = 'translateX(0)'; // setting properties after reset

  this._widthItem = widthItem;
  this._widthWrapper = widthWrapper;
  this._itemsInVisibleArea = itemsInVisibleArea;
  this._transform = 0;
  this._transformStep = 100 / itemsInVisibleArea;
  this._balancingItemsFlag = false;
  this._activeItems = []; // setting order and translate items after reset

  for (var i = 0, length = $itemList.length; i < length; i++) {
    var $item = $itemList[i];
    var position = i;
    $item.dataset.index = position;
    $item.dataset.order = position;
    $item.dataset.translate = 0;
    $item.style.transform = 'translateX(0)';

    if (position < itemsInVisibleArea) {
      this._activeItems.push(position);
    }
  }

  this._setActiveClass();

  this._updateIndicators();

  window.requestAnimationFrame(function () {
    this._$items.classList.remove(SLIDER_TRANSITION_OFF);
  }.bind(this)); // hide prev arrow for non-infinite slider

  if (!this._config.loop) {
    if (this._$controlPrev) {
      this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
    }

    return;
  } // translate last item before first


  var count = $itemList.length - 1;
  var translate = -$itemList.length * 100;
  $itemList[count].dataset.order = -1;
  $itemList[count].dataset.translate = -$itemList.length * 100;
  $itemList[count].style.transform = 'translateX('.concat(translate, '%)'); // update values of extreme properties

  this.__refreshExtremeValues(); // calling _autoplay


  this._autoplay();
}; // public


ChiefSlider.prototype.next = function () {
  this._moveToNext();
};

ChiefSlider.prototype.prev = function () {
  this._moveToPrev();
};

ChiefSlider.prototype.moveTo = function (index) {
  this._moveTo(index);
};

ChiefSlider.prototype.refresh = function () {
  this._refresh();
};

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('DOMContentLoaded', function () {
    var elms = document.querySelectorAll('.slider');

    for (var i = 0, len = elms.length; i < len; i++) {
      // инициализация elms[i] в качестве слайдера
      new ChiefSlider(elms[i], {
        loop: true,
        autoplay: true,
        interval: 5000
      });
    }
  });
});

/***/ }),

/***/ "../node_modules/normalize-scss/sass/_normalize.scss":
/*!***********************************************************!*\
  !*** ../node_modules/normalize-scss/sass/_normalize.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"vendors-node_modules_normalize-scss_sass__normalize_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_normalize-scss_sass__normalize_scss"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDLG9IQUFvSCxpREFBaUQ7V0FDcks7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzdCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLDhDQUE4Qzs7V0FFOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxtQ0FBbUM7V0FDcEU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRW5EQTtVQUNBO1VBQ0E7VUFDQSxzSUFBc0ksOENBQThDO1VBQ3BMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pbnNlcnQtY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3Mvbm9ybWFsaXplLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXNjc3Mvc2Fzcy9fbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9zdHlsZS5zY3NzP2Y4MGMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGluc2VydGVkID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAgIGlmIChpbnNlcnRlZC5pbmRleE9mKGNzcykgPj0gMCkgcmV0dXJuO1xuICAgIGluc2VydGVkLnB1c2goY3NzKTtcbiAgICBcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIGVsZW0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgXG4gICAgaWYgKGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoZWxlbSwgZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxufTtcbiIsInZhciBpbnNlcnQgPSByZXF1aXJlKCdpbnNlcnQtY3NzJyk7XG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi9ub3JtYWxpemUnKTtcblxuaW5zZXJ0KG5vcm1hbGl6ZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyohIG5vcm1hbGl6ZS5jc3MgdjIuMS4zIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICovXFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1haW4sXFxubmF2LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmF1ZGlvLFxcbmNhbnZhcyxcXG52aWRlbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcbiAqL1xcblxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAqL1xcblxcbltoaWRkZW5dLFxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBCYXNlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcbiAqICAgIHVzZXIgem9vbS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8qIDEgKi9cXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIExpbmtzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYG91dGxpbmVgIGluY29uc2lzdGVuY3kgYmV0d2VlbiBDaHJvbWUgYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICAgIG91dGxpbmU6IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgVHlwb2dyYXBoeVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzksIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuZGZuIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuaHIge1xcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbm1hcmsge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmYwO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBmb250IGZhbWlseSBzZXQgb2RkbHkgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5wcmUsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyoqXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSBvZiBwcmUtZm9ybWF0dGVkIHRleHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLyoqXFxuICogU2V0IGNvbnNpc3RlbnQgcXVvdGUgdHlwZXMuXFxuICovXFxuXFxucSB7XFxuICAgIHF1b3RlczogXFxcIlxcXFwyMDFDXFxcIiBcXFwiXFxcXDIwMURcXFwiIFxcXCJcXFxcMjAxOFxcXCIgXFxcIlxcXFwyMDE5XFxcIjtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBvdmVyZmxvdyBkaXNwbGF5ZWQgb2RkbHkgaW4gSUUgOS5cXG4gKi9cXG5cXG5zdmc6bm90KDpyb290KSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgRmlndXJlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkgNS5cXG4gKi9cXG5cXG5maWd1cmUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LlxcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3JkZXI6IDA7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGZvbnQgZmFtaWx5IG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgZm9udCBzaXplIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMiAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgNSssIGFuZCBJRSA4Ky5cXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3ggNCsgYW5kIE9wZXJhLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cXG4gKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXFxuICovXFxuXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sIC8qIDEgKi9cXG5pbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxuICovXFxuXFxuYnV0dG9uW2Rpc2FibGVkXSxcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiBvbiBPUyBYLlxcbiAqL1xcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LlxcbiAqIDIuIEltcHJvdmUgcmVhZGFiaWxpdHkgYW5kIGFsaWdubWVudCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogMSAqL1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiAyICovXFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgVGFibGVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxuICovXFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJcbiIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1zY3NzXCI7XHJcbmltcG9ydCAnLi9tZW51JztcclxuaW1wb3J0ICcuL3NsaWRlcic7XHJcbiIsImNvbnN0IG1lbnVfbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB3aW5TY3JvbGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCBzY3JvbGxlZCA9ICh3aW5TY3JvbGwgLyBzY3JvbGxIZWlnaHQpICogMTAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXNsaWRlci5tZW51LXNsaWRlcl9hY3RpdmVcIikuc3R5bGUud2lkdGggPSBzY3JvbGxlZCArIFwiJVwiO1xyXG59KSIsIi8qKlxyXG4gKiBDaGllZlNsaWRlciBieSBJdGNoaWVmIHYyLjAuMCAoaHR0cHM6Ly9naXRodWIuY29tL2l0Y2hpZWYvdWktY29tcG9uZW50cy90cmVlL21hc3Rlci9zaW1wbGUtYWRhcHRpdmUtc2xpZGVyKVxyXG4gKiBDb3B5cmlnaHQgMjAyMCAtIDIwMjEgQWxleGFuZGVyIE1hbHRzZXZcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vaXRjaGllZi91aS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZhbHNlO1xyXG4gIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcclxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiBudWxsIH07XHJcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgZS5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XHJcbiAgICByZXR1cm4gZTtcclxuICB9XHJcbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XHJcbn0pKCk7XHJcblxyXG52YXIgV1JBUFBFUl9TRUxFQ1RPUiA9ICcuc2xpZGVyX193cmFwcGVyJztcclxudmFyIElURU1TX1NFTEVDVE9SID0gJy5zbGlkZXJfX2l0ZW1zJztcclxudmFyIElURU1fU0VMRUNUT1IgPSAnLnNsaWRlcl9faXRlbSc7XHJcbnZhciBDT05UUk9MX0NMQVNTID0gJ3NsaWRlcl9fY29udHJvbCc7XHJcblxyXG4vKiB2YXIgSVRFTV9DTEFTU19BQ1RJVkUgPSAnc2xpZGVyX19pdGVtX2FjdGl2ZSc7XHJcbnZhciBDT05UUk9MX1NFTEVDVE9SID0gJy5zbGlkZXJfX2NvbnRyb2wnO1xyXG52YXIgQ09OVFJPTF9DTEFTU19TSE9XID0gJ3NsaWRlcl9fY29udHJvbF9zaG93JztcclxuLy8g0LjQvdC00LjQutCw0YLQvtGA0YtcclxudmFyIElORElDQVRPUl9XUkFQUEVSX0VMRU1FTlQgPSAnb2wnO1xyXG52YXIgSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1MgPSAnc2xpZGVyX19pbmRpY2F0b3JzJztcclxudmFyIElORElDQVRPUl9JVEVNX0VMRU1FTlQgPSAnbGknO1xyXG52YXIgSU5ESUNBVE9SX0lURU1fQ0xBU1MgPSAnc2xpZGVyX19pbmRpY2F0b3InO1xyXG52YXIgSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFID0gJ3NsaWRlcl9faW5kaWNhdG9yX2FjdGl2ZSc7XHJcbi8vINC/0L7RgNC+0LMg0LTQu9GPINC/0LXRgNC10LrQu9GO0YfQtdC90LjRjyDRgdC70LDQudC00LAgKDQwJSlcclxudmFyIFBPU19USFJFU0hPTEQgPSA0MDtcclxuLy8g0LrQu9Cw0YHRgSDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8gdHJhbnNpdGlvblxyXG52YXIgVFJBTlNJVElPTl9OT05FID0gJ3RyYW5zaXRpb24tbm9uZSc7Ki9cclxuXHJcbnZhciBTRUxFQ1RPUl9QUkVWID0gJy5zbGlkZXJfX2NvbnRyb2xbZGF0YS1zbGlkZT1cInByZXZcIl0nO1xyXG52YXIgU0VMRUNUT1JfTkVYVCA9ICcuc2xpZGVyX19jb250cm9sW2RhdGEtc2xpZGU9XCJuZXh0XCJdJztcclxudmFyIFNFTEVDVE9SX0lORElDQVRPUiA9ICcuc2xpZGVyX19pbmRpY2F0b3JzPmxpJztcclxudmFyIFNMSURFUl9UUkFOU0lUSU9OX09GRiA9ICdzbGlkZXJfZGlzYWJsZS10cmFuc2l0aW9uJztcclxudmFyIENMQVNTX0NPTlRST0xfSElERSA9ICdzbGlkZXJfX2NvbnRyb2xfaGlkZSc7XHJcbnZhciBDTEFTU19JVEVNX0FDVElWRSA9ICdzbGlkZXJfX2l0ZW1fYWN0aXZlJztcclxudmFyIENMQVNTX0lORElDQVRPUl9BQ1RJVkUgPSAnYWN0aXZlJztcclxuXHJcbmZ1bmN0aW9uIENoaWVmU2xpZGVyKHNlbGVjdG9yLCBjb25maWcpIHtcclxuICAvLyDRjdC70LXQvNC10L3RgtGLINGB0LvQsNC50LTQtdGA0LBcclxuICB2YXIgJHJvb3QgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID9cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcbiAgdGhpcy5fJHJvb3QgPSAkcm9vdDtcclxuICB0aGlzLl8kd3JhcHBlciA9ICRyb290LnF1ZXJ5U2VsZWN0b3IoV1JBUFBFUl9TRUxFQ1RPUik7XHJcbiAgdGhpcy5fJGl0ZW1zID0gJHJvb3QucXVlcnlTZWxlY3RvcihJVEVNU19TRUxFQ1RPUik7XHJcbiAgdGhpcy5fJGl0ZW1MaXN0ID0gJHJvb3QucXVlcnlTZWxlY3RvckFsbChJVEVNX1NFTEVDVE9SKTtcclxuICB0aGlzLl8kY29udHJvbFByZXYgPSAkcm9vdC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX1BSRVYpO1xyXG4gIHRoaXMuXyRjb250cm9sTmV4dCA9ICRyb290LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfTkVYVCk7XHJcbiAgdGhpcy5fJGluZGljYXRvckxpc3QgPSAkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0lORElDQVRPUik7XHJcbiAgLy8g0Y3QutGB0YLRgNC10LzQsNC70YzQvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDRgdC70LDQudC00L7QslxyXG4gIHRoaXMuX21pbk9yZGVyID0gMDtcclxuICB0aGlzLl9tYXhPcmRlciA9IDA7XHJcbiAgdGhpcy5fJGl0ZW1XaXRoTWluT3JkZXIgPSBudWxsO1xyXG4gIHRoaXMuXyRpdGVtV2l0aE1heE9yZGVyID0gbnVsbDtcclxuICB0aGlzLl9taW5UcmFuc2xhdGUgPSAwO1xyXG4gIHRoaXMuX21heFRyYW5zbGF0ZSA9IDA7XHJcbiAgLy8g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDRgdC80LXQvdGLINGB0LvQsNC50LTQvtCyICjQv9C+INGD0LzQvtC70YfQsNC90LjRjilcclxuICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgLy8gZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwb3NpdGlvbiBvZiBpdGVtIG5lZWRzIHRvIGJlIGRldGVybWluZWRcclxuICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSBmYWxzZTtcclxuICB0aGlzLl9hY3RpdmVJdGVtcyA9IFtdO1xyXG4gIC8vINGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40LhcclxuICB0aGlzLl90cmFuc2Zvcm0gPSAwO1xyXG4gIC8vIHN3aXBlINC/0LDRgNCw0LzQtdGC0YDRi1xyXG4gIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSBmYWxzZTtcclxuICB0aGlzLl9fc3dpcGVTdGFydFBvcyA9IDA7XHJcbiAgLy8gc2xpZGVyIHByb3BlcnRpZXNcclxuICB0aGlzLl90cmFuc2Zvcm0gPSAwOyAvLyDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1INGC0YDQsNC90YHRhNC+0YDQvNCw0YbQuNC4XHJcbiAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgLy8gY29uZmlndXJhdGlvbiBvZiB0aGUgc2xpZGVyXHJcbiAgdGhpcy5fY29uZmlnID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgcmVmcmVzaDogdHJ1ZSxcclxuICAgIHN3aXBlOiB0cnVlLFxyXG4gIH07XHJcbiAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gY29uZmlnW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGNyZWF0ZSBzb21lIGNvbnN0YW50c1xyXG4gIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgdmFyIHdpZHRoSXRlbSA9ICRpdGVtTGlzdFswXS5vZmZzZXRXaWR0aDtcclxuICB2YXIgd2lkdGhXcmFwcGVyID0gdGhpcy5fJHdyYXBwZXIub2Zmc2V0V2lkdGg7XHJcbiAgdmFyIGl0ZW1zSW5WaXNpYmxlQXJlYSA9IE1hdGgucm91bmQod2lkdGhXcmFwcGVyIC8gd2lkdGhJdGVtKTtcclxuICAvLyBpbml0aWFsIHNldHRpbmcgcHJvcGVydGllc1xyXG4gIHRoaXMuX3dpZHRoSXRlbSA9IHdpZHRoSXRlbTtcclxuICB0aGlzLl93aWR0aFdyYXBwZXIgPSB3aWR0aFdyYXBwZXI7XHJcbiAgdGhpcy5faXRlbXNJblZpc2libGVBcmVhID0gaXRlbXNJblZpc2libGVBcmVhO1xyXG4gIHRoaXMuX3RyYW5zZm9ybVN0ZXAgPSAxMDAgLyBpdGVtc0luVmlzaWJsZUFyZWE7XHJcbiAgLy8gaW5pdGlhbCBzZXR0aW5nIG9yZGVyIGFuZCB0cmFuc2xhdGUgaXRlbXNcclxuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAkaXRlbUxpc3RbaV0uZGF0YXNldC5pbmRleCA9IGk7XHJcbiAgICAkaXRlbUxpc3RbaV0uZGF0YXNldC5vcmRlciA9IGk7XHJcbiAgICAkaXRlbUxpc3RbaV0uZGF0YXNldC50cmFuc2xhdGUgPSAwO1xyXG4gICAgaWYgKGkgPCBpdGVtc0luVmlzaWJsZUFyZWEpIHtcclxuICAgICAgdGhpcy5fYWN0aXZlSXRlbXMucHVzaChpKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAvLyDQv9C10YDQtdC80LXRidCw0LXQvCDQv9C+0YHQu9C10LTQvdC40Lkg0YHQu9Cw0LnQtCDQv9C10YDQtdC0INC/0LXRgNCy0YvQvFxyXG4gICAgdmFyIGNvdW50ID0gJGl0ZW1MaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICB2YXIgdHJhbnNsYXRlID0gLSRpdGVtTGlzdC5sZW5ndGggKiAxMDA7XHJcbiAgICAkaXRlbUxpc3RbY291bnRdLmRhdGFzZXQub3JkZXIgPSAtMTtcclxuICAgICRpdGVtTGlzdFtjb3VudF0uZGF0YXNldC50cmFuc2xhdGUgPSAtJGl0ZW1MaXN0Lmxlbmd0aCAqIDEwMDtcclxuICAgICRpdGVtTGlzdFtjb3VudF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZSArICclKSc7XHJcbiAgICB0aGlzLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHRoaXMuXyRjb250cm9sUHJldikge1xyXG4gICAgICB0aGlzLl8kY29udHJvbFByZXYuY2xhc3NMaXN0LmFkZChDTEFTU19DT05UUk9MX0hJREUpO1xyXG4gICAgfVxyXG4gIH1cclxuICB0aGlzLl9zZXRBY3RpdmVDbGFzcygpO1xyXG4gIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcclxuICB0aGlzLl91cGRhdGVJbmRpY2F0b3JzKCk7XHJcbiAgdGhpcy5fYXV0b3BsYXkoKTtcclxufVxyXG5cclxuLy8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINGB0LvQsNC50LTQtdGA0LBcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkcm9vdCA9IHRoaXMuXyRyb290O1xyXG4gIHZhciAkaXRlbXMgPSB0aGlzLl8kaXRlbXM7XHJcbiAgdmFyIGNvbmZpZyA9IHRoaXMuX2NvbmZpZztcclxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuICAgIHZhciAkdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgaWYgKCR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlRST0xfQ0xBU1MpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJHRhcmdldC5kYXRhc2V0LnNsaWRlO1xyXG4gICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYgKCR0YXJnZXQuZGF0YXNldC5zbGlkZVRvKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KCR0YXJnZXQuZGF0YXNldC5zbGlkZVRvKTtcclxuICAgICAgdGhpcy5fbW92ZVRvKGluZGV4KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoZSkge1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvblN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSB0cnVlO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9iYWxhbmNpbmdJdGVtcy5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgdGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnID0gZmFsc2U7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZWZyZXNoLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvblN3aXBlU3RhcnQoZSkge1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLnRvdWNoZXNbMF0gOiBlO1xyXG4gICAgdGhpcy5fc3dpcGVTdGFydFBvcyA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gdHJ1ZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25Td2lwZUVuZChlKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc1N3aXBlU3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGV2ZW50ID0gZS50eXBlLnNlYXJjaCgndG91Y2gnKSA9PT0gMCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xyXG4gICAgdmFyIGRpZmZQb3MgPSB0aGlzLl9zd2lwZVN0YXJ0UG9zIC0gZXZlbnQuY2xpZW50WDtcclxuICAgIGlmIChkaWZmUG9zID4gNTApIHtcclxuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRpZmZQb3MgPCAtNTApIHtcclxuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ3ByZXYnO1xyXG4gICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oYXNTd2lwZVN0YXRlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJykge1xyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkcm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlci5iaW5kKHRoaXMpKTtcclxuICAkcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlLmJpbmQodGhpcykpO1xyXG4gIC8vIG9uIHJlc2l6ZVxyXG4gIGlmIChjb25maWcucmVmcmVzaCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICAvLyBvbiB0cmFuc2l0aW9uc3RhcnQgYW5kIHRyYW5zaXRpb25lbmRcclxuICBpZiAoY29uZmlnLmxvb3ApIHtcclxuICAgICRpdGVtcy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uLXN0YXJ0Jywgb25UcmFuc2l0aW9uU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAkaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgLy8gb24gdG91Y2hzdGFydCBhbmQgdG91Y2hlbmRcclxuICBpZiAoY29uZmlnLnN3aXBlKSB7XHJcbiAgICAkcm9vdC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Td2lwZVN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Td2lwZVN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblN3aXBlRW5kLmJpbmQodGhpcykpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uU3dpcGVFbmQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gIC8vINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0LDQutGC0LjQstC90L7RgdGC0Lgg0LLQutC70LDQtNC60LhcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLmJpbmQodGhpcykpO1xyXG59O1xyXG5cclxuLy8gdXBkYXRlIHZhbHVlcyBvZiBleHRyZW1lIHByb3BlcnRpZXNcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRpdGVtTGlzdCA9IHRoaXMuXyRpdGVtTGlzdDtcclxuICB0aGlzLl9taW5PcmRlciA9ICskaXRlbUxpc3RbMF0uZGF0YXNldC5vcmRlcjtcclxuICB0aGlzLl9tYXhPcmRlciA9IHRoaXMuX21pbk9yZGVyO1xyXG4gIHRoaXMuXyRpdGVtQnlNaW5PcmRlciA9ICRpdGVtTGlzdFswXTtcclxuICB0aGlzLl8kaXRlbUJ5TWF4T3JkZXIgPSAkaXRlbUxpc3RbMF07XHJcbiAgdGhpcy5fbWluVHJhbnNsYXRlID0gKyRpdGVtTGlzdFswXS5kYXRhc2V0LnRyYW5zbGF0ZTtcclxuICB0aGlzLl9tYXhUcmFuc2xhdGUgPSB0aGlzLl9taW5UcmFuc2xhdGU7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9ICRpdGVtTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFyICRpdGVtID0gJGl0ZW1MaXN0W2ldO1xyXG4gICAgdmFyIG9yZGVyID0gKyRpdGVtLmRhdGFzZXQub3JkZXI7XHJcbiAgICBpZiAob3JkZXIgPCB0aGlzLl9taW5PcmRlcikge1xyXG4gICAgICB0aGlzLl9taW5PcmRlciA9IG9yZGVyO1xyXG4gICAgICB0aGlzLl8kaXRlbUJ5TWluT3JkZXIgPSAkaXRlbTtcclxuICAgICAgdGhpcy5fbWluVHJhbnNsYXRlID0gKyRpdGVtLmRhdGFzZXQudHJhbnNsYXRlO1xyXG4gICAgfSBlbHNlIGlmIChvcmRlciA+IHRoaXMuX21heE9yZGVyKSB7XHJcbiAgICAgIHRoaXMuX21heE9yZGVyID0gb3JkZXI7XHJcbiAgICAgIHRoaXMuXyRpdGVtQnlNYXhPcmRlciA9ICRpdGVtO1xyXG4gICAgICB0aGlzLl9taW5UcmFuc2xhdGUgPSArJGl0ZW0uZGF0YXNldC50cmFuc2xhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gdXBkYXRlIHBvc2l0aW9uIG9mIGl0ZW1cclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9iYWxhbmNpbmdJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoIXRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB2YXIgJHdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlcjtcclxuICB2YXIgJHdyYXBwZXJDbGllbnRSZWN0ID0gJHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgdmFyIHdpZHRoSGFsZkl0ZW0gPSAkd3JhcHBlckNsaWVudFJlY3Qud2lkdGggLyB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEgLyAyO1xyXG4gIHZhciBjb3VudCA9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgdmFyIHRyYW5zbGF0ZTtcclxuICB2YXIgY2xpZW50UmVjdDtcclxuICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgIHZhciB3cmFwcGVyTGVmdCA9ICR3cmFwcGVyQ2xpZW50UmVjdC5sZWZ0O1xyXG4gICAgdmFyICRtaW4gPSB0aGlzLl8kaXRlbUJ5TWluT3JkZXI7XHJcbiAgICB0cmFuc2xhdGUgPSB0aGlzLl9taW5UcmFuc2xhdGU7XHJcbiAgICBjbGllbnRSZWN0ID0gJG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChjbGllbnRSZWN0LnJpZ2h0IDwgd3JhcHBlckxlZnQgLSB3aWR0aEhhbGZJdGVtKSB7XHJcbiAgICAgICRtaW4uZGF0YXNldC5vcmRlciA9IHRoaXMuX21pbk9yZGVyICsgY291bnQ7XHJcbiAgICAgIHRyYW5zbGF0ZSArPSBjb3VudCAqIDEwMDtcclxuICAgICAgJG1pbi5kYXRhc2V0LnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgJG1pbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICAvLyB1cGRhdGUgdmFsdWVzIG9mIGV4dHJlbWUgcHJvcGVydGllc1xyXG4gICAgICB0aGlzLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIHdyYXBwZXJSaWdodCA9ICR3cmFwcGVyQ2xpZW50UmVjdC5yaWdodDtcclxuICAgIHZhciAkbWF4ID0gdGhpcy5fJGl0ZW1CeU1heE9yZGVyO1xyXG4gICAgdHJhbnNsYXRlID0gdGhpcy5fbWF4VHJhbnNsYXRlO1xyXG4gICAgY2xpZW50UmVjdCA9ICRtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoY2xpZW50UmVjdC5sZWZ0ID4gd3JhcHBlclJpZ2h0ICsgd2lkdGhIYWxmSXRlbSkge1xyXG4gICAgICAkbWF4LmRhdGFzZXQub3JkZXIgPSB0aGlzLl9tYXhPcmRlciAtIGNvdW50O1xyXG4gICAgICB0cmFuc2xhdGUgLT0gY291bnQgKiAxMDA7XHJcbiAgICAgICRtYXguZGF0YXNldC50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICRtYXguc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNsYXRlLCAnJSknKTtcclxuICAgICAgLy8gdXBkYXRlIHZhbHVlcyBvZiBleHRyZW1lIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5fX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIHVwZGF0aW5nLi4uXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2JhbGFuY2luZ0l0ZW1zLmJpbmQodGhpcykpO1xyXG59O1xyXG5cclxuLy8gX3NldEFjdGl2ZUNsYXNzXHJcbkNoaWVmU2xpZGVyLnByb3RvdHlwZS5fc2V0QWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fYWN0aXZlSXRlbXM7XHJcbiAgdmFyICRpdGVtTGlzdCA9IHRoaXMuXyRpdGVtTGlzdDtcclxuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaV07XHJcbiAgICB2YXIgaW5kZXggPSArJGl0ZW0uZGF0YXNldC5pbmRleDtcclxuICAgIGlmIChhY3RpdmVJdGVtcy5pbmRleE9mKGluZGV4KSA+IC0xKSB7XHJcbiAgICAgICRpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfSVRFTV9BQ1RJVkUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19JVEVNX0FDVElWRSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gX3VwZGF0ZUluZGljYXRvcnNcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl91cGRhdGVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciAkaW5kaWNhdG9yTGlzdCA9IHRoaXMuXyRpbmRpY2F0b3JMaXN0O1xyXG4gIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgaWYgKCEkaW5kaWNhdG9yTGlzdC5sZW5ndGgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSAkaXRlbUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgdmFyICRpdGVtID0gJGl0ZW1MaXN0W2luZGV4XTtcclxuICAgIGlmICgkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfSVRFTV9BQ1RJVkUpKSB7XHJcbiAgICAgICRpbmRpY2F0b3JMaXN0W2luZGV4XS5jbGFzc0xpc3QuYWRkKENMQVNTX0lORElDQVRPUl9BQ1RJVkUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGluZGljYXRvckxpc3RbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfSU5ESUNBVE9SX0FDVElWRSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gbW92ZSBzbGlkZXNcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzdGVwID0gdGhpcy5fZGlyZWN0aW9uID09PVxyXG4gICAgJ25leHQnID8gLXRoaXMuX3RyYW5zZm9ybVN0ZXAgOiB0aGlzLl90cmFuc2Zvcm1TdGVwO1xyXG4gIHZhciB0cmFuc2Zvcm0gPSB0aGlzLl90cmFuc2Zvcm0gKyBzdGVwO1xyXG4gIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgIHZhciBlbmRUcmFuc2Zvcm1WYWx1ZSA9XHJcbiAgICAgIHRoaXMuX3RyYW5zZm9ybVN0ZXAgKiAodGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aCAtIHRoaXMuX2l0ZW1zSW5WaXNpYmxlQXJlYSk7XHJcbiAgICB0cmFuc2Zvcm0gPSBNYXRoLnJvdW5kKHRyYW5zZm9ybSAqIDEwKSAvIDEwO1xyXG4gICAgaWYgKHRyYW5zZm9ybSA8IC1lbmRUcmFuc2Zvcm1WYWx1ZSB8fCB0cmFuc2Zvcm0gPiAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuXyRjb250cm9sUHJldi5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0NPTlRST0xfSElERSk7XHJcbiAgICB0aGlzLl8kY29udHJvbE5leHQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19DT05UUk9MX0hJREUpO1xyXG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gLWVuZFRyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgIHRoaXMuXyRjb250cm9sTmV4dC5jbGFzc0xpc3QuYWRkKENMQVNTX0NPTlRST0xfSElERSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyYW5zZm9ybSA9PT0gMCkge1xyXG4gICAgICB0aGlzLl8kY29udHJvbFByZXYuY2xhc3NMaXN0LmFkZChDTEFTU19DT05UUk9MX0hJREUpO1xyXG4gICAgfVxyXG4gIH1cclxuICB2YXIgYWN0aXZlSW5kZXggPSBbXTtcclxuICB2YXIgaSA9IDA7XHJcbiAgdmFyIGxlbmd0aDtcclxuICB2YXIgaW5kZXg7XHJcbiAgdmFyIG5ld0luZGV4O1xyXG4gIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gdGhpcy5fYWN0aXZlSXRlbXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgaW5kZXggPSB0aGlzLl9hY3RpdmVJdGVtc1tpXTtcclxuICAgICAgbmV3SW5kZXggPSArK2luZGV4O1xyXG4gICAgICBpZiAobmV3SW5kZXggPiB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIG5ld0luZGV4IC09IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZlSW5kZXgucHVzaChuZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHRoaXMuX2FjdGl2ZUl0ZW1zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGluZGV4ID0gdGhpcy5fYWN0aXZlSXRlbXNbaV07XHJcbiAgICAgIG5ld0luZGV4ID0gLS1pbmRleDtcclxuICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xyXG4gICAgICAgIG5ld0luZGV4ICs9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICAgIH1cclxuICAgICAgYWN0aXZlSW5kZXgucHVzaChuZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuX2FjdGl2ZUl0ZW1zID0gYWN0aXZlSW5kZXg7XHJcbiAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoKTtcclxuICB0aGlzLl91cGRhdGVJbmRpY2F0b3JzKCk7XHJcbiAgdGhpcy5fdHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gIHRoaXMuXyRpdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNmb3JtICsgJyUpJztcclxuICB0aGlzLl8kaXRlbXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RyYW5zaXRpb24tc3RhcnQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xyXG59O1xyXG5cclxuLy8gX21vdmVUb05leHRcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9tb3ZlVG9OZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICB0aGlzLl9tb3ZlKCk7XHJcbn07XHJcblxyXG4vLyBfbW92ZVRvUHJldlxyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX21vdmVUb1ByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5fZGlyZWN0aW9uID0gJ3ByZXYnO1xyXG4gIHRoaXMuX21vdmUoKTtcclxufTtcclxuXHJcbi8vIF9tb3ZlVG9cclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9tb3ZlVG8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICB2YXIgJGluZGljYXRvckxpc3QgPSB0aGlzLl8kaW5kaWNhdG9yTGlzdDtcclxuICB2YXIgbmVhcmVzdEluZGV4ID0gbnVsbDtcclxuICB2YXIgZGlmZiA9IG51bGw7XHJcbiAgdmFyIGk7XHJcbiAgdmFyIGxlbmd0aDtcclxuICBmb3IgKGkgPSAwLCBsZW5ndGggPSAkaW5kaWNhdG9yTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdmFyICRpbmRpY2F0b3IgPSAkaW5kaWNhdG9yTGlzdFtpXTtcclxuICAgIGlmICgkaW5kaWNhdG9yLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19JTkRJQ0FUT1JfQUNUSVZFKSkge1xyXG4gICAgICB2YXIgc2xpZGVUbyA9ICskaW5kaWNhdG9yLmRhdGFzZXQuc2xpZGVUbztcclxuICAgICAgaWYgKGRpZmYgPT09IG51bGwpIHtcclxuICAgICAgICBuZWFyZXN0SW5kZXggPSBzbGlkZVRvO1xyXG4gICAgICAgIGRpZmYgPSBNYXRoLmFicyhpbmRleCAtIG5lYXJlc3RJbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGluZGV4IC0gc2xpZGVUbykgPCBkaWZmKSB7XHJcbiAgICAgICAgICBuZWFyZXN0SW5kZXggPSBzbGlkZVRvO1xyXG4gICAgICAgICAgZGlmZiA9IE1hdGguYWJzKGluZGV4IC0gbmVhcmVzdEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGlmZiA9IGluZGV4IC0gbmVhcmVzdEluZGV4O1xyXG4gIGlmIChkaWZmID09PSAwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRoaXMuX2RpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ25leHQnIDogJ3ByZXYnO1xyXG4gIGZvciAoaSA9IDE7IGkgPD0gTWF0aC5hYnMoZGlmZik7IGkrKykge1xyXG4gICAgdGhpcy5fbW92ZSgpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIF9hdXRvcGxheVxyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX2F1dG9wbGF5ID0gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gIGlmICghdGhpcy5fY29uZmlnLmF1dG9wbGF5KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChhY3Rpb24gPT09ICdzdG9wJykge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbElkKTtcclxuICAgIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAodGhpcy5faW50ZXJ2YWxJZCA9PT0gbnVsbCkge1xyXG4gICAgdGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gICAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gX3JlZnJlc2hcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIGNyZWF0ZSBzb21lIGNvbnN0YW50c1xyXG4gIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgdmFyIHdpZHRoSXRlbSA9ICRpdGVtTGlzdFswXS5vZmZzZXRXaWR0aDtcclxuICB2YXIgd2lkdGhXcmFwcGVyID0gdGhpcy5fJHdyYXBwZXIub2Zmc2V0V2lkdGg7XHJcbiAgdmFyIGl0ZW1zSW5WaXNpYmxlQXJlYSA9IE1hdGgucm91bmQod2lkdGhXcmFwcGVyIC8gd2lkdGhJdGVtKTtcclxuXHJcbiAgaWYgKGl0ZW1zSW5WaXNpYmxlQXJlYSA9PT0gdGhpcy5faXRlbXNJblZpc2libGVBcmVhKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG5cclxuICB0aGlzLl8kaXRlbXMuY2xhc3NMaXN0LmFkZChTTElERVJfVFJBTlNJVElPTl9PRkYpO1xyXG4gIHRoaXMuXyRpdGVtcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XHJcblxyXG4gIC8vIHNldHRpbmcgcHJvcGVydGllcyBhZnRlciByZXNldFxyXG4gIHRoaXMuX3dpZHRoSXRlbSA9IHdpZHRoSXRlbTtcclxuICB0aGlzLl93aWR0aFdyYXBwZXIgPSB3aWR0aFdyYXBwZXI7XHJcbiAgdGhpcy5faXRlbXNJblZpc2libGVBcmVhID0gaXRlbXNJblZpc2libGVBcmVhO1xyXG4gIHRoaXMuX3RyYW5zZm9ybSA9IDA7XHJcbiAgdGhpcy5fdHJhbnNmb3JtU3RlcCA9IDEwMCAvIGl0ZW1zSW5WaXNpYmxlQXJlYTtcclxuICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSBmYWxzZTtcclxuICB0aGlzLl9hY3RpdmVJdGVtcyA9IFtdO1xyXG5cclxuICAvLyBzZXR0aW5nIG9yZGVyIGFuZCB0cmFuc2xhdGUgaXRlbXMgYWZ0ZXIgcmVzZXRcclxuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaV07XHJcbiAgICB2YXIgcG9zaXRpb24gPSBpO1xyXG4gICAgJGl0ZW0uZGF0YXNldC5pbmRleCA9IHBvc2l0aW9uO1xyXG4gICAgJGl0ZW0uZGF0YXNldC5vcmRlciA9IHBvc2l0aW9uO1xyXG4gICAgJGl0ZW0uZGF0YXNldC50cmFuc2xhdGUgPSAwO1xyXG4gICAgJGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgaWYgKHBvc2l0aW9uIDwgaXRlbXNJblZpc2libGVBcmVhKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZUl0ZW1zLnB1c2gocG9zaXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGhpcy5fc2V0QWN0aXZlQ2xhc3MoKTtcclxuICB0aGlzLl91cGRhdGVJbmRpY2F0b3JzKCk7XHJcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5fJGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoU0xJREVSX1RSQU5TSVRJT05fT0ZGKTtcclxuICAgIH0uYmluZCh0aGlzKVxyXG4gICk7XHJcblxyXG4gIC8vIGhpZGUgcHJldiBhcnJvdyBmb3Igbm9uLWluZmluaXRlIHNsaWRlclxyXG4gIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgIGlmICh0aGlzLl8kY29udHJvbFByZXYpIHtcclxuICAgICAgdGhpcy5fJGNvbnRyb2xQcmV2LmNsYXNzTGlzdC5hZGQoQ0xBU1NfQ09OVFJPTF9ISURFKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIHRyYW5zbGF0ZSBsYXN0IGl0ZW0gYmVmb3JlIGZpcnN0XHJcbiAgdmFyIGNvdW50ID0gJGl0ZW1MaXN0Lmxlbmd0aCAtIDE7XHJcbiAgdmFyIHRyYW5zbGF0ZSA9IC0kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICRpdGVtTGlzdFtjb3VudF0uZGF0YXNldC5vcmRlciA9IC0xO1xyXG4gICRpdGVtTGlzdFtjb3VudF0uZGF0YXNldC50cmFuc2xhdGUgPSAtJGl0ZW1MaXN0Lmxlbmd0aCAqIDEwMDtcclxuICAkaXRlbUxpc3RbY291bnRdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zbGF0ZSwgJyUpJyk7XHJcbiAgLy8gdXBkYXRlIHZhbHVlcyBvZiBleHRyZW1lIHByb3BlcnRpZXNcclxuICB0aGlzLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMoKTtcclxuICAvLyBjYWxsaW5nIF9hdXRvcGxheVxyXG4gIHRoaXMuX2F1dG9wbGF5KCk7XHJcbn07XHJcblxyXG4vLyBwdWJsaWNcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5fbW92ZVRvTmV4dCgpO1xyXG59O1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLl9tb3ZlVG9QcmV2KCk7XHJcbn07XHJcbkNoaWVmU2xpZGVyLnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICB0aGlzLl9tb3ZlVG8oaW5kZXgpO1xyXG59O1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLl9yZWZyZXNoKCk7XHJcbn07XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyJyk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyBlbG1zW2ldINCyINC60LDRh9C10YHRgtCy0LUg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICBuZXcgQ2hpZWZTbGlkZXIoZWxtc1tpXSwge1xyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25vcm1hbGl6ZS1zY3NzX3Nhc3NfX25vcm1hbGl6ZV9zY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbm9ybWFsaXplLXNjc3Nfc2Fzc19fbm9ybWFsaXplX3Njc3NcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImluc2VydGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImNzcyIsImluZGV4T2YiLCJwdXNoIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiaGVhZCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnQiLCJyZXF1aXJlIiwibm9ybWFsaXplIiwibWVudV9saW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwid2luU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ3aWR0aCIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImUiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIldSQVBQRVJfU0VMRUNUT1IiLCJJVEVNU19TRUxFQ1RPUiIsIklURU1fU0VMRUNUT1IiLCJDT05UUk9MX0NMQVNTIiwiU0VMRUNUT1JfUFJFViIsIlNFTEVDVE9SX05FWFQiLCJTRUxFQ1RPUl9JTkRJQ0FUT1IiLCJTTElERVJfVFJBTlNJVElPTl9PRkYiLCJDTEFTU19DT05UUk9MX0hJREUiLCJDTEFTU19JVEVNX0FDVElWRSIsIkNMQVNTX0lORElDQVRPUl9BQ1RJVkUiLCJDaGllZlNsaWRlciIsInNlbGVjdG9yIiwiY29uZmlnIiwiJHJvb3QiLCJfJHJvb3QiLCJfJHdyYXBwZXIiLCJfJGl0ZW1zIiwiXyRpdGVtTGlzdCIsIl8kY29udHJvbFByZXYiLCJfJGNvbnRyb2xOZXh0IiwiXyRpbmRpY2F0b3JMaXN0IiwiX21pbk9yZGVyIiwiX21heE9yZGVyIiwiXyRpdGVtV2l0aE1pbk9yZGVyIiwiXyRpdGVtV2l0aE1heE9yZGVyIiwiX21pblRyYW5zbGF0ZSIsIl9tYXhUcmFuc2xhdGUiLCJfZGlyZWN0aW9uIiwiX2JhbGFuY2luZ0l0ZW1zRmxhZyIsIl9hY3RpdmVJdGVtcyIsIl90cmFuc2Zvcm0iLCJfaGFzU3dpcGVTdGF0ZSIsIl9fc3dpcGVTdGFydFBvcyIsIl9pbnRlcnZhbElkIiwiX2NvbmZpZyIsImxvb3AiLCJhdXRvcGxheSIsImludGVydmFsIiwicmVmcmVzaCIsInN3aXBlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCIkaXRlbUxpc3QiLCJ3aWR0aEl0ZW0iLCJvZmZzZXRXaWR0aCIsIndpZHRoV3JhcHBlciIsIml0ZW1zSW5WaXNpYmxlQXJlYSIsIk1hdGgiLCJyb3VuZCIsIl93aWR0aEl0ZW0iLCJfd2lkdGhXcmFwcGVyIiwiX2l0ZW1zSW5WaXNpYmxlQXJlYSIsIl90cmFuc2Zvcm1TdGVwIiwiaSIsImRhdGFzZXQiLCJpbmRleCIsIm9yZGVyIiwidHJhbnNsYXRlIiwiY291bnQiLCJ0cmFuc2Zvcm0iLCJfX3JlZnJlc2hFeHRyZW1lVmFsdWVzIiwiY2xhc3NMaXN0IiwiYWRkIiwiX3NldEFjdGl2ZUNsYXNzIiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfdXBkYXRlSW5kaWNhdG9ycyIsIl9hdXRvcGxheSIsInByb3RvdHlwZSIsIiRpdGVtcyIsIm9uQ2xpY2siLCIkdGFyZ2V0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlIiwiX21vdmUiLCJzbGlkZVRvIiwicGFyc2VJbnQiLCJfbW92ZVRvIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25UcmFuc2l0aW9uU3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYmFsYW5jaW5nSXRlbXMiLCJiaW5kIiwib25UcmFuc2l0aW9uRW5kIiwib25SZXNpemUiLCJfcmVmcmVzaCIsIm9uU3dpcGVTdGFydCIsInR5cGUiLCJzZWFyY2giLCJ0b3VjaGVzIiwiX3N3aXBlU3RhcnRQb3MiLCJjbGllbnRYIiwib25Td2lwZUVuZCIsImNoYW5nZWRUb3VjaGVzIiwiZGlmZlBvcyIsIm9uRHJhZ1N0YXJ0Iiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJpbGl0eVN0YXRlIiwiXyRpdGVtQnlNaW5PcmRlciIsIl8kaXRlbUJ5TWF4T3JkZXIiLCIkaXRlbSIsIiR3cmFwcGVyIiwiJHdyYXBwZXJDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGhIYWxmSXRlbSIsImNsaWVudFJlY3QiLCJ3cmFwcGVyTGVmdCIsImxlZnQiLCIkbWluIiwicmlnaHQiLCJjb25jYXQiLCJ3cmFwcGVyUmlnaHQiLCIkbWF4IiwiYWN0aXZlSXRlbXMiLCJyZW1vdmUiLCIkaW5kaWNhdG9yTGlzdCIsInN0ZXAiLCJlbmRUcmFuc2Zvcm1WYWx1ZSIsImFjdGl2ZUluZGV4IiwibmV3SW5kZXgiLCJkaXNwYXRjaEV2ZW50IiwiX21vdmVUb05leHQiLCJfbW92ZVRvUHJldiIsIm5lYXJlc3RJbmRleCIsImRpZmYiLCIkaW5kaWNhdG9yIiwiYWJzIiwiYWN0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicG9zaXRpb24iLCJuZXh0IiwicHJldiIsIm1vdmVUbyIsImVsbXMiLCJsZW4iXSwic291cmNlUm9vdCI6IiJ9