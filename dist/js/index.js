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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkMsb0hBQW9ILGlEQUFpRDtXQUNySztXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDN0JBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsOENBQThDOztXQUU5QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLG1DQUFtQztXQUNwRTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBLHNJQUFzSSw4Q0FBOEM7VUFDcEwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2luc2VydC1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLWNzcy9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtc2Nzcy9zYXNzL19ub3JtYWxpemUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/ZjgwYyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5zZXJ0ZWQgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgaWYgKGluc2VydGVkLmluZGV4T2YoY3NzKSA+PSAwKSByZXR1cm47XG4gICAgaW5zZXJ0ZWQucHVzaChjc3MpO1xuICAgIFxuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgZWxlbS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQuaGVhZC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShlbGVtLCBkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG59O1xuIiwidmFyIGluc2VydCA9IHJlcXVpcmUoJ2luc2VydC1jc3MnKTtcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpO1xuXG5pbnNlcnQobm9ybWFsaXplKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiEgbm9ybWFsaXplLmNzcyB2Mi4xLjMgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWFpbixcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXFxuICovXFxuXFxuYXVkaW8sXFxuY2FudmFzLFxcbnZpZGVvIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFLCBTYWZhcmksIGFuZCBGaXJlZm94IDwgMjIuXFxuICovXFxuXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEJhc2VcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXFxuICogMi4gUHJldmVudCBpT1MgdGV4dCBzaXplIGFkanVzdCBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2UsIHdpdGhvdXQgZGlzYWJsaW5nXFxuICogICAgdXNlciB6b29tLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgTGlua3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBgb3V0bGluZWAgaW5jb25zaXN0ZW5jeSBiZXR3ZWVuIENocm9tZSBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICovXFxuXFxuYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gICAgb3V0bGluZTogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUeXBvZ3JhcGh5XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOSwgU2FmYXJpIDUsIGFuZCBDaHJvbWUuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5kZm4ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgZGlmZmVyZW5jZXMgYmV0d2VlbiBGaXJlZm94IGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5ociB7XFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICovXFxuXFxubWFyayB7XFxuICAgIGJhY2tncm91bmQ6ICNmZjA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IGZvbnQgZmFtaWx5IHNldCBvZGRseSBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4vKipcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIHByZS1mb3JtYXR0ZWQgdGV4dCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4vKipcXG4gKiBTZXQgY29uc2lzdGVudCBxdW90ZSB0eXBlcy5cXG4gKi9cXG5cXG5xIHtcXG4gICAgcXVvdGVzOiBcXFwiXFxcXDIwMUNcXFwiIFxcXCJcXFxcMjAxRFxcXCIgXFxcIlxcXFwyMDE4XFxcIiBcXFwiXFxcXDIwMTlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkuXFxuICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IG92ZXJmbG93IGRpc3BsYXllZCBvZGRseSBpbiBJRSA5LlxcbiAqL1xcblxcbnN2Zzpub3QoOnJvb3QpIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBGaWd1cmVzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaSA1LlxcbiAqL1xcblxcbmZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogRGVmaW5lIGNvbnNpc3RlbnQgYm9yZGVyLCBtYXJnaW4sIGFuZCBwYWRkaW5nLlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkuXFxuICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJvcmRlcjogMDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgZm9udCBmYW1pbHkgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCBmb250IHNpemUgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAyICovXFxuICAgIG1hcmdpbjogMDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXFxuICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAqIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXFxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBDaHJvbWUsIFNhZmFyaSA1KywgYW5kIElFIDgrLlxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCA0KyBhbmQgT3BlcmEuXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gKi9cXG5cXG5idXR0b25bZGlzYWJsZWRdLFxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIDUgYW5kIENocm9tZVxcbiAqIG9uIE9TIFguXFxuICovXFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkuXFxuICogMi4gSW1wcm92ZSByZWFkYWJpbGl0eSBhbmQgYWxpZ25tZW50IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIDIgKi9cXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBUYWJsZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gKi9cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIlxuIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLWNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXNjc3NcIjtcclxuaW1wb3J0ICcuL21lbnUnO1xyXG5pbXBvcnQgJy4vc2xpZGVyJztcclxuIiwiY29uc3QgbWVudV9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saW5rXCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHdpblNjcm9sbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IHNjcm9sbGVkID0gKHdpblNjcm9sbCAvIHNjcm9sbEhlaWdodCkgKiAxMDA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtc2xpZGVyLm1lbnUtc2xpZGVyX2FjdGl2ZVwiKS5zdHlsZS53aWR0aCA9IHNjcm9sbGVkICsgXCIlXCI7XHJcbn0pIiwiLyoqXHJcbiAqIENoaWVmU2xpZGVyIGJ5IEl0Y2hpZWYgdjIuMC4wIChodHRwczovL2dpdGh1Yi5jb20vaXRjaGllZi91aS1jb21wb25lbnRzL3RyZWUvbWFzdGVyL3NpbXBsZS1hZGFwdGl2ZS1zbGlkZXIpXHJcbiAqIENvcHlyaWdodCAyMDIwIC0gMjAyMSBBbGV4YW5kZXIgTWFsdHNldlxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9pdGNoaWVmL3VpLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZmFsc2U7XHJcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGwgfTtcclxuICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICBlLmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcclxuICAgIHJldHVybiBlO1xyXG4gIH1cclxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxufSkoKTtcclxuXHJcbnZhciBXUkFQUEVSX1NFTEVDVE9SID0gJy5zbGlkZXJfX3dyYXBwZXInO1xyXG52YXIgSVRFTVNfU0VMRUNUT1IgPSAnLnNsaWRlcl9faXRlbXMnO1xyXG52YXIgSVRFTV9TRUxFQ1RPUiA9ICcuc2xpZGVyX19pdGVtJztcclxudmFyIENPTlRST0xfQ0xBU1MgPSAnc2xpZGVyX19jb250cm9sJztcclxuXHJcbi8qIHZhciBJVEVNX0NMQVNTX0FDVElWRSA9ICdzbGlkZXJfX2l0ZW1fYWN0aXZlJztcclxudmFyIENPTlRST0xfU0VMRUNUT1IgPSAnLnNsaWRlcl9fY29udHJvbCc7XHJcbnZhciBDT05UUk9MX0NMQVNTX1NIT1cgPSAnc2xpZGVyX19jb250cm9sX3Nob3cnO1xyXG4vLyDQuNC90LTQuNC60LDRgtC+0YDRi1xyXG52YXIgSU5ESUNBVE9SX1dSQVBQRVJfRUxFTUVOVCA9ICdvbCc7XHJcbnZhciBJTkRJQ0FUT1JfV1JBUFBFUl9DTEFTUyA9ICdzbGlkZXJfX2luZGljYXRvcnMnO1xyXG52YXIgSU5ESUNBVE9SX0lURU1fRUxFTUVOVCA9ICdsaSc7XHJcbnZhciBJTkRJQ0FUT1JfSVRFTV9DTEFTUyA9ICdzbGlkZXJfX2luZGljYXRvcic7XHJcbnZhciBJTkRJQ0FUT1JfSVRFTV9DTEFTU19BQ1RJVkUgPSAnc2xpZGVyX19pbmRpY2F0b3JfYWN0aXZlJztcclxuLy8g0L/QvtGA0L7QsyDQtNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCAoNDAlKVxyXG52YXIgUE9TX1RIUkVTSE9MRCA9IDQwO1xyXG4vLyDQutC70LDRgdGBINC00LvRjyDQvtGC0LrQu9GO0YfQtdC90LjRjyB0cmFuc2l0aW9uXHJcbnZhciBUUkFOU0lUSU9OX05PTkUgPSAndHJhbnNpdGlvbi1ub25lJzsqL1xyXG5cclxudmFyIFNFTEVDVE9SX1BSRVYgPSAnLnNsaWRlcl9fY29udHJvbFtkYXRhLXNsaWRlPVwicHJldlwiXSc7XHJcbnZhciBTRUxFQ1RPUl9ORVhUID0gJy5zbGlkZXJfX2NvbnRyb2xbZGF0YS1zbGlkZT1cIm5leHRcIl0nO1xyXG52YXIgU0VMRUNUT1JfSU5ESUNBVE9SID0gJy5zbGlkZXJfX2luZGljYXRvcnM+bGknO1xyXG52YXIgU0xJREVSX1RSQU5TSVRJT05fT0ZGID0gJ3NsaWRlcl9kaXNhYmxlLXRyYW5zaXRpb24nO1xyXG52YXIgQ0xBU1NfQ09OVFJPTF9ISURFID0gJ3NsaWRlcl9fY29udHJvbF9oaWRlJztcclxudmFyIENMQVNTX0lURU1fQUNUSVZFID0gJ3NsaWRlcl9faXRlbV9hY3RpdmUnO1xyXG52YXIgQ0xBU1NfSU5ESUNBVE9SX0FDVElWRSA9ICdhY3RpdmUnO1xyXG5cclxuZnVuY3Rpb24gQ2hpZWZTbGlkZXIoc2VsZWN0b3IsIGNvbmZpZykge1xyXG4gIC8vINGN0LvQtdC80LXQvdGC0Ysg0YHQu9Cw0LnQtNC10YDQsFxyXG4gIHZhciAkcm9vdCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgP1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuICB0aGlzLl8kcm9vdCA9ICRyb290O1xyXG4gIHRoaXMuXyR3cmFwcGVyID0gJHJvb3QucXVlcnlTZWxlY3RvcihXUkFQUEVSX1NFTEVDVE9SKTtcclxuICB0aGlzLl8kaXRlbXMgPSAkcm9vdC5xdWVyeVNlbGVjdG9yKElURU1TX1NFTEVDVE9SKTtcclxuICB0aGlzLl8kaXRlbUxpc3QgPSAkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKElURU1fU0VMRUNUT1IpO1xyXG4gIHRoaXMuXyRjb250cm9sUHJldiA9ICRyb290LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfUFJFVik7XHJcbiAgdGhpcy5fJGNvbnRyb2xOZXh0ID0gJHJvb3QucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9ORVhUKTtcclxuICB0aGlzLl8kaW5kaWNhdG9yTGlzdCA9ICRyb290LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfSU5ESUNBVE9SKTtcclxuICAvLyDRjdC60YHRgtGA0LXQvNCw0LvRjNC90YvQtSDQt9C90LDRh9C10L3QuNGPINGB0LvQsNC50LTQvtCyXHJcbiAgdGhpcy5fbWluT3JkZXIgPSAwO1xyXG4gIHRoaXMuX21heE9yZGVyID0gMDtcclxuICB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlciA9IG51bGw7XHJcbiAgdGhpcy5fJGl0ZW1XaXRoTWF4T3JkZXIgPSBudWxsO1xyXG4gIHRoaXMuX21pblRyYW5zbGF0ZSA9IDA7XHJcbiAgdGhpcy5fbWF4VHJhbnNsYXRlID0gMDtcclxuICAvLyDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INGB0LzQtdC90Ysg0YHQu9Cw0LnQtNC+0LIgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOKVxyXG4gIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICAvLyBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBvc2l0aW9uIG9mIGl0ZW0gbmVlZHMgdG8gYmUgZGV0ZXJtaW5lZFxyXG4gIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IGZhbHNlO1xyXG4gIHRoaXMuX2FjdGl2ZUl0ZW1zID0gW107XHJcbiAgLy8g0YLQtdC60YPRidC10LUg0LfQvdCw0YfQtdC90LjQtSDRgtGA0LDQvdGB0YTQvtGA0LzQsNGG0LjQuFxyXG4gIHRoaXMuX3RyYW5zZm9ybSA9IDA7XHJcbiAgLy8gc3dpcGUg0L/QsNGA0LDQvNC10YLRgNGLXHJcbiAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IGZhbHNlO1xyXG4gIHRoaXMuX19zd2lwZVN0YXJ0UG9zID0gMDtcclxuICAvLyBzbGlkZXIgcHJvcGVydGllc1xyXG4gIHRoaXMuX3RyYW5zZm9ybSA9IDA7IC8vINGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40LhcclxuICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcclxuICAvLyBjb25maWd1cmF0aW9uIG9mIHRoZSBzbGlkZXJcclxuICB0aGlzLl9jb25maWcgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICByZWZyZXNoOiB0cnVlLFxyXG4gICAgc3dpcGU6IHRydWUsXHJcbiAgfTtcclxuICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSBjb25maWdba2V5XTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gY3JlYXRlIHNvbWUgY29uc3RhbnRzXHJcbiAgdmFyICRpdGVtTGlzdCA9IHRoaXMuXyRpdGVtTGlzdDtcclxuICB2YXIgd2lkdGhJdGVtID0gJGl0ZW1MaXN0WzBdLm9mZnNldFdpZHRoO1xyXG4gIHZhciB3aWR0aFdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlci5vZmZzZXRXaWR0aDtcclxuICB2YXIgaXRlbXNJblZpc2libGVBcmVhID0gTWF0aC5yb3VuZCh3aWR0aFdyYXBwZXIgLyB3aWR0aEl0ZW0pO1xyXG4gIC8vIGluaXRpYWwgc2V0dGluZyBwcm9wZXJ0aWVzXHJcbiAgdGhpcy5fd2lkdGhJdGVtID0gd2lkdGhJdGVtO1xyXG4gIHRoaXMuX3dpZHRoV3JhcHBlciA9IHdpZHRoV3JhcHBlcjtcclxuICB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEgPSBpdGVtc0luVmlzaWJsZUFyZWE7XHJcbiAgdGhpcy5fdHJhbnNmb3JtU3RlcCA9IDEwMCAvIGl0ZW1zSW5WaXNpYmxlQXJlYTtcclxuICAvLyBpbml0aWFsIHNldHRpbmcgb3JkZXIgYW5kIHRyYW5zbGF0ZSBpdGVtc1xyXG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSAkaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICRpdGVtTGlzdFtpXS5kYXRhc2V0LmluZGV4ID0gaTtcclxuICAgICRpdGVtTGlzdFtpXS5kYXRhc2V0Lm9yZGVyID0gaTtcclxuICAgICRpdGVtTGlzdFtpXS5kYXRhc2V0LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICBpZiAoaSA8IGl0ZW1zSW5WaXNpYmxlQXJlYSkge1xyXG4gICAgICB0aGlzLl9hY3RpdmVJdGVtcy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgIC8vINC/0LXRgNC10LzQtdGJ0LDQtdC8INC/0L7RgdC70LXQtNC90LjQuSDRgdC70LDQudC0INC/0LXRgNC10LQg0L/QtdGA0LLRi9C8XHJcbiAgICB2YXIgY291bnQgPSAkaXRlbUxpc3QubGVuZ3RoIC0gMTtcclxuICAgIHZhciB0cmFuc2xhdGUgPSAtJGl0ZW1MaXN0Lmxlbmd0aCAqIDEwMDtcclxuICAgICRpdGVtTGlzdFtjb3VudF0uZGF0YXNldC5vcmRlciA9IC0xO1xyXG4gICAgJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0LnRyYW5zbGF0ZSA9IC0kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICAgJGl0ZW1MaXN0W2NvdW50XS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNsYXRlICsgJyUpJztcclxuICAgIHRoaXMuX19yZWZyZXNoRXh0cmVtZVZhbHVlcygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodGhpcy5fJGNvbnRyb2xQcmV2KSB7XHJcbiAgICAgIHRoaXMuXyRjb250cm9sUHJldi5jbGFzc0xpc3QuYWRkKENMQVNTX0NPTlRST0xfSElERSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRoaXMuX3NldEFjdGl2ZUNsYXNzKCk7XHJcbiAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xyXG4gIHRoaXMuX3VwZGF0ZUluZGljYXRvcnMoKTtcclxuICB0aGlzLl9hdXRvcGxheSgpO1xyXG59XHJcblxyXG4vLyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDRgdC+0LHRi9GC0LjQuSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDQsFxyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRyb290ID0gdGhpcy5fJHJvb3Q7XHJcbiAgdmFyICRpdGVtcyA9IHRoaXMuXyRpdGVtcztcclxuICB2YXIgY29uZmlnID0gdGhpcy5fY29uZmlnO1xyXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xyXG4gICAgdmFyICR0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgICBpZiAoJHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ09OVFJPTF9DTEFTUykpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAkdGFyZ2V0LmRhdGFzZXQuc2xpZGU7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAoJHRhcmdldC5kYXRhc2V0LnNsaWRlVG8pIHtcclxuICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoJHRhcmdldC5kYXRhc2V0LnNsaWRlVG8pO1xyXG4gICAgICB0aGlzLl9tb3ZlVG8oaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uTW91c2VFbnRlcihlKSB7XHJcbiAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZSkge1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uU3RhcnQoKSB7XHJcbiAgICBpZiAodGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IHRydWU7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2JhbGFuY2luZ0l0ZW1zLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XHJcbiAgICB0aGlzLl9iYWxhbmNpbmdJdGVtc0ZsYWcgPSBmYWxzZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlZnJlc2guYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3dpcGVTdGFydChlKSB7XHJcbiAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgdmFyIGV2ZW50ID0gZS50eXBlLnNlYXJjaCgndG91Y2gnKSA9PT0gMCA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICB0aGlzLl9zd2lwZVN0YXJ0UG9zID0gZXZlbnQuY2xpZW50WDtcclxuICAgIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSB0cnVlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvblN3aXBlRW5kKGUpIHtcclxuICAgIGlmICghdGhpcy5faGFzU3dpcGVTdGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgZXZlbnQgPSBlLnR5cGUuc2VhcmNoKCd0b3VjaCcpID09PSAwID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGU7XHJcbiAgICB2YXIgZGlmZlBvcyA9IHRoaXMuX3N3aXBlU3RhcnRQb3MgLSBldmVudC5jbGllbnRYO1xyXG4gICAgaWYgKGRpZmZQb3MgPiA1MCkge1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH0gZWxzZSBpZiAoZGlmZlBvcyA8IC01MCkge1xyXG4gICAgICB0aGlzLl9kaXJlY3Rpb24gPSAncHJldic7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2hhc1N3aXBlU3RhdGUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnKSB7XHJcbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAgIHRoaXMuX2F1dG9wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljay5iaW5kKHRoaXMpKTtcclxuICAkcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgb25Nb3VzZUVudGVyLmJpbmQodGhpcykpO1xyXG4gICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUuYmluZCh0aGlzKSk7XHJcbiAgLy8gb24gcmVzaXplXHJcbiAgaWYgKGNvbmZpZy5yZWZyZXNoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIC8vIG9uIHRyYW5zaXRpb25zdGFydCBhbmQgdHJhbnNpdGlvbmVuZFxyXG4gIGlmIChjb25maWcubG9vcCkge1xyXG4gICAgJGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb24tc3RhcnQnLCBvblRyYW5zaXRpb25TdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICRpdGVtcy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgb25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICAvLyBvbiB0b3VjaHN0YXJ0IGFuZCB0b3VjaGVuZFxyXG4gIGlmIChjb25maWcuc3dpcGUpIHtcclxuICAgICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblN3aXBlU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAkcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvblN3aXBlU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uU3dpcGVFbmQuYmluZCh0aGlzKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Td2lwZUVuZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0Jywgb25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgLy8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQsNC60YLQuNCy0L3QvtGB0YLQuCDQstC60LvQsNC00LrQuFxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vLyB1cGRhdGUgdmFsdWVzIG9mIGV4dHJlbWUgcHJvcGVydGllc1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX19yZWZyZXNoRXh0cmVtZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgJGl0ZW1MaXN0ID0gdGhpcy5fJGl0ZW1MaXN0O1xyXG4gIHRoaXMuX21pbk9yZGVyID0gKyRpdGVtTGlzdFswXS5kYXRhc2V0Lm9yZGVyO1xyXG4gIHRoaXMuX21heE9yZGVyID0gdGhpcy5fbWluT3JkZXI7XHJcbiAgdGhpcy5fJGl0ZW1CeU1pbk9yZGVyID0gJGl0ZW1MaXN0WzBdO1xyXG4gIHRoaXMuXyRpdGVtQnlNYXhPcmRlciA9ICRpdGVtTGlzdFswXTtcclxuICB0aGlzLl9taW5UcmFuc2xhdGUgPSArJGl0ZW1MaXN0WzBdLmRhdGFzZXQudHJhbnNsYXRlO1xyXG4gIHRoaXMuX21heFRyYW5zbGF0ZSA9IHRoaXMuX21pblRyYW5zbGF0ZTtcclxuICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaV07XHJcbiAgICB2YXIgb3JkZXIgPSArJGl0ZW0uZGF0YXNldC5vcmRlcjtcclxuICAgIGlmIChvcmRlciA8IHRoaXMuX21pbk9yZGVyKSB7XHJcbiAgICAgIHRoaXMuX21pbk9yZGVyID0gb3JkZXI7XHJcbiAgICAgIHRoaXMuXyRpdGVtQnlNaW5PcmRlciA9ICRpdGVtO1xyXG4gICAgICB0aGlzLl9taW5UcmFuc2xhdGUgPSArJGl0ZW0uZGF0YXNldC50cmFuc2xhdGU7XHJcbiAgICB9IGVsc2UgaWYgKG9yZGVyID4gdGhpcy5fbWF4T3JkZXIpIHtcclxuICAgICAgdGhpcy5fbWF4T3JkZXIgPSBvcmRlcjtcclxuICAgICAgdGhpcy5fJGl0ZW1CeU1heE9yZGVyID0gJGl0ZW07XHJcbiAgICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9ICskaXRlbS5kYXRhc2V0LnRyYW5zbGF0ZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyB1cGRhdGUgcG9zaXRpb24gb2YgaXRlbVxyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX2JhbGFuY2luZ0l0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICghdGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciAkd3JhcHBlciA9IHRoaXMuXyR3cmFwcGVyO1xyXG4gIHZhciAkd3JhcHBlckNsaWVudFJlY3QgPSAkd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB2YXIgd2lkdGhIYWxmSXRlbSA9ICR3cmFwcGVyQ2xpZW50UmVjdC53aWR0aCAvIHRoaXMuX2l0ZW1zSW5WaXNpYmxlQXJlYSAvIDI7XHJcbiAgdmFyIGNvdW50ID0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICB2YXIgdHJhbnNsYXRlO1xyXG4gIHZhciBjbGllbnRSZWN0O1xyXG4gIGlmICh0aGlzLl9kaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgdmFyIHdyYXBwZXJMZWZ0ID0gJHdyYXBwZXJDbGllbnRSZWN0LmxlZnQ7XHJcbiAgICB2YXIgJG1pbiA9IHRoaXMuXyRpdGVtQnlNaW5PcmRlcjtcclxuICAgIHRyYW5zbGF0ZSA9IHRoaXMuX21pblRyYW5zbGF0ZTtcclxuICAgIGNsaWVudFJlY3QgPSAkbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKGNsaWVudFJlY3QucmlnaHQgPCB3cmFwcGVyTGVmdCAtIHdpZHRoSGFsZkl0ZW0pIHtcclxuICAgICAgJG1pbi5kYXRhc2V0Lm9yZGVyID0gdGhpcy5fbWluT3JkZXIgKyBjb3VudDtcclxuICAgICAgdHJhbnNsYXRlICs9IGNvdW50ICogMTAwO1xyXG4gICAgICAkbWluLmRhdGFzZXQudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xyXG4gICAgICAkbWluLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zbGF0ZSwgJyUpJyk7XHJcbiAgICAgIC8vIHVwZGF0ZSB2YWx1ZXMgb2YgZXh0cmVtZSBwcm9wZXJ0aWVzXHJcbiAgICAgIHRoaXMuX19yZWZyZXNoRXh0cmVtZVZhbHVlcygpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgd3JhcHBlclJpZ2h0ID0gJHdyYXBwZXJDbGllbnRSZWN0LnJpZ2h0O1xyXG4gICAgdmFyICRtYXggPSB0aGlzLl8kaXRlbUJ5TWF4T3JkZXI7XHJcbiAgICB0cmFuc2xhdGUgPSB0aGlzLl9tYXhUcmFuc2xhdGU7XHJcbiAgICBjbGllbnRSZWN0ID0gJG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGlmIChjbGllbnRSZWN0LmxlZnQgPiB3cmFwcGVyUmlnaHQgKyB3aWR0aEhhbGZJdGVtKSB7XHJcbiAgICAgICRtYXguZGF0YXNldC5vcmRlciA9IHRoaXMuX21heE9yZGVyIC0gY291bnQ7XHJcbiAgICAgIHRyYW5zbGF0ZSAtPSBjb3VudCAqIDEwMDtcclxuICAgICAgJG1heC5kYXRhc2V0LnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgJG1heC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICAvLyB1cGRhdGUgdmFsdWVzIG9mIGV4dHJlbWUgcHJvcGVydGllc1xyXG4gICAgICB0aGlzLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gdXBkYXRpbmcuLi5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYmFsYW5jaW5nSXRlbXMuYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vLyBfc2V0QWN0aXZlQ2xhc3NcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9zZXRBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9hY3RpdmVJdGVtcztcclxuICB2YXIgJGl0ZW1MaXN0ID0gdGhpcy5fJGl0ZW1MaXN0O1xyXG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSAkaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciAkaXRlbSA9ICRpdGVtTGlzdFtpXTtcclxuICAgIHZhciBpbmRleCA9ICskaXRlbS5kYXRhc2V0LmluZGV4O1xyXG4gICAgaWYgKGFjdGl2ZUl0ZW1zLmluZGV4T2YoaW5kZXgpID4gLTEpIHtcclxuICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19JVEVNX0FDVElWRSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkaXRlbS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0lURU1fQUNUSVZFKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBfdXBkYXRlSW5kaWNhdG9yc1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX3VwZGF0ZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyICRpbmRpY2F0b3JMaXN0ID0gdGhpcy5fJGluZGljYXRvckxpc3Q7XHJcbiAgdmFyICRpdGVtTGlzdCA9IHRoaXMuXyRpdGVtTGlzdDtcclxuICBpZiAoISRpbmRpY2F0b3JMaXN0Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9ICRpdGVtTGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaW5kZXhdO1xyXG4gICAgaWYgKCRpdGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19JVEVNX0FDVElWRSkpIHtcclxuICAgICAgJGluZGljYXRvckxpc3RbaW5kZXhdLmNsYXNzTGlzdC5hZGQoQ0xBU1NfSU5ESUNBVE9SX0FDVElWRSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkaW5kaWNhdG9yTGlzdFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19JTkRJQ0FUT1JfQUNUSVZFKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBtb3ZlIHNsaWRlc1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX21vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHN0ZXAgPSB0aGlzLl9kaXJlY3Rpb24gPT09XHJcbiAgICAnbmV4dCcgPyAtdGhpcy5fdHJhbnNmb3JtU3RlcCA6IHRoaXMuX3RyYW5zZm9ybVN0ZXA7XHJcbiAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuX3RyYW5zZm9ybSArIHN0ZXA7XHJcbiAgaWYgKCF0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgdmFyIGVuZFRyYW5zZm9ybVZhbHVlID1cclxuICAgICAgdGhpcy5fdHJhbnNmb3JtU3RlcCAqICh0aGlzLl8kaXRlbUxpc3QubGVuZ3RoIC0gdGhpcy5faXRlbXNJblZpc2libGVBcmVhKTtcclxuICAgIHRyYW5zZm9ybSA9IE1hdGgucm91bmQodHJhbnNmb3JtICogMTApIC8gMTA7XHJcbiAgICBpZiAodHJhbnNmb3JtIDwgLWVuZFRyYW5zZm9ybVZhbHVlIHx8IHRyYW5zZm9ybSA+IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fJGNvbnRyb2xQcmV2LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfQ09OVFJPTF9ISURFKTtcclxuICAgIHRoaXMuXyRjb250cm9sTmV4dC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX0NPTlRST0xfSElERSk7XHJcbiAgICBpZiAodHJhbnNmb3JtID09PSAtZW5kVHJhbnNmb3JtVmFsdWUpIHtcclxuICAgICAgdGhpcy5fJGNvbnRyb2xOZXh0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfQ09OVFJPTF9ISURFKTtcclxuICAgIH0gZWxzZSBpZiAodHJhbnNmb3JtID09PSAwKSB7XHJcbiAgICAgIHRoaXMuXyRjb250cm9sUHJldi5jbGFzc0xpc3QuYWRkKENMQVNTX0NPTlRST0xfSElERSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciBhY3RpdmVJbmRleCA9IFtdO1xyXG4gIHZhciBpID0gMDtcclxuICB2YXIgbGVuZ3RoO1xyXG4gIHZhciBpbmRleDtcclxuICB2YXIgbmV3SW5kZXg7XHJcbiAgaWYgKHRoaXMuX2RpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB0aGlzLl9hY3RpdmVJdGVtcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBpbmRleCA9IHRoaXMuX2FjdGl2ZUl0ZW1zW2ldO1xyXG4gICAgICBuZXdJbmRleCA9ICsraW5kZXg7XHJcbiAgICAgIGlmIChuZXdJbmRleCA+IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgbmV3SW5kZXggLT0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICBhY3RpdmVJbmRleC5wdXNoKG5ld0luZGV4KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gdGhpcy5fYWN0aXZlSXRlbXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgaW5kZXggPSB0aGlzLl9hY3RpdmVJdGVtc1tpXTtcclxuICAgICAgbmV3SW5kZXggPSAtLWluZGV4O1xyXG4gICAgICBpZiAobmV3SW5kZXggPCAwKSB7XHJcbiAgICAgICAgbmV3SW5kZXggKz0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICBhY3RpdmVJbmRleC5wdXNoKG5ld0luZGV4KTtcclxuICAgIH1cclxuICB9XHJcbiAgdGhpcy5fYWN0aXZlSXRlbXMgPSBhY3RpdmVJbmRleDtcclxuICB0aGlzLl9zZXRBY3RpdmVDbGFzcygpO1xyXG4gIHRoaXMuX3VwZGF0ZUluZGljYXRvcnMoKTtcclxuICB0aGlzLl90cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgdGhpcy5fJGl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2Zvcm0gKyAnJSknO1xyXG4gIHRoaXMuXyRpdGVtcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndHJhbnNpdGlvbi1zdGFydCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XHJcbn07XHJcblxyXG4vLyBfbW92ZVRvTmV4dFxyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX21vdmVUb05leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gIHRoaXMuX21vdmUoKTtcclxufTtcclxuXHJcbi8vIF9tb3ZlVG9QcmV2XHJcbkNoaWVmU2xpZGVyLnByb3RvdHlwZS5fbW92ZVRvUHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLl9kaXJlY3Rpb24gPSAncHJldic7XHJcbiAgdGhpcy5fbW92ZSgpO1xyXG59O1xyXG5cclxuLy8gX21vdmVUb1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX21vdmVUbyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gIHZhciAkaW5kaWNhdG9yTGlzdCA9IHRoaXMuXyRpbmRpY2F0b3JMaXN0O1xyXG4gIHZhciBuZWFyZXN0SW5kZXggPSBudWxsO1xyXG4gIHZhciBkaWZmID0gbnVsbDtcclxuICB2YXIgaTtcclxuICB2YXIgbGVuZ3RoO1xyXG4gIGZvciAoaSA9IDAsIGxlbmd0aCA9ICRpbmRpY2F0b3JMaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgJGluZGljYXRvciA9ICRpbmRpY2F0b3JMaXN0W2ldO1xyXG4gICAgaWYgKCRpbmRpY2F0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0lORElDQVRPUl9BQ1RJVkUpKSB7XHJcbiAgICAgIHZhciBzbGlkZVRvID0gKyRpbmRpY2F0b3IuZGF0YXNldC5zbGlkZVRvO1xyXG4gICAgICBpZiAoZGlmZiA9PT0gbnVsbCkge1xyXG4gICAgICAgIG5lYXJlc3RJbmRleCA9IHNsaWRlVG87XHJcbiAgICAgICAgZGlmZiA9IE1hdGguYWJzKGluZGV4IC0gbmVhcmVzdEluZGV4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoaW5kZXggLSBzbGlkZVRvKSA8IGRpZmYpIHtcclxuICAgICAgICAgIG5lYXJlc3RJbmRleCA9IHNsaWRlVG87XHJcbiAgICAgICAgICBkaWZmID0gTWF0aC5hYnMoaW5kZXggLSBuZWFyZXN0SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkaWZmID0gaW5kZXggLSBuZWFyZXN0SW5kZXg7XHJcbiAgaWYgKGRpZmYgPT09IDApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdGhpcy5fZGlyZWN0aW9uID0gZGlmZiA+IDAgPyAnbmV4dCcgOiAncHJldic7XHJcbiAgZm9yIChpID0gMTsgaSA8PSBNYXRoLmFicyhkaWZmKTsgaSsrKSB7XHJcbiAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gX2F1dG9wbGF5XHJcbkNoaWVmU2xpZGVyLnByb3RvdHlwZS5fYXV0b3BsYXkgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLl9jb25maWcuYXV0b3BsYXkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKGFjdGlvbiA9PT0gJ3N0b3AnKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xyXG4gICAgdGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICh0aGlzLl9pbnRlcnZhbElkID09PSBudWxsKSB7XHJcbiAgICB0aGlzLl9pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBfcmVmcmVzaFxyXG5DaGllZlNsaWRlci5wcm90b3R5cGUuX3JlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gY3JlYXRlIHNvbWUgY29uc3RhbnRzXHJcbiAgdmFyICRpdGVtTGlzdCA9IHRoaXMuXyRpdGVtTGlzdDtcclxuICB2YXIgd2lkdGhJdGVtID0gJGl0ZW1MaXN0WzBdLm9mZnNldFdpZHRoO1xyXG4gIHZhciB3aWR0aFdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlci5vZmZzZXRXaWR0aDtcclxuICB2YXIgaXRlbXNJblZpc2libGVBcmVhID0gTWF0aC5yb3VuZCh3aWR0aFdyYXBwZXIgLyB3aWR0aEl0ZW0pO1xyXG5cclxuICBpZiAoaXRlbXNJblZpc2libGVBcmVhID09PSB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcblxyXG4gIHRoaXMuXyRpdGVtcy5jbGFzc0xpc3QuYWRkKFNMSURFUl9UUkFOU0lUSU9OX09GRik7XHJcbiAgdGhpcy5fJGl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuXHJcbiAgLy8gc2V0dGluZyBwcm9wZXJ0aWVzIGFmdGVyIHJlc2V0XHJcbiAgdGhpcy5fd2lkdGhJdGVtID0gd2lkdGhJdGVtO1xyXG4gIHRoaXMuX3dpZHRoV3JhcHBlciA9IHdpZHRoV3JhcHBlcjtcclxuICB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEgPSBpdGVtc0luVmlzaWJsZUFyZWE7XHJcbiAgdGhpcy5fdHJhbnNmb3JtID0gMDtcclxuICB0aGlzLl90cmFuc2Zvcm1TdGVwID0gMTAwIC8gaXRlbXNJblZpc2libGVBcmVhO1xyXG4gIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IGZhbHNlO1xyXG4gIHRoaXMuX2FjdGl2ZUl0ZW1zID0gW107XHJcblxyXG4gIC8vIHNldHRpbmcgb3JkZXIgYW5kIHRyYW5zbGF0ZSBpdGVtcyBhZnRlciByZXNldFxyXG4gIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSAkaXRlbUxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciAkaXRlbSA9ICRpdGVtTGlzdFtpXTtcclxuICAgIHZhciBwb3NpdGlvbiA9IGk7XHJcbiAgICAkaXRlbS5kYXRhc2V0LmluZGV4ID0gcG9zaXRpb247XHJcbiAgICAkaXRlbS5kYXRhc2V0Lm9yZGVyID0gcG9zaXRpb247XHJcbiAgICAkaXRlbS5kYXRhc2V0LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICAkaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XHJcbiAgICBpZiAocG9zaXRpb24gPCBpdGVtc0luVmlzaWJsZUFyZWEpIHtcclxuICAgICAgdGhpcy5fYWN0aXZlSXRlbXMucHVzaChwb3NpdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLl9zZXRBY3RpdmVDbGFzcygpO1xyXG4gIHRoaXMuX3VwZGF0ZUluZGljYXRvcnMoKTtcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLl8kaXRlbXMuY2xhc3NMaXN0LnJlbW92ZShTTElERVJfVFJBTlNJVElPTl9PRkYpO1xyXG4gICAgfS5iaW5kKHRoaXMpXHJcbiAgKTtcclxuXHJcbiAgLy8gaGlkZSBwcmV2IGFycm93IGZvciBub24taW5maW5pdGUgc2xpZGVyXHJcbiAgaWYgKCF0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgaWYgKHRoaXMuXyRjb250cm9sUHJldikge1xyXG4gICAgICB0aGlzLl8kY29udHJvbFByZXYuY2xhc3NMaXN0LmFkZChDTEFTU19DT05UUk9MX0hJREUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHJhbnNsYXRlIGxhc3QgaXRlbSBiZWZvcmUgZmlyc3RcclxuICB2YXIgY291bnQgPSAkaXRlbUxpc3QubGVuZ3RoIC0gMTtcclxuICB2YXIgdHJhbnNsYXRlID0gLSRpdGVtTGlzdC5sZW5ndGggKiAxMDA7XHJcbiAgJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0Lm9yZGVyID0gLTE7XHJcbiAgJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0LnRyYW5zbGF0ZSA9IC0kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICRpdGVtTGlzdFtjb3VudF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJy5jb25jYXQodHJhbnNsYXRlLCAnJSknKTtcclxuICAvLyB1cGRhdGUgdmFsdWVzIG9mIGV4dHJlbWUgcHJvcGVydGllc1xyXG4gIHRoaXMuX19yZWZyZXNoRXh0cmVtZVZhbHVlcygpO1xyXG4gIC8vIGNhbGxpbmcgX2F1dG9wbGF5XHJcbiAgdGhpcy5fYXV0b3BsYXkoKTtcclxufTtcclxuXHJcbi8vIHB1YmxpY1xyXG5DaGllZlNsaWRlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLl9tb3ZlVG9OZXh0KCk7XHJcbn07XHJcbkNoaWVmU2xpZGVyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuX21vdmVUb1ByZXYoKTtcclxufTtcclxuQ2hpZWZTbGlkZXIucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gIHRoaXMuX21vdmVUbyhpbmRleCk7XHJcbn07XHJcbkNoaWVmU2xpZGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gIHRoaXMuX3JlZnJlc2goKTtcclxufTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gIHZhciBlbG1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcicpO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbG1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyBlbG1zW2ldINCyINC60LDRh9C10YHRgtCy0LUg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgbmV3IENoaWVmU2xpZGVyKGVsbXNbaV0sIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gZnVuY3Rpb24ocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBjaHVua0lkcyA9IGRlZmVycmVkW2ldWzBdO1xuXHRcdHZhciBmbiA9IGRlZmVycmVkW2ldWzFdO1xuXHRcdHZhciBwcmlvcml0eSA9IGRlZmVycmVkW2ldWzJdO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeShmdW5jdGlvbihrZXkpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKTsgfSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25vcm1hbGl6ZS1zY3NzX3Nhc3NfX25vcm1hbGl6ZV9zY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbm9ybWFsaXplLXNjc3Nfc2Fzc19fbm9ybWFsaXplX3Njc3NcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7IH0pXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImluc2VydGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImNzcyIsImluZGV4T2YiLCJwdXNoIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiaGVhZCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnQiLCJyZXF1aXJlIiwibm9ybWFsaXplIiwibWVudV9saW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwid2luU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsZWQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ3aWR0aCIsIkN1c3RvbUV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImUiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsIldSQVBQRVJfU0VMRUNUT1IiLCJJVEVNU19TRUxFQ1RPUiIsIklURU1fU0VMRUNUT1IiLCJDT05UUk9MX0NMQVNTIiwiU0VMRUNUT1JfUFJFViIsIlNFTEVDVE9SX05FWFQiLCJTRUxFQ1RPUl9JTkRJQ0FUT1IiLCJTTElERVJfVFJBTlNJVElPTl9PRkYiLCJDTEFTU19DT05UUk9MX0hJREUiLCJDTEFTU19JVEVNX0FDVElWRSIsIkNMQVNTX0lORElDQVRPUl9BQ1RJVkUiLCJDaGllZlNsaWRlciIsInNlbGVjdG9yIiwiY29uZmlnIiwiJHJvb3QiLCJfJHJvb3QiLCJfJHdyYXBwZXIiLCJfJGl0ZW1zIiwiXyRpdGVtTGlzdCIsIl8kY29udHJvbFByZXYiLCJfJGNvbnRyb2xOZXh0IiwiXyRpbmRpY2F0b3JMaXN0IiwiX21pbk9yZGVyIiwiX21heE9yZGVyIiwiXyRpdGVtV2l0aE1pbk9yZGVyIiwiXyRpdGVtV2l0aE1heE9yZGVyIiwiX21pblRyYW5zbGF0ZSIsIl9tYXhUcmFuc2xhdGUiLCJfZGlyZWN0aW9uIiwiX2JhbGFuY2luZ0l0ZW1zRmxhZyIsIl9hY3RpdmVJdGVtcyIsIl90cmFuc2Zvcm0iLCJfaGFzU3dpcGVTdGF0ZSIsIl9fc3dpcGVTdGFydFBvcyIsIl9pbnRlcnZhbElkIiwiX2NvbmZpZyIsImxvb3AiLCJhdXRvcGxheSIsImludGVydmFsIiwicmVmcmVzaCIsInN3aXBlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCIkaXRlbUxpc3QiLCJ3aWR0aEl0ZW0iLCJvZmZzZXRXaWR0aCIsIndpZHRoV3JhcHBlciIsIml0ZW1zSW5WaXNpYmxlQXJlYSIsIk1hdGgiLCJyb3VuZCIsIl93aWR0aEl0ZW0iLCJfd2lkdGhXcmFwcGVyIiwiX2l0ZW1zSW5WaXNpYmxlQXJlYSIsIl90cmFuc2Zvcm1TdGVwIiwiaSIsImRhdGFzZXQiLCJpbmRleCIsIm9yZGVyIiwidHJhbnNsYXRlIiwiY291bnQiLCJ0cmFuc2Zvcm0iLCJfX3JlZnJlc2hFeHRyZW1lVmFsdWVzIiwiY2xhc3NMaXN0IiwiYWRkIiwiX3NldEFjdGl2ZUNsYXNzIiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfdXBkYXRlSW5kaWNhdG9ycyIsIl9hdXRvcGxheSIsInByb3RvdHlwZSIsIiRpdGVtcyIsIm9uQ2xpY2siLCIkdGFyZ2V0IiwidGFyZ2V0IiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWRlIiwiX21vdmUiLCJzbGlkZVRvIiwicGFyc2VJbnQiLCJfbW92ZVRvIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25UcmFuc2l0aW9uU3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYmFsYW5jaW5nSXRlbXMiLCJiaW5kIiwib25UcmFuc2l0aW9uRW5kIiwib25SZXNpemUiLCJfcmVmcmVzaCIsIm9uU3dpcGVTdGFydCIsInR5cGUiLCJzZWFyY2giLCJ0b3VjaGVzIiwiX3N3aXBlU3RhcnRQb3MiLCJjbGllbnRYIiwib25Td2lwZUVuZCIsImNoYW5nZWRUb3VjaGVzIiwiZGlmZlBvcyIsIm9uRHJhZ1N0YXJ0Iiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJpbGl0eVN0YXRlIiwiXyRpdGVtQnlNaW5PcmRlciIsIl8kaXRlbUJ5TWF4T3JkZXIiLCIkaXRlbSIsIiR3cmFwcGVyIiwiJHdyYXBwZXJDbGllbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGhIYWxmSXRlbSIsImNsaWVudFJlY3QiLCJ3cmFwcGVyTGVmdCIsImxlZnQiLCIkbWluIiwicmlnaHQiLCJjb25jYXQiLCJ3cmFwcGVyUmlnaHQiLCIkbWF4IiwiYWN0aXZlSXRlbXMiLCJyZW1vdmUiLCIkaW5kaWNhdG9yTGlzdCIsInN0ZXAiLCJlbmRUcmFuc2Zvcm1WYWx1ZSIsImFjdGl2ZUluZGV4IiwibmV3SW5kZXgiLCJkaXNwYXRjaEV2ZW50IiwiX21vdmVUb05leHQiLCJfbW92ZVRvUHJldiIsIm5lYXJlc3RJbmRleCIsImRpZmYiLCIkaW5kaWNhdG9yIiwiYWJzIiwiYWN0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicG9zaXRpb24iLCJuZXh0IiwicHJldiIsIm1vdmVUbyIsImVsbXMiLCJsZW4iXSwic291cmNlUm9vdCI6IiJ9