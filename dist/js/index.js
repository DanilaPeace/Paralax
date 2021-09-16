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
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 5000
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFVQyxHQUFWLEVBQWU7QUFDNUIsTUFBSUgsUUFBUSxDQUFDSSxPQUFULENBQWlCRCxHQUFqQixLQUF5QixDQUE3QixFQUFnQztBQUNoQ0gsRUFBQUEsUUFBUSxDQUFDSyxJQUFULENBQWNGLEdBQWQ7QUFFQSxNQUFJRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0JQLEdBQXhCLENBQVg7QUFDQUcsRUFBQUEsSUFBSSxDQUFDSyxXQUFMLENBQWlCRixJQUFqQjs7QUFFQSxNQUFJRixRQUFRLENBQUNLLElBQVQsQ0FBY0MsVUFBZCxDQUF5QkMsTUFBN0IsRUFBcUM7QUFDakNQLElBQUFBLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjRyxZQUFkLENBQTJCVCxJQUEzQixFQUFpQ0MsUUFBUSxDQUFDSyxJQUFULENBQWNDLFVBQWQsQ0FBeUIsQ0FBekIsQ0FBakM7QUFDSCxHQUZELE1BR0s7QUFDRE4sSUFBQUEsUUFBUSxDQUFDSyxJQUFULENBQWNELFdBQWQsQ0FBMEJMLElBQTFCO0FBQ0g7QUFDSixDQWREOzs7Ozs7Ozs7O0FDRkEsSUFBSVUsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHVEQUFELENBQXBCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQywrREFBRCxDQUF2Qjs7QUFFQUQsTUFBTSxDQUFDRSxTQUFELENBQU47Ozs7Ozs7Ozs7QUNIQWpCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQiw4eVBBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBLE1BQU1pQixVQUFVLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbkI7QUFDQUMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzFDLE1BQUlDLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQ2lCLGVBQVQsQ0FBeUJDLFNBQXpDO0FBQ0EsUUFBTUMsWUFBWSxHQUFHbkIsUUFBUSxDQUFDaUIsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0NuQixRQUFRLENBQUNpQixlQUFULENBQXlCRyxZQUF0RjtBQUNBLFFBQU1DLFFBQVEsR0FBSUwsU0FBUyxHQUFHRyxZQUFiLEdBQTZCLEdBQTlDO0FBQ0FuQixFQUFBQSxRQUFRLENBQUNzQixhQUFULENBQXVCLGlDQUF2QixFQUEwREMsS0FBMUQsQ0FBZ0VDLEtBQWhFLEdBQXdFSCxRQUFRLEdBQUcsR0FBbkY7QUFDSCxDQUxEOzs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVDLENBQUMsWUFBVztBQUNULE1BQUksT0FBT1AsTUFBTSxDQUFDVyxXQUFkLEtBQThCLFVBQWxDLEVBQStDLE9BQU8sS0FBUDs7QUFDL0MsV0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLE1BQTVCLEVBQW9DO0FBQ2xDQSxJQUFBQSxNQUFNLEdBQUdBLE1BQU0sSUFBSTtBQUFDQyxNQUFBQSxPQUFPLEVBQUUsS0FBVjtBQUFpQkMsTUFBQUEsVUFBVSxFQUFFLEtBQTdCO0FBQW9DQyxNQUFBQSxNQUFNLEVBQUU7QUFBNUMsS0FBbkI7QUFDQSxRQUFJQyxDQUFDLEdBQUcvQixRQUFRLENBQUNnQyxXQUFULENBQXFCLGFBQXJCLENBQVI7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGLENBQWtCUCxLQUFsQixFQUF5QkMsTUFBTSxDQUFDQyxPQUFoQyxFQUF5Q0QsTUFBTSxDQUFDRSxVQUFoRCxFQUE0REYsTUFBTSxDQUFDRyxNQUFuRTtBQUNBLFdBQU9DLENBQVA7QUFDRDs7QUFDRGpCLEVBQUFBLE1BQU0sQ0FBQ1csV0FBUCxHQUFxQkEsV0FBckI7QUFDRCxDQVRGOztBQVdDLElBQUlTLGdCQUFnQixHQUFHLGtCQUF2QjtBQUNBLElBQUlDLGNBQWMsR0FBRyxnQkFBckI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsZUFBcEI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsaUJBQXBCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUUsSUFBSUMsYUFBYSxHQUFHLHFDQUFwQjtBQUNBLElBQUlDLGFBQWEsR0FBRyxxQ0FBcEI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyx3QkFBekI7QUFDQSxJQUFJQyxxQkFBcUIsR0FBRywyQkFBNUI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxzQkFBekI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxxQkFBeEI7QUFDQSxJQUFJQyxzQkFBc0IsR0FBRyxRQUE3Qjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQkMsTUFBL0IsRUFBdUM7QUFDckM7QUFDQSxNQUFJQyxLQUFLLEdBQUcsT0FBT0YsUUFBUCxLQUFvQixRQUFwQixHQUNWOUMsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QndCLFFBQXZCLENBRFUsR0FDeUJBLFFBRHJDO0FBRUEsT0FBS0csTUFBTCxHQUFjRCxLQUFkO0FBQ0EsT0FBS0UsU0FBTCxHQUFpQkYsS0FBSyxDQUFDMUIsYUFBTixDQUFvQlksZ0JBQXBCLENBQWpCO0FBQ0EsT0FBS2lCLE9BQUwsR0FBZUgsS0FBSyxDQUFDMUIsYUFBTixDQUFvQmEsY0FBcEIsQ0FBZjtBQUNBLE9BQUtpQixVQUFMLEdBQWtCSixLQUFLLENBQUNuQyxnQkFBTixDQUF1QnVCLGFBQXZCLENBQWxCO0FBQ0EsT0FBS2lCLGFBQUwsR0FBcUJMLEtBQUssQ0FBQzFCLGFBQU4sQ0FBb0JnQixhQUFwQixDQUFyQjtBQUNBLE9BQUtnQixhQUFMLEdBQXFCTixLQUFLLENBQUMxQixhQUFOLENBQW9CaUIsYUFBcEIsQ0FBckI7QUFDQSxPQUFLZ0IsZUFBTCxHQUF1QlAsS0FBSyxDQUFDbkMsZ0JBQU4sQ0FBdUIyQixrQkFBdkIsQ0FBdkIsQ0FWcUMsQ0FXckM7O0FBQ0EsT0FBS2dCLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsT0FBS0Msa0JBQUwsR0FBMEIsSUFBMUI7QUFDQSxPQUFLQyxrQkFBTCxHQUEwQixJQUExQjtBQUNBLE9BQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLENBQXJCLENBakJxQyxDQWtCckM7O0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixNQUFsQixDQW5CcUMsQ0FvQnJDOztBQUNBLE9BQUtDLG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixFQUFwQixDQXRCcUMsQ0F1QnJDOztBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBbEIsQ0F4QnFDLENBeUJyQzs7QUFDQSxPQUFLQyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsT0FBS0MsZUFBTCxHQUF1QixDQUF2QixDQTNCcUMsQ0E0QnJDOztBQUNBLE9BQUtGLFVBQUwsR0FBa0IsQ0FBbEIsQ0E3QnFDLENBNkJoQjs7QUFDckIsT0FBS0csV0FBTCxHQUFtQixJQUFuQixDQTlCcUMsQ0ErQnJDOztBQUNBLE9BQUtDLE9BQUwsR0FBZTtBQUNiQyxJQUFBQSxJQUFJLEVBQUUsSUFETztBQUViQyxJQUFBQSxRQUFRLEVBQUUsS0FGRztBQUdiQyxJQUFBQSxRQUFRLEVBQUUsSUFIRztBQUliQyxJQUFBQSxPQUFPLEVBQUUsSUFKSTtBQUtiQyxJQUFBQSxLQUFLLEVBQUU7QUFMTSxHQUFmOztBQU9BLE9BQUssSUFBSUMsR0FBVCxJQUFnQjVCLE1BQWhCLEVBQXdCO0FBQ3RCLFFBQUksS0FBS3NCLE9BQUwsQ0FBYU8sY0FBYixDQUE0QkQsR0FBNUIsQ0FBSixFQUFzQztBQUNwQyxXQUFLTixPQUFMLENBQWFNLEdBQWIsSUFBb0I1QixNQUFNLENBQUM0QixHQUFELENBQTFCO0FBQ0Q7QUFDRixHQTNDb0MsQ0E0Q3JDOzs7QUFDQSxNQUFJRSxTQUFTLEdBQUcsS0FBS3pCLFVBQXJCO0FBQ0EsTUFBSTBCLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxXQUE3QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFLOUIsU0FBTCxDQUFlNkIsV0FBbEM7QUFDQSxNQUFJRSxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksR0FBR0YsU0FBMUIsQ0FBekIsQ0FoRHFDLENBaURyQzs7QUFDQSxPQUFLTSxVQUFMLEdBQWtCTixTQUFsQjtBQUNBLE9BQUtPLGFBQUwsR0FBcUJMLFlBQXJCO0FBQ0EsT0FBS00sbUJBQUwsR0FBMkJMLGtCQUEzQjtBQUNBLE9BQUtNLGNBQUwsR0FBc0IsTUFBTU4sa0JBQTVCLENBckRxQyxDQXNEckM7O0FBQ0EsT0FBSyxJQUFJTyxDQUFDLEdBQUcsQ0FBUixFQUFXakYsTUFBTSxHQUFHc0UsU0FBUyxDQUFDdEUsTUFBbkMsRUFBMkNpRixDQUFDLEdBQUdqRixNQUEvQyxFQUF1RGlGLENBQUMsRUFBeEQsRUFBNEQ7QUFDMURYLElBQUFBLFNBQVMsQ0FBQ1csQ0FBRCxDQUFULENBQWFDLE9BQWIsQ0FBcUJDLEtBQXJCLEdBQTZCRixDQUE3QjtBQUNBWCxJQUFBQSxTQUFTLENBQUNXLENBQUQsQ0FBVCxDQUFhQyxPQUFiLENBQXFCRSxLQUFyQixHQUE2QkgsQ0FBN0I7QUFDQVgsSUFBQUEsU0FBUyxDQUFDVyxDQUFELENBQVQsQ0FBYUMsT0FBYixDQUFxQkcsU0FBckIsR0FBaUMsQ0FBakM7O0FBQ0EsUUFBSUosQ0FBQyxHQUFHUCxrQkFBUixFQUE0QjtBQUMxQixXQUFLakIsWUFBTCxDQUFrQmxFLElBQWxCLENBQXVCMEYsQ0FBdkI7QUFDRDtBQUNGOztBQUNELE1BQUksS0FBS25CLE9BQUwsQ0FBYUMsSUFBakIsRUFBdUI7QUFDckI7QUFDQSxRQUFJdUIsS0FBSyxHQUFHaEIsU0FBUyxDQUFDdEUsTUFBVixHQUFtQixDQUEvQjtBQUNBLFFBQUlxRixTQUFTLEdBQUcsQ0FBQ2YsU0FBUyxDQUFDdEUsTUFBWCxHQUFvQixHQUFwQztBQUNBc0UsSUFBQUEsU0FBUyxDQUFDZ0IsS0FBRCxDQUFULENBQWlCSixPQUFqQixDQUF5QkUsS0FBekIsR0FBaUMsQ0FBQyxDQUFsQztBQUNBZCxJQUFBQSxTQUFTLENBQUNnQixLQUFELENBQVQsQ0FBaUJKLE9BQWpCLENBQXlCRyxTQUF6QixHQUFxQyxDQUFDZixTQUFTLENBQUN0RSxNQUFYLEdBQW9CLEdBQXpEO0FBQ0FzRSxJQUFBQSxTQUFTLENBQUNnQixLQUFELENBQVQsQ0FBaUJ0RSxLQUFqQixDQUF1QnVFLFNBQXZCLEdBQW1DLGdCQUFnQkYsU0FBaEIsR0FBNEIsSUFBL0Q7O0FBQ0EsU0FBS0csc0JBQUw7QUFDRCxHQVJELE1BUU87QUFDTCxRQUFJLEtBQUsxQyxhQUFULEVBQXdCO0FBQ3RCLFdBQUtBLGFBQUwsQ0FBbUIyQyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUN2RCxrQkFBakM7QUFDRDtBQUNGOztBQUNELE9BQUt3RCxlQUFMOztBQUNBLE9BQUtDLGlCQUFMOztBQUNBLE9BQUtDLGlCQUFMOztBQUNBLE9BQUtDLFNBQUw7QUFDRCxFQUVEOzs7QUFDQXhELFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0JILGlCQUF0QixHQUEwQyxZQUFXO0FBQ25ELE1BQUluRCxLQUFLLEdBQUcsS0FBS0MsTUFBakI7QUFDQSxNQUFJc0QsTUFBTSxHQUFHLEtBQUtwRCxPQUFsQjtBQUNBLE1BQUlKLE1BQU0sR0FBRyxLQUFLc0IsT0FBbEI7O0FBQ0EsV0FBU21DLE9BQVQsQ0FBaUJ6RSxDQUFqQixFQUFvQjtBQUNsQixRQUFJMEUsT0FBTyxHQUFHMUUsQ0FBQyxDQUFDMkUsTUFBaEI7O0FBQ0EsU0FBS0wsU0FBTCxDQUFlLE1BQWY7O0FBQ0EsUUFBSUksT0FBTyxDQUFDVCxTQUFSLENBQWtCVyxRQUFsQixDQUEyQnRFLGFBQTNCLENBQUosRUFBK0M7QUFDN0NOLE1BQUFBLENBQUMsQ0FBQzZFLGNBQUY7QUFDQSxXQUFLOUMsVUFBTCxHQUFrQjJDLE9BQU8sQ0FBQ2hCLE9BQVIsQ0FBZ0JvQixLQUFsQzs7QUFDQSxXQUFLQyxLQUFMO0FBQ0QsS0FKRCxNQUlPLElBQUlMLE9BQU8sQ0FBQ2hCLE9BQVIsQ0FBZ0JzQixPQUFwQixFQUE2QjtBQUNsQyxVQUFJckIsS0FBSyxHQUFHc0IsUUFBUSxDQUFDUCxPQUFPLENBQUNoQixPQUFSLENBQWdCc0IsT0FBakIsQ0FBcEI7O0FBQ0EsV0FBS0UsT0FBTCxDQUFhdkIsS0FBYjtBQUNEOztBQUNELFFBQUksS0FBS3JCLE9BQUwsQ0FBYUMsSUFBakIsRUFBdUI7QUFDckIsV0FBSytCLFNBQUw7QUFDRDtBQUNGOztBQUNELFdBQVNhLFlBQVQsQ0FBc0JuRixDQUF0QixFQUF5QjtBQUN2QixTQUFLc0UsU0FBTCxDQUFlLE1BQWY7QUFDRDs7QUFDRCxXQUFTYyxZQUFULENBQXNCcEYsQ0FBdEIsRUFBeUI7QUFDdkIsU0FBS3NFLFNBQUw7QUFDRDs7QUFDRCxXQUFTZSxpQkFBVCxHQUE2QjtBQUMzQixRQUFJLEtBQUtyRCxtQkFBVCxFQUE4QjtBQUM1QjtBQUNEOztBQUNELFNBQUtBLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0FqRCxJQUFBQSxNQUFNLENBQUN1RyxxQkFBUCxDQUE2QixLQUFLQyxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUE3QjtBQUNEOztBQUNELFdBQVNDLGVBQVQsR0FBMkI7QUFDekIsU0FBS3pELG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0Q7O0FBQ0QsV0FBUzBELFFBQVQsR0FBb0I7QUFDbEIzRyxJQUFBQSxNQUFNLENBQUN1RyxxQkFBUCxDQUE2QixLQUFLSyxRQUFMLENBQWNILElBQWQsQ0FBbUIsSUFBbkIsQ0FBN0I7QUFDRDs7QUFDRCxXQUFTSSxZQUFULENBQXNCNUYsQ0FBdEIsRUFBeUI7QUFDdkIsU0FBS3NFLFNBQUwsQ0FBZSxNQUFmOztBQUNBLFFBQUkzRSxLQUFLLEdBQUdLLENBQUMsQ0FBQzZGLElBQUYsQ0FBT0MsTUFBUCxDQUFjLE9BQWQsTUFBMkIsQ0FBM0IsR0FBK0I5RixDQUFDLENBQUMrRixPQUFGLENBQVUsQ0FBVixDQUEvQixHQUE4Qy9GLENBQTFEO0FBQ0EsU0FBS2dHLGNBQUwsR0FBc0JyRyxLQUFLLENBQUNzRyxPQUE1QjtBQUNBLFNBQUs5RCxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7O0FBQ0QsV0FBUytELFVBQVQsQ0FBb0JsRyxDQUFwQixFQUF1QjtBQUNyQixRQUFJLENBQUMsS0FBS21DLGNBQVYsRUFBMEI7QUFDeEI7QUFDRDs7QUFDRCxRQUFJeEMsS0FBSyxHQUFHSyxDQUFDLENBQUM2RixJQUFGLENBQU9DLE1BQVAsQ0FBYyxPQUFkLE1BQTJCLENBQTNCLEdBQStCOUYsQ0FBQyxDQUFDbUcsY0FBRixDQUFpQixDQUFqQixDQUEvQixHQUFxRG5HLENBQWpFO0FBQ0EsUUFBSW9HLE9BQU8sR0FBRyxLQUFLSixjQUFMLEdBQXNCckcsS0FBSyxDQUFDc0csT0FBMUM7O0FBQ0EsUUFBSUcsT0FBTyxHQUFHLEVBQWQsRUFBa0I7QUFDaEIsV0FBS3JFLFVBQUwsR0FBa0IsTUFBbEI7O0FBQ0EsV0FBS2dELEtBQUw7QUFDRCxLQUhELE1BR08sSUFBSXFCLE9BQU8sR0FBRyxDQUFDLEVBQWYsRUFBbUI7QUFDeEIsV0FBS3JFLFVBQUwsR0FBa0IsTUFBbEI7O0FBQ0EsV0FBS2dELEtBQUw7QUFDRDs7QUFDRCxTQUFLNUMsY0FBTCxHQUFzQixLQUF0Qjs7QUFDQSxRQUFJLEtBQUtHLE9BQUwsQ0FBYUMsSUFBakIsRUFBdUI7QUFDckIsV0FBSytCLFNBQUw7QUFDRDtBQUNGOztBQUNELFdBQVMrQixXQUFULENBQXFCckcsQ0FBckIsRUFBd0I7QUFDdEJBLElBQUFBLENBQUMsQ0FBQzZFLGNBQUY7QUFDRDs7QUFDRCxXQUFTeUIsa0JBQVQsR0FBOEI7QUFDNUIsUUFBSXJJLFFBQVEsQ0FBQ3NJLGVBQVQsS0FBNkIsUUFBakMsRUFBMkM7QUFDekMsV0FBS2pDLFNBQUwsQ0FBZSxNQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUlyRyxRQUFRLENBQUNzSSxlQUFULEtBQTZCLFNBQWpDLEVBQTRDO0FBQ2pELFVBQUksS0FBS2pFLE9BQUwsQ0FBYUMsSUFBakIsRUFBdUI7QUFDckIsYUFBSytCLFNBQUw7QUFDRDtBQUNGO0FBQ0Y7O0FBRURyRCxFQUFBQSxLQUFLLENBQUNqQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQ3lGLE9BQU8sQ0FBQ2UsSUFBUixDQUFhLElBQWIsQ0FBaEM7QUFDQXZFLEVBQUFBLEtBQUssQ0FBQ2pDLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDbUcsWUFBWSxDQUFDSyxJQUFiLENBQWtCLElBQWxCLENBQXJDO0FBQ0F2RSxFQUFBQSxLQUFLLENBQUNqQyxnQkFBTixDQUF1QixZQUF2QixFQUFxQ29HLFlBQVksQ0FBQ0ksSUFBYixDQUFrQixJQUFsQixDQUFyQyxFQTdFbUQsQ0E4RW5EOztBQUNBLE1BQUl4RSxNQUFNLENBQUMwQixPQUFYLEVBQW9CO0FBQ2xCM0QsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQzBHLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjLElBQWQsQ0FBbEM7QUFDRCxHQWpGa0QsQ0FrRm5EOzs7QUFDQSxNQUFJeEUsTUFBTSxDQUFDdUIsSUFBWCxFQUFpQjtBQUNmaUMsSUFBQUEsTUFBTSxDQUFDeEYsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDcUcsaUJBQWlCLENBQUNHLElBQWxCLENBQXVCLElBQXZCLENBQTVDO0FBQ0FoQixJQUFBQSxNQUFNLENBQUN4RixnQkFBUCxDQUF3QixlQUF4QixFQUF5Q3lHLGVBQWUsQ0FBQ0QsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBekM7QUFDRCxHQXRGa0QsQ0F1Rm5EOzs7QUFDQSxNQUFJeEUsTUFBTSxDQUFDMkIsS0FBWCxFQUFrQjtBQUNoQjFCLElBQUFBLEtBQUssQ0FBQ2pDLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDNEcsWUFBWSxDQUFDSixJQUFiLENBQWtCLElBQWxCLENBQXJDO0FBQ0F2RSxJQUFBQSxLQUFLLENBQUNqQyxnQkFBTixDQUF1QixXQUF2QixFQUFvQzRHLFlBQVksQ0FBQ0osSUFBYixDQUFrQixJQUFsQixDQUFwQztBQUNBdkgsSUFBQUEsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixVQUExQixFQUFzQ2tILFVBQVUsQ0FBQ1YsSUFBWCxDQUFnQixJQUFoQixDQUF0QztBQUNBdkgsSUFBQUEsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ2tILFVBQVUsQ0FBQ1YsSUFBWCxDQUFnQixJQUFoQixDQUFyQztBQUNEOztBQUNEdkUsRUFBQUEsS0FBSyxDQUFDakMsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NxSCxXQUFXLENBQUNiLElBQVosQ0FBaUIsSUFBakIsQ0FBcEMsRUE5Rm1ELENBK0ZuRDs7QUFDQXZILEVBQUFBLFFBQVEsQ0FBQ2UsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDc0gsa0JBQWtCLENBQUNkLElBQW5CLENBQXdCLElBQXhCLENBQTlDO0FBQ0QsQ0FqR0QsRUFtR0E7OztBQUNBMUUsV0FBVyxDQUFDeUQsU0FBWixDQUFzQlAsc0JBQXRCLEdBQStDLFlBQVc7QUFDeEQsTUFBSWxCLFNBQVMsR0FBRyxLQUFLekIsVUFBckI7QUFDQSxPQUFLSSxTQUFMLEdBQWlCLENBQUNxQixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFZLE9BQWIsQ0FBcUJFLEtBQXZDO0FBQ0EsT0FBS2xDLFNBQUwsR0FBaUIsS0FBS0QsU0FBdEI7QUFDQSxPQUFLK0UsZ0JBQUwsR0FBd0IxRCxTQUFTLENBQUMsQ0FBRCxDQUFqQztBQUNBLE9BQUsyRCxnQkFBTCxHQUF3QjNELFNBQVMsQ0FBQyxDQUFELENBQWpDO0FBQ0EsT0FBS2pCLGFBQUwsR0FBcUIsQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYVksT0FBYixDQUFxQkcsU0FBM0M7QUFDQSxPQUFLL0IsYUFBTCxHQUFxQixLQUFLRCxhQUExQjs7QUFDQSxPQUFLLElBQUk0QixDQUFDLEdBQUcsQ0FBUixFQUFXakYsTUFBTSxHQUFHc0UsU0FBUyxDQUFDdEUsTUFBbkMsRUFBMkNpRixDQUFDLEdBQUdqRixNQUEvQyxFQUF1RGlGLENBQUMsRUFBeEQsRUFBNEQ7QUFDMUQsUUFBSWlELEtBQUssR0FBRzVELFNBQVMsQ0FBQ1csQ0FBRCxDQUFyQjtBQUNBLFFBQUlHLEtBQUssR0FBRyxDQUFDOEMsS0FBSyxDQUFDaEQsT0FBTixDQUFjRSxLQUEzQjs7QUFDQSxRQUFJQSxLQUFLLEdBQUcsS0FBS25DLFNBQWpCLEVBQTRCO0FBQzFCLFdBQUtBLFNBQUwsR0FBaUJtQyxLQUFqQjtBQUNBLFdBQUs0QyxnQkFBTCxHQUF3QkUsS0FBeEI7QUFDQSxXQUFLN0UsYUFBTCxHQUFxQixDQUFDNkUsS0FBSyxDQUFDaEQsT0FBTixDQUFjRyxTQUFwQztBQUNELEtBSkQsTUFJTyxJQUFJRCxLQUFLLEdBQUcsS0FBS2xDLFNBQWpCLEVBQTRCO0FBQ2pDLFdBQUtBLFNBQUwsR0FBaUJrQyxLQUFqQjtBQUNBLFdBQUs2QyxnQkFBTCxHQUF3QkMsS0FBeEI7QUFDQSxXQUFLN0UsYUFBTCxHQUFxQixDQUFDNkUsS0FBSyxDQUFDaEQsT0FBTixDQUFjRyxTQUFwQztBQUNEO0FBQ0Y7QUFDRixDQXJCRCxFQXVCQTs7O0FBQ0EvQyxXQUFXLENBQUN5RCxTQUFaLENBQXNCZ0IsZUFBdEIsR0FBd0MsWUFBVztBQUNqRCxNQUFJLENBQUMsS0FBS3ZELG1CQUFWLEVBQStCO0FBQzdCO0FBQ0Q7O0FBQ0QsTUFBSTJFLFFBQVEsR0FBRyxLQUFLeEYsU0FBcEI7QUFDQSxNQUFJeUYsa0JBQWtCLEdBQUdELFFBQVEsQ0FBQ0UscUJBQVQsRUFBekI7QUFDQSxNQUFJQyxhQUFhLEdBQUdGLGtCQUFrQixDQUFDbkgsS0FBbkIsR0FBMkIsS0FBSzhELG1CQUFoQyxHQUFzRCxDQUExRTtBQUNBLE1BQUlPLEtBQUssR0FBRyxLQUFLekMsVUFBTCxDQUFnQjdDLE1BQTVCO0FBQ0EsTUFBSXFGLFNBQUo7QUFDQSxNQUFJa0QsVUFBSjs7QUFDQSxNQUFJLEtBQUtoRixVQUFMLEtBQW9CLE1BQXhCLEVBQWdDO0FBQzlCLFFBQUlpRixXQUFXLEdBQUdKLGtCQUFrQixDQUFDSyxJQUFyQztBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLVixnQkFBaEI7QUFDQTNDLElBQUFBLFNBQVMsR0FBRyxLQUFLaEMsYUFBakI7QUFDQWtGLElBQUFBLFVBQVUsR0FBR0csSUFBSSxDQUFDTCxxQkFBTCxFQUFiOztBQUNBLFFBQUlFLFVBQVUsQ0FBQ0ksS0FBWCxHQUFtQkgsV0FBVyxHQUFHRixhQUFyQyxFQUFvRDtBQUNsREksTUFBQUEsSUFBSSxDQUFDeEQsT0FBTCxDQUFhRSxLQUFiLEdBQXFCLEtBQUtuQyxTQUFMLEdBQWlCcUMsS0FBdEM7QUFDQUQsTUFBQUEsU0FBUyxJQUFJQyxLQUFLLEdBQUcsR0FBckI7QUFDQW9ELE1BQUFBLElBQUksQ0FBQ3hELE9BQUwsQ0FBYUcsU0FBYixHQUF5QkEsU0FBekI7QUFDQXFELE1BQUFBLElBQUksQ0FBQzFILEtBQUwsQ0FBV3VFLFNBQVgsR0FBdUIsY0FBY3FELE1BQWQsQ0FBcUJ2RCxTQUFyQixFQUFnQyxJQUFoQyxDQUF2QixDQUprRCxDQUtsRDs7QUFDQSxXQUFLRyxzQkFBTDtBQUNEO0FBQ0YsR0FiRCxNQWFPO0FBQ0wsUUFBSXFELFlBQVksR0FBR1Qsa0JBQWtCLENBQUNPLEtBQXRDO0FBQ0EsUUFBSUcsSUFBSSxHQUFHLEtBQUtiLGdCQUFoQjtBQUNBNUMsSUFBQUEsU0FBUyxHQUFHLEtBQUsvQixhQUFqQjtBQUNBaUYsSUFBQUEsVUFBVSxHQUFHTyxJQUFJLENBQUNULHFCQUFMLEVBQWI7O0FBQ0EsUUFBSUUsVUFBVSxDQUFDRSxJQUFYLEdBQWtCSSxZQUFZLEdBQUdQLGFBQXJDLEVBQW9EO0FBQ2xEUSxNQUFBQSxJQUFJLENBQUM1RCxPQUFMLENBQWFFLEtBQWIsR0FBcUIsS0FBS2xDLFNBQUwsR0FBaUJvQyxLQUF0QztBQUNBRCxNQUFBQSxTQUFTLElBQUlDLEtBQUssR0FBRyxHQUFyQjtBQUNBd0QsTUFBQUEsSUFBSSxDQUFDNUQsT0FBTCxDQUFhRyxTQUFiLEdBQXlCQSxTQUF6QjtBQUNBeUQsTUFBQUEsSUFBSSxDQUFDOUgsS0FBTCxDQUFXdUUsU0FBWCxHQUF1QixjQUFjcUQsTUFBZCxDQUFxQnZELFNBQXJCLEVBQWdDLElBQWhDLENBQXZCLENBSmtELENBS2xEOztBQUNBLFdBQUtHLHNCQUFMO0FBQ0Q7QUFDRixHQXBDZ0QsQ0FxQ2pEOzs7QUFDQXNCLEVBQUFBLHFCQUFxQixDQUFDLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLENBQUQsQ0FBckI7QUFDRCxDQXZDRCxFQXlDQTs7O0FBQ0ExRSxXQUFXLENBQUN5RCxTQUFaLENBQXNCSixlQUF0QixHQUF3QyxZQUFXO0FBQ2pELE1BQUlvRCxXQUFXLEdBQUcsS0FBS3RGLFlBQXZCO0FBQ0EsTUFBSWEsU0FBUyxHQUFHLEtBQUt6QixVQUFyQjs7QUFDQSxPQUFLLElBQUlvQyxDQUFDLEdBQUcsQ0FBUixFQUFXakYsTUFBTSxHQUFHc0UsU0FBUyxDQUFDdEUsTUFBbkMsRUFBMkNpRixDQUFDLEdBQUdqRixNQUEvQyxFQUF1RGlGLENBQUMsRUFBeEQsRUFBNEQ7QUFDMUQsUUFBSWlELEtBQUssR0FBRzVELFNBQVMsQ0FBQ1csQ0FBRCxDQUFyQjtBQUNBLFFBQUlFLEtBQUssR0FBRyxDQUFDK0MsS0FBSyxDQUFDaEQsT0FBTixDQUFjQyxLQUEzQjs7QUFDQSxRQUFJNEQsV0FBVyxDQUFDekosT0FBWixDQUFvQjZGLEtBQXBCLElBQTZCLENBQUMsQ0FBbEMsRUFBcUM7QUFDbkMrQyxNQUFBQSxLQUFLLENBQUN6QyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQnRELGlCQUFwQjtBQUNELEtBRkQsTUFFTztBQUNMOEYsTUFBQUEsS0FBSyxDQUFDekMsU0FBTixDQUFnQnVELE1BQWhCLENBQXVCNUcsaUJBQXZCO0FBQ0Q7QUFDRjtBQUNGLENBWkQsRUFjQTs7O0FBQ0FFLFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0JGLGlCQUF0QixHQUEwQyxZQUFXO0FBQ25ELE1BQUlvRCxjQUFjLEdBQUcsS0FBS2pHLGVBQTFCO0FBQ0EsTUFBSXNCLFNBQVMsR0FBRyxLQUFLekIsVUFBckI7O0FBQ0EsTUFBSSxDQUFDb0csY0FBYyxDQUFDakosTUFBcEIsRUFBNEI7QUFDMUI7QUFDRDs7QUFDRCxPQUFLLElBQUltRixLQUFLLEdBQUcsQ0FBWixFQUFlbkYsTUFBTSxHQUFHc0UsU0FBUyxDQUFDdEUsTUFBdkMsRUFBK0NtRixLQUFLLEdBQUduRixNQUF2RCxFQUErRG1GLEtBQUssRUFBcEUsRUFBd0U7QUFDdEUsUUFBSStDLEtBQUssR0FBRzVELFNBQVMsQ0FBQ2EsS0FBRCxDQUFyQjs7QUFDQSxRQUFJK0MsS0FBSyxDQUFDekMsU0FBTixDQUFnQlcsUUFBaEIsQ0FBeUJoRSxpQkFBekIsQ0FBSixFQUFpRDtBQUMvQzZHLE1BQUFBLGNBQWMsQ0FBQzlELEtBQUQsQ0FBZCxDQUFzQk0sU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DckQsc0JBQXBDO0FBQ0QsS0FGRCxNQUVPO0FBQ0w0RyxNQUFBQSxjQUFjLENBQUM5RCxLQUFELENBQWQsQ0FBc0JNLFNBQXRCLENBQWdDdUQsTUFBaEMsQ0FBdUMzRyxzQkFBdkM7QUFDRDtBQUNGO0FBQ0YsQ0FkRCxFQWdCQTs7O0FBQ0FDLFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0JRLEtBQXRCLEdBQThCLFlBQVc7QUFDdkMsTUFBSTJDLElBQUksR0FBRyxLQUFLM0YsVUFBTCxLQUNWLE1BRFUsR0FDRCxDQUFDLEtBQUt5QixjQURMLEdBQ3NCLEtBQUtBLGNBRHRDO0FBRUEsTUFBSU8sU0FBUyxHQUFHLEtBQUs3QixVQUFMLEdBQWtCd0YsSUFBbEM7O0FBQ0EsTUFBSSxDQUFDLEtBQUtwRixPQUFMLENBQWFDLElBQWxCLEVBQXdCO0FBQ3RCLFFBQUlvRixpQkFBaUIsR0FDbkIsS0FBS25FLGNBQUwsSUFBdUIsS0FBS25DLFVBQUwsQ0FBZ0I3QyxNQUFoQixHQUF5QixLQUFLK0UsbUJBQXJELENBREY7QUFFQVEsSUFBQUEsU0FBUyxHQUFHWixJQUFJLENBQUNDLEtBQUwsQ0FBV1csU0FBUyxHQUFHLEVBQXZCLElBQTZCLEVBQXpDOztBQUNBLFFBQUlBLFNBQVMsR0FBRyxDQUFDNEQsaUJBQWIsSUFBa0M1RCxTQUFTLEdBQUcsQ0FBbEQsRUFBcUQ7QUFDbkQ7QUFDRDs7QUFDRCxTQUFLekMsYUFBTCxDQUFtQjJDLFNBQW5CLENBQTZCdUQsTUFBN0IsQ0FBb0M3RyxrQkFBcEM7O0FBQ0EsU0FBS1ksYUFBTCxDQUFtQjBDLFNBQW5CLENBQTZCdUQsTUFBN0IsQ0FBb0M3RyxrQkFBcEM7O0FBQ0EsUUFBSW9ELFNBQVMsS0FBSyxDQUFDNEQsaUJBQW5CLEVBQXNDO0FBQ3BDLFdBQUtwRyxhQUFMLENBQW1CMEMsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDdkQsa0JBQWpDO0FBQ0QsS0FGRCxNQUVPLElBQUlvRCxTQUFTLEtBQUssQ0FBbEIsRUFBcUI7QUFDMUIsV0FBS3pDLGFBQUwsQ0FBbUIyQyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUN2RCxrQkFBakM7QUFDRDtBQUNGOztBQUNELE1BQUlpSCxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJbkUsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJakYsTUFBSjtBQUNBLE1BQUltRixLQUFKO0FBQ0EsTUFBSWtFLFFBQUo7O0FBQ0EsTUFBSSxLQUFLOUYsVUFBTCxLQUFvQixNQUF4QixFQUFnQztBQUM5QixTQUFLMEIsQ0FBQyxHQUFHLENBQUosRUFBT2pGLE1BQU0sR0FBRyxLQUFLeUQsWUFBTCxDQUFrQnpELE1BQXZDLEVBQStDaUYsQ0FBQyxHQUFHakYsTUFBbkQsRUFBMkRpRixDQUFDLEVBQTVELEVBQWdFO0FBQzlERSxNQUFBQSxLQUFLLEdBQUcsS0FBSzFCLFlBQUwsQ0FBa0J3QixDQUFsQixDQUFSO0FBQ0FvRSxNQUFBQSxRQUFRLEdBQUcsRUFBRWxFLEtBQWI7O0FBQ0EsVUFBSWtFLFFBQVEsR0FBRyxLQUFLeEcsVUFBTCxDQUFnQjdDLE1BQWhCLEdBQXlCLENBQXhDLEVBQTJDO0FBQ3pDcUosUUFBQUEsUUFBUSxJQUFJLEtBQUt4RyxVQUFMLENBQWdCN0MsTUFBNUI7QUFDRDs7QUFDRG9KLE1BQUFBLFdBQVcsQ0FBQzdKLElBQVosQ0FBaUI4SixRQUFqQjtBQUNEO0FBQ0YsR0FURCxNQVNPO0FBQ0wsU0FBS3BFLENBQUMsR0FBRyxDQUFKLEVBQU9qRixNQUFNLEdBQUcsS0FBS3lELFlBQUwsQ0FBa0J6RCxNQUF2QyxFQUErQ2lGLENBQUMsR0FBR2pGLE1BQW5ELEVBQTJEaUYsQ0FBQyxFQUE1RCxFQUFnRTtBQUM5REUsTUFBQUEsS0FBSyxHQUFHLEtBQUsxQixZQUFMLENBQWtCd0IsQ0FBbEIsQ0FBUjtBQUNBb0UsTUFBQUEsUUFBUSxHQUFHLEVBQUVsRSxLQUFiOztBQUNBLFVBQUlrRSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkEsUUFBQUEsUUFBUSxJQUFJLEtBQUt4RyxVQUFMLENBQWdCN0MsTUFBNUI7QUFDRDs7QUFDRG9KLE1BQUFBLFdBQVcsQ0FBQzdKLElBQVosQ0FBaUI4SixRQUFqQjtBQUNEO0FBQ0Y7O0FBQ0QsT0FBSzVGLFlBQUwsR0FBb0IyRixXQUFwQjs7QUFDQSxPQUFLekQsZUFBTDs7QUFDQSxPQUFLRSxpQkFBTDs7QUFDQSxPQUFLbkMsVUFBTCxHQUFrQjZCLFNBQWxCO0FBQ0EsT0FBSzNDLE9BQUwsQ0FBYTVCLEtBQWIsQ0FBbUJ1RSxTQUFuQixHQUErQixnQkFBZ0JBLFNBQWhCLEdBQTRCLElBQTNEOztBQUNBLE9BQUszQyxPQUFMLENBQWEwRyxhQUFiLENBQTJCLElBQUlwSSxXQUFKLENBQWdCLGtCQUFoQixFQUFvQztBQUFDRyxJQUFBQSxPQUFPLEVBQUU7QUFBVixHQUFwQyxDQUEzQjtBQUNELENBakRELEVBbURBOzs7QUFDQWlCLFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0J3RCxXQUF0QixHQUFvQyxZQUFXO0FBQzdDLE9BQUtoRyxVQUFMLEdBQWtCLE1BQWxCOztBQUNBLE9BQUtnRCxLQUFMO0FBQ0QsQ0FIRCxFQUtBOzs7QUFDQWpFLFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0J5RCxXQUF0QixHQUFvQyxZQUFXO0FBQzdDLE9BQUtqRyxVQUFMLEdBQWtCLE1BQWxCOztBQUNBLE9BQUtnRCxLQUFMO0FBQ0QsQ0FIRCxFQUtBOzs7QUFDQWpFLFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0JXLE9BQXRCLEdBQWdDLFVBQVN2QixLQUFULEVBQWdCO0FBQzlDLE1BQUk4RCxjQUFjLEdBQUcsS0FBS2pHLGVBQTFCO0FBQ0EsTUFBSXlHLFlBQVksR0FBRyxJQUFuQjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsTUFBSXpFLENBQUo7QUFDQSxNQUFJakYsTUFBSjs7QUFDQSxPQUFLaUYsQ0FBQyxHQUFHLENBQUosRUFBT2pGLE1BQU0sR0FBR2lKLGNBQWMsQ0FBQ2pKLE1BQXBDLEVBQTRDaUYsQ0FBQyxHQUFHakYsTUFBaEQsRUFBd0RpRixDQUFDLEVBQXpELEVBQTZEO0FBQzNELFFBQUkwRSxVQUFVLEdBQUdWLGNBQWMsQ0FBQ2hFLENBQUQsQ0FBL0I7O0FBQ0EsUUFBSTBFLFVBQVUsQ0FBQ2xFLFNBQVgsQ0FBcUJXLFFBQXJCLENBQThCL0Qsc0JBQTlCLENBQUosRUFBMkQ7QUFDekQsVUFBSW1FLE9BQU8sR0FBRyxDQUFDbUQsVUFBVSxDQUFDekUsT0FBWCxDQUFtQnNCLE9BQWxDOztBQUNBLFVBQUlrRCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQkQsUUFBQUEsWUFBWSxHQUFHakQsT0FBZjtBQUNBa0QsUUFBQUEsSUFBSSxHQUFHL0UsSUFBSSxDQUFDaUYsR0FBTCxDQUFTekUsS0FBSyxHQUFHc0UsWUFBakIsQ0FBUDtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUk5RSxJQUFJLENBQUNpRixHQUFMLENBQVN6RSxLQUFLLEdBQUdxQixPQUFqQixJQUE0QmtELElBQWhDLEVBQXNDO0FBQ3BDRCxVQUFBQSxZQUFZLEdBQUdqRCxPQUFmO0FBQ0FrRCxVQUFBQSxJQUFJLEdBQUcvRSxJQUFJLENBQUNpRixHQUFMLENBQVN6RSxLQUFLLEdBQUdzRSxZQUFqQixDQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0RDLEVBQUFBLElBQUksR0FBR3ZFLEtBQUssR0FBR3NFLFlBQWY7O0FBQ0EsTUFBSUMsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDZDtBQUNEOztBQUNELE9BQUtuRyxVQUFMLEdBQWtCbUcsSUFBSSxHQUFHLENBQVAsR0FBVyxNQUFYLEdBQW9CLE1BQXRDOztBQUNBLE9BQUt6RSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUlOLElBQUksQ0FBQ2lGLEdBQUwsQ0FBU0YsSUFBVCxDQUFqQixFQUFpQ3pFLENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsU0FBS3NCLEtBQUw7QUFDRDtBQUNGLENBN0JELEVBK0JBOzs7QUFDQWpFLFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0JELFNBQXRCLEdBQWtDLFVBQVMrRCxNQUFULEVBQWlCO0FBQ2pELE1BQUksQ0FBQyxLQUFLL0YsT0FBTCxDQUFhRSxRQUFsQixFQUE0QjtBQUMxQjtBQUNEOztBQUNELE1BQUk2RixNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNyQkMsSUFBQUEsYUFBYSxDQUFDLEtBQUtqRyxXQUFOLENBQWI7QUFDQSxTQUFLQSxXQUFMLEdBQW1CLElBQW5CO0FBQ0E7QUFDRDs7QUFDRCxNQUFJLEtBQUtBLFdBQUwsS0FBcUIsSUFBekIsRUFBK0I7QUFDN0IsU0FBS0EsV0FBTCxHQUFtQmtHLFdBQVcsQ0FDMUIsWUFBVztBQUNULFdBQUt4RyxVQUFMLEdBQWtCLE1BQWxCOztBQUNBLFdBQUtnRCxLQUFMO0FBQ0QsS0FIRCxDQUdFUyxJQUhGLENBR08sSUFIUCxDQUQwQixFQUsxQixLQUFLbEQsT0FBTCxDQUFhRyxRQUxhLENBQTlCO0FBT0Q7QUFDRixDQWxCRCxFQW9CQTs7O0FBQ0EzQixXQUFXLENBQUN5RCxTQUFaLENBQXNCb0IsUUFBdEIsR0FBaUMsWUFBVztBQUMxQztBQUNBLE1BQUk3QyxTQUFTLEdBQUcsS0FBS3pCLFVBQXJCO0FBQ0EsTUFBSTBCLFNBQVMsR0FBR0QsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxXQUE3QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxLQUFLOUIsU0FBTCxDQUFlNkIsV0FBbEM7QUFDQSxNQUFJRSxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksR0FBR0YsU0FBMUIsQ0FBekI7O0FBRUEsTUFBSUcsa0JBQWtCLEtBQUssS0FBS0ssbUJBQWhDLEVBQXFEO0FBQ25EO0FBQ0Q7O0FBRUQsT0FBS2UsU0FBTCxDQUFlLE1BQWY7O0FBRUEsT0FBS2xELE9BQUwsQ0FBYTZDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCeEQscUJBQTNCOztBQUNBLE9BQUtVLE9BQUwsQ0FBYTVCLEtBQWIsQ0FBbUJ1RSxTQUFuQixHQUErQixlQUEvQixDQWQwQyxDQWdCMUM7O0FBQ0EsT0FBS1YsVUFBTCxHQUFrQk4sU0FBbEI7QUFDQSxPQUFLTyxhQUFMLEdBQXFCTCxZQUFyQjtBQUNBLE9BQUtNLG1CQUFMLEdBQTJCTCxrQkFBM0I7QUFDQSxPQUFLaEIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLE9BQUtzQixjQUFMLEdBQXNCLE1BQU1OLGtCQUE1QjtBQUNBLE9BQUtsQixtQkFBTCxHQUEyQixLQUEzQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsRUFBcEIsQ0F2QjBDLENBeUIxQzs7QUFDQSxPQUFLLElBQUl3QixDQUFDLEdBQUcsQ0FBUixFQUFXakYsTUFBTSxHQUFHc0UsU0FBUyxDQUFDdEUsTUFBbkMsRUFBMkNpRixDQUFDLEdBQUdqRixNQUEvQyxFQUF1RGlGLENBQUMsRUFBeEQsRUFBNEQ7QUFDMUQsUUFBSWlELEtBQUssR0FBRzVELFNBQVMsQ0FBQ1csQ0FBRCxDQUFyQjtBQUNBLFFBQUkrRSxRQUFRLEdBQUcvRSxDQUFmO0FBQ0FpRCxJQUFBQSxLQUFLLENBQUNoRCxPQUFOLENBQWNDLEtBQWQsR0FBc0I2RSxRQUF0QjtBQUNBOUIsSUFBQUEsS0FBSyxDQUFDaEQsT0FBTixDQUFjRSxLQUFkLEdBQXNCNEUsUUFBdEI7QUFDQTlCLElBQUFBLEtBQUssQ0FBQ2hELE9BQU4sQ0FBY0csU0FBZCxHQUEwQixDQUExQjtBQUNBNkMsSUFBQUEsS0FBSyxDQUFDbEgsS0FBTixDQUFZdUUsU0FBWixHQUF3QixlQUF4Qjs7QUFDQSxRQUFJeUUsUUFBUSxHQUFHdEYsa0JBQWYsRUFBbUM7QUFDakMsV0FBS2pCLFlBQUwsQ0FBa0JsRSxJQUFsQixDQUF1QnlLLFFBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxPQUFLckUsZUFBTDs7QUFDQSxPQUFLRSxpQkFBTDs7QUFDQXRGLEVBQUFBLE1BQU0sQ0FBQ3VHLHFCQUFQLENBQ0ksWUFBVztBQUNULFNBQUtsRSxPQUFMLENBQWE2QyxTQUFiLENBQXVCdUQsTUFBdkIsQ0FBOEI5RyxxQkFBOUI7QUFDRCxHQUZELENBRUU4RSxJQUZGLENBRU8sSUFGUCxDQURKLEVBeEMwQyxDQThDMUM7O0FBQ0EsTUFBSSxDQUFDLEtBQUtsRCxPQUFMLENBQWFDLElBQWxCLEVBQXdCO0FBQ3RCLFFBQUksS0FBS2pCLGFBQVQsRUFBd0I7QUFDdEIsV0FBS0EsYUFBTCxDQUFtQjJDLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQ3ZELGtCQUFqQztBQUNEOztBQUNEO0FBQ0QsR0FwRHlDLENBc0QxQzs7O0FBQ0EsTUFBSW1ELEtBQUssR0FBR2hCLFNBQVMsQ0FBQ3RFLE1BQVYsR0FBbUIsQ0FBL0I7QUFDQSxNQUFJcUYsU0FBUyxHQUFHLENBQUNmLFNBQVMsQ0FBQ3RFLE1BQVgsR0FBb0IsR0FBcEM7QUFDQXNFLEVBQUFBLFNBQVMsQ0FBQ2dCLEtBQUQsQ0FBVCxDQUFpQkosT0FBakIsQ0FBeUJFLEtBQXpCLEdBQWlDLENBQUMsQ0FBbEM7QUFDQWQsRUFBQUEsU0FBUyxDQUFDZ0IsS0FBRCxDQUFULENBQWlCSixPQUFqQixDQUF5QkcsU0FBekIsR0FBcUMsQ0FBQ2YsU0FBUyxDQUFDdEUsTUFBWCxHQUFvQixHQUF6RDtBQUNBc0UsRUFBQUEsU0FBUyxDQUFDZ0IsS0FBRCxDQUFULENBQWlCdEUsS0FBakIsQ0FBdUJ1RSxTQUF2QixHQUFtQyxjQUFjcUQsTUFBZCxDQUFxQnZELFNBQXJCLEVBQWdDLElBQWhDLENBQW5DLENBM0QwQyxDQTREMUM7O0FBQ0EsT0FBS0csc0JBQUwsR0E3RDBDLENBOEQxQzs7O0FBQ0EsT0FBS00sU0FBTDtBQUNELENBaEVELEVBa0VBOzs7QUFDQXhELFdBQVcsQ0FBQ3lELFNBQVosQ0FBc0JrRSxJQUF0QixHQUE2QixZQUFXO0FBQ3RDLE9BQUtWLFdBQUw7QUFDRCxDQUZEOztBQUdBakgsV0FBVyxDQUFDeUQsU0FBWixDQUFzQm1FLElBQXRCLEdBQTZCLFlBQVc7QUFDdEMsT0FBS1YsV0FBTDtBQUNELENBRkQ7O0FBR0FsSCxXQUFXLENBQUN5RCxTQUFaLENBQXNCb0UsTUFBdEIsR0FBK0IsVUFBU2hGLEtBQVQsRUFBZ0I7QUFDN0MsT0FBS3VCLE9BQUwsQ0FBYXZCLEtBQWI7QUFDRCxDQUZEOztBQUdBN0MsV0FBVyxDQUFDeUQsU0FBWixDQUFzQjdCLE9BQXRCLEdBQWdDLFlBQVc7QUFDekMsT0FBS2lELFFBQUw7QUFDRCxDQUZEOztBQUtBMUgsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN4RCxRQUFNNEosTUFBTSxHQUFHLElBQUk5SCxXQUFKLENBQWdCLFNBQWhCLEVBQTJCO0FBQ3hDeUIsSUFBQUEsSUFBSSxFQUFFLElBRGtDO0FBRXhDQyxJQUFBQSxRQUFRLEVBQUUsSUFGOEI7QUFHeENDLElBQUFBLFFBQVEsRUFBRTtBQUg4QixHQUEzQixDQUFmO0FBS0QsQ0FORDs7Ozs7Ozs7Ozs7O0FDM2dCRjs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QyxvSEFBb0gsaURBQWlEO1dBQ3JLO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0M3QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQSw4Q0FBOEM7O1dBRTlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsbUNBQW1DO1dBQ3BFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVuREE7VUFDQTtVQUNBO1VBQ0Esc0lBQXNJLDhDQUE4QztVQUNwTCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW5zZXJ0LWNzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS1zY3NzL3Nhc3MvX25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3Mvc3R5bGUuc2Nzcz9mODBjIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpbnNlcnRlZCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICBpZiAoaW5zZXJ0ZWQuaW5kZXhPZihjc3MpID49IDApIHJldHVybjtcbiAgICBpbnNlcnRlZC5wdXNoKGNzcyk7XG4gICAgXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICBlbGVtLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIFxuICAgIGlmIChkb2N1bWVudC5oZWFkLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGVsZW0sIGRvY3VtZW50LmhlYWQuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cbn07XG4iLCJ2YXIgaW5zZXJ0ID0gcmVxdWlyZSgnaW5zZXJ0LWNzcycpO1xudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJyk7XG5cbmluc2VydChub3JtYWxpemUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qISBub3JtYWxpemUuY3NzIHYyLjEuMyB8IE1JVCBMaWNlbnNlIHwgZ2l0LmlvL25vcm1hbGl6ZSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAqL1xcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tYWluLFxcbm5hdixcXG5zZWN0aW9uLFxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxudmlkZW8ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXG4gKi9cXG5cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKiBIaWRlIHRoZSBgdGVtcGxhdGVgIGVsZW1lbnQgaW4gSUUsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXG4gKi9cXG5cXG5baGlkZGVuXSxcXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgQmFzZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXG4gKiAgICB1c2VyIHpvb20uXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxuICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBMaW5rc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGBvdXRsaW5lYCBpbmNvbnNpc3RlbmN5IGJldHdlZW4gQ2hyb21lIGFuZCBvdGhlciBicm93c2Vycy5cXG4gKi9cXG5cXG5hOmZvY3VzIHtcXG4gICAgb3V0bGluZTogdGhpbiBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgd2hlbiBmb2N1c2VkIGFuZCBhbHNvIG1vdXNlIGhvdmVyZWQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmE6YWN0aXZlLFxcbmE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFR5cG9ncmFwaHlcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LCBTYWZhcmkgNSwgYW5kIENocm9tZS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmRmbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcbiAqL1xcblxcbmhyIHtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5tYXJrIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgZm9udCBmYW1pbHkgc2V0IG9kZGx5IGluIFNhZmFyaSA1IGFuZCBDaHJvbWUuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxucHJlLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qKlxcbiAqIEltcHJvdmUgcmVhZGFiaWxpdHkgb2YgcHJlLWZvcm1hdHRlZCB0ZXh0IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi8qKlxcbiAqIFNldCBjb25zaXN0ZW50IHF1b3RlIHR5cGVzLlxcbiAqL1xcblxcbnEge1xcbiAgICBxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCIgXFxcIlxcXFwyMDFEXFxcIiBcXFwiXFxcXDIwMThcXFwiIFxcXCJcXFxcMjAxOVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS5cXG4gKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgZGlzcGxheWVkIG9kZGx5IGluIElFIDkuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZpZ3VyZXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpIDUuXFxuICovXFxuXFxuZmlndXJlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS5cXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm9yZGVyOiAwOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCBmb250IGZhbWlseSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IGZvbnQgc2l6ZSBub3QgYmVpbmcgaW5oZXJpdGVkIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSA1LCBhbmQgQ2hyb21lLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDIgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKipcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIENocm9tZSwgU2FmYXJpIDUrLCBhbmQgSUUgOCsuXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94IDQrIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAyICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIDUgYW5kIENocm9tZS5cXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSA1IGFuZCBDaHJvbWVcXG4gKiAgICAoaW5jbHVkZSBgLW1vemAgdG8gZnV0dXJlLXByb29mKS5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgNSBhbmQgQ2hyb21lXFxuICogb24gT1MgWC5cXG4gKi9cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS5cXG4gKiAyLiBJbXByb3ZlIHJlYWRhYmlsaXR5IGFuZCBhbGlnbm1lbnQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIDEgKi9cXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgLyogMiAqL1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgIFRhYmxlc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXG4iLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtc2Nzc1wiO1xyXG5pbXBvcnQgJy4vbWVudSc7XHJcbmltcG9ydCAnLi9zbGlkZXInO1xyXG4iLCJjb25zdCBtZW51X2xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpbmtcIik7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgd2luU2Nyb2xsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3Qgc2Nyb2xsZWQgPSAod2luU2Nyb2xsIC8gc2Nyb2xsSGVpZ2h0KSAqIDEwMDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1zbGlkZXIubWVudS1zbGlkZXJfYWN0aXZlXCIpLnN0eWxlLndpZHRoID0gc2Nyb2xsZWQgKyBcIiVcIjtcclxufSkiLCIvKipcclxuICogQ2hpZWZTbGlkZXIgYnkgSXRjaGllZiB2Mi4wLjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9pdGNoaWVmL3VpLWNvbXBvbmVudHMvdHJlZS9tYXN0ZXIvc2ltcGxlLWFkYXB0aXZlLXNsaWRlcilcclxuICogQ29weXJpZ2h0IDIwMjAgLSAyMDIxIEFsZXhhbmRlciBNYWx0c2V2XHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2l0Y2hpZWYvdWktY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuXHJcbiAoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJyApIHJldHVybiBmYWxzZTtcclxuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHtidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogbnVsbH07XHJcbiAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XHJcbiAgICAgIGUuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xyXG4gIH0pKCk7XHJcbiAgXHJcbiAgdmFyIFdSQVBQRVJfU0VMRUNUT1IgPSAnLnNsaWRlcl9fd3JhcHBlcic7XHJcbiAgdmFyIElURU1TX1NFTEVDVE9SID0gJy5zbGlkZXJfX2l0ZW1zJztcclxuICB2YXIgSVRFTV9TRUxFQ1RPUiA9ICcuc2xpZGVyX19pdGVtJztcclxuICB2YXIgQ09OVFJPTF9DTEFTUyA9ICdzbGlkZXJfX2NvbnRyb2wnO1xyXG4gIFxyXG4gIC8qIHZhciBJVEVNX0NMQVNTX0FDVElWRSA9ICdzbGlkZXJfX2l0ZW1fYWN0aXZlJztcclxuICB2YXIgQ09OVFJPTF9TRUxFQ1RPUiA9ICcuc2xpZGVyX19jb250cm9sJztcclxuICB2YXIgQ09OVFJPTF9DTEFTU19TSE9XID0gJ3NsaWRlcl9fY29udHJvbF9zaG93JztcclxuICAvLyDQuNC90LTQuNC60LDRgtC+0YDRi1xyXG4gIHZhciBJTkRJQ0FUT1JfV1JBUFBFUl9FTEVNRU5UID0gJ29sJztcclxuICB2YXIgSU5ESUNBVE9SX1dSQVBQRVJfQ0xBU1MgPSAnc2xpZGVyX19pbmRpY2F0b3JzJztcclxuICB2YXIgSU5ESUNBVE9SX0lURU1fRUxFTUVOVCA9ICdsaSc7XHJcbiAgdmFyIElORElDQVRPUl9JVEVNX0NMQVNTID0gJ3NsaWRlcl9faW5kaWNhdG9yJztcclxuICB2YXIgSU5ESUNBVE9SX0lURU1fQ0xBU1NfQUNUSVZFID0gJ3NsaWRlcl9faW5kaWNhdG9yX2FjdGl2ZSc7XHJcbiAgLy8g0L/QvtGA0L7QsyDQtNC70Y8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNGPINGB0LvQsNC50LTQsCAoNDAlKVxyXG4gIHZhciBQT1NfVEhSRVNIT0xEID0gNDA7XHJcbiAgLy8g0LrQu9Cw0YHRgSDQtNC70Y8g0L7RgtC60LvRjtGH0LXQvdC40Y8gdHJhbnNpdGlvblxyXG4gIHZhciBUUkFOU0lUSU9OX05PTkUgPSAndHJhbnNpdGlvbi1ub25lJzsqL1xyXG4gIFxyXG4gIHZhciBTRUxFQ1RPUl9QUkVWID0gJy5zbGlkZXJfX2NvbnRyb2xbZGF0YS1zbGlkZT1cInByZXZcIl0nO1xyXG4gIHZhciBTRUxFQ1RPUl9ORVhUID0gJy5zbGlkZXJfX2NvbnRyb2xbZGF0YS1zbGlkZT1cIm5leHRcIl0nO1xyXG4gIHZhciBTRUxFQ1RPUl9JTkRJQ0FUT1IgPSAnLnNsaWRlcl9faW5kaWNhdG9ycz5saSc7XHJcbiAgdmFyIFNMSURFUl9UUkFOU0lUSU9OX09GRiA9ICdzbGlkZXJfZGlzYWJsZS10cmFuc2l0aW9uJztcclxuICB2YXIgQ0xBU1NfQ09OVFJPTF9ISURFID0gJ3NsaWRlcl9fY29udHJvbF9oaWRlJztcclxuICB2YXIgQ0xBU1NfSVRFTV9BQ1RJVkUgPSAnc2xpZGVyX19pdGVtX2FjdGl2ZSc7XHJcbiAgdmFyIENMQVNTX0lORElDQVRPUl9BQ1RJVkUgPSAnYWN0aXZlJztcclxuICBcclxuICBmdW5jdGlvbiBDaGllZlNsaWRlcihzZWxlY3RvciwgY29uZmlnKSB7XHJcbiAgICAvLyDRjdC70LXQvNC10L3RgtGLINGB0LvQsNC50LTQtdGA0LBcclxuICAgIHZhciAkcm9vdCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgP1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG4gICAgdGhpcy5fJHJvb3QgPSAkcm9vdDtcclxuICAgIHRoaXMuXyR3cmFwcGVyID0gJHJvb3QucXVlcnlTZWxlY3RvcihXUkFQUEVSX1NFTEVDVE9SKTtcclxuICAgIHRoaXMuXyRpdGVtcyA9ICRyb290LnF1ZXJ5U2VsZWN0b3IoSVRFTVNfU0VMRUNUT1IpO1xyXG4gICAgdGhpcy5fJGl0ZW1MaXN0ID0gJHJvb3QucXVlcnlTZWxlY3RvckFsbChJVEVNX1NFTEVDVE9SKTtcclxuICAgIHRoaXMuXyRjb250cm9sUHJldiA9ICRyb290LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfUFJFVik7XHJcbiAgICB0aGlzLl8kY29udHJvbE5leHQgPSAkcm9vdC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX05FWFQpO1xyXG4gICAgdGhpcy5fJGluZGljYXRvckxpc3QgPSAkcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0lORElDQVRPUik7XHJcbiAgICAvLyDRjdC60YHRgtGA0LXQvNCw0LvRjNC90YvQtSDQt9C90LDRh9C10L3QuNGPINGB0LvQsNC50LTQvtCyXHJcbiAgICB0aGlzLl9taW5PcmRlciA9IDA7XHJcbiAgICB0aGlzLl9tYXhPcmRlciA9IDA7XHJcbiAgICB0aGlzLl8kaXRlbVdpdGhNaW5PcmRlciA9IG51bGw7XHJcbiAgICB0aGlzLl8kaXRlbVdpdGhNYXhPcmRlciA9IG51bGw7XHJcbiAgICB0aGlzLl9taW5UcmFuc2xhdGUgPSAwO1xyXG4gICAgdGhpcy5fbWF4VHJhbnNsYXRlID0gMDtcclxuICAgIC8vINC90LDQv9GA0LDQstC70LXQvdC40LUg0YHQvNC10L3RiyDRgdC70LDQudC00L7QsiAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4pXHJcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICAvLyBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBvc2l0aW9uIG9mIGl0ZW0gbmVlZHMgdG8gYmUgZGV0ZXJtaW5lZFxyXG4gICAgdGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnID0gZmFsc2U7XHJcbiAgICB0aGlzLl9hY3RpdmVJdGVtcyA9IFtdO1xyXG4gICAgLy8g0YLQtdC60YPRidC10LUg0LfQvdCw0YfQtdC90LjQtSDRgtGA0LDQvdGB0YTQvtGA0LzQsNGG0LjQuFxyXG4gICAgdGhpcy5fdHJhbnNmb3JtID0gMDtcclxuICAgIC8vIHN3aXBlINC/0LDRgNCw0LzQtdGC0YDRi1xyXG4gICAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX3N3aXBlU3RhcnRQb3MgPSAwO1xyXG4gICAgLy8gc2xpZGVyIHByb3BlcnRpZXNcclxuICAgIHRoaXMuX3RyYW5zZm9ybSA9IDA7IC8vINGC0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0YLRgNCw0L3RgdGE0L7RgNC80LDRhtC40LhcclxuICAgIHRoaXMuX2ludGVydmFsSWQgPSBudWxsO1xyXG4gICAgLy8gY29uZmlndXJhdGlvbiBvZiB0aGUgc2xpZGVyXHJcbiAgICB0aGlzLl9jb25maWcgPSB7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgIHJlZnJlc2g6IHRydWUsXHJcbiAgICAgIHN3aXBlOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSBjb25maWdba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIHNvbWUgY29uc3RhbnRzXHJcbiAgICB2YXIgJGl0ZW1MaXN0ID0gdGhpcy5fJGl0ZW1MaXN0O1xyXG4gICAgdmFyIHdpZHRoSXRlbSA9ICRpdGVtTGlzdFswXS5vZmZzZXRXaWR0aDtcclxuICAgIHZhciB3aWR0aFdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlci5vZmZzZXRXaWR0aDtcclxuICAgIHZhciBpdGVtc0luVmlzaWJsZUFyZWEgPSBNYXRoLnJvdW5kKHdpZHRoV3JhcHBlciAvIHdpZHRoSXRlbSk7XHJcbiAgICAvLyBpbml0aWFsIHNldHRpbmcgcHJvcGVydGllc1xyXG4gICAgdGhpcy5fd2lkdGhJdGVtID0gd2lkdGhJdGVtO1xyXG4gICAgdGhpcy5fd2lkdGhXcmFwcGVyID0gd2lkdGhXcmFwcGVyO1xyXG4gICAgdGhpcy5faXRlbXNJblZpc2libGVBcmVhID0gaXRlbXNJblZpc2libGVBcmVhO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3RlcCA9IDEwMCAvIGl0ZW1zSW5WaXNpYmxlQXJlYTtcclxuICAgIC8vIGluaXRpYWwgc2V0dGluZyBvcmRlciBhbmQgdHJhbnNsYXRlIGl0ZW1zXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICRpdGVtTGlzdFtpXS5kYXRhc2V0LmluZGV4ID0gaTtcclxuICAgICAgJGl0ZW1MaXN0W2ldLmRhdGFzZXQub3JkZXIgPSBpO1xyXG4gICAgICAkaXRlbUxpc3RbaV0uZGF0YXNldC50cmFuc2xhdGUgPSAwO1xyXG4gICAgICBpZiAoaSA8IGl0ZW1zSW5WaXNpYmxlQXJlYSkge1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUl0ZW1zLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9jb25maWcubG9vcCkge1xyXG4gICAgICAvLyDQv9C10YDQtdC80LXRidCw0LXQvCDQv9C+0YHQu9C10LTQvdC40Lkg0YHQu9Cw0LnQtCDQv9C10YDQtdC0INC/0LXRgNCy0YvQvFxyXG4gICAgICB2YXIgY291bnQgPSAkaXRlbUxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgdmFyIHRyYW5zbGF0ZSA9IC0kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICAgICAkaXRlbUxpc3RbY291bnRdLmRhdGFzZXQub3JkZXIgPSAtMTtcclxuICAgICAgJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0LnRyYW5zbGF0ZSA9IC0kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICAgICAkaXRlbUxpc3RbY291bnRdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2xhdGUgKyAnJSknO1xyXG4gICAgICB0aGlzLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLl8kY29udHJvbFByZXYpIHtcclxuICAgICAgICB0aGlzLl8kY29udHJvbFByZXYuY2xhc3NMaXN0LmFkZChDTEFTU19DT05UUk9MX0hJREUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZXRBY3RpdmVDbGFzcygpO1xyXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9ycygpO1xyXG4gICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICB9XHJcbiAgXHJcbiAgLy8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINGB0LvQsNC50LTQtdGA0LBcclxuICBDaGllZlNsaWRlci5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkcm9vdCA9IHRoaXMuXyRyb290O1xyXG4gICAgdmFyICRpdGVtcyA9IHRoaXMuXyRpdGVtcztcclxuICAgIHZhciBjb25maWcgPSB0aGlzLl9jb25maWc7XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcclxuICAgICAgdmFyICR0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICAgICAgaWYgKCR0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlRST0xfQ0xBU1MpKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICR0YXJnZXQuZGF0YXNldC5zbGlkZTtcclxuICAgICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHRhcmdldC5kYXRhc2V0LnNsaWRlVG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCgkdGFyZ2V0LmRhdGFzZXQuc2xpZGVUbyk7XHJcbiAgICAgICAgdGhpcy5fbW92ZVRvKGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoZSkge1xyXG4gICAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGUpIHtcclxuICAgICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uVHJhbnNpdGlvblN0YXJ0KCkge1xyXG4gICAgICBpZiAodGhpcy5fYmFsYW5jaW5nSXRlbXNGbGFnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYmFsYW5jaW5nSXRlbXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XHJcbiAgICAgIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmVmcmVzaC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uU3dpcGVTdGFydChlKSB7XHJcbiAgICAgIHRoaXMuX2F1dG9wbGF5KCdzdG9wJyk7XHJcbiAgICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLnRvdWNoZXNbMF0gOiBlO1xyXG4gICAgICB0aGlzLl9zd2lwZVN0YXJ0UG9zID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblN3aXBlRW5kKGUpIHtcclxuICAgICAgaWYgKCF0aGlzLl9oYXNTd2lwZVN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBldmVudCA9IGUudHlwZS5zZWFyY2goJ3RvdWNoJykgPT09IDAgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZTtcclxuICAgICAgdmFyIGRpZmZQb3MgPSB0aGlzLl9zd2lwZVN0YXJ0UG9zIC0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgaWYgKGRpZmZQb3MgPiA1MCkge1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICAgICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlmZlBvcyA8IC01MCkge1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICdwcmV2JztcclxuICAgICAgICB0aGlzLl9tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faGFzU3dpcGVTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcclxuICAgICAgICB0aGlzLl9hdXRvcGxheSgnc3RvcCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb29wKSB7XHJcbiAgICAgICAgICB0aGlzLl9hdXRvcGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgJHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUuYmluZCh0aGlzKSk7XHJcbiAgICAvLyBvbiByZXNpemVcclxuICAgIGlmIChjb25maWcucmVmcmVzaCkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvLyBvbiB0cmFuc2l0aW9uc3RhcnQgYW5kIHRyYW5zaXRpb25lbmRcclxuICAgIGlmIChjb25maWcubG9vcCkge1xyXG4gICAgICAkaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbi1zdGFydCcsIG9uVHJhbnNpdGlvblN0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgICAkaXRlbXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIG9uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIC8vIG9uIHRvdWNoc3RhcnQgYW5kIHRvdWNoZW5kXHJcbiAgICBpZiAoY29uZmlnLnN3aXBlKSB7XHJcbiAgICAgICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblN3aXBlU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uU3dpcGVTdGFydC5iaW5kKHRoaXMpKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblN3aXBlRW5kLmJpbmQodGhpcykpO1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Td2lwZUVuZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgICRyb290LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xyXG4gICAgLy8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQsNC60YLQuNCy0L3QvtGB0YLQuCDQstC60LvQsNC00LrQuFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpKTtcclxuICB9O1xyXG4gIFxyXG4gIC8vIHVwZGF0ZSB2YWx1ZXMgb2YgZXh0cmVtZSBwcm9wZXJ0aWVzXHJcbiAgQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9fcmVmcmVzaEV4dHJlbWVWYWx1ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgICB0aGlzLl9taW5PcmRlciA9ICskaXRlbUxpc3RbMF0uZGF0YXNldC5vcmRlcjtcclxuICAgIHRoaXMuX21heE9yZGVyID0gdGhpcy5fbWluT3JkZXI7XHJcbiAgICB0aGlzLl8kaXRlbUJ5TWluT3JkZXIgPSAkaXRlbUxpc3RbMF07XHJcbiAgICB0aGlzLl8kaXRlbUJ5TWF4T3JkZXIgPSAkaXRlbUxpc3RbMF07XHJcbiAgICB0aGlzLl9taW5UcmFuc2xhdGUgPSArJGl0ZW1MaXN0WzBdLmRhdGFzZXQudHJhbnNsYXRlO1xyXG4gICAgdGhpcy5fbWF4VHJhbnNsYXRlID0gdGhpcy5fbWluVHJhbnNsYXRlO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9ICRpdGVtTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaV07XHJcbiAgICAgIHZhciBvcmRlciA9ICskaXRlbS5kYXRhc2V0Lm9yZGVyO1xyXG4gICAgICBpZiAob3JkZXIgPCB0aGlzLl9taW5PcmRlcikge1xyXG4gICAgICAgIHRoaXMuX21pbk9yZGVyID0gb3JkZXI7XHJcbiAgICAgICAgdGhpcy5fJGl0ZW1CeU1pbk9yZGVyID0gJGl0ZW07XHJcbiAgICAgICAgdGhpcy5fbWluVHJhbnNsYXRlID0gKyRpdGVtLmRhdGFzZXQudHJhbnNsYXRlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9yZGVyID4gdGhpcy5fbWF4T3JkZXIpIHtcclxuICAgICAgICB0aGlzLl9tYXhPcmRlciA9IG9yZGVyO1xyXG4gICAgICAgIHRoaXMuXyRpdGVtQnlNYXhPcmRlciA9ICRpdGVtO1xyXG4gICAgICAgIHRoaXMuX21pblRyYW5zbGF0ZSA9ICskaXRlbS5kYXRhc2V0LnRyYW5zbGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgLy8gdXBkYXRlIHBvc2l0aW9uIG9mIGl0ZW1cclxuICBDaGllZlNsaWRlci5wcm90b3R5cGUuX2JhbGFuY2luZ0l0ZW1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgJHdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlcjtcclxuICAgIHZhciAkd3JhcHBlckNsaWVudFJlY3QgPSAkd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciB3aWR0aEhhbGZJdGVtID0gJHdyYXBwZXJDbGllbnRSZWN0LndpZHRoIC8gdGhpcy5faXRlbXNJblZpc2libGVBcmVhIC8gMjtcclxuICAgIHZhciBjb3VudCA9IHRoaXMuXyRpdGVtTGlzdC5sZW5ndGg7XHJcbiAgICB2YXIgdHJhbnNsYXRlO1xyXG4gICAgdmFyIGNsaWVudFJlY3Q7XHJcbiAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgdmFyIHdyYXBwZXJMZWZ0ID0gJHdyYXBwZXJDbGllbnRSZWN0LmxlZnQ7XHJcbiAgICAgIHZhciAkbWluID0gdGhpcy5fJGl0ZW1CeU1pbk9yZGVyO1xyXG4gICAgICB0cmFuc2xhdGUgPSB0aGlzLl9taW5UcmFuc2xhdGU7XHJcbiAgICAgIGNsaWVudFJlY3QgPSAkbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpZiAoY2xpZW50UmVjdC5yaWdodCA8IHdyYXBwZXJMZWZ0IC0gd2lkdGhIYWxmSXRlbSkge1xyXG4gICAgICAgICRtaW4uZGF0YXNldC5vcmRlciA9IHRoaXMuX21pbk9yZGVyICsgY291bnQ7XHJcbiAgICAgICAgdHJhbnNsYXRlICs9IGNvdW50ICogMTAwO1xyXG4gICAgICAgICRtaW4uZGF0YXNldC50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgJG1pbi5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICAgIC8vIHVwZGF0ZSB2YWx1ZXMgb2YgZXh0cmVtZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5fX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB3cmFwcGVyUmlnaHQgPSAkd3JhcHBlckNsaWVudFJlY3QucmlnaHQ7XHJcbiAgICAgIHZhciAkbWF4ID0gdGhpcy5fJGl0ZW1CeU1heE9yZGVyO1xyXG4gICAgICB0cmFuc2xhdGUgPSB0aGlzLl9tYXhUcmFuc2xhdGU7XHJcbiAgICAgIGNsaWVudFJlY3QgPSAkbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBpZiAoY2xpZW50UmVjdC5sZWZ0ID4gd3JhcHBlclJpZ2h0ICsgd2lkdGhIYWxmSXRlbSkge1xyXG4gICAgICAgICRtYXguZGF0YXNldC5vcmRlciA9IHRoaXMuX21heE9yZGVyIC0gY291bnQ7XHJcbiAgICAgICAgdHJhbnNsYXRlIC09IGNvdW50ICogMTAwO1xyXG4gICAgICAgICRtYXguZGF0YXNldC50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgJG1heC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnLmNvbmNhdCh0cmFuc2xhdGUsICclKScpO1xyXG4gICAgICAgIC8vIHVwZGF0ZSB2YWx1ZXMgb2YgZXh0cmVtZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5fX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVwZGF0aW5nLi4uXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYmFsYW5jaW5nSXRlbXMuYmluZCh0aGlzKSk7XHJcbiAgfTtcclxuICBcclxuICAvLyBfc2V0QWN0aXZlQ2xhc3NcclxuICBDaGllZlNsaWRlci5wcm90b3R5cGUuX3NldEFjdGl2ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9hY3RpdmVJdGVtcztcclxuICAgIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gJGl0ZW1MaXN0Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciAkaXRlbSA9ICRpdGVtTGlzdFtpXTtcclxuICAgICAgdmFyIGluZGV4ID0gKyRpdGVtLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGlmIChhY3RpdmVJdGVtcy5pbmRleE9mKGluZGV4KSA+IC0xKSB7XHJcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19JVEVNX0FDVElWRSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19JVEVNX0FDVElWRSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIC8vIF91cGRhdGVJbmRpY2F0b3JzXHJcbiAgQ2hpZWZTbGlkZXIucHJvdG90eXBlLl91cGRhdGVJbmRpY2F0b3JzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgJGluZGljYXRvckxpc3QgPSB0aGlzLl8kaW5kaWNhdG9yTGlzdDtcclxuICAgIHZhciAkaXRlbUxpc3QgPSB0aGlzLl8kaXRlbUxpc3Q7XHJcbiAgICBpZiAoISRpbmRpY2F0b3JMaXN0Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9ICRpdGVtTGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIHZhciAkaXRlbSA9ICRpdGVtTGlzdFtpbmRleF07XHJcbiAgICAgIGlmICgkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfSVRFTV9BQ1RJVkUpKSB7XHJcbiAgICAgICAgJGluZGljYXRvckxpc3RbaW5kZXhdLmNsYXNzTGlzdC5hZGQoQ0xBU1NfSU5ESUNBVE9SX0FDVElWRSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJGluZGljYXRvckxpc3RbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfSU5ESUNBVE9SX0FDVElWRSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIC8vIG1vdmUgc2xpZGVzXHJcbiAgQ2hpZWZTbGlkZXIucHJvdG90eXBlLl9tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3RlcCA9IHRoaXMuX2RpcmVjdGlvbiA9PT1cclxuICAgICAnbmV4dCcgPyAtdGhpcy5fdHJhbnNmb3JtU3RlcCA6IHRoaXMuX3RyYW5zZm9ybVN0ZXA7XHJcbiAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5fdHJhbnNmb3JtICsgc3RlcDtcclxuICAgIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgdmFyIGVuZFRyYW5zZm9ybVZhbHVlID1cclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm1TdGVwICogKHRoaXMuXyRpdGVtTGlzdC5sZW5ndGggLSB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEpO1xyXG4gICAgICB0cmFuc2Zvcm0gPSBNYXRoLnJvdW5kKHRyYW5zZm9ybSAqIDEwKSAvIDEwO1xyXG4gICAgICBpZiAodHJhbnNmb3JtIDwgLWVuZFRyYW5zZm9ybVZhbHVlIHx8IHRyYW5zZm9ybSA+IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fJGNvbnRyb2xQcmV2LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfQ09OVFJPTF9ISURFKTtcclxuICAgICAgdGhpcy5fJGNvbnRyb2xOZXh0LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfQ09OVFJPTF9ISURFKTtcclxuICAgICAgaWYgKHRyYW5zZm9ybSA9PT0gLWVuZFRyYW5zZm9ybVZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fJGNvbnRyb2xOZXh0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfQ09OVFJPTF9ISURFKTtcclxuICAgICAgfSBlbHNlIGlmICh0cmFuc2Zvcm0gPT09IDApIHtcclxuICAgICAgICB0aGlzLl8kY29udHJvbFByZXYuY2xhc3NMaXN0LmFkZChDTEFTU19DT05UUk9MX0hJREUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgYWN0aXZlSW5kZXggPSBbXTtcclxuICAgIHZhciBpID0gMDtcclxuICAgIHZhciBsZW5ndGg7XHJcbiAgICB2YXIgaW5kZXg7XHJcbiAgICB2YXIgbmV3SW5kZXg7XHJcbiAgICBpZiAodGhpcy5fZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gdGhpcy5fYWN0aXZlSXRlbXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMuX2FjdGl2ZUl0ZW1zW2ldO1xyXG4gICAgICAgIG5ld0luZGV4ID0gKytpbmRleDtcclxuICAgICAgICBpZiAobmV3SW5kZXggPiB0aGlzLl8kaXRlbUxpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgbmV3SW5kZXggLT0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aXZlSW5kZXgucHVzaChuZXdJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHRoaXMuX2FjdGl2ZUl0ZW1zLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW5kZXggPSB0aGlzLl9hY3RpdmVJdGVtc1tpXTtcclxuICAgICAgICBuZXdJbmRleCA9IC0taW5kZXg7XHJcbiAgICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xyXG4gICAgICAgICAgbmV3SW5kZXggKz0gdGhpcy5fJGl0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aXZlSW5kZXgucHVzaChuZXdJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX2FjdGl2ZUl0ZW1zID0gYWN0aXZlSW5kZXg7XHJcbiAgICB0aGlzLl9zZXRBY3RpdmVDbGFzcygpO1xyXG4gICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9ycygpO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgdGhpcy5fJGl0ZW1zLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2Zvcm0gKyAnJSknO1xyXG4gICAgdGhpcy5fJGl0ZW1zLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0cmFuc2l0aW9uLXN0YXJ0Jywge2J1YmJsZXM6IHRydWV9KSk7XHJcbiAgfTtcclxuICBcclxuICAvLyBfbW92ZVRvTmV4dFxyXG4gIENoaWVmU2xpZGVyLnByb3RvdHlwZS5fbW92ZVRvTmV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fZGlyZWN0aW9uID0gJ25leHQnO1xyXG4gICAgdGhpcy5fbW92ZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgLy8gX21vdmVUb1ByZXZcclxuICBDaGllZlNsaWRlci5wcm90b3R5cGUuX21vdmVUb1ByZXYgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX2RpcmVjdGlvbiA9ICdwcmV2JztcclxuICAgIHRoaXMuX21vdmUoKTtcclxuICB9O1xyXG4gIFxyXG4gIC8vIF9tb3ZlVG9cclxuICBDaGllZlNsaWRlci5wcm90b3R5cGUuX21vdmVUbyA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICB2YXIgJGluZGljYXRvckxpc3QgPSB0aGlzLl8kaW5kaWNhdG9yTGlzdDtcclxuICAgIHZhciBuZWFyZXN0SW5kZXggPSBudWxsO1xyXG4gICAgdmFyIGRpZmYgPSBudWxsO1xyXG4gICAgdmFyIGk7XHJcbiAgICB2YXIgbGVuZ3RoO1xyXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gJGluZGljYXRvckxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyICRpbmRpY2F0b3IgPSAkaW5kaWNhdG9yTGlzdFtpXTtcclxuICAgICAgaWYgKCRpbmRpY2F0b3IuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0lORElDQVRPUl9BQ1RJVkUpKSB7XHJcbiAgICAgICAgdmFyIHNsaWRlVG8gPSArJGluZGljYXRvci5kYXRhc2V0LnNsaWRlVG87XHJcbiAgICAgICAgaWYgKGRpZmYgPT09IG51bGwpIHtcclxuICAgICAgICAgIG5lYXJlc3RJbmRleCA9IHNsaWRlVG87XHJcbiAgICAgICAgICBkaWZmID0gTWF0aC5hYnMoaW5kZXggLSBuZWFyZXN0SW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoaW5kZXggLSBzbGlkZVRvKSA8IGRpZmYpIHtcclxuICAgICAgICAgICAgbmVhcmVzdEluZGV4ID0gc2xpZGVUbztcclxuICAgICAgICAgICAgZGlmZiA9IE1hdGguYWJzKGluZGV4IC0gbmVhcmVzdEluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpZmYgPSBpbmRleCAtIG5lYXJlc3RJbmRleDtcclxuICAgIGlmIChkaWZmID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpZmYgPiAwID8gJ25leHQnIDogJ3ByZXYnO1xyXG4gICAgZm9yIChpID0gMTsgaSA8PSBNYXRoLmFicyhkaWZmKTsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX21vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIC8vIF9hdXRvcGxheVxyXG4gIENoaWVmU2xpZGVyLnByb3RvdHlwZS5fYXV0b3BsYXkgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgIGlmICghdGhpcy5fY29uZmlnLmF1dG9wbGF5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24gPT09ICdzdG9wJykge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xyXG4gICAgICB0aGlzLl9pbnRlcnZhbElkID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2ludGVydmFsSWQgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5faW50ZXJ2YWxJZCA9IHNldEludGVydmFsKFxyXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9ICduZXh0JztcclxuICAgICAgICAgICAgdGhpcy5fbW92ZSgpO1xyXG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICAvLyBfcmVmcmVzaFxyXG4gIENoaWVmU2xpZGVyLnByb3RvdHlwZS5fcmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY3JlYXRlIHNvbWUgY29uc3RhbnRzXHJcbiAgICB2YXIgJGl0ZW1MaXN0ID0gdGhpcy5fJGl0ZW1MaXN0O1xyXG4gICAgdmFyIHdpZHRoSXRlbSA9ICRpdGVtTGlzdFswXS5vZmZzZXRXaWR0aDtcclxuICAgIHZhciB3aWR0aFdyYXBwZXIgPSB0aGlzLl8kd3JhcHBlci5vZmZzZXRXaWR0aDtcclxuICAgIHZhciBpdGVtc0luVmlzaWJsZUFyZWEgPSBNYXRoLnJvdW5kKHdpZHRoV3JhcHBlciAvIHdpZHRoSXRlbSk7XHJcbiAgXHJcbiAgICBpZiAoaXRlbXNJblZpc2libGVBcmVhID09PSB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdGhpcy5fYXV0b3BsYXkoJ3N0b3AnKTtcclxuICBcclxuICAgIHRoaXMuXyRpdGVtcy5jbGFzc0xpc3QuYWRkKFNMSURFUl9UUkFOU0lUSU9OX09GRik7XHJcbiAgICB0aGlzLl8kaXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gIFxyXG4gICAgLy8gc2V0dGluZyBwcm9wZXJ0aWVzIGFmdGVyIHJlc2V0XHJcbiAgICB0aGlzLl93aWR0aEl0ZW0gPSB3aWR0aEl0ZW07XHJcbiAgICB0aGlzLl93aWR0aFdyYXBwZXIgPSB3aWR0aFdyYXBwZXI7XHJcbiAgICB0aGlzLl9pdGVtc0luVmlzaWJsZUFyZWEgPSBpdGVtc0luVmlzaWJsZUFyZWE7XHJcbiAgICB0aGlzLl90cmFuc2Zvcm0gPSAwO1xyXG4gICAgdGhpcy5fdHJhbnNmb3JtU3RlcCA9IDEwMCAvIGl0ZW1zSW5WaXNpYmxlQXJlYTtcclxuICAgIHRoaXMuX2JhbGFuY2luZ0l0ZW1zRmxhZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fYWN0aXZlSXRlbXMgPSBbXTtcclxuICBcclxuICAgIC8vIHNldHRpbmcgb3JkZXIgYW5kIHRyYW5zbGF0ZSBpdGVtcyBhZnRlciByZXNldFxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9ICRpdGVtTGlzdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgJGl0ZW0gPSAkaXRlbUxpc3RbaV07XHJcbiAgICAgIHZhciBwb3NpdGlvbiA9IGk7XHJcbiAgICAgICRpdGVtLmRhdGFzZXQuaW5kZXggPSBwb3NpdGlvbjtcclxuICAgICAgJGl0ZW0uZGF0YXNldC5vcmRlciA9IHBvc2l0aW9uO1xyXG4gICAgICAkaXRlbS5kYXRhc2V0LnRyYW5zbGF0ZSA9IDA7XHJcbiAgICAgICRpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuICAgICAgaWYgKHBvc2l0aW9uIDwgaXRlbXNJblZpc2libGVBcmVhKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlSXRlbXMucHVzaChwb3NpdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHRoaXMuX3NldEFjdGl2ZUNsYXNzKCk7XHJcbiAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3JzKCk7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5fJGl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoU0xJREVSX1RSQU5TSVRJT05fT0ZGKTtcclxuICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgXHJcbiAgICAvLyBoaWRlIHByZXYgYXJyb3cgZm9yIG5vbi1pbmZpbml0ZSBzbGlkZXJcclxuICAgIGlmICghdGhpcy5fY29uZmlnLmxvb3ApIHtcclxuICAgICAgaWYgKHRoaXMuXyRjb250cm9sUHJldikge1xyXG4gICAgICAgIHRoaXMuXyRjb250cm9sUHJldi5jbGFzc0xpc3QuYWRkKENMQVNTX0NPTlRST0xfSElERSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gdHJhbnNsYXRlIGxhc3QgaXRlbSBiZWZvcmUgZmlyc3RcclxuICAgIHZhciBjb3VudCA9ICRpdGVtTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgdmFyIHRyYW5zbGF0ZSA9IC0kaXRlbUxpc3QubGVuZ3RoICogMTAwO1xyXG4gICAgJGl0ZW1MaXN0W2NvdW50XS5kYXRhc2V0Lm9yZGVyID0gLTE7XHJcbiAgICAkaXRlbUxpc3RbY291bnRdLmRhdGFzZXQudHJhbnNsYXRlID0gLSRpdGVtTGlzdC5sZW5ndGggKiAxMDA7XHJcbiAgICAkaXRlbUxpc3RbY291bnRdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcuY29uY2F0KHRyYW5zbGF0ZSwgJyUpJyk7XHJcbiAgICAvLyB1cGRhdGUgdmFsdWVzIG9mIGV4dHJlbWUgcHJvcGVydGllc1xyXG4gICAgdGhpcy5fX3JlZnJlc2hFeHRyZW1lVmFsdWVzKCk7XHJcbiAgICAvLyBjYWxsaW5nIF9hdXRvcGxheVxyXG4gICAgdGhpcy5fYXV0b3BsYXkoKTtcclxuICB9O1xyXG4gIFxyXG4gIC8vIHB1YmxpY1xyXG4gIENoaWVmU2xpZGVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9tb3ZlVG9OZXh0KCk7XHJcbiAgfTtcclxuICBDaGllZlNsaWRlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fbW92ZVRvUHJldigpO1xyXG4gIH07XHJcbiAgQ2hpZWZTbGlkZXIucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICB0aGlzLl9tb3ZlVG8oaW5kZXgpO1xyXG4gIH07XHJcbiAgQ2hpZWZTbGlkZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX3JlZnJlc2goKTtcclxuICB9O1xyXG5cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNsaWRlciA9IG5ldyBDaGllZlNsaWRlcignLnNsaWRlcicsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgfSk7XHJcbiAgfSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ub3JtYWxpemUtc2Nzc19zYXNzX19ub3JtYWxpemVfc2Nzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IGZ1bmN0aW9uKGNodW5rSWQpIHsgcmV0dXJuIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMDsgfTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSBmdW5jdGlvbihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbMl07XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZShmdW5jdGlvbihpZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMDsgfSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25vcm1hbGl6ZS1zY3NzX3Nhc3NfX25vcm1hbGl6ZV9zY3NzXCJdLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpOyB9KVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJpbnNlcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjc3MiLCJpbmRleE9mIiwicHVzaCIsImVsZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImhlYWQiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0IiwicmVxdWlyZSIsIm5vcm1hbGl6ZSIsIm1lbnVfbGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpblNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbGVkIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwid2lkdGgiLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJlIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJXUkFQUEVSX1NFTEVDVE9SIiwiSVRFTVNfU0VMRUNUT1IiLCJJVEVNX1NFTEVDVE9SIiwiQ09OVFJPTF9DTEFTUyIsIlNFTEVDVE9SX1BSRVYiLCJTRUxFQ1RPUl9ORVhUIiwiU0VMRUNUT1JfSU5ESUNBVE9SIiwiU0xJREVSX1RSQU5TSVRJT05fT0ZGIiwiQ0xBU1NfQ09OVFJPTF9ISURFIiwiQ0xBU1NfSVRFTV9BQ1RJVkUiLCJDTEFTU19JTkRJQ0FUT1JfQUNUSVZFIiwiQ2hpZWZTbGlkZXIiLCJzZWxlY3RvciIsImNvbmZpZyIsIiRyb290IiwiXyRyb290IiwiXyR3cmFwcGVyIiwiXyRpdGVtcyIsIl8kaXRlbUxpc3QiLCJfJGNvbnRyb2xQcmV2IiwiXyRjb250cm9sTmV4dCIsIl8kaW5kaWNhdG9yTGlzdCIsIl9taW5PcmRlciIsIl9tYXhPcmRlciIsIl8kaXRlbVdpdGhNaW5PcmRlciIsIl8kaXRlbVdpdGhNYXhPcmRlciIsIl9taW5UcmFuc2xhdGUiLCJfbWF4VHJhbnNsYXRlIiwiX2RpcmVjdGlvbiIsIl9iYWxhbmNpbmdJdGVtc0ZsYWciLCJfYWN0aXZlSXRlbXMiLCJfdHJhbnNmb3JtIiwiX2hhc1N3aXBlU3RhdGUiLCJfX3N3aXBlU3RhcnRQb3MiLCJfaW50ZXJ2YWxJZCIsIl9jb25maWciLCJsb29wIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsInJlZnJlc2giLCJzd2lwZSIsImtleSIsImhhc093blByb3BlcnR5IiwiJGl0ZW1MaXN0Iiwid2lkdGhJdGVtIiwib2Zmc2V0V2lkdGgiLCJ3aWR0aFdyYXBwZXIiLCJpdGVtc0luVmlzaWJsZUFyZWEiLCJNYXRoIiwicm91bmQiLCJfd2lkdGhJdGVtIiwiX3dpZHRoV3JhcHBlciIsIl9pdGVtc0luVmlzaWJsZUFyZWEiLCJfdHJhbnNmb3JtU3RlcCIsImkiLCJkYXRhc2V0IiwiaW5kZXgiLCJvcmRlciIsInRyYW5zbGF0ZSIsImNvdW50IiwidHJhbnNmb3JtIiwiX19yZWZyZXNoRXh0cmVtZVZhbHVlcyIsImNsYXNzTGlzdCIsImFkZCIsIl9zZXRBY3RpdmVDbGFzcyIsIl9hZGRFdmVudExpc3RlbmVyIiwiX3VwZGF0ZUluZGljYXRvcnMiLCJfYXV0b3BsYXkiLCJwcm90b3R5cGUiLCIkaXRlbXMiLCJvbkNsaWNrIiwiJHRhcmdldCIsInRhcmdldCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJzbGlkZSIsIl9tb3ZlIiwic2xpZGVUbyIsInBhcnNlSW50IiwiX21vdmVUbyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uVHJhbnNpdGlvblN0YXJ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX2JhbGFuY2luZ0l0ZW1zIiwiYmluZCIsIm9uVHJhbnNpdGlvbkVuZCIsIm9uUmVzaXplIiwiX3JlZnJlc2giLCJvblN3aXBlU3RhcnQiLCJ0eXBlIiwic2VhcmNoIiwidG91Y2hlcyIsIl9zd2lwZVN0YXJ0UG9zIiwiY2xpZW50WCIsIm9uU3dpcGVFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsImRpZmZQb3MiLCJvbkRyYWdTdGFydCIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInZpc2liaWxpdHlTdGF0ZSIsIl8kaXRlbUJ5TWluT3JkZXIiLCJfJGl0ZW1CeU1heE9yZGVyIiwiJGl0ZW0iLCIkd3JhcHBlciIsIiR3cmFwcGVyQ2xpZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoSGFsZkl0ZW0iLCJjbGllbnRSZWN0Iiwid3JhcHBlckxlZnQiLCJsZWZ0IiwiJG1pbiIsInJpZ2h0IiwiY29uY2F0Iiwid3JhcHBlclJpZ2h0IiwiJG1heCIsImFjdGl2ZUl0ZW1zIiwicmVtb3ZlIiwiJGluZGljYXRvckxpc3QiLCJzdGVwIiwiZW5kVHJhbnNmb3JtVmFsdWUiLCJhY3RpdmVJbmRleCIsIm5ld0luZGV4IiwiZGlzcGF0Y2hFdmVudCIsIl9tb3ZlVG9OZXh0IiwiX21vdmVUb1ByZXYiLCJuZWFyZXN0SW5kZXgiLCJkaWZmIiwiJGluZGljYXRvciIsImFicyIsImFjdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBvc2l0aW9uIiwibmV4dCIsInByZXYiLCJtb3ZlVG8iLCJzbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9