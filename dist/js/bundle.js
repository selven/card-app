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

var Deck = __webpack_require__(1);

var deck = new Deck('deck1');
var shuffleButton = document.getElementById('shuffle');
var drawButton = document.getElementById('draw');
var sortButton = document.getElementById('sort');
var resetButton = document.getElementById('reset');
shuffleButton.addEventListener('click', function (e) {
  e.preventDefault();
  deck.shuffle();
});
drawButton.addEventListener('click', function (e) {
  e.preventDefault();
  deck.drawCard();
});
sortButton.addEventListener('click', function (e) {
  e.preventDefault();
  deck.sort();
});
resetButton.addEventListener('click', function (e) {
  e.preventDefault();
  location.reload();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = __webpack_require__(2);

var suits = ['club', 'spade', 'heart', 'diamond'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

var Deck =
/*#__PURE__*/
function () {
  function Deck(id) {
    _classCallCheck(this, Deck);

    this.div = document.getElementById(id);
    this._cards = [];
    this._drawn = [];
    this.addCards();
    this.displayDeck();
  }

  _createClass(Deck, [{
    key: "addCards",
    // create each card and add to page
    value: function addCards() {
      var i = 0;

      for (var _i = 0; _i < suits.length; _i++) {
        var suit = suits[_i];

        for (var _i2 = 0; _i2 < ranks.length; _i2++) {
          var rank = ranks[_i2];

          this._cards.push(new Card(this.div, i, suit, rank));

          i++;
        }
      }
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var m = this._cards.length;
      var t, i; // While there remain elements to shuffle…

      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--); // And swap it with the current element.

        t = this._cards[m];
        this._cards[m] = this._cards[i];
        this._cards[i] = t;
      } // play card shuffling animation


      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _card = _step.value;

          _card.shuffleAnimation();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "getIndex",
    value: function getIndex(i) {
      return this._cards.length + (this._drawn.length - i);
    }
  }, {
    key: "sort",
    value: function sort() {
      var _this = this;

      // hide cards and reset position
      var i = 0;

      var _loop = function _loop(card) {
        card.rotation = 0;
        card.positionCard(function () {
          card.visible = false;
          card.positionCard();
        });
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._drawn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var card = _step2.value;

          _loop(card);
        } // pause for effect

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      setTimeout(function () {
        // sort the cards
        _this._drawn.sort(function (a, b) {
          if (suits.indexOf(a.suit) > suits.indexOf(b.suit) || suits.indexOf(a.suit) === suits.indexOf(b.suit) && ranks.indexOf(a.rank) > ranks.indexOf(b.rank)) {
            return -1;
          }

          return 1;
        }); // flip the cards and put in the correct order


        i = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this._drawn[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _card2 = _step3.value;
            _card2.index = _this.getIndex(i);
            _card2.visible = true;

            _card2.positionCard();

            i++;
          } // fan out and display the cards

        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        setTimeout(function () {
          _this.displayCards();
        }, 500);
      }, 1500);
    }
  }, {
    key: "drawCard",
    value: function drawCard() {
      var display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this._cards.length > 0) {
        // add card to drawn array
        this._drawn.push(this._cards[this._cards.length - 1]); // remove from original array


        this._cards.pop();

        if (display) {
          this.displayCards();
        }
      }
    }
  }, {
    key: "displayCards",
    value: function displayCards() {
      this.displayDrawn();
      this.displayDeck();
    } // display the drawn cards in a "fan layout"

  }, {
    key: "displayDrawn",
    value: function displayDrawn() {
      var rotation = 0;
      var start = -90;
      var length = this._drawn.length; // set the space between cards, maximum 20

      var interval = 170 / this._drawn.length;

      if (interval > 20) {
        interval = 20;
      }

      var i = 0;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._drawn[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _card3 = _step4.value;
          // calculate rotation
          rotation = (i * interval - length / 2 * interval) * -1; // set card values

          _card3.top = -400;
          _card3.left = 0;
          _card3.rotation = rotation;
          _card3.visible = true;
          _card3.index = this.getIndex(i); // position card

          _card3.positionCard();

          i++;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "displayDeck",
    value: function displayDeck() {
      var i = 0;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this._cards[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _card4 = _step5.value;
          // move slightly to make it look like a deck
          var distance = i * 0.3;
          _card4.top = distance;
          _card4.left = distance;
          _card4.index = i;
          _card4.rotation = 0;
          _card4.visible = false;

          _card4.positionCard();

          i++;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "cards",
    get: function get() {
      return this._cards;
    }
  }, {
    key: "drawn",
    get: function get() {
      return this._drawn;
    }
  }]);

  return Deck;
}();

module.exports = Deck;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animations = __webpack_require__(3);

var Card =
/*#__PURE__*/
function () {
  function Card(deck, i, suit, rank) {
    _classCallCheck(this, Card);

    this.deck = deck;
    this._suit = suit;
    this._rank = rank;
    this._visible = false;
    this._top = 0;
    this._left = 0;
    this._index = i;
    this._rotation = 0;
    this.append();
  }

  _createClass(Card, [{
    key: "positionCard",
    // position all elements of the card. Show/ hide the card
    value: function positionCard() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // show or hide card
      if (this._visible) {
        this.div[0].querySelectorAll('.flip')[0].classList.add("flip--flipped");
      } else {
        this.div[0].querySelectorAll('.flip')[0].classList.remove("flip--flipped");
      } // position elelment


      this.div[0].style.zIndex = this._index;
      this.div[0].style.top = this._top + 'px';
      this.div[0].style.left = this._left + 'px';
      this.div[0].style.transform = 'rotate(' + this._rotation + 'deg)'; // wait for css animation. Could clear existing timeouts

      setTimeout(function () {
        if (callback) {
          callback();
        }
      }, 500);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n            <div class=\"card animation card_".concat(this._suit, "_").concat(this._rank, "\" style=\"top: ").concat(this._top, "px; left: ").concat(this._left, "px;\">\n                <div class=\"flip\">\n                    <div class=\"front\"><img src=\"images/cards/").concat(this._rank, "_of_").concat(this._suit, "s.png\" /></div>\n                    <div class=\"back\"></div>\n                </div>\n            </div>\n        ");
    } // add to the page

  }, {
    key: "append",
    value: function append() {
      this.deck.innerHTML += this.template();
      this.div = this.deck.getElementsByClassName("card_" + this._suit + '_' + this._rank);
    }
  }, {
    key: "shuffleAnimation",
    value: function shuffleAnimation(left) {
      var _this = this;

      // remove css animations
      this.div[0].classList.remove("animation");
      Animations.shuffle(this.div, this._index, this._left, this._top, function () {
        // add css animations back
        _this.div[0].classList.add("animation");
      });
    }
  }, {
    key: "suit",
    get: function get() {
      return this._suit;
    }
  }, {
    key: "rank",
    get: function get() {
      return this._rank;
    }
  }, {
    key: "top",
    get: function get() {
      return this._top;
    },
    set: function set(top) {
      this._top = top;
    }
  }, {
    key: "left",
    get: function get() {
      return this._left;
    },
    set: function set(left) {
      this._left = left;
    }
  }, {
    key: "index",
    set: function set(index) {
      this._index = index;
    }
  }, {
    key: "rotation",
    set: function set(rotation) {
      this._rotation = rotation;
    }
  }, {
    key: "visible",
    set: function set(visible) {
      this._visible = visible;
    }
  }]);

  return Card;
}();

module.exports = Card;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Velocity = __webpack_require__(4);

exports.shuffle = function (element, index, left, top, callback) {
  // randomly choose a direction
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  Velocity(element, {
    left: plusOrMinus * 80
  }, {
    duration: 200,
    delay: index * 5
  });
  Velocity(element, {
    left: left
  }, {
    duration: 200,
    delay: index * 5 + 200
  }); // second shuffle animation

  Velocity(element, {
    top: -75
  }, {
    duration: 100,
    delay: index * 5 + 400
  });
  Velocity(element, {
    top: top
  }, {
    duration: 100,
    delay: index * 5 + 600,
    complete: function complete() {
      callback();
    }
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

(function(window) {
	"use strict";
	/***************
	 Setup
	 ***************/

	/* If jQuery is already loaded, there's no point in loading this shim. */
	if (window.jQuery) {
		return;
	}

	/* jQuery base. */
	var $ = function(selector, context) {
		return new $.fn.init(selector, context);
	};

	/********************
	 Private Methods
	 ********************/

	/* jQuery */
	$.isWindow = function(obj) {
		/* jshint eqeqeq: false */
		return obj && obj === obj.window;
	};

	/* jQuery */
	$.type = function(obj) {
		if (!obj) {
			return obj + "";
		}

		return typeof obj === "object" || typeof obj === "function" ?
				class2type[toString.call(obj)] || "object" :
				typeof obj;
	};

	/* jQuery */
	$.isArray = Array.isArray || function(obj) {
		return $.type(obj) === "array";
	};

	/* jQuery */
	function isArraylike(obj) {
		var length = obj.length,
				type = $.type(obj);

		if (type === "function" || $.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	/***************
	 $ Methods
	 ***************/

	/* jQuery: Support removed for IE<9. */
	$.isPlainObject = function(obj) {
		var key;

		if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
			return false;
		}

		try {
			if (obj.constructor &&
					!hasOwn.call(obj, "constructor") &&
					!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}
		} catch (e) {
			return false;
		}

		for (key in obj) {
		}

		return key === undefined || hasOwn.call(obj, key);
	};

	/* jQuery */
	$.each = function(obj, callback, args) {
		var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike(obj);

		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			}

		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			}
		}

		return obj;
	};

	/* Custom */
	$.data = function(node, key, value) {
		/* $.getData() */
		if (value === undefined) {
			var getId = node[$.expando],
					store = getId && cache[getId];

			if (key === undefined) {
				return store;
			} else if (store) {
				if (key in store) {
					return store[key];
				}
			}
			/* $.setData() */
		} else if (key !== undefined) {
			var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

			cache[setId] = cache[setId] || {};
			cache[setId][key] = value;

			return value;
		}
	};

	/* Custom */
	$.removeData = function(node, keys) {
		var id = node[$.expando],
				store = id && cache[id];

		if (store) {
			// Cleanup the entire store if no keys are provided.
			if (!keys) {
				delete cache[id];
			} else {
				$.each(keys, function(_, key) {
					delete store[key];
				});
			}
		}
	};

	/* jQuery */
	$.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
				target = arguments[0] || {},
				i = 1,
				length = arguments.length,
				deep = false;

		if (typeof target === "boolean") {
			deep = target;

			target = arguments[i] || {};
			i++;
		}

		if (typeof target !== "object" && $.type(target) !== "function") {
			target = {};
		}

		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if ((options = arguments[i])) {
				for (name in options) {
					if (!options.hasOwnProperty(name)) {
						continue;
					}
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];

						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}

						target[name] = $.extend(deep, clone, copy);

					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		return target;
	};

	/* jQuery 1.4.3 */
	$.queue = function(elem, type, data) {
		function $makeArray(arr, results) {
			var ret = results || [];

			if (arr) {
				if (isArraylike(Object(arr))) {
					/* $.merge */
					(function(first, second) {
						var len = +second.length,
								j = 0,
								i = first.length;

						while (j < len) {
							first[i++] = second[j++];
						}

						if (len !== len) {
							while (second[j] !== undefined) {
								first[i++] = second[j++];
							}
						}

						first.length = i;

						return first;
					})(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					[].push.call(ret, arr);
				}
			}

			return ret;
		}

		if (!elem) {
			return;
		}

		type = (type || "fx") + "queue";

		var q = $.data(elem, type);

		if (!data) {
			return q || [];
		}

		if (!q || $.isArray(data)) {
			q = $.data(elem, type, $makeArray(data));
		} else {
			q.push(data);
		}

		return q;
	};

	/* jQuery 1.4.3 */
	$.dequeue = function(elems, type) {
		/* Custom: Embed element iteration. */
		$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
			type = type || "fx";

			var queue = $.queue(elem, type),
					fn = queue.shift();

			if (fn === "inprogress") {
				fn = queue.shift();
			}

			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				fn.call(elem, function() {
					$.dequeue(elem, type);
				});
			}
		});
	};

	/******************
	 $.fn Methods
	 ******************/

	/* jQuery */
	$.fn = $.prototype = {
		init: function(selector) {
			/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
			if (selector.nodeType) {
				this[0] = selector;

				return this;
			} else {
				throw new Error("Not a DOM node.");
			}
		},
		offset: function() {
			/* jQuery altered code: Dropped disconnected DOM node checking. */
			var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

			return {
				top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
				left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
			};
		},
		position: function() {
			/* jQuery */
			function offsetParentFn(elem) {
				var offsetParent = elem.offsetParent;

				while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || document;
			}

			/* Zepto */
			var elem = this[0],
					offsetParent = offsetParentFn(elem),
					offset = this.offset(),
					parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

			offset.top -= parseFloat(elem.style.marginTop) || 0;
			offset.left -= parseFloat(elem.style.marginLeft) || 0;

			if (offsetParent.style) {
				parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
				parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
			}

			return {
				top: offset.top - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
	};

	/**********************
	 Private Variables
	 **********************/

	/* For $.data() */
	var cache = {};
	$.expando = "velocity" + (new Date().getTime());
	$.uuid = 0;

	/* For $.queue() */
	var class2type = {},
			hasOwn = class2type.hasOwnProperty,
			toString = class2type.toString;

	var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	for (var i = 0; i < types.length; i++) {
		class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	}

	/* Makes $(node) possible, without having to call init. */
	$.fn.init.prototype = $.fn;

	/* Globalize Velocity onto the window, and assign its Utilities property. */
	window.Velocity = {Utilities: $};
})(window);

/******************
 Velocity.js
 ******************/

(function(factory) {
	"use strict";
	/* CommonJS module. */
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory();
		/* AMD module. */
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		/* Browser globals. */
	} else {
		factory();
	}
}(function() {
	"use strict";
	return function(global, window, document, undefined) {

		/***************
		 Summary
		 ***************/

		/*
		 - CSS: CSS stack that works independently from the rest of Velocity.
		 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
		 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
		 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
		 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
		 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
		 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
		 - completeCall(): Handles the cleanup process for each Velocity call.
		 */

		/*********************
		 Helper Functions
		 *********************/

		/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
		var IE = (function() {
			if (document.documentMode) {
				return document.documentMode;
			} else {
				for (var i = 7; i > 4; i--) {
					var div = document.createElement("div");

					div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

					if (div.getElementsByTagName("span").length) {
						div = null;

						return i;
					}
				}
			}

			return undefined;
		})();

		/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
		var rAFShim = (function() {
			var timeLast = 0;

			return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
				var timeCurrent = (new Date()).getTime(),
						timeDelta;

				/* Dynamically set delay on a per-tick basis to match 60fps. */
				/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
				timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
				timeLast = timeCurrent + timeDelta;

				return setTimeout(function() {
					callback(timeCurrent + timeDelta);
				}, timeDelta);
			};
		})();

		var performance = (function() {
			var perf = window.performance || {};

			if (typeof perf.now !== "function") {
				var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();

				perf.now = function() {
					return (new Date()).getTime() - nowOffset;
				};
			}
			return perf;
		})();

		/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
		function compactSparseArray(array) {
			var index = -1,
					length = array ? array.length : 0,
					result = [];

			while (++index < length) {
				var value = array[index];

				if (value) {
					result.push(value);
				}
			}

			return result;
		}

		/**
		 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
		 * (technically, since host objects have been implementation-dependent,
		 * at least before ES2015, IE hasn't needed to work this way).
		 * Also works on strings, fixes IE < 9 to allow an explicit undefined
		 * for the 2nd argument (as in Firefox), and prevents errors when
		 * called on other DOM objects.
		 */
		var _slice = (function() {
			var slice = Array.prototype.slice;

			try {
				// Can't be used with DOM elements in IE < 9
				slice.call(document.documentElement);
				return slice;
			} catch (e) { // Fails in IE < 9

				// This will work for genuine arrays, array-like objects, 
				// NamedNodeMap (attributes, entities, notations),
				// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
				// and will not fail on other DOM objects (as do DOM elements in IE < 9)
				return function(begin, end) {
					var len = this.length;

					if (typeof begin !== "number") {
						begin = 0;
					}
					// IE < 9 gets unhappy with an undefined end argument
					if (typeof end !== "number") {
						end = len;
					}
					// For native Array objects, we use the native slice function
					if (this.slice) {
						return slice.call(this, begin, end);
					}
					// For array like object we handle it ourselves.
					var i,
							cloned = [],
							// Handle negative value for "begin"
							start = (begin >= 0) ? begin : Math.max(0, len + begin),
							// Handle negative value for "end"
							upTo = end < 0 ? len + end : Math.min(end, len),
							// Actual expected size of the slice
							size = upTo - start;

					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i);
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i];
							}
						}
					}
					return cloned;
				};
			}
		})();

		/* .indexOf doesn't exist in IE<9 */
		var _inArray = (function() {
			if (Array.prototype.includes) {
				return function(arr, val) {
					return arr.includes(val);
				};
			}
			if (Array.prototype.indexOf) {
				return function(arr, val) {
					return arr.indexOf(val) >= 0;
				};
			}
			return function(arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] === val) {
						return true;
					}
				}
				return false;
			};
		});

		function sanitizeElements(elements) {
			/* Unwrap jQuery/Zepto objects. */
			if (Type.isWrapped(elements)) {
				elements = _slice.call(elements);
				/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
			} else if (Type.isNode(elements)) {
				elements = [elements];
			}

			return elements;
		}

		var Type = {
			isNumber: function(variable) {
				return (typeof variable === "number");
			},
			isString: function(variable) {
				return (typeof variable === "string");
			},
			isArray: Array.isArray || function(variable) {
				return Object.prototype.toString.call(variable) === "[object Array]";
			},
			isFunction: function(variable) {
				return Object.prototype.toString.call(variable) === "[object Function]";
			},
			isNode: function(variable) {
				return variable && variable.nodeType;
			},
			/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
			/* NOTE: HTMLFormElements also have a length. */
			isWrapped: function(variable) {
				return variable
						&& variable !== window
						&& Type.isNumber(variable.length)
						&& !Type.isString(variable)
						&& !Type.isFunction(variable)
						&& !Type.isNode(variable)
						&& (variable.length === 0 || Type.isNode(variable[0]));
			},
			isSVG: function(variable) {
				return window.SVGElement && (variable instanceof window.SVGElement);
			},
			isEmptyObject: function(variable) {
				for (var name in variable) {
					if (variable.hasOwnProperty(name)) {
						return false;
					}
				}

				return true;
			}
		};

		/*****************
		 Dependencies
		 *****************/

		var $,
				isJQuery = false;

		if (global.fn && global.fn.jquery) {
			$ = global;
			isJQuery = true;
		} else {
			$ = window.Velocity.Utilities;
		}

		if (IE <= 8 && !isJQuery) {
			throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		} else if (IE <= 7) {
			/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
			jQuery.fn.velocity = jQuery.fn.animate;

			/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
			return;
		}

		/*****************
		 Constants
		 *****************/

		var DURATION_DEFAULT = 400,
				EASING_DEFAULT = "swing";

		/*************
		 State
		 *************/

		var Velocity = {
			/* Container for page-wide Velocity state data. */
			State: {
				/* Detect mobile devices to determine if mobileHA should be turned on. */
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
				isAndroid: /Android/i.test(navigator.userAgent),
				isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
				isChrome: window.chrome,
				isFirefox: /Firefox/i.test(navigator.userAgent),
				/* Create a cached element for re-use when checking for CSS property prefixes. */
				prefixElement: document.createElement("div"),
				/* Cache every prefix match to avoid repeating lookups. */
				prefixMatches: {},
				/* Cache the anchor used for animating window scrolling. */
				scrollAnchor: null,
				/* Cache the browser-specific property names associated with the scroll anchor. */
				scrollPropertyLeft: null,
				scrollPropertyTop: null,
				/* Keep track of whether our RAF tick is running. */
				isTicking: false,
				/* Container for every in-progress call to Velocity. */
				calls: [],
				delayedElements: {
					count: 0
				}
			},
			/* Velocity's custom CSS stack. Made global for unit testing. */
			CSS: {/* Defined below. */},
			/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
			Utilities: $,
			/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
			Redirects: {/* Manually registered by the user. */},
			Easings: {/* Defined below. */},
			/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
			Promise: window.Promise,
			/* Velocity option defaults, which can be overriden by the user. */
			defaults: {
				queue: "",
				duration: DURATION_DEFAULT,
				easing: EASING_DEFAULT,
				begin: undefined,
				complete: undefined,
				progress: undefined,
				display: undefined,
				visibility: undefined,
				loop: false,
				delay: false,
				mobileHA: true,
				/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
				_cacheValues: true,
				/* Advanced: Set to false if the promise should always resolve on empty element lists. */
				promiseRejectEmpty: true
			},
			/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
			init: function(element) {
				$.data(element, "velocity", {
					/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
					isSVG: Type.isSVG(element),
					/* Keep track of whether the element is currently being animated by Velocity.
					 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
					isAnimating: false,
					/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					computedStyle: null,
					/* Tween data is cached for each animation on the element so that data can be passed across calls --
					 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
					tweensContainer: null,
					/* The full root property values of each CSS hook being animated on this element are cached so that:
					 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
					 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
					rootPropertyValueCache: {},
					/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
					transformCache: {}
				});
			},
			/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
			hook: null, /* Defined below. */
			/* Velocity-wide animation time remapping for testing purposes. */
			mock: false,
			version: {major: 1, minor: 5, patch: 0},
			/* Set to 1 or 2 (most verbose) to output debug info to console. */
			debug: false,
			/* Use rAF high resolution timestamp when available */
			timestamp: true,
			/* Pause all animations */
			pauseAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to paused */
						activeCall[5] = {
							resume: false
						};
					}
				});

				/* Pause timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					pauseDelayOnElement(element, currentTime);
				});
			},
			/* Resume all animations */
			resumeAll: function(queueName) {
				var currentTime = (new Date()).getTime();

				$.each(Velocity.State.calls, function(i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
							return true;
						}

						/* Set call to resumed if it was paused */
						if (activeCall[5]) {
							activeCall[5].resume = true;
						}
					}
				});
				/* Resume timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function(k, element) {
					if (!element) {
						return;
					}
					resumeDelayOnElement(element, currentTime);
				});
			}
		};

		/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
		if (window.pageYOffset !== undefined) {
			Velocity.State.scrollAnchor = window;
			Velocity.State.scrollPropertyLeft = "pageXOffset";
			Velocity.State.scrollPropertyTop = "pageYOffset";
		} else {
			Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
			Velocity.State.scrollPropertyLeft = "scrollLeft";
			Velocity.State.scrollPropertyTop = "scrollTop";
		}

		/* Shorthand alias for jQuery's $.data() utility. */
		function Data(element) {
			/* Hardcode a reference to the plugin name. */
			var response = $.data(element, "velocity");

			/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
			return response === null ? undefined : response;
		}

		/**************
		 Delay Timer
		 **************/

		function pauseDelayOnElement(element, currentTime) {
			/* Check for any delay timers, and pause the set timeouts (while preserving time data)
			 to be resumed when the "resume" command is issued */
			var data = Data(element);
			if (data && data.delayTimer && !data.delayPaused) {
				data.delayRemaining = data.delay - currentTime + data.delayBegin;
				data.delayPaused = true;
				clearTimeout(data.delayTimer.setTimeout);
			}
		}

		function resumeDelayOnElement(element, currentTime) {
			/* Check for any paused timers and resume */
			var data = Data(element);
			if (data && data.delayTimer && data.delayPaused) {
				/* If the element was mid-delay, re initiate the timeout with the remaining delay */
				data.delayPaused = false;
				data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
			}
		}



		/**************
		 Easing
		 **************/

		/* Step easing generator. */
		function generateStep(steps) {
			return function(p) {
				return Math.round(p * steps) * (1 / steps);
			};
		}

		/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		function generateBezier(mX1, mY1, mX2, mY2) {
			var NEWTON_ITERATIONS = 4,
					NEWTON_MIN_SLOPE = 0.001,
					SUBDIVISION_PRECISION = 0.0000001,
					SUBDIVISION_MAX_ITERATIONS = 10,
					kSplineTableSize = 11,
					kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
					float32ArraySupported = "Float32Array" in window;

			/* Must contain four arguments. */
			if (arguments.length !== 4) {
				return false;
			}

			/* Arguments must be numbers. */
			for (var i = 0; i < 4; ++i) {
				if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
					return false;
				}
			}

			/* X values must be in the [0, 1] range. */
			mX1 = Math.min(mX1, 1);
			mX2 = Math.min(mX2, 1);
			mX1 = Math.max(mX1, 0);
			mX2 = Math.max(mX2, 0);

			var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

			function A(aA1, aA2) {
				return 1.0 - 3.0 * aA2 + 3.0 * aA1;
			}
			function B(aA1, aA2) {
				return 3.0 * aA2 - 6.0 * aA1;
			}
			function C(aA1) {
				return 3.0 * aA1;
			}

			function calcBezier(aT, aA1, aA2) {
				return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
			}

			function getSlope(aT, aA1, aA2) {
				return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
			}

			function newtonRaphsonIterate(aX, aGuessT) {
				for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
					var currentSlope = getSlope(aGuessT, mX1, mX2);

					if (currentSlope === 0.0) {
						return aGuessT;
					}

					var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
					aGuessT -= currentX / currentSlope;
				}

				return aGuessT;
			}

			function calcSampleValues() {
				for (var i = 0; i < kSplineTableSize; ++i) {
					mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
				}
			}

			function binarySubdivide(aX, aA, aB) {
				var currentX, currentT, i = 0;

				do {
					currentT = aA + (aB - aA) / 2.0;
					currentX = calcBezier(currentT, mX1, mX2) - aX;
					if (currentX > 0.0) {
						aB = currentT;
					} else {
						aA = currentT;
					}
				} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

				return currentT;
			}

			function getTForX(aX) {
				var intervalStart = 0.0,
						currentSample = 1,
						lastSample = kSplineTableSize - 1;

				for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
					intervalStart += kSampleStepSize;
				}

				--currentSample;

				var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
						guessForT = intervalStart + dist * kSampleStepSize,
						initialSlope = getSlope(guessForT, mX1, mX2);

				if (initialSlope >= NEWTON_MIN_SLOPE) {
					return newtonRaphsonIterate(aX, guessForT);
				} else if (initialSlope === 0.0) {
					return guessForT;
				} else {
					return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
				}
			}

			var _precomputed = false;

			function precompute() {
				_precomputed = true;
				if (mX1 !== mY1 || mX2 !== mY2) {
					calcSampleValues();
				}
			}

			var f = function(aX) {
				if (!_precomputed) {
					precompute();
				}
				if (mX1 === mY1 && mX2 === mY2) {
					return aX;
				}
				if (aX === 0) {
					return 0;
				}
				if (aX === 1) {
					return 1;
				}

				return calcBezier(getTForX(aX), mY1, mY2);
			};

			f.getControlPoints = function() {
				return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
			};

			var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
			f.toString = function() {
				return str;
			};

			return f;
		}

		/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
		var generateSpringRK4 = (function() {
			function springAccelerationForState(state) {
				return (-state.tension * state.x) - (state.friction * state.v);
			}

			function springEvaluateStateWithDerivative(initialState, dt, derivative) {
				var state = {
					x: initialState.x + derivative.dx * dt,
					v: initialState.v + derivative.dv * dt,
					tension: initialState.tension,
					friction: initialState.friction
				};

				return {dx: state.v, dv: springAccelerationForState(state)};
			}

			function springIntegrateState(state, dt) {
				var a = {
					dx: state.v,
					dv: springAccelerationForState(state)
				},
						b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
						c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
						d = springEvaluateStateWithDerivative(state, dt, c),
						dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
						dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

				state.x = state.x + dxdt * dt;
				state.v = state.v + dvdt * dt;

				return state;
			}

			return function springRK4Factory(tension, friction, duration) {

				var initState = {
					x: -1,
					v: 0,
					tension: null,
					friction: null
				},
						path = [0],
						time_lapsed = 0,
						tolerance = 1 / 10000,
						DT = 16 / 1000,
						have_duration, dt, last_state;

				tension = parseFloat(tension) || 500;
				friction = parseFloat(friction) || 20;
				duration = duration || null;

				initState.tension = tension;
				initState.friction = friction;

				have_duration = duration !== null;

				/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
				if (have_duration) {
					/* Run the simulation without a duration. */
					time_lapsed = springRK4Factory(tension, friction);
					/* Compute the adjusted time delta. */
					dt = time_lapsed / duration * DT;
				} else {
					dt = DT;
				}

				while (true) {
					/* Next/step function .*/
					last_state = springIntegrateState(last_state || initState, dt);
					/* Store the position. */
					path.push(1 + last_state.x);
					time_lapsed += 16;
					/* If the change threshold is reached, break. */
					if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
						break;
					}
				}

				/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
				 computed path and returns a snapshot of the position according to a given percentComplete. */
				return !have_duration ? time_lapsed : function(percentComplete) {
					return path[ (percentComplete * (path.length - 1)) | 0 ];
				};
			};
		}());

		/* jQuery easings. */
		Velocity.Easings = {
			linear: function(p) {
				return p;
			},
			swing: function(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
			spring: function(p) {
				return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
			}
		};

		/* CSS3 and Robert Penner easings. */
		$.each(
				[
					["ease", [0.25, 0.1, 0.25, 1.0]],
					["ease-in", [0.42, 0.0, 1.00, 1.0]],
					["ease-out", [0.00, 0.0, 0.58, 1.0]],
					["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
					["easeInSine", [0.47, 0, 0.745, 0.715]],
					["easeOutSine", [0.39, 0.575, 0.565, 1]],
					["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
					["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
					["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
					["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
					["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
					["easeOutCubic", [0.215, 0.61, 0.355, 1]],
					["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
					["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
					["easeOutQuart", [0.165, 0.84, 0.44, 1]],
					["easeInOutQuart", [0.77, 0, 0.175, 1]],
					["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
					["easeOutQuint", [0.23, 1, 0.32, 1]],
					["easeInOutQuint", [0.86, 0, 0.07, 1]],
					["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
					["easeOutExpo", [0.19, 1, 0.22, 1]],
					["easeInOutExpo", [1, 0, 0, 1]],
					["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
					["easeOutCirc", [0.075, 0.82, 0.165, 1]],
					["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
				], function(i, easingArray) {
			Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
		});

		/* Determine the appropriate easing type given an easing input. */
		function getEasing(value, duration) {
			var easing = value;

			/* The easing option can either be a string that references a pre-registered easing,
			 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
			if (Type.isString(value)) {
				/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
				if (!Velocity.Easings[value]) {
					easing = false;
				}
			} else if (Type.isArray(value) && value.length === 1) {
				easing = generateStep.apply(null, value);
			} else if (Type.isArray(value) && value.length === 2) {
				/* springRK4 must be passed the animation's duration. */
				/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
				 function generated with default tension and friction values. */
				easing = generateSpringRK4.apply(null, value.concat([duration]));
			} else if (Type.isArray(value) && value.length === 4) {
				/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
				easing = generateBezier.apply(null, value);
			} else {
				easing = false;
			}

			/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
			 if the Velocity-wide default has been incorrectly modified. */
			if (easing === false) {
				if (Velocity.Easings[Velocity.defaults.easing]) {
					easing = Velocity.defaults.easing;
				} else {
					easing = EASING_DEFAULT;
				}
			}

			return easing;
		}

		/*****************
		 CSS Stack
		 *****************/

		/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
		 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
		/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
		var CSS = Velocity.CSS = {
			/*************
			 RegEx
			 *************/

			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
			},
			/************
			 Lists
			 ************/

			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: [
					"%", // relative
					"em", "ex", "ch", "rem", // font relative
					"vw", "vh", "vmin", "vmax", // viewport relative
					"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
					"deg", "grad", "rad", "turn", // angles
					"s", "ms" // time
				],
				colorNames: {
					"aliceblue": "240,248,255",
					"antiquewhite": "250,235,215",
					"aquamarine": "127,255,212",
					"aqua": "0,255,255",
					"azure": "240,255,255",
					"beige": "245,245,220",
					"bisque": "255,228,196",
					"black": "0,0,0",
					"blanchedalmond": "255,235,205",
					"blueviolet": "138,43,226",
					"blue": "0,0,255",
					"brown": "165,42,42",
					"burlywood": "222,184,135",
					"cadetblue": "95,158,160",
					"chartreuse": "127,255,0",
					"chocolate": "210,105,30",
					"coral": "255,127,80",
					"cornflowerblue": "100,149,237",
					"cornsilk": "255,248,220",
					"crimson": "220,20,60",
					"cyan": "0,255,255",
					"darkblue": "0,0,139",
					"darkcyan": "0,139,139",
					"darkgoldenrod": "184,134,11",
					"darkgray": "169,169,169",
					"darkgrey": "169,169,169",
					"darkgreen": "0,100,0",
					"darkkhaki": "189,183,107",
					"darkmagenta": "139,0,139",
					"darkolivegreen": "85,107,47",
					"darkorange": "255,140,0",
					"darkorchid": "153,50,204",
					"darkred": "139,0,0",
					"darksalmon": "233,150,122",
					"darkseagreen": "143,188,143",
					"darkslateblue": "72,61,139",
					"darkslategray": "47,79,79",
					"darkturquoise": "0,206,209",
					"darkviolet": "148,0,211",
					"deeppink": "255,20,147",
					"deepskyblue": "0,191,255",
					"dimgray": "105,105,105",
					"dimgrey": "105,105,105",
					"dodgerblue": "30,144,255",
					"firebrick": "178,34,34",
					"floralwhite": "255,250,240",
					"forestgreen": "34,139,34",
					"fuchsia": "255,0,255",
					"gainsboro": "220,220,220",
					"ghostwhite": "248,248,255",
					"gold": "255,215,0",
					"goldenrod": "218,165,32",
					"gray": "128,128,128",
					"grey": "128,128,128",
					"greenyellow": "173,255,47",
					"green": "0,128,0",
					"honeydew": "240,255,240",
					"hotpink": "255,105,180",
					"indianred": "205,92,92",
					"indigo": "75,0,130",
					"ivory": "255,255,240",
					"khaki": "240,230,140",
					"lavenderblush": "255,240,245",
					"lavender": "230,230,250",
					"lawngreen": "124,252,0",
					"lemonchiffon": "255,250,205",
					"lightblue": "173,216,230",
					"lightcoral": "240,128,128",
					"lightcyan": "224,255,255",
					"lightgoldenrodyellow": "250,250,210",
					"lightgray": "211,211,211",
					"lightgrey": "211,211,211",
					"lightgreen": "144,238,144",
					"lightpink": "255,182,193",
					"lightsalmon": "255,160,122",
					"lightseagreen": "32,178,170",
					"lightskyblue": "135,206,250",
					"lightslategray": "119,136,153",
					"lightsteelblue": "176,196,222",
					"lightyellow": "255,255,224",
					"limegreen": "50,205,50",
					"lime": "0,255,0",
					"linen": "250,240,230",
					"magenta": "255,0,255",
					"maroon": "128,0,0",
					"mediumaquamarine": "102,205,170",
					"mediumblue": "0,0,205",
					"mediumorchid": "186,85,211",
					"mediumpurple": "147,112,219",
					"mediumseagreen": "60,179,113",
					"mediumslateblue": "123,104,238",
					"mediumspringgreen": "0,250,154",
					"mediumturquoise": "72,209,204",
					"mediumvioletred": "199,21,133",
					"midnightblue": "25,25,112",
					"mintcream": "245,255,250",
					"mistyrose": "255,228,225",
					"moccasin": "255,228,181",
					"navajowhite": "255,222,173",
					"navy": "0,0,128",
					"oldlace": "253,245,230",
					"olivedrab": "107,142,35",
					"olive": "128,128,0",
					"orangered": "255,69,0",
					"orange": "255,165,0",
					"orchid": "218,112,214",
					"palegoldenrod": "238,232,170",
					"palegreen": "152,251,152",
					"paleturquoise": "175,238,238",
					"palevioletred": "219,112,147",
					"papayawhip": "255,239,213",
					"peachpuff": "255,218,185",
					"peru": "205,133,63",
					"pink": "255,192,203",
					"plum": "221,160,221",
					"powderblue": "176,224,230",
					"purple": "128,0,128",
					"red": "255,0,0",
					"rosybrown": "188,143,143",
					"royalblue": "65,105,225",
					"saddlebrown": "139,69,19",
					"salmon": "250,128,114",
					"sandybrown": "244,164,96",
					"seagreen": "46,139,87",
					"seashell": "255,245,238",
					"sienna": "160,82,45",
					"silver": "192,192,192",
					"skyblue": "135,206,235",
					"slateblue": "106,90,205",
					"slategray": "112,128,144",
					"snow": "255,250,250",
					"springgreen": "0,255,127",
					"steelblue": "70,130,180",
					"tan": "210,180,140",
					"teal": "0,128,128",
					"thistle": "216,191,216",
					"tomato": "255,99,71",
					"turquoise": "64,224,208",
					"violet": "238,130,238",
					"wheat": "245,222,179",
					"whitesmoke": "245,245,245",
					"white": "255,255,255",
					"yellowgreen": "154,205,50",
					"yellow": "255,255,0"
				}
			},
			/************
			 Hooks
			 ************/

			/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
			 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
			/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
			 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
			Hooks: {
				/********************
				 Registration
				 ********************/

				/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
				/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
				templates: {
					"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
					"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
					"backgroundPosition": ["X Y", "0% 0%"],
					"transformOrigin": ["X Y Z", "50% 50% 0px"],
					"perspectiveOrigin": ["X Y", "50% 50%"]
				},
				/* A "registered" hook is one that has been converted from its template form into a live,
				 tweenable property. It contains data to associate it with its root property. */
				registered: {
					/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
					 which consists of the subproperty's name, the associated root property's name,
					 and the subproperty's position in the root's value. */
				},
				/* Convert the templates into individual hooks then append them to the registered object above. */
				register: function() {
					/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
					 currently set to "transparent" default to their respective template below when color-animated,
					 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
					 which is almost always set closer to black than white. */
					for (var i = 0; i < CSS.Lists.colors.length; i++) {
						var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
						CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
					}

					var rootProperty,
							hookTemplate,
							hookNames;

					/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
					 Thus, we re-arrange the templates accordingly. */
					if (IE) {
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

							if (hookNames[0] === "Color") {
								/* Reposition both the hook's name and its default value to the end of their respective strings. */
								hookNames.push(hookNames.shift());
								defaultValues.push(defaultValues.shift());

								/* Replace the existing template for the hook's root property. */
								CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
							}
						}
					}

					/* Hook registration. */
					for (rootProperty in CSS.Hooks.templates) {
						if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
							continue;
						}
						hookTemplate = CSS.Hooks.templates[rootProperty];
						hookNames = hookTemplate[0].split(" ");

						for (var j in hookNames) {
							if (!hookNames.hasOwnProperty(j)) {
								continue;
							}
							var fullHookName = rootProperty + hookNames[j],
									hookPosition = j;

							/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
							 and the hook's position in its template's default value string. */
							CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
						}
					}
				},
				/*****************************
				 Injection and Extraction
				 *****************************/

				/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
				/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
				getRoot: function(property) {
					var hookData = CSS.Hooks.registered[property];

					if (hookData) {
						return hookData[0];
					} else {
						/* If there was no hook match, return the property name untouched. */
						return property;
					}
				},
				getUnit: function(str, start) {
					var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

					if (unit && _inArray(CSS.Lists.units, unit)) {
						return unit;
					}
					return "";
				},
				fixColors: function(str) {
					return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
						if (CSS.Lists.colorNames.hasOwnProperty($2)) {
							return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
						}
						return $1 + $2;
					});
				},
				/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
				 the targeted hook can be injected or extracted at its standard position. */
				cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
					/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
					if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
						rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
					}

					/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
					 default to the root's default value as defined in CSS.Hooks.templates. */
					/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
					 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
					if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
						rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
					}

					return rootPropertyValue;
				},
				/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
				extractValue: function(fullHookName, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1];

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
						return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				},
				/* Inject the hook's value into its root property's value. This is used to piece back together the root property
				 once Velocity has updated one of its individually hooked values through tweening. */
				injectValue: function(fullHookName, hookValue, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
								hookPosition = hookData[1],
								rootPropertyValueParts,
								rootPropertyValueUpdated;

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
						 then reconstruct the rootPropertyValue string. */
						rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
						rootPropertyValueParts[hookPosition] = hookValue;
						rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

						return rootPropertyValueUpdated;
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				}
			},
			/*******************
			 Normalizations
			 *******************/

			/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
			 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
			Normalizations: {
				/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
				 the targeted element (which may need to be queried), and the targeted property value. */
				registered: {
					clip: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return "clip";
								/* Clip needs to be unwrapped and stripped of its commas during extraction. */
							case "extract":
								var extracted;

								/* If Velocity also extracted this value, skip extraction. */
								if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
									extracted = propertyValue;
								} else {
									/* Remove the "rect()" wrapper. */
									extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

									/* Strip off commas. */
									extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
								}

								return extracted;
								/* Clip needs to be re-wrapped during injection. */
							case "inject":
								return "rect(" + propertyValue + ")";
						}
					},
					blur: function(type, element, propertyValue) {
						switch (type) {
							case "name":
								return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								var extracted = parseFloat(propertyValue);

								/* If extracted is NaN, meaning the value isn't already extracted. */
								if (!(extracted || extracted === 0)) {
									var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

									/* If the filter string had a blur component, return just the blur value and unit type. */
									if (blurComponent) {
										extracted = blurComponent[1];
										/* If the component doesn't exist, default blur to 0. */
									} else {
										extracted = 0;
									}
								}

								return extracted;
								/* Blur needs to be re-wrapped during injection. */
							case "inject":
								/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
								if (!parseFloat(propertyValue)) {
									return "none";
								} else {
									return "blur(" + propertyValue + ")";
								}
						}
					},
					/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
					opacity: function(type, element, propertyValue) {
						if (IE <= 8) {
							switch (type) {
								case "name":
									return "filter";
								case "extract":
									/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
									 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
									var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

									if (extracted) {
										/* Convert to decimal value. */
										propertyValue = extracted[1] / 100;
									} else {
										/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
										propertyValue = 1;
									}

									return propertyValue;
								case "inject":
									/* Opacified elements are required to have their zoom property set to a non-zero value. */
									element.style.zoom = 1;

									/* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
									if (parseFloat(propertyValue) >= 1) {
										return "";
									} else {
										/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
										return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
									}
							}
							/* With all other browsers, normalization is not required; return the same values that were passed in. */
						} else {
							switch (type) {
								case "name":
									return "opacity";
								case "extract":
									return propertyValue;
								case "inject":
									return propertyValue;
							}
						}
					}
				},
				/*****************************
				 Batched Registrations
				 *****************************/

				/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
				register: function() {

					/*****************
					 Transforms
					 *****************/

					/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
					 so that they can be referenced in a properties map by their individual names. */
					/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
					 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
					 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
					 once when multiple transform subproperties are being animated simultaneously. */
					/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
					 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
					 from being normalized for these browsers so that tweening skips these properties altogether
					 (since it will ignore them as being unsupported by the browser.) */
					if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
						/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
						 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
						CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
					}

					for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
						/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
						 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
						(function() {
							var transformName = CSS.Lists.transformsBase[i];

							CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
								switch (type) {
									/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
									case "name":
										return "transform";
										/* Transform values are cached onto a per-element transformCache object. */
									case "extract":
										/* If this transform has yet to be assigned a value, return its null value. */
										if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
											/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
											return /^scale/i.test(transformName) ? 1 : 0;
											/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
											 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
										}
										return Data(element).transformCache[transformName].replace(/[()]/g, "");
									case "inject":
										var invalid = false;

										/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
										 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
										/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
										switch (transformName.substr(0, transformName.length - 1)) {
											/* Whitelist unit types for each transform. */
											case "translate":
												invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
												break;
												/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
											case "scal":
											case "scale":
												/* Chrome on Android has a bug in which scaled elements blur if their initial scale
												 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
												 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
												if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
													propertyValue = 1;
												}

												invalid = !/(\d)$/i.test(propertyValue);
												break;
											case "skew":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
											case "rotate":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
										}

										if (!invalid) {
											/* As per the CSS spec, wrap the value in parentheses. */
											Data(element).transformCache[transformName] = "(" + propertyValue + ")";
										}

										/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
										return Data(element).transformCache[transformName];
								}
							};
						})();
					}

					/*************
					 Colors
					 *************/

					/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
					 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
					for (var j = 0; j < CSS.Lists.colors.length; j++) {
						/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
						 (Otherwise, all functions would take the final for loop's colorName.) */
						(function() {
							var colorName = CSS.Lists.colors[j];

							/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
							CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return colorName;
										/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
									case "extract":
										var extracted;

										/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
										if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
											extracted = propertyValue;
										} else {
											var converted,
													colorNames = {
														black: "rgb(0, 0, 0)",
														blue: "rgb(0, 0, 255)",
														gray: "rgb(128, 128, 128)",
														green: "rgb(0, 128, 0)",
														red: "rgb(255, 0, 0)",
														white: "rgb(255, 255, 255)"
													};

											/* Convert color names to rgb. */
											if (/^[A-z]+$/i.test(propertyValue)) {
												if (colorNames[propertyValue] !== undefined) {
													converted = colorNames[propertyValue];
												} else {
													/* If an unmatched color name is provided, default to black. */
													converted = colorNames.black;
												}
												/* Convert hex values to rgb. */
											} else if (CSS.RegEx.isHex.test(propertyValue)) {
												converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
												/* If the provided color doesn't match any of the accepted color formats, default to black. */
											} else if (!(/^rgba?\(/i.test(propertyValue))) {
												converted = colorNames.black;
											}

											/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
											 repeated spaces (in case the value included spaces to begin with). */
											extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
										}

										/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
											extracted += " 1";
										}

										return extracted;
									case "inject":
										/* If we have a pattern then it might already have the right values */
										if (/^rgb/.test(propertyValue)) {
											return propertyValue;
										}

										/* If this is IE<=8 and an alpha component exists, strip it off. */
										if (IE <= 8) {
											if (propertyValue.split(" ").length === 4) {
												propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
											}
											/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										} else if (propertyValue.split(" ").length === 3) {
											propertyValue += " 1";
										}

										/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
										 on all values but the fourth (R, G, and B only accept whole numbers). */
										return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
								}
							};
						})();
					}

					/**************
					 Dimensions
					 **************/
					function augmentDimension(name, element, wantInner) {
						var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

						if (isBorderBox === (wantInner || false)) {
							/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
							var i,
									value,
									augment = 0,
									sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
									fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

							for (i = 0; i < fields.length; i++) {
								value = parseFloat(CSS.getPropertyValue(element, fields[i]));
								if (!isNaN(value)) {
									augment += value;
								}
							}
							return wantInner ? -augment : augment;
						}
						return 0;
					}
					function getDimension(name, wantInner) {
						return function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return name;
								case "extract":
									return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
								case "inject":
									return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
							}
						};
					}
					CSS.Normalizations.registered.innerWidth = getDimension("width", true);
					CSS.Normalizations.registered.innerHeight = getDimension("height", true);
					CSS.Normalizations.registered.outerWidth = getDimension("width");
					CSS.Normalizations.registered.outerHeight = getDimension("height");
				}
			},
			/************************
			 CSS Property Names
			 ************************/

			Names: {
				/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
				 Camelcasing is used to normalize property names between and across calls. */
				camelCase: function(property) {
					return property.replace(/-(\w)/g, function(match, subMatch) {
						return subMatch.toUpperCase();
					});
				},
				/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
				SVGAttribute: function(property) {
					var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

					/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
					if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
						SVGAttributes += "|transform";
					}

					return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
				},
				/* Determine whether a property should be set with a vendor prefix. */
				/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
				 If the property is not at all supported by the browser, return a false flag. */
				prefixCheck: function(property) {
					/* If this property has already been checked, return the cached value. */
					if (Velocity.State.prefixMatches[property]) {
						return [Velocity.State.prefixMatches[property], true];
					} else {
						var vendors = ["", "Webkit", "Moz", "ms", "O"];

						for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
							var propertyPrefixed;

							if (i === 0) {
								propertyPrefixed = property;
							} else {
								/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
								propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
									return match.toUpperCase();
								});
							}

							/* Check if the browser supports this property as prefixed. */
							if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
								/* Cache the match. */
								Velocity.State.prefixMatches[property] = propertyPrefixed;

								return [propertyPrefixed, true];
							}
						}

						/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
						return [property, false];
					}
				}
			},
			/************************
			 CSS Property Values
			 ************************/

			Values: {
				/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
				hexToRgb: function(hex) {
					var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
							longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
							rgbParts;

					hex = hex.replace(shortformRegex, function(m, r, g, b) {
						return r + r + g + g + b + b;
					});

					rgbParts = longformRegex.exec(hex);

					return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
				},
				isCSSNullValue: function(value) {
					/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
					 Thus, we check for both falsiness and these special strings. */
					/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
					 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
					/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
					return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
				},
				/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
				getUnitType: function(property) {
					if (/^(rotate|skew)/i.test(property)) {
						return "deg";
					} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
						/* The above properties are unitless. */
						return "";
					} else {
						/* Default to px for all other properties. */
						return "px";
					}
				},
				/* HTML elements default to an associated display type when they're not set to display:none. */
				/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
				getDisplayType: function(element) {
					var tagName = element && element.tagName.toString().toLowerCase();

					if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
						return "inline";
					} else if (/^(li)$/i.test(tagName)) {
						return "list-item";
					} else if (/^(tr)$/i.test(tagName)) {
						return "table-row";
					} else if (/^(table)$/i.test(tagName)) {
						return "table";
					} else if (/^(tbody)$/i.test(tagName)) {
						return "table-row-group";
						/* Default to "block" when no match is found. */
					} else {
						return "block";
					}
				},
				/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
				addClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.add(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							element.className += (element.className.length ? " " : "") + className;
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
						}
					}
				},
				removeClass: function(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.remove(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
						}
					}
				}
			},
			/****************************
			 Style Getting & Setting
			 ****************************/

			/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
				/* Get an element's computed property value. */
				/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
				 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
				 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
				function computePropertyValue(element, property) {
					/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
					 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
					 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
					 We subtract border and padding to get the sum of interior + scrollbar. */
					var computedValue = 0;

					/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
					 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
					 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
					 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
					if (IE <= 8) {
						computedValue = $.css(element, property); /* GET */
						/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
						 associated element so that it does not need to be refetched upon every GET. */
					} else {
						/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
						 toggle display to the element type's default value. */
						var toggleDisplay = false;

						if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
							toggleDisplay = true;
							CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
						}

						var revertDisplay = function() {
							if (toggleDisplay) {
								CSS.setPropertyValue(element, "display", "none");
							}
						};

						if (!forceStyleLookup) {
							if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
								revertDisplay();

								return contentBoxHeight;
							} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
								revertDisplay();

								return contentBoxWidth;
							}
						}

						var computedStyle;

						/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
						 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
						if (Data(element) === undefined) {
							computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If the computedStyle object has yet to be cached, do so now. */
						} else if (!Data(element).computedStyle) {
							computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If computedStyle is cached, use it. */
						} else {
							computedStyle = Data(element).computedStyle;
						}

						/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
						 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
						 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
						if (property === "borderColor") {
							property = "borderTopColor";
						}

						/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
						 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
						if (IE === 9 && property === "filter") {
							computedValue = computedStyle.getPropertyValue(property); /* GET */
						} else {
							computedValue = computedStyle[property];
						}

						/* Fall back to the property's style value (if defined) when computedValue returns nothing,
						 which can happen when the element hasn't been painted. */
						if (computedValue === "" || computedValue === null) {
							computedValue = element.style[property];
						}

						revertDisplay();
					}

					/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
					 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
					 effect as being set to 0, so no conversion is necessary.) */
					/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
					 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
					 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
					if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
						var position = computePropertyValue(element, "position"); /* GET */

						/* For absolute positioning, jQuery's $.position() only returns values for top and left;
						 right and bottom will have their "auto" value reverted to 0. */
						/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
						 Not a big deal since we're currently in a GET batch anyway. */
						if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
							/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
							computedValue = $(element).position()[property] + "px"; /* GET */
						}
					}

					return computedValue;
				}

				var propertyValue;

				/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
				 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
				if (CSS.Hooks.registered[property]) {
					var hook = property,
							hookRoot = CSS.Hooks.getRoot(hook);

					/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
					 query the DOM for the root property's value. */
					if (rootPropertyValue === undefined) {
						/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
						rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
					}

					/* If this root has a normalization registered, peform the associated normalization extraction. */
					if (CSS.Normalizations.registered[hookRoot]) {
						rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
					}

					/* Extract the hook's value. */
					propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

					/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
					 normalize the property's name and value, and handle the special case of transforms. */
					/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
					 numerical and therefore do not require normalization extraction. */
				} else if (CSS.Normalizations.registered[property]) {
					var normalizedPropertyName,
							normalizedPropertyValue;

					normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

					/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
					 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
					 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
					 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
					if (normalizedPropertyName !== "transform") {
						normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

						/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
						if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
							normalizedPropertyValue = CSS.Hooks.templates[property][1];
						}
					}

					propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
				}

				/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
				if (!/^[\d-]/.test(propertyValue)) {
					/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
					 their HTML attribute values instead of their CSS style values. */
					var data = Data(element);

					if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
						/* Since the height/width attribute values must be set manually, they don't reflect computed values.
						 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
						if (/^(height|width)$/i.test(property)) {
							/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
							try {
								propertyValue = element.getBBox()[property];
							} catch (error) {
								propertyValue = 0;
							}
							/* Otherwise, access the attribute value directly. */
						} else {
							propertyValue = element.getAttribute(property);
						}
					} else {
						propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
					}
				}

				/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
				 convert CSS null-values to an integer of value 0. */
				if (CSS.Values.isCSSNullValue(propertyValue)) {
					propertyValue = 0;
				}

				if (Velocity.debug >= 2) {
					console.log("Get " + property + ": " + propertyValue);
				}

				return propertyValue;
			},
			/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
				var propertyName = property;

				/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
				if (property === "scroll") {
					/* If a container option is present, scroll the container instead of the browser window. */
					if (scrollData.container) {
						scrollData.container["scroll" + scrollData.direction] = propertyValue;
						/* Otherwise, Velocity defaults to scrolling the browser window. */
					} else {
						if (scrollData.direction === "Left") {
							window.scrollTo(propertyValue, scrollData.alternateValue);
						} else {
							window.scrollTo(scrollData.alternateValue, propertyValue);
						}
					}
				} else {
					/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
					 Thus, for now, we merely cache transforms being SET. */
					if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
						/* Perform a normalization injection. */
						/* Note: The normalization logic handles the transformCache updating. */
						CSS.Normalizations.registered[property]("inject", element, propertyValue);

						propertyName = "transform";
						propertyValue = Data(element).transformCache[property];
					} else {
						/* Inject hooks. */
						if (CSS.Hooks.registered[property]) {
							var hookName = property,
									hookRoot = CSS.Hooks.getRoot(property);

							/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
							rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

							propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
							property = hookRoot;
						}

						/* Normalize names and values. */
						if (CSS.Normalizations.registered[property]) {
							propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
							property = CSS.Normalizations.registered[property]("name", element);
						}

						/* Assign the appropriate vendor prefix before performing an official style update. */
						propertyName = CSS.Names.prefixCheck(property)[0];

						/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
						 Try/catch is avoided for other browsers since it incurs a performance overhead. */
						if (IE <= 8) {
							try {
								element.style[propertyName] = propertyValue;
							} catch (error) {
								if (Velocity.debug) {
									console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
								}
							}
							/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
							/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
						} else {
							var data = Data(element);

							if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
								/* Note: For SVG attributes, vendor-prefixed property names are never used. */
								/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
								element.setAttribute(property, propertyValue);
							} else {
								element.style[propertyName] = propertyValue;
							}
						}

						if (Velocity.debug >= 2) {
							console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
						}
					}
				}

				/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
				return [propertyName, propertyValue];
			},
			/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
			/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
			flushTransformCache: function(element) {
				var transformString = "",
						data = Data(element);

				/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
				 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
				if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
					/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
					 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
					var getTransformFloat = function(transformProperty) {
						return parseFloat(CSS.getPropertyValue(element, transformProperty));
					};

					/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
					 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
					var SVGTransforms = {
						translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
						skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
						/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
						 (this behavior mimics the result of animating all these properties at once on HTML elements). */
						scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
						/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
						 defining the rotation's origin point. We ignore the origin values (default them to 0). */
						rotate: [getTransformFloat("rotateZ"), 0, 0]
					};

					/* Iterate through the transform properties in the user-defined property map order.
					 (This mimics the behavior of non-SVG transform animation.) */
					$.each(Data(element).transformCache, function(transformName) {
						/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
						 properties so that they match up with SVG's accepted transform properties. */
						if (/^translate/i.test(transformName)) {
							transformName = "translate";
						} else if (/^scale/i.test(transformName)) {
							transformName = "scale";
						} else if (/^rotate/i.test(transformName)) {
							transformName = "rotate";
						}

						/* Check that we haven't yet deleted the property from the SVGTransforms container. */
						if (SVGTransforms[transformName]) {
							/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
							transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

							/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
							 re-insert the same master property if we encounter another one of its axis-specific properties. */
							delete SVGTransforms[transformName];
						}
					});
				} else {
					var transformValue,
							perspective;

					/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
					$.each(Data(element).transformCache, function(transformName) {
						transformValue = Data(element).transformCache[transformName];

						/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
						if (transformName === "transformPerspective") {
							perspective = transformValue;
							return true;
						}

						/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
						if (IE === 9 && transformName === "rotateZ") {
							transformName = "rotate";
						}

						transformString += transformName + transformValue + " ";
					});

					/* If present, set the perspective subproperty first. */
					if (perspective) {
						transformString = "perspective" + perspective + " " + transformString;
					}
				}

				CSS.setPropertyValue(element, "transform", transformString);
			}
		};

		/* Register hooks and normalizations. */
		CSS.Hooks.register();
		CSS.Normalizations.register();

		/* Allow hook setting in the same fashion as jQuery's $.css(). */
		Velocity.hook = function(elements, arg2, arg3) {
			var value;

			elements = sanitizeElements(elements);

			$.each(elements, function(i, element) {
				/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/* Get property value. If an element set was passed in, only return the value for the first element. */
				if (arg3 === undefined) {
					if (value === undefined) {
						value = CSS.getPropertyValue(element, arg2);
					}
					/* Set property value. */
				} else {
					/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
					var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

					/* Transform properties don't automatically set. They have to be flushed to the DOM. */
					if (adjustedSet[0] === "transform") {
						Velocity.CSS.flushTransformCache(element);
					}

					value = adjustedSet;
				}
			});

			return value;
		};

		/*****************
		 Animation
		 *****************/

		var animate = function() {
			var opts;

			/******************
			 Call Chain
			 ******************/

			/* Logic for determining what to return to the call stack when exiting out of Velocity. */
			function getChain() {
				/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
				if (isUtility) {
					return promiseData.promise || null;
					/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
				} else {
					return elementsWrapped;
				}
			}

			/*************************
			 Arguments Assignment
			 *************************/

			/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
			 objects are defined on a container object that's passed in as Velocity's sole argument. */
			/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
			var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
					/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
					isUtility,
					/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
					 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
					elementsWrapped,
					argumentIndex;

			var elements,
					propertiesMap,
					options;

			/* Detect jQuery/Zepto elements being animated via the $.fn method. */
			if (Type.isWrapped(this)) {
				isUtility = false;

				argumentIndex = 0;
				elements = this;
				elementsWrapped = this;
				/* Otherwise, raw elements are being animated via the utility function. */
			} else {
				isUtility = true;

				argumentIndex = 1;
				elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
			}

			/***************
			 Promises
			 ***************/

			var promiseData = {
				promise: null,
				resolver: null,
				rejecter: null
			};

			/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
			 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
			 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
			 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
			/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
			 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
			 grouped together for the purposes of resolving and rejecting a promise. */
			if (isUtility && Velocity.Promise) {
				promiseData.promise = new Velocity.Promise(function(resolve, reject) {
					promiseData.resolver = resolve;
					promiseData.rejecter = reject;
				});
			}

			if (syntacticSugar) {
				propertiesMap = arguments[0].properties || arguments[0].p;
				options = arguments[0].options || arguments[0].o;
			} else {
				propertiesMap = arguments[argumentIndex];
				options = arguments[argumentIndex + 1];
			}

			elements = sanitizeElements(elements);

			if (!elements) {
				if (promiseData.promise) {
					if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
						promiseData.rejecter();
					} else {
						promiseData.resolver();
					}
				}
				return;
			}

			/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
			 single raw DOM element is passed in (which doesn't contain a length property). */
			var elementsLength = elements.length,
					elementsIndex = 0;

			/***************************
			 Argument Overloading
			 ***************************/

			/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
			 Overloading is detected by checking for the absence of an object being passed into options. */
			/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
			if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
				/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
				var startingArgumentPosition = argumentIndex + 1;

				options = {};

				/* Iterate through all options arguments */
				for (var i = startingArgumentPosition; i < arguments.length; i++) {
					/* Treat a number as a duration. Parse it out. */
					/* Note: The following RegEx will return true if passed an array with a number as its first item.
					 Thus, arrays are skipped from this check. */
					if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
						options.duration = arguments[i];
						/* Treat strings and arrays as easings. */
					} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
						options.easing = arguments[i];
						/* Treat a function as a complete callback. */
					} else if (Type.isFunction(arguments[i])) {
						options.complete = arguments[i];
					}
				}
			}

			/*********************
			 Action Detection
			 *********************/

			/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
			 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
			 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
			 instead of a properties map. */
			var action;

			switch (propertiesMap) {
				case "scroll":
					action = "scroll";
					break;

				case "reverse":
					action = "reverse";
					break;

				case "pause":

					/*******************
					 Action: Pause
					 *******************/

					var currentTime = (new Date()).getTime();

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						pauseDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {

						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Set call to paused */
										activeCall[5] = {
											resume: false
										};

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since pause creates no new tweens, exit out of Velocity. */
					return getChain();

				case "resume":

					/*******************
					 Action: Resume
					 *******************/

					/* Handle delay timers */
					$.each(elements, function(i, element) {
						resumeDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function(i, activeCall) {
						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Skip any calls that have never been paused */
								if (!activeCall[5]) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Flag a pause object to be resumed, which will occur during the next tick. In
										 addition, the pause object will at that time be deleted */
										activeCall[5].resume = true;

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}

					});

					/* Since resume creates no new tweens, exit out of Velocity. */
					return getChain();

				case "finish":
				case "finishAll":
				case "stop":
					/*******************
					 Action: Stop
					 *******************/

					/* Clear the currently-active delay on each targeted element. */
					$.each(elements, function(i, element) {
						if (Data(element) && Data(element).delayTimer) {
							/* Stop the timer from triggering its cached next() function. */
							clearTimeout(Data(element).delayTimer.setTimeout);

							/* Manually call the next() function so that the subsequent queue items can progress. */
							if (Data(element).delayTimer.next) {
								Data(element).delayTimer.next();
							}

							delete Data(element).delayTimer;
						}

						/* If we want to finish everything in the queue, we have to iterate through it
						 and call each function. This will make them active calls below, which will
						 cause them to be applied via the duration setting. */
						if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
							/* Iterate through the items in the element's queue. */
							$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
								/* The queue array can contain an "inprogress" string, which we skip. */
								if (Type.isFunction(item)) {
									item();
								}
							});

							/* Clearing the $.queue() array is achieved by resetting it to []. */
							$.queue(element, Type.isString(options) ? options : "", []);
						}
					});

					var callsToStop = [];

					/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
					 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
					 is stopped, the next item in its animation queue is immediately triggered. */
					/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
					 or a custom queue string can be passed in. */
					/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
					 regardless of the element's current queue state. */

					/* Iterate through every active call. */
					$.each(Velocity.State.calls, function(i, activeCall) {
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function(k, activeElement) {
								/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
								 clear calls associated with the relevant queue. */
								/* Call stopping logic works as follows:
								 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
								 - options === undefined --> stop current queue:"" call and all queue:false calls.
								 - options === false --> stop only queue:false calls.
								 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
								var queueName = (options === undefined) ? "" : options;

								if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function(l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {
										/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
										 due to the queue-clearing above. */
										if (options === true || Type.isString(options)) {
											/* Iterate through the items in the element's queue. */
											$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
												/* The queue array can contain an "inprogress" string, which we skip. */
												if (Type.isFunction(item)) {
													/* Pass the item's callback a flag indicating that we want to abort from the queue call.
													 (Specifically, the queue will resolve the call's associated promise then abort.)  */
													item(null, true);
												}
											});

											/* Clearing the $.queue() array is achieved by resetting it to []. */
											$.queue(element, Type.isString(options) ? options : "", []);
										}

										if (propertiesMap === "stop") {
											/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
											 changed to reflect the final value that the elements were actually tweened to. */
											/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
											 object. Also, queue:false animations can't be reversed. */
											var data = Data(element);
											if (data && data.tweensContainer && queueName !== false) {
												$.each(data.tweensContainer, function(m, activeTween) {
													activeTween.endValue = activeTween.currentValue;
												});
											}

											callsToStop.push(i);
										} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
											/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
											 they finish upon the next rAf tick then proceed with normal call completion logic. */
											activeCall[2].duration = 1;
										}
									}
								});
							});
						}
					});

					/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
					 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
					if (propertiesMap === "stop") {
						$.each(callsToStop, function(i, j) {
							completeCall(j, true);
						});

						if (promiseData.promise) {
							/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
							promiseData.resolver(elements);
						}
					}

					/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
					return getChain();

				default:
					/* Treat a non-empty plain object as a literal properties map. */
					if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
						action = "start";

						/****************
						 Redirects
						 ****************/

						/* Check if a string matches a registered redirect (see Redirects above). */
					} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
						opts = $.extend({}, options);

						var durationOriginal = opts.duration,
								delayOriginal = opts.delay || 0;

						/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
						if (opts.backwards === true) {
							elements = $.extend(true, [], elements).reverse();
						}

						/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
						$.each(elements, function(elementIndex, element) {
							/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
							if (parseFloat(opts.stagger)) {
								opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
							} else if (Type.isFunction(opts.stagger)) {
								opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
							}

							/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
							 the duration of each element's animation, using floors to prevent producing very short durations. */
							if (opts.drag) {
								/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
								opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

								/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
								 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
								 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
								opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
							}

							/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
							 reduce the opts checking logic required inside the redirect. */
							Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
						});

						/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
						 (The performance overhead up to this point is virtually non-existant.) */
						/* Note: The jQuery call chain is kept intact by returning the complete element set. */
						return getChain();
					} else {
						var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

						if (promiseData.promise) {
							promiseData.rejecter(new Error(abortError));
						} else if (window.console) {
							console.log(abortError);
						}

						return getChain();
					}
			}

			/**************************
			 Call-Wide Variables
			 **************************/

			/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
			 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
			 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
			 conversion metrics across Velocity animations that are not immediately consecutively chained. */
			var callUnitConversionData = {
				lastParent: null,
				lastPosition: null,
				lastFontSize: null,
				lastPercentToPxWidth: null,
				lastPercentToPxHeight: null,
				lastEmToPx: null,
				remToPx: null,
				vwToPx: null,
				vhToPx: null
			};

			/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
			 Velocity.State.calls array that is processed during animation ticking. */
			var call = [];

			/************************
			 Element Processing
			 ************************/

			/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
			 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
			 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
			 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 `elementArrayIndex` allows passing index of the element in the original array to value functions.
			 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
			 */
			function processElement(element, elementArrayIndex) {

				/*************************
				 Part I: Pre-Queueing
				 *************************/

				/***************************
				 Element-Wide Variables
				 ***************************/

				var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
						opts = $.extend({}, Velocity.defaults, options),
						/* A container for the processed data associated with each property in the propertyMap.
						 (Each property in the map produces its own "tween".) */
						tweensContainer = {},
						elementUnitConversionData;

				/******************
				 Element Init
				 ******************/

				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/******************
				 Option: Delay
				 ******************/

				/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
				/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
				 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
				if (parseFloat(opts.delay) && opts.queue !== false) {
					$.queue(element, opts.queue, function(next) {
						/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
						 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
						 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

						/* Temporarily store delayed elements to facilite access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								next();
							};
						})(callIndex);


						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(next, parseFloat(opts.delay)),
							next: delayComplete
						};
					});
				}

				/*********************
				 Option: Duration
				 *********************/

				/* Support for jQuery's named durations. */
				switch (opts.duration.toString().toLowerCase()) {
					case "fast":
						opts.duration = 200;
						break;

					case "normal":
						opts.duration = DURATION_DEFAULT;
						break;

					case "slow":
						opts.duration = 600;
						break;

					default:
						/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
						opts.duration = parseFloat(opts.duration) || 1;
				}

				/************************
				 Global Option: Mock
				 ************************/

				if (Velocity.mock !== false) {
					/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
					 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
					if (Velocity.mock === true) {
						opts.duration = opts.delay = 1;
					} else {
						opts.duration *= parseFloat(Velocity.mock) || 1;
						opts.delay *= parseFloat(Velocity.mock) || 1;
					}
				}

				/*******************
				 Option: Easing
				 *******************/

				opts.easing = getEasing(opts.easing, opts.duration);

				/**********************
				 Option: Callbacks
				 **********************/

				/* Callbacks must functions. Otherwise, default to null. */
				if (opts.begin && !Type.isFunction(opts.begin)) {
					opts.begin = null;
				}

				if (opts.progress && !Type.isFunction(opts.progress)) {
					opts.progress = null;
				}

				if (opts.complete && !Type.isFunction(opts.complete)) {
					opts.complete = null;
				}

				/*********************************
				 Option: Display & Visibility
				 *********************************/

				/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
				/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
				if (opts.display !== undefined && opts.display !== null) {
					opts.display = opts.display.toString().toLowerCase();

					/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
					if (opts.display === "auto") {
						opts.display = Velocity.CSS.Values.getDisplayType(element);
					}
				}

				if (opts.visibility !== undefined && opts.visibility !== null) {
					opts.visibility = opts.visibility.toString().toLowerCase();
				}

				/**********************
				 Option: mobileHA
				 **********************/

				/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
				 on animating elements. HA is removed from the element at the completion of its animation. */
				/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
				/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
				opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

				/***********************
				 Part II: Queueing
				 ***********************/

				/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
				 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
				/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
				 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
				function buildQueue(next) {
					var data, lastTweensContainer;

					/*******************
					 Option: Begin
					 *******************/

					/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
					if (opts.begin && elementsIndex === 0) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.begin.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/*****************************************
					 Tween Data Construction (for Scroll)
					 *****************************************/

					/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
					if (action === "scroll") {
						/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
						var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
								scrollOffset = parseFloat(opts.offset) || 0,
								scrollPositionCurrent,
								scrollPositionCurrentAlternate,
								scrollPositionEnd;

						/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
						 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
						if (opts.container) {
							/* Ensure that either a jQuery object or a raw DOM element was passed in. */
							if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
								/* Extract the raw DOM element from the jQuery wrapper. */
								opts.container = opts.container[0] || opts.container;
								/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
								 (due to the user's natural interaction with the page). */
								scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

								/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
								 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
								 the scroll container's current scroll position. */
								scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
								/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
							} else {
								opts.container = null;
							}
						} else {
							/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
							 the appropriate cached property names (which differ based on browser type). */
							scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
							/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
							scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

							/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
							 and therefore end values do not need to be compounded onto current values. */
							scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
						}

						/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
						tweensContainer = {
							scroll: {
								rootPropertyValue: false,
								startValue: scrollPositionCurrent,
								currentValue: scrollPositionCurrent,
								endValue: scrollPositionEnd,
								unitType: "",
								easing: opts.easing,
								scrollData: {
									container: opts.container,
									direction: scrollDirection,
									alternateValue: scrollPositionCurrentAlternate
								}
							},
							element: element
						};

						if (Velocity.debug) {
							console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
						}

						/******************************************
						 Tween Data Construction (for Reverse)
						 ******************************************/

						/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
						 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
						 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
						/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
						/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
						 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
						 as reverting to the element's values as they were prior to the previous *Velocity* call. */
					} else if (action === "reverse") {
						data = Data(element);

						/* Abort if there is no prior animation data to reverse to. */
						if (!data) {
							return;
						}

						if (!data.tweensContainer) {
							/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
							$.dequeue(element, opts.queue);

							return;
						} else {
							/*********************
							 Options Parsing
							 *********************/

							/* If the element was hidden via the display option in the previous call,
							 revert display to "auto" prior to reversal so that the element is visible again. */
							if (data.opts.display === "none") {
								data.opts.display = "auto";
							}

							if (data.opts.visibility === "hidden") {
								data.opts.visibility = "visible";
							}

							/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
							 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
							data.opts.loop = false;
							data.opts.begin = null;
							data.opts.complete = null;

							/* Since we're extending an opts object that has already been extended with the defaults options object,
							 we remove non-explicitly-defined properties that are auto-assigned values. */
							if (!options.easing) {
								delete opts.easing;
							}

							if (!options.duration) {
								delete opts.duration;
							}

							/* The opts object used for reversal is an extension of the options object optionally passed into this
							 reverse call plus the options used in the previous Velocity call. */
							opts = $.extend({}, data.opts, opts);

							/*************************************
							 Tweens Container Reconstruction
							 *************************************/

							/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
							lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

							/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
							for (var lastTween in lastTweensContainer) {
								/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
								if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
									var lastStartValue = lastTweensContainer[lastTween].startValue;

									lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
									lastTweensContainer[lastTween].endValue = lastStartValue;

									/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
									 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
									 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
									if (!Type.isEmptyObject(options)) {
										lastTweensContainer[lastTween].easing = opts.easing;
									}

									if (Velocity.debug) {
										console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
									}
								}
							}

							tweensContainer = lastTweensContainer;
						}

						/*****************************************
						 Tween Data Construction (for Start)
						 *****************************************/

					} else if (action === "start") {

						/*************************
						 Value Transferring
						 *************************/

						/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
						 while the element was in the process of being animated by Velocity, then this current call is safe to use
						 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
						 process whenever possible in order to avoid requerying the DOM. */
						/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
						 then the DOM is queried for the element's current values as a last resort. */
						/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

						data = Data(element);

						/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
						 to transfer over end values to use as start values. If it's set to true and there is a previous
						 Velocity call to pull values from, do so. */
						if (data && data.tweensContainer && data.isAnimating === true) {
							lastTweensContainer = data.tweensContainer;
						}

						/***************************
						 Tween Data Calculation
						 ***************************/

						/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
						/* Property map values can either take the form of 1) a single value representing the end value,
						 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
						 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
						 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
						var parsePropertyValue = function(valueData, skipResolvingEasing) {
							var endValue, easing, startValue;

							/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
							if (Type.isFunction(valueData)) {
								valueData = valueData.call(element, elementArrayIndex, elementsLength);
							}

							/* Handle the array format, which can be structured as one of three potential overloads:
							 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
							if (Type.isArray(valueData)) {
								/* endValue is always the first item in the array. Don't bother validating endValue's value now
								 since the ensuing property cycling logic does that. */
								endValue = valueData[0];

								/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
								 start value since easings can only be non-hex strings or arrays. */
								if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
									startValue = valueData[1];
									/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
								} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
									easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

									/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
									startValue = valueData[2];
								} else {
									startValue = valueData[1] || valueData[2];
								}
								/* Handle the single-value format. */
							} else {
								endValue = valueData;
							}

							/* Default to the call's easing if a per-property easing type was not defined. */
							if (!skipResolvingEasing) {
								easing = easing || opts.easing;
							}

							/* If functions were passed in as values, pass the function the current element as its context,
							 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
							if (Type.isFunction(endValue)) {
								endValue = endValue.call(element, elementArrayIndex, elementsLength);
							}

							if (Type.isFunction(startValue)) {
								startValue = startValue.call(element, elementArrayIndex, elementsLength);
							}

							/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
							return [endValue || 0, easing, startValue];
						};

						var fixPropertyValue = function(property, valueData) {
							/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
							var rootProperty = CSS.Hooks.getRoot(property),
									rootPropertyValue = false,
									/* Parse out endValue, easing, and startValue from the property's data. */
									endValue = valueData[0],
									easing = valueData[1],
									startValue = valueData[2],
									pattern;

							/**************************
							 Start Value Sourcing
							 **************************/

							/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
							 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
							 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
							/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
							 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
							if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
								if (Velocity.debug) {
									console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
								}
								return;
							}

							/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
							 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
							 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
							if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
								startValue = 0;
							}

							/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
							 for all of the current call's properties that were *also* animated in the previous call. */
							/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
							if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
								if (startValue === undefined) {
									startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
								}

								/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
								 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
								 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
								rootPropertyValue = data.rootPropertyValueCache[rootProperty];
								/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
							} else {
								/* Handle hooked properties. */
								if (CSS.Hooks.registered[property]) {
									if (startValue === undefined) {
										rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
										/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
										 getPropertyValue() will extract the hook from rootPropertyValue. */
										startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
										/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
										 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
										 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
										 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
									} else {
										/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
										rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
									}
									/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
								} else if (startValue === undefined) {
									startValue = CSS.getPropertyValue(element, property); /* GET */
								}
							}

							/**************************
							 Value Data Extraction
							 **************************/

							var separatedValue,
									endValueUnitType,
									startValueUnitType,
									operator = false;

							/* Separates a property value into its numeric value and its unit type. */
							var separateValue = function(property, value) {
								var unitType,
										numericValue;

								numericValue = (value || "0")
										.toString()
										.toLowerCase()
										/* Match the unit type at the end of the value. */
										.replace(/[%A-z]+$/, function(match) {
											/* Grab the unit type. */
											unitType = match;

											/* Strip the unit type off of value. */
											return "";
										});

								/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
								if (!unitType) {
									unitType = CSS.Values.getUnitType(property);
								}

								return [numericValue, unitType];
							};

							if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
								pattern = "";
								var iStart = 0, // index in startValue
										iEnd = 0, // index in endValue
										aStart = [], // array of startValue numbers
										aEnd = [], // array of endValue numbers
										inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
										inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
										inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

								startValue = CSS.Hooks.fixColors(startValue);
								endValue = CSS.Hooks.fixColors(endValue);
								while (iStart < startValue.length && iEnd < endValue.length) {
									var cStart = startValue[iStart],
											cEnd = endValue[iEnd];

									if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
										var tStart = cStart, // temporary character buffer
												tEnd = cEnd, // temporary character buffer
												dotStart = ".", // Make sure we can only ever match a single dot in a decimal
												dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

										while (++iStart < startValue.length) {
											cStart = startValue[iStart];
											if (cStart === dotStart) {
												dotStart = ".."; // Can never match two characters
											} else if (!/\d/.test(cStart)) {
												break;
											}
											tStart += cStart;
										}
										while (++iEnd < endValue.length) {
											cEnd = endValue[iEnd];
											if (cEnd === dotEnd) {
												dotEnd = ".."; // Can never match two characters
											} else if (!/\d/.test(cEnd)) {
												break;
											}
											tEnd += cEnd;
										}
										var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
												uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

										iStart += uStart.length;
										iEnd += uEnd.length;
										if (uStart === uEnd) {
											// Same units
											if (tStart === tEnd) {
												// Same numbers, so just copy over
												pattern += tStart + uStart;
											} else {
												// Different numbers, so store them
												pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
												aStart.push(parseFloat(tStart));
												aEnd.push(parseFloat(tEnd));
											}
										} else {
											// Different units, so put into a "calc(from + to)" and animate each side to/from zero
											var nStart = parseFloat(tStart),
													nEnd = parseFloat(tEnd);

											pattern += (inCalc < 5 ? "calc" : "") + "("
													+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
													+ " + "
													+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
													+ ")";
											if (nStart) {
												aStart.push(nStart);
												aEnd.push(0);
											}
											if (nEnd) {
												aStart.push(0);
												aEnd.push(nEnd);
											}
										}
									} else if (cStart === cEnd) {
										pattern += cStart;
										iStart++;
										iEnd++;
										// Keep track of being inside a calc()
										if (inCalc === 0 && cStart === "c"
												|| inCalc === 1 && cStart === "a"
												|| inCalc === 2 && cStart === "l"
												|| inCalc === 3 && cStart === "c"
												|| inCalc >= 4 && cStart === "("
												) {
											inCalc++;
										} else if ((inCalc && inCalc < 5)
												|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
											inCalc = 0;
										}
										// Keep track of being inside an rgb() / rgba()
										if (inRGB === 0 && cStart === "r"
												|| inRGB === 1 && cStart === "g"
												|| inRGB === 2 && cStart === "b"
												|| inRGB === 3 && cStart === "a"
												|| inRGB >= 3 && cStart === "("
												) {
											if (inRGB === 3 && cStart === "a") {
												inRGBA = 1;
											}
											inRGB++;
										} else if (inRGBA && cStart === ",") {
											if (++inRGBA > 3) {
												inRGB = inRGBA = 0;
											}
										} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
												|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
											inRGB = inRGBA = 0;
										}
									} else {
										inCalc = 0;
										// TODO: changing units, fixing colours
										break;
									}
								}
								if (iStart !== startValue.length || iEnd !== endValue.length) {
									if (Velocity.debug) {
										console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
									}
									pattern = undefined;
								}
								if (pattern) {
									if (aStart.length) {
										if (Velocity.debug) {
											console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
										}
										startValue = aStart;
										endValue = aEnd;
										endValueUnitType = startValueUnitType = "";
									} else {
										pattern = undefined;
									}
								}
							}

							if (!pattern) {
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];

								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
									operator = subMatch;

									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];

								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;

								/***************************************
								 Property-Specific Value Conversion
								 ***************************************/

								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = (endValue / 100) * 255;
										endValueUnitType = "";
									}
								}
							}

							/***************************
							 Unit Ratio Calculation
							 ***************************/

							/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
							 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
							 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
							 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
							 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
							 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
							/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
							 setting values with the target unit type then comparing the returned pixel value. */
							/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
							 of batching the SETs and GETs together upfront outweights the potential overhead
							 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
							/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
							var calculateUnitRatios = function() {

								/************************
								 Same Ratio Checks
								 ************************/

								/* The properties below are used to determine whether the element differs sufficiently from this call's
								 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
								 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
								 this is done to minimize DOM querying. */
								var sameRatioIndicators = {
									myParent: element.parentNode || document.body, /* GET */
									position: CSS.getPropertyValue(element, "position"), /* GET */
									fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
								},
										/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
										samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
										/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
										sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

								/* Store these ratio indicators call-wide for the next element to compare against. */
								callUnitConversionData.lastParent = sameRatioIndicators.myParent;
								callUnitConversionData.lastPosition = sameRatioIndicators.position;
								callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

								/***************************
								 Element-Specific Units
								 ***************************/

								/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
								 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
								var measurement = 100,
										unitRatios = {};

								if (!sameEmRatio || !samePercentRatio) {
									var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

									Velocity.init(dummy);
									sameRatioIndicators.myParent.appendChild(dummy);

									/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
									 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
									/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
									$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, "hidden");
									});
									Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
									Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
									Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

									/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
									$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
									});
									/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
									Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

									/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
									unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

									sameRatioIndicators.myParent.removeChild(dummy);
								} else {
									unitRatios.emToPx = callUnitConversionData.lastEmToPx;
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
								}

								/***************************
								 Element-Agnostic Units
								 ***************************/

								/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
								 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
								 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
								 so we calculate it now. */
								if (callUnitConversionData.remToPx === null) {
									/* Default to browsers' default fontSize of 16px in the case of 0. */
									callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
								}

								/* Similarly, viewport units are %-relative to the window's inner dimensions. */
								if (callUnitConversionData.vwToPx === null) {
									callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
									callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
								}

								unitRatios.remToPx = callUnitConversionData.remToPx;
								unitRatios.vwToPx = callUnitConversionData.vwToPx;
								unitRatios.vhToPx = callUnitConversionData.vhToPx;

								if (Velocity.debug >= 1) {
									console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
								}
								return unitRatios;
							};

							/********************
							 Unit Conversion
							 ********************/

							/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
							if (/[\/*]/.test(operator)) {
								endValueUnitType = startValueUnitType;
								/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
								 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
								 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
								 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
								/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
							} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
								/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
								/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
								 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
								 which remains past the point of the animation's completion. */
								if (endValue === 0) {
									endValueUnitType = startValueUnitType;
								} else {
									/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
									 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
									elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

									/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
									/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
									var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

									/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
									 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
									switch (startValueUnitType) {
										case "%":
											/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
											 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
											 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
											startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* px acts as our midpoint in the unit conversion process; do nothing. */
											break;

										default:
											startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
									}

									/* Invert the px ratios to convert into to the target unit. */
									switch (endValueUnitType) {
										case "%":
											startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* startValue is already in px, do nothing; we're done. */
											break;

										default:
											startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
									}
								}
							}

							/*********************
							 Relative Values
							 *********************/

							/* Operator logic must be performed last since it requires unit-normalized start and end values. */
							/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
							 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
							 50 points is added on top of the current % value. */
							switch (operator) {
								case "+":
									endValue = startValue + endValue;
									break;

								case "-":
									endValue = startValue - endValue;
									break;

								case "*":
									endValue = startValue * endValue;
									break;

								case "/":
									endValue = startValue / endValue;
									break;
							}

							/**************************
							 tweensContainer Push
							 **************************/

							/* Construct the per-property tween object, and push it to the element's tweensContainer. */
							tweensContainer[property] = {
								rootPropertyValue: rootPropertyValue,
								startValue: startValue,
								currentValue: startValue,
								endValue: endValue,
								unitType: endValueUnitType,
								easing: easing
							};
							if (pattern) {
								tweensContainer[property].pattern = pattern;
							}

							if (Velocity.debug) {
								console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
							}
						};

						/* Create a tween out of each property, and append its associated data to tweensContainer. */
						for (var property in propertiesMap) {

							if (!propertiesMap.hasOwnProperty(property)) {
								continue;
							}
							/* The original property name's format must be used for the parsePropertyValue() lookup,
							 but we then use its camelCase styling to normalize it for manipulation. */
							var propertyName = CSS.Names.camelCase(property),
									valueData = parsePropertyValue(propertiesMap[property]);

							/* Find shorthand color properties that have been passed a hex string. */
							/* Would be quicker to use CSS.Lists.colors.includes() if possible */
							if (_inArray(CSS.Lists.colors, propertyName)) {
								/* Parse the value data for each shorthand. */
								var endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2];

								if (CSS.RegEx.isHex.test(endValue)) {
									/* Convert the hex strings into their RGB component arrays. */
									var colorComponents = ["Red", "Green", "Blue"],
											endValueRGB = CSS.Values.hexToRgb(endValue),
											startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

									/* Inject the RGB component tweens into propertiesMap. */
									for (var i = 0; i < colorComponents.length; i++) {
										var dataArray = [endValueRGB[i]];

										if (easing) {
											dataArray.push(easing);
										}

										if (startValueRGB !== undefined) {
											dataArray.push(startValueRGB[i]);
										}

										fixPropertyValue(propertyName + colorComponents[i], dataArray);
									}
									/* If we have replaced a shortcut color value then don't update the standard property name */
									continue;
								}
							}
							fixPropertyValue(propertyName, valueData);
						}

						/* Along with its property data, store a reference to the element itself onto tweensContainer. */
						tweensContainer.element = element;
					}

					/*****************
					 Call Push
					 *****************/

					/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
					 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
					if (tweensContainer.element) {
						/* Apply the "velocity-animating" indicator class. */
						CSS.Values.addClass(element, "velocity-animating");

						/* The call array houses the tweensContainers for each element being animated in the current call. */
						call.push(tweensContainer);

						data = Data(element);

						if (data) {
							/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
							if (opts.queue === "") {

								data.tweensContainer = tweensContainer;
								data.opts = opts;
							}

							/* Switch on the element's animating flag. */
							data.isAnimating = true;
						}

						/* Once the final element in this call's element set has been processed, push the call array onto
						 Velocity.State.calls for the animation tick to immediately begin processing. */
						if (elementsIndex === elementsLength - 1) {
							/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
							 Anything on this call container is subjected to tick() processing. */
							Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

							/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
							if (Velocity.State.isTicking === false) {
								Velocity.State.isTicking = true;

								/* Start the tick loop. */
								tick();
							}
						} else {
							elementsIndex++;
						}
					}
				}

				/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
				if (opts.queue === false) {
					/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
					 we manually inject the delay property here with an explicit setTimeout. */
					if (opts.delay) {

						/* Temporarily store delayed elements to facilitate access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = (function(index) {
							return function() {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								buildQueue();
							};
						})(callIndex);

						Data(element).delayBegin = (new Date()).getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
							next: delayComplete
						};
					} else {
						buildQueue();
					}
					/* Otherwise, the call undergoes element queueing as normal. */
					/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
				} else {
					$.queue(element, opts.queue, function(next, clearQueue) {
						/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */
						if (clearQueue === true) {
							if (promiseData.promise) {
								promiseData.resolver(elements);
							}

							/* Do not continue with animation queueing. */
							return true;
						}

						/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
						 See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						buildQueue(next);
					});
				}

				/*********************
				 Auto-Dequeuing
				 *********************/

				/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
				 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
				 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
				 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
				 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
				/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
				 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
				/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
				 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
				if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
					$.dequeue(element);
				}
			}

			/**************************
			 Element Set Iteration
			 **************************/

			/* If the "nodeType" property exists on the elements variable, we're animating a single element.
			 Place it in an array so that $.each() can iterate over it. */
			$.each(elements, function(i, element) {
				/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
				if (Type.isNode(element)) {
					processElement(element, i);
				}
			});

			/******************
			 Option: Loop
			 ******************/

			/* The loop option accepts an integer indicating how many times the element should loop between the values in the
			 current call's properties map and the element's property values prior to this call. */
			/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
			 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
			 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
			opts = $.extend({}, Velocity.defaults, options);
			opts.loop = parseInt(opts.loop, 10);
			var reverseCallsCount = (opts.loop * 2) - 1;

			if (opts.loop) {
				/* Double the loop count to convert it into its appropriate number of "reverse" calls.
				 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
				for (var x = 0; x < reverseCallsCount; x++) {
					/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
					 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
					 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
					var reverseOptions = {
						delay: opts.delay,
						progress: opts.progress
					};

					/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
					 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
					if (x === reverseCallsCount - 1) {
						reverseOptions.display = opts.display;
						reverseOptions.visibility = opts.visibility;
						reverseOptions.complete = opts.complete;
					}

					animate(elements, "reverse", reverseOptions);
				}
			}

			/***************
			 Chaining
			 ***************/

			/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
			return getChain();
		};

		/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
		Velocity = $.extend(animate, Velocity);
		/* For legacy support, also expose the literal animate method. */
		Velocity.animate = animate;

		/**************
		 Timing
		 **************/

		/* Ticker function. */
		var ticker = window.requestAnimationFrame || rAFShim;

		/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
		 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
		 devices to avoid wasting battery power on inactive tabs. */
		/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
		if (!Velocity.State.isMobile && document.hidden !== undefined) {
			var updateTicker = function() {
				/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
				if (document.hidden) {
					ticker = function(callback) {
						/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
						return setTimeout(function() {
							callback(true);
						}, 16);
					};

					/* The rAF loop has been paused by the browser, so we manually restart the tick. */
					tick();
				} else {
					ticker = window.requestAnimationFrame || rAFShim;
				}
			};

			/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
			updateTicker();

			/* And then run check again every time visibility changes */
			document.addEventListener("visibilitychange", updateTicker);
		}

		/************
		 Tick
		 ************/

		/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
		function tick(timestamp) {
			/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
			 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
			 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
			 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
			 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
			 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
			if (timestamp) {
				/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
				 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
				 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
				var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

				/********************
				 Call Iteration
				 ********************/

				var callsLength = Velocity.State.calls.length;

				/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
				 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
				 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
				if (callsLength > 10000) {
					Velocity.State.calls = compactSparseArray(Velocity.State.calls);
					callsLength = Velocity.State.calls.length;
				}

				/* Iterate through each active call. */
				for (var i = 0; i < callsLength; i++) {
					/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
					if (!Velocity.State.calls[i]) {
						continue;
					}

					/************************
					 Call-Wide Variables
					 ************************/

					var callContainer = Velocity.State.calls[i],
							call = callContainer[0],
							opts = callContainer[2],
							timeStart = callContainer[3],
							firstTick = !!timeStart,
							tweenDummyValue = null,
							pauseObject = callContainer[5],
							millisecondsEllapsed = callContainer[6];



					/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
					 We assign timeStart now so that its value is as close to the real animation start time as possible.
					 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
					 between that time and now would cause the first few frames of the tween to be skipped since
					 percentComplete is calculated relative to timeStart.) */
					/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
					 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
					 same style value as the element's current value. */
					if (!timeStart) {
						timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
					}

					/* If a pause object is present, skip processing unless it has been set to resume */
					if (pauseObject) {
						if (pauseObject.resume === true) {
							/* Update the time start to accomodate the paused completion amount */
							timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

							/* Remove pause object after processing */
							callContainer[5] = null;
						} else {
							continue;
						}
					}

					millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

					/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
					 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
					 Accordingly, we ensure that percentComplete does not exceed 1. */
					var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

					/**********************
					 Element Iteration
					 **********************/

					/* For every call, iterate through each of the elements in its set. */
					for (var j = 0, callLength = call.length; j < callLength; j++) {
						var tweensContainer = call[j],
								element = tweensContainer.element;

						/* Check to see if this element has been deleted midway through the animation by checking for the
						 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
						if (!Data(element)) {
							continue;
						}

						var transformPropertyExists = false;

						/**********************************
						 Display & Visibility Toggling
						 **********************************/

						/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
						 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
						if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
							if (opts.display === "flex") {
								var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

								$.each(flexValues, function(i, flexValue) {
									CSS.setPropertyValue(element, "display", flexValue);
								});
							}

							CSS.setPropertyValue(element, "display", opts.display);
						}

						/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}

						/************************
						 Property Iteration
						 ************************/

						/* For every element, iterate through each property. */
						for (var property in tweensContainer) {
							/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
							if (tweensContainer.hasOwnProperty(property) && property !== "element") {
								var tween = tweensContainer[property],
										currentValue,
										/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
										 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
										easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

								/******************************
								 Current Value Calculation
								 ******************************/

								if (Type.isString(tween.pattern)) {
									var patternReplace = percentComplete === 1 ?
											function($0, index, round) {
												var result = tween.endValue[index];

												return round ? Math.round(result) : result;
											} :
											function($0, index, round) {
												var startValue = tween.startValue[index],
														tweenDelta = tween.endValue[index] - startValue,
														result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

												return round ? Math.round(result) : result;
											};

									currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
								} else if (percentComplete === 1) {
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									currentValue = tween.endValue;
								} else {
									/* Otherwise, calculate currentValue based on the current delta from startValue. */
									var tweenDelta = tween.endValue - tween.startValue;

									currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
									/* If no value change is occurring, don't proceed with DOM updating. */
								}
								if (!firstTick && (currentValue === tween.currentValue)) {
									continue;
								}

								tween.currentValue = currentValue;

								/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
								 it can be passed into the progress callback. */
								if (property === "tween") {
									tweenDummyValue = currentValue;
								} else {
									/******************
									 Hooks: Part I
									 ******************/
									var hookRoot;

									/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
									 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
									 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
									 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
									 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
									if (CSS.Hooks.registered[property]) {
										hookRoot = CSS.Hooks.getRoot(property);

										var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

										if (rootPropertyValueCache) {
											tween.rootPropertyValue = rootPropertyValueCache;
										}
									}

									/*****************
									 DOM Update
									 *****************/

									/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
									/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
									var adjustedSetData = CSS.setPropertyValue(element, /* SET */
											property,
											tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
											tween.rootPropertyValue,
											tween.scrollData);

									/*******************
									 Hooks: Part II
									 *******************/

									/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
									if (CSS.Hooks.registered[property]) {
										/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
										if (CSS.Normalizations.registered[hookRoot]) {
											Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
										} else {
											Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
										}
									}

									/***************
									 Transforms
									 ***************/

									/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
									if (adjustedSetData[0] === "transform") {
										transformPropertyExists = true;
									}

								}
							}
						}

						/****************
						 mobileHA
						 ****************/

						/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
						 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
						if (opts.mobileHA) {
							/* Don't set the null transform hack if we've already done so. */
							if (Data(element).transformCache.translate3d === undefined) {
								/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
								Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

								transformPropertyExists = true;
							}
						}

						if (transformPropertyExists) {
							CSS.flushTransformCache(element);
						}
					}

					/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
					 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
					if (opts.display !== undefined && opts.display !== "none") {
						Velocity.State.calls[i][2].display = false;
					}
					if (opts.visibility !== undefined && opts.visibility !== "hidden") {
						Velocity.State.calls[i][2].visibility = false;
					}

					/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
					if (opts.progress) {
						opts.progress.call(callContainer[1],
								callContainer[1],
								percentComplete,
								Math.max(0, (timeStart + opts.duration) - timeCurrent),
								timeStart,
								tweenDummyValue);
					}

					/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
					if (percentComplete === 1) {
						completeCall(i);
					}
				}
			}

			/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
			if (Velocity.State.isTicking) {
				ticker(tick);
			}
		}

		/**********************
		 Call Completion
		 **********************/

		/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
		function completeCall(callIndex, isStopped) {
			/* Ensure the call exists. */
			if (!Velocity.State.calls[callIndex]) {
				return false;
			}

			/* Pull the metadata from the call. */
			var call = Velocity.State.calls[callIndex][0],
					elements = Velocity.State.calls[callIndex][1],
					opts = Velocity.State.calls[callIndex][2],
					resolver = Velocity.State.calls[callIndex][4];

			var remainingCallsExist = false;

			/*************************
			 Element Finalization
			 *************************/

			for (var i = 0, callLength = call.length; i < callLength; i++) {
				var element = call[i].element;

				/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
				/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
				/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
				if (!isStopped && !opts.loop) {
					if (opts.display === "none") {
						CSS.setPropertyValue(element, "display", opts.display);
					}

					if (opts.visibility === "hidden") {
						CSS.setPropertyValue(element, "visibility", opts.visibility);
					}
				}

				/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
				 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
				 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
				 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
				 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
				var data = Data(element);

				if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
					/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
					if (data) {
						data.isAnimating = false;
						/* Clear the element's rootPropertyValueCache, which will become stale. */
						data.rootPropertyValueCache = {};

						var transformHAPropertyExists = false;
						/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
						$.each(CSS.Lists.transforms3D, function(i, transformName) {
							var defaultValue = /^scale/.test(transformName) ? 1 : 0,
									currentValue = data.transformCache[transformName];

							if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
								transformHAPropertyExists = true;

								delete data.transformCache[transformName];
							}
						});

						/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
						if (opts.mobileHA) {
							transformHAPropertyExists = true;
							delete data.transformCache.translate3d;
						}

						/* Flush the subproperty removals to the DOM. */
						if (transformHAPropertyExists) {
							CSS.flushTransformCache(element);
						}

						/* Remove the "velocity-animating" indicator class. */
						CSS.Values.removeClass(element, "velocity-animating");
					}
				}

				/*********************
				 Option: Complete
				 *********************/

				/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
				/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
				if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
					/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
					try {
						opts.complete.call(elements, elements);
					} catch (error) {
						setTimeout(function() {
							throw error;
						}, 1);
					}
				}

				/**********************
				 Promise Resolving
				 **********************/

				/* Note: Infinite loops don't return promises. */
				if (resolver && opts.loop !== true) {
					resolver(elements);
				}

				/****************************
				 Option: Loop (Infinite)
				 ****************************/

				if (data && opts.loop === true && !isStopped) {
					/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
					 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
					$.each(data.tweensContainer, function(propertyName, tweenContainer) {
						if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
							var oldStartValue = tweenContainer.startValue;

							tweenContainer.startValue = tweenContainer.endValue;
							tweenContainer.endValue = oldStartValue;
						}

						if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
							tweenContainer.endValue = 0;
							tweenContainer.startValue = 100;
						}
					});

					Velocity(element, "reverse", {loop: true, delay: opts.delay});
				}

				/***************
				 Dequeueing
				 ***************/

				/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
				 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
				 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
				if (opts.queue !== false) {
					$.dequeue(element, opts.queue);
				}
			}

			/************************
			 Calls Array Cleanup
			 ************************/

			/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
			 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
			Velocity.State.calls[callIndex] = false;

			/* Iterate through the calls array to determine if this was the final in-progress animation.
			 If so, set a flag to end ticking and clear the calls array. */
			for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
				if (Velocity.State.calls[j] !== false) {
					remainingCallsExist = true;

					break;
				}
			}

			if (remainingCallsExist === false) {
				/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
				Velocity.State.isTicking = false;

				/* Clear the calls array so that its length is reset. */
				delete Velocity.State.calls;
				Velocity.State.calls = [];
			}
		}

		/******************
		 Frameworks
		 ******************/

		/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
		 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
		 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
		 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
		 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
		global.Velocity = Velocity;

		if (global !== window) {
			/* Assign the element function to Velocity's core animate() method. */
			global.fn.velocity = animate;
			/* Assign the object function's defaults to Velocity's global defaults object. */
			global.fn.velocity.defaults = Velocity.defaults;
		}

		/***********************
		 Packaged Redirects
		 ***********************/

		/* slideUp, slideDown */
		$.each(["Down", "Up"], function(i, direction) {
			Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						begin = opts.begin,
						complete = opts.complete,
						inlineValues = {},
						computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

				if (opts.display === undefined) {
					/* Show the element before slideDown begins and hide the element after slideUp completes. */
					/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
					opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
				}

				opts.begin = function() {
					/* If the user passed in a begin callback, fire it now. */
					if (elementsIndex === 0 && begin) {
						begin.call(elements, elements);
					}

					/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
					for (var property in computedValues) {
						if (!computedValues.hasOwnProperty(property)) {
							continue;
						}
						inlineValues[property] = element.style[property];

						/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
						 use forcefeeding to start from computed values and animate down to 0. */
						var propertyValue = CSS.getPropertyValue(element, property);
						computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
					}

					/* Force vertical overflow content to clip so that sliding works as expected. */
					inlineValues.overflow = element.style.overflow;
					element.style.overflow = "hidden";
				};

				opts.complete = function() {
					/* Reset element to its pre-slide inline values once its slide animation is complete. */
					for (var property in inlineValues) {
						if (inlineValues.hasOwnProperty(property)) {
							element.style[property] = inlineValues[property];
						}
					}

					/* If the user passed in a complete callback, fire it now. */
					if (elementsIndex === elementsSize - 1) {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					}
				};

				Velocity(element, computedValues, opts);
			};
		});

		/* fadeIn, fadeOut */
		$.each(["In", "Out"], function(i, direction) {
			Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
						complete = opts.complete,
						propertiesMap = {opacity: (direction === "In") ? 1 : 0};

				/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
				 callbacks by firing them only when the final element has been reached. */
				if (elementsIndex !== 0) {
					opts.begin = null;
				}
				if (elementsIndex !== elementsSize - 1) {
					opts.complete = null;
				} else {
					opts.complete = function() {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
				}

				/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
				/* Note: We allow users to pass in "null" to skip display setting altogether. */
				if (opts.display === undefined) {
					opts.display = (direction === "In" ? "auto" : "none");
				}

				Velocity(this, propertiesMap, opts);
			};
		});

		return Velocity;
	}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
}));

/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjAxNDQ1NGQ3ZGVmODhjYzhiMDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWxvY2l0eS1hbmltYXRlL3ZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbIkRlY2siLCJyZXF1aXJlIiwiZGVjayIsInNodWZmbGVCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZHJhd0J1dHRvbiIsInNvcnRCdXR0b24iLCJyZXNldEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaHVmZmxlIiwiZHJhd0NhcmQiLCJzb3J0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJDYXJkIiwic3VpdHMiLCJyYW5rcyIsImlkIiwiZGl2IiwiX2NhcmRzIiwiX2RyYXduIiwiYWRkQ2FyZHMiLCJkaXNwbGF5RGVjayIsImkiLCJzdWl0IiwicmFuayIsInB1c2giLCJtIiwibGVuZ3RoIiwidCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNhcmQiLCJzaHVmZmxlQW5pbWF0aW9uIiwicm90YXRpb24iLCJwb3NpdGlvbkNhcmQiLCJ2aXNpYmxlIiwic2V0VGltZW91dCIsImEiLCJiIiwiaW5kZXhPZiIsImluZGV4IiwiZ2V0SW5kZXgiLCJkaXNwbGF5Q2FyZHMiLCJkaXNwbGF5IiwicG9wIiwiZGlzcGxheURyYXduIiwic3RhcnQiLCJpbnRlcnZhbCIsInRvcCIsImxlZnQiLCJkaXN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJBbmltYXRpb25zIiwiX3N1aXQiLCJfcmFuayIsIl92aXNpYmxlIiwiX3RvcCIsIl9sZWZ0IiwiX2luZGV4IiwiX3JvdGF0aW9uIiwiYXBwZW5kIiwiY2FsbGJhY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ6SW5kZXgiLCJ0cmFuc2Zvcm0iLCJpbm5lckhUTUwiLCJ0ZW1wbGF0ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJWZWxvY2l0eSIsImVsZW1lbnQiLCJwbHVzT3JNaW51cyIsImR1cmF0aW9uIiwiZGVsYXkiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLElBQU1BLE9BQU8sbUJBQUFDLENBQVEsQ0FBUixDQUFiOztBQUNBLElBQUlDLE9BQU8sSUFBSUYsSUFBSixDQUFTLE9BQVQsQ0FBWDtBQUVBLElBQUlHLGdCQUFnQkMsU0FBU0MsY0FBVCxDQUF3QixTQUF4QixDQUFwQjtBQUNBLElBQUlDLGFBQWFGLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakI7QUFDQSxJQUFJRSxhQUFhSCxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWpCO0FBQ0EsSUFBSUcsY0FBY0osU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFsQjtBQUVBRixjQUFjTSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFTQyxDQUFULEVBQVk7QUFDaERBLElBQUVDLGNBQUY7QUFDQVQsT0FBS1UsT0FBTDtBQUNILENBSEQ7QUFLQU4sV0FBV0csZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzdDQSxJQUFFQyxjQUFGO0FBQ0FULE9BQUtXLFFBQUw7QUFDSCxDQUhEO0FBS0FOLFdBQVdFLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVNDLENBQVQsRUFBWTtBQUM3Q0EsSUFBRUMsY0FBRjtBQUNBVCxPQUFLWSxJQUFMO0FBQ0gsQ0FIRDtBQUtBTixZQUFZQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFTQyxDQUFULEVBQVk7QUFDOUNBLElBQUVDLGNBQUY7QUFDQUksV0FBU0MsTUFBVDtBQUNILENBSEQsRTs7Ozs7Ozs7Ozs7O0FDdkJBLElBQU1DLE9BQU8sbUJBQUFoQixDQUFRLENBQVIsQ0FBYjs7QUFFQSxJQUFNaUIsUUFBUSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCLFNBQTNCLENBQWQ7QUFDQSxJQUFNQyxRQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEMsRUFBdUMsR0FBdkMsRUFBNEMsR0FBNUMsQ0FBZDs7SUFFTW5CLEk7OztBQUNGLGdCQUFZb0IsRUFBWixFQUFnQjtBQUFBOztBQUNaLFNBQUtDLEdBQUwsR0FBV2pCLFNBQVNDLGNBQVQsQ0FBd0JlLEVBQXhCLENBQVg7QUFDQSxTQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRUEsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLFdBQUw7QUFDSDs7OztBQVVEOytCQUNXO0FBQ1AsVUFBSUMsSUFBSSxDQUFSOztBQUNBLDRCQUFpQlIsS0FBakIsZUFBd0I7QUFBbkIsWUFBSVMsT0FBUVQsS0FBUixJQUFKOztBQUNELGdDQUFpQkMsS0FBakIsZ0JBQXdCO0FBQW5CLGNBQUlTLE9BQVFULEtBQVIsS0FBSjs7QUFDRCxlQUFLRyxNQUFMLENBQVlPLElBQVosQ0FBaUIsSUFBSVosSUFBSixDQUFTLEtBQUtJLEdBQWQsRUFBbUJLLENBQW5CLEVBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsQ0FBakI7O0FBQ0FGO0FBQ0g7QUFDSjtBQUNKOzs7OEJBRVM7QUFDTixVQUFJSSxJQUFJLEtBQUtSLE1BQUwsQ0FBWVMsTUFBcEI7QUFDQSxVQUFJQyxDQUFKLEVBQU9OLENBQVAsQ0FGTSxDQUlOOztBQUNBLGFBQU9JLENBQVAsRUFBVTtBQUNOO0FBQ0FKLFlBQUlPLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQkwsR0FBM0IsQ0FBSixDQUZNLENBSU47O0FBQ0FFLFlBQUksS0FBS1YsTUFBTCxDQUFZUSxDQUFaLENBQUo7QUFDQSxhQUFLUixNQUFMLENBQVlRLENBQVosSUFBaUIsS0FBS1IsTUFBTCxDQUFZSSxDQUFaLENBQWpCO0FBQ0EsYUFBS0osTUFBTCxDQUFZSSxDQUFaLElBQWlCTSxDQUFqQjtBQUNILE9BYkssQ0FlTjs7O0FBZk07QUFBQTtBQUFBOztBQUFBO0FBZ0JOLDZCQUFpQixLQUFLVixNQUF0Qiw4SEFBOEI7QUFBQSxjQUFyQmMsS0FBcUI7O0FBQzFCQSxnQkFBS0MsZ0JBQUw7QUFDSDtBQWxCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJUOzs7NkJBRVFYLEMsRUFBRztBQUNSLGFBQU8sS0FBS0osTUFBTCxDQUFZUyxNQUFaLElBQXNCLEtBQUtSLE1BQUwsQ0FBWVEsTUFBWixHQUFxQkwsQ0FBM0MsQ0FBUDtBQUNIOzs7MkJBRU07QUFBQTs7QUFDSDtBQUNBLFVBQUlBLElBQUksQ0FBUjs7QUFGRyxpQ0FHTVUsSUFITjtBQUlDQSxhQUFLRSxRQUFMLEdBQWdCLENBQWhCO0FBQ0FGLGFBQUtHLFlBQUwsQ0FBa0IsWUFBVztBQUN6QkgsZUFBS0ksT0FBTCxHQUFlLEtBQWY7QUFDQUosZUFBS0csWUFBTDtBQUNILFNBSEQ7QUFMRDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHSCw4QkFBaUIsS0FBS2hCLE1BQXRCLG1JQUE4QjtBQUFBLGNBQXJCYSxJQUFxQjs7QUFBQSxnQkFBckJBLElBQXFCO0FBTTdCLFNBVEUsQ0FXSDs7QUFYRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlISyxpQkFBVyxZQUFNO0FBQ2I7QUFDQSxjQUFLbEIsTUFBTCxDQUFZVCxJQUFaLENBQWlCLFVBQVU0QixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDN0IsY0FBSXpCLE1BQU0wQixPQUFOLENBQWNGLEVBQUVmLElBQWhCLElBQXdCVCxNQUFNMEIsT0FBTixDQUFjRCxFQUFFaEIsSUFBaEIsQ0FBeEIsSUFDQ1QsTUFBTTBCLE9BQU4sQ0FBY0YsRUFBRWYsSUFBaEIsTUFBMEJULE1BQU0wQixPQUFOLENBQWNELEVBQUVoQixJQUFoQixDQUExQixJQUFtRFIsTUFBTXlCLE9BQU4sQ0FBY0YsRUFBRWQsSUFBaEIsSUFBd0JULE1BQU15QixPQUFOLENBQWNELEVBQUVmLElBQWhCLENBRGhGLEVBQ3dHO0FBQ3BHLG1CQUFPLENBQUMsQ0FBUjtBQUNIOztBQUNELGlCQUFPLENBQVA7QUFDSCxTQU5ELEVBRmEsQ0FVYjs7O0FBQ0FGLFlBQUksQ0FBSjtBQVhhO0FBQUE7QUFBQTs7QUFBQTtBQVliLGdDQUFpQixNQUFLSCxNQUF0QixtSUFBOEI7QUFBQSxnQkFBckJhLE1BQXFCO0FBQzFCQSxtQkFBS1MsS0FBTCxHQUFhLE1BQUtDLFFBQUwsQ0FBY3BCLENBQWQsQ0FBYjtBQUNBVSxtQkFBS0ksT0FBTCxHQUFlLElBQWY7O0FBQ0FKLG1CQUFLRyxZQUFMOztBQUNBYjtBQUNILFdBakJZLENBbUJiOztBQW5CYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CYmUsbUJBQVcsWUFBTTtBQUNiLGdCQUFLTSxZQUFMO0FBQ0gsU0FGRCxFQUVHLEdBRkg7QUFHSCxPQXZCRCxFQXVCRyxJQXZCSDtBQXdCSDs7OytCQUV3QjtBQUFBLFVBQWhCQyxPQUFnQix1RUFBTixJQUFNOztBQUNyQixVQUFHLEtBQUsxQixNQUFMLENBQVlTLE1BQVosR0FBcUIsQ0FBeEIsRUFBMkI7QUFDdkI7QUFDQSxhQUFLUixNQUFMLENBQVlNLElBQVosQ0FBaUIsS0FBS1AsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWVMsTUFBWixHQUFxQixDQUFqQyxDQUFqQixFQUZ1QixDQUl2Qjs7O0FBQ0EsYUFBS1QsTUFBTCxDQUFZMkIsR0FBWjs7QUFFQSxZQUFHRCxPQUFILEVBQVk7QUFDUixlQUFLRCxZQUFMO0FBQ0g7QUFDSjtBQUNKOzs7bUNBRWM7QUFDWCxXQUFLRyxZQUFMO0FBQ0EsV0FBS3pCLFdBQUw7QUFDSCxLLENBRUQ7Ozs7bUNBQ2U7QUFDWCxVQUFJYSxXQUFXLENBQWY7QUFDQSxVQUFJYSxRQUFRLENBQUMsRUFBYjtBQUNBLFVBQUlwQixTQUFTLEtBQUtSLE1BQUwsQ0FBWVEsTUFBekIsQ0FIVyxDQUtYOztBQUNBLFVBQUlxQixXQUFXLE1BQU0sS0FBSzdCLE1BQUwsQ0FBWVEsTUFBakM7O0FBQ0EsVUFBR3FCLFdBQVcsRUFBZCxFQUFrQjtBQUNkQSxtQkFBVyxFQUFYO0FBQ0g7O0FBRUQsVUFBSTFCLElBQUksQ0FBUjtBQVhXO0FBQUE7QUFBQTs7QUFBQTtBQVlYLDhCQUFpQixLQUFLSCxNQUF0QixtSUFBOEI7QUFBQSxjQUFyQmEsTUFBcUI7QUFDMUI7QUFDQUUscUJBQVcsQ0FBQ1osSUFBSTBCLFFBQUosR0FBaUJyQixTQUFTLENBQVYsR0FBZXFCLFFBQWhDLElBQTZDLENBQUMsQ0FBekQsQ0FGMEIsQ0FJMUI7O0FBQ0FoQixpQkFBS2lCLEdBQUwsR0FBVyxDQUFDLEdBQVo7QUFDQWpCLGlCQUFLa0IsSUFBTCxHQUFZLENBQVo7QUFDQWxCLGlCQUFLRSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBRixpQkFBS0ksT0FBTCxHQUFlLElBQWY7QUFDQUosaUJBQUtTLEtBQUwsR0FBYSxLQUFLQyxRQUFMLENBQWNwQixDQUFkLENBQWIsQ0FUMEIsQ0FXMUI7O0FBQ0FVLGlCQUFLRyxZQUFMOztBQUNBYjtBQUNIO0FBMUJVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQmQ7OztrQ0FFYTtBQUNWLFVBQUlBLElBQUksQ0FBUjtBQURVO0FBQUE7QUFBQTs7QUFBQTtBQUVWLDhCQUFpQixLQUFLSixNQUF0QixtSUFBOEI7QUFBQSxjQUFyQmMsTUFBcUI7QUFDMUI7QUFDQSxjQUFJbUIsV0FBVzdCLElBQUksR0FBbkI7QUFDQVUsaUJBQUtpQixHQUFMLEdBQVdFLFFBQVg7QUFDQW5CLGlCQUFLa0IsSUFBTCxHQUFZQyxRQUFaO0FBQ0FuQixpQkFBS1MsS0FBTCxHQUFhbkIsQ0FBYjtBQUNBVSxpQkFBS0UsUUFBTCxHQUFnQixDQUFoQjtBQUNBRixpQkFBS0ksT0FBTCxHQUFlLEtBQWY7O0FBQ0FKLGlCQUFLRyxZQUFMOztBQUNBYjtBQUNIO0FBWlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFiOzs7d0JBaEpXO0FBQ1IsYUFBTyxLQUFLSixNQUFaO0FBQ0g7Ozt3QkFFVztBQUNSLGFBQU8sS0FBS0MsTUFBWjtBQUNIOzs7Ozs7QUE2SUxpQyxPQUFPQyxPQUFQLEdBQWlCekQsSUFBakIsQzs7Ozs7Ozs7Ozs7O0FDbEtBLElBQU0wRCxhQUFhLG1CQUFBekQsQ0FBUSxDQUFSLENBQW5COztJQUVNZ0IsSTs7O0FBQ0YsZ0JBQVlmLElBQVosRUFBa0J3QixDQUFsQixFQUFxQkMsSUFBckIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUE7O0FBQzdCLFNBQUsxQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLeUQsS0FBTCxHQUFhaEMsSUFBYjtBQUNBLFNBQUtpQyxLQUFMLEdBQWFoQyxJQUFiO0FBQ0EsU0FBS2lDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjdEMsQ0FBZDtBQUNBLFNBQUt1QyxTQUFMLEdBQWlCLENBQWpCO0FBRUEsU0FBS0MsTUFBTDtBQUNIOzs7O0FBc0NEO21DQUM4QjtBQUFBLFVBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUMxQjtBQUNBLFVBQUcsS0FBS04sUUFBUixFQUFrQjtBQUNkLGFBQUt4QyxHQUFMLENBQVMsQ0FBVCxFQUFZK0MsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsQ0FBdEMsRUFBeUNDLFNBQXpDLENBQW1EQyxHQUFuRCxDQUF1RCxlQUF2RDtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtqRCxHQUFMLENBQVMsQ0FBVCxFQUFZK0MsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsQ0FBdEMsRUFBeUNDLFNBQXpDLENBQW1ERSxNQUFuRCxDQUEwRCxlQUExRDtBQUNILE9BTnlCLENBUTFCOzs7QUFDQSxXQUFLbEQsR0FBTCxDQUFTLENBQVQsRUFBWW1ELEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQUtULE1BQWhDO0FBQ0EsV0FBSzNDLEdBQUwsQ0FBUyxDQUFULEVBQVltRCxLQUFaLENBQWtCbkIsR0FBbEIsR0FBd0IsS0FBS1MsSUFBTCxHQUFZLElBQXBDO0FBQ0EsV0FBS3pDLEdBQUwsQ0FBUyxDQUFULEVBQVltRCxLQUFaLENBQWtCbEIsSUFBbEIsR0FBeUIsS0FBS1MsS0FBTCxHQUFhLElBQXRDO0FBQ0EsV0FBSzFDLEdBQUwsQ0FBUyxDQUFULEVBQVltRCxLQUFaLENBQWtCRSxTQUFsQixHQUE4QixZQUFZLEtBQUtULFNBQWpCLEdBQTZCLE1BQTNELENBWjBCLENBYzFCOztBQUNBeEIsaUJBQVcsWUFBVztBQUNsQixZQUFHMEIsUUFBSCxFQUFhO0FBQ1RBO0FBQ0g7QUFDSixPQUpELEVBSUcsR0FKSDtBQUtIOzs7K0JBRVU7QUFDUCxzRUFDc0MsS0FBS1IsS0FEM0MsY0FDb0QsS0FBS0MsS0FEekQsNkJBQytFLEtBQUtFLElBRHBGLHVCQUNxRyxLQUFLQyxLQUQxRyw0SEFHd0QsS0FBS0gsS0FIN0QsaUJBR3lFLEtBQUtELEtBSDlFO0FBUUgsSyxDQUVEOzs7OzZCQUNTO0FBQ0wsV0FBS3pELElBQUwsQ0FBVXlFLFNBQVYsSUFBdUIsS0FBS0MsUUFBTCxFQUF2QjtBQUNBLFdBQUt2RCxHQUFMLEdBQVcsS0FBS25CLElBQUwsQ0FBVTJFLHNCQUFWLENBQWlDLFVBQVUsS0FBS2xCLEtBQWYsR0FBdUIsR0FBdkIsR0FBNkIsS0FBS0MsS0FBbkUsQ0FBWDtBQUNIOzs7cUNBRWdCTixJLEVBQU07QUFBQTs7QUFDbkI7QUFDQSxXQUFLakMsR0FBTCxDQUFTLENBQVQsRUFBWWdELFNBQVosQ0FBc0JFLE1BQXRCLENBQTZCLFdBQTdCO0FBQ0FiLGlCQUFXOUMsT0FBWCxDQUFtQixLQUFLUyxHQUF4QixFQUE2QixLQUFLMkMsTUFBbEMsRUFBMEMsS0FBS0QsS0FBL0MsRUFBc0QsS0FBS0QsSUFBM0QsRUFBaUUsWUFBTTtBQUNuRTtBQUNBLGNBQUt6QyxHQUFMLENBQVMsQ0FBVCxFQUFZZ0QsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsV0FBMUI7QUFDSCxPQUhEO0FBSUg7Ozt3QkFuRlU7QUFDUCxhQUFPLEtBQUtYLEtBQVo7QUFDSDs7O3dCQUVVO0FBQ1AsYUFBTyxLQUFLQyxLQUFaO0FBQ0g7Ozt3QkFFUztBQUNOLGFBQU8sS0FBS0UsSUFBWjtBQUNILEs7c0JBRU9ULEcsRUFBSztBQUNULFdBQUtTLElBQUwsR0FBWVQsR0FBWjtBQUNIOzs7d0JBRVU7QUFDUCxhQUFPLEtBQUtVLEtBQVo7QUFDSCxLO3NCQUVRVCxJLEVBQU07QUFDWCxXQUFLUyxLQUFMLEdBQWFULElBQWI7QUFDSDs7O3NCQUVTVCxLLEVBQU87QUFDYixXQUFLbUIsTUFBTCxHQUFjbkIsS0FBZDtBQUNIOzs7c0JBRVlQLFEsRUFBVTtBQUNuQixXQUFLMkIsU0FBTCxHQUFpQjNCLFFBQWpCO0FBQ0g7OztzQkFFV0UsTyxFQUFTO0FBQ2pCLFdBQUtxQixRQUFMLEdBQWdCckIsT0FBaEI7QUFDSDs7Ozs7O0FBb0RMZ0IsT0FBT0MsT0FBUCxHQUFpQnhDLElBQWpCLEM7Ozs7OztBQ3RHQSxJQUFNNkQsV0FBVyxtQkFBQTdFLENBQVEsQ0FBUixDQUFqQjs7QUFFQXdELFFBQVE3QyxPQUFSLEdBQWtCLFVBQVNtRSxPQUFULEVBQWtCbEMsS0FBbEIsRUFBeUJTLElBQXpCLEVBQStCRCxHQUEvQixFQUFvQ2MsUUFBcEMsRUFBOEM7QUFDNUQ7QUFDQSxNQUFJYSxjQUFjL0MsS0FBS0UsTUFBTCxLQUFnQixHQUFoQixHQUFzQixDQUFDLENBQXZCLEdBQTJCLENBQTdDO0FBQ0EyQyxXQUFTQyxPQUFULEVBQWtCO0FBQ2R6QixVQUFNMEIsY0FBYztBQUROLEdBQWxCLEVBRUc7QUFDQ0MsY0FBVSxHQURYO0FBRUNDLFdBQU9yQyxRQUFRO0FBRmhCLEdBRkg7QUFNQWlDLFdBQVNDLE9BQVQsRUFBa0I7QUFDZHpCLFVBQU1BO0FBRFEsR0FBbEIsRUFFRztBQUNDMkIsY0FBVSxHQURYO0FBRUNDLFdBQVFyQyxRQUFRLENBQVQsR0FBYztBQUZ0QixHQUZILEVBVDRELENBZ0I1RDs7QUFDQWlDLFdBQVNDLE9BQVQsRUFBa0I7QUFDZDFCLFNBQUssQ0FBQztBQURRLEdBQWxCLEVBRUc7QUFDQzRCLGNBQVUsR0FEWDtBQUVDQyxXQUFRckMsUUFBUSxDQUFULEdBQWM7QUFGdEIsR0FGSDtBQU1BaUMsV0FBU0MsT0FBVCxFQUFrQjtBQUNkMUIsU0FBS0E7QUFEUyxHQUFsQixFQUVHO0FBQ0M0QixjQUFVLEdBRFg7QUFFQ0MsV0FBUXJDLFFBQVEsQ0FBVCxHQUFjLEdBRnRCO0FBR0NzQyxjQUFVLG9CQUFXO0FBQ2pCaEI7QUFDSDtBQUxGLEdBRkg7QUFTSCxDQWhDRCxDOzs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQSxVQUFVLFlBQVk7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsWUFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdGQUFnRjs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsZ0JBQWdCOztBQUV0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksWUFBWTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBLE9BQU87QUFDUCxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFNBQVMscUJBQXFCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUNBQXVDO0FBQ3RELGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2QkFBNkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLG9FQUFvRTtBQUM5RTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsZUFBZSxHQUFHLGVBQWU7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLEVBQUUsRUFBRSxJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELElBQUk7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHFEQUFxRCxtQkFBbUI7QUFDeEU7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBLE9BQU87QUFDUCw0RkFBNEY7QUFDNUY7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSw4REFBOEQ7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLGdIQUFnSDs7QUFFaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0ZBQXdGO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBDQUEwQyxzQkFBc0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLE1BQU07O0FBRU47QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ04sd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTs7QUFFM0U7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLCtHQUErRztBQUMvRztBQUNBLHNKQUFzSjs7QUFFdEo7QUFDQTtBQUNBLDZGQUE2RjtBQUM3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3R0FBd0c7O0FBRXhHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw4REFBOEQ7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLHlCQUF5QiwyQ0FBMkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwyQ0FBMkM7QUFDdEU7QUFDQSx5QkFBeUIsZ0VBQWdFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLHVLQUF1SztBQUN2SywwS0FBMEs7QUFDMUssNklBQTZJOztBQUU3STtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0UsOEVBQThFO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdEQUFnRCxVQUFVO0FBQzFELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixtQ0FBbUMsOEJBQThCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQsaUJBQWlCO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMDE0NDU0ZDdkZWY4OGNjOGIwMCIsImNvbnN0IERlY2sgPSByZXF1aXJlKCcuL2RlY2snKTtcbmxldCBkZWNrID0gbmV3IERlY2soJ2RlY2sxJyk7XG5cbmxldCBzaHVmZmxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NodWZmbGUnKTtcbmxldCBkcmF3QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXcnKTtcbmxldCBzb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQnKTtcbmxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xuXG5zaHVmZmxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkZWNrLnNodWZmbGUoKTtcbn0pO1xuXG5kcmF3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkZWNrLmRyYXdDYXJkKCk7XG59KTtcblxuc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGVjay5zb3J0KCk7XG59KTtcblxucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgQ2FyZCA9IHJlcXVpcmUoJy4vY2FyZCcpO1xuXG5jb25zdCBzdWl0cyA9IFsnY2x1YicsICdzcGFkZScsICdoZWFydCcsICdkaWFtb25kJ107XG5jb25zdCByYW5rcyA9IFsyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgJ0onLCAnUScsICdLJywgJ0EnXTtcblxuY2xhc3MgRGVjayB7XG4gICAgY29uc3RydWN0b3IoaWQpIHtcbiAgICAgICAgdGhpcy5kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHRoaXMuX2NhcmRzID0gW107XG4gICAgICAgIHRoaXMuX2RyYXduID0gW107XG5cbiAgICAgICAgdGhpcy5hZGRDYXJkcygpO1xuICAgICAgICB0aGlzLmRpc3BsYXlEZWNrKCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcmRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZHM7XG4gICAgfVxuXG4gICAgZ2V0IGRyYXduKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd247XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGVhY2ggY2FyZCBhbmQgYWRkIHRvIHBhZ2VcbiAgICBhZGRDYXJkcygpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBzdWl0IG9mIHN1aXRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByYW5rIG9mIHJhbmtzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FyZHMucHVzaChuZXcgQ2FyZCh0aGlzLmRpdiwgaSwgc3VpdCwgcmFuaykpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNodWZmbGUoKSB7XG4gICAgICAgIGxldCBtID0gdGhpcy5fY2FyZHMubGVuZ3RoO1xuICAgICAgICBsZXQgdCwgaTtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxuICAgICAgICB3aGlsZSAobSkge1xuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXG4gICAgICAgICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdCA9IHRoaXMuX2NhcmRzW21dO1xuICAgICAgICAgICAgdGhpcy5fY2FyZHNbbV0gPSB0aGlzLl9jYXJkc1tpXTtcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzW2ldID0gdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsYXkgY2FyZCBzaHVmZmxpbmcgYW5pbWF0aW9uXG4gICAgICAgIGZvciAobGV0IGNhcmQgb2YgdGhpcy5fY2FyZHMpIHtcbiAgICAgICAgICAgIGNhcmQuc2h1ZmZsZUFuaW1hdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0SW5kZXgoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyZHMubGVuZ3RoICsgKHRoaXMuX2RyYXduLmxlbmd0aCAtIGkpO1xuICAgIH1cblxuICAgIHNvcnQoKSB7XG4gICAgICAgIC8vIGhpZGUgY2FyZHMgYW5kIHJlc2V0IHBvc2l0aW9uXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgY2FyZCBvZiB0aGlzLl9kcmF3bikge1xuICAgICAgICAgICAgY2FyZC5yb3RhdGlvbiA9IDA7XG4gICAgICAgICAgICBjYXJkLnBvc2l0aW9uQ2FyZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjYXJkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYXJkLnBvc2l0aW9uQ2FyZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXVzZSBmb3IgZWZmZWN0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gc29ydCB0aGUgY2FyZHNcbiAgICAgICAgICAgIHRoaXMuX2RyYXduLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3VpdHMuaW5kZXhPZihhLnN1aXQpID4gc3VpdHMuaW5kZXhPZihiLnN1aXQpIHx8XG4gICAgICAgICAgICAgICAgICAgIChzdWl0cy5pbmRleE9mKGEuc3VpdCkgPT09IHN1aXRzLmluZGV4T2YoYi5zdWl0KSAmJiByYW5rcy5pbmRleE9mKGEucmFuaykgPiByYW5rcy5pbmRleE9mKGIucmFuaykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZmxpcCB0aGUgY2FyZHMgYW5kIHB1dCBpbiB0aGUgY29ycmVjdCBvcmRlclxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBjYXJkIG9mIHRoaXMuX2RyYXduKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5pbmRleCA9IHRoaXMuZ2V0SW5kZXgoaSk7XG4gICAgICAgICAgICAgICAgY2FyZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYXJkLnBvc2l0aW9uQ2FyZCgpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmFuIG91dCBhbmQgZGlzcGxheSB0aGUgY2FyZHNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUNhcmRzKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9LCAxNTAwKVxuICAgIH1cblxuICAgIGRyYXdDYXJkKGRpc3BsYXkgPSB0cnVlKSB7XG4gICAgICAgIGlmKHRoaXMuX2NhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGFkZCBjYXJkIHRvIGRyYXduIGFycmF5XG4gICAgICAgICAgICB0aGlzLl9kcmF3bi5wdXNoKHRoaXMuX2NhcmRzW3RoaXMuX2NhcmRzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gb3JpZ2luYWwgYXJyYXlcbiAgICAgICAgICAgIHRoaXMuX2NhcmRzLnBvcCgpO1xuXG4gICAgICAgICAgICBpZihkaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5Q2FyZHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlDYXJkcygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RHJhd24oKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5RGVjaygpO1xuICAgIH1cblxuICAgIC8vIGRpc3BsYXkgdGhlIGRyYXduIGNhcmRzIGluIGEgXCJmYW4gbGF5b3V0XCJcbiAgICBkaXNwbGF5RHJhd24oKSB7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IDA7XG4gICAgICAgIGxldCBzdGFydCA9IC05MDtcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuX2RyYXduLmxlbmd0aDtcblxuICAgICAgICAvLyBzZXQgdGhlIHNwYWNlIGJldHdlZW4gY2FyZHMsIG1heGltdW0gMjBcbiAgICAgICAgbGV0IGludGVydmFsID0gMTcwIC8gdGhpcy5fZHJhd24ubGVuZ3RoO1xuICAgICAgICBpZihpbnRlcnZhbCA+IDIwKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IDIwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBjYXJkIG9mIHRoaXMuX2RyYXduKSB7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgcm90YXRpb25cbiAgICAgICAgICAgIHJvdGF0aW9uID0gKGkgKiBpbnRlcnZhbCAtICgobGVuZ3RoIC8gMikgKiBpbnRlcnZhbCkpICogLTE7XG5cbiAgICAgICAgICAgIC8vIHNldCBjYXJkIHZhbHVlc1xuICAgICAgICAgICAgY2FyZC50b3AgPSAtNDAwO1xuICAgICAgICAgICAgY2FyZC5sZWZ0ID0gMDtcbiAgICAgICAgICAgIGNhcmQucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBjYXJkLmluZGV4ID0gdGhpcy5nZXRJbmRleChpKTtcblxuICAgICAgICAgICAgLy8gcG9zaXRpb24gY2FyZFxuICAgICAgICAgICAgY2FyZC5wb3NpdGlvbkNhcmQoKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlEZWNrKCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAobGV0IGNhcmQgb2YgdGhpcy5fY2FyZHMpIHtcbiAgICAgICAgICAgIC8vIG1vdmUgc2xpZ2h0bHkgdG8gbWFrZSBpdCBsb29rIGxpa2UgYSBkZWNrXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBpICogMC4zO1xuICAgICAgICAgICAgY2FyZC50b3AgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIGNhcmQubGVmdCA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgY2FyZC5pbmRleCA9IGk7XG4gICAgICAgICAgICBjYXJkLnJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIGNhcmQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2FyZC5wb3NpdGlvbkNhcmQoKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWNrO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNrLmpzIiwiY29uc3QgQW5pbWF0aW9ucyA9IHJlcXVpcmUoJy4vYW5pbWF0aW9ucycpO1xuXG5jbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihkZWNrLCBpLCBzdWl0LCByYW5rKSB7XG4gICAgICAgIHRoaXMuZGVjayA9IGRlY2s7XG4gICAgICAgIHRoaXMuX3N1aXQgPSBzdWl0O1xuICAgICAgICB0aGlzLl9yYW5rID0gcmFuaztcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90b3AgPSAwO1xuICAgICAgICB0aGlzLl9sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5faW5kZXggPSBpO1xuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XG5cbiAgICAgICAgdGhpcy5hcHBlbmQoKTtcbiAgICB9XG5cbiAgICBnZXQgc3VpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1aXQ7XG4gICAgfVxuXG4gICAgZ2V0IHJhbmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yYW5rO1xuICAgIH1cblxuICAgIGdldCB0b3AoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3A7XG4gICAgfVxuXG4gICAgc2V0IHRvcCh0b3ApIHtcbiAgICAgICAgdGhpcy5fdG9wID0gdG9wO1xuICAgIH1cblxuICAgIGdldCBsZWZ0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVmdDtcbiAgICB9XG5cbiAgICBzZXQgbGVmdChsZWZ0KSB7XG4gICAgICAgIHRoaXMuX2xlZnQgPSBsZWZ0O1xuICAgIH1cblxuICAgIHNldCBpbmRleChpbmRleCkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHNldCByb3RhdGlvbihyb3RhdGlvbikge1xuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIH1cblxuICAgIHNldCB2aXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgfVxuXG4gICAgLy8gcG9zaXRpb24gYWxsIGVsZW1lbnRzIG9mIHRoZSBjYXJkLiBTaG93LyBoaWRlIHRoZSBjYXJkXG4gICAgcG9zaXRpb25DYXJkKGNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICAvLyBzaG93IG9yIGhpZGUgY2FyZFxuICAgICAgICBpZih0aGlzLl92aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRpdlswXS5xdWVyeVNlbGVjdG9yQWxsKCcuZmxpcCcpWzBdLmNsYXNzTGlzdC5hZGQoXCJmbGlwLS1mbGlwcGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXZbMF0ucXVlcnlTZWxlY3RvckFsbCgnLmZsaXAnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZmxpcC0tZmxpcHBlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvc2l0aW9uIGVsZWxtZW50XG4gICAgICAgIHRoaXMuZGl2WzBdLnN0eWxlLnpJbmRleCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB0aGlzLmRpdlswXS5zdHlsZS50b3AgPSB0aGlzLl90b3AgKyAncHgnO1xuICAgICAgICB0aGlzLmRpdlswXS5zdHlsZS5sZWZ0ID0gdGhpcy5fbGVmdCArICdweCc7XG4gICAgICAgIHRoaXMuZGl2WzBdLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIHRoaXMuX3JvdGF0aW9uICsgJ2RlZyknO1xuXG4gICAgICAgIC8vIHdhaXQgZm9yIGNzcyBhbmltYXRpb24uIENvdWxkIGNsZWFyIGV4aXN0aW5nIHRpbWVvdXRzXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBhbmltYXRpb24gY2FyZF8ke3RoaXMuX3N1aXR9XyR7dGhpcy5fcmFua31cIiBzdHlsZT1cInRvcDogJHt0aGlzLl90b3B9cHg7IGxlZnQ6ICR7dGhpcy5fbGVmdH1weDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJvbnRcIj48aW1nIHNyYz1cImltYWdlcy9jYXJkcy8ke3RoaXMuX3Jhbmt9X29mXyR7dGhpcy5fc3VpdH1zLnBuZ1wiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICAvLyBhZGQgdG8gdGhlIHBhZ2VcbiAgICBhcHBlbmQoKSB7XG4gICAgICAgIHRoaXMuZGVjay5pbm5lckhUTUwgKz0gdGhpcy50ZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLmRpdiA9IHRoaXMuZGVjay5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZF9cIiArIHRoaXMuX3N1aXQgKyAnXycgKyB0aGlzLl9yYW5rKTtcbiAgICB9XG5cbiAgICBzaHVmZmxlQW5pbWF0aW9uKGxlZnQpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGNzcyBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZGl2WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRpb25cIik7XG4gICAgICAgIEFuaW1hdGlvbnMuc2h1ZmZsZSh0aGlzLmRpdiwgdGhpcy5faW5kZXgsIHRoaXMuX2xlZnQsIHRoaXMuX3RvcCwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gYWRkIGNzcyBhbmltYXRpb25zIGJhY2tcbiAgICAgICAgICAgIHRoaXMuZGl2WzBdLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRpb25cIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYXJkLmpzIiwiY29uc3QgVmVsb2NpdHkgPSByZXF1aXJlKCd2ZWxvY2l0eS1hbmltYXRlJyk7XG5cbmV4cG9ydHMuc2h1ZmZsZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBsZWZ0LCB0b3AsIGNhbGxiYWNrKSB7XG4gICAgLy8gcmFuZG9tbHkgY2hvb3NlIGEgZGlyZWN0aW9uXG4gICAgbGV0IHBsdXNPck1pbnVzID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IC0xIDogMTtcbiAgICBWZWxvY2l0eShlbGVtZW50LCB7XG4gICAgICAgIGxlZnQ6IHBsdXNPck1pbnVzICogODBcbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGRlbGF5OiBpbmRleCAqIDVcbiAgICB9KTtcbiAgICBWZWxvY2l0eShlbGVtZW50LCB7XG4gICAgICAgIGxlZnQ6IGxlZnRcbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIGRlbGF5OiAoaW5kZXggKiA1KSArIDIwMFxuICAgIH0pO1xuXG4gICAgLy8gc2Vjb25kIHNodWZmbGUgYW5pbWF0aW9uXG4gICAgVmVsb2NpdHkoZWxlbWVudCwge1xuICAgICAgICB0b3A6IC03NVxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDEwMCxcbiAgICAgICAgZGVsYXk6IChpbmRleCAqIDUpICsgNDAwXG4gICAgfSk7XG4gICAgVmVsb2NpdHkoZWxlbWVudCwge1xuICAgICAgICB0b3A6IHRvcFxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDEwMCxcbiAgICAgICAgZGVsYXk6IChpbmRleCAqIDUpICsgNjAwLFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbmltYXRpb25zLmpzIiwiLyohIFZlbG9jaXR5SlMub3JnICgxLjUuMCkuIChDKSAyMDE0IEp1bGlhbiBTaGFwaXJvLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKlxuIFZlbG9jaXR5IGpRdWVyeSBTaGltXG4gKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyohIFZlbG9jaXR5SlMub3JnIGpRdWVyeSBTaGltICgxLjAuMSkuIChDKSAyMDE0IFRoZSBqUXVlcnkgRm91bmRhdGlvbi4gTUlUIEBsaWNlbnNlOiBlbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UuICovXG5cbi8qIFRoaXMgZmlsZSBjb250YWlucyB0aGUgalF1ZXJ5IGZ1bmN0aW9ucyB0aGF0IFZlbG9jaXR5IHJlbGllcyBvbiwgdGhlcmVieSByZW1vdmluZyBWZWxvY2l0eSdzIGRlcGVuZGVuY3kgb24gYSBmdWxsIGNvcHkgb2YgalF1ZXJ5LCBhbmQgYWxsb3dpbmcgaXQgdG8gd29yayBpbiBhbnkgZW52aXJvbm1lbnQuICovXG4vKiBUaGVzZSBzaGltbWVkIGZ1bmN0aW9ucyBhcmUgb25seSB1c2VkIGlmIGpRdWVyeSBpc24ndCBwcmVzZW50LiBJZiBib3RoIHRoaXMgc2hpbSBhbmQgalF1ZXJ5IGFyZSBsb2FkZWQsIFZlbG9jaXR5IGRlZmF1bHRzIHRvIGpRdWVyeSBwcm9wZXIuICovXG4vKiBCcm93c2VyIHN1cHBvcnQ6IFVzaW5nIHRoaXMgc2hpbSBpbnN0ZWFkIG9mIGpRdWVyeSBwcm9wZXIgcmVtb3ZlcyBzdXBwb3J0IGZvciBJRTguICovXG5cbihmdW5jdGlvbih3aW5kb3cpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8qKioqKioqKioqKioqKipcblx0IFNldHVwXG5cdCAqKioqKioqKioqKioqKiovXG5cblx0LyogSWYgalF1ZXJ5IGlzIGFscmVhZHkgbG9hZGVkLCB0aGVyZSdzIG5vIHBvaW50IGluIGxvYWRpbmcgdGhpcyBzaGltLiAqL1xuXHRpZiAod2luZG93LmpRdWVyeSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qIGpRdWVyeSBiYXNlLiAqL1xuXHR2YXIgJCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cdFx0cmV0dXJuIG5ldyAkLmZuLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpO1xuXHR9O1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKlxuXHQgUHJpdmF0ZSBNZXRob2RzXG5cdCAqKioqKioqKioqKioqKioqKioqKi9cblxuXHQvKiBqUXVlcnkgKi9cblx0JC5pc1dpbmRvdyA9IGZ1bmN0aW9uKG9iaikge1xuXHRcdC8qIGpzaGludCBlcWVxZXE6IGZhbHNlICovXG5cdFx0cmV0dXJuIG9iaiAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH07XG5cblx0LyogalF1ZXJ5ICovXG5cdCQudHlwZSA9IGZ1bmN0aW9uKG9iaikge1xuXHRcdGlmICghb2JqKSB7XG5cdFx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xuXHRcdFx0XHRjbGFzczJ0eXBlW3RvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6XG5cdFx0XHRcdHR5cGVvZiBvYmo7XG5cdH07XG5cblx0LyogalF1ZXJ5ICovXG5cdCQuaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24ob2JqKSB7XG5cdFx0cmV0dXJuICQudHlwZShvYmopID09PSBcImFycmF5XCI7XG5cdH07XG5cblx0LyogalF1ZXJ5ICovXG5cdGZ1bmN0aW9uIGlzQXJyYXlsaWtlKG9iaikge1xuXHRcdHZhciBsZW5ndGggPSBvYmoubGVuZ3RoLFxuXHRcdFx0XHR0eXBlID0gJC50eXBlKG9iaik7XG5cblx0XHRpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8ICQuaXNXaW5kb3cob2JqKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvYmoubm9kZVR5cGUgPT09IDEgJiYgbGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKipcblx0ICQgTWV0aG9kc1xuXHQgKioqKioqKioqKioqKioqL1xuXG5cdC8qIGpRdWVyeTogU3VwcG9ydCByZW1vdmVkIGZvciBJRTw5LiAqL1xuXHQkLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcblx0XHR2YXIga2V5O1xuXG5cdFx0aWYgKCFvYmogfHwgJC50eXBlKG9iaikgIT09IFwib2JqZWN0XCIgfHwgb2JqLm5vZGVUeXBlIHx8ICQuaXNXaW5kb3cob2JqKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAob2JqLmNvbnN0cnVjdG9yICYmXG5cdFx0XHRcdFx0IWhhc093bi5jYWxsKG9iaiwgXCJjb25zdHJ1Y3RvclwiKSAmJlxuXHRcdFx0XHRcdCFoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCBcImlzUHJvdG90eXBlT2ZcIikpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRmb3IgKGtleSBpbiBvYmopIHtcblx0XHR9XG5cblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xuXHR9O1xuXG5cdC8qIGpRdWVyeSAqL1xuXHQkLmVhY2ggPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrLCBhcmdzKSB7XG5cdFx0dmFyIHZhbHVlLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aCxcblx0XHRcdFx0aXNBcnJheSA9IGlzQXJyYXlsaWtlKG9iaik7XG5cblx0XHRpZiAoYXJncykge1xuXHRcdFx0aWYgKGlzQXJyYXkpIHtcblx0XHRcdFx0Zm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suYXBwbHkob2JqW2ldLCBhcmdzKTtcblxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpIGluIG9iaikge1xuXHRcdFx0XHRcdGlmICghb2JqLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5hcHBseShvYmpbaV0sIGFyZ3MpO1xuXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGlzQXJyYXkpIHtcblx0XHRcdFx0Zm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmpbaV0sIGksIG9ialtpXSk7XG5cblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoaSBpbiBvYmopIHtcblx0XHRcdFx0XHRpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suY2FsbChvYmpbaV0sIGksIG9ialtpXSk7XG5cblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9O1xuXG5cdC8qIEN1c3RvbSAqL1xuXHQkLmRhdGEgPSBmdW5jdGlvbihub2RlLCBrZXksIHZhbHVlKSB7XG5cdFx0LyogJC5nZXREYXRhKCkgKi9cblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIGdldElkID0gbm9kZVskLmV4cGFuZG9dLFxuXHRcdFx0XHRcdHN0b3JlID0gZ2V0SWQgJiYgY2FjaGVbZ2V0SWRdO1xuXG5cdFx0XHRpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHN0b3JlO1xuXHRcdFx0fSBlbHNlIGlmIChzdG9yZSkge1xuXHRcdFx0XHRpZiAoa2V5IGluIHN0b3JlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0b3JlW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8qICQuc2V0RGF0YSgpICovXG5cdFx0fSBlbHNlIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIHNldElkID0gbm9kZVskLmV4cGFuZG9dIHx8IChub2RlWyQuZXhwYW5kb10gPSArKyQudXVpZCk7XG5cblx0XHRcdGNhY2hlW3NldElkXSA9IGNhY2hlW3NldElkXSB8fCB7fTtcblx0XHRcdGNhY2hlW3NldElkXVtrZXldID0gdmFsdWU7XG5cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH07XG5cblx0LyogQ3VzdG9tICovXG5cdCQucmVtb3ZlRGF0YSA9IGZ1bmN0aW9uKG5vZGUsIGtleXMpIHtcblx0XHR2YXIgaWQgPSBub2RlWyQuZXhwYW5kb10sXG5cdFx0XHRcdHN0b3JlID0gaWQgJiYgY2FjaGVbaWRdO1xuXG5cdFx0aWYgKHN0b3JlKSB7XG5cdFx0XHQvLyBDbGVhbnVwIHRoZSBlbnRpcmUgc3RvcmUgaWYgbm8ga2V5cyBhcmUgcHJvdmlkZWQuXG5cdFx0XHRpZiAoIWtleXMpIHtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlW2lkXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQuZWFjaChrZXlzLCBmdW5jdGlvbihfLCBrZXkpIHtcblx0XHRcdFx0XHRkZWxldGUgc3RvcmVba2V5XTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIGpRdWVyeSAqL1xuXHQkLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzcmMsIGNvcHlJc0FycmF5LCBjb3B5LCBuYW1lLCBvcHRpb25zLCBjbG9uZSxcblx0XHRcdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuXHRcdFx0XHRpID0gMSxcblx0XHRcdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRcdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdFx0aWYgKHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiKSB7XG5cdFx0XHRkZWVwID0gdGFyZ2V0O1xuXG5cdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbaV0gfHwge307XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgJC50eXBlKHRhcmdldCkgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dGFyZ2V0ID0ge307XG5cdFx0fVxuXG5cdFx0aWYgKGkgPT09IGxlbmd0aCkge1xuXHRcdFx0dGFyZ2V0ID0gdGhpcztcblx0XHRcdGktLTtcblx0XHR9XG5cblx0XHRmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoKG9wdGlvbnMgPSBhcmd1bWVudHNbaV0pKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdFx0aWYgKHRhcmdldCA9PT0gY29weSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoJC5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9ICQuaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgJC5pc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgJC5pc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gJC5leHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjb3B5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fTtcblxuXHQvKiBqUXVlcnkgMS40LjMgKi9cblx0JC5xdWV1ZSA9IGZ1bmN0aW9uKGVsZW0sIHR5cGUsIGRhdGEpIHtcblx0XHRmdW5jdGlvbiAkbWFrZUFycmF5KGFyciwgcmVzdWx0cykge1xuXHRcdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRcdGlmIChhcnIpIHtcblx0XHRcdFx0aWYgKGlzQXJyYXlsaWtlKE9iamVjdChhcnIpKSkge1xuXHRcdFx0XHRcdC8qICQubWVyZ2UgKi9cblx0XHRcdFx0XHQoZnVuY3Rpb24oZmlyc3QsIHNlY29uZCkge1xuXHRcdFx0XHRcdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdGogPSAwLFxuXHRcdFx0XHRcdFx0XHRcdGkgPSBmaXJzdC5sZW5ndGg7XG5cblx0XHRcdFx0XHRcdHdoaWxlIChqIDwgbGVuKSB7XG5cdFx0XHRcdFx0XHRcdGZpcnN0W2krK10gPSBzZWNvbmRbaisrXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGxlbiAhPT0gbGVuKSB7XG5cdFx0XHRcdFx0XHRcdHdoaWxlIChzZWNvbmRbal0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdGZpcnN0W2krK10gPSBzZWNvbmRbaisrXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRmaXJzdC5sZW5ndGggPSBpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmlyc3Q7XG5cdFx0XHRcdFx0fSkocmV0LCB0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID8gW2Fycl0gOiBhcnIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFtdLnB1c2guY2FsbChyZXQsIGFycik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRpZiAoIWVsZW0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0eXBlID0gKHR5cGUgfHwgXCJmeFwiKSArIFwicXVldWVcIjtcblxuXHRcdHZhciBxID0gJC5kYXRhKGVsZW0sIHR5cGUpO1xuXG5cdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRyZXR1cm4gcSB8fCBbXTtcblx0XHR9XG5cblx0XHRpZiAoIXEgfHwgJC5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRxID0gJC5kYXRhKGVsZW0sIHR5cGUsICRtYWtlQXJyYXkoZGF0YSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRxLnB1c2goZGF0YSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHE7XG5cdH07XG5cblx0LyogalF1ZXJ5IDEuNC4zICovXG5cdCQuZGVxdWV1ZSA9IGZ1bmN0aW9uKGVsZW1zLCB0eXBlKSB7XG5cdFx0LyogQ3VzdG9tOiBFbWJlZCBlbGVtZW50IGl0ZXJhdGlvbi4gKi9cblx0XHQkLmVhY2goZWxlbXMubm9kZVR5cGUgPyBbZWxlbXNdIDogZWxlbXMsIGZ1bmN0aW9uKGksIGVsZW0pIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdFx0dmFyIHF1ZXVlID0gJC5xdWV1ZShlbGVtLCB0eXBlKSxcblx0XHRcdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XG5cblx0XHRcdGlmIChmbiA9PT0gXCJpbnByb2dyZXNzXCIpIHtcblx0XHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm4pIHtcblx0XHRcdFx0aWYgKHR5cGUgPT09IFwiZnhcIikge1xuXHRcdFx0XHRcdHF1ZXVlLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm4uY2FsbChlbGVtLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbSwgdHlwZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKioqKioqKioqKioqKioqKipcblx0ICQuZm4gTWV0aG9kc1xuXHQgKioqKioqKioqKioqKioqKioqL1xuXG5cdC8qIGpRdWVyeSAqL1xuXHQkLmZuID0gJC5wcm90b3R5cGUgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdC8qIEp1c3QgcmV0dXJuIHRoZSBlbGVtZW50IHdyYXBwZWQgaW5zaWRlIGFuIGFycmF5OyBkb24ndCBwcm9jZWVkIHdpdGggdGhlIGFjdHVhbCBqUXVlcnkgbm9kZSB3cmFwcGluZyBwcm9jZXNzLiAqL1xuXHRcdFx0aWYgKHNlbGVjdG9yLm5vZGVUeXBlKSB7XG5cdFx0XHRcdHRoaXNbMF0gPSBzZWxlY3RvcjtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBhIERPTSBub2RlLlwiKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9mZnNldDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvKiBqUXVlcnkgYWx0ZXJlZCBjb2RlOiBEcm9wcGVkIGRpc2Nvbm5lY3RlZCBET00gbm9kZSBjaGVja2luZy4gKi9cblx0XHRcdHZhciBib3ggPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA/IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7dG9wOiAwLCBsZWZ0OiAwfTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5zY3JvbGxUb3AgfHwgMCkgLSAoZG9jdW1lbnQuY2xpZW50VG9wIHx8IDApLFxuXHRcdFx0XHRsZWZ0OiBib3gubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsTGVmdCB8fCAwKSAtIChkb2N1bWVudC5jbGllbnRMZWZ0IHx8IDApXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0cG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0LyogalF1ZXJ5ICovXG5cdFx0XHRmdW5jdGlvbiBvZmZzZXRQYXJlbnRGbihlbGVtKSB7XG5cdFx0XHRcdHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudDtcblxuXHRcdFx0XHR3aGlsZSAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImh0bWxcIiAmJiBvZmZzZXRQYXJlbnQuc3R5bGUgJiYgb2Zmc2V0UGFyZW50LnN0eWxlLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG5cdFx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdC8qIFplcHRvICovXG5cdFx0XHR2YXIgZWxlbSA9IHRoaXNbMF0sXG5cdFx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Rm4oZWxlbSksXG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5vZmZzZXQoKSxcblx0XHRcdFx0XHRwYXJlbnRPZmZzZXQgPSAvXig/OmJvZHl8aHRtbCkkL2kudGVzdChvZmZzZXRQYXJlbnQubm9kZU5hbWUpID8ge3RvcDogMCwgbGVmdDogMH0gOiAkKG9mZnNldFBhcmVudCkub2Zmc2V0KCk7XG5cblx0XHRcdG9mZnNldC50b3AgLT0gcGFyc2VGbG9hdChlbGVtLnN0eWxlLm1hcmdpblRvcCkgfHwgMDtcblx0XHRcdG9mZnNldC5sZWZ0IC09IHBhcnNlRmxvYXQoZWxlbS5zdHlsZS5tYXJnaW5MZWZ0KSB8fCAwO1xuXG5cdFx0XHRpZiAob2Zmc2V0UGFyZW50LnN0eWxlKSB7XG5cdFx0XHRcdHBhcmVudE9mZnNldC50b3AgKz0gcGFyc2VGbG9hdChvZmZzZXRQYXJlbnQuc3R5bGUuYm9yZGVyVG9wV2lkdGgpIHx8IDA7XG5cdFx0XHRcdHBhcmVudE9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQob2Zmc2V0UGFyZW50LnN0eWxlLmJvcmRlckxlZnRXaWR0aCkgfHwgMDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCxcblx0XHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuXHRcdFx0fTtcblx0XHR9XG5cdH07XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKipcblx0IFByaXZhdGUgVmFyaWFibGVzXG5cdCAqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdC8qIEZvciAkLmRhdGEoKSAqL1xuXHR2YXIgY2FjaGUgPSB7fTtcblx0JC5leHBhbmRvID0gXCJ2ZWxvY2l0eVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblx0JC51dWlkID0gMDtcblxuXHQvKiBGb3IgJC5xdWV1ZSgpICovXG5cdHZhciBjbGFzczJ0eXBlID0ge30sXG5cdFx0XHRoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5LFxuXHRcdFx0dG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG5cdHZhciB0eXBlcyA9IFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNsYXNzMnR5cGVbXCJbb2JqZWN0IFwiICsgdHlwZXNbaV0gKyBcIl1cIl0gPSB0eXBlc1tpXS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0LyogTWFrZXMgJChub2RlKSBwb3NzaWJsZSwgd2l0aG91dCBoYXZpbmcgdG8gY2FsbCBpbml0LiAqL1xuXHQkLmZuLmluaXQucHJvdG90eXBlID0gJC5mbjtcblxuXHQvKiBHbG9iYWxpemUgVmVsb2NpdHkgb250byB0aGUgd2luZG93LCBhbmQgYXNzaWduIGl0cyBVdGlsaXRpZXMgcHJvcGVydHkuICovXG5cdHdpbmRvdy5WZWxvY2l0eSA9IHtVdGlsaXRpZXM6ICR9O1xufSkod2luZG93KTtcblxuLyoqKioqKioqKioqKioqKioqKlxuIFZlbG9jaXR5LmpzXG4gKioqKioqKioqKioqKioqKioqL1xuXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0LyogQ29tbW9uSlMgbW9kdWxlLiAqL1xuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHQvKiBBTUQgbW9kdWxlLiAqL1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdC8qIEJyb3dzZXIgZ2xvYmFscy4gKi9cblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KCk7XG5cdH1cbn0oZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRyZXR1cm4gZnVuY3Rpb24oZ2xvYmFsLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHRcdC8qKioqKioqKioqKioqKipcblx0XHQgU3VtbWFyeVxuXHRcdCAqKioqKioqKioqKioqKiovXG5cblx0XHQvKlxuXHRcdCAtIENTUzogQ1NTIHN0YWNrIHRoYXQgd29ya3MgaW5kZXBlbmRlbnRseSBmcm9tIHRoZSByZXN0IG9mIFZlbG9jaXR5LlxuXHRcdCAtIGFuaW1hdGUoKTogQ29yZSBhbmltYXRpb24gbWV0aG9kIHRoYXQgaXRlcmF0ZXMgb3ZlciB0aGUgdGFyZ2V0ZWQgZWxlbWVudHMgYW5kIHF1ZXVlcyB0aGUgaW5jb21pbmcgY2FsbCBvbnRvIGVhY2ggZWxlbWVudCBpbmRpdmlkdWFsbHkuXG5cdFx0IC0gUHJlLVF1ZXVlaW5nOiBQcmVwYXJlIHRoZSBlbGVtZW50IGZvciBhbmltYXRpb24gYnkgaW5zdGFudGlhdGluZyBpdHMgZGF0YSBjYWNoZSBhbmQgcHJvY2Vzc2luZyB0aGUgY2FsbCdzIG9wdGlvbnMuXG5cdFx0IC0gUXVldWVpbmc6IFRoZSBsb2dpYyB0aGF0IHJ1bnMgb25jZSB0aGUgY2FsbCBoYXMgcmVhY2hlZCBpdHMgcG9pbnQgb2YgZXhlY3V0aW9uIGluIHRoZSBlbGVtZW50J3MgJC5xdWV1ZSgpIHN0YWNrLlxuXHRcdCBNb3N0IGxvZ2ljIGlzIHBsYWNlZCBoZXJlIHRvIGF2b2lkIHJpc2tpbmcgaXQgYmVjb21pbmcgc3RhbGUgKGlmIHRoZSBlbGVtZW50J3MgcHJvcGVydGllcyBoYXZlIGNoYW5nZWQpLlxuXHRcdCAtIFB1c2hpbmc6IENvbnNvbGlkYXRpb24gb2YgdGhlIHR3ZWVuIGRhdGEgZm9sbG93ZWQgYnkgaXRzIHB1c2ggb250byB0aGUgZ2xvYmFsIGluLXByb2dyZXNzIGNhbGxzIGNvbnRhaW5lci5cblx0XHQgLSB0aWNrKCk6IFRoZSBzaW5nbGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3AgcmVzcG9uc2libGUgZm9yIHR3ZWVuaW5nIGFsbCBpbi1wcm9ncmVzcyBjYWxscy5cblx0XHQgLSBjb21wbGV0ZUNhbGwoKTogSGFuZGxlcyB0aGUgY2xlYW51cCBwcm9jZXNzIGZvciBlYWNoIFZlbG9jaXR5IGNhbGwuXG5cdFx0ICovXG5cblx0XHQvKioqKioqKioqKioqKioqKioqKioqXG5cdFx0IEhlbHBlciBGdW5jdGlvbnNcblx0XHQgKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0LyogSUUgZGV0ZWN0aW9uLiBHaXN0OiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qdWxpYW5zaGFwaXJvLzkwOTg2MDkgKi9cblx0XHR2YXIgSUUgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gNzsgaSA+IDQ7IGktLSkge1xuXHRcdFx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdFx0XHRcdFx0ZGl2LmlubmVySFRNTCA9IFwiPCEtLVtpZiBJRSBcIiArIGkgKyBcIl0+PHNwYW4+PC9zcGFuPjwhW2VuZGlmXS0tPlwiO1xuXG5cdFx0XHRcdFx0aWYgKGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRkaXYgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9KSgpO1xuXG5cdFx0LyogckFGIHNoaW0uIEdpc3Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2p1bGlhbnNoYXBpcm8vOTQ5NzUxMyAqL1xuXHRcdHZhciByQUZTaGltID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHRpbWVMYXN0ID0gMDtcblxuXHRcdFx0cmV0dXJuIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0XHR2YXIgdGltZUN1cnJlbnQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcdFx0dGltZURlbHRhO1xuXG5cdFx0XHRcdC8qIER5bmFtaWNhbGx5IHNldCBkZWxheSBvbiBhIHBlci10aWNrIGJhc2lzIHRvIG1hdGNoIDYwZnBzLiAqL1xuXHRcdFx0XHQvKiBUZWNobmlxdWUgYnkgRXJpayBNb2xsZXIuIE1JVCBsaWNlbnNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSAqL1xuXHRcdFx0XHR0aW1lRGVsdGEgPSBNYXRoLm1heCgwLCAxNiAtICh0aW1lQ3VycmVudCAtIHRpbWVMYXN0KSk7XG5cdFx0XHRcdHRpbWVMYXN0ID0gdGltZUN1cnJlbnQgKyB0aW1lRGVsdGE7XG5cblx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2sodGltZUN1cnJlbnQgKyB0aW1lRGVsdGEpO1xuXHRcdFx0XHR9LCB0aW1lRGVsdGEpO1xuXHRcdFx0fTtcblx0XHR9KSgpO1xuXG5cdFx0dmFyIHBlcmZvcm1hbmNlID0gKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBlcmYgPSB3aW5kb3cucGVyZm9ybWFuY2UgfHwge307XG5cblx0XHRcdGlmICh0eXBlb2YgcGVyZi5ub3cgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2YXIgbm93T2Zmc2V0ID0gcGVyZi50aW1pbmcgJiYgcGVyZi50aW1pbmcubmF2aWdhdGlvblN0YXJ0ID8gcGVyZi50aW1pbmcubmF2aWdhdGlvblN0YXJ0IDogKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuXHRcdFx0XHRwZXJmLm5vdyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiAobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gbm93T2Zmc2V0O1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBlcmY7XG5cdFx0fSkoKTtcblxuXHRcdC8qIEFycmF5IGNvbXBhY3RpbmcuIENvcHlyaWdodCBMby1EYXNoLiBNSVQgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHQgKi9cblx0XHRmdW5jdGlvbiBjb21wYWN0U3BhcnNlQXJyYXkoYXJyYXkpIHtcblx0XHRcdHZhciBpbmRleCA9IC0xLFxuXHRcdFx0XHRcdGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcblx0XHRcdFx0XHRyZXN1bHQgPSBbXTtcblxuXHRcdFx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNoaW0gZm9yIFwiZml4aW5nXCIgSUUncyBsYWNrIG9mIHN1cHBvcnQgKElFIDwgOSkgZm9yIGFwcGx5aW5nIHNsaWNlXG5cdFx0ICogb24gaG9zdCBvYmplY3RzIGxpa2UgTmFtZWROb2RlTWFwLCBOb2RlTGlzdCwgYW5kIEhUTUxDb2xsZWN0aW9uXG5cdFx0ICogKHRlY2huaWNhbGx5LCBzaW5jZSBob3N0IG9iamVjdHMgaGF2ZSBiZWVuIGltcGxlbWVudGF0aW9uLWRlcGVuZGVudCxcblx0XHQgKiBhdCBsZWFzdCBiZWZvcmUgRVMyMDE1LCBJRSBoYXNuJ3QgbmVlZGVkIHRvIHdvcmsgdGhpcyB3YXkpLlxuXHRcdCAqIEFsc28gd29ya3Mgb24gc3RyaW5ncywgZml4ZXMgSUUgPCA5IHRvIGFsbG93IGFuIGV4cGxpY2l0IHVuZGVmaW5lZFxuXHRcdCAqIGZvciB0aGUgMm5kIGFyZ3VtZW50IChhcyBpbiBGaXJlZm94KSwgYW5kIHByZXZlbnRzIGVycm9ycyB3aGVuXG5cdFx0ICogY2FsbGVkIG9uIG90aGVyIERPTSBvYmplY3RzLlxuXHRcdCAqL1xuXHRcdHZhciBfc2xpY2UgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIENhbid0IGJlIHVzZWQgd2l0aCBET00gZWxlbWVudHMgaW4gSUUgPCA5XG5cdFx0XHRcdHNsaWNlLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuIHNsaWNlO1xuXHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBGYWlscyBpbiBJRSA8IDlcblxuXHRcdFx0XHQvLyBUaGlzIHdpbGwgd29yayBmb3IgZ2VudWluZSBhcnJheXMsIGFycmF5LWxpa2Ugb2JqZWN0cywgXG5cdFx0XHRcdC8vIE5hbWVkTm9kZU1hcCAoYXR0cmlidXRlcywgZW50aXRpZXMsIG5vdGF0aW9ucyksXG5cdFx0XHRcdC8vIE5vZGVMaXN0IChlLmcuLCBnZXRFbGVtZW50c0J5VGFnTmFtZSksIEhUTUxDb2xsZWN0aW9uIChlLmcuLCBjaGlsZE5vZGVzKSxcblx0XHRcdFx0Ly8gYW5kIHdpbGwgbm90IGZhaWwgb24gb3RoZXIgRE9NIG9iamVjdHMgKGFzIGRvIERPTSBlbGVtZW50cyBpbiBJRSA8IDkpXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XG5cdFx0XHRcdFx0dmFyIGxlbiA9IHRoaXMubGVuZ3RoO1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBiZWdpbiAhPT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRcdFx0YmVnaW4gPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJRSA8IDkgZ2V0cyB1bmhhcHB5IHdpdGggYW4gdW5kZWZpbmVkIGVuZCBhcmd1bWVudFxuXHRcdFx0XHRcdGlmICh0eXBlb2YgZW5kICE9PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBsZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEZvciBuYXRpdmUgQXJyYXkgb2JqZWN0cywgd2UgdXNlIHRoZSBuYXRpdmUgc2xpY2UgZnVuY3Rpb25cblx0XHRcdFx0XHRpZiAodGhpcy5zbGljZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEZvciBhcnJheSBsaWtlIG9iamVjdCB3ZSBoYW5kbGUgaXQgb3Vyc2VsdmVzLlxuXHRcdFx0XHRcdHZhciBpLFxuXHRcdFx0XHRcdFx0XHRjbG9uZWQgPSBbXSxcblx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIG5lZ2F0aXZlIHZhbHVlIGZvciBcImJlZ2luXCJcblx0XHRcdFx0XHRcdFx0c3RhcnQgPSAoYmVnaW4gPj0gMCkgPyBiZWdpbiA6IE1hdGgubWF4KDAsIGxlbiArIGJlZ2luKSxcblx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIG5lZ2F0aXZlIHZhbHVlIGZvciBcImVuZFwiXG5cdFx0XHRcdFx0XHRcdHVwVG8gPSBlbmQgPCAwID8gbGVuICsgZW5kIDogTWF0aC5taW4oZW5kLCBsZW4pLFxuXHRcdFx0XHRcdFx0XHQvLyBBY3R1YWwgZXhwZWN0ZWQgc2l6ZSBvZiB0aGUgc2xpY2Vcblx0XHRcdFx0XHRcdFx0c2l6ZSA9IHVwVG8gLSBzdGFydDtcblxuXHRcdFx0XHRcdGlmIChzaXplID4gMCkge1xuXHRcdFx0XHRcdFx0Y2xvbmVkID0gbmV3IEFycmF5KHNpemUpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuY2hhckF0KSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRjbG9uZWRbaV0gPSB0aGlzLmNoYXJBdChzdGFydCArIGkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVkW2ldID0gdGhpc1tzdGFydCArIGldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjbG9uZWQ7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSkoKTtcblxuXHRcdC8qIC5pbmRleE9mIGRvZXNuJ3QgZXhpc3QgaW4gSUU8OSAqL1xuXHRcdHZhciBfaW5BcnJheSA9IChmdW5jdGlvbigpIHtcblx0XHRcdGlmIChBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGFyciwgdmFsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFyci5pbmNsdWRlcyh2YWwpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbihhcnIsIHZhbCkge1xuXHRcdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2YWwpID49IDA7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oYXJyLCB2YWwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoYXJyW2ldID09PSB2YWwpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gc2FuaXRpemVFbGVtZW50cyhlbGVtZW50cykge1xuXHRcdFx0LyogVW53cmFwIGpRdWVyeS9aZXB0byBvYmplY3RzLiAqL1xuXHRcdFx0aWYgKFR5cGUuaXNXcmFwcGVkKGVsZW1lbnRzKSkge1xuXHRcdFx0XHRlbGVtZW50cyA9IF9zbGljZS5jYWxsKGVsZW1lbnRzKTtcblx0XHRcdFx0LyogV3JhcCBhIHNpbmdsZSBlbGVtZW50IGluIGFuIGFycmF5IHNvIHRoYXQgJC5lYWNoKCkgY2FuIGl0ZXJhdGUgd2l0aCB0aGUgZWxlbWVudCBpbnN0ZWFkIG9mIGl0cyBub2RlJ3MgY2hpbGRyZW4uICovXG5cdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNOb2RlKGVsZW1lbnRzKSkge1xuXHRcdFx0XHRlbGVtZW50cyA9IFtlbGVtZW50c107XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtZW50cztcblx0XHR9XG5cblx0XHR2YXIgVHlwZSA9IHtcblx0XHRcdGlzTnVtYmVyOiBmdW5jdGlvbih2YXJpYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gKHR5cGVvZiB2YXJpYWJsZSA9PT0gXCJudW1iZXJcIik7XG5cdFx0XHR9LFxuXHRcdFx0aXNTdHJpbmc6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0XHRcdHJldHVybiAodHlwZW9mIHZhcmlhYmxlID09PSBcInN0cmluZ1wiKTtcblx0XHRcdH0sXG5cdFx0XHRpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG5cdFx0XHR9LFxuXHRcdFx0aXNGdW5jdGlvbjogZnVuY3Rpb24odmFyaWFibGUpIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcblx0XHRcdH0sXG5cdFx0XHRpc05vZGU6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0XHRcdHJldHVybiB2YXJpYWJsZSAmJiB2YXJpYWJsZS5ub2RlVHlwZTtcblx0XHRcdH0sXG5cdFx0XHQvKiBEZXRlcm1pbmUgaWYgdmFyaWFibGUgaXMgYW4gYXJyYXktbGlrZSB3cmFwcGVkIGpRdWVyeSwgWmVwdG8gb3Igc2ltaWxhciBlbGVtZW50LCBvciBldmVuIGEgTm9kZUxpc3QgZXRjLiAqL1xuXHRcdFx0LyogTk9URTogSFRNTEZvcm1FbGVtZW50cyBhbHNvIGhhdmUgYSBsZW5ndGguICovXG5cdFx0XHRpc1dyYXBwZWQ6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0XHRcdHJldHVybiB2YXJpYWJsZVxuXHRcdFx0XHRcdFx0JiYgdmFyaWFibGUgIT09IHdpbmRvd1xuXHRcdFx0XHRcdFx0JiYgVHlwZS5pc051bWJlcih2YXJpYWJsZS5sZW5ndGgpXG5cdFx0XHRcdFx0XHQmJiAhVHlwZS5pc1N0cmluZyh2YXJpYWJsZSlcblx0XHRcdFx0XHRcdCYmICFUeXBlLmlzRnVuY3Rpb24odmFyaWFibGUpXG5cdFx0XHRcdFx0XHQmJiAhVHlwZS5pc05vZGUodmFyaWFibGUpXG5cdFx0XHRcdFx0XHQmJiAodmFyaWFibGUubGVuZ3RoID09PSAwIHx8IFR5cGUuaXNOb2RlKHZhcmlhYmxlWzBdKSk7XG5cdFx0XHR9LFxuXHRcdFx0aXNTVkc6IGZ1bmN0aW9uKHZhcmlhYmxlKSB7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cuU1ZHRWxlbWVudCAmJiAodmFyaWFibGUgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCk7XG5cdFx0XHR9LFxuXHRcdFx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24odmFyaWFibGUpIHtcblx0XHRcdFx0Zm9yICh2YXIgbmFtZSBpbiB2YXJpYWJsZSkge1xuXHRcdFx0XHRcdGlmICh2YXJpYWJsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKioqKioqKioqKioqKioqKipcblx0XHQgRGVwZW5kZW5jaWVzXG5cdFx0ICoqKioqKioqKioqKioqKioqL1xuXG5cdFx0dmFyICQsXG5cdFx0XHRcdGlzSlF1ZXJ5ID0gZmFsc2U7XG5cblx0XHRpZiAoZ2xvYmFsLmZuICYmIGdsb2JhbC5mbi5qcXVlcnkpIHtcblx0XHRcdCQgPSBnbG9iYWw7XG5cdFx0XHRpc0pRdWVyeSA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQgPSB3aW5kb3cuVmVsb2NpdHkuVXRpbGl0aWVzO1xuXHRcdH1cblxuXHRcdGlmIChJRSA8PSA4ICYmICFpc0pRdWVyeSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVmVsb2NpdHk6IElFOCBhbmQgYmVsb3cgcmVxdWlyZSBqUXVlcnkgdG8gYmUgbG9hZGVkIGJlZm9yZSBWZWxvY2l0eS5cIik7XG5cdFx0fSBlbHNlIGlmIChJRSA8PSA3KSB7XG5cdFx0XHQvKiBSZXZlcnQgdG8galF1ZXJ5J3MgJC5hbmltYXRlKCksIGFuZCBsb3NlIFZlbG9jaXR5J3MgZXh0cmEgZmVhdHVyZXMuICovXG5cdFx0XHRqUXVlcnkuZm4udmVsb2NpdHkgPSBqUXVlcnkuZm4uYW5pbWF0ZTtcblxuXHRcdFx0LyogTm93IHRoYXQgJC5mbi52ZWxvY2l0eSBpcyBhbGlhc2VkLCBhYm9ydCB0aGlzIFZlbG9jaXR5IGRlY2xhcmF0aW9uLiAqL1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKioqKioqKioqKioqKioqKlxuXHRcdCBDb25zdGFudHNcblx0XHQgKioqKioqKioqKioqKioqKiovXG5cblx0XHR2YXIgRFVSQVRJT05fREVGQVVMVCA9IDQwMCxcblx0XHRcdFx0RUFTSU5HX0RFRkFVTFQgPSBcInN3aW5nXCI7XG5cblx0XHQvKioqKioqKioqKioqKlxuXHRcdCBTdGF0ZVxuXHRcdCAqKioqKioqKioqKioqL1xuXG5cdFx0dmFyIFZlbG9jaXR5ID0ge1xuXHRcdFx0LyogQ29udGFpbmVyIGZvciBwYWdlLXdpZGUgVmVsb2NpdHkgc3RhdGUgZGF0YS4gKi9cblx0XHRcdFN0YXRlOiB7XG5cdFx0XHRcdC8qIERldGVjdCBtb2JpbGUgZGV2aWNlcyB0byBkZXRlcm1pbmUgaWYgbW9iaWxlSEEgc2hvdWxkIGJlIHR1cm5lZCBvbi4gKi9cblx0XHRcdFx0aXNNb2JpbGU6IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcblx0XHRcdFx0LyogVGhlIG1vYmlsZUhBIG9wdGlvbidzIGJlaGF2aW9yIGNoYW5nZXMgb24gb2xkZXIgQW5kcm9pZCBkZXZpY2VzIChHaW5nZXJicmVhZCwgdmVyc2lvbnMgMi4zLjMtMi4zLjcpLiAqL1xuXHRcdFx0XHRpc0FuZHJvaWQ6IC9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcblx0XHRcdFx0aXNHaW5nZXJicmVhZDogL0FuZHJvaWQgMlxcLjNcXC5bMy03XS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG5cdFx0XHRcdGlzQ2hyb21lOiB3aW5kb3cuY2hyb21lLFxuXHRcdFx0XHRpc0ZpcmVmb3g6IC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcblx0XHRcdFx0LyogQ3JlYXRlIGEgY2FjaGVkIGVsZW1lbnQgZm9yIHJlLXVzZSB3aGVuIGNoZWNraW5nIGZvciBDU1MgcHJvcGVydHkgcHJlZml4ZXMuICovXG5cdFx0XHRcdHByZWZpeEVsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG5cdFx0XHRcdC8qIENhY2hlIGV2ZXJ5IHByZWZpeCBtYXRjaCB0byBhdm9pZCByZXBlYXRpbmcgbG9va3Vwcy4gKi9cblx0XHRcdFx0cHJlZml4TWF0Y2hlczoge30sXG5cdFx0XHRcdC8qIENhY2hlIHRoZSBhbmNob3IgdXNlZCBmb3IgYW5pbWF0aW5nIHdpbmRvdyBzY3JvbGxpbmcuICovXG5cdFx0XHRcdHNjcm9sbEFuY2hvcjogbnVsbCxcblx0XHRcdFx0LyogQ2FjaGUgdGhlIGJyb3dzZXItc3BlY2lmaWMgcHJvcGVydHkgbmFtZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBzY3JvbGwgYW5jaG9yLiAqL1xuXHRcdFx0XHRzY3JvbGxQcm9wZXJ0eUxlZnQ6IG51bGwsXG5cdFx0XHRcdHNjcm9sbFByb3BlcnR5VG9wOiBudWxsLFxuXHRcdFx0XHQvKiBLZWVwIHRyYWNrIG9mIHdoZXRoZXIgb3VyIFJBRiB0aWNrIGlzIHJ1bm5pbmcuICovXG5cdFx0XHRcdGlzVGlja2luZzogZmFsc2UsXG5cdFx0XHRcdC8qIENvbnRhaW5lciBmb3IgZXZlcnkgaW4tcHJvZ3Jlc3MgY2FsbCB0byBWZWxvY2l0eS4gKi9cblx0XHRcdFx0Y2FsbHM6IFtdLFxuXHRcdFx0XHRkZWxheWVkRWxlbWVudHM6IHtcblx0XHRcdFx0XHRjb3VudDogMFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0LyogVmVsb2NpdHkncyBjdXN0b20gQ1NTIHN0YWNrLiBNYWRlIGdsb2JhbCBmb3IgdW5pdCB0ZXN0aW5nLiAqL1xuXHRcdFx0Q1NTOiB7LyogRGVmaW5lZCBiZWxvdy4gKi99LFxuXHRcdFx0LyogQSBzaGltIG9mIHRoZSBqUXVlcnkgdXRpbGl0eSBmdW5jdGlvbnMgdXNlZCBieSBWZWxvY2l0eSAtLSBwcm92aWRlZCBieSBWZWxvY2l0eSdzIG9wdGlvbmFsIGpRdWVyeSBzaGltLiAqL1xuXHRcdFx0VXRpbGl0aWVzOiAkLFxuXHRcdFx0LyogQ29udGFpbmVyIGZvciB0aGUgdXNlcidzIGN1c3RvbSBhbmltYXRpb24gcmVkaXJlY3RzIHRoYXQgYXJlIHJlZmVyZW5jZWQgYnkgbmFtZSBpbiBwbGFjZSBvZiB0aGUgcHJvcGVydGllcyBtYXAgYXJndW1lbnQuICovXG5cdFx0XHRSZWRpcmVjdHM6IHsvKiBNYW51YWxseSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyLiAqL30sXG5cdFx0XHRFYXNpbmdzOiB7LyogRGVmaW5lZCBiZWxvdy4gKi99LFxuXHRcdFx0LyogQXR0ZW1wdCB0byB1c2UgRVM2IFByb21pc2VzIGJ5IGRlZmF1bHQuIFVzZXJzIGNhbiBvdmVycmlkZSB0aGlzIHdpdGggYSB0aGlyZC1wYXJ0eSBwcm9taXNlcyBsaWJyYXJ5LiAqL1xuXHRcdFx0UHJvbWlzZTogd2luZG93LlByb21pc2UsXG5cdFx0XHQvKiBWZWxvY2l0eSBvcHRpb24gZGVmYXVsdHMsIHdoaWNoIGNhbiBiZSBvdmVycmlkZW4gYnkgdGhlIHVzZXIuICovXG5cdFx0XHRkZWZhdWx0czoge1xuXHRcdFx0XHRxdWV1ZTogXCJcIixcblx0XHRcdFx0ZHVyYXRpb246IERVUkFUSU9OX0RFRkFVTFQsXG5cdFx0XHRcdGVhc2luZzogRUFTSU5HX0RFRkFVTFQsXG5cdFx0XHRcdGJlZ2luOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbXBsZXRlOiB1bmRlZmluZWQsXG5cdFx0XHRcdHByb2dyZXNzOiB1bmRlZmluZWQsXG5cdFx0XHRcdGRpc3BsYXk6IHVuZGVmaW5lZCxcblx0XHRcdFx0dmlzaWJpbGl0eTogdW5kZWZpbmVkLFxuXHRcdFx0XHRsb29wOiBmYWxzZSxcblx0XHRcdFx0ZGVsYXk6IGZhbHNlLFxuXHRcdFx0XHRtb2JpbGVIQTogdHJ1ZSxcblx0XHRcdFx0LyogQWR2YW5jZWQ6IFNldCB0byBmYWxzZSB0byBwcmV2ZW50IHByb3BlcnR5IHZhbHVlcyBmcm9tIGJlaW5nIGNhY2hlZCBiZXR3ZWVuIGNvbnNlY3V0aXZlIFZlbG9jaXR5LWluaXRpYXRlZCBjaGFpbiBjYWxscy4gKi9cblx0XHRcdFx0X2NhY2hlVmFsdWVzOiB0cnVlLFxuXHRcdFx0XHQvKiBBZHZhbmNlZDogU2V0IHRvIGZhbHNlIGlmIHRoZSBwcm9taXNlIHNob3VsZCBhbHdheXMgcmVzb2x2ZSBvbiBlbXB0eSBlbGVtZW50IGxpc3RzLiAqL1xuXHRcdFx0XHRwcm9taXNlUmVqZWN0RW1wdHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQvKiBBIGRlc2lnbiBnb2FsIG9mIFZlbG9jaXR5IGlzIHRvIGNhY2hlIGRhdGEgd2hlcmV2ZXIgcG9zc2libGUgaW4gb3JkZXIgdG8gYXZvaWQgRE9NIHJlcXVlcnlpbmcuIEFjY29yZGluZ2x5LCBlYWNoIGVsZW1lbnQgaGFzIGEgZGF0YSBjYWNoZS4gKi9cblx0XHRcdGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdFx0JC5kYXRhKGVsZW1lbnQsIFwidmVsb2NpdHlcIiwge1xuXHRcdFx0XHRcdC8qIFN0b3JlIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgZWxlbWVudCwgc2luY2UgaXRzIHByb3BlcnRpZXMgYXJlIHJldHJpZXZlZCBhbmQgdXBkYXRlZCBkaWZmZXJlbnRseSB0aGFuIHN0YW5kYXJkIEhUTUwgZWxlbWVudHMuICovXG5cdFx0XHRcdFx0aXNTVkc6IFR5cGUuaXNTVkcoZWxlbWVudCksXG5cdFx0XHRcdFx0LyogS2VlcCB0cmFjayBvZiB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBiZWluZyBhbmltYXRlZCBieSBWZWxvY2l0eS5cblx0XHRcdFx0XHQgVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IHByb3BlcnR5IHZhbHVlcyBhcmUgbm90IHRyYW5zZmVycmVkIGJldHdlZW4gbm9uLWNvbnNlY3V0aXZlIChzdGFsZSkgY2FsbHMuICovXG5cdFx0XHRcdFx0aXNBbmltYXRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdC8qIEEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50J3MgbGl2ZSBjb21wdXRlZFN0eWxlIG9iamVjdC4gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvd2luZG93LmdldENvbXB1dGVkU3R5bGUgKi9cblx0XHRcdFx0XHRjb21wdXRlZFN0eWxlOiBudWxsLFxuXHRcdFx0XHRcdC8qIFR3ZWVuIGRhdGEgaXMgY2FjaGVkIGZvciBlYWNoIGFuaW1hdGlvbiBvbiB0aGUgZWxlbWVudCBzbyB0aGF0IGRhdGEgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgY2FsbHMgLS1cblx0XHRcdFx0XHQgaW4gcGFydGljdWxhciwgZW5kIHZhbHVlcyBhcmUgdXNlZCBhcyBzdWJzZXF1ZW50IHN0YXJ0IHZhbHVlcyBpbiBjb25zZWN1dGl2ZSBWZWxvY2l0eSBjYWxscy4gKi9cblx0XHRcdFx0XHR0d2VlbnNDb250YWluZXI6IG51bGwsXG5cdFx0XHRcdFx0LyogVGhlIGZ1bGwgcm9vdCBwcm9wZXJ0eSB2YWx1ZXMgb2YgZWFjaCBDU1MgaG9vayBiZWluZyBhbmltYXRlZCBvbiB0aGlzIGVsZW1lbnQgYXJlIGNhY2hlZCBzbyB0aGF0OlxuXHRcdFx0XHRcdCAxKSBDb25jdXJyZW50bHktYW5pbWF0aW5nIGhvb2tzIHNoYXJpbmcgdGhlIHNhbWUgcm9vdCBjYW4gaGF2ZSB0aGVpciByb290IHZhbHVlcycgbWVyZ2VkIGludG8gb25lIHdoaWxlIHR3ZWVuaW5nLlxuXHRcdFx0XHRcdCAyKSBQb3N0LWhvb2staW5qZWN0aW9uIHJvb3QgdmFsdWVzIGNhbiBiZSB0cmFuc2ZlcnJlZCBvdmVyIHRvIGNvbnNlY3V0aXZlbHkgY2hhaW5lZCBWZWxvY2l0eSBjYWxscyBhcyBzdGFydGluZyByb290IHZhbHVlcy4gKi9cblx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZUNhY2hlOiB7fSxcblx0XHRcdFx0XHQvKiBBIGNhY2hlIGZvciB0cmFuc2Zvcm0gdXBkYXRlcywgd2hpY2ggbXVzdCBiZSBtYW51YWxseSBmbHVzaGVkIHZpYSBDU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZSgpLiAqL1xuXHRcdFx0XHRcdHRyYW5zZm9ybUNhY2hlOiB7fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHQvKiBBIHBhcmFsbGVsIHRvIGpRdWVyeSdzICQuY3NzKCksIHVzZWQgZm9yIGdldHRpbmcvc2V0dGluZyBWZWxvY2l0eSdzIGhvb2tlZCBDU1MgcHJvcGVydGllcy4gKi9cblx0XHRcdGhvb2s6IG51bGwsIC8qIERlZmluZWQgYmVsb3cuICovXG5cdFx0XHQvKiBWZWxvY2l0eS13aWRlIGFuaW1hdGlvbiB0aW1lIHJlbWFwcGluZyBmb3IgdGVzdGluZyBwdXJwb3Nlcy4gKi9cblx0XHRcdG1vY2s6IGZhbHNlLFxuXHRcdFx0dmVyc2lvbjoge21ham9yOiAxLCBtaW5vcjogNSwgcGF0Y2g6IDB9LFxuXHRcdFx0LyogU2V0IHRvIDEgb3IgMiAobW9zdCB2ZXJib3NlKSB0byBvdXRwdXQgZGVidWcgaW5mbyB0byBjb25zb2xlLiAqL1xuXHRcdFx0ZGVidWc6IGZhbHNlLFxuXHRcdFx0LyogVXNlIHJBRiBoaWdoIHJlc29sdXRpb24gdGltZXN0YW1wIHdoZW4gYXZhaWxhYmxlICovXG5cdFx0XHR0aW1lc3RhbXA6IHRydWUsXG5cdFx0XHQvKiBQYXVzZSBhbGwgYW5pbWF0aW9ucyAqL1xuXHRcdFx0cGF1c2VBbGw6IGZ1bmN0aW9uKHF1ZXVlTmFtZSkge1xuXHRcdFx0XHR2YXIgY3VycmVudFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG5cdFx0XHRcdCQuZWFjaChWZWxvY2l0eS5TdGF0ZS5jYWxscywgZnVuY3Rpb24oaSwgYWN0aXZlQ2FsbCkge1xuXG5cdFx0XHRcdFx0aWYgKGFjdGl2ZUNhbGwpIHtcblxuXHRcdFx0XHRcdFx0LyogSWYgd2UgaGF2ZSBhIHF1ZXVlTmFtZSBhbmQgdGhpcyBjYWxsIGlzIG5vdCBvbiB0aGF0IHF1ZXVlLCBza2lwICovXG5cdFx0XHRcdFx0XHRpZiAocXVldWVOYW1lICE9PSB1bmRlZmluZWQgJiYgKChhY3RpdmVDYWxsWzJdLnF1ZXVlICE9PSBxdWV1ZU5hbWUpIHx8IChhY3RpdmVDYWxsWzJdLnF1ZXVlID09PSBmYWxzZSkpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBTZXQgY2FsbCB0byBwYXVzZWQgKi9cblx0XHRcdFx0XHRcdGFjdGl2ZUNhbGxbNV0gPSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VtZTogZmFsc2Vcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvKiBQYXVzZSB0aW1lcnMgb24gYW55IGN1cnJlbnRseSBkZWxheWVkIGNhbGxzICovXG5cdFx0XHRcdCQuZWFjaChWZWxvY2l0eS5TdGF0ZS5kZWxheWVkRWxlbWVudHMsIGZ1bmN0aW9uKGssIGVsZW1lbnQpIHtcblx0XHRcdFx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGF1c2VEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdC8qIFJlc3VtZSBhbGwgYW5pbWF0aW9ucyAqL1xuXHRcdFx0cmVzdW1lQWxsOiBmdW5jdGlvbihxdWV1ZU5hbWUpIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuXHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuY2FsbHMsIGZ1bmN0aW9uKGksIGFjdGl2ZUNhbGwpIHtcblxuXHRcdFx0XHRcdGlmIChhY3RpdmVDYWxsKSB7XG5cblx0XHRcdFx0XHRcdC8qIElmIHdlIGhhdmUgYSBxdWV1ZU5hbWUgYW5kIHRoaXMgY2FsbCBpcyBub3Qgb24gdGhhdCBxdWV1ZSwgc2tpcCAqL1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXVlTmFtZSAhPT0gdW5kZWZpbmVkICYmICgoYWN0aXZlQ2FsbFsyXS5xdWV1ZSAhPT0gcXVldWVOYW1lKSB8fCAoYWN0aXZlQ2FsbFsyXS5xdWV1ZSA9PT0gZmFsc2UpKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyogU2V0IGNhbGwgdG8gcmVzdW1lZCBpZiBpdCB3YXMgcGF1c2VkICovXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbFs1XSkge1xuXHRcdFx0XHRcdFx0XHRhY3RpdmVDYWxsWzVdLnJlc3VtZSA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0LyogUmVzdW1lIHRpbWVycyBvbiBhbnkgY3VycmVudGx5IGRlbGF5ZWQgY2FsbHMgKi9cblx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50cywgZnVuY3Rpb24oaywgZWxlbWVudCkge1xuXHRcdFx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXN1bWVEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKiBSZXRyaWV2ZSB0aGUgYXBwcm9wcmlhdGUgc2Nyb2xsIGFuY2hvciBhbmQgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGJyb3dzZXI6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cuc2Nyb2xsWSAqL1xuXHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsQW5jaG9yID0gd2luZG93O1xuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0ID0gXCJwYWdlWE9mZnNldFwiO1xuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3AgPSBcInBhZ2VZT2Zmc2V0XCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFZlbG9jaXR5LlN0YXRlLnNjcm9sbEFuY2hvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keTtcblx0XHRcdFZlbG9jaXR5LlN0YXRlLnNjcm9sbFByb3BlcnR5TGVmdCA9IFwic2Nyb2xsTGVmdFwiO1xuXHRcdFx0VmVsb2NpdHkuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3AgPSBcInNjcm9sbFRvcFwiO1xuXHRcdH1cblxuXHRcdC8qIFNob3J0aGFuZCBhbGlhcyBmb3IgalF1ZXJ5J3MgJC5kYXRhKCkgdXRpbGl0eS4gKi9cblx0XHRmdW5jdGlvbiBEYXRhKGVsZW1lbnQpIHtcblx0XHRcdC8qIEhhcmRjb2RlIGEgcmVmZXJlbmNlIHRvIHRoZSBwbHVnaW4gbmFtZS4gKi9cblx0XHRcdHZhciByZXNwb25zZSA9ICQuZGF0YShlbGVtZW50LCBcInZlbG9jaXR5XCIpO1xuXG5cdFx0XHQvKiBqUXVlcnkgPD0xLjQuMiByZXR1cm5zIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQgd2hlbiBubyBtYXRjaCBpcyBmb3VuZC4gV2Ugbm9ybWFsaXplIHRoaXMgYmVoYXZpb3IuICovXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UgPT09IG51bGwgPyB1bmRlZmluZWQgOiByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvKioqKioqKioqKioqKipcblx0XHQgRGVsYXkgVGltZXJcblx0XHQgKioqKioqKioqKioqKiovXG5cblx0XHRmdW5jdGlvbiBwYXVzZURlbGF5T25FbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRUaW1lKSB7XG5cdFx0XHQvKiBDaGVjayBmb3IgYW55IGRlbGF5IHRpbWVycywgYW5kIHBhdXNlIHRoZSBzZXQgdGltZW91dHMgKHdoaWxlIHByZXNlcnZpbmcgdGltZSBkYXRhKVxuXHRcdFx0IHRvIGJlIHJlc3VtZWQgd2hlbiB0aGUgXCJyZXN1bWVcIiBjb21tYW5kIGlzIGlzc3VlZCAqL1xuXHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xuXHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5kZWxheVRpbWVyICYmICFkYXRhLmRlbGF5UGF1c2VkKSB7XG5cdFx0XHRcdGRhdGEuZGVsYXlSZW1haW5pbmcgPSBkYXRhLmRlbGF5IC0gY3VycmVudFRpbWUgKyBkYXRhLmRlbGF5QmVnaW47XG5cdFx0XHRcdGRhdGEuZGVsYXlQYXVzZWQgPSB0cnVlO1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoZGF0YS5kZWxheVRpbWVyLnNldFRpbWVvdXQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJlc3VtZURlbGF5T25FbGVtZW50KGVsZW1lbnQsIGN1cnJlbnRUaW1lKSB7XG5cdFx0XHQvKiBDaGVjayBmb3IgYW55IHBhdXNlZCB0aW1lcnMgYW5kIHJlc3VtZSAqL1xuXHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xuXHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5kZWxheVRpbWVyICYmIGRhdGEuZGVsYXlQYXVzZWQpIHtcblx0XHRcdFx0LyogSWYgdGhlIGVsZW1lbnQgd2FzIG1pZC1kZWxheSwgcmUgaW5pdGlhdGUgdGhlIHRpbWVvdXQgd2l0aCB0aGUgcmVtYWluaW5nIGRlbGF5ICovXG5cdFx0XHRcdGRhdGEuZGVsYXlQYXVzZWQgPSBmYWxzZTtcblx0XHRcdFx0ZGF0YS5kZWxheVRpbWVyLnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0KGRhdGEuZGVsYXlUaW1lci5uZXh0LCBkYXRhLmRlbGF5UmVtYWluaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cblxuXG5cdFx0LyoqKioqKioqKioqKioqXG5cdFx0IEVhc2luZ1xuXHRcdCAqKioqKioqKioqKioqKi9cblxuXHRcdC8qIFN0ZXAgZWFzaW5nIGdlbmVyYXRvci4gKi9cblx0XHRmdW5jdGlvbiBnZW5lcmF0ZVN0ZXAoc3RlcHMpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihwKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKHAgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyogQmV6aWVyIGN1cnZlIGZ1bmN0aW9uIGdlbmVyYXRvci4gQ29weXJpZ2h0IEdhZXRhbiBSZW5hdWRlYXUuIE1JVCBMaWNlbnNlOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXG5cdFx0ZnVuY3Rpb24gZ2VuZXJhdGVCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cdFx0XHR2YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0LFxuXHRcdFx0XHRcdE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcblx0XHRcdFx0XHRTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG5cdFx0XHRcdFx0U1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcblx0XHRcdFx0XHRrU3BsaW5lVGFibGVTaXplID0gMTEsXG5cdFx0XHRcdFx0a1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApLFxuXHRcdFx0XHRcdGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IFwiRmxvYXQzMkFycmF5XCIgaW4gd2luZG93O1xuXG5cdFx0XHQvKiBNdXN0IGNvbnRhaW4gZm91ciBhcmd1bWVudHMuICovXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gNCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8qIEFyZ3VtZW50cyBtdXN0IGJlIG51bWJlcnMuICovXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSAhPT0gXCJudW1iZXJcIiB8fCBpc05hTihhcmd1bWVudHNbaV0pIHx8ICFpc0Zpbml0ZShhcmd1bWVudHNbaV0pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qIFggdmFsdWVzIG11c3QgYmUgaW4gdGhlIFswLCAxXSByYW5nZS4gKi9cblx0XHRcdG1YMSA9IE1hdGgubWluKG1YMSwgMSk7XG5cdFx0XHRtWDIgPSBNYXRoLm1pbihtWDIsIDEpO1xuXHRcdFx0bVgxID0gTWF0aC5tYXgobVgxLCAwKTtcblx0XHRcdG1YMiA9IE1hdGgubWF4KG1YMiwgMCk7XG5cblx0XHRcdHZhciBtU2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcblxuXHRcdFx0ZnVuY3Rpb24gQShhQTEsIGFBMikge1xuXHRcdFx0XHRyZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gQihhQTEsIGFBMikge1xuXHRcdFx0XHRyZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExO1xuXHRcdFx0fVxuXHRcdFx0ZnVuY3Rpb24gQyhhQTEpIHtcblx0XHRcdFx0cmV0dXJuIDMuMCAqIGFBMTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHtcblx0XHRcdFx0cmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHtcblx0XHRcdFx0cmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NUKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuXHRcdFx0XHRcdHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cblx0XHRcdFx0XHRpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcblx0XHRcdFx0XHRcdHJldHVybiBhR3Vlc3NUO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG5cdFx0XHRcdFx0YUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBhR3Vlc3NUO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBjYWxjU2FtcGxlVmFsdWVzKCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuXHRcdFx0XHRcdG1TYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQikge1xuXHRcdFx0XHR2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcblxuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Y3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcblx0XHRcdFx0XHRjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuXHRcdFx0XHRcdGlmIChjdXJyZW50WCA+IDAuMCkge1xuXHRcdFx0XHRcdFx0YUIgPSBjdXJyZW50VDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YUEgPSBjdXJyZW50VDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRUO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBnZXRURm9yWChhWCkge1xuXHRcdFx0XHR2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcblx0XHRcdFx0XHRcdGN1cnJlbnRTYW1wbGUgPSAxLFxuXHRcdFx0XHRcdFx0bGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG5cdFx0XHRcdGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIG1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuXHRcdFx0XHRcdGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LS1jdXJyZW50U2FtcGxlO1xuXG5cdFx0XHRcdHZhciBkaXN0ID0gKGFYIC0gbVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAobVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBtU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSxcblx0XHRcdFx0XHRcdGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplLFxuXHRcdFx0XHRcdFx0aW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cblx0XHRcdFx0aWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGd1ZXNzRm9yVDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cblx0XHRcdGZ1bmN0aW9uIHByZWNvbXB1dGUoKSB7XG5cdFx0XHRcdF9wcmVjb21wdXRlZCA9IHRydWU7XG5cdFx0XHRcdGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuXHRcdFx0XHRcdGNhbGNTYW1wbGVWYWx1ZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZiA9IGZ1bmN0aW9uKGFYKSB7XG5cdFx0XHRcdGlmICghX3ByZWNvbXB1dGVkKSB7XG5cdFx0XHRcdFx0cHJlY29tcHV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuXHRcdFx0XHRcdHJldHVybiBhWDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYVggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYVggPT09IDEpIHtcblx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuXHRcdFx0fTtcblxuXHRcdFx0Zi5nZXRDb250cm9sUG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBbe3g6IG1YMSwgeTogbVkxfSwge3g6IG1YMiwgeTogbVkyfV07XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgc3RyID0gXCJnZW5lcmF0ZUJlemllcihcIiArIFttWDEsIG1ZMSwgbVgyLCBtWTJdICsgXCIpXCI7XG5cdFx0XHRmLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gZjtcblx0XHR9XG5cblx0XHQvKiBSdW5nZS1LdXR0YSBzcHJpbmcgcGh5c2ljcyBmdW5jdGlvbiBnZW5lcmF0b3IuIEFkYXB0ZWQgZnJvbSBGcmFtZXIuanMsIGNvcHlyaWdodCBLb2VuIEJvay4gTUlUIExpY2Vuc2U6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UgKi9cblx0XHQvKiBHaXZlbiBhIHRlbnNpb24sIGZyaWN0aW9uLCBhbmQgZHVyYXRpb24sIGEgc2ltdWxhdGlvbiBhdCA2MEZQUyB3aWxsIGZpcnN0IHJ1biB3aXRob3V0IGEgZGVmaW5lZCBkdXJhdGlvbiBpbiBvcmRlciB0byBjYWxjdWxhdGUgdGhlIGZ1bGwgcGF0aC4gQSBzZWNvbmQgcGFzc1xuXHRcdCB0aGVuIGFkanVzdHMgdGhlIHRpbWUgZGVsdGEgLS0gdXNpbmcgdGhlIHJlbGF0aW9uIGJldHdlZW4gYWN0dWFsIHRpbWUgYW5kIGR1cmF0aW9uIC0tIHRvIGNhbGN1bGF0ZSB0aGUgcGF0aCBmb3IgdGhlIGR1cmF0aW9uLWNvbnN0cmFpbmVkIGFuaW1hdGlvbi4gKi9cblx0XHR2YXIgZ2VuZXJhdGVTcHJpbmdSSzQgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHRmdW5jdGlvbiBzcHJpbmdBY2NlbGVyYXRpb25Gb3JTdGF0ZShzdGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gKC1zdGF0ZS50ZW5zaW9uICogc3RhdGUueCkgLSAoc3RhdGUuZnJpY3Rpb24gKiBzdGF0ZS52KTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gc3ByaW5nRXZhbHVhdGVTdGF0ZVdpdGhEZXJpdmF0aXZlKGluaXRpYWxTdGF0ZSwgZHQsIGRlcml2YXRpdmUpIHtcblx0XHRcdFx0dmFyIHN0YXRlID0ge1xuXHRcdFx0XHRcdHg6IGluaXRpYWxTdGF0ZS54ICsgZGVyaXZhdGl2ZS5keCAqIGR0LFxuXHRcdFx0XHRcdHY6IGluaXRpYWxTdGF0ZS52ICsgZGVyaXZhdGl2ZS5kdiAqIGR0LFxuXHRcdFx0XHRcdHRlbnNpb246IGluaXRpYWxTdGF0ZS50ZW5zaW9uLFxuXHRcdFx0XHRcdGZyaWN0aW9uOiBpbml0aWFsU3RhdGUuZnJpY3Rpb25cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXR1cm4ge2R4OiBzdGF0ZS52LCBkdjogc3ByaW5nQWNjZWxlcmF0aW9uRm9yU3RhdGUoc3RhdGUpfTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gc3ByaW5nSW50ZWdyYXRlU3RhdGUoc3RhdGUsIGR0KSB7XG5cdFx0XHRcdHZhciBhID0ge1xuXHRcdFx0XHRcdGR4OiBzdGF0ZS52LFxuXHRcdFx0XHRcdGR2OiBzcHJpbmdBY2NlbGVyYXRpb25Gb3JTdGF0ZShzdGF0ZSlcblx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGIgPSBzcHJpbmdFdmFsdWF0ZVN0YXRlV2l0aERlcml2YXRpdmUoc3RhdGUsIGR0ICogMC41LCBhKSxcblx0XHRcdFx0XHRcdGMgPSBzcHJpbmdFdmFsdWF0ZVN0YXRlV2l0aERlcml2YXRpdmUoc3RhdGUsIGR0ICogMC41LCBiKSxcblx0XHRcdFx0XHRcdGQgPSBzcHJpbmdFdmFsdWF0ZVN0YXRlV2l0aERlcml2YXRpdmUoc3RhdGUsIGR0LCBjKSxcblx0XHRcdFx0XHRcdGR4ZHQgPSAxLjAgLyA2LjAgKiAoYS5keCArIDIuMCAqIChiLmR4ICsgYy5keCkgKyBkLmR4KSxcblx0XHRcdFx0XHRcdGR2ZHQgPSAxLjAgLyA2LjAgKiAoYS5kdiArIDIuMCAqIChiLmR2ICsgYy5kdikgKyBkLmR2KTtcblxuXHRcdFx0XHRzdGF0ZS54ID0gc3RhdGUueCArIGR4ZHQgKiBkdDtcblx0XHRcdFx0c3RhdGUudiA9IHN0YXRlLnYgKyBkdmR0ICogZHQ7XG5cblx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gc3ByaW5nUks0RmFjdG9yeSh0ZW5zaW9uLCBmcmljdGlvbiwgZHVyYXRpb24pIHtcblxuXHRcdFx0XHR2YXIgaW5pdFN0YXRlID0ge1xuXHRcdFx0XHRcdHg6IC0xLFxuXHRcdFx0XHRcdHY6IDAsXG5cdFx0XHRcdFx0dGVuc2lvbjogbnVsbCxcblx0XHRcdFx0XHRmcmljdGlvbjogbnVsbFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cGF0aCA9IFswXSxcblx0XHRcdFx0XHRcdHRpbWVfbGFwc2VkID0gMCxcblx0XHRcdFx0XHRcdHRvbGVyYW5jZSA9IDEgLyAxMDAwMCxcblx0XHRcdFx0XHRcdERUID0gMTYgLyAxMDAwLFxuXHRcdFx0XHRcdFx0aGF2ZV9kdXJhdGlvbiwgZHQsIGxhc3Rfc3RhdGU7XG5cblx0XHRcdFx0dGVuc2lvbiA9IHBhcnNlRmxvYXQodGVuc2lvbikgfHwgNTAwO1xuXHRcdFx0XHRmcmljdGlvbiA9IHBhcnNlRmxvYXQoZnJpY3Rpb24pIHx8IDIwO1xuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IG51bGw7XG5cblx0XHRcdFx0aW5pdFN0YXRlLnRlbnNpb24gPSB0ZW5zaW9uO1xuXHRcdFx0XHRpbml0U3RhdGUuZnJpY3Rpb24gPSBmcmljdGlvbjtcblxuXHRcdFx0XHRoYXZlX2R1cmF0aW9uID0gZHVyYXRpb24gIT09IG51bGw7XG5cblx0XHRcdFx0LyogQ2FsY3VsYXRlIHRoZSBhY3R1YWwgdGltZSBpdCB0YWtlcyBmb3IgdGhpcyBhbmltYXRpb24gdG8gY29tcGxldGUgd2l0aCB0aGUgcHJvdmlkZWQgY29uZGl0aW9ucy4gKi9cblx0XHRcdFx0aWYgKGhhdmVfZHVyYXRpb24pIHtcblx0XHRcdFx0XHQvKiBSdW4gdGhlIHNpbXVsYXRpb24gd2l0aG91dCBhIGR1cmF0aW9uLiAqL1xuXHRcdFx0XHRcdHRpbWVfbGFwc2VkID0gc3ByaW5nUks0RmFjdG9yeSh0ZW5zaW9uLCBmcmljdGlvbik7XG5cdFx0XHRcdFx0LyogQ29tcHV0ZSB0aGUgYWRqdXN0ZWQgdGltZSBkZWx0YS4gKi9cblx0XHRcdFx0XHRkdCA9IHRpbWVfbGFwc2VkIC8gZHVyYXRpb24gKiBEVDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkdCA9IERUO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHQvKiBOZXh0L3N0ZXAgZnVuY3Rpb24gLiovXG5cdFx0XHRcdFx0bGFzdF9zdGF0ZSA9IHNwcmluZ0ludGVncmF0ZVN0YXRlKGxhc3Rfc3RhdGUgfHwgaW5pdFN0YXRlLCBkdCk7XG5cdFx0XHRcdFx0LyogU3RvcmUgdGhlIHBvc2l0aW9uLiAqL1xuXHRcdFx0XHRcdHBhdGgucHVzaCgxICsgbGFzdF9zdGF0ZS54KTtcblx0XHRcdFx0XHR0aW1lX2xhcHNlZCArPSAxNjtcblx0XHRcdFx0XHQvKiBJZiB0aGUgY2hhbmdlIHRocmVzaG9sZCBpcyByZWFjaGVkLCBicmVhay4gKi9cblx0XHRcdFx0XHRpZiAoIShNYXRoLmFicyhsYXN0X3N0YXRlLngpID4gdG9sZXJhbmNlICYmIE1hdGguYWJzKGxhc3Rfc3RhdGUudikgPiB0b2xlcmFuY2UpKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBJZiBkdXJhdGlvbiBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIHRoZSBhY3R1YWwgdGltZSByZXF1aXJlZCBmb3IgY29tcGxldGluZyB0aGlzIGFuaW1hdGlvbi4gT3RoZXJ3aXNlLCByZXR1cm4gYSBjbG9zdXJlIHRoYXQgaG9sZHMgdGhlXG5cdFx0XHRcdCBjb21wdXRlZCBwYXRoIGFuZCByZXR1cm5zIGEgc25hcHNob3Qgb2YgdGhlIHBvc2l0aW9uIGFjY29yZGluZyB0byBhIGdpdmVuIHBlcmNlbnRDb21wbGV0ZS4gKi9cblx0XHRcdFx0cmV0dXJuICFoYXZlX2R1cmF0aW9uID8gdGltZV9sYXBzZWQgOiBmdW5jdGlvbihwZXJjZW50Q29tcGxldGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gcGF0aFsgKHBlcmNlbnRDb21wbGV0ZSAqIChwYXRoLmxlbmd0aCAtIDEpKSB8IDAgXTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fSgpKTtcblxuXHRcdC8qIGpRdWVyeSBlYXNpbmdzLiAqL1xuXHRcdFZlbG9jaXR5LkVhc2luZ3MgPSB7XG5cdFx0XHRsaW5lYXI6IGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIHA7XG5cdFx0XHR9LFxuXHRcdFx0c3dpbmc6IGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKHAgKiBNYXRoLlBJKSAvIDI7XG5cdFx0XHR9LFxuXHRcdFx0LyogQm9udXMgXCJzcHJpbmdcIiBlYXNpbmcsIHdoaWNoIGlzIGEgbGVzcyBleGFnZ2VyYXRlZCB2ZXJzaW9uIG9mIGVhc2VJbk91dEVsYXN0aWMuICovXG5cdFx0XHRzcHJpbmc6IGZ1bmN0aW9uKHApIHtcblx0XHRcdFx0cmV0dXJuIDEgLSAoTWF0aC5jb3MocCAqIDQuNSAqIE1hdGguUEkpICogTWF0aC5leHAoLXAgKiA2KSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qIENTUzMgYW5kIFJvYmVydCBQZW5uZXIgZWFzaW5ncy4gKi9cblx0XHQkLmVhY2goXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRbXCJlYXNlXCIsIFswLjI1LCAwLjEsIDAuMjUsIDEuMF1dLFxuXHRcdFx0XHRcdFtcImVhc2UtaW5cIiwgWzAuNDIsIDAuMCwgMS4wMCwgMS4wXV0sXG5cdFx0XHRcdFx0W1wiZWFzZS1vdXRcIiwgWzAuMDAsIDAuMCwgMC41OCwgMS4wXV0sXG5cdFx0XHRcdFx0W1wiZWFzZS1pbi1vdXRcIiwgWzAuNDIsIDAuMCwgMC41OCwgMS4wXV0sXG5cdFx0XHRcdFx0W1wiZWFzZUluU2luZVwiLCBbMC40NywgMCwgMC43NDUsIDAuNzE1XV0sXG5cdFx0XHRcdFx0W1wiZWFzZU91dFNpbmVcIiwgWzAuMzksIDAuNTc1LCAwLjU2NSwgMV1dLFxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFNpbmVcIiwgWzAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1XV0sXG5cdFx0XHRcdFx0W1wiZWFzZUluUXVhZFwiLCBbMC41NSwgMC4wODUsIDAuNjgsIDAuNTNdXSxcblx0XHRcdFx0XHRbXCJlYXNlT3V0UXVhZFwiLCBbMC4yNSwgMC40NiwgMC40NSwgMC45NF1dLFxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFF1YWRcIiwgWzAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTVdXSxcblx0XHRcdFx0XHRbXCJlYXNlSW5DdWJpY1wiLCBbMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5XV0sXG5cdFx0XHRcdFx0W1wiZWFzZU91dEN1YmljXCIsIFswLjIxNSwgMC42MSwgMC4zNTUsIDFdXSxcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRDdWJpY1wiLCBbMC42NDUsIDAuMDQ1LCAwLjM1NSwgMV1dLFxuXHRcdFx0XHRcdFtcImVhc2VJblF1YXJ0XCIsIFswLjg5NSwgMC4wMywgMC42ODUsIDAuMjJdXSxcblx0XHRcdFx0XHRbXCJlYXNlT3V0UXVhcnRcIiwgWzAuMTY1LCAwLjg0LCAwLjQ0LCAxXV0sXG5cdFx0XHRcdFx0W1wiZWFzZUluT3V0UXVhcnRcIiwgWzAuNzcsIDAsIDAuMTc1LCAxXV0sXG5cdFx0XHRcdFx0W1wiZWFzZUluUXVpbnRcIiwgWzAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNl1dLFxuXHRcdFx0XHRcdFtcImVhc2VPdXRRdWludFwiLCBbMC4yMywgMSwgMC4zMiwgMV1dLFxuXHRcdFx0XHRcdFtcImVhc2VJbk91dFF1aW50XCIsIFswLjg2LCAwLCAwLjA3LCAxXV0sXG5cdFx0XHRcdFx0W1wiZWFzZUluRXhwb1wiLCBbMC45NSwgMC4wNSwgMC43OTUsIDAuMDM1XV0sXG5cdFx0XHRcdFx0W1wiZWFzZU91dEV4cG9cIiwgWzAuMTksIDEsIDAuMjIsIDFdXSxcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRFeHBvXCIsIFsxLCAwLCAwLCAxXV0sXG5cdFx0XHRcdFx0W1wiZWFzZUluQ2lyY1wiLCBbMC42LCAwLjA0LCAwLjk4LCAwLjMzNV1dLFxuXHRcdFx0XHRcdFtcImVhc2VPdXRDaXJjXCIsIFswLjA3NSwgMC44MiwgMC4xNjUsIDFdXSxcblx0XHRcdFx0XHRbXCJlYXNlSW5PdXRDaXJjXCIsIFswLjc4NSwgMC4xMzUsIDAuMTUsIDAuODZdXVxuXHRcdFx0XHRdLCBmdW5jdGlvbihpLCBlYXNpbmdBcnJheSkge1xuXHRcdFx0VmVsb2NpdHkuRWFzaW5nc1tlYXNpbmdBcnJheVswXV0gPSBnZW5lcmF0ZUJlemllci5hcHBseShudWxsLCBlYXNpbmdBcnJheVsxXSk7XG5cdFx0fSk7XG5cblx0XHQvKiBEZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIGVhc2luZyB0eXBlIGdpdmVuIGFuIGVhc2luZyBpbnB1dC4gKi9cblx0XHRmdW5jdGlvbiBnZXRFYXNpbmcodmFsdWUsIGR1cmF0aW9uKSB7XG5cdFx0XHR2YXIgZWFzaW5nID0gdmFsdWU7XG5cblx0XHRcdC8qIFRoZSBlYXNpbmcgb3B0aW9uIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgdGhhdCByZWZlcmVuY2VzIGEgcHJlLXJlZ2lzdGVyZWQgZWFzaW5nLFxuXHRcdFx0IG9yIGl0IGNhbiBiZSBhIHR3by0vZm91ci1pdGVtIGFycmF5IG9mIGludGVnZXJzIHRvIGJlIGNvbnZlcnRlZCBpbnRvIGEgYmV6aWVyL3NwcmluZyBmdW5jdGlvbi4gKi9cblx0XHRcdGlmIChUeXBlLmlzU3RyaW5nKHZhbHVlKSkge1xuXHRcdFx0XHQvKiBFbnN1cmUgdGhhdCB0aGUgZWFzaW5nIGhhcyBiZWVuIGFzc2lnbmVkIHRvIGpRdWVyeSdzIFZlbG9jaXR5LkVhc2luZ3Mgb2JqZWN0LiAqL1xuXHRcdFx0XHRpZiAoIVZlbG9jaXR5LkVhc2luZ3NbdmFsdWVdKSB7XG5cdFx0XHRcdFx0ZWFzaW5nID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0ZWFzaW5nID0gZ2VuZXJhdGVTdGVwLmFwcGx5KG51bGwsIHZhbHVlKTtcblx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0Lyogc3ByaW5nUks0IG11c3QgYmUgcGFzc2VkIHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbi4gKi9cblx0XHRcdFx0LyogTm90ZTogSWYgdGhlIHNwcmluZ1JLNCBhcnJheSBjb250YWlucyBub24tbnVtYmVycywgZ2VuZXJhdGVTcHJpbmdSSzQoKSByZXR1cm5zIGFuIGVhc2luZ1xuXHRcdFx0XHQgZnVuY3Rpb24gZ2VuZXJhdGVkIHdpdGggZGVmYXVsdCB0ZW5zaW9uIGFuZCBmcmljdGlvbiB2YWx1ZXMuICovXG5cdFx0XHRcdGVhc2luZyA9IGdlbmVyYXRlU3ByaW5nUks0LmFwcGx5KG51bGwsIHZhbHVlLmNvbmNhdChbZHVyYXRpb25dKSk7XG5cdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRcdC8qIE5vdGU6IElmIHRoZSBiZXppZXIgYXJyYXkgY29udGFpbnMgbm9uLW51bWJlcnMsIGdlbmVyYXRlQmV6aWVyKCkgcmV0dXJucyBmYWxzZS4gKi9cblx0XHRcdFx0ZWFzaW5nID0gZ2VuZXJhdGVCZXppZXIuYXBwbHkobnVsbCwgdmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWFzaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8qIFJldmVydCB0byB0aGUgVmVsb2NpdHktd2lkZSBkZWZhdWx0IGVhc2luZyB0eXBlLCBvciBmYWxsIGJhY2sgdG8gXCJzd2luZ1wiICh3aGljaCBpcyBhbHNvIGpRdWVyeSdzIGRlZmF1bHQpXG5cdFx0XHQgaWYgdGhlIFZlbG9jaXR5LXdpZGUgZGVmYXVsdCBoYXMgYmVlbiBpbmNvcnJlY3RseSBtb2RpZmllZC4gKi9cblx0XHRcdGlmIChlYXNpbmcgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGlmIChWZWxvY2l0eS5FYXNpbmdzW1ZlbG9jaXR5LmRlZmF1bHRzLmVhc2luZ10pIHtcblx0XHRcdFx0XHRlYXNpbmcgPSBWZWxvY2l0eS5kZWZhdWx0cy5lYXNpbmc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWFzaW5nID0gRUFTSU5HX0RFRkFVTFQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVhc2luZztcblx0XHR9XG5cblx0XHQvKioqKioqKioqKioqKioqKipcblx0XHQgQ1NTIFN0YWNrXG5cdFx0ICoqKioqKioqKioqKioqKioqL1xuXG5cdFx0LyogVGhlIENTUyBvYmplY3QgaXMgYSBoaWdobHkgY29uZGVuc2VkIGFuZCBwZXJmb3JtYW50IENTUyBzdGFjayB0aGF0IGZ1bGx5IHJlcGxhY2VzIGpRdWVyeSdzLlxuXHRcdCBJdCBoYW5kbGVzIHRoZSB2YWxpZGF0aW9uLCBnZXR0aW5nLCBhbmQgc2V0dGluZyBvZiBib3RoIHN0YW5kYXJkIENTUyBwcm9wZXJ0aWVzIGFuZCBDU1MgcHJvcGVydHkgaG9va3MuICovXG5cdFx0LyogTm90ZTogQSBcIkNTU1wiIHNob3J0aGFuZCBpcyBhbGlhc2VkIHNvIHRoYXQgb3VyIGNvZGUgaXMgZWFzaWVyIHRvIHJlYWQuICovXG5cdFx0dmFyIENTUyA9IFZlbG9jaXR5LkNTUyA9IHtcblx0XHRcdC8qKioqKioqKioqKioqXG5cdFx0XHQgUmVnRXhcblx0XHRcdCAqKioqKioqKioqKioqL1xuXG5cdFx0XHRSZWdFeDoge1xuXHRcdFx0XHRpc0hleDogL14jKFtBLWZcXGRdezN9KXsxLDJ9JC9pLFxuXHRcdFx0XHQvKiBVbndyYXAgYSBwcm9wZXJ0eSB2YWx1ZSdzIHN1cnJvdW5kaW5nIHRleHQsIGUuZy4gXCJyZ2JhKDQsIDMsIDIsIDEpXCIgPT0+IFwiNCwgMywgMiwgMVwiIGFuZCBcInJlY3QoNHB4IDNweCAycHggMXB4KVwiID09PiBcIjRweCAzcHggMnB4IDFweFwiLiAqL1xuXHRcdFx0XHR2YWx1ZVVud3JhcDogL15bQS16XStcXCgoLiopXFwpJC9pLFxuXHRcdFx0XHR3cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkOiAvWzAtOS5dKyBbMC05Ll0rIFswLTkuXSsoIFswLTkuXSspPy8sXG5cdFx0XHRcdC8qIFNwbGl0IGEgbXVsdGktdmFsdWUgcHJvcGVydHkgaW50byBhbiBhcnJheSBvZiBzdWJ2YWx1ZXMsIGUuZy4gXCJyZ2JhKDQsIDMsIDIsIDEpIDRweCAzcHggMnB4IDFweFwiID09PiBbIFwicmdiYSg0LCAzLCAyLCAxKVwiLCBcIjRweFwiLCBcIjNweFwiLCBcIjJweFwiLCBcIjFweFwiIF0uICovXG5cdFx0XHRcdHZhbHVlU3BsaXQ6IC8oW0Etel0rXFwoLitcXCkpfCgoW0EtejAtOSMtLl0rPykoPz1cXHN8JCkpL2lnXG5cdFx0XHR9LFxuXHRcdFx0LyoqKioqKioqKioqKlxuXHRcdFx0IExpc3RzXG5cdFx0XHQgKioqKioqKioqKioqL1xuXG5cdFx0XHRMaXN0czoge1xuXHRcdFx0XHRjb2xvcnM6IFtcImZpbGxcIiwgXCJzdHJva2VcIiwgXCJzdG9wQ29sb3JcIiwgXCJjb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcImJvcmRlckNvbG9yXCIsIFwiYm9yZGVyVG9wQ29sb3JcIiwgXCJib3JkZXJSaWdodENvbG9yXCIsIFwiYm9yZGVyQm90dG9tQ29sb3JcIiwgXCJib3JkZXJMZWZ0Q29sb3JcIiwgXCJvdXRsaW5lQ29sb3JcIl0sXG5cdFx0XHRcdHRyYW5zZm9ybXNCYXNlOiBbXCJ0cmFuc2xhdGVYXCIsIFwidHJhbnNsYXRlWVwiLCBcInNjYWxlXCIsIFwic2NhbGVYXCIsIFwic2NhbGVZXCIsIFwic2tld1hcIiwgXCJza2V3WVwiLCBcInJvdGF0ZVpcIl0sXG5cdFx0XHRcdHRyYW5zZm9ybXMzRDogW1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCJ0cmFuc2xhdGVaXCIsIFwic2NhbGVaXCIsIFwicm90YXRlWFwiLCBcInJvdGF0ZVlcIl0sXG5cdFx0XHRcdHVuaXRzOiBbXG5cdFx0XHRcdFx0XCIlXCIsIC8vIHJlbGF0aXZlXG5cdFx0XHRcdFx0XCJlbVwiLCBcImV4XCIsIFwiY2hcIiwgXCJyZW1cIiwgLy8gZm9udCByZWxhdGl2ZVxuXHRcdFx0XHRcdFwidndcIiwgXCJ2aFwiLCBcInZtaW5cIiwgXCJ2bWF4XCIsIC8vIHZpZXdwb3J0IHJlbGF0aXZlXG5cdFx0XHRcdFx0XCJjbVwiLCBcIm1tXCIsIFwiUVwiLCBcImluXCIsIFwicGNcIiwgXCJwdFwiLCBcInB4XCIsIC8vIGFic29sdXRlIGxlbmd0aHNcblx0XHRcdFx0XHRcImRlZ1wiLCBcImdyYWRcIiwgXCJyYWRcIiwgXCJ0dXJuXCIsIC8vIGFuZ2xlc1xuXHRcdFx0XHRcdFwic1wiLCBcIm1zXCIgLy8gdGltZVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRjb2xvck5hbWVzOiB7XG5cdFx0XHRcdFx0XCJhbGljZWJsdWVcIjogXCIyNDAsMjQ4LDI1NVwiLFxuXHRcdFx0XHRcdFwiYW50aXF1ZXdoaXRlXCI6IFwiMjUwLDIzNSwyMTVcIixcblx0XHRcdFx0XHRcImFxdWFtYXJpbmVcIjogXCIxMjcsMjU1LDIxMlwiLFxuXHRcdFx0XHRcdFwiYXF1YVwiOiBcIjAsMjU1LDI1NVwiLFxuXHRcdFx0XHRcdFwiYXp1cmVcIjogXCIyNDAsMjU1LDI1NVwiLFxuXHRcdFx0XHRcdFwiYmVpZ2VcIjogXCIyNDUsMjQ1LDIyMFwiLFxuXHRcdFx0XHRcdFwiYmlzcXVlXCI6IFwiMjU1LDIyOCwxOTZcIixcblx0XHRcdFx0XHRcImJsYWNrXCI6IFwiMCwwLDBcIixcblx0XHRcdFx0XHRcImJsYW5jaGVkYWxtb25kXCI6IFwiMjU1LDIzNSwyMDVcIixcblx0XHRcdFx0XHRcImJsdWV2aW9sZXRcIjogXCIxMzgsNDMsMjI2XCIsXG5cdFx0XHRcdFx0XCJibHVlXCI6IFwiMCwwLDI1NVwiLFxuXHRcdFx0XHRcdFwiYnJvd25cIjogXCIxNjUsNDIsNDJcIixcblx0XHRcdFx0XHRcImJ1cmx5d29vZFwiOiBcIjIyMiwxODQsMTM1XCIsXG5cdFx0XHRcdFx0XCJjYWRldGJsdWVcIjogXCI5NSwxNTgsMTYwXCIsXG5cdFx0XHRcdFx0XCJjaGFydHJldXNlXCI6IFwiMTI3LDI1NSwwXCIsXG5cdFx0XHRcdFx0XCJjaG9jb2xhdGVcIjogXCIyMTAsMTA1LDMwXCIsXG5cdFx0XHRcdFx0XCJjb3JhbFwiOiBcIjI1NSwxMjcsODBcIixcblx0XHRcdFx0XHRcImNvcm5mbG93ZXJibHVlXCI6IFwiMTAwLDE0OSwyMzdcIixcblx0XHRcdFx0XHRcImNvcm5zaWxrXCI6IFwiMjU1LDI0OCwyMjBcIixcblx0XHRcdFx0XHRcImNyaW1zb25cIjogXCIyMjAsMjAsNjBcIixcblx0XHRcdFx0XHRcImN5YW5cIjogXCIwLDI1NSwyNTVcIixcblx0XHRcdFx0XHRcImRhcmtibHVlXCI6IFwiMCwwLDEzOVwiLFxuXHRcdFx0XHRcdFwiZGFya2N5YW5cIjogXCIwLDEzOSwxMzlcIixcblx0XHRcdFx0XHRcImRhcmtnb2xkZW5yb2RcIjogXCIxODQsMTM0LDExXCIsXG5cdFx0XHRcdFx0XCJkYXJrZ3JheVwiOiBcIjE2OSwxNjksMTY5XCIsXG5cdFx0XHRcdFx0XCJkYXJrZ3JleVwiOiBcIjE2OSwxNjksMTY5XCIsXG5cdFx0XHRcdFx0XCJkYXJrZ3JlZW5cIjogXCIwLDEwMCwwXCIsXG5cdFx0XHRcdFx0XCJkYXJra2hha2lcIjogXCIxODksMTgzLDEwN1wiLFxuXHRcdFx0XHRcdFwiZGFya21hZ2VudGFcIjogXCIxMzksMCwxMzlcIixcblx0XHRcdFx0XHRcImRhcmtvbGl2ZWdyZWVuXCI6IFwiODUsMTA3LDQ3XCIsXG5cdFx0XHRcdFx0XCJkYXJrb3JhbmdlXCI6IFwiMjU1LDE0MCwwXCIsXG5cdFx0XHRcdFx0XCJkYXJrb3JjaGlkXCI6IFwiMTUzLDUwLDIwNFwiLFxuXHRcdFx0XHRcdFwiZGFya3JlZFwiOiBcIjEzOSwwLDBcIixcblx0XHRcdFx0XHRcImRhcmtzYWxtb25cIjogXCIyMzMsMTUwLDEyMlwiLFxuXHRcdFx0XHRcdFwiZGFya3NlYWdyZWVuXCI6IFwiMTQzLDE4OCwxNDNcIixcblx0XHRcdFx0XHRcImRhcmtzbGF0ZWJsdWVcIjogXCI3Miw2MSwxMzlcIixcblx0XHRcdFx0XHRcImRhcmtzbGF0ZWdyYXlcIjogXCI0Nyw3OSw3OVwiLFxuXHRcdFx0XHRcdFwiZGFya3R1cnF1b2lzZVwiOiBcIjAsMjA2LDIwOVwiLFxuXHRcdFx0XHRcdFwiZGFya3Zpb2xldFwiOiBcIjE0OCwwLDIxMVwiLFxuXHRcdFx0XHRcdFwiZGVlcHBpbmtcIjogXCIyNTUsMjAsMTQ3XCIsXG5cdFx0XHRcdFx0XCJkZWVwc2t5Ymx1ZVwiOiBcIjAsMTkxLDI1NVwiLFxuXHRcdFx0XHRcdFwiZGltZ3JheVwiOiBcIjEwNSwxMDUsMTA1XCIsXG5cdFx0XHRcdFx0XCJkaW1ncmV5XCI6IFwiMTA1LDEwNSwxMDVcIixcblx0XHRcdFx0XHRcImRvZGdlcmJsdWVcIjogXCIzMCwxNDQsMjU1XCIsXG5cdFx0XHRcdFx0XCJmaXJlYnJpY2tcIjogXCIxNzgsMzQsMzRcIixcblx0XHRcdFx0XHRcImZsb3JhbHdoaXRlXCI6IFwiMjU1LDI1MCwyNDBcIixcblx0XHRcdFx0XHRcImZvcmVzdGdyZWVuXCI6IFwiMzQsMTM5LDM0XCIsXG5cdFx0XHRcdFx0XCJmdWNoc2lhXCI6IFwiMjU1LDAsMjU1XCIsXG5cdFx0XHRcdFx0XCJnYWluc2Jvcm9cIjogXCIyMjAsMjIwLDIyMFwiLFxuXHRcdFx0XHRcdFwiZ2hvc3R3aGl0ZVwiOiBcIjI0OCwyNDgsMjU1XCIsXG5cdFx0XHRcdFx0XCJnb2xkXCI6IFwiMjU1LDIxNSwwXCIsXG5cdFx0XHRcdFx0XCJnb2xkZW5yb2RcIjogXCIyMTgsMTY1LDMyXCIsXG5cdFx0XHRcdFx0XCJncmF5XCI6IFwiMTI4LDEyOCwxMjhcIixcblx0XHRcdFx0XHRcImdyZXlcIjogXCIxMjgsMTI4LDEyOFwiLFxuXHRcdFx0XHRcdFwiZ3JlZW55ZWxsb3dcIjogXCIxNzMsMjU1LDQ3XCIsXG5cdFx0XHRcdFx0XCJncmVlblwiOiBcIjAsMTI4LDBcIixcblx0XHRcdFx0XHRcImhvbmV5ZGV3XCI6IFwiMjQwLDI1NSwyNDBcIixcblx0XHRcdFx0XHRcImhvdHBpbmtcIjogXCIyNTUsMTA1LDE4MFwiLFxuXHRcdFx0XHRcdFwiaW5kaWFucmVkXCI6IFwiMjA1LDkyLDkyXCIsXG5cdFx0XHRcdFx0XCJpbmRpZ29cIjogXCI3NSwwLDEzMFwiLFxuXHRcdFx0XHRcdFwiaXZvcnlcIjogXCIyNTUsMjU1LDI0MFwiLFxuXHRcdFx0XHRcdFwia2hha2lcIjogXCIyNDAsMjMwLDE0MFwiLFxuXHRcdFx0XHRcdFwibGF2ZW5kZXJibHVzaFwiOiBcIjI1NSwyNDAsMjQ1XCIsXG5cdFx0XHRcdFx0XCJsYXZlbmRlclwiOiBcIjIzMCwyMzAsMjUwXCIsXG5cdFx0XHRcdFx0XCJsYXduZ3JlZW5cIjogXCIxMjQsMjUyLDBcIixcblx0XHRcdFx0XHRcImxlbW9uY2hpZmZvblwiOiBcIjI1NSwyNTAsMjA1XCIsXG5cdFx0XHRcdFx0XCJsaWdodGJsdWVcIjogXCIxNzMsMjE2LDIzMFwiLFxuXHRcdFx0XHRcdFwibGlnaHRjb3JhbFwiOiBcIjI0MCwxMjgsMTI4XCIsXG5cdFx0XHRcdFx0XCJsaWdodGN5YW5cIjogXCIyMjQsMjU1LDI1NVwiLFxuXHRcdFx0XHRcdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogXCIyNTAsMjUwLDIxMFwiLFxuXHRcdFx0XHRcdFwibGlnaHRncmF5XCI6IFwiMjExLDIxMSwyMTFcIixcblx0XHRcdFx0XHRcImxpZ2h0Z3JleVwiOiBcIjIxMSwyMTEsMjExXCIsXG5cdFx0XHRcdFx0XCJsaWdodGdyZWVuXCI6IFwiMTQ0LDIzOCwxNDRcIixcblx0XHRcdFx0XHRcImxpZ2h0cGlua1wiOiBcIjI1NSwxODIsMTkzXCIsXG5cdFx0XHRcdFx0XCJsaWdodHNhbG1vblwiOiBcIjI1NSwxNjAsMTIyXCIsXG5cdFx0XHRcdFx0XCJsaWdodHNlYWdyZWVuXCI6IFwiMzIsMTc4LDE3MFwiLFxuXHRcdFx0XHRcdFwibGlnaHRza3libHVlXCI6IFwiMTM1LDIwNiwyNTBcIixcblx0XHRcdFx0XHRcImxpZ2h0c2xhdGVncmF5XCI6IFwiMTE5LDEzNiwxNTNcIixcblx0XHRcdFx0XHRcImxpZ2h0c3RlZWxibHVlXCI6IFwiMTc2LDE5NiwyMjJcIixcblx0XHRcdFx0XHRcImxpZ2h0eWVsbG93XCI6IFwiMjU1LDI1NSwyMjRcIixcblx0XHRcdFx0XHRcImxpbWVncmVlblwiOiBcIjUwLDIwNSw1MFwiLFxuXHRcdFx0XHRcdFwibGltZVwiOiBcIjAsMjU1LDBcIixcblx0XHRcdFx0XHRcImxpbmVuXCI6IFwiMjUwLDI0MCwyMzBcIixcblx0XHRcdFx0XHRcIm1hZ2VudGFcIjogXCIyNTUsMCwyNTVcIixcblx0XHRcdFx0XHRcIm1hcm9vblwiOiBcIjEyOCwwLDBcIixcblx0XHRcdFx0XHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogXCIxMDIsMjA1LDE3MFwiLFxuXHRcdFx0XHRcdFwibWVkaXVtYmx1ZVwiOiBcIjAsMCwyMDVcIixcblx0XHRcdFx0XHRcIm1lZGl1bW9yY2hpZFwiOiBcIjE4Niw4NSwyMTFcIixcblx0XHRcdFx0XHRcIm1lZGl1bXB1cnBsZVwiOiBcIjE0NywxMTIsMjE5XCIsXG5cdFx0XHRcdFx0XCJtZWRpdW1zZWFncmVlblwiOiBcIjYwLDE3OSwxMTNcIixcblx0XHRcdFx0XHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBcIjEyMywxMDQsMjM4XCIsXG5cdFx0XHRcdFx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBcIjAsMjUwLDE1NFwiLFxuXHRcdFx0XHRcdFwibWVkaXVtdHVycXVvaXNlXCI6IFwiNzIsMjA5LDIwNFwiLFxuXHRcdFx0XHRcdFwibWVkaXVtdmlvbGV0cmVkXCI6IFwiMTk5LDIxLDEzM1wiLFxuXHRcdFx0XHRcdFwibWlkbmlnaHRibHVlXCI6IFwiMjUsMjUsMTEyXCIsXG5cdFx0XHRcdFx0XCJtaW50Y3JlYW1cIjogXCIyNDUsMjU1LDI1MFwiLFxuXHRcdFx0XHRcdFwibWlzdHlyb3NlXCI6IFwiMjU1LDIyOCwyMjVcIixcblx0XHRcdFx0XHRcIm1vY2Nhc2luXCI6IFwiMjU1LDIyOCwxODFcIixcblx0XHRcdFx0XHRcIm5hdmFqb3doaXRlXCI6IFwiMjU1LDIyMiwxNzNcIixcblx0XHRcdFx0XHRcIm5hdnlcIjogXCIwLDAsMTI4XCIsXG5cdFx0XHRcdFx0XCJvbGRsYWNlXCI6IFwiMjUzLDI0NSwyMzBcIixcblx0XHRcdFx0XHRcIm9saXZlZHJhYlwiOiBcIjEwNywxNDIsMzVcIixcblx0XHRcdFx0XHRcIm9saXZlXCI6IFwiMTI4LDEyOCwwXCIsXG5cdFx0XHRcdFx0XCJvcmFuZ2VyZWRcIjogXCIyNTUsNjksMFwiLFxuXHRcdFx0XHRcdFwib3JhbmdlXCI6IFwiMjU1LDE2NSwwXCIsXG5cdFx0XHRcdFx0XCJvcmNoaWRcIjogXCIyMTgsMTEyLDIxNFwiLFxuXHRcdFx0XHRcdFwicGFsZWdvbGRlbnJvZFwiOiBcIjIzOCwyMzIsMTcwXCIsXG5cdFx0XHRcdFx0XCJwYWxlZ3JlZW5cIjogXCIxNTIsMjUxLDE1MlwiLFxuXHRcdFx0XHRcdFwicGFsZXR1cnF1b2lzZVwiOiBcIjE3NSwyMzgsMjM4XCIsXG5cdFx0XHRcdFx0XCJwYWxldmlvbGV0cmVkXCI6IFwiMjE5LDExMiwxNDdcIixcblx0XHRcdFx0XHRcInBhcGF5YXdoaXBcIjogXCIyNTUsMjM5LDIxM1wiLFxuXHRcdFx0XHRcdFwicGVhY2hwdWZmXCI6IFwiMjU1LDIxOCwxODVcIixcblx0XHRcdFx0XHRcInBlcnVcIjogXCIyMDUsMTMzLDYzXCIsXG5cdFx0XHRcdFx0XCJwaW5rXCI6IFwiMjU1LDE5MiwyMDNcIixcblx0XHRcdFx0XHRcInBsdW1cIjogXCIyMjEsMTYwLDIyMVwiLFxuXHRcdFx0XHRcdFwicG93ZGVyYmx1ZVwiOiBcIjE3NiwyMjQsMjMwXCIsXG5cdFx0XHRcdFx0XCJwdXJwbGVcIjogXCIxMjgsMCwxMjhcIixcblx0XHRcdFx0XHRcInJlZFwiOiBcIjI1NSwwLDBcIixcblx0XHRcdFx0XHRcInJvc3licm93blwiOiBcIjE4OCwxNDMsMTQzXCIsXG5cdFx0XHRcdFx0XCJyb3lhbGJsdWVcIjogXCI2NSwxMDUsMjI1XCIsXG5cdFx0XHRcdFx0XCJzYWRkbGVicm93blwiOiBcIjEzOSw2OSwxOVwiLFxuXHRcdFx0XHRcdFwic2FsbW9uXCI6IFwiMjUwLDEyOCwxMTRcIixcblx0XHRcdFx0XHRcInNhbmR5YnJvd25cIjogXCIyNDQsMTY0LDk2XCIsXG5cdFx0XHRcdFx0XCJzZWFncmVlblwiOiBcIjQ2LDEzOSw4N1wiLFxuXHRcdFx0XHRcdFwic2Vhc2hlbGxcIjogXCIyNTUsMjQ1LDIzOFwiLFxuXHRcdFx0XHRcdFwic2llbm5hXCI6IFwiMTYwLDgyLDQ1XCIsXG5cdFx0XHRcdFx0XCJzaWx2ZXJcIjogXCIxOTIsMTkyLDE5MlwiLFxuXHRcdFx0XHRcdFwic2t5Ymx1ZVwiOiBcIjEzNSwyMDYsMjM1XCIsXG5cdFx0XHRcdFx0XCJzbGF0ZWJsdWVcIjogXCIxMDYsOTAsMjA1XCIsXG5cdFx0XHRcdFx0XCJzbGF0ZWdyYXlcIjogXCIxMTIsMTI4LDE0NFwiLFxuXHRcdFx0XHRcdFwic25vd1wiOiBcIjI1NSwyNTAsMjUwXCIsXG5cdFx0XHRcdFx0XCJzcHJpbmdncmVlblwiOiBcIjAsMjU1LDEyN1wiLFxuXHRcdFx0XHRcdFwic3RlZWxibHVlXCI6IFwiNzAsMTMwLDE4MFwiLFxuXHRcdFx0XHRcdFwidGFuXCI6IFwiMjEwLDE4MCwxNDBcIixcblx0XHRcdFx0XHRcInRlYWxcIjogXCIwLDEyOCwxMjhcIixcblx0XHRcdFx0XHRcInRoaXN0bGVcIjogXCIyMTYsMTkxLDIxNlwiLFxuXHRcdFx0XHRcdFwidG9tYXRvXCI6IFwiMjU1LDk5LDcxXCIsXG5cdFx0XHRcdFx0XCJ0dXJxdW9pc2VcIjogXCI2NCwyMjQsMjA4XCIsXG5cdFx0XHRcdFx0XCJ2aW9sZXRcIjogXCIyMzgsMTMwLDIzOFwiLFxuXHRcdFx0XHRcdFwid2hlYXRcIjogXCIyNDUsMjIyLDE3OVwiLFxuXHRcdFx0XHRcdFwid2hpdGVzbW9rZVwiOiBcIjI0NSwyNDUsMjQ1XCIsXG5cdFx0XHRcdFx0XCJ3aGl0ZVwiOiBcIjI1NSwyNTUsMjU1XCIsXG5cdFx0XHRcdFx0XCJ5ZWxsb3dncmVlblwiOiBcIjE1NCwyMDUsNTBcIixcblx0XHRcdFx0XHRcInllbGxvd1wiOiBcIjI1NSwyNTUsMFwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKioqKioqKioqKioqXG5cdFx0XHQgSG9va3Ncblx0XHRcdCAqKioqKioqKioqKiovXG5cblx0XHRcdC8qIEhvb2tzIGFsbG93IGEgc3VicHJvcGVydHkgKGUuZy4gXCJib3hTaGFkb3dCbHVyXCIpIG9mIGEgY29tcG91bmQtdmFsdWUgQ1NTIHByb3BlcnR5XG5cdFx0XHQgKGUuZy4gXCJib3hTaGFkb3c6IFggWSBCbHVyIFNwcmVhZCBDb2xvclwiKSB0byBiZSBhbmltYXRlZCBhcyBpZiBpdCB3ZXJlIGEgZGlzY3JldGUgcHJvcGVydHkuICovXG5cdFx0XHQvKiBOb3RlOiBCZXlvbmQgZW5hYmxpbmcgZmluZS1ncmFpbmVkIHByb3BlcnR5IGFuaW1hdGlvbiwgaG9va2luZyBpcyBuZWNlc3Nhcnkgc2luY2UgVmVsb2NpdHkgb25seVxuXHRcdFx0IHR3ZWVucyBwcm9wZXJ0aWVzIHdpdGggc2luZ2xlIG51bWVyaWMgdmFsdWVzOyB1bmxpa2UgQ1NTIHRyYW5zaXRpb25zLCBWZWxvY2l0eSBkb2VzIG5vdCBpbnRlcnBvbGF0ZSBjb21wb3VuZC12YWx1ZXMuICovXG5cdFx0XHRIb29rczoge1xuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IFJlZ2lzdHJhdGlvblxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0LyogVGVtcGxhdGVzIGFyZSBhIGNvbmNpc2Ugd2F5IG9mIGluZGljYXRpbmcgd2hpY2ggc3VicHJvcGVydGllcyBtdXN0IGJlIGluZGl2aWR1YWxseSByZWdpc3RlcmVkIGZvciBlYWNoIGNvbXBvdW5kLXZhbHVlIENTUyBwcm9wZXJ0eS4gKi9cblx0XHRcdFx0LyogRWFjaCB0ZW1wbGF0ZSBjb25zaXN0cyBvZiB0aGUgY29tcG91bmQtdmFsdWUncyBiYXNlIG5hbWUsIGl0cyBjb25zdGl0dWVudCBzdWJwcm9wZXJ0eSBuYW1lcywgYW5kIHRob3NlIHN1YnByb3BlcnRpZXMnIGRlZmF1bHQgdmFsdWVzLiAqL1xuXHRcdFx0XHR0ZW1wbGF0ZXM6IHtcblx0XHRcdFx0XHRcInRleHRTaGFkb3dcIjogW1wiQ29sb3IgWCBZIEJsdXJcIiwgXCJibGFjayAwcHggMHB4IDBweFwiXSxcblx0XHRcdFx0XHRcImJveFNoYWRvd1wiOiBbXCJDb2xvciBYIFkgQmx1ciBTcHJlYWRcIiwgXCJibGFjayAwcHggMHB4IDBweCAwcHhcIl0sXG5cdFx0XHRcdFx0XCJjbGlwXCI6IFtcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiLCBcIjBweCAwcHggMHB4IDBweFwiXSxcblx0XHRcdFx0XHRcImJhY2tncm91bmRQb3NpdGlvblwiOiBbXCJYIFlcIiwgXCIwJSAwJVwiXSxcblx0XHRcdFx0XHRcInRyYW5zZm9ybU9yaWdpblwiOiBbXCJYIFkgWlwiLCBcIjUwJSA1MCUgMHB4XCJdLFxuXHRcdFx0XHRcdFwicGVyc3BlY3RpdmVPcmlnaW5cIjogW1wiWCBZXCIsIFwiNTAlIDUwJVwiXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiBBIFwicmVnaXN0ZXJlZFwiIGhvb2sgaXMgb25lIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIGZyb20gaXRzIHRlbXBsYXRlIGZvcm0gaW50byBhIGxpdmUsXG5cdFx0XHRcdCB0d2VlbmFibGUgcHJvcGVydHkuIEl0IGNvbnRhaW5zIGRhdGEgdG8gYXNzb2NpYXRlIGl0IHdpdGggaXRzIHJvb3QgcHJvcGVydHkuICovXG5cdFx0XHRcdHJlZ2lzdGVyZWQ6IHtcblx0XHRcdFx0XHQvKiBOb3RlOiBBIHJlZ2lzdGVyZWQgaG9vayBsb29rcyBsaWtlIHRoaXMgPT0+IHRleHRTaGFkb3dCbHVyOiBbIFwidGV4dFNoYWRvd1wiLCAzIF0sXG5cdFx0XHRcdFx0IHdoaWNoIGNvbnNpc3RzIG9mIHRoZSBzdWJwcm9wZXJ0eSdzIG5hbWUsIHRoZSBhc3NvY2lhdGVkIHJvb3QgcHJvcGVydHkncyBuYW1lLFxuXHRcdFx0XHRcdCBhbmQgdGhlIHN1YnByb3BlcnR5J3MgcG9zaXRpb24gaW4gdGhlIHJvb3QncyB2YWx1ZS4gKi9cblx0XHRcdFx0fSxcblx0XHRcdFx0LyogQ29udmVydCB0aGUgdGVtcGxhdGVzIGludG8gaW5kaXZpZHVhbCBob29rcyB0aGVuIGFwcGVuZCB0aGVtIHRvIHRoZSByZWdpc3RlcmVkIG9iamVjdCBhYm92ZS4gKi9cblx0XHRcdFx0cmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8qIENvbG9yIGhvb2tzIHJlZ2lzdHJhdGlvbjogQ29sb3JzIGFyZSBkZWZhdWx0ZWQgdG8gd2hpdGUgLS0gYXMgb3Bwb3NlZCB0byBibGFjayAtLSBzaW5jZSBjb2xvcnMgdGhhdCBhcmVcblx0XHRcdFx0XHQgY3VycmVudGx5IHNldCB0byBcInRyYW5zcGFyZW50XCIgZGVmYXVsdCB0byB0aGVpciByZXNwZWN0aXZlIHRlbXBsYXRlIGJlbG93IHdoZW4gY29sb3ItYW5pbWF0ZWQsXG5cdFx0XHRcdFx0IGFuZCB3aGl0ZSBpcyB0eXBpY2FsbHkgYSBjbG9zZXIgbWF0Y2ggdG8gdHJhbnNwYXJlbnQgdGhhbiBibGFjayBpcy4gQW4gZXhjZXB0aW9uIGlzIG1hZGUgZm9yIHRleHQgKFwiY29sb3JcIiksXG5cdFx0XHRcdFx0IHdoaWNoIGlzIGFsbW9zdCBhbHdheXMgc2V0IGNsb3NlciB0byBibGFjayB0aGFuIHdoaXRlLiAqL1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgQ1NTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dmFyIHJnYkNvbXBvbmVudHMgPSAoQ1NTLkxpc3RzLmNvbG9yc1tpXSA9PT0gXCJjb2xvclwiKSA/IFwiMCAwIDAgMVwiIDogXCIyNTUgMjU1IDI1NSAxXCI7XG5cdFx0XHRcdFx0XHRDU1MuSG9va3MudGVtcGxhdGVzW0NTUy5MaXN0cy5jb2xvcnNbaV1dID0gW1wiUmVkIEdyZWVuIEJsdWUgQWxwaGFcIiwgcmdiQ29tcG9uZW50c107XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHJvb3RQcm9wZXJ0eSxcblx0XHRcdFx0XHRcdFx0aG9va1RlbXBsYXRlLFxuXHRcdFx0XHRcdFx0XHRob29rTmFtZXM7XG5cblx0XHRcdFx0XHQvKiBJbiBJRSwgY29sb3IgdmFsdWVzIGluc2lkZSBjb21wb3VuZC12YWx1ZSBwcm9wZXJ0aWVzIGFyZSBwb3NpdGlvbmVkIGF0IHRoZSBlbmQgdGhlIHZhbHVlIGluc3RlYWQgb2YgYXQgdGhlIGJlZ2lubmluZy5cblx0XHRcdFx0XHQgVGh1cywgd2UgcmUtYXJyYW5nZSB0aGUgdGVtcGxhdGVzIGFjY29yZGluZ2x5LiAqL1xuXHRcdFx0XHRcdGlmIChJRSkge1xuXHRcdFx0XHRcdFx0Zm9yIChyb290UHJvcGVydHkgaW4gQ1NTLkhvb2tzLnRlbXBsYXRlcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoIUNTUy5Ib29rcy50ZW1wbGF0ZXMuaGFzT3duUHJvcGVydHkocm9vdFByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGhvb2tUZW1wbGF0ZSA9IENTUy5Ib29rcy50ZW1wbGF0ZXNbcm9vdFByb3BlcnR5XTtcblx0XHRcdFx0XHRcdFx0aG9va05hbWVzID0gaG9va1RlbXBsYXRlWzBdLnNwbGl0KFwiIFwiKTtcblxuXHRcdFx0XHRcdFx0XHR2YXIgZGVmYXVsdFZhbHVlcyA9IGhvb2tUZW1wbGF0ZVsxXS5tYXRjaChDU1MuUmVnRXgudmFsdWVTcGxpdCk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGhvb2tOYW1lc1swXSA9PT0gXCJDb2xvclwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogUmVwb3NpdGlvbiBib3RoIHRoZSBob29rJ3MgbmFtZSBhbmQgaXRzIGRlZmF1bHQgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGVpciByZXNwZWN0aXZlIHN0cmluZ3MuICovXG5cdFx0XHRcdFx0XHRcdFx0aG9va05hbWVzLnB1c2goaG9va05hbWVzLnNoaWZ0KCkpO1xuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZXMucHVzaChkZWZhdWx0VmFsdWVzLnNoaWZ0KCkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogUmVwbGFjZSB0aGUgZXhpc3RpbmcgdGVtcGxhdGUgZm9yIHRoZSBob29rJ3Mgcm9vdCBwcm9wZXJ0eS4gKi9cblx0XHRcdFx0XHRcdFx0XHRDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV0gPSBbaG9va05hbWVzLmpvaW4oXCIgXCIpLCBkZWZhdWx0VmFsdWVzLmpvaW4oXCIgXCIpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIEhvb2sgcmVnaXN0cmF0aW9uLiAqL1xuXHRcdFx0XHRcdGZvciAocm9vdFByb3BlcnR5IGluIENTUy5Ib29rcy50ZW1wbGF0ZXMpIHtcblx0XHRcdFx0XHRcdGlmICghQ1NTLkhvb2tzLnRlbXBsYXRlcy5oYXNPd25Qcm9wZXJ0eShyb290UHJvcGVydHkpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aG9va1RlbXBsYXRlID0gQ1NTLkhvb2tzLnRlbXBsYXRlc1tyb290UHJvcGVydHldO1xuXHRcdFx0XHRcdFx0aG9va05hbWVzID0gaG9va1RlbXBsYXRlWzBdLnNwbGl0KFwiIFwiKTtcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaiBpbiBob29rTmFtZXMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKCFob29rTmFtZXMuaGFzT3duUHJvcGVydHkoaikpIHtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR2YXIgZnVsbEhvb2tOYW1lID0gcm9vdFByb3BlcnR5ICsgaG9va05hbWVzW2pdLFxuXHRcdFx0XHRcdFx0XHRcdFx0aG9va1Bvc2l0aW9uID0gajtcblxuXHRcdFx0XHRcdFx0XHQvKiBGb3IgZWFjaCBob29rLCByZWdpc3RlciBpdHMgZnVsbCBuYW1lIChlLmcuIHRleHRTaGFkb3dCbHVyKSB3aXRoIGl0cyByb290IHByb3BlcnR5IChlLmcuIHRleHRTaGFkb3cpXG5cdFx0XHRcdFx0XHRcdCBhbmQgdGhlIGhvb2sncyBwb3NpdGlvbiBpbiBpdHMgdGVtcGxhdGUncyBkZWZhdWx0IHZhbHVlIHN0cmluZy4gKi9cblx0XHRcdFx0XHRcdFx0Q1NTLkhvb2tzLnJlZ2lzdGVyZWRbZnVsbEhvb2tOYW1lXSA9IFtyb290UHJvcGVydHksIGhvb2tQb3NpdGlvbl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IEluamVjdGlvbiBhbmQgRXh0cmFjdGlvblxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0LyogTG9vayB1cCB0aGUgcm9vdCBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggdGhlIGhvb2sgKGUuZy4gcmV0dXJuIFwidGV4dFNoYWRvd1wiIGZvciBcInRleHRTaGFkb3dCbHVyXCIpLiAqL1xuXHRcdFx0XHQvKiBTaW5jZSBhIGhvb2sgY2Fubm90IGJlIHNldCBkaXJlY3RseSAodGhlIGJyb3dzZXIgd29uJ3QgcmVjb2duaXplIGl0KSwgc3R5bGUgdXBkYXRpbmcgZm9yIGhvb2tzIGlzIHJvdXRlZCB0aHJvdWdoIHRoZSBob29rJ3Mgcm9vdCBwcm9wZXJ0eS4gKi9cblx0XHRcdFx0Z2V0Um9vdDogZnVuY3Rpb24ocHJvcGVydHkpIHtcblx0XHRcdFx0XHR2YXIgaG9va0RhdGEgPSBDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRpZiAoaG9va0RhdGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiBob29rRGF0YVswXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0LyogSWYgdGhlcmUgd2FzIG5vIGhvb2sgbWF0Y2gsIHJldHVybiB0aGUgcHJvcGVydHkgbmFtZSB1bnRvdWNoZWQuICovXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRnZXRVbml0OiBmdW5jdGlvbihzdHIsIHN0YXJ0KSB7XG5cdFx0XHRcdFx0dmFyIHVuaXQgPSAoc3RyLnN1YnN0cihzdGFydCB8fCAwLCA1KS5tYXRjaCgvXlthLXolXSsvKSB8fCBbXSlbMF0gfHwgXCJcIjtcblxuXHRcdFx0XHRcdGlmICh1bml0ICYmIF9pbkFycmF5KENTUy5MaXN0cy51bml0cywgdW5pdCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB1bml0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcblx0XHRcdFx0fSxcblx0XHRcdFx0Zml4Q29sb3JzOiBmdW5jdGlvbihzdHIpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhyZ2JhP1xcKFxccyopPyhcXGJbYS16XStcXGIpL2csIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcblx0XHRcdFx0XHRcdGlmIChDU1MuTGlzdHMuY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eSgkMikpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICgkMSA/ICQxIDogXCJyZ2JhKFwiKSArIENTUy5MaXN0cy5jb2xvck5hbWVzWyQyXSArICgkMSA/IFwiXCIgOiBcIiwxKVwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiAkMSArICQyO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiBDb252ZXJ0IGFueSByb290UHJvcGVydHlWYWx1ZSwgbnVsbCBvciBvdGhlcndpc2UsIGludG8gYSBzcGFjZS1kZWxpbWl0ZWQgbGlzdCBvZiBob29rIHZhbHVlcyBzbyB0aGF0XG5cdFx0XHRcdCB0aGUgdGFyZ2V0ZWQgaG9vayBjYW4gYmUgaW5qZWN0ZWQgb3IgZXh0cmFjdGVkIGF0IGl0cyBzdGFuZGFyZCBwb3NpdGlvbi4gKi9cblx0XHRcdFx0Y2xlYW5Sb290UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24ocm9vdFByb3BlcnR5LCByb290UHJvcGVydHlWYWx1ZSkge1xuXHRcdFx0XHRcdC8qIElmIHRoZSByb290UHJvcGVydHlWYWx1ZSBpcyB3cmFwcGVkIHdpdGggXCJyZ2IoKVwiLCBcImNsaXAoKVwiLCBldGMuLCByZW1vdmUgdGhlIHdyYXBwaW5nIHRvIG5vcm1hbGl6ZSB0aGUgdmFsdWUgYmVmb3JlIG1hbmlwdWxhdGlvbi4gKi9cblx0XHRcdFx0XHRpZiAoQ1NTLlJlZ0V4LnZhbHVlVW53cmFwLnRlc3Qocm9vdFByb3BlcnR5VmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IHJvb3RQcm9wZXJ0eVZhbHVlLm1hdGNoKENTUy5SZWdFeC52YWx1ZVVud3JhcClbMV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogSWYgcm9vdFByb3BlcnR5VmFsdWUgaXMgYSBDU1MgbnVsbC12YWx1ZSAoZnJvbSB3aGljaCB0aGVyZSdzIGluaGVyZW50bHkgbm8gaG9vayB2YWx1ZSB0byBleHRyYWN0KSxcblx0XHRcdFx0XHQgZGVmYXVsdCB0byB0aGUgcm9vdCdzIGRlZmF1bHQgdmFsdWUgYXMgZGVmaW5lZCBpbiBDU1MuSG9va3MudGVtcGxhdGVzLiAqL1xuXHRcdFx0XHRcdC8qIE5vdGU6IENTUyBudWxsLXZhbHVlcyBpbmNsdWRlIFwibm9uZVwiLCBcImF1dG9cIiwgYW5kIFwidHJhbnNwYXJlbnRcIi4gVGhleSBtdXN0IGJlIGNvbnZlcnRlZCBpbnRvIHRoZWlyXG5cdFx0XHRcdFx0IHplcm8tdmFsdWVzIChlLmcuIHRleHRTaGFkb3c6IFwibm9uZVwiID09PiB0ZXh0U2hhZG93OiBcIjBweCAwcHggMHB4IGJsYWNrXCIpIGZvciBob29rIG1hbmlwdWxhdGlvbiB0byBwcm9jZWVkLiAqL1xuXHRcdFx0XHRcdGlmIChDU1MuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKHJvb3RQcm9wZXJ0eVZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV1bMV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHJvb3RQcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiBFeHRyYWN0ZWQgdGhlIGhvb2sncyB2YWx1ZSBmcm9tIGl0cyByb290IHByb3BlcnR5J3MgdmFsdWUuIFRoaXMgaXMgdXNlZCB0byBnZXQgdGhlIHN0YXJ0aW5nIHZhbHVlIG9mIGFuIGFuaW1hdGluZyBob29rLiAqL1xuXHRcdFx0XHRleHRyYWN0VmFsdWU6IGZ1bmN0aW9uKGZ1bGxIb29rTmFtZSwgcm9vdFByb3BlcnR5VmFsdWUpIHtcblx0XHRcdFx0XHR2YXIgaG9va0RhdGEgPSBDU1MuSG9va3MucmVnaXN0ZXJlZFtmdWxsSG9va05hbWVdO1xuXG5cdFx0XHRcdFx0aWYgKGhvb2tEYXRhKSB7XG5cdFx0XHRcdFx0XHR2YXIgaG9va1Jvb3QgPSBob29rRGF0YVswXSxcblx0XHRcdFx0XHRcdFx0XHRob29rUG9zaXRpb24gPSBob29rRGF0YVsxXTtcblxuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MuY2xlYW5Sb290UHJvcGVydHlWYWx1ZShob29rUm9vdCwgcm9vdFByb3BlcnR5VmFsdWUpO1xuXG5cdFx0XHRcdFx0XHQvKiBTcGxpdCByb290UHJvcGVydHlWYWx1ZSBpbnRvIGl0cyBjb25zdGl0dWVudCBob29rIHZhbHVlcyB0aGVuIGdyYWIgdGhlIGRlc2lyZWQgaG9vayBhdCBpdHMgc3RhbmRhcmQgcG9zaXRpb24uICovXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm9vdFByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS5tYXRjaChDU1MuUmVnRXgudmFsdWVTcGxpdClbaG9va1Bvc2l0aW9uXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0LyogSWYgdGhlIHByb3ZpZGVkIGZ1bGxIb29rTmFtZSBpc24ndCBhIHJlZ2lzdGVyZWQgaG9vaywgcmV0dXJuIHRoZSByb290UHJvcGVydHlWYWx1ZSB0aGF0IHdhcyBwYXNzZWQgaW4uICovXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm9vdFByb3BlcnR5VmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiBJbmplY3QgdGhlIGhvb2sncyB2YWx1ZSBpbnRvIGl0cyByb290IHByb3BlcnR5J3MgdmFsdWUuIFRoaXMgaXMgdXNlZCB0byBwaWVjZSBiYWNrIHRvZ2V0aGVyIHRoZSByb290IHByb3BlcnR5XG5cdFx0XHRcdCBvbmNlIFZlbG9jaXR5IGhhcyB1cGRhdGVkIG9uZSBvZiBpdHMgaW5kaXZpZHVhbGx5IGhvb2tlZCB2YWx1ZXMgdGhyb3VnaCB0d2VlbmluZy4gKi9cblx0XHRcdFx0aW5qZWN0VmFsdWU6IGZ1bmN0aW9uKGZ1bGxIb29rTmFtZSwgaG9va1ZhbHVlLCByb290UHJvcGVydHlWYWx1ZSkge1xuXHRcdFx0XHRcdHZhciBob29rRGF0YSA9IENTUy5Ib29rcy5yZWdpc3RlcmVkW2Z1bGxIb29rTmFtZV07XG5cblx0XHRcdFx0XHRpZiAoaG9va0RhdGEpIHtcblx0XHRcdFx0XHRcdHZhciBob29rUm9vdCA9IGhvb2tEYXRhWzBdLFxuXHRcdFx0XHRcdFx0XHRcdGhvb2tQb3NpdGlvbiA9IGhvb2tEYXRhWzFdLFxuXHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlUGFydHMsXG5cdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWVVcGRhdGVkO1xuXG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGhvb2tSb290LCByb290UHJvcGVydHlWYWx1ZSk7XG5cblx0XHRcdFx0XHRcdC8qIFNwbGl0IHJvb3RQcm9wZXJ0eVZhbHVlIGludG8gaXRzIGluZGl2aWR1YWwgaG9vayB2YWx1ZXMsIHJlcGxhY2UgdGhlIHRhcmdldGVkIHZhbHVlIHdpdGggaG9va1ZhbHVlLFxuXHRcdFx0XHRcdFx0IHRoZW4gcmVjb25zdHJ1Y3QgdGhlIHJvb3RQcm9wZXJ0eVZhbHVlIHN0cmluZy4gKi9cblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlUGFydHMgPSByb290UHJvcGVydHlWYWx1ZS50b1N0cmluZygpLm1hdGNoKENTUy5SZWdFeC52YWx1ZVNwbGl0KTtcblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlUGFydHNbaG9va1Bvc2l0aW9uXSA9IGhvb2tWYWx1ZTtcblx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlVXBkYXRlZCA9IHJvb3RQcm9wZXJ0eVZhbHVlUGFydHMuam9pbihcIiBcIik7XG5cblx0XHRcdFx0XHRcdHJldHVybiByb290UHJvcGVydHlWYWx1ZVVwZGF0ZWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8qIElmIHRoZSBwcm92aWRlZCBmdWxsSG9va05hbWUgaXNuJ3QgYSByZWdpc3RlcmVkIGhvb2ssIHJldHVybiB0aGUgcm9vdFByb3BlcnR5VmFsdWUgdGhhdCB3YXMgcGFzc2VkIGluLiAqL1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJvb3RQcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgTm9ybWFsaXphdGlvbnNcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvKiBOb3JtYWxpemF0aW9ucyBzdGFuZGFyZGl6ZSBDU1MgcHJvcGVydHkgbWFuaXB1bGF0aW9uIGJ5IHBvbGx5ZmlsbGluZyBicm93c2VyLXNwZWNpZmljIGltcGxlbWVudGF0aW9ucyAoZS5nLiBvcGFjaXR5KVxuXHRcdFx0IGFuZCByZWZvcm1hdHRpbmcgc3BlY2lhbCBwcm9wZXJ0aWVzIChlLmcuIGNsaXAsIHJnYmEpIHRvIGxvb2sgbGlrZSBzdGFuZGFyZCBvbmVzLiAqL1xuXHRcdFx0Tm9ybWFsaXphdGlvbnM6IHtcblx0XHRcdFx0LyogTm9ybWFsaXphdGlvbnMgYXJlIHBhc3NlZCBhIG5vcm1hbGl6YXRpb24gdGFyZ2V0IChlaXRoZXIgdGhlIHByb3BlcnR5J3MgbmFtZSwgaXRzIGV4dHJhY3RlZCB2YWx1ZSwgb3IgaXRzIGluamVjdGVkIHZhbHVlKSxcblx0XHRcdFx0IHRoZSB0YXJnZXRlZCBlbGVtZW50ICh3aGljaCBtYXkgbmVlZCB0byBiZSBxdWVyaWVkKSwgYW5kIHRoZSB0YXJnZXRlZCBwcm9wZXJ0eSB2YWx1ZS4gKi9cblx0XHRcdFx0cmVnaXN0ZXJlZDoge1xuXHRcdFx0XHRcdGNsaXA6IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBcImNsaXBcIjtcblx0XHRcdFx0XHRcdFx0XHQvKiBDbGlwIG5lZWRzIHRvIGJlIHVud3JhcHBlZCBhbmQgc3RyaXBwZWQgb2YgaXRzIGNvbW1hcyBkdXJpbmcgZXh0cmFjdGlvbi4gKi9cblx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXh0cmFjdGVkO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgVmVsb2NpdHkgYWxzbyBleHRyYWN0ZWQgdGhpcyB2YWx1ZSwgc2tpcCBleHRyYWN0aW9uLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBSZW1vdmUgdGhlIFwicmVjdCgpXCIgd3JhcHBlci4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IHByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS5tYXRjaChDU1MuUmVnRXgudmFsdWVVbndyYXApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBTdHJpcCBvZmYgY29tbWFzLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdGVkID0gZXh0cmFjdGVkID8gZXh0cmFjdGVkWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csIFwiIFwiKSA6IHByb3BlcnR5VmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGV4dHJhY3RlZDtcblx0XHRcdFx0XHRcdFx0XHQvKiBDbGlwIG5lZWRzIHRvIGJlIHJlLXdyYXBwZWQgZHVyaW5nIGluamVjdGlvbi4gKi9cblx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBcInJlY3QoXCIgKyBwcm9wZXJ0eVZhbHVlICsgXCIpXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRibHVyOiBmdW5jdGlvbih0eXBlLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gVmVsb2NpdHkuU3RhdGUuaXNGaXJlZm94ID8gXCJmaWx0ZXJcIiA6IFwiLXdlYmtpdC1maWx0ZXJcIjtcblx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXh0cmFjdGVkID0gcGFyc2VGbG9hdChwcm9wZXJ0eVZhbHVlKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIGV4dHJhY3RlZCBpcyBOYU4sIG1lYW5pbmcgdGhlIHZhbHVlIGlzbid0IGFscmVhZHkgZXh0cmFjdGVkLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmICghKGV4dHJhY3RlZCB8fCBleHRyYWN0ZWQgPT09IDApKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYmx1ckNvbXBvbmVudCA9IHByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS5tYXRjaCgvYmx1clxcKChbMC05XStbQS16XSspXFwpL2kpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgZmlsdGVyIHN0cmluZyBoYWQgYSBibHVyIGNvbXBvbmVudCwgcmV0dXJuIGp1c3QgdGhlIGJsdXIgdmFsdWUgYW5kIHVuaXQgdHlwZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChibHVyQ29tcG9uZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IGJsdXJDb21wb25lbnRbMV07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBjb21wb25lbnQgZG9lc24ndCBleGlzdCwgZGVmYXVsdCBibHVyIHRvIDAuICovXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBleHRyYWN0ZWQ7XG5cdFx0XHRcdFx0XHRcdFx0LyogQmx1ciBuZWVkcyB0byBiZSByZS13cmFwcGVkIGR1cmluZyBpbmplY3Rpb24uICovXG5cdFx0XHRcdFx0XHRcdGNhc2UgXCJpbmplY3RcIjpcblx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgdGhlIGJsdXIgZWZmZWN0IHRvIGJlIGZ1bGx5IGRlLWFwcGxpZWQsIGl0IG5lZWRzIHRvIGJlIHNldCB0byBcIm5vbmVcIiBpbnN0ZWFkIG9mIDAuICovXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFwYXJzZUZsb2F0KHByb3BlcnR5VmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJub25lXCI7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcImJsdXIoXCIgKyBwcm9wZXJ0eVZhbHVlICsgXCIpXCI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0LyogPD1JRTggZG8gbm90IHN1cHBvcnQgdGhlIHN0YW5kYXJkIG9wYWNpdHkgcHJvcGVydHkuIFRoZXkgdXNlIGZpbHRlcjphbHBoYShvcGFjaXR5PUlOVCkgaW5zdGVhZC4gKi9cblx0XHRcdFx0XHRvcGFjaXR5OiBmdW5jdGlvbih0eXBlLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKSB7XG5cdFx0XHRcdFx0XHRpZiAoSUUgPD0gOCkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiZmlsdGVyXCI7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcblx0XHRcdFx0XHRcdFx0XHRcdC8qIDw9SUU4IHJldHVybiBhIFwiZmlsdGVyXCIgdmFsdWUgb2YgXCJhbHBoYShvcGFjaXR5PVxcZHsxLDN9KVwiLlxuXHRcdFx0XHRcdFx0XHRcdFx0IEV4dHJhY3QgdGhlIHZhbHVlIGFuZCBjb252ZXJ0IGl0IHRvIGEgZGVjaW1hbCB2YWx1ZSB0byBtYXRjaCB0aGUgc3RhbmRhcmQgQ1NTIG9wYWNpdHkgcHJvcGVydHkncyBmb3JtYXR0aW5nLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGV4dHJhY3RlZCA9IHByb3BlcnR5VmFsdWUudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChleHRyYWN0ZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCB0byBkZWNpbWFsIHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gZXh0cmFjdGVkWzFdIC8gMTAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogV2hlbiBleHRyYWN0aW5nIG9wYWNpdHksIGRlZmF1bHQgdG8gMSBzaW5jZSBhIG51bGwgdmFsdWUgbWVhbnMgb3BhY2l0eSBoYXNuJ3QgYmVlbiBzZXQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSAxO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcHJvcGVydHlWYWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBPcGFjaWZpZWQgZWxlbWVudHMgYXJlIHJlcXVpcmVkIHRvIGhhdmUgdGhlaXIgem9vbSBwcm9wZXJ0eSBzZXQgdG8gYSBub24temVybyB2YWx1ZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUuem9vbSA9IDE7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qIFNldHRpbmcgdGhlIGZpbHRlciBwcm9wZXJ0eSBvbiBlbGVtZW50cyB3aXRoIGNlcnRhaW4gZm9udCBwcm9wZXJ0eSBjb21iaW5hdGlvbnMgY2FuIHJlc3VsdCBpbiBhXG5cdFx0XHRcdFx0XHRcdFx0XHQgaGlnaGx5IHVuYXBwZWFsaW5nIHVsdHJhLWJvbGRpbmcgZWZmZWN0LiBUaGVyZSdzIG5vIHdheSB0byByZW1lZHkgdGhpcyB0aHJvdWdob3V0IGEgdHdlZW4sIGJ1dCBkcm9wcGluZyB0aGVcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZSBhbHRvZ2V0aGVyICh3aGVuIG9wYWNpdHkgaGl0cyAxKSBhdCBsZWFzdHMgZW5zdXJlcyB0aGF0IHRoZSBnbGl0Y2ggaXMgZ29uZSBwb3N0LXR3ZWVuaW5nLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkgPj0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEFzIHBlciB0aGUgZmlsdGVyIHByb3BlcnR5J3Mgc3BlYywgY29udmVydCB0aGUgZGVjaW1hbCB2YWx1ZSB0byBhIHdob2xlIG51bWJlciBhbmQgd3JhcCB0aGUgdmFsdWUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcImFscGhhKG9wYWNpdHk9XCIgKyBwYXJzZUludChwYXJzZUZsb2F0KHByb3BlcnR5VmFsdWUpICogMTAwLCAxMCkgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvKiBXaXRoIGFsbCBvdGhlciBicm93c2Vycywgbm9ybWFsaXphdGlvbiBpcyBub3QgcmVxdWlyZWQ7IHJldHVybiB0aGUgc2FtZSB2YWx1ZXMgdGhhdCB3ZXJlIHBhc3NlZCBpbi4gKi9cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJvcGFjaXR5XCI7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImV4dHJhY3RcIjpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJpbmplY3RcIjpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IEJhdGNoZWQgUmVnaXN0cmF0aW9uc1xuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0LyogTm90ZTogQmF0Y2hlZCBub3JtYWxpemF0aW9ucyBleHRlbmQgdGhlIENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkIG9iamVjdC4gKi9cblx0XHRcdFx0cmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0IFRyYW5zZm9ybXNcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm1zIGFyZSB0aGUgc3VicHJvcGVydGllcyBjb250YWluZWQgYnkgdGhlIENTUyBcInRyYW5zZm9ybVwiIHByb3BlcnR5LiBUcmFuc2Zvcm1zIG11c3QgdW5kZXJnbyBub3JtYWxpemF0aW9uXG5cdFx0XHRcdFx0IHNvIHRoYXQgdGhleSBjYW4gYmUgcmVmZXJlbmNlZCBpbiBhIHByb3BlcnRpZXMgbWFwIGJ5IHRoZWlyIGluZGl2aWR1YWwgbmFtZXMuICovXG5cdFx0XHRcdFx0LyogTm90ZTogV2hlbiB0cmFuc2Zvcm1zIGFyZSBcInNldFwiLCB0aGV5IGFyZSBhY3R1YWxseSBhc3NpZ25lZCB0byBhIHBlci1lbGVtZW50IHRyYW5zZm9ybUNhY2hlLiBXaGVuIGFsbCB0cmFuc2Zvcm1cblx0XHRcdFx0XHQgc2V0dGluZyBpcyBjb21wbGV0ZSBjb21wbGV0ZSwgQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoKSBtdXN0IGJlIG1hbnVhbGx5IGNhbGxlZCB0byBmbHVzaCB0aGUgdmFsdWVzIHRvIHRoZSBET00uXG5cdFx0XHRcdFx0IFRyYW5zZm9ybSBzZXR0aW5nIGlzIGJhdGNoZWQgaW4gdGhpcyB3YXkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZTogdGhlIHRyYW5zZm9ybSBzdHlsZSBvbmx5IG5lZWRzIHRvIGJlIHVwZGF0ZWRcblx0XHRcdFx0XHQgb25jZSB3aGVuIG11bHRpcGxlIHRyYW5zZm9ybSBzdWJwcm9wZXJ0aWVzIGFyZSBiZWluZyBhbmltYXRlZCBzaW11bHRhbmVvdXNseS4gKi9cblx0XHRcdFx0XHQvKiBOb3RlOiBJRTkgYW5kIEFuZHJvaWQgR2luZ2VyYnJlYWQgaGF2ZSBzdXBwb3J0IGZvciAyRCAtLSBidXQgbm90IDNEIC0tIHRyYW5zZm9ybXMuIFNpbmNlIGFuaW1hdGluZyB1bnN1cHBvcnRlZFxuXHRcdFx0XHRcdCB0cmFuc2Zvcm0gcHJvcGVydGllcyByZXN1bHRzIGluIHRoZSBicm93c2VyIGlnbm9yaW5nIHRoZSAqZW50aXJlKiB0cmFuc2Zvcm0gc3RyaW5nLCB3ZSBwcmV2ZW50IHRoZXNlIDNEIHZhbHVlc1xuXHRcdFx0XHRcdCBmcm9tIGJlaW5nIG5vcm1hbGl6ZWQgZm9yIHRoZXNlIGJyb3dzZXJzIHNvIHRoYXQgdHdlZW5pbmcgc2tpcHMgdGhlc2UgcHJvcGVydGllcyBhbHRvZ2V0aGVyXG5cdFx0XHRcdFx0IChzaW5jZSBpdCB3aWxsIGlnbm9yZSB0aGVtIGFzIGJlaW5nIHVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLikgKi9cblx0XHRcdFx0XHRpZiAoKCFJRSB8fCBJRSA+IDkpICYmICFWZWxvY2l0eS5TdGF0ZS5pc0dpbmdlcmJyZWFkKSB7XG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBTaW5jZSB0aGUgc3RhbmRhbG9uZSBDU1MgXCJwZXJzcGVjdGl2ZVwiIHByb3BlcnR5IGFuZCB0aGUgQ1NTIHRyYW5zZm9ybSBcInBlcnNwZWN0aXZlXCIgc3VicHJvcGVydHlcblx0XHRcdFx0XHRcdCBzaGFyZSB0aGUgc2FtZSBuYW1lLCB0aGUgbGF0dGVyIGlzIGdpdmVuIGEgdW5pcXVlIHRva2VuIHdpdGhpbiBWZWxvY2l0eTogXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLiAqL1xuXHRcdFx0XHRcdFx0Q1NTLkxpc3RzLnRyYW5zZm9ybXNCYXNlID0gQ1NTLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmNvbmNhdChDU1MuTGlzdHMudHJhbnNmb3JtczNEKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IENTUy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0LyogV3JhcCB0aGUgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG5vcm1hbGl6YXRpb24gZnVuY3Rpb24gaW4gYSBuZXcgc2NvcGUgc28gdGhhdCB0cmFuc2Zvcm1OYW1lJ3MgdmFsdWUgaXNcblx0XHRcdFx0XHRcdCBwYWlyZWQgd2l0aCBpdHMgcmVzcGVjdGl2ZSBmdW5jdGlvbi4gKE90aGVyd2lzZSwgYWxsIGZ1bmN0aW9ucyB3b3VsZCB0YWtlIHRoZSBmaW5hbCBmb3IgbG9vcCdzIHRyYW5zZm9ybU5hbWUuKSAqL1xuXHRcdFx0XHRcdFx0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdHJhbnNmb3JtTmFtZSA9IENTUy5MaXN0cy50cmFuc2Zvcm1zQmFzZVtpXTtcblxuXHRcdFx0XHRcdFx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFt0cmFuc2Zvcm1OYW1lXSA9IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBub3JtYWxpemVkIHByb3BlcnR5IG5hbWUgaXMgdGhlIHBhcmVudCBcInRyYW5zZm9ybVwiIHByb3BlcnR5IC0tIHRoZSBwcm9wZXJ0eSB0aGF0IGlzIGFjdHVhbGx5IHNldCBpbiBDU1MuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwibmFtZVwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ0cmFuc2Zvcm1cIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogVHJhbnNmb3JtIHZhbHVlcyBhcmUgY2FjaGVkIG9udG8gYSBwZXItZWxlbWVudCB0cmFuc2Zvcm1DYWNoZSBvYmplY3QuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiZXh0cmFjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGlzIHRyYW5zZm9ybSBoYXMgeWV0IHRvIGJlIGFzc2lnbmVkIGEgdmFsdWUsIHJldHVybiBpdHMgbnVsbCB2YWx1ZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkgPT09IHVuZGVmaW5lZCB8fCBEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlW3RyYW5zZm9ybU5hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTY2FsZSBDU1MuTGlzdHMudHJhbnNmb3Jtc0Jhc2UgZGVmYXVsdCB0byAxIHdoZXJlYXMgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGRlZmF1bHQgdG8gMC4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gL15zY2FsZS9pLnRlc3QodHJhbnNmb3JtTmFtZSkgPyAxIDogMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBXaGVuIHRyYW5zZm9ybSB2YWx1ZXMgYXJlIHNldCwgdGhleSBhcmUgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyBhcyBwZXIgdGhlIENTUyBzcGVjLlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBUaHVzLCB3aGVuIGV4dHJhY3RpbmcgdGhlaXIgdmFsdWVzIChmb3IgdHdlZW4gY2FsY3VsYXRpb25zKSwgd2Ugc3RyaXAgb2ZmIHRoZSBwYXJlbnRoZXNlcy4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXS5yZXBsYWNlKC9bKCldL2csIFwiXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgaW52YWxpZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIGFuIGluZGl2aWR1YWwgdHJhbnNmb3JtIHByb3BlcnR5IGNvbnRhaW5zIGFuIHVuc3VwcG9ydGVkIHVuaXQgdHlwZSwgdGhlIGJyb3dzZXIgaWdub3JlcyB0aGUgKmVudGlyZSogdHJhbnNmb3JtIHByb3BlcnR5LlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgVGh1cywgcHJvdGVjdCB1c2VycyBmcm9tIHRoZW1zZWx2ZXMgYnkgc2tpcHBpbmcgc2V0dGluZyBmb3IgdHJhbnNmb3JtIHZhbHVlcyBzdXBwbGllZCB3aXRoIGludmFsaWQgdW5pdCB0eXBlcy4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU3dpdGNoIG9uIHRoZSBiYXNlIHRyYW5zZm9ybSB0eXBlOyBpZ25vcmUgdGhlIGF4aXMgYnkgcmVtb3ZpbmcgdGhlIGxhc3QgbGV0dGVyIGZyb20gdGhlIHRyYW5zZm9ybSdzIG5hbWUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAodHJhbnNmb3JtTmFtZS5zdWJzdHIoMCwgdHJhbnNmb3JtTmFtZS5sZW5ndGggLSAxKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFdoaXRlbGlzdCB1bml0IHR5cGVzIGZvciBlYWNoIHRyYW5zZm9ybS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwidHJhbnNsYXRlXCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbnZhbGlkID0gIS8oJXxweHxlbXxyZW18dnd8dmh8XFxkKSQvaS50ZXN0KHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTaW5jZSBhbiBheGlzLWZyZWUgXCJzY2FsZVwiIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBhcyB3ZWxsLCBhIGxpdHRsZSBoYWNrIGlzIHVzZWQgaGVyZSB0byBkZXRlY3QgaXQgYnkgY2hvcHBpbmcgb2ZmIGl0cyBsYXN0IGxldHRlci4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwic2NhbFwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJzY2FsZVwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ2hyb21lIG9uIEFuZHJvaWQgaGFzIGEgYnVnIGluIHdoaWNoIHNjYWxlZCBlbGVtZW50cyBibHVyIGlmIHRoZWlyIGluaXRpYWwgc2NhbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZSBpcyBiZWxvdyAxICh3aGljaCBjYW4gaGFwcGVuIHdpdGggZm9yY2VmZWVkaW5nKS4gVGh1cywgd2UgZGV0ZWN0IGEgeWV0LXVuc2V0IHNjYWxlIHByb3BlcnR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgYW5kIGVuc3VyZSB0aGF0IGl0cyBmaXJzdCB2YWx1ZSBpcyBhbHdheXMgMS4gTW9yZSBpbmZvOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNDE3ODkwL2NzczMtYW5pbWF0aW9ucy13aXRoLXRyYW5zZm9ybS1jYXVzZXMtYmx1cnJlZC1lbGVtZW50cy1vbi13ZWJraXQvMTA0MTc5NjIjMTA0MTc5NjIgKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5pc0FuZHJvaWQgJiYgRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXSA9PT0gdW5kZWZpbmVkICYmIHByb3BlcnR5VmFsdWUgPCAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSAxO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbnZhbGlkID0gIS8oXFxkKSQvaS50ZXN0KHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInNrZXdcIjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGludmFsaWQgPSAhLyhkZWd8XFxkKSQvaS50ZXN0KHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcInJvdGF0ZVwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW52YWxpZCA9ICEvKGRlZ3xcXGQpJC9pLnRlc3QocHJvcGVydHlWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghaW52YWxpZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEFzIHBlciB0aGUgQ1NTIHNwZWMsIHdyYXAgdGhlIHZhbHVlIGluIHBhcmVudGhlc2VzLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV0gPSBcIihcIiArIHByb3BlcnR5VmFsdWUgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEFsdGhvdWdoIHRoZSB2YWx1ZSBpcyBzZXQgb24gdGhlIHRyYW5zZm9ybUNhY2hlIG9iamVjdCwgcmV0dXJuIHRoZSBuZXdseS11cGRhdGVkIHZhbHVlIGZvciB0aGUgY2FsbGluZyBjb2RlIHRvIHByb2Nlc3MgYXMgbm9ybWFsLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gRGF0YShlbGVtZW50KS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqXG5cdFx0XHRcdFx0IENvbG9yc1xuXHRcdFx0XHRcdCAqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0LyogU2luY2UgVmVsb2NpdHkgb25seSBhbmltYXRlcyBhIHNpbmdsZSBudW1lcmljIHZhbHVlIHBlciBwcm9wZXJ0eSwgY29sb3IgYW5pbWF0aW9uIGlzIGFjaGlldmVkIGJ5IGhvb2tpbmcgdGhlIGluZGl2aWR1YWwgUkdCQSBjb21wb25lbnRzIG9mIENTUyBjb2xvciBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRcdCBBY2NvcmRpbmdseSwgY29sb3IgdmFsdWVzIG11c3QgYmUgbm9ybWFsaXplZCAoZS5nLiBcIiNmZjAwMDBcIiwgXCJyZWRcIiwgYW5kIFwicmdiKDI1NSwgMCwgMClcIiA9PT4gXCIyNTUgMCAwIDFcIikgc28gdGhhdCB0aGVpciBjb21wb25lbnRzIGNhbiBiZSBpbmplY3RlZC9leHRyYWN0ZWQgYnkgQ1NTLkhvb2tzIGxvZ2ljLiAqL1xuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgQ1NTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0LyogV3JhcCB0aGUgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG5vcm1hbGl6YXRpb24gZnVuY3Rpb24gaW4gYSBuZXcgc2NvcGUgc28gdGhhdCBjb2xvck5hbWUncyB2YWx1ZSBpcyBwYWlyZWQgd2l0aCBpdHMgcmVzcGVjdGl2ZSBmdW5jdGlvbi5cblx0XHRcdFx0XHRcdCAoT3RoZXJ3aXNlLCBhbGwgZnVuY3Rpb25zIHdvdWxkIHRha2UgdGhlIGZpbmFsIGZvciBsb29wJ3MgY29sb3JOYW1lLikgKi9cblx0XHRcdFx0XHRcdChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGNvbG9yTmFtZSA9IENTUy5MaXN0cy5jb2xvcnNbal07XG5cblx0XHRcdFx0XHRcdFx0LyogTm90ZTogSW4gSUU8PTgsIHdoaWNoIHN1cHBvcnQgcmdiIGJ1dCBub3QgcmdiYSwgY29sb3IgcHJvcGVydGllcyBhcmUgcmV2ZXJ0ZWQgdG8gcmdiIGJ5IHN0cmlwcGluZyBvZmYgdGhlIGFscGhhIGNvbXBvbmVudC4gKi9cblx0XHRcdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbY29sb3JOYW1lXSA9IGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJuYW1lXCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBjb2xvck5hbWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIENvbnZlcnQgYWxsIGNvbG9yIHZhbHVlcyBpbnRvIHRoZSByZ2IgZm9ybWF0LiAoT2xkIElFIGNhbiByZXR1cm4gaGV4IHZhbHVlcyBhbmQgY29sb3IgbmFtZXMgaW5zdGVhZCBvZiByZ2IvcmdiYS4pICovXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiZXh0cmFjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgZXh0cmFjdGVkO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBjb2xvciBpcyBhbHJlYWR5IGluIGl0cyBob29rYWJsZSBmb3JtIChlLmcuIFwiMjU1IDI1NSAyNTUgMVwiKSBkdWUgdG8gaGF2aW5nIGJlZW4gcHJldmlvdXNseSBleHRyYWN0ZWQsIHNraXAgZXh0cmFjdGlvbi4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QocHJvcGVydHlWYWx1ZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleHRyYWN0ZWQgPSBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBjb252ZXJ0ZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yTmFtZXMgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmxhY2s6IFwicmdiKDAsIDAsIDApXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ymx1ZTogXCJyZ2IoMCwgMCwgMjU1KVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyYXk6IFwicmdiKDEyOCwgMTI4LCAxMjgpXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JlZW46IFwicmdiKDAsIDEyOCwgMClcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWQ6IFwicmdiKDI1NSwgMCwgMClcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZTogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCBjb2xvciBuYW1lcyB0byByZ2IuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKC9eW0Etel0rJC9pLnRlc3QocHJvcGVydHlWYWx1ZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjb2xvck5hbWVzW3Byb3BlcnR5VmFsdWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udmVydGVkID0gY29sb3JOYW1lc1twcm9wZXJ0eVZhbHVlXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIGFuIHVubWF0Y2hlZCBjb2xvciBuYW1lIGlzIHByb3ZpZGVkLCBkZWZhdWx0IHRvIGJsYWNrLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZWQgPSBjb2xvck5hbWVzLmJsYWNrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCBoZXggdmFsdWVzIHRvIHJnYi4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKENTUy5SZWdFeC5pc0hleC50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZWQgPSBcInJnYihcIiArIENTUy5WYWx1ZXMuaGV4VG9SZ2IocHJvcGVydHlWYWx1ZSkuam9pbihcIiBcIikgKyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHRoZSBwcm92aWRlZCBjb2xvciBkb2Vzbid0IG1hdGNoIGFueSBvZiB0aGUgYWNjZXB0ZWQgY29sb3IgZm9ybWF0cywgZGVmYXVsdCB0byBibGFjay4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCEoL15yZ2JhP1xcKC9pLnRlc3QocHJvcGVydHlWYWx1ZSkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZWQgPSBjb2xvck5hbWVzLmJsYWNrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFJlbW92ZSB0aGUgc3Vycm91bmRpbmcgXCJyZ2IvcmdiYSgpXCIgc3RyaW5nIHRoZW4gcmVwbGFjZSBjb21tYXMgd2l0aCBzcGFjZXMgYW5kIHN0cmlwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHJlcGVhdGVkIHNwYWNlcyAoaW4gY2FzZSB0aGUgdmFsdWUgaW5jbHVkZWQgc3BhY2VzIHRvIGJlZ2luIHdpdGgpLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCA9IChjb252ZXJ0ZWQgfHwgcHJvcGVydHlWYWx1ZSkudG9TdHJpbmcoKS5tYXRjaChDU1MuUmVnRXgudmFsdWVVbndyYXApWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csIFwiIFwiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFNvIGxvbmcgYXMgdGhpcyBpc24ndCA8PUlFOCwgYWRkIGEgZm91cnRoIChhbHBoYSkgY29tcG9uZW50IGlmIGl0J3MgbWlzc2luZyBhbmQgZGVmYXVsdCBpdCB0byAxICh2aXNpYmxlKS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCghSUUgfHwgSUUgPiA4KSAmJiBleHRyYWN0ZWQuc3BsaXQoXCIgXCIpLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RlZCArPSBcIiAxXCI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZXh0cmFjdGVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcImluamVjdFwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB3ZSBoYXZlIGEgcGF0dGVybiB0aGVuIGl0IG1pZ2h0IGFscmVhZHkgaGF2ZSB0aGUgcmlnaHQgdmFsdWVzICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgvXnJnYi8udGVzdChwcm9wZXJ0eVZhbHVlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogSWYgdGhpcyBpcyBJRTw9OCBhbmQgYW4gYWxwaGEgY29tcG9uZW50IGV4aXN0cywgc3RyaXAgaXQgb2ZmLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoSUUgPD0gOCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eVZhbHVlLnNwbGl0KFwiIFwiKS5sZW5ndGggPT09IDQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0eVZhbHVlLnNwbGl0KC9cXHMrLykuc2xpY2UoMCwgMykuam9pbihcIiBcIik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIE90aGVyd2lzZSwgYWRkIGEgZm91cnRoIChhbHBoYSkgY29tcG9uZW50IGlmIGl0J3MgbWlzc2luZyBhbmQgZGVmYXVsdCBpdCB0byAxICh2aXNpYmxlKS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eVZhbHVlLnNwbGl0KFwiIFwiKS5sZW5ndGggPT09IDMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlICs9IFwiIDFcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFJlLWluc2VydCB0aGUgYnJvd3Nlci1hcHByb3ByaWF0ZSB3cmFwcGVyKFwicmdiL3JnYmEoKVwiKSwgaW5zZXJ0IGNvbW1hcywgYW5kIHN0cmlwIG9mZiBkZWNpbWFsIHVuaXRzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbiBhbGwgdmFsdWVzIGJ1dCB0aGUgZm91cnRoIChSLCBHLCBhbmQgQiBvbmx5IGFjY2VwdCB3aG9sZSBudW1iZXJzKS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChJRSA8PSA4ID8gXCJyZ2JcIiA6IFwicmdiYVwiKSArIFwiKFwiICsgcHJvcGVydHlWYWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiLFwiKS5yZXBsYWNlKC9cXC4oXFxkKSsoPz0sKS9nLCBcIlwiKSArIFwiKVwiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH0pKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqXG5cdFx0XHRcdFx0IERpbWVuc2lvbnNcblx0XHRcdFx0XHQgKioqKioqKioqKioqKiovXG5cdFx0XHRcdFx0ZnVuY3Rpb24gYXVnbWVudERpbWVuc2lvbihuYW1lLCBlbGVtZW50LCB3YW50SW5uZXIpIHtcblx0XHRcdFx0XHRcdHZhciBpc0JvcmRlckJveCA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJib3JkZXItYm94XCI7XG5cblx0XHRcdFx0XHRcdGlmIChpc0JvcmRlckJveCA9PT0gKHdhbnRJbm5lciB8fCBmYWxzZSkpIHtcblx0XHRcdFx0XHRcdFx0LyogaW4gYm94LXNpemluZyBtb2RlLCB0aGUgQ1NTIHdpZHRoIC8gaGVpZ2h0IGFjY2Vzc29ycyBhbHJlYWR5IGdpdmUgdGhlIG91dGVyV2lkdGggLyBvdXRlckhlaWdodC4gKi9cblx0XHRcdFx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdGF1Z21lbnQgPSAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2lkZXMgPSBuYW1lID09PSBcIndpZHRoXCIgPyBbXCJMZWZ0XCIsIFwiUmlnaHRcIl0gOiBbXCJUb3BcIiwgXCJCb3R0b21cIl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWVsZHMgPSBbXCJwYWRkaW5nXCIgKyBzaWRlc1swXSwgXCJwYWRkaW5nXCIgKyBzaWRlc1sxXSwgXCJib3JkZXJcIiArIHNpZGVzWzBdICsgXCJXaWR0aFwiLCBcImJvcmRlclwiICsgc2lkZXNbMV0gKyBcIldpZHRoXCJdO1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgZmllbGRzW2ldKSk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFpc05hTih2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGF1Z21lbnQgKz0gdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB3YW50SW5uZXIgPyAtYXVnbWVudCA6IGF1Z21lbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZnVuY3Rpb24gZ2V0RGltZW5zaW9uKG5hbWUsIHdhbnRJbm5lcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHR5cGUsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBuYW1lO1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJleHRyYWN0XCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VGbG9hdChwcm9wZXJ0eVZhbHVlKSArIGF1Z21lbnREaW1lbnNpb24obmFtZSwgZWxlbWVudCwgd2FudElubmVyKTtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiaW5qZWN0XCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKHBhcnNlRmxvYXQocHJvcGVydHlWYWx1ZSkgLSBhdWdtZW50RGltZW5zaW9uKG5hbWUsIGVsZW1lbnQsIHdhbnRJbm5lcikpICsgXCJweFwiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZC5pbm5lcldpZHRoID0gZ2V0RGltZW5zaW9uKFwid2lkdGhcIiwgdHJ1ZSk7XG5cdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWQuaW5uZXJIZWlnaHQgPSBnZXREaW1lbnNpb24oXCJoZWlnaHRcIiwgdHJ1ZSk7XG5cdFx0XHRcdFx0Q1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWQub3V0ZXJXaWR0aCA9IGdldERpbWVuc2lvbihcIndpZHRoXCIpO1xuXHRcdFx0XHRcdENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkLm91dGVySGVpZ2h0ID0gZ2V0RGltZW5zaW9uKFwiaGVpZ2h0XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0IENTUyBQcm9wZXJ0eSBOYW1lc1xuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0TmFtZXM6IHtcblx0XHRcdFx0LyogQ2FtZWxjYXNlIGEgcHJvcGVydHkgbmFtZSBpbnRvIGl0cyBKYXZhU2NyaXB0IG5vdGF0aW9uIChlLmcuIFwiYmFja2dyb3VuZC1jb2xvclwiID09PiBcImJhY2tncm91bmRDb2xvclwiKS5cblx0XHRcdFx0IENhbWVsY2FzaW5nIGlzIHVzZWQgdG8gbm9ybWFsaXplIHByb3BlcnR5IG5hbWVzIGJldHdlZW4gYW5kIGFjcm9zcyBjYWxscy4gKi9cblx0XHRcdFx0Y2FtZWxDYXNlOiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9wZXJ0eS5yZXBsYWNlKC8tKFxcdykvZywgZnVuY3Rpb24obWF0Y2gsIHN1Yk1hdGNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc3ViTWF0Y2gudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0LyogRm9yIFNWRyBlbGVtZW50cywgc29tZSBwcm9wZXJ0aWVzIChuYW1lbHksIGRpbWVuc2lvbmFsIG9uZXMpIGFyZSBHRVQvU0VUIHZpYSB0aGUgZWxlbWVudCdzIEhUTUwgYXR0cmlidXRlcyAoaW5zdGVhZCBvZiB2aWEgQ1NTIHN0eWxlcykuICovXG5cdFx0XHRcdFNWR0F0dHJpYnV0ZTogZnVuY3Rpb24ocHJvcGVydHkpIHtcblx0XHRcdFx0XHR2YXIgU1ZHQXR0cmlidXRlcyA9IFwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7XG5cblx0XHRcdFx0XHQvKiBDZXJ0YWluIGJyb3dzZXJzIHJlcXVpcmUgYW4gU1ZHIHRyYW5zZm9ybSB0byBiZSBhcHBsaWVkIGFzIGFuIGF0dHJpYnV0ZS4gKE90aGVyd2lzZSwgYXBwbGljYXRpb24gdmlhIENTUyBpcyBwcmVmZXJhYmxlIGR1ZSB0byAzRCBzdXBwb3J0LikgKi9cblx0XHRcdFx0XHRpZiAoSUUgfHwgKFZlbG9jaXR5LlN0YXRlLmlzQW5kcm9pZCAmJiAhVmVsb2NpdHkuU3RhdGUuaXNDaHJvbWUpKSB7XG5cdFx0XHRcdFx0XHRTVkdBdHRyaWJ1dGVzICs9IFwifHRyYW5zZm9ybVwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFwiXihcIiArIFNWR0F0dHJpYnV0ZXMgKyBcIikkXCIsIFwiaVwiKS50ZXN0KHByb3BlcnR5KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0LyogRGV0ZXJtaW5lIHdoZXRoZXIgYSBwcm9wZXJ0eSBzaG91bGQgYmUgc2V0IHdpdGggYSB2ZW5kb3IgcHJlZml4LiAqL1xuXHRcdFx0XHQvKiBJZiBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHByb3BlcnR5IGV4aXN0cywgcmV0dXJuIGl0LiBPdGhlcndpc2UsIHJldHVybiB0aGUgb3JpZ2luYWwgcHJvcGVydHkgbmFtZS5cblx0XHRcdFx0IElmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYXQgYWxsIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlciwgcmV0dXJuIGEgZmFsc2UgZmxhZy4gKi9cblx0XHRcdFx0cHJlZml4Q2hlY2s6IGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cdFx0XHRcdFx0LyogSWYgdGhpcyBwcm9wZXJ0eSBoYXMgYWxyZWFkeSBiZWVuIGNoZWNrZWQsIHJldHVybiB0aGUgY2FjaGVkIHZhbHVlLiAqL1xuXHRcdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5wcmVmaXhNYXRjaGVzW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtWZWxvY2l0eS5TdGF0ZS5wcmVmaXhNYXRjaGVzW3Byb3BlcnR5XSwgdHJ1ZV07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciB2ZW5kb3JzID0gW1wiXCIsIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiwgXCJPXCJdO1xuXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMCwgdmVuZG9yc0xlbmd0aCA9IHZlbmRvcnMubGVuZ3RoOyBpIDwgdmVuZG9yc0xlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVByZWZpeGVkO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlQcmVmaXhlZCA9IHByb3BlcnR5O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdC8qIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcHJvcGVydHkgdG8gY29uZm9ybSB0byBKYXZhU2NyaXB0IHZlbmRvciBwcmVmaXggbm90YXRpb24gKGUuZy4gd2Via2l0RmlsdGVyKS4gKi9cblx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVByZWZpeGVkID0gdmVuZG9yc1tpXSArIHByb3BlcnR5LnJlcGxhY2UoL15cXHcvLCBmdW5jdGlvbihtYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1hdGNoLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvKiBDaGVjayBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGlzIHByb3BlcnR5IGFzIHByZWZpeGVkLiAqL1xuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc1N0cmluZyhWZWxvY2l0eS5TdGF0ZS5wcmVmaXhFbGVtZW50LnN0eWxlW3Byb3BlcnR5UHJlZml4ZWRdKSkge1xuXHRcdFx0XHRcdFx0XHRcdC8qIENhY2hlIHRoZSBtYXRjaC4gKi9cblx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5wcmVmaXhNYXRjaGVzW3Byb3BlcnR5XSA9IHByb3BlcnR5UHJlZml4ZWQ7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW3Byb3BlcnR5UHJlZml4ZWQsIHRydWVdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGlzIHByb3BlcnR5IGluIGFueSBmb3JtLCBpbmNsdWRlIGEgZmFsc2UgZmxhZyBzbyB0aGF0IHRoZSBjYWxsZXIgY2FuIGRlY2lkZSBob3cgdG8gcHJvY2VlZC4gKi9cblx0XHRcdFx0XHRcdHJldHVybiBbcHJvcGVydHksIGZhbHNlXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgQ1NTIFByb3BlcnR5IFZhbHVlc1xuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0VmFsdWVzOiB7XG5cdFx0XHRcdC8qIEhleCB0byBSR0IgY29udmVyc2lvbi4gQ29weXJpZ2h0IFRpbSBEb3duOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MjM4MzgvcmdiLXRvLWhleC1hbmQtaGV4LXRvLXJnYiAqL1xuXHRcdFx0XHRoZXhUb1JnYjogZnVuY3Rpb24oaGV4KSB7XG5cdFx0XHRcdFx0dmFyIHNob3J0Zm9ybVJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxcblx0XHRcdFx0XHRcdFx0bG9uZ2Zvcm1SZWdleCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2ksXG5cdFx0XHRcdFx0XHRcdHJnYlBhcnRzO1xuXG5cdFx0XHRcdFx0aGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRmb3JtUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZ2JQYXJ0cyA9IGxvbmdmb3JtUmVnZXguZXhlYyhoZXgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHJnYlBhcnRzID8gW3BhcnNlSW50KHJnYlBhcnRzWzFdLCAxNiksIHBhcnNlSW50KHJnYlBhcnRzWzJdLCAxNiksIHBhcnNlSW50KHJnYlBhcnRzWzNdLCAxNildIDogWzAsIDAsIDBdO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRpc0NTU051bGxWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHQvKiBUaGUgYnJvd3NlciBkZWZhdWx0cyBDU1MgdmFsdWVzIHRoYXQgaGF2ZSBub3QgYmVlbiBzZXQgdG8gZWl0aGVyIDAgb3Igb25lIG9mIHNldmVyYWwgcG9zc2libGUgbnVsbC12YWx1ZSBzdHJpbmdzLlxuXHRcdFx0XHRcdCBUaHVzLCB3ZSBjaGVjayBmb3IgYm90aCBmYWxzaW5lc3MgYW5kIHRoZXNlIHNwZWNpYWwgc3RyaW5ncy4gKi9cblx0XHRcdFx0XHQvKiBOdWxsLXZhbHVlIGNoZWNraW5nIGlzIHBlcmZvcm1lZCB0byBkZWZhdWx0IHRoZSBzcGVjaWFsIHN0cmluZ3MgdG8gMCAoZm9yIHRoZSBzYWtlIG9mIHR3ZWVuaW5nKSBvciB0aGVpciBob29rXG5cdFx0XHRcdFx0IHRlbXBsYXRlcyBhcyBkZWZpbmVkIGFzIENTUy5Ib29rcyAoZm9yIHRoZSBzYWtlIG9mIGhvb2sgaW5qZWN0aW9uL2V4dHJhY3Rpb24pLiAqL1xuXHRcdFx0XHRcdC8qIE5vdGU6IENocm9tZSByZXR1cm5zIFwicmdiYSgwLCAwLCAwLCAwKVwiIGZvciBhbiB1bmRlZmluZWQgY29sb3Igd2hlcmVhcyBJRSByZXR1cm5zIFwidHJhbnNwYXJlbnRcIi4gKi9cblx0XHRcdFx0XHRyZXR1cm4gKCF2YWx1ZSB8fCAvXihub25lfGF1dG98dHJhbnNwYXJlbnR8KHJnYmFcXCgwLCA/MCwgPzAsID8wXFwpKSkkL2kudGVzdCh2YWx1ZSkpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvKiBSZXRyaWV2ZSBhIHByb3BlcnR5J3MgZGVmYXVsdCB1bml0IHR5cGUuIFVzZWQgZm9yIGFzc2lnbmluZyBhIHVuaXQgdHlwZSB3aGVuIG9uZSBpcyBub3Qgc3VwcGxpZWQgYnkgdGhlIHVzZXIuICovXG5cdFx0XHRcdGdldFVuaXRUeXBlOiBmdW5jdGlvbihwcm9wZXJ0eSkge1xuXHRcdFx0XHRcdGlmICgvXihyb3RhdGV8c2tldykvaS50ZXN0KHByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiZGVnXCI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KHByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0LyogVGhlIGFib3ZlIHByb3BlcnRpZXMgYXJlIHVuaXRsZXNzLiAqL1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8qIERlZmF1bHQgdG8gcHggZm9yIGFsbCBvdGhlciBwcm9wZXJ0aWVzLiAqL1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwicHhcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8qIEhUTUwgZWxlbWVudHMgZGVmYXVsdCB0byBhbiBhc3NvY2lhdGVkIGRpc3BsYXkgdHlwZSB3aGVuIHRoZXkncmUgbm90IHNldCB0byBkaXNwbGF5Om5vbmUuICovXG5cdFx0XHRcdC8qIE5vdGU6IFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBmb3IgY29ycmVjdGx5IHNldHRpbmcgdGhlIG5vbi1cIm5vbmVcIiBkaXNwbGF5IHZhbHVlIGluIGNlcnRhaW4gVmVsb2NpdHkgcmVkaXJlY3RzLCBzdWNoIGFzIGZhZGVJbi9PdXQuICovXG5cdFx0XHRcdGdldERpc3BsYXlUeXBlOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdFx0dmFyIHRhZ05hbWUgPSBlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHRpZiAoL14oYnxiaWd8aXxzbWFsbHx0dHxhYmJyfGFjcm9ueW18Y2l0ZXxjb2RlfGRmbnxlbXxrYmR8c3Ryb25nfHNhbXB8dmFyfGF8YmRvfGJyfGltZ3xtYXB8b2JqZWN0fHF8c2NyaXB0fHNwYW58c3VifHN1cHxidXR0b258aW5wdXR8bGFiZWx8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJpbmxpbmVcIjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eKGxpKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJsaXN0LWl0ZW1cIjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eKHRyKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0YWJsZS1yb3dcIjtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eKHRhYmxlKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXCJ0YWJsZVwiO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL14odGJvZHkpJC9pLnRlc3QodGFnTmFtZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBcInRhYmxlLXJvdy1ncm91cFwiO1xuXHRcdFx0XHRcdFx0LyogRGVmYXVsdCB0byBcImJsb2NrXCIgd2hlbiBubyBtYXRjaCBpcyBmb3VuZC4gKi9cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiYmxvY2tcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8qIFRoZSBjbGFzcyBhZGQvcmVtb3ZlIGZ1bmN0aW9ucyBhcmUgdXNlZCB0byB0ZW1wb3JhcmlseSBhcHBseSBhIFwidmVsb2NpdHktYW5pbWF0aW5nXCIgY2xhc3MgdG8gZWxlbWVudHMgd2hpbGUgdGhleSdyZSBhbmltYXRpbmcuICovXG5cdFx0XHRcdGFkZENsYXNzOiBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzU3RyaW5nKGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBFbGVtZW50LmNsYXNzTmFtZSBpcyBhcm91bmQgMTUlIGZhc3RlciB0aGVuIHNldC9nZXRBdHRyaWJ1dGVcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgKz0gKGVsZW1lbnQuY2xhc3NOYW1lLmxlbmd0aCA/IFwiIFwiIDogXCJcIikgKyBjbGFzc05hbWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBXb3JrIGFyb3VuZCBmb3IgSUUgc3RyaWN0IG1vZGUgYW5pbWF0aW5nIFNWRyAtIGFuZCBhbnl0aGluZyBlbHNlIHRoYXQgZG9lc24ndCBiZWhhdmUgY29ycmVjdGx5IC0gdGhlIHNhbWUgd2F5IGpRdWVyeSBkb2VzIGl0XG5cdFx0XHRcdFx0XHRcdHZhciBjdXJyZW50Q2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShJRSA8PSA3ID8gXCJjbGFzc05hbWVcIiA6IFwiY2xhc3NcIikgfHwgXCJcIjtcblxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGN1cnJlbnRDbGFzcyArIChjdXJyZW50Q2xhc3MgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NOYW1lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZUNsYXNzOiBmdW5jdGlvbihlbGVtZW50LCBjbGFzc05hbWUpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzU3RyaW5nKGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBFbGVtZW50LmNsYXNzTmFtZSBpcyBhcm91bmQgMTUlIGZhc3RlciB0aGVuIHNldC9nZXRBdHRyaWJ1dGVcblx0XHRcdFx0XHRcdFx0Ly8gVE9ETzogTmVlZCBzb21lIGpzcGVyZiB0ZXN0cyBvbiBwZXJmb3JtYW5jZSAtIGNhbiB3ZSBnZXQgcmlkIG9mIHRoZSByZWdleCBhbmQgbWF5YmUgdXNlIHNwbGl0IC8gYXJyYXkgbWFuaXB1bGF0aW9uP1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjbGFzc05hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpICsgXCIoXFxcXHN8JClcIiwgXCJnaVwiKSwgXCIgXCIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gV29yayBhcm91bmQgZm9yIElFIHN0cmljdCBtb2RlIGFuaW1hdGluZyBTVkcgLSBhbmQgYW55dGhpbmcgZWxzZSB0aGF0IGRvZXNuJ3QgYmVoYXZlIGNvcnJlY3RseSAtIHRoZSBzYW1lIHdheSBqUXVlcnkgZG9lcyBpdFxuXHRcdFx0XHRcdFx0XHR2YXIgY3VycmVudENsYXNzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoSUUgPD0gNyA/IFwiY2xhc3NOYW1lXCIgOiBcImNsYXNzXCIpIHx8IFwiXCI7XG5cblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjdXJyZW50Q2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxzKVwiICsgY2xhc3NOYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKSArIFwiKFxcc3wkKVwiLCBcImdpXCIpLCBcIiBcIikpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgU3R5bGUgR2V0dGluZyAmIFNldHRpbmdcblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvKiBUaGUgc2luZ3VsYXIgZ2V0UHJvcGVydHlWYWx1ZSwgd2hpY2ggcm91dGVzIHRoZSBsb2dpYyBmb3IgYWxsIG5vcm1hbGl6YXRpb25zLCBob29rcywgYW5kIHN0YW5kYXJkIENTUyBwcm9wZXJ0aWVzLiAqL1xuXHRcdFx0Z2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCwgcHJvcGVydHksIHJvb3RQcm9wZXJ0eVZhbHVlLCBmb3JjZVN0eWxlTG9va3VwKSB7XG5cdFx0XHRcdC8qIEdldCBhbiBlbGVtZW50J3MgY29tcHV0ZWQgcHJvcGVydHkgdmFsdWUuICovXG5cdFx0XHRcdC8qIE5vdGU6IFJldHJpZXZpbmcgdGhlIHZhbHVlIG9mIGEgQ1NTIHByb3BlcnR5IGNhbm5vdCBzaW1wbHkgYmUgcGVyZm9ybWVkIGJ5IGNoZWNraW5nIGFuIGVsZW1lbnQnc1xuXHRcdFx0XHQgc3R5bGUgYXR0cmlidXRlICh3aGljaCBvbmx5IHJlZmxlY3RzIHVzZXItZGVmaW5lZCB2YWx1ZXMpLiBJbnN0ZWFkLCB0aGUgYnJvd3NlciBtdXN0IGJlIHF1ZXJpZWQgZm9yIGEgcHJvcGVydHknc1xuXHRcdFx0XHQgKmNvbXB1dGVkKiB2YWx1ZS4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgZ2V0Q29tcHV0ZWRTdHlsZSBoZXJlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvd2luZG93LmdldENvbXB1dGVkU3R5bGUgKi9cblx0XHRcdFx0ZnVuY3Rpb24gY29tcHV0ZVByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHkpIHtcblx0XHRcdFx0XHQvKiBXaGVuIGJveC1zaXppbmcgaXNuJ3Qgc2V0IHRvIGJvcmRlci1ib3gsIGhlaWdodCBhbmQgd2lkdGggc3R5bGUgdmFsdWVzIGFyZSBpbmNvcnJlY3RseSBjb21wdXRlZCB3aGVuIGFuXG5cdFx0XHRcdFx0IGVsZW1lbnQncyBzY3JvbGxiYXJzIGFyZSB2aXNpYmxlICh3aGljaCBleHBhbmRzIHRoZSBlbGVtZW50J3MgZGltZW5zaW9ucykuIFRodXMsIHdlIGRlZmVyIHRvIHRoZSBtb3JlIGFjY3VyYXRlXG5cdFx0XHRcdFx0IG9mZnNldEhlaWdodC9XaWR0aCBwcm9wZXJ0eSwgd2hpY2ggaW5jbHVkZXMgdGhlIHRvdGFsIGRpbWVuc2lvbnMgZm9yIGludGVyaW9yLCBib3JkZXIsIHBhZGRpbmcsIGFuZCBzY3JvbGxiYXIuXG5cdFx0XHRcdFx0IFdlIHN1YnRyYWN0IGJvcmRlciBhbmQgcGFkZGluZyB0byBnZXQgdGhlIHN1bSBvZiBpbnRlcmlvciArIHNjcm9sbGJhci4gKi9cblx0XHRcdFx0XHR2YXIgY29tcHV0ZWRWYWx1ZSA9IDA7XG5cblx0XHRcdFx0XHQvKiBJRTw9OCBkb2Vzbid0IHN1cHBvcnQgd2luZG93LmdldENvbXB1dGVkU3R5bGUsIHRodXMgd2UgZGVmZXIgdG8galF1ZXJ5LCB3aGljaCBoYXMgYW4gZXh0ZW5zaXZlIGFycmF5XG5cdFx0XHRcdFx0IG9mIGhhY2tzIHRvIGFjY3VyYXRlbHkgcmV0cmlldmUgSUU4IHByb3BlcnR5IHZhbHVlcy4gUmUtaW1wbGVtZW50aW5nIHRoYXQgbG9naWMgaGVyZSBpcyBub3Qgd29ydGggYmxvYXRpbmcgdGhlXG5cdFx0XHRcdFx0IGNvZGViYXNlIGZvciBhIGR5aW5nIGJyb3dzZXIuIFRoZSBwZXJmb3JtYW5jZSByZXBlcmN1c3Npb25zIG9mIHVzaW5nIGpRdWVyeSBoZXJlIGFyZSBtaW5pbWFsIHNpbmNlXG5cdFx0XHRcdFx0IFZlbG9jaXR5IGlzIG9wdGltaXplZCB0byByYXJlbHkgKGFuZCBzb21ldGltZXMgbmV2ZXIpIHF1ZXJ5IHRoZSBET00uIEZ1cnRoZXIsIHRoZSAkLmNzcygpIGNvZGVwYXRoIGlzbid0IHRoYXQgc2xvdy4gKi9cblx0XHRcdFx0XHRpZiAoSUUgPD0gOCkge1xuXHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZSA9ICQuY3NzKGVsZW1lbnQsIHByb3BlcnR5KTsgLyogR0VUICovXG5cdFx0XHRcdFx0XHQvKiBBbGwgb3RoZXIgYnJvd3NlcnMgc3VwcG9ydCBnZXRDb21wdXRlZFN0eWxlLiBUaGUgcmV0dXJuZWQgbGl2ZSBvYmplY3QgcmVmZXJlbmNlIGlzIGNhY2hlZCBvbnRvIGl0c1xuXHRcdFx0XHRcdFx0IGFzc29jaWF0ZWQgZWxlbWVudCBzbyB0aGF0IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgcmVmZXRjaGVkIHVwb24gZXZlcnkgR0VULiAqL1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvKiBCcm93c2VycyBkbyBub3QgcmV0dXJuIGhlaWdodCBhbmQgd2lkdGggdmFsdWVzIGZvciBlbGVtZW50cyB0aGF0IGFyZSBzZXQgdG8gZGlzcGxheTpcIm5vbmVcIi4gVGh1cywgd2UgdGVtcG9yYXJpbHlcblx0XHRcdFx0XHRcdCB0b2dnbGUgZGlzcGxheSB0byB0aGUgZWxlbWVudCB0eXBlJ3MgZGVmYXVsdCB2YWx1ZS4gKi9cblx0XHRcdFx0XHRcdHZhciB0b2dnbGVEaXNwbGF5ID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdGlmICgvXih3aWR0aHxoZWlnaHQpJC8udGVzdChwcm9wZXJ0eSkgJiYgQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHRvZ2dsZURpc3BsYXkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImRpc3BsYXlcIiwgQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShlbGVtZW50KSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciByZXZlcnREaXNwbGF5ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdGlmICh0b2dnbGVEaXNwbGF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0aWYgKCFmb3JjZVN0eWxlTG9va3VwKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gXCJoZWlnaHRcIiAmJiBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT09IFwiYm9yZGVyLWJveFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNvbnRlbnRCb3hIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm9yZGVyVG9wV2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJib3JkZXJCb3R0b21XaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBhZGRpbmdUb3BcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJwYWRkaW5nQm90dG9tXCIpKSB8fCAwKTtcblx0XHRcdFx0XHRcdFx0XHRyZXZlcnREaXNwbGF5KCk7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGVudEJveEhlaWdodDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJ3aWR0aFwiICYmIENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPT0gXCJib3JkZXItYm94XCIpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29udGVudEJveFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm9yZGVyTGVmdFdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiYm9yZGVyUmlnaHRXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBhZGRpbmdMZWZ0XCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwicGFkZGluZ1JpZ2h0XCIpKSB8fCAwKTtcblx0XHRcdFx0XHRcdFx0XHRyZXZlcnREaXNwbGF5KCk7XG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gY29udGVudEJveFdpZHRoO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBjb21wdXRlZFN0eWxlO1xuXG5cdFx0XHRcdFx0XHQvKiBGb3IgZWxlbWVudHMgdGhhdCBWZWxvY2l0eSBoYXNuJ3QgYmVlbiBjYWxsZWQgb24gZGlyZWN0bHkgKGUuZy4gd2hlbiBWZWxvY2l0eSBxdWVyaWVzIHRoZSBET00gb24gYmVoYWxmXG5cdFx0XHRcdFx0XHQgb2YgYSBwYXJlbnQgb2YgYW4gZWxlbWVudCBpdHMgYW5pbWF0aW5nKSwgcGVyZm9ybSBhIGRpcmVjdCBnZXRDb21wdXRlZFN0eWxlIGxvb2t1cCBzaW5jZSB0aGUgb2JqZWN0IGlzbid0IGNhY2hlZC4gKi9cblx0XHRcdFx0XHRcdGlmIChEYXRhKGVsZW1lbnQpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpOyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGNvbXB1dGVkU3R5bGUgb2JqZWN0IGhhcyB5ZXQgdG8gYmUgY2FjaGVkLCBkbyBzbyBub3cuICovXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCFEYXRhKGVsZW1lbnQpLmNvbXB1dGVkU3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0Y29tcHV0ZWRTdHlsZSA9IERhdGEoZWxlbWVudCkuY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpOyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdFx0LyogSWYgY29tcHV0ZWRTdHlsZSBpcyBjYWNoZWQsIHVzZSBpdC4gKi9cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkU3R5bGUgPSBEYXRhKGVsZW1lbnQpLmNvbXB1dGVkU3R5bGU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIElFIGFuZCBGaXJlZm94IGRvIG5vdCByZXR1cm4gYSB2YWx1ZSBmb3IgdGhlIGdlbmVyaWMgYm9yZGVyQ29sb3IgLS0gdGhleSBvbmx5IHJldHVybiBpbmRpdmlkdWFsIHZhbHVlcyBmb3IgZWFjaCBib3JkZXIgc2lkZSdzIGNvbG9yLlxuXHRcdFx0XHRcdFx0IEFsc28sIGluIGFsbCBicm93c2Vycywgd2hlbiBib3JkZXIgY29sb3JzIGFyZW4ndCBhbGwgdGhlIHNhbWUsIGEgY29tcG91bmQgdmFsdWUgaXMgcmV0dXJuZWQgdGhhdCBWZWxvY2l0eSBpc24ndCBzZXR1cCB0byBwYXJzZS5cblx0XHRcdFx0XHRcdCBTbywgYXMgYSBwb2x5ZmlsbCBmb3IgcXVlcnlpbmcgaW5kaXZpZHVhbCBib3JkZXIgc2lkZSBjb2xvcnMsIHdlIGp1c3QgcmV0dXJuIHRoZSB0b3AgYm9yZGVyJ3MgY29sb3IgYW5kIGFuaW1hdGUgYWxsIGJvcmRlcnMgZnJvbSB0aGF0IHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0aWYgKHByb3BlcnR5ID09PSBcImJvcmRlckNvbG9yXCIpIHtcblx0XHRcdFx0XHRcdFx0cHJvcGVydHkgPSBcImJvcmRlclRvcENvbG9yXCI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIElFOSBoYXMgYSBidWcgaW4gd2hpY2ggdGhlIFwiZmlsdGVyXCIgcHJvcGVydHkgbXVzdCBiZSBhY2Nlc3NlZCBmcm9tIGNvbXB1dGVkU3R5bGUgdXNpbmcgdGhlIGdldFByb3BlcnR5VmFsdWUgbWV0aG9kXG5cdFx0XHRcdFx0XHQgaW5zdGVhZCBvZiBhIGRpcmVjdCBwcm9wZXJ0eSBsb29rdXAuIFRoZSBnZXRQcm9wZXJ0eVZhbHVlIG1ldGhvZCBpcyBzbG93ZXIgdGhhbiBhIGRpcmVjdCBsb29rdXAsIHdoaWNoIGlzIHdoeSB3ZSBhdm9pZCBpdCBieSBkZWZhdWx0LiAqL1xuXHRcdFx0XHRcdFx0aWYgKElFID09PSA5ICYmIHByb3BlcnR5ID09PSBcImZpbHRlclwiKSB7XG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkVmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpOyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbXB1dGVkVmFsdWUgPSBjb21wdXRlZFN0eWxlW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyogRmFsbCBiYWNrIHRvIHRoZSBwcm9wZXJ0eSdzIHN0eWxlIHZhbHVlIChpZiBkZWZpbmVkKSB3aGVuIGNvbXB1dGVkVmFsdWUgcmV0dXJucyBub3RoaW5nLFxuXHRcdFx0XHRcdFx0IHdoaWNoIGNhbiBoYXBwZW4gd2hlbiB0aGUgZWxlbWVudCBoYXNuJ3QgYmVlbiBwYWludGVkLiAqL1xuXHRcdFx0XHRcdFx0aWYgKGNvbXB1dGVkVmFsdWUgPT09IFwiXCIgfHwgY29tcHV0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlID0gZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldmVydERpc3BsYXkoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBGb3IgdG9wLCByaWdodCwgYm90dG9tLCBhbmQgbGVmdCAoVFJCTCkgdmFsdWVzIHRoYXQgYXJlIHNldCB0byBcImF1dG9cIiBvbiBlbGVtZW50cyBvZiBcImZpeGVkXCIgb3IgXCJhYnNvbHV0ZVwiIHBvc2l0aW9uLFxuXHRcdFx0XHRcdCBkZWZlciB0byBqUXVlcnkgZm9yIGNvbnZlcnRpbmcgXCJhdXRvXCIgdG8gYSBudW1lcmljIHZhbHVlLiAoRm9yIGVsZW1lbnRzIHdpdGggYSBcInN0YXRpY1wiIG9yIFwicmVsYXRpdmVcIiBwb3NpdGlvbiwgXCJhdXRvXCIgaGFzIHRoZSBzYW1lXG5cdFx0XHRcdFx0IGVmZmVjdCBhcyBiZWluZyBzZXQgdG8gMCwgc28gbm8gY29udmVyc2lvbiBpcyBuZWNlc3NhcnkuKSAqL1xuXHRcdFx0XHRcdC8qIEFuIGV4YW1wbGUgb2Ygd2h5IG51bWVyaWMgY29udmVyc2lvbiBpcyBuZWNlc3Nhcnk6IFdoZW4gYW4gZWxlbWVudCB3aXRoIFwicG9zaXRpb246YWJzb2x1dGVcIiBoYXMgYW4gdW50b3VjaGVkIFwibGVmdFwiXG5cdFx0XHRcdFx0IHByb3BlcnR5LCB3aGljaCByZXZlcnRzIHRvIFwiYXV0b1wiLCBsZWZ0J3MgdmFsdWUgaXMgMCByZWxhdGl2ZSB0byBpdHMgcGFyZW50IGVsZW1lbnQsIGJ1dCBpcyBvZnRlbiBub24temVybyByZWxhdGl2ZVxuXHRcdFx0XHRcdCB0byBpdHMgKmNvbnRhaW5pbmcqIChub3QgcGFyZW50KSBlbGVtZW50LCB3aGljaCBpcyB0aGUgbmVhcmVzdCBcInBvc2l0aW9uOnJlbGF0aXZlXCIgYW5jZXN0b3Igb3IgdGhlIHZpZXdwb3J0IChhbmQgYWx3YXlzIHRoZSB2aWV3cG9ydCBpbiB0aGUgY2FzZSBvZiBcInBvc2l0aW9uOmZpeGVkXCIpLiAqL1xuXHRcdFx0XHRcdGlmIChjb21wdXRlZFZhbHVlID09PSBcImF1dG9cIiAmJiAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC9pLnRlc3QocHJvcGVydHkpKSB7XG5cdFx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBjb21wdXRlUHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInBvc2l0aW9uXCIpOyAvKiBHRVQgKi9cblxuXHRcdFx0XHRcdFx0LyogRm9yIGFic29sdXRlIHBvc2l0aW9uaW5nLCBqUXVlcnkncyAkLnBvc2l0aW9uKCkgb25seSByZXR1cm5zIHZhbHVlcyBmb3IgdG9wIGFuZCBsZWZ0O1xuXHRcdFx0XHRcdFx0IHJpZ2h0IGFuZCBib3R0b20gd2lsbCBoYXZlIHRoZWlyIFwiYXV0b1wiIHZhbHVlIHJldmVydGVkIHRvIDAuICovXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBBIGpRdWVyeSBvYmplY3QgbXVzdCBiZSBjcmVhdGVkIGhlcmUgc2luY2UgalF1ZXJ5IGRvZXNuJ3QgaGF2ZSBhIGxvdy1sZXZlbCBhbGlhcyBmb3IgJC5wb3NpdGlvbigpLlxuXHRcdFx0XHRcdFx0IE5vdCBhIGJpZyBkZWFsIHNpbmNlIHdlJ3JlIGN1cnJlbnRseSBpbiBhIEdFVCBiYXRjaCBhbnl3YXkuICovXG5cdFx0XHRcdFx0XHRpZiAocG9zaXRpb24gPT09IFwiZml4ZWRcIiB8fCAocG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiAmJiAvdG9wfGxlZnQvaS50ZXN0KHByb3BlcnR5KSkpIHtcblx0XHRcdFx0XHRcdFx0LyogTm90ZTogalF1ZXJ5IHN0cmlwcyB0aGUgcGl4ZWwgdW5pdCBmcm9tIGl0cyByZXR1cm5lZCB2YWx1ZXM7IHdlIHJlLWFkZCBpdCBoZXJlIHRvIGNvbmZvcm0gd2l0aCBjb21wdXRlUHJvcGVydHlWYWx1ZSdzIGJlaGF2aW9yLiAqL1xuXHRcdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlID0gJChlbGVtZW50KS5wb3NpdGlvbigpW3Byb3BlcnR5XSArIFwicHhcIjsgLyogR0VUICovXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGNvbXB1dGVkVmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcHJvcGVydHlWYWx1ZTtcblxuXHRcdFx0XHQvKiBJZiB0aGlzIGlzIGEgaG9va2VkIHByb3BlcnR5IChlLmcuIFwiY2xpcExlZnRcIiBpbnN0ZWFkIG9mIHRoZSByb290IHByb3BlcnR5IG9mIFwiY2xpcFwiKSxcblx0XHRcdFx0IGV4dHJhY3QgdGhlIGhvb2sncyB2YWx1ZSBmcm9tIGEgbm9ybWFsaXplZCByb290UHJvcGVydHlWYWx1ZSB1c2luZyBDU1MuSG9va3MuZXh0cmFjdFZhbHVlKCkuICovXG5cdFx0XHRcdGlmIChDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcblx0XHRcdFx0XHR2YXIgaG9vayA9IHByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHRob29rUm9vdCA9IENTUy5Ib29rcy5nZXRSb290KGhvb2spO1xuXG5cdFx0XHRcdFx0LyogSWYgYSBjYWNoZWQgcm9vdFByb3BlcnR5VmFsdWUgd2Fzbid0IHBhc3NlZCBpbiAod2hpY2ggVmVsb2NpdHkgYWx3YXlzIGF0dGVtcHRzIHRvIGRvIGluIG9yZGVyIHRvIGF2b2lkIHJlcXVlcnlpbmcgdGhlIERPTSksXG5cdFx0XHRcdFx0IHF1ZXJ5IHRoZSBET00gZm9yIHRoZSByb290IHByb3BlcnR5J3MgdmFsdWUuICovXG5cdFx0XHRcdFx0aWYgKHJvb3RQcm9wZXJ0eVZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdC8qIFNpbmNlIHRoZSBicm93c2VyIGlzIG5vdyBiZWluZyBkaXJlY3RseSBxdWVyaWVkLCB1c2UgdGhlIG9mZmljaWFsIHBvc3QtcHJlZml4aW5nIHByb3BlcnR5IG5hbWUgZm9yIHRoaXMgbG9va3VwLiAqL1xuXHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBDU1MuTmFtZXMucHJlZml4Q2hlY2soaG9va1Jvb3QpWzBdKTsgLyogR0VUICovXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogSWYgdGhpcyByb290IGhhcyBhIG5vcm1hbGl6YXRpb24gcmVnaXN0ZXJlZCwgcGVmb3JtIHRoZSBhc3NvY2lhdGVkIG5vcm1hbGl6YXRpb24gZXh0cmFjdGlvbi4gKi9cblx0XHRcdFx0XHRpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbaG9va1Jvb3RdKSB7XG5cdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2hvb2tSb290XShcImV4dHJhY3RcIiwgZWxlbWVudCwgcm9vdFByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIEV4dHJhY3QgdGhlIGhvb2sncyB2YWx1ZS4gKi9cblx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLkhvb2tzLmV4dHJhY3RWYWx1ZShob29rLCByb290UHJvcGVydHlWYWx1ZSk7XG5cblx0XHRcdFx0XHQvKiBJZiB0aGlzIGlzIGEgbm9ybWFsaXplZCBwcm9wZXJ0eSAoZS5nLiBcIm9wYWNpdHlcIiBiZWNvbWVzIFwiZmlsdGVyXCIgaW4gPD1JRTgpIG9yIFwidHJhbnNsYXRlWFwiIGJlY29tZXMgXCJ0cmFuc2Zvcm1cIiksXG5cdFx0XHRcdFx0IG5vcm1hbGl6ZSB0aGUgcHJvcGVydHkncyBuYW1lIGFuZCB2YWx1ZSwgYW5kIGhhbmRsZSB0aGUgc3BlY2lhbCBjYXNlIG9mIHRyYW5zZm9ybXMuICovXG5cdFx0XHRcdFx0LyogTm90ZTogTm9ybWFsaXppbmcgYSBwcm9wZXJ0eSBpcyBtdXR1YWxseSBleGNsdXNpdmUgZnJvbSBob29raW5nIGEgcHJvcGVydHkgc2luY2UgaG9vay1leHRyYWN0ZWQgdmFsdWVzIGFyZSBzdHJpY3RseVxuXHRcdFx0XHRcdCBudW1lcmljYWwgYW5kIHRoZXJlZm9yZSBkbyBub3QgcmVxdWlyZSBub3JtYWxpemF0aW9uIGV4dHJhY3Rpb24uICovXG5cdFx0XHRcdH0gZWxzZSBpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKSB7XG5cdFx0XHRcdFx0dmFyIG5vcm1hbGl6ZWRQcm9wZXJ0eU5hbWUsXG5cdFx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wZXJ0eVZhbHVlO1xuXG5cdFx0XHRcdFx0bm9ybWFsaXplZFByb3BlcnR5TmFtZSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcIm5hbWVcIiwgZWxlbWVudCk7XG5cblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm0gdmFsdWVzIGFyZSBjYWxjdWxhdGVkIHZpYSBub3JtYWxpemF0aW9uIGV4dHJhY3Rpb24gKHNlZSBiZWxvdyksIHdoaWNoIGNoZWNrcyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgdHJhbnNmb3JtQ2FjaGUuXG5cdFx0XHRcdFx0IEF0IG5vIHBvaW50IGRvIHRyYW5zZm9ybSBHRVRzIGV2ZXIgYWN0dWFsbHkgcXVlcnkgdGhlIERPTTsgaW5pdGlhbCBzdHlsZXNoZWV0IHZhbHVlcyBhcmUgbmV2ZXIgcHJvY2Vzc2VkLlxuXHRcdFx0XHRcdCBUaGlzIGlzIGJlY2F1c2UgcGFyc2luZyAzRCB0cmFuc2Zvcm0gbWF0cmljZXMgaXMgbm90IGFsd2F5cyBhY2N1cmF0ZSBhbmQgd291bGQgYmxvYXQgb3VyIGNvZGViYXNlO1xuXHRcdFx0XHRcdCB0aHVzLCBub3JtYWxpemF0aW9uIGV4dHJhY3Rpb24gZGVmYXVsdHMgaW5pdGlhbCB0cmFuc2Zvcm0gdmFsdWVzIHRvIHRoZWlyIHplcm8tdmFsdWVzIChlLmcuIDEgZm9yIHNjYWxlWCBhbmQgMCBmb3IgdHJhbnNsYXRlWCkuICovXG5cdFx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wZXJ0eU5hbWUgIT09IFwidHJhbnNmb3JtXCIpIHtcblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wZXJ0eVZhbHVlID0gY29tcHV0ZVByb3BlcnR5VmFsdWUoZWxlbWVudCwgQ1NTLk5hbWVzLnByZWZpeENoZWNrKG5vcm1hbGl6ZWRQcm9wZXJ0eU5hbWUpWzBdKTsgLyogR0VUICovXG5cblx0XHRcdFx0XHRcdC8qIElmIHRoZSB2YWx1ZSBpcyBhIENTUyBudWxsLXZhbHVlIGFuZCB0aGlzIHByb3BlcnR5IGhhcyBhIGhvb2sgdGVtcGxhdGUsIHVzZSB0aGF0IHplcm8tdmFsdWUgdGVtcGxhdGUgc28gdGhhdCBob29rcyBjYW4gYmUgZXh0cmFjdGVkIGZyb20gaXQuICovXG5cdFx0XHRcdFx0XHRpZiAoQ1NTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShub3JtYWxpemVkUHJvcGVydHlWYWx1ZSkgJiYgQ1NTLkhvb2tzLnRlbXBsYXRlc1twcm9wZXJ0eV0pIHtcblx0XHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Byb3BlcnR5XVsxXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwiZXh0cmFjdFwiLCBlbGVtZW50LCBub3JtYWxpemVkUHJvcGVydHlWYWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBJZiBhIChudW1lcmljKSB2YWx1ZSB3YXNuJ3QgcHJvZHVjZWQgdmlhIGhvb2sgZXh0cmFjdGlvbiBvciBub3JtYWxpemF0aW9uLCBxdWVyeSB0aGUgRE9NLiAqL1xuXHRcdFx0XHRpZiAoIS9eW1xcZC1dLy50ZXN0KHByb3BlcnR5VmFsdWUpKSB7XG5cdFx0XHRcdFx0LyogRm9yIFNWRyBlbGVtZW50cywgZGltZW5zaW9uYWwgcHJvcGVydGllcyAod2hpY2ggU1ZHQXR0cmlidXRlKCkgZGV0ZWN0cykgYXJlIHR3ZWVuZWQgdmlhXG5cdFx0XHRcdFx0IHRoZWlyIEhUTUwgYXR0cmlidXRlIHZhbHVlcyBpbnN0ZWFkIG9mIHRoZWlyIENTUyBzdHlsZSB2YWx1ZXMuICovXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5pc1NWRyAmJiBDU1MuTmFtZXMuU1ZHQXR0cmlidXRlKHByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0LyogU2luY2UgdGhlIGhlaWdodC93aWR0aCBhdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgc2V0IG1hbnVhbGx5LCB0aGV5IGRvbid0IHJlZmxlY3QgY29tcHV0ZWQgdmFsdWVzLlxuXHRcdFx0XHRcdFx0IFRodXMsIHdlIHVzZSB1c2UgZ2V0QkJveCgpIHRvIGVuc3VyZSB3ZSBhbHdheXMgZ2V0IHZhbHVlcyBmb3IgZWxlbWVudHMgd2l0aCB1bmRlZmluZWQgaGVpZ2h0L3dpZHRoIGF0dHJpYnV0ZXMuICovXG5cdFx0XHRcdFx0XHRpZiAoL14oaGVpZ2h0fHdpZHRoKSQvaS50ZXN0KHByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0XHQvKiBGaXJlZm94IHRocm93cyBhbiBlcnJvciBpZiAuZ2V0QkJveCgpIGlzIGNhbGxlZCBvbiBhbiBTVkcgdGhhdCBpc24ndCBhdHRhY2hlZCB0byB0aGUgRE9NLiAqL1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBlbGVtZW50LmdldEJCb3goKVtwcm9wZXJ0eV07XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LyogT3RoZXJ3aXNlLCBhY2Nlc3MgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBkaXJlY3RseS4gKi9cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBjb21wdXRlUHJvcGVydHlWYWx1ZShlbGVtZW50LCBDU1MuTmFtZXMucHJlZml4Q2hlY2socHJvcGVydHkpWzBdKTsgLyogR0VUICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogU2luY2UgcHJvcGVydHkgbG9va3VwcyBhcmUgZm9yIGFuaW1hdGlvbiBwdXJwb3NlcyAod2hpY2ggZW50YWlscyBjb21wdXRpbmcgdGhlIG51bWVyaWMgZGVsdGEgYmV0d2VlbiBzdGFydCBhbmQgZW5kIHZhbHVlcyksXG5cdFx0XHRcdCBjb252ZXJ0IENTUyBudWxsLXZhbHVlcyB0byBhbiBpbnRlZ2VyIG9mIHZhbHVlIDAuICovXG5cdFx0XHRcdGlmIChDU1MuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKHByb3BlcnR5VmFsdWUpKSB7XG5cdFx0XHRcdFx0cHJvcGVydHlWYWx1ZSA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcgPj0gMikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiR2V0IFwiICsgcHJvcGVydHkgKyBcIjogXCIgKyBwcm9wZXJ0eVZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdC8qIFRoZSBzaW5ndWxhciBzZXRQcm9wZXJ0eVZhbHVlLCB3aGljaCByb3V0ZXMgdGhlIGxvZ2ljIGZvciBhbGwgbm9ybWFsaXphdGlvbnMsIGhvb2tzLCBhbmQgc3RhbmRhcmQgQ1NTIHByb3BlcnRpZXMuICovXG5cdFx0XHRzZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0eSwgcHJvcGVydHlWYWx1ZSwgcm9vdFByb3BlcnR5VmFsdWUsIHNjcm9sbERhdGEpIHtcblx0XHRcdFx0dmFyIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5O1xuXG5cdFx0XHRcdC8qIEluIG9yZGVyIHRvIGJlIHN1YmplY3RlZCB0byBjYWxsIG9wdGlvbnMgYW5kIGVsZW1lbnQgcXVldWVpbmcsIHNjcm9sbCBhbmltYXRpb24gaXMgcm91dGVkIHRocm91Z2ggVmVsb2NpdHkgYXMgaWYgaXQgd2VyZSBhIHN0YW5kYXJkIENTUyBwcm9wZXJ0eS4gKi9cblx0XHRcdFx0aWYgKHByb3BlcnR5ID09PSBcInNjcm9sbFwiKSB7XG5cdFx0XHRcdFx0LyogSWYgYSBjb250YWluZXIgb3B0aW9uIGlzIHByZXNlbnQsIHNjcm9sbCB0aGUgY29udGFpbmVyIGluc3RlYWQgb2YgdGhlIGJyb3dzZXIgd2luZG93LiAqL1xuXHRcdFx0XHRcdGlmIChzY3JvbGxEYXRhLmNvbnRhaW5lcikge1xuXHRcdFx0XHRcdFx0c2Nyb2xsRGF0YS5jb250YWluZXJbXCJzY3JvbGxcIiArIHNjcm9sbERhdGEuZGlyZWN0aW9uXSA9IHByb3BlcnR5VmFsdWU7XG5cdFx0XHRcdFx0XHQvKiBPdGhlcndpc2UsIFZlbG9jaXR5IGRlZmF1bHRzIHRvIHNjcm9sbGluZyB0aGUgYnJvd3NlciB3aW5kb3cuICovXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChzY3JvbGxEYXRhLmRpcmVjdGlvbiA9PT0gXCJMZWZ0XCIpIHtcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHByb3BlcnR5VmFsdWUsIHNjcm9sbERhdGEuYWx0ZXJuYXRlVmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHNjcm9sbERhdGEuYWx0ZXJuYXRlVmFsdWUsIHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvKiBUcmFuc2Zvcm1zICh0cmFuc2xhdGVYLCByb3RhdGVaLCBldGMuKSBhcmUgYXBwbGllZCB0byBhIHBlci1lbGVtZW50IHRyYW5zZm9ybUNhY2hlIG9iamVjdCwgd2hpY2ggaXMgbWFudWFsbHkgZmx1c2hlZCB2aWEgZmx1c2hUcmFuc2Zvcm1DYWNoZSgpLlxuXHRcdFx0XHRcdCBUaHVzLCBmb3Igbm93LCB3ZSBtZXJlbHkgY2FjaGUgdHJhbnNmb3JtcyBiZWluZyBTRVQuICovXG5cdFx0XHRcdFx0aWYgKENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XSAmJiBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtwcm9wZXJ0eV0oXCJuYW1lXCIsIGVsZW1lbnQpID09PSBcInRyYW5zZm9ybVwiKSB7XG5cdFx0XHRcdFx0XHQvKiBQZXJmb3JtIGEgbm9ybWFsaXphdGlvbiBpbmplY3Rpb24uICovXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBUaGUgbm9ybWFsaXphdGlvbiBsb2dpYyBoYW5kbGVzIHRoZSB0cmFuc2Zvcm1DYWNoZSB1cGRhdGluZy4gKi9cblx0XHRcdFx0XHRcdENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcImluamVjdFwiLCBlbGVtZW50LCBwcm9wZXJ0eVZhbHVlKTtcblxuXHRcdFx0XHRcdFx0cHJvcGVydHlOYW1lID0gXCJ0cmFuc2Zvcm1cIjtcblx0XHRcdFx0XHRcdHByb3BlcnR5VmFsdWUgPSBEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlW3Byb3BlcnR5XTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0LyogSW5qZWN0IGhvb2tzLiAqL1xuXHRcdFx0XHRcdFx0aWYgKENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgaG9va05hbWUgPSBwcm9wZXJ0eSxcblx0XHRcdFx0XHRcdFx0XHRcdGhvb2tSb290ID0gQ1NTLkhvb2tzLmdldFJvb3QocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0XHRcdC8qIElmIGEgY2FjaGVkIHJvb3RQcm9wZXJ0eVZhbHVlIHdhcyBub3QgcHJvdmlkZWQsIHF1ZXJ5IHRoZSBET00gZm9yIHRoZSBob29rUm9vdCdzIGN1cnJlbnQgdmFsdWUuICovXG5cdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gcm9vdFByb3BlcnR5VmFsdWUgfHwgQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgaG9va1Jvb3QpOyAvKiBHRVQgKi9cblxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLkhvb2tzLmluamVjdFZhbHVlKGhvb2tOYW1lLCBwcm9wZXJ0eVZhbHVlLCByb290UHJvcGVydHlWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHByb3BlcnR5ID0gaG9va1Jvb3Q7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIE5vcm1hbGl6ZSBuYW1lcyBhbmQgdmFsdWVzLiAqL1xuXHRcdFx0XHRcdFx0aWYgKENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eVZhbHVlID0gQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcHJvcGVydHldKFwiaW5qZWN0XCIsIGVsZW1lbnQsIHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0eSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3Byb3BlcnR5XShcIm5hbWVcIiwgZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIEFzc2lnbiB0aGUgYXBwcm9wcmlhdGUgdmVuZG9yIHByZWZpeCBiZWZvcmUgcGVyZm9ybWluZyBhbiBvZmZpY2lhbCBzdHlsZSB1cGRhdGUuICovXG5cdFx0XHRcdFx0XHRwcm9wZXJ0eU5hbWUgPSBDU1MuTmFtZXMucHJlZml4Q2hlY2socHJvcGVydHkpWzBdO1xuXG5cdFx0XHRcdFx0XHQvKiBBIHRyeS9jYXRjaCBpcyB1c2VkIGZvciBJRTw9OCwgd2hpY2ggdGhyb3dzIGFuIGVycm9yIHdoZW4gXCJpbnZhbGlkXCIgQ1NTIHZhbHVlcyBhcmUgc2V0LCBlLmcuIGEgbmVnYXRpdmUgd2lkdGguXG5cdFx0XHRcdFx0XHQgVHJ5L2NhdGNoIGlzIGF2b2lkZWQgZm9yIG90aGVyIGJyb3dzZXJzIHNpbmNlIGl0IGluY3VycyBhIHBlcmZvcm1hbmNlIG92ZXJoZWFkLiAqL1xuXHRcdFx0XHRcdFx0aWYgKElFIDw9IDgpIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LnN0eWxlW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eVZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1Zykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgW1wiICsgcHJvcGVydHlWYWx1ZSArIFwiXSBmb3IgW1wiICsgcHJvcGVydHlOYW1lICsgXCJdXCIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvKiBTVkcgZWxlbWVudHMgaGF2ZSB0aGVpciBkaW1lbnNpb25hbCBwcm9wZXJ0aWVzICh3aWR0aCwgaGVpZ2h0LCB4LCB5LCBjeCwgZXRjLikgYXBwbGllZCBkaXJlY3RseSBhcyBhdHRyaWJ1dGVzIGluc3RlYWQgb2YgYXMgc3R5bGVzLiAqL1xuXHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBJRTggZG9lcyBub3Qgc3VwcG9ydCBTVkcgZWxlbWVudHMsIHNvIGl0J3Mgb2theSB0aGF0IHdlIHNraXAgaXQgZm9yIFNWRyBhbmltYXRpb24uICovXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZGF0YSA9IERhdGEoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS5pc1NWRyAmJiBDU1MuTmFtZXMuU1ZHQXR0cmlidXRlKHByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IEZvciBTVkcgYXR0cmlidXRlcywgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG5hbWVzIGFyZSBuZXZlciB1c2VkLiAqL1xuXHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IE5vdCBhbGwgQ1NTIHByb3BlcnRpZXMgY2FuIGJlIGFuaW1hdGVkIHZpYSBhdHRyaWJ1dGVzLCBidXQgdGhlIGJyb3dzZXIgd29uJ3QgdGhyb3cgYW4gZXJyb3IgZm9yIHVuc3VwcG9ydGVkIHByb3BlcnRpZXMuICovXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGVbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5VmFsdWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnID49IDIpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJTZXQgXCIgKyBwcm9wZXJ0eSArIFwiIChcIiArIHByb3BlcnR5TmFtZSArIFwiKTogXCIgKyBwcm9wZXJ0eVZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBSZXR1cm4gdGhlIG5vcm1hbGl6ZWQgcHJvcGVydHkgbmFtZSBhbmQgdmFsdWUgaW4gY2FzZSB0aGUgY2FsbGVyIHdhbnRzIHRvIGtub3cgaG93IHRoZXNlIHZhbHVlcyB3ZXJlIG1vZGlmaWVkIGJlZm9yZSBiZWluZyBhcHBsaWVkIHRvIHRoZSBET00uICovXG5cdFx0XHRcdHJldHVybiBbcHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlXTtcblx0XHRcdH0sXG5cdFx0XHQvKiBUbyBpbmNyZWFzZSBwZXJmb3JtYW5jZSBieSBiYXRjaGluZyB0cmFuc2Zvcm0gdXBkYXRlcyBpbnRvIGEgc2luZ2xlIFNFVCwgdHJhbnNmb3JtcyBhcmUgbm90IGRpcmVjdGx5IGFwcGxpZWQgdG8gYW4gZWxlbWVudCB1bnRpbCBmbHVzaFRyYW5zZm9ybUNhY2hlKCkgaXMgY2FsbGVkLiAqL1xuXHRcdFx0LyogTm90ZTogVmVsb2NpdHkgYXBwbGllcyB0cmFuc2Zvcm0gcHJvcGVydGllcyBpbiB0aGUgc2FtZSBvcmRlciB0aGF0IHRoZXkgYXJlIGNocm9ub2dpY2FsbHkgaW50cm9kdWNlZCB0byB0aGUgZWxlbWVudCdzIENTUyBzdHlsZXMuICovXG5cdFx0XHRmbHVzaFRyYW5zZm9ybUNhY2hlOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRcdHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBcIlwiLFxuXHRcdFx0XHRcdFx0ZGF0YSA9IERhdGEoZWxlbWVudCk7XG5cblx0XHRcdFx0LyogQ2VydGFpbiBicm93c2VycyByZXF1aXJlIHRoYXQgU1ZHIHRyYW5zZm9ybXMgYmUgYXBwbGllZCBhcyBhbiBhdHRyaWJ1dGUuIEhvd2V2ZXIsIHRoZSBTVkcgdHJhbnNmb3JtIGF0dHJpYnV0ZSB0YWtlcyBhIG1vZGlmaWVkIHZlcnNpb24gb2YgQ1NTJ3MgdHJhbnNmb3JtIHN0cmluZ1xuXHRcdFx0XHQgKHVuaXRzIGFyZSBkcm9wcGVkIGFuZCwgZXhjZXB0IGZvciBza2V3WC9ZLCBzdWJwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGVpciBtYXN0ZXIgcHJvcGVydHkgLS0gZS5nLiBzY2FsZVggYW5kIHNjYWxlWSBhcmUgbWVyZ2VkIGludG8gc2NhbGUoWCBZKS4gKi9cblx0XHRcdFx0aWYgKChJRSB8fCAoVmVsb2NpdHkuU3RhdGUuaXNBbmRyb2lkICYmICFWZWxvY2l0eS5TdGF0ZS5pc0Nocm9tZSkpICYmIGRhdGEgJiYgZGF0YS5pc1NWRykge1xuXHRcdFx0XHRcdC8qIFNpbmNlIHRyYW5zZm9ybSB2YWx1ZXMgYXJlIHN0b3JlZCBpbiB0aGVpciBwYXJlbnRoZXNlcy13cmFwcGVkIGZvcm0sIHdlIHVzZSBhIGhlbHBlciBmdW5jdGlvbiB0byBzdHJpcCBvdXQgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuXG5cdFx0XHRcdFx0IEZ1cnRoZXIsIFNWRyB0cmFuc2Zvcm0gcHJvcGVydGllcyBvbmx5IHRha2UgdW5pdGxlc3MgKHJlcHJlc2VudGluZyBwaXhlbHMpIHZhbHVlcywgc28gaXQncyBva2F5IHRoYXQgcGFyc2VGbG9hdCgpIHN0cmlwcyB0aGUgdW5pdCBzdWZmaXhlZCB0byB0aGUgZmxvYXQgdmFsdWUuICovXG5cdFx0XHRcdFx0dmFyIGdldFRyYW5zZm9ybUZsb2F0ID0gZnVuY3Rpb24odHJhbnNmb3JtUHJvcGVydHkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIHRyYW5zZm9ybVByb3BlcnR5KSk7XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdC8qIENyZWF0ZSBhbiBvYmplY3QgdG8gb3JnYW5pemUgYWxsIHRoZSB0cmFuc2Zvcm1zIHRoYXQgd2UnbGwgYXBwbHkgdG8gdGhlIFNWRyBlbGVtZW50LiBUbyBrZWVwIHRoZSBsb2dpYyBzaW1wbGUsXG5cdFx0XHRcdFx0IHdlIHByb2Nlc3MgKmFsbCogdHJhbnNmb3JtIHByb3BlcnRpZXMgLS0gZXZlbiB0aG9zZSB0aGF0IG1heSBub3QgYmUgZXhwbGljaXRseSBhcHBsaWVkIChzaW5jZSB0aGV5IGRlZmF1bHQgdG8gdGhlaXIgemVyby12YWx1ZXMgYW55d2F5KS4gKi9cblx0XHRcdFx0XHR2YXIgU1ZHVHJhbnNmb3JtcyA9IHtcblx0XHRcdFx0XHRcdHRyYW5zbGF0ZTogW2dldFRyYW5zZm9ybUZsb2F0KFwidHJhbnNsYXRlWFwiKSwgZ2V0VHJhbnNmb3JtRmxvYXQoXCJ0cmFuc2xhdGVZXCIpXSxcblx0XHRcdFx0XHRcdHNrZXdYOiBbZ2V0VHJhbnNmb3JtRmxvYXQoXCJza2V3WFwiKV0sIHNrZXdZOiBbZ2V0VHJhbnNmb3JtRmxvYXQoXCJza2V3WVwiKV0sXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgc2NhbGUgcHJvcGVydHkgaXMgc2V0IChub24tMSksIHVzZSB0aGF0IHZhbHVlIGZvciB0aGUgc2NhbGVYIGFuZCBzY2FsZVkgdmFsdWVzXG5cdFx0XHRcdFx0XHQgKHRoaXMgYmVoYXZpb3IgbWltaWNzIHRoZSByZXN1bHQgb2YgYW5pbWF0aW5nIGFsbCB0aGVzZSBwcm9wZXJ0aWVzIGF0IG9uY2Ugb24gSFRNTCBlbGVtZW50cykuICovXG5cdFx0XHRcdFx0XHRzY2FsZTogZ2V0VHJhbnNmb3JtRmxvYXQoXCJzY2FsZVwiKSAhPT0gMSA/IFtnZXRUcmFuc2Zvcm1GbG9hdChcInNjYWxlXCIpLCBnZXRUcmFuc2Zvcm1GbG9hdChcInNjYWxlXCIpXSA6IFtnZXRUcmFuc2Zvcm1GbG9hdChcInNjYWxlWFwiKSwgZ2V0VHJhbnNmb3JtRmxvYXQoXCJzY2FsZVlcIildLFxuXHRcdFx0XHRcdFx0LyogTm90ZTogU1ZHJ3Mgcm90YXRlIHRyYW5zZm9ybSB0YWtlcyB0aHJlZSB2YWx1ZXM6IHJvdGF0aW9uIGRlZ3JlZXMgZm9sbG93ZWQgYnkgdGhlIFggYW5kIFkgdmFsdWVzXG5cdFx0XHRcdFx0XHQgZGVmaW5pbmcgdGhlIHJvdGF0aW9uJ3Mgb3JpZ2luIHBvaW50LiBXZSBpZ25vcmUgdGhlIG9yaWdpbiB2YWx1ZXMgKGRlZmF1bHQgdGhlbSB0byAwKS4gKi9cblx0XHRcdFx0XHRcdHJvdGF0ZTogW2dldFRyYW5zZm9ybUZsb2F0KFwicm90YXRlWlwiKSwgMCwgMF1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSB0cmFuc2Zvcm0gcHJvcGVydGllcyBpbiB0aGUgdXNlci1kZWZpbmVkIHByb3BlcnR5IG1hcCBvcmRlci5cblx0XHRcdFx0XHQgKFRoaXMgbWltaWNzIHRoZSBiZWhhdmlvciBvZiBub24tU1ZHIHRyYW5zZm9ybSBhbmltYXRpb24uKSAqL1xuXHRcdFx0XHRcdCQuZWFjaChEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLCBmdW5jdGlvbih0cmFuc2Zvcm1OYW1lKSB7XG5cdFx0XHRcdFx0XHQvKiBFeGNlcHQgZm9yIHdpdGggc2tld1gvWSwgcmV2ZXJ0IHRoZSBheGlzLXNwZWNpZmljIHRyYW5zZm9ybSBzdWJwcm9wZXJ0aWVzIHRvIHRoZWlyIGF4aXMtZnJlZSBtYXN0ZXJcblx0XHRcdFx0XHRcdCBwcm9wZXJ0aWVzIHNvIHRoYXQgdGhleSBtYXRjaCB1cCB3aXRoIFNWRydzIGFjY2VwdGVkIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLiAqL1xuXHRcdFx0XHRcdFx0aWYgKC9edHJhbnNsYXRlL2kudGVzdCh0cmFuc2Zvcm1OYW1lKSkge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1OYW1lID0gXCJ0cmFuc2xhdGVcIjtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15zY2FsZS9pLnRlc3QodHJhbnNmb3JtTmFtZSkpIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtTmFtZSA9IFwic2NhbGVcIjtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15yb3RhdGUvaS50ZXN0KHRyYW5zZm9ybU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybU5hbWUgPSBcInJvdGF0ZVwiO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHdlIGhhdmVuJ3QgeWV0IGRlbGV0ZWQgdGhlIHByb3BlcnR5IGZyb20gdGhlIFNWR1RyYW5zZm9ybXMgY29udGFpbmVyLiAqL1xuXHRcdFx0XHRcdFx0aWYgKFNWR1RyYW5zZm9ybXNbdHJhbnNmb3JtTmFtZV0pIHtcblx0XHRcdFx0XHRcdFx0LyogQXBwZW5kIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgaW4gdGhlIFNWRy1zdXBwb3J0ZWQgdHJhbnNmb3JtIGZvcm1hdC4gQXMgcGVyIHRoZSBzcGVjLCBzdXJyb3VuZCB0aGUgc3BhY2UtZGVsaW1pdGVkIHZhbHVlcyBpbiBwYXJlbnRoZXNlcy4gKi9cblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zZm9ybU5hbWUgKyBcIihcIiArIFNWR1RyYW5zZm9ybXNbdHJhbnNmb3JtTmFtZV0uam9pbihcIiBcIikgKyBcIilcIiArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRcdC8qIEFmdGVyIHByb2Nlc3NpbmcgYW4gU1ZHIHRyYW5zZm9ybSBwcm9wZXJ0eSwgZGVsZXRlIGl0IGZyb20gdGhlIFNWR1RyYW5zZm9ybXMgY29udGFpbmVyIHNvIHdlIGRvbid0XG5cdFx0XHRcdFx0XHRcdCByZS1pbnNlcnQgdGhlIHNhbWUgbWFzdGVyIHByb3BlcnR5IGlmIHdlIGVuY291bnRlciBhbm90aGVyIG9uZSBvZiBpdHMgYXhpcy1zcGVjaWZpYyBwcm9wZXJ0aWVzLiAqL1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgU1ZHVHJhbnNmb3Jtc1t0cmFuc2Zvcm1OYW1lXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgdHJhbnNmb3JtVmFsdWUsXG5cdFx0XHRcdFx0XHRcdHBlcnNwZWN0aXZlO1xuXG5cdFx0XHRcdFx0LyogVHJhbnNmb3JtIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBhcyBtZW1iZXJzIG9mIHRoZSB0cmFuc2Zvcm1DYWNoZSBvYmplY3QuIENvbmNhdGVuYXRlIGFsbCB0aGUgbWVtYmVycyBpbnRvIGEgc3RyaW5nLiAqL1xuXHRcdFx0XHRcdCQuZWFjaChEYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLCBmdW5jdGlvbih0cmFuc2Zvcm1OYW1lKSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm1WYWx1ZSA9IERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV07XG5cblx0XHRcdFx0XHRcdC8qIFRyYW5zZm9ybSdzIHBlcnNwZWN0aXZlIHN1YnByb3BlcnR5IG11c3QgYmUgc2V0IGZpcnN0IGluIG9yZGVyIHRvIHRha2UgZWZmZWN0LiBTdG9yZSBpdCB0ZW1wb3JhcmlseS4gKi9cblx0XHRcdFx0XHRcdGlmICh0cmFuc2Zvcm1OYW1lID09PSBcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIpIHtcblx0XHRcdFx0XHRcdFx0cGVyc3BlY3RpdmUgPSB0cmFuc2Zvcm1WYWx1ZTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIElFOSBvbmx5IHN1cHBvcnRzIG9uZSByb3RhdGlvbiB0eXBlLCByb3RhdGVaLCB3aGljaCBpdCByZWZlcnMgdG8gYXMgXCJyb3RhdGVcIi4gKi9cblx0XHRcdFx0XHRcdGlmIChJRSA9PT0gOSAmJiB0cmFuc2Zvcm1OYW1lID09PSBcInJvdGF0ZVpcIikge1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1OYW1lID0gXCJyb3RhdGVcIjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zZm9ybU5hbWUgKyB0cmFuc2Zvcm1WYWx1ZSArIFwiIFwiO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0LyogSWYgcHJlc2VudCwgc2V0IHRoZSBwZXJzcGVjdGl2ZSBzdWJwcm9wZXJ0eSBmaXJzdC4gKi9cblx0XHRcdFx0XHRpZiAocGVyc3BlY3RpdmUpIHtcblx0XHRcdFx0XHRcdHRyYW5zZm9ybVN0cmluZyA9IFwicGVyc3BlY3RpdmVcIiArIHBlcnNwZWN0aXZlICsgXCIgXCIgKyB0cmFuc2Zvcm1TdHJpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3JtU3RyaW5nKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyogUmVnaXN0ZXIgaG9va3MgYW5kIG5vcm1hbGl6YXRpb25zLiAqL1xuXHRcdENTUy5Ib29rcy5yZWdpc3RlcigpO1xuXHRcdENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpO1xuXG5cdFx0LyogQWxsb3cgaG9vayBzZXR0aW5nIGluIHRoZSBzYW1lIGZhc2hpb24gYXMgalF1ZXJ5J3MgJC5jc3MoKS4gKi9cblx0XHRWZWxvY2l0eS5ob29rID0gZnVuY3Rpb24oZWxlbWVudHMsIGFyZzIsIGFyZzMpIHtcblx0XHRcdHZhciB2YWx1ZTtcblxuXHRcdFx0ZWxlbWVudHMgPSBzYW5pdGl6ZUVsZW1lbnRzKGVsZW1lbnRzKTtcblxuXHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHRcdC8qIEluaXRpYWxpemUgVmVsb2NpdHkncyBwZXItZWxlbWVudCBkYXRhIGNhY2hlIGlmIHRoaXMgZWxlbWVudCBoYXNuJ3QgcHJldmlvdXNseSBiZWVuIGFuaW1hdGVkLiAqL1xuXHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0VmVsb2NpdHkuaW5pdChlbGVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIEdldCBwcm9wZXJ0eSB2YWx1ZS4gSWYgYW4gZWxlbWVudCBzZXQgd2FzIHBhc3NlZCBpbiwgb25seSByZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgZmlyc3QgZWxlbWVudC4gKi9cblx0XHRcdFx0aWYgKGFyZzMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIGFyZzIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvKiBTZXQgcHJvcGVydHkgdmFsdWUuICovXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Lyogc1BWIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIG5vcm1hbGl6ZWQgcHJvcGVydHlOYW1lL3Byb3BlcnR5VmFsdWUgcGFpciB1c2VkIHRvIHVwZGF0ZSB0aGUgRE9NLiAqL1xuXHRcdFx0XHRcdHZhciBhZGp1c3RlZFNldCA9IENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIGFyZzIsIGFyZzMpO1xuXG5cdFx0XHRcdFx0LyogVHJhbnNmb3JtIHByb3BlcnRpZXMgZG9uJ3QgYXV0b21hdGljYWxseSBzZXQuIFRoZXkgaGF2ZSB0byBiZSBmbHVzaGVkIHRvIHRoZSBET00uICovXG5cdFx0XHRcdFx0aWYgKGFkanVzdGVkU2V0WzBdID09PSBcInRyYW5zZm9ybVwiKSB7XG5cdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShlbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YWx1ZSA9IGFkanVzdGVkU2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH07XG5cblx0XHQvKioqKioqKioqKioqKioqKipcblx0XHQgQW5pbWF0aW9uXG5cdFx0ICoqKioqKioqKioqKioqKioqL1xuXG5cdFx0dmFyIGFuaW1hdGUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvcHRzO1xuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgQ2FsbCBDaGFpblxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0LyogTG9naWMgZm9yIGRldGVybWluaW5nIHdoYXQgdG8gcmV0dXJuIHRvIHRoZSBjYWxsIHN0YWNrIHdoZW4gZXhpdGluZyBvdXQgb2YgVmVsb2NpdHkuICovXG5cdFx0XHRmdW5jdGlvbiBnZXRDaGFpbigpIHtcblx0XHRcdFx0LyogSWYgd2UgYXJlIHVzaW5nIHRoZSB1dGlsaXR5IGZ1bmN0aW9uLCBhdHRlbXB0IHRvIHJldHVybiB0aGlzIGNhbGwncyBwcm9taXNlLiBJZiBubyBwcm9taXNlIGxpYnJhcnkgd2FzIGRldGVjdGVkLFxuXHRcdFx0XHQgZGVmYXVsdCB0byBudWxsIGluc3RlYWQgb2YgcmV0dXJuaW5nIHRoZSB0YXJnZXRlZCBlbGVtZW50cyBzbyB0aGF0IHV0aWxpdHkgZnVuY3Rpb24ncyByZXR1cm4gdmFsdWUgaXMgc3RhbmRhcmRpemVkLiAqL1xuXHRcdFx0XHRpZiAoaXNVdGlsaXR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2VEYXRhLnByb21pc2UgfHwgbnVsbDtcblx0XHRcdFx0XHQvKiBPdGhlcndpc2UsIGlmIHdlJ3JlIHVzaW5nICQuZm4sIHJldHVybiB0aGUgalF1ZXJ5LS9aZXB0by13cmFwcGVkIGVsZW1lbnQgc2V0LiAqL1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50c1dyYXBwZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdCBBcmd1bWVudHMgQXNzaWdubWVudFxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdC8qIFRvIGFsbG93IGZvciBleHByZXNzaXZlIENvZmZlZVNjcmlwdCBjb2RlLCBWZWxvY2l0eSBzdXBwb3J0cyBhbiBhbHRlcm5hdGl2ZSBzeW50YXggaW4gd2hpY2ggXCJlbGVtZW50c1wiIChvciBcImVcIiksIFwicHJvcGVydGllc1wiIChvciBcInBcIiksIGFuZCBcIm9wdGlvbnNcIiAob3IgXCJvXCIpXG5cdFx0XHQgb2JqZWN0cyBhcmUgZGVmaW5lZCBvbiBhIGNvbnRhaW5lciBvYmplY3QgdGhhdCdzIHBhc3NlZCBpbiBhcyBWZWxvY2l0eSdzIHNvbGUgYXJndW1lbnQuICovXG5cdFx0XHQvKiBOb3RlOiBTb21lIGJyb3dzZXJzIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGUgYXJndW1lbnRzIHdpdGggYSBcInByb3BlcnRpZXNcIiBvYmplY3QuIFdlIGRldGVjdCBpdCBieSBjaGVja2luZyBmb3IgaXRzIGRlZmF1bHQgXCJuYW1lc1wiIHByb3BlcnR5LiAqL1xuXHRcdFx0dmFyIHN5bnRhY3RpY1N1Z2FyID0gKGFyZ3VtZW50c1swXSAmJiAoYXJndW1lbnRzWzBdLnAgfHwgKCgkLmlzUGxhaW5PYmplY3QoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpICYmICFhcmd1bWVudHNbMF0ucHJvcGVydGllcy5uYW1lcykgfHwgVHlwZS5pc1N0cmluZyhhcmd1bWVudHNbMF0ucHJvcGVydGllcykpKSksXG5cdFx0XHRcdFx0LyogV2hldGhlciBWZWxvY2l0eSB3YXMgY2FsbGVkIHZpYSB0aGUgdXRpbGl0eSBmdW5jdGlvbiAoYXMgb3Bwb3NlZCB0byBvbiBhIGpRdWVyeS9aZXB0byBvYmplY3QpLiAqL1xuXHRcdFx0XHRcdGlzVXRpbGl0eSxcblx0XHRcdFx0XHQvKiBXaGVuIFZlbG9jaXR5IGlzIGNhbGxlZCB2aWEgdGhlIHV0aWxpdHkgZnVuY3Rpb24gKCQuVmVsb2NpdHkoKS9WZWxvY2l0eSgpKSwgZWxlbWVudHMgYXJlIGV4cGxpY2l0bHlcblx0XHRcdFx0XHQgcGFzc2VkIGluIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIuIFRodXMsIGFyZ3VtZW50IHBvc2l0aW9uaW5nIHZhcmllcy4gV2Ugbm9ybWFsaXplIHRoZW0gaGVyZS4gKi9cblx0XHRcdFx0XHRlbGVtZW50c1dyYXBwZWQsXG5cdFx0XHRcdFx0YXJndW1lbnRJbmRleDtcblxuXHRcdFx0dmFyIGVsZW1lbnRzLFxuXHRcdFx0XHRcdHByb3BlcnRpZXNNYXAsXG5cdFx0XHRcdFx0b3B0aW9ucztcblxuXHRcdFx0LyogRGV0ZWN0IGpRdWVyeS9aZXB0byBlbGVtZW50cyBiZWluZyBhbmltYXRlZCB2aWEgdGhlICQuZm4gbWV0aG9kLiAqL1xuXHRcdFx0aWYgKFR5cGUuaXNXcmFwcGVkKHRoaXMpKSB7XG5cdFx0XHRcdGlzVXRpbGl0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdGFyZ3VtZW50SW5kZXggPSAwO1xuXHRcdFx0XHRlbGVtZW50cyA9IHRoaXM7XG5cdFx0XHRcdGVsZW1lbnRzV3JhcHBlZCA9IHRoaXM7XG5cdFx0XHRcdC8qIE90aGVyd2lzZSwgcmF3IGVsZW1lbnRzIGFyZSBiZWluZyBhbmltYXRlZCB2aWEgdGhlIHV0aWxpdHkgZnVuY3Rpb24uICovXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc1V0aWxpdHkgPSB0cnVlO1xuXG5cdFx0XHRcdGFyZ3VtZW50SW5kZXggPSAxO1xuXHRcdFx0XHRlbGVtZW50cyA9IHN5bnRhY3RpY1N1Z2FyID8gKGFyZ3VtZW50c1swXS5lbGVtZW50cyB8fCBhcmd1bWVudHNbMF0uZSkgOiBhcmd1bWVudHNbMF07XG5cdFx0XHR9XG5cblx0XHRcdC8qKioqKioqKioqKioqKipcblx0XHRcdCBQcm9taXNlc1xuXHRcdFx0ICoqKioqKioqKioqKioqKi9cblxuXHRcdFx0dmFyIHByb21pc2VEYXRhID0ge1xuXHRcdFx0XHRwcm9taXNlOiBudWxsLFxuXHRcdFx0XHRyZXNvbHZlcjogbnVsbCxcblx0XHRcdFx0cmVqZWN0ZXI6IG51bGxcblx0XHRcdH07XG5cblx0XHRcdC8qIElmIHRoaXMgY2FsbCB3YXMgbWFkZSB2aWEgdGhlIHV0aWxpdHkgZnVuY3Rpb24gKHdoaWNoIGlzIHRoZSBkZWZhdWx0IG1ldGhvZCBvZiBpbnZvY2F0aW9uIHdoZW4galF1ZXJ5L1plcHRvIGFyZSBub3QgYmVpbmcgdXNlZCksIGFuZCBpZlxuXHRcdFx0IHByb21pc2Ugc3VwcG9ydCB3YXMgZGV0ZWN0ZWQsIGNyZWF0ZSBhIHByb21pc2Ugb2JqZWN0IGZvciB0aGlzIGNhbGwgYW5kIHN0b3JlIHJlZmVyZW5jZXMgdG8gaXRzIHJlc29sdmVyIGFuZCByZWplY3RlciBtZXRob2RzLiBUaGUgcmVzb2x2ZVxuXHRcdFx0IG1ldGhvZCBpcyB1c2VkIHdoZW4gYSBjYWxsIGNvbXBsZXRlcyBuYXR1cmFsbHkgb3IgaXMgcHJlbWF0dXJlbHkgc3RvcHBlZCBieSB0aGUgdXNlci4gSW4gYm90aCBjYXNlcywgY29tcGxldGVDYWxsKCkgaGFuZGxlcyB0aGUgYXNzb2NpYXRlZFxuXHRcdFx0IGNhbGwgY2xlYW51cCBhbmQgcHJvbWlzZSByZXNvbHZpbmcgbG9naWMuIFRoZSByZWplY3QgbWV0aG9kIGlzIHVzZWQgd2hlbiBhbiBpbnZhbGlkIHNldCBvZiBhcmd1bWVudHMgaXMgcGFzc2VkIGludG8gYSBWZWxvY2l0eSBjYWxsLiAqL1xuXHRcdFx0LyogTm90ZTogVmVsb2NpdHkgZW1wbG95cyBhIGNhbGwtYmFzZWQgcXVldWVpbmcgYXJjaGl0ZWN0dXJlLCB3aGljaCBtZWFucyB0aGF0IHN0b3BwaW5nIGFuIGFuaW1hdGluZyBlbGVtZW50IGFjdHVhbGx5IHN0b3BzIHRoZSBmdWxsIGNhbGwgdGhhdFxuXHRcdFx0IHRyaWdnZXJlZCBpdCAtLSBub3QgdGhhdCBvbmUgZWxlbWVudCBleGNsdXNpdmVseS4gU2ltaWxhcmx5LCB0aGVyZSBpcyBvbmUgcHJvbWlzZSBwZXIgY2FsbCwgYW5kIGFsbCBlbGVtZW50cyB0YXJnZXRlZCBieSBhIFZlbG9jaXR5IGNhbGwgYXJlXG5cdFx0XHQgZ3JvdXBlZCB0b2dldGhlciBmb3IgdGhlIHB1cnBvc2VzIG9mIHJlc29sdmluZyBhbmQgcmVqZWN0aW5nIGEgcHJvbWlzZS4gKi9cblx0XHRcdGlmIChpc1V0aWxpdHkgJiYgVmVsb2NpdHkuUHJvbWlzZSkge1xuXHRcdFx0XHRwcm9taXNlRGF0YS5wcm9taXNlID0gbmV3IFZlbG9jaXR5LlByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdFx0cHJvbWlzZURhdGEucmVzb2x2ZXIgPSByZXNvbHZlO1xuXHRcdFx0XHRcdHByb21pc2VEYXRhLnJlamVjdGVyID0gcmVqZWN0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN5bnRhY3RpY1N1Z2FyKSB7XG5cdFx0XHRcdHByb3BlcnRpZXNNYXAgPSBhcmd1bWVudHNbMF0ucHJvcGVydGllcyB8fCBhcmd1bWVudHNbMF0ucDtcblx0XHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1swXS5vcHRpb25zIHx8IGFyZ3VtZW50c1swXS5vO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJvcGVydGllc01hcCA9IGFyZ3VtZW50c1thcmd1bWVudEluZGV4XTtcblx0XHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudEluZGV4ICsgMV07XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnRzID0gc2FuaXRpemVFbGVtZW50cyhlbGVtZW50cyk7XG5cblx0XHRcdGlmICghZWxlbWVudHMpIHtcblx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcblx0XHRcdFx0XHRpZiAoIXByb3BlcnRpZXNNYXAgfHwgIW9wdGlvbnMgfHwgb3B0aW9ucy5wcm9taXNlUmVqZWN0RW1wdHkgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZWplY3RlcigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8qIFRoZSBsZW5ndGggb2YgdGhlIGVsZW1lbnQgc2V0IChpbiB0aGUgZm9ybSBvZiBhIG5vZGVMaXN0IG9yIGFuIGFycmF5IG9mIGVsZW1lbnRzKSBpcyBkZWZhdWx0ZWQgdG8gMSBpbiBjYXNlIGFcblx0XHRcdCBzaW5nbGUgcmF3IERPTSBlbGVtZW50IGlzIHBhc3NlZCBpbiAod2hpY2ggZG9lc24ndCBjb250YWluIGEgbGVuZ3RoIHByb3BlcnR5KS4gKi9cblx0XHRcdHZhciBlbGVtZW50c0xlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aCxcblx0XHRcdFx0XHRlbGVtZW50c0luZGV4ID0gMDtcblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0IEFyZ3VtZW50IE92ZXJsb2FkaW5nXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvKiBTdXBwb3J0IGlzIGluY2x1ZGVkIGZvciBqUXVlcnkncyBhcmd1bWVudCBvdmVybG9hZGluZzogJC5hbmltYXRlKHByb3BlcnR5TWFwIFssIGR1cmF0aW9uXSBbLCBlYXNpbmddIFssIGNvbXBsZXRlXSkuXG5cdFx0XHQgT3ZlcmxvYWRpbmcgaXMgZGV0ZWN0ZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBhYnNlbmNlIG9mIGFuIG9iamVjdCBiZWluZyBwYXNzZWQgaW50byBvcHRpb25zLiAqL1xuXHRcdFx0LyogTm90ZTogVGhlIHN0b3AvZmluaXNoL3BhdXNlL3Jlc3VtZSBhY3Rpb25zIGRvIG5vdCBhY2NlcHQgYW5pbWF0aW9uIG9wdGlvbnMsIGFuZCBhcmUgdGhlcmVmb3JlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay4gKi9cblx0XHRcdGlmICghL14oc3RvcHxmaW5pc2h8ZmluaXNoQWxsfHBhdXNlfHJlc3VtZSkkL2kudGVzdChwcm9wZXJ0aWVzTWFwKSAmJiAhJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG5cdFx0XHRcdC8qIFRoZSB1dGlsaXR5IGZ1bmN0aW9uIHNoaWZ0cyBhbGwgYXJndW1lbnRzIG9uZSBwb3NpdGlvbiB0byB0aGUgcmlnaHQsIHNvIHdlIGFkanVzdCBmb3IgdGhhdCBvZmZzZXQuICovXG5cdFx0XHRcdHZhciBzdGFydGluZ0FyZ3VtZW50UG9zaXRpb24gPSBhcmd1bWVudEluZGV4ICsgMTtcblxuXHRcdFx0XHRvcHRpb25zID0ge307XG5cblx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGFsbCBvcHRpb25zIGFyZ3VtZW50cyAqL1xuXHRcdFx0XHRmb3IgKHZhciBpID0gc3RhcnRpbmdBcmd1bWVudFBvc2l0aW9uOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0LyogVHJlYXQgYSBudW1iZXIgYXMgYSBkdXJhdGlvbi4gUGFyc2UgaXQgb3V0LiAqL1xuXHRcdFx0XHRcdC8qIE5vdGU6IFRoZSBmb2xsb3dpbmcgUmVnRXggd2lsbCByZXR1cm4gdHJ1ZSBpZiBwYXNzZWQgYW4gYXJyYXkgd2l0aCBhIG51bWJlciBhcyBpdHMgZmlyc3QgaXRlbS5cblx0XHRcdFx0XHQgVGh1cywgYXJyYXlzIGFyZSBza2lwcGVkIGZyb20gdGhpcyBjaGVjay4gKi9cblx0XHRcdFx0XHRpZiAoIVR5cGUuaXNBcnJheShhcmd1bWVudHNbaV0pICYmICgvXihmYXN0fG5vcm1hbHxzbG93KSQvaS50ZXN0KGFyZ3VtZW50c1tpXSkgfHwgL15cXGQvLnRlc3QoYXJndW1lbnRzW2ldKSkpIHtcblx0XHRcdFx0XHRcdG9wdGlvbnMuZHVyYXRpb24gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0XHQvKiBUcmVhdCBzdHJpbmdzIGFuZCBhcnJheXMgYXMgZWFzaW5ncy4gKi9cblx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcoYXJndW1lbnRzW2ldKSB8fCBUeXBlLmlzQXJyYXkoYXJndW1lbnRzW2ldKSkge1xuXHRcdFx0XHRcdFx0b3B0aW9ucy5lYXNpbmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0XHQvKiBUcmVhdCBhIGZ1bmN0aW9uIGFzIGEgY29tcGxldGUgY2FsbGJhY2suICovXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChUeXBlLmlzRnVuY3Rpb24oYXJndW1lbnRzW2ldKSkge1xuXHRcdFx0XHRcdFx0b3B0aW9ucy5jb21wbGV0ZSA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0IEFjdGlvbiBEZXRlY3Rpb25cblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdC8qIFZlbG9jaXR5J3MgYmVoYXZpb3IgaXMgY2F0ZWdvcml6ZWQgaW50byBcImFjdGlvbnNcIjogRWxlbWVudHMgY2FuIGVpdGhlciBiZSBzcGVjaWFsbHkgc2Nyb2xsZWQgaW50byB2aWV3LFxuXHRcdFx0IG9yIHRoZXkgY2FuIGJlIHN0YXJ0ZWQsIHN0b3BwZWQsIHBhdXNlZCwgcmVzdW1lZCwgb3IgcmV2ZXJzZWQgLiBJZiBhIGxpdGVyYWwgb3IgcmVmZXJlbmNlZCBwcm9wZXJ0aWVzIG1hcCBpcyBwYXNzZWQgaW4gYXMgVmVsb2NpdHknc1xuXHRcdFx0IGZpcnN0IGFyZ3VtZW50LCB0aGUgYXNzb2NpYXRlZCBhY3Rpb24gaXMgXCJzdGFydFwiLiBBbHRlcm5hdGl2ZWx5LCBcInNjcm9sbFwiLCBcInJldmVyc2VcIiwgXCJwYXVzZVwiLCBcInJlc3VtZVwiIG9yIFwic3RvcFwiIGNhbiBiZSBwYXNzZWQgaW4gXG5cdFx0XHQgaW5zdGVhZCBvZiBhIHByb3BlcnRpZXMgbWFwLiAqL1xuXHRcdFx0dmFyIGFjdGlvbjtcblxuXHRcdFx0c3dpdGNoIChwcm9wZXJ0aWVzTWFwKSB7XG5cdFx0XHRcdGNhc2UgXCJzY3JvbGxcIjpcblx0XHRcdFx0XHRhY3Rpb24gPSBcInNjcm9sbFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJyZXZlcnNlXCI6XG5cdFx0XHRcdFx0YWN0aW9uID0gXCJyZXZlcnNlXCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcInBhdXNlXCI6XG5cblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdCBBY3Rpb246IFBhdXNlXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHR2YXIgY3VycmVudFRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXG5cdFx0XHRcdFx0LyogSGFuZGxlIGRlbGF5IHRpbWVycyAqL1xuXHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cGF1c2VEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvKiBQYXVzZSBhbmQgUmVzdW1lIGFyZSBjYWxsLXdpZGUgKG5vdCBvbiBhIHBlciBlbGVtZW50IGJhc2lzKS4gVGh1cywgY2FsbGluZyBwYXVzZSBvciByZXN1bWUgb24gYSBcblx0XHRcdFx0XHQgc2luZ2xlIGVsZW1lbnQgd2lsbCBjYXVzZSBhbnkgY2FsbHMgdGhhdCBjb250YWludCB0d2VlbnMgZm9yIHRoYXQgZWxlbWVudCB0byBiZSBwYXVzZWQvcmVzdW1lZFxuXHRcdFx0XHRcdCBhcyB3ZWxsLiAqL1xuXG5cdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGFsbCBjYWxscyBhbmQgcGF1c2UgYW55IHRoYXQgY29udGFpbiBhbnkgb2Ygb3VyIGVsZW1lbnRzICovXG5cdFx0XHRcdFx0JC5lYWNoKFZlbG9jaXR5LlN0YXRlLmNhbGxzLCBmdW5jdGlvbihpLCBhY3RpdmVDYWxsKSB7XG5cblx0XHRcdFx0XHRcdHZhciBmb3VuZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0LyogSW5hY3RpdmUgY2FsbHMgYXJlIHNldCB0byBmYWxzZSBieSB0aGUgbG9naWMgaW5zaWRlIGNvbXBsZXRlQ2FsbCgpLiBTa2lwIHRoZW0uICovXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGFjdGl2ZSBjYWxsJ3MgdGFyZ2V0ZWQgZWxlbWVudHMuICovXG5cdFx0XHRcdFx0XHRcdCQuZWFjaChhY3RpdmVDYWxsWzFdLCBmdW5jdGlvbihrLCBhY3RpdmVFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHF1ZXVlTmFtZSA9IChvcHRpb25zID09PSB1bmRlZmluZWQpID8gXCJcIiA6IG9wdGlvbnM7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAocXVldWVOYW1lICE9PSB0cnVlICYmIChhY3RpdmVDYWxsWzJdLnF1ZXVlICE9PSBxdWV1ZU5hbWUpICYmICEob3B0aW9ucyA9PT0gdW5kZWZpbmVkICYmIGFjdGl2ZUNhbGxbMl0ucXVldWUgPT09IGZhbHNlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIHRoZSBjYWxscyB0YXJnZXRlZCBieSB0aGUgc3RvcCBjb21tYW5kLiAqL1xuXHRcdFx0XHRcdFx0XHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24obCwgZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogQ2hlY2sgdGhhdCB0aGlzIGNhbGwgd2FzIGFwcGxpZWQgdG8gdGhlIHRhcmdldCBlbGVtZW50LiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTZXQgY2FsbCB0byBwYXVzZWQgKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2FsbFs1XSA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bWU6IGZhbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogT25jZSB3ZSBtYXRjaCBhbiBlbGVtZW50LCB3ZSBjYW4gYm91bmNlIG91dCB0byB0aGUgbmV4dCBjYWxsIGVudGlyZWx5ICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvdW5kID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogUHJvY2VlZCB0byBjaGVjayBuZXh0IGNhbGwgaWYgd2UgaGF2ZSBhbHJlYWR5IG1hdGNoZWQgKi9cblx0XHRcdFx0XHRcdFx0XHRpZiAoZm91bmQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvKiBTaW5jZSBwYXVzZSBjcmVhdGVzIG5vIG5ldyB0d2VlbnMsIGV4aXQgb3V0IG9mIFZlbG9jaXR5LiAqL1xuXHRcdFx0XHRcdHJldHVybiBnZXRDaGFpbigpO1xuXG5cdFx0XHRcdGNhc2UgXCJyZXN1bWVcIjpcblxuXHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0IEFjdGlvbjogUmVzdW1lXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHQvKiBIYW5kbGUgZGVsYXkgdGltZXJzICovXG5cdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXN1bWVEZWxheU9uRWxlbWVudChlbGVtZW50LCBjdXJyZW50VGltZSk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvKiBQYXVzZSBhbmQgUmVzdW1lIGFyZSBjYWxsLXdpZGUgKG5vdCBvbiBhIHBlciBlbGVtbnQgYmFzaXMpLiBUaHVzLCBjYWxsaW5nIHBhdXNlIG9yIHJlc3VtZSBvbiBhIFxuXHRcdFx0XHRcdCBzaW5nbGUgZWxlbWVudCB3aWxsIGNhdXNlIGFueSBjYWxscyB0aGF0IGNvbnRhaW50IHR3ZWVucyBmb3IgdGhhdCBlbGVtZW50IHRvIGJlIHBhdXNlZC9yZXN1bWVkXG5cdFx0XHRcdFx0IGFzIHdlbGwuICovXG5cblx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggYWxsIGNhbGxzIGFuZCBwYXVzZSBhbnkgdGhhdCBjb250YWluIGFueSBvZiBvdXIgZWxlbWVudHMgKi9cblx0XHRcdFx0XHQkLmVhY2goVmVsb2NpdHkuU3RhdGUuY2FsbHMsIGZ1bmN0aW9uKGksIGFjdGl2ZUNhbGwpIHtcblx0XHRcdFx0XHRcdHZhciBmb3VuZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0LyogSW5hY3RpdmUgY2FsbHMgYXJlIHNldCB0byBmYWxzZSBieSB0aGUgbG9naWMgaW5zaWRlIGNvbXBsZXRlQ2FsbCgpLiBTa2lwIHRoZW0uICovXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGFjdGl2ZSBjYWxsJ3MgdGFyZ2V0ZWQgZWxlbWVudHMuICovXG5cdFx0XHRcdFx0XHRcdCQuZWFjaChhY3RpdmVDYWxsWzFdLCBmdW5jdGlvbihrLCBhY3RpdmVFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHF1ZXVlTmFtZSA9IChvcHRpb25zID09PSB1bmRlZmluZWQpID8gXCJcIiA6IG9wdGlvbnM7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAocXVldWVOYW1lICE9PSB0cnVlICYmIChhY3RpdmVDYWxsWzJdLnF1ZXVlICE9PSBxdWV1ZU5hbWUpICYmICEob3B0aW9ucyA9PT0gdW5kZWZpbmVkICYmIGFjdGl2ZUNhbGxbMl0ucXVldWUgPT09IGZhbHNlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0LyogU2tpcCBhbnkgY2FsbHMgdGhhdCBoYXZlIG5ldmVyIGJlZW4gcGF1c2VkICovXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFhY3RpdmVDYWxsWzVdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNhbGxzIHRhcmdldGVkIGJ5IHRoZSBzdG9wIGNvbW1hbmQuICovXG5cdFx0XHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihsLCBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHRoaXMgY2FsbCB3YXMgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEZsYWcgYSBwYXVzZSBvYmplY3QgdG8gYmUgcmVzdW1lZCwgd2hpY2ggd2lsbCBvY2N1ciBkdXJpbmcgdGhlIG5leHQgdGljay4gSW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0IGFkZGl0aW9uLCB0aGUgcGF1c2Ugb2JqZWN0IHdpbGwgYXQgdGhhdCB0aW1lIGJlIGRlbGV0ZWQgKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2FsbFs1XS5yZXN1bWUgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIE9uY2Ugd2UgbWF0Y2ggYW4gZWxlbWVudCwgd2UgY2FuIGJvdW5jZSBvdXQgdG8gdGhlIG5leHQgY2FsbCBlbnRpcmVseSAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3VuZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdC8qIFByb2NlZWQgdG8gY2hlY2sgbmV4dCBjYWxsIGlmIHdlIGhhdmUgYWxyZWFkeSBtYXRjaGVkICovXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGZvdW5kKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0LyogU2luY2UgcmVzdW1lIGNyZWF0ZXMgbm8gbmV3IHR3ZWVucywgZXhpdCBvdXQgb2YgVmVsb2NpdHkuICovXG5cdFx0XHRcdFx0cmV0dXJuIGdldENoYWluKCk7XG5cblx0XHRcdFx0Y2FzZSBcImZpbmlzaFwiOlxuXHRcdFx0XHRjYXNlIFwiZmluaXNoQWxsXCI6XG5cdFx0XHRcdGNhc2UgXCJzdG9wXCI6XG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHQgQWN0aW9uOiBTdG9wXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHQvKiBDbGVhciB0aGUgY3VycmVudGx5LWFjdGl2ZSBkZWxheSBvbiBlYWNoIHRhcmdldGVkIGVsZW1lbnQuICovXG5cdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSAmJiBEYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIpIHtcblx0XHRcdFx0XHRcdFx0LyogU3RvcCB0aGUgdGltZXIgZnJvbSB0cmlnZ2VyaW5nIGl0cyBjYWNoZWQgbmV4dCgpIGZ1bmN0aW9uLiAqL1xuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoRGF0YShlbGVtZW50KS5kZWxheVRpbWVyLnNldFRpbWVvdXQpO1xuXG5cdFx0XHRcdFx0XHRcdC8qIE1hbnVhbGx5IGNhbGwgdGhlIG5leHQoKSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBzdWJzZXF1ZW50IHF1ZXVlIGl0ZW1zIGNhbiBwcm9ncmVzcy4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkuZGVsYXlUaW1lci5uZXh0KSB7XG5cdFx0XHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheVRpbWVyLm5leHQoKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBEYXRhKGVsZW1lbnQpLmRlbGF5VGltZXI7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIElmIHdlIHdhbnQgdG8gZmluaXNoIGV2ZXJ5dGhpbmcgaW4gdGhlIHF1ZXVlLCB3ZSBoYXZlIHRvIGl0ZXJhdGUgdGhyb3VnaCBpdFxuXHRcdFx0XHRcdFx0IGFuZCBjYWxsIGVhY2ggZnVuY3Rpb24uIFRoaXMgd2lsbCBtYWtlIHRoZW0gYWN0aXZlIGNhbGxzIGJlbG93LCB3aGljaCB3aWxsXG5cdFx0XHRcdFx0XHQgY2F1c2UgdGhlbSB0byBiZSBhcHBsaWVkIHZpYSB0aGUgZHVyYXRpb24gc2V0dGluZy4gKi9cblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0aWVzTWFwID09PSBcImZpbmlzaEFsbFwiICYmIChvcHRpb25zID09PSB0cnVlIHx8IFR5cGUuaXNTdHJpbmcob3B0aW9ucykpKSB7XG5cdFx0XHRcdFx0XHRcdC8qIEl0ZXJhdGUgdGhyb3VnaCB0aGUgaXRlbXMgaW4gdGhlIGVsZW1lbnQncyBxdWV1ZS4gKi9cblx0XHRcdFx0XHRcdFx0JC5lYWNoKCQucXVldWUoZWxlbWVudCwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSA/IG9wdGlvbnMgOiBcIlwiKSwgZnVuY3Rpb24oXywgaXRlbSkge1xuXHRcdFx0XHRcdFx0XHRcdC8qIFRoZSBxdWV1ZSBhcnJheSBjYW4gY29udGFpbiBhbiBcImlucHJvZ3Jlc3NcIiBzdHJpbmcsIHdoaWNoIHdlIHNraXAuICovXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNGdW5jdGlvbihpdGVtKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbSgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0LyogQ2xlYXJpbmcgdGhlICQucXVldWUoKSBhcnJheSBpcyBhY2hpZXZlZCBieSByZXNldHRpbmcgaXQgdG8gW10uICovXG5cdFx0XHRcdFx0XHRcdCQucXVldWUoZWxlbWVudCwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSA/IG9wdGlvbnMgOiBcIlwiLCBbXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHR2YXIgY2FsbHNUb1N0b3AgPSBbXTtcblxuXHRcdFx0XHRcdC8qIFdoZW4gdGhlIHN0b3AgYWN0aW9uIGlzIHRyaWdnZXJlZCwgdGhlIGVsZW1lbnRzJyBjdXJyZW50bHkgYWN0aXZlIGNhbGwgaXMgaW1tZWRpYXRlbHkgc3RvcHBlZC4gVGhlIGFjdGl2ZSBjYWxsIG1pZ2h0IGhhdmVcblx0XHRcdFx0XHQgYmVlbiBhcHBsaWVkIHRvIG11bHRpcGxlIGVsZW1lbnRzLCBpbiB3aGljaCBjYXNlIGFsbCBvZiB0aGUgY2FsbCdzIGVsZW1lbnRzIHdpbGwgYmUgc3RvcHBlZC4gV2hlbiBhbiBlbGVtZW50XG5cdFx0XHRcdFx0IGlzIHN0b3BwZWQsIHRoZSBuZXh0IGl0ZW0gaW4gaXRzIGFuaW1hdGlvbiBxdWV1ZSBpcyBpbW1lZGlhdGVseSB0cmlnZ2VyZWQuICovXG5cdFx0XHRcdFx0LyogQW4gYWRkaXRpb25hbCBhcmd1bWVudCBtYXkgYmUgcGFzc2VkIGluIHRvIGNsZWFyIGFuIGVsZW1lbnQncyByZW1haW5pbmcgcXVldWVkIGNhbGxzLiBFaXRoZXIgdHJ1ZSAod2hpY2ggZGVmYXVsdHMgdG8gdGhlIFwiZnhcIiBxdWV1ZSlcblx0XHRcdFx0XHQgb3IgYSBjdXN0b20gcXVldWUgc3RyaW5nIGNhbiBiZSBwYXNzZWQgaW4uICovXG5cdFx0XHRcdFx0LyogTm90ZTogVGhlIHN0b3AgY29tbWFuZCBydW5zIHByaW9yIHRvIFZlbG9jaXR5J3MgUXVldWVpbmcgcGhhc2Ugc2luY2UgaXRzIGJlaGF2aW9yIGlzIGludGVuZGVkIHRvIHRha2UgZWZmZWN0ICppbW1lZGlhdGVseSosXG5cdFx0XHRcdFx0IHJlZ2FyZGxlc3Mgb2YgdGhlIGVsZW1lbnQncyBjdXJyZW50IHF1ZXVlIHN0YXRlLiAqL1xuXG5cdFx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGV2ZXJ5IGFjdGl2ZSBjYWxsLiAqL1xuXHRcdFx0XHRcdCQuZWFjaChWZWxvY2l0eS5TdGF0ZS5jYWxscywgZnVuY3Rpb24oaSwgYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRcdFx0LyogSW5hY3RpdmUgY2FsbHMgYXJlIHNldCB0byBmYWxzZSBieSB0aGUgbG9naWMgaW5zaWRlIGNvbXBsZXRlQ2FsbCgpLiBTa2lwIHRoZW0uICovXG5cdFx0XHRcdFx0XHRpZiAoYWN0aXZlQ2FsbCkge1xuXHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGFjdGl2ZSBjYWxsJ3MgdGFyZ2V0ZWQgZWxlbWVudHMuICovXG5cdFx0XHRcdFx0XHRcdCQuZWFjaChhY3RpdmVDYWxsWzFdLCBmdW5jdGlvbihrLCBhY3RpdmVFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgdHJ1ZSB3YXMgcGFzc2VkIGluIGFzIGEgc2Vjb25kYXJ5IGFyZ3VtZW50LCBjbGVhciBhYnNvbHV0ZWx5IGFsbCBjYWxscyBvbiB0aGlzIGVsZW1lbnQuIE90aGVyd2lzZSwgb25seVxuXHRcdFx0XHRcdFx0XHRcdCBjbGVhciBjYWxscyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlbGV2YW50IHF1ZXVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdC8qIENhbGwgc3RvcHBpbmcgbG9naWMgd29ya3MgYXMgZm9sbG93czpcblx0XHRcdFx0XHRcdFx0XHQgLSBvcHRpb25zID09PSB0cnVlIC0tPiBzdG9wIGN1cnJlbnQgZGVmYXVsdCBxdWV1ZSBjYWxscyAoYW5kIHF1ZXVlOmZhbHNlIGNhbGxzKSwgaW5jbHVkaW5nIHJlbWFpbmluZyBxdWV1ZWQgb25lcy5cblx0XHRcdFx0XHRcdFx0XHQgLSBvcHRpb25zID09PSB1bmRlZmluZWQgLS0+IHN0b3AgY3VycmVudCBxdWV1ZTpcIlwiIGNhbGwgYW5kIGFsbCBxdWV1ZTpmYWxzZSBjYWxscy5cblx0XHRcdFx0XHRcdFx0XHQgLSBvcHRpb25zID09PSBmYWxzZSAtLT4gc3RvcCBvbmx5IHF1ZXVlOmZhbHNlIGNhbGxzLlxuXHRcdFx0XHRcdFx0XHRcdCAtIG9wdGlvbnMgPT09IFwiY3VzdG9tXCIgLS0+IHN0b3AgY3VycmVudCBxdWV1ZTpcImN1c3RvbVwiIGNhbGwsIGluY2x1ZGluZyByZW1haW5pbmcgcXVldWVkIG9uZXMgKHRoZXJlIGlzIG5vIGZ1bmN0aW9uYWxpdHkgdG8gb25seSBjbGVhciB0aGUgY3VycmVudGx5LXJ1bm5pbmcgcXVldWU6XCJjdXN0b21cIiBjYWxsKS4gKi9cblx0XHRcdFx0XHRcdFx0XHR2YXIgcXVldWVOYW1lID0gKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgPyBcIlwiIDogb3B0aW9ucztcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChxdWV1ZU5hbWUgIT09IHRydWUgJiYgKGFjdGl2ZUNhbGxbMl0ucXVldWUgIT09IHF1ZXVlTmFtZSkgJiYgIShvcHRpb25zID09PSB1bmRlZmluZWQgJiYgYWN0aXZlQ2FsbFsyXS5xdWV1ZSA9PT0gZmFsc2UpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNhbGxzIHRhcmdldGVkIGJ5IHRoZSBzdG9wIGNvbW1hbmQuICovXG5cdFx0XHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihsLCBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBDaGVjayB0aGF0IHRoaXMgY2FsbCB3YXMgYXBwbGllZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBPcHRpb25hbGx5IGNsZWFyIHRoZSByZW1haW5pbmcgcXVldWVkIGNhbGxzLiBJZiB3ZSdyZSBkb2luZyBcImZpbmlzaEFsbFwiIHRoaXMgd29uJ3QgZmluZCBhbnl0aGluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGR1ZSB0byB0aGUgcXVldWUtY2xlYXJpbmcgYWJvdmUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zID09PSB0cnVlIHx8IFR5cGUuaXNTdHJpbmcob3B0aW9ucykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGl0ZW1zIGluIHRoZSBlbGVtZW50J3MgcXVldWUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JC5lYWNoKCQucXVldWUoZWxlbWVudCwgVHlwZS5pc1N0cmluZyhvcHRpb25zKSA/IG9wdGlvbnMgOiBcIlwiKSwgZnVuY3Rpb24oXywgaXRlbSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogVGhlIHF1ZXVlIGFycmF5IGNhbiBjb250YWluIGFuIFwiaW5wcm9ncmVzc1wiIHN0cmluZywgd2hpY2ggd2Ugc2tpcC4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChUeXBlLmlzRnVuY3Rpb24oaXRlbSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogUGFzcyB0aGUgaXRlbSdzIGNhbGxiYWNrIGEgZmxhZyBpbmRpY2F0aW5nIHRoYXQgd2Ugd2FudCB0byBhYm9ydCBmcm9tIHRoZSBxdWV1ZSBjYWxsLlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKFNwZWNpZmljYWxseSwgdGhlIHF1ZXVlIHdpbGwgcmVzb2x2ZSB0aGUgY2FsbCdzIGFzc29jaWF0ZWQgcHJvbWlzZSB0aGVuIGFib3J0LikgICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0obnVsbCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBDbGVhcmluZyB0aGUgJC5xdWV1ZSgpIGFycmF5IGlzIGFjaGlldmVkIGJ5IHJlc2V0dGluZyBpdCB0byBbXS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkLnF1ZXVlKGVsZW1lbnQsIFR5cGUuaXNTdHJpbmcob3B0aW9ucykgPyBvcHRpb25zIDogXCJcIiwgW10pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHByb3BlcnRpZXNNYXAgPT09IFwic3RvcFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogU2luY2UgXCJyZXZlcnNlXCIgdXNlcyBjYWNoZWQgc3RhcnQgdmFsdWVzICh0aGUgcHJldmlvdXMgY2FsbCdzIGVuZFZhbHVlcyksIHRoZXNlIHZhbHVlcyBtdXN0IGJlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNoYW5nZWQgdG8gcmVmbGVjdCB0aGUgZmluYWwgdmFsdWUgdGhhdCB0aGUgZWxlbWVudHMgd2VyZSBhY3R1YWxseSB0d2VlbmVkIHRvLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IElmIG9ubHkgcXVldWU6ZmFsc2UgYW5pbWF0aW9ucyBhcmUgY3VycmVudGx5IHJ1bm5pbmcgb24gYW4gZWxlbWVudCwgaXQgd29uJ3QgaGF2ZSBhIHR3ZWVuc0NvbnRhaW5lclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBvYmplY3QuIEFsc28sIHF1ZXVlOmZhbHNlIGFuaW1hdGlvbnMgY2FuJ3QgYmUgcmV2ZXJzZWQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEudHdlZW5zQ29udGFpbmVyICYmIHF1ZXVlTmFtZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQuZWFjaChkYXRhLnR3ZWVuc0NvbnRhaW5lciwgZnVuY3Rpb24obSwgYWN0aXZlVHdlZW4pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlVHdlZW4uZW5kVmFsdWUgPSBhY3RpdmVUd2Vlbi5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYWxsc1RvU3RvcC5wdXNoKGkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnRpZXNNYXAgPT09IFwiZmluaXNoXCIgfHwgcHJvcGVydGllc01hcCA9PT0gXCJmaW5pc2hBbGxcIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFRvIGdldCBhY3RpdmUgdHdlZW5zIHRvIGZpbmlzaCBpbW1lZGlhdGVseSwgd2UgZm9yY2VmdWxseSBzaG9ydGVuIHRoZWlyIGR1cmF0aW9ucyB0byAxbXMgc28gdGhhdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB0aGV5IGZpbmlzaCB1cG9uIHRoZSBuZXh0IHJBZiB0aWNrIHRoZW4gcHJvY2VlZCB3aXRoIG5vcm1hbCBjYWxsIGNvbXBsZXRpb24gbG9naWMuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlQ2FsbFsyXS5kdXJhdGlvbiA9IDE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvKiBQcmVtYXR1cmVseSBjYWxsIGNvbXBsZXRlQ2FsbCgpIG9uIGVhY2ggbWF0Y2hlZCBhY3RpdmUgY2FsbC4gUGFzcyBhbiBhZGRpdGlvbmFsIGZsYWcgZm9yIFwic3RvcFwiIHRvIGluZGljYXRlXG5cdFx0XHRcdFx0IHRoYXQgdGhlIGNvbXBsZXRlIGNhbGxiYWNrIGFuZCBkaXNwbGF5Om5vbmUgc2V0dGluZyBzaG91bGQgYmUgc2tpcHBlZCBzaW5jZSB3ZSdyZSBjb21wbGV0aW5nIHByZW1hdHVyZWx5LiAqL1xuXHRcdFx0XHRcdGlmIChwcm9wZXJ0aWVzTWFwID09PSBcInN0b3BcIikge1xuXHRcdFx0XHRcdFx0JC5lYWNoKGNhbGxzVG9TdG9wLCBmdW5jdGlvbihpLCBqKSB7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlQ2FsbChqLCB0cnVlKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRpZiAocHJvbWlzZURhdGEucHJvbWlzZSkge1xuXHRcdFx0XHRcdFx0XHQvKiBJbW1lZGlhdGVseSByZXNvbHZlIHRoZSBwcm9taXNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHN0b3AgY2FsbCBzaW5jZSBzdG9wIHJ1bnMgc3luY2hyb25vdXNseS4gKi9cblx0XHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVzb2x2ZXIoZWxlbWVudHMpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIFNpbmNlIHdlJ3JlIHN0b3BwaW5nLCBhbmQgbm90IHByb2NlZWRpbmcgd2l0aCBxdWV1ZWluZywgZXhpdCBvdXQgb2YgVmVsb2NpdHkuICovXG5cdFx0XHRcdFx0cmV0dXJuIGdldENoYWluKCk7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvKiBUcmVhdCBhIG5vbi1lbXB0eSBwbGFpbiBvYmplY3QgYXMgYSBsaXRlcmFsIHByb3BlcnRpZXMgbWFwLiAqL1xuXHRcdFx0XHRcdGlmICgkLmlzUGxhaW5PYmplY3QocHJvcGVydGllc01hcCkgJiYgIVR5cGUuaXNFbXB0eU9iamVjdChwcm9wZXJ0aWVzTWFwKSkge1xuXHRcdFx0XHRcdFx0YWN0aW9uID0gXCJzdGFydFwiO1xuXG5cdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0IFJlZGlyZWN0c1xuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdC8qIENoZWNrIGlmIGEgc3RyaW5nIG1hdGNoZXMgYSByZWdpc3RlcmVkIHJlZGlyZWN0IChzZWUgUmVkaXJlY3RzIGFib3ZlKS4gKi9cblx0XHRcdFx0XHR9IGVsc2UgaWYgKFR5cGUuaXNTdHJpbmcocHJvcGVydGllc01hcCkgJiYgVmVsb2NpdHkuUmVkaXJlY3RzW3Byb3BlcnRpZXNNYXBdKSB7XG5cdFx0XHRcdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIG9wdGlvbnMpO1xuXG5cdFx0XHRcdFx0XHR2YXIgZHVyYXRpb25PcmlnaW5hbCA9IG9wdHMuZHVyYXRpb24sXG5cdFx0XHRcdFx0XHRcdFx0ZGVsYXlPcmlnaW5hbCA9IG9wdHMuZGVsYXkgfHwgMDtcblxuXHRcdFx0XHRcdFx0LyogSWYgdGhlIGJhY2t3YXJkcyBvcHRpb24gd2FzIHBhc3NlZCBpbiwgcmV2ZXJzZSB0aGUgZWxlbWVudCBzZXQgc28gdGhhdCBlbGVtZW50cyBhbmltYXRlIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0LiAqL1xuXHRcdFx0XHRcdFx0aWYgKG9wdHMuYmFja3dhcmRzID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRzID0gJC5leHRlbmQodHJ1ZSwgW10sIGVsZW1lbnRzKS5yZXZlcnNlKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIEluZGl2aWR1YWxseSB0cmlnZ2VyIHRoZSByZWRpcmVjdCBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXQgdG8gcHJldmVudCB1c2VycyBmcm9tIGhhdmluZyB0byBoYW5kbGUgaXRlcmF0aW9uIGxvZ2ljIGluIHRoZWlyIHJlZGlyZWN0LiAqL1xuXHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihlbGVtZW50SW5kZXgsIGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIHN0YWdnZXIgb3B0aW9uIHdhcyBwYXNzZWQgaW4sIHN1Y2Nlc3NpdmVseSBkZWxheSBlYWNoIGVsZW1lbnQgYnkgdGhlIHN0YWdnZXIgdmFsdWUgKGluIG1zKS4gUmV0YWluIHRoZSBvcmlnaW5hbCBkZWxheSB2YWx1ZS4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKHBhcnNlRmxvYXQob3B0cy5zdGFnZ2VyKSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdHMuZGVsYXkgPSBkZWxheU9yaWdpbmFsICsgKHBhcnNlRmxvYXQob3B0cy5zdGFnZ2VyKSAqIGVsZW1lbnRJbmRleCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoVHlwZS5pc0Z1bmN0aW9uKG9wdHMuc3RhZ2dlcikpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHRzLmRlbGF5ID0gZGVsYXlPcmlnaW5hbCArIG9wdHMuc3RhZ2dlci5jYWxsKGVsZW1lbnQsIGVsZW1lbnRJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGRyYWcgb3B0aW9uIHdhcyBwYXNzZWQgaW4sIHN1Y2Nlc3NpdmVseSBpbmNyZWFzZS9kZWNyZWFzZSAoZGVwZW5kaW5nIG9uIHRoZSBwcmVzZW5zZSBvZiBvcHRzLmJhY2t3YXJkcylcblx0XHRcdFx0XHRcdFx0IHRoZSBkdXJhdGlvbiBvZiBlYWNoIGVsZW1lbnQncyBhbmltYXRpb24sIHVzaW5nIGZsb29ycyB0byBwcmV2ZW50IHByb2R1Y2luZyB2ZXJ5IHNob3J0IGR1cmF0aW9ucy4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMuZHJhZykge1xuXHRcdFx0XHRcdFx0XHRcdC8qIERlZmF1bHQgdGhlIGR1cmF0aW9uIG9mIFVJIHBhY2sgZWZmZWN0cyAoY2FsbG91dHMgYW5kIHRyYW5zaXRpb25zKSB0byAxMDAwbXMgaW5zdGVhZCBvZiB0aGUgdXN1YWwgZGVmYXVsdCBkdXJhdGlvbiBvZiA0MDBtcy4gKi9cblx0XHRcdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbk9yaWdpbmFsKSB8fCAoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdChwcm9wZXJ0aWVzTWFwKSA/IDEwMDAgOiBEVVJBVElPTl9ERUZBVUxUKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8qIEZvciBlYWNoIGVsZW1lbnQsIHRha2UgdGhlIGdyZWF0ZXIgZHVyYXRpb24gb2Y6IEEpIGFuaW1hdGlvbiBjb21wbGV0aW9uIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIG9yaWdpbmFsIGR1cmF0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdCBCKSA3NSUgb2YgdGhlIG9yaWdpbmFsIGR1cmF0aW9uLCBvciBDKSBhIDIwMG1zIGZhbGxiYWNrIChpbiBjYXNlIGR1cmF0aW9uIGlzIGFscmVhZHkgc2V0IHRvIGEgbG93IHZhbHVlKS5cblx0XHRcdFx0XHRcdFx0XHQgVGhlIGVuZCByZXN1bHQgaXMgYSBiYXNlbGluZSBvZiA3NSUgb2YgdGhlIHJlZGlyZWN0J3MgZHVyYXRpb24gdGhhdCBpbmNyZWFzZXMvZGVjcmVhc2VzIGFzIHRoZSBlbmQgb2YgdGhlIGVsZW1lbnQgc2V0IGlzIGFwcHJvYWNoZWQuICovXG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiA9IE1hdGgubWF4KG9wdHMuZHVyYXRpb24gKiAob3B0cy5iYWNrd2FyZHMgPyAxIC0gZWxlbWVudEluZGV4IC8gZWxlbWVudHNMZW5ndGggOiAoZWxlbWVudEluZGV4ICsgMSkgLyBlbGVtZW50c0xlbmd0aCksIG9wdHMuZHVyYXRpb24gKiAwLjc1LCAyMDApO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyogUGFzcyBpbiB0aGUgY2FsbCdzIG9wdHMgb2JqZWN0IHNvIHRoYXQgdGhlIHJlZGlyZWN0IGNhbiBvcHRpb25hbGx5IGV4dGVuZCBpdC4gSXQgZGVmYXVsdHMgdG8gYW4gZW1wdHkgb2JqZWN0IGluc3RlYWQgb2YgbnVsbCB0b1xuXHRcdFx0XHRcdFx0XHQgcmVkdWNlIHRoZSBvcHRzIGNoZWNraW5nIGxvZ2ljIHJlcXVpcmVkIGluc2lkZSB0aGUgcmVkaXJlY3QuICovXG5cdFx0XHRcdFx0XHRcdFZlbG9jaXR5LlJlZGlyZWN0c1twcm9wZXJ0aWVzTWFwXS5jYWxsKGVsZW1lbnQsIGVsZW1lbnQsIG9wdHMgfHwge30sIGVsZW1lbnRJbmRleCwgZWxlbWVudHNMZW5ndGgsIGVsZW1lbnRzLCBwcm9taXNlRGF0YS5wcm9taXNlID8gcHJvbWlzZURhdGEgOiB1bmRlZmluZWQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdC8qIFNpbmNlIHRoZSBhbmltYXRpb24gbG9naWMgcmVzaWRlcyB3aXRoaW4gdGhlIHJlZGlyZWN0J3Mgb3duIGNvZGUsIGFib3J0IHRoZSByZW1haW5kZXIgb2YgdGhpcyBjYWxsLlxuXHRcdFx0XHRcdFx0IChUaGUgcGVyZm9ybWFuY2Ugb3ZlcmhlYWQgdXAgdG8gdGhpcyBwb2ludCBpcyB2aXJ0dWFsbHkgbm9uLWV4aXN0YW50LikgKi9cblx0XHRcdFx0XHRcdC8qIE5vdGU6IFRoZSBqUXVlcnkgY2FsbCBjaGFpbiBpcyBrZXB0IGludGFjdCBieSByZXR1cm5pbmcgdGhlIGNvbXBsZXRlIGVsZW1lbnQgc2V0LiAqL1xuXHRcdFx0XHRcdFx0cmV0dXJuIGdldENoYWluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gXCJWZWxvY2l0eTogRmlyc3QgYXJndW1lbnQgKFwiICsgcHJvcGVydGllc01hcCArIFwiKSB3YXMgbm90IGEgcHJvcGVydHkgbWFwLCBhIGtub3duIGFjdGlvbiwgb3IgYSByZWdpc3RlcmVkIHJlZGlyZWN0LiBBYm9ydGluZy5cIjtcblxuXHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcblx0XHRcdFx0XHRcdFx0cHJvbWlzZURhdGEucmVqZWN0ZXIobmV3IEVycm9yKGFib3J0RXJyb3IpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYWJvcnRFcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiBnZXRDaGFpbigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgQ2FsbC1XaWRlIFZhcmlhYmxlc1xuXHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvKiBBIGNvbnRhaW5lciBmb3IgQ1NTIHVuaXQgY29udmVyc2lvbiByYXRpb3MgKGUuZy4gJSwgcmVtLCBhbmQgZW0gPT0+IHB4KSB0aGF0IGlzIHVzZWQgdG8gY2FjaGUgcmF0aW9zIGFjcm9zcyBhbGwgZWxlbWVudHNcblx0XHRcdCBiZWluZyBhbmltYXRlZCBpbiBhIHNpbmdsZSBWZWxvY2l0eSBjYWxsLiBDYWxjdWxhdGluZyB1bml0IHJhdGlvcyBuZWNlc3NpdGF0ZXMgRE9NIHF1ZXJ5aW5nIGFuZCB1cGRhdGluZywgYW5kIGlzIHRoZXJlZm9yZVxuXHRcdFx0IGF2b2lkZWQgKHZpYSBjYWNoaW5nKSB3aGVyZXZlciBwb3NzaWJsZS4gVGhpcyBjb250YWluZXIgaXMgY2FsbC13aWRlIGluc3RlYWQgb2YgcGFnZS13aWRlIHRvIGF2b2lkIHRoZSByaXNrIG9mIHVzaW5nIHN0YWxlXG5cdFx0XHQgY29udmVyc2lvbiBtZXRyaWNzIGFjcm9zcyBWZWxvY2l0eSBhbmltYXRpb25zIHRoYXQgYXJlIG5vdCBpbW1lZGlhdGVseSBjb25zZWN1dGl2ZWx5IGNoYWluZWQuICovXG5cdFx0XHR2YXIgY2FsbFVuaXRDb252ZXJzaW9uRGF0YSA9IHtcblx0XHRcdFx0bGFzdFBhcmVudDogbnVsbCxcblx0XHRcdFx0bGFzdFBvc2l0aW9uOiBudWxsLFxuXHRcdFx0XHRsYXN0Rm9udFNpemU6IG51bGwsXG5cdFx0XHRcdGxhc3RQZXJjZW50VG9QeFdpZHRoOiBudWxsLFxuXHRcdFx0XHRsYXN0UGVyY2VudFRvUHhIZWlnaHQ6IG51bGwsXG5cdFx0XHRcdGxhc3RFbVRvUHg6IG51bGwsXG5cdFx0XHRcdHJlbVRvUHg6IG51bGwsXG5cdFx0XHRcdHZ3VG9QeDogbnVsbCxcblx0XHRcdFx0dmhUb1B4OiBudWxsXG5cdFx0XHR9O1xuXG5cdFx0XHQvKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBlbnN1aW5nIHR3ZWVuIGRhdGEgYW5kIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNhbGwuIFRoaXMgY29udGFpbmVyIGdldHMgcHVzaGVkIHRvIHRoZSBwYWdlLXdpZGVcblx0XHRcdCBWZWxvY2l0eS5TdGF0ZS5jYWxscyBhcnJheSB0aGF0IGlzIHByb2Nlc3NlZCBkdXJpbmcgYW5pbWF0aW9uIHRpY2tpbmcuICovXG5cdFx0XHR2YXIgY2FsbCA9IFtdO1xuXG5cdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgRWxlbWVudCBQcm9jZXNzaW5nXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvKiBFbGVtZW50IHByb2Nlc3NpbmcgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgLS0gZGF0YSBwcm9jZXNzaW5nIHRoYXQgY2Fubm90IGdvIHN0YWxlIGFuZCBkYXRhIHByb2Nlc3NpbmcgdGhhdCAqY2FuKiBnbyBzdGFsZSAoaS5lLiB0aGlyZC1wYXJ0eSBzdHlsZSBtb2RpZmljYXRpb25zKTpcblx0XHRcdCAxKSBQcmUtUXVldWVpbmc6IEVsZW1lbnQtd2lkZSB2YXJpYWJsZXMsIGluY2x1ZGluZyB0aGUgZWxlbWVudCdzIGRhdGEgc3RvcmFnZSwgYXJlIGluc3RhbnRpYXRlZC4gQ2FsbCBvcHRpb25zIGFyZSBwcmVwYXJlZC4gSWYgdHJpZ2dlcmVkLCB0aGUgU3RvcCBhY3Rpb24gaXMgZXhlY3V0ZWQuXG5cdFx0XHQgMikgUXVldWVpbmc6IFRoZSBsb2dpYyB0aGF0IHJ1bnMgb25jZSB0aGlzIGNhbGwgaGFzIHJlYWNoZWQgaXRzIHBvaW50IG9mIGV4ZWN1dGlvbiBpbiB0aGUgZWxlbWVudCdzICQucXVldWUoKSBzdGFjay4gTW9zdCBsb2dpYyBpcyBwbGFjZWQgaGVyZSB0byBhdm9pZCByaXNraW5nIGl0IGJlY29taW5nIHN0YWxlLlxuXHRcdFx0IDMpIFB1c2hpbmc6IENvbnNvbGlkYXRpb24gb2YgdGhlIHR3ZWVuIGRhdGEgZm9sbG93ZWQgYnkgaXRzIHB1c2ggb250byB0aGUgZ2xvYmFsIGluLXByb2dyZXNzIGNhbGxzIGNvbnRhaW5lci5cblx0XHRcdCBgZWxlbWVudEFycmF5SW5kZXhgIGFsbG93cyBwYXNzaW5nIGluZGV4IG9mIHRoZSBlbGVtZW50IGluIHRoZSBvcmlnaW5hbCBhcnJheSB0byB2YWx1ZSBmdW5jdGlvbnMuXG5cdFx0XHQgSWYgYGVsZW1lbnRzSW5kZXhgIHdlcmUgdXNlZCBpbnN0ZWFkIHRoZSBpbmRleCB3b3VsZCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBlbGVtZW50cycgcGVyLWVsZW1lbnQgcXVldWUuXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQsIGVsZW1lbnRBcnJheUluZGV4KSB7XG5cblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IFBhcnQgSTogUHJlLVF1ZXVlaW5nXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IEVsZW1lbnQtV2lkZSBWYXJpYWJsZXNcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHR2YXIgLyogVGhlIHJ1bnRpbWUgb3B0cyBvYmplY3QgaXMgdGhlIGV4dGVuc2lvbiBvZiB0aGUgY3VycmVudCBjYWxsJ3Mgb3B0aW9ucyBhbmQgVmVsb2NpdHkncyBwYWdlLXdpZGUgb3B0aW9uIGRlZmF1bHRzLiAqL1xuXHRcdFx0XHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBWZWxvY2l0eS5kZWZhdWx0cywgb3B0aW9ucyksXG5cdFx0XHRcdFx0XHQvKiBBIGNvbnRhaW5lciBmb3IgdGhlIHByb2Nlc3NlZCBkYXRhIGFzc29jaWF0ZWQgd2l0aCBlYWNoIHByb3BlcnR5IGluIHRoZSBwcm9wZXJ0eU1hcC5cblx0XHRcdFx0XHRcdCAoRWFjaCBwcm9wZXJ0eSBpbiB0aGUgbWFwIHByb2R1Y2VzIGl0cyBvd24gXCJ0d2VlblwiLikgKi9cblx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lciA9IHt9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YTtcblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdCBFbGVtZW50IEluaXRcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRpZiAoRGF0YShlbGVtZW50KSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0VmVsb2NpdHkuaW5pdChlbGVtZW50KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IE9wdGlvbjogRGVsYXlcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHQvKiBTaW5jZSBxdWV1ZTpmYWxzZSBkb2Vzbid0IHJlc3BlY3QgdGhlIGl0ZW0ncyBleGlzdGluZyBxdWV1ZSwgd2UgYXZvaWQgaW5qZWN0aW5nIGl0cyBkZWxheSBoZXJlIChpdCdzIHNldCBsYXRlciBvbikuICovXG5cdFx0XHRcdC8qIE5vdGU6IFZlbG9jaXR5IHJvbGxzIGl0cyBvd24gZGVsYXkgZnVuY3Rpb24gc2luY2UgalF1ZXJ5IGRvZXNuJ3QgaGF2ZSBhIHV0aWxpdHkgYWxpYXMgZm9yICQuZm4uZGVsYXkoKVxuXHRcdFx0XHQgKGFuZCB0aHVzIHJlcXVpcmVzIGpRdWVyeSBlbGVtZW50IGNyZWF0aW9uLCB3aGljaCB3ZSBhdm9pZCBzaW5jZSBpdHMgb3ZlcmhlYWQgaW5jbHVkZXMgRE9NIHF1ZXJ5aW5nKS4gKi9cblx0XHRcdFx0aWYgKHBhcnNlRmxvYXQob3B0cy5kZWxheSkgJiYgb3B0cy5xdWV1ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHQkLnF1ZXVlKGVsZW1lbnQsIG9wdHMucXVldWUsIGZ1bmN0aW9uKG5leHQpIHtcblx0XHRcdFx0XHRcdC8qIFRoaXMgaXMgYSBmbGFnIHVzZWQgdG8gaW5kaWNhdGUgdG8gdGhlIHVwY29taW5nIGNvbXBsZXRlQ2FsbCgpIGZ1bmN0aW9uIHRoYXQgdGhpcyBxdWV1ZSBlbnRyeSB3YXMgaW5pdGlhdGVkIGJ5IFZlbG9jaXR5LiBTZWUgY29tcGxldGVDYWxsKCkgZm9yIGZ1cnRoZXIgZGV0YWlscy4gKi9cblx0XHRcdFx0XHRcdFZlbG9jaXR5LnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQvKiBUaGUgZW5zdWluZyBxdWV1ZSBpdGVtICh3aGljaCBpcyBhc3NpZ25lZCB0byB0aGUgXCJuZXh0XCIgYXJndW1lbnQgdGhhdCAkLnF1ZXVlKCkgYXV0b21hdGljYWxseSBwYXNzZXMgaW4pIHdpbGwgYmUgdHJpZ2dlcmVkIGFmdGVyIGEgc2V0VGltZW91dCBkZWxheS5cblx0XHRcdFx0XHRcdCBUaGUgc2V0VGltZW91dCBpcyBzdG9yZWQgc28gdGhhdCBpdCBjYW4gYmUgc3ViamVjdGVkIHRvIGNsZWFyVGltZW91dCgpIGlmIHRoaXMgYW5pbWF0aW9uIGlzIHByZW1hdHVyZWx5IHN0b3BwZWQgdmlhIFZlbG9jaXR5J3MgXCJzdG9wXCIgY29tbWFuZCwgYW5kXG5cdFx0XHRcdFx0XHQgZGVsYXlCZWdpbi9kZWxheVRpbWUgaXMgdXNlZCB0byBlbnN1cmUgd2UgY2FuIFwicGF1c2VcIiBhbmQgXCJyZXN1bWVcIiBhIHR3ZWVuIHRoYXQgaXMgc3RpbGwgbWlkLWRlbGF5LiAqL1xuXG5cdFx0XHRcdFx0XHQvKiBUZW1wb3JhcmlseSBzdG9yZSBkZWxheWVkIGVsZW1lbnRzIHRvIGZhY2lsaXRlIGFjY2VzcyBmb3IgZ2xvYmFsIHBhdXNlL3Jlc3VtZSAqL1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxJbmRleCA9IFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50cy5jb3VudCsrO1xuXHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzW2NhbGxJbmRleF0gPSBlbGVtZW50O1xuXG5cdFx0XHRcdFx0XHR2YXIgZGVsYXlDb21wbGV0ZSA9IChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogQ2xlYXIgdGhlIHRlbXBvcmFyeSBlbGVtZW50ICovXG5cdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzW2luZGV4XSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogRmluYWxseSwgaXNzdWUgdGhlIGNhbGwgKi9cblx0XHRcdFx0XHRcdFx0XHRuZXh0KCk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KShjYWxsSW5kZXgpO1xuXG5cblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXlCZWdpbiA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLmRlbGF5ID0gcGFyc2VGbG9hdChvcHRzLmRlbGF5KTtcblx0XHRcdFx0XHRcdERhdGEoZWxlbWVudCkuZGVsYXlUaW1lciA9IHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dDogc2V0VGltZW91dChuZXh0LCBwYXJzZUZsb2F0KG9wdHMuZGVsYXkpKSxcblx0XHRcdFx0XHRcdFx0bmV4dDogZGVsYXlDb21wbGV0ZVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IE9wdGlvbjogRHVyYXRpb25cblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHQvKiBTdXBwb3J0IGZvciBqUXVlcnkncyBuYW1lZCBkdXJhdGlvbnMuICovXG5cdFx0XHRcdHN3aXRjaCAob3B0cy5kdXJhdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHRjYXNlIFwiZmFzdFwiOlxuXHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiA9IDIwMDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBcIm5vcm1hbFwiOlxuXHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiA9IERVUkFUSU9OX0RFRkFVTFQ7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgXCJzbG93XCI6XG5cdFx0XHRcdFx0XHRvcHRzLmR1cmF0aW9uID0gNjAwO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0LyogUmVtb3ZlIHRoZSBwb3RlbnRpYWwgXCJtc1wiIHN1ZmZpeCBhbmQgZGVmYXVsdCB0byAxIGlmIHRoZSB1c2VyIGlzIGF0dGVtcHRpbmcgdG8gc2V0IGEgZHVyYXRpb24gb2YgMCAoaW4gb3JkZXIgdG8gcHJvZHVjZSBhbiBpbW1lZGlhdGUgc3R5bGUgY2hhbmdlKS4gKi9cblx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSBwYXJzZUZsb2F0KG9wdHMuZHVyYXRpb24pIHx8IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdCBHbG9iYWwgT3B0aW9uOiBNb2NrXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0aWYgKFZlbG9jaXR5Lm1vY2sgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0LyogSW4gbW9jayBtb2RlLCBhbGwgYW5pbWF0aW9ucyBhcmUgZm9yY2VkIHRvIDFtcyBzbyB0aGF0IHRoZXkgb2NjdXIgaW1tZWRpYXRlbHkgdXBvbiB0aGUgbmV4dCByQUYgdGljay5cblx0XHRcdFx0XHQgQWx0ZXJuYXRpdmVseSwgYSBtdWx0aXBsaWVyIGNhbiBiZSBwYXNzZWQgaW4gdG8gdGltZSByZW1hcCBhbGwgZGVsYXlzIGFuZCBkdXJhdGlvbnMuICovXG5cdFx0XHRcdFx0aWYgKFZlbG9jaXR5Lm1vY2sgPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdG9wdHMuZHVyYXRpb24gPSBvcHRzLmRlbGF5ID0gMTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b3B0cy5kdXJhdGlvbiAqPSBwYXJzZUZsb2F0KFZlbG9jaXR5Lm1vY2spIHx8IDE7XG5cdFx0XHRcdFx0XHRvcHRzLmRlbGF5ICo9IHBhcnNlRmxvYXQoVmVsb2NpdHkubW9jaykgfHwgMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHQgT3B0aW9uOiBFYXNpbmdcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0b3B0cy5lYXNpbmcgPSBnZXRFYXNpbmcob3B0cy5lYXNpbmcsIG9wdHMuZHVyYXRpb24pO1xuXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdCBPcHRpb246IENhbGxiYWNrc1xuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHQvKiBDYWxsYmFja3MgbXVzdCBmdW5jdGlvbnMuIE90aGVyd2lzZSwgZGVmYXVsdCB0byBudWxsLiAqL1xuXHRcdFx0XHRpZiAob3B0cy5iZWdpbiAmJiAhVHlwZS5pc0Z1bmN0aW9uKG9wdHMuYmVnaW4pKSB7XG5cdFx0XHRcdFx0b3B0cy5iZWdpbiA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob3B0cy5wcm9ncmVzcyAmJiAhVHlwZS5pc0Z1bmN0aW9uKG9wdHMucHJvZ3Jlc3MpKSB7XG5cdFx0XHRcdFx0b3B0cy5wcm9ncmVzcyA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob3B0cy5jb21wbGV0ZSAmJiAhVHlwZS5pc0Z1bmN0aW9uKG9wdHMuY29tcGxldGUpKSB7XG5cdFx0XHRcdFx0b3B0cy5jb21wbGV0ZSA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdCBPcHRpb246IERpc3BsYXkgJiBWaXNpYmlsaXR5XG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0LyogUmVmZXIgdG8gVmVsb2NpdHkncyBkb2N1bWVudGF0aW9uIChWZWxvY2l0eUpTLm9yZy8jZGlzcGxheUFuZFZpc2liaWxpdHkpIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBkaXNwbGF5IGFuZCB2aXNpYmlsaXR5IG9wdGlvbnMnIGJlaGF2aW9yLiAqL1xuXHRcdFx0XHQvKiBOb3RlOiBXZSBzdHJpY3RseSBjaGVjayBmb3IgdW5kZWZpbmVkIGluc3RlYWQgb2YgZmFsc2luZXNzIGJlY2F1c2UgZGlzcGxheSBhY2NlcHRzIGFuIGVtcHR5IHN0cmluZyB2YWx1ZS4gKi9cblx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG9wdHMuZGlzcGxheSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdG9wdHMuZGlzcGxheSA9IG9wdHMuZGlzcGxheS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0XHQvKiBVc2VycyBjYW4gcGFzcyBpbiBhIHNwZWNpYWwgXCJhdXRvXCIgdmFsdWUgdG8gaW5zdHJ1Y3QgVmVsb2NpdHkgdG8gc2V0IHRoZSBlbGVtZW50IHRvIGl0cyBkZWZhdWx0IGRpc3BsYXkgdmFsdWUuICovXG5cdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSA9PT0gXCJhdXRvXCIpIHtcblx0XHRcdFx0XHRcdG9wdHMuZGlzcGxheSA9IFZlbG9jaXR5LkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZWxlbWVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG9wdHMudmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIG9wdHMudmlzaWJpbGl0eSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdG9wdHMudmlzaWJpbGl0eSA9IG9wdHMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHQgT3B0aW9uOiBtb2JpbGVIQVxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHQvKiBXaGVuIHNldCB0byB0cnVlLCBhbmQgaWYgdGhpcyBpcyBhIG1vYmlsZSBkZXZpY2UsIG1vYmlsZUhBIGF1dG9tYXRpY2FsbHkgZW5hYmxlcyBoYXJkd2FyZSBhY2NlbGVyYXRpb24gKHZpYSBhIG51bGwgdHJhbnNmb3JtIGhhY2spXG5cdFx0XHRcdCBvbiBhbmltYXRpbmcgZWxlbWVudHMuIEhBIGlzIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudCBhdCB0aGUgY29tcGxldGlvbiBvZiBpdHMgYW5pbWF0aW9uLiAqL1xuXHRcdFx0XHQvKiBOb3RlOiBBbmRyb2lkIEdpbmdlcmJyZWFkIGRvZXNuJ3Qgc3VwcG9ydCBIQS4gSWYgYSBudWxsIHRyYW5zZm9ybSBoYWNrIChtb2JpbGVIQSkgaXMgaW4gZmFjdCBzZXQsIGl0IHdpbGwgcHJldmVudCBvdGhlciB0cmFuZm9ybSBzdWJwcm9wZXJ0aWVzIGZyb20gdGFraW5nIGVmZmVjdC4gKi9cblx0XHRcdFx0LyogTm90ZTogWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIHVzZSBvZiBtb2JpbGVIQSBpbiBWZWxvY2l0eSdzIGRvY3VtZW50YXRpb246IFZlbG9jaXR5SlMub3JnLyNtb2JpbGVIQS4gKi9cblx0XHRcdFx0b3B0cy5tb2JpbGVIQSA9IChvcHRzLm1vYmlsZUhBICYmIFZlbG9jaXR5LlN0YXRlLmlzTW9iaWxlICYmICFWZWxvY2l0eS5TdGF0ZS5pc0dpbmdlcmJyZWFkKTtcblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IFBhcnQgSUk6IFF1ZXVlaW5nXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHQvKiBXaGVuIGEgc2V0IG9mIGVsZW1lbnRzIGlzIHRhcmdldGVkIGJ5IGEgVmVsb2NpdHkgY2FsbCwgdGhlIHNldCBpcyBicm9rZW4gdXAgYW5kIGVhY2ggZWxlbWVudCBoYXMgdGhlIGN1cnJlbnQgVmVsb2NpdHkgY2FsbCBpbmRpdmlkdWFsbHkgcXVldWVkIG9udG8gaXQuXG5cdFx0XHRcdCBJbiB0aGlzIHdheSwgZWFjaCBlbGVtZW50J3MgZXhpc3RpbmcgcXVldWUgaXMgcmVzcGVjdGVkOyBzb21lIGVsZW1lbnRzIG1heSBhbHJlYWR5IGJlIGFuaW1hdGluZyBhbmQgYWNjb3JkaW5nbHkgc2hvdWxkIG5vdCBoYXZlIHRoaXMgY3VycmVudCBWZWxvY2l0eSBjYWxsIHRyaWdnZXJlZCBpbW1lZGlhdGVseS4gKi9cblx0XHRcdFx0LyogSW4gZWFjaCBxdWV1ZSwgdHdlZW4gZGF0YSBpcyBwcm9jZXNzZWQgZm9yIGVhY2ggYW5pbWF0aW5nIHByb3BlcnR5IHRoZW4gcHVzaGVkIG9udG8gdGhlIGNhbGwtd2lkZSBjYWxscyBhcnJheS4gV2hlbiB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBzZXQgaGFzIGhhZCBpdHMgdHdlZW5zIHByb2Nlc3NlZCxcblx0XHRcdFx0IHRoZSBjYWxsIGFycmF5IGlzIHB1c2hlZCB0byBWZWxvY2l0eS5TdGF0ZS5jYWxscyBmb3IgbGl2ZSBwcm9jZXNzaW5nIGJ5IHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGljay4gKi9cblx0XHRcdFx0ZnVuY3Rpb24gYnVpbGRRdWV1ZShuZXh0KSB7XG5cdFx0XHRcdFx0dmFyIGRhdGEsIGxhc3RUd2VlbnNDb250YWluZXI7XG5cblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdCBPcHRpb246IEJlZ2luXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHQvKiBUaGUgYmVnaW4gY2FsbGJhY2sgaXMgZmlyZWQgb25jZSBwZXIgY2FsbCAtLSBub3Qgb25jZSBwZXIgZWxlbWVuZXQgLS0gYW5kIGlzIHBhc3NlZCB0aGUgZnVsbCByYXcgRE9NIGVsZW1lbnQgc2V0IGFzIGJvdGggaXRzIGNvbnRleHQgYW5kIGl0cyBmaXJzdCBhcmd1bWVudC4gKi9cblx0XHRcdFx0XHRpZiAob3B0cy5iZWdpbiAmJiBlbGVtZW50c0luZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0XHQvKiBXZSB0aHJvdyBjYWxsYmFja3MgaW4gYSBzZXRUaW1lb3V0IHNvIHRoYXQgdGhyb3duIGVycm9ycyBkb24ndCBoYWx0IHRoZSBleGVjdXRpb24gb2YgVmVsb2NpdHkgaXRzZWxmLiAqL1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0b3B0cy5iZWdpbi5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHRcdFx0XHR9LCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHQgVHdlZW4gRGF0YSBDb25zdHJ1Y3Rpb24gKGZvciBTY3JvbGwpXG5cdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0LyogTm90ZTogSW4gb3JkZXIgdG8gYmUgc3ViamVjdGVkIHRvIGNoYWluaW5nIGFuZCBhbmltYXRpb24gb3B0aW9ucywgc2Nyb2xsJ3MgdHdlZW5pbmcgaXMgcm91dGVkIHRocm91Z2ggVmVsb2NpdHkgYXMgaWYgaXQgd2VyZSBhIHN0YW5kYXJkIENTUyBwcm9wZXJ0eSBhbmltYXRpb24uICovXG5cdFx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gXCJzY3JvbGxcIikge1xuXHRcdFx0XHRcdFx0LyogVGhlIHNjcm9sbCBhY3Rpb24gdW5pcXVlbHkgdGFrZXMgYW4gb3B0aW9uYWwgXCJvZmZzZXRcIiBvcHRpb24gLS0gc3BlY2lmaWVkIGluIHBpeGVscyAtLSB0aGF0IG9mZnNldHMgdGhlIHRhcmdldGVkIHNjcm9sbCBwb3NpdGlvbi4gKi9cblx0XHRcdFx0XHRcdHZhciBzY3JvbGxEaXJlY3Rpb24gPSAoL154JC9pLnRlc3Qob3B0cy5heGlzKSA/IFwiTGVmdFwiIDogXCJUb3BcIiksXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsT2Zmc2V0ID0gcGFyc2VGbG9hdChvcHRzLm9mZnNldCkgfHwgMCxcblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zaXRpb25DdXJyZW50QWx0ZXJuYXRlLFxuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uRW5kO1xuXG5cdFx0XHRcdFx0XHQvKiBTY3JvbGwgYWxzbyB1bmlxdWVseSB0YWtlcyBhbiBvcHRpb25hbCBcImNvbnRhaW5lclwiIG9wdGlvbiwgd2hpY2ggaW5kaWNhdGVzIHRoZSBwYXJlbnQgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZCAtLVxuXHRcdFx0XHRcdFx0IGFzIG9wcG9zZWQgdG8gdGhlIGJyb3dzZXIgd2luZG93IGl0c2VsZi4gVGhpcyBpcyB1c2VmdWwgZm9yIHNjcm9sbGluZyB0b3dhcmQgYW4gZWxlbWVudCB0aGF0J3MgaW5zaWRlIGFuIG92ZXJmbG93aW5nIHBhcmVudCBlbGVtZW50LiAqL1xuXHRcdFx0XHRcdFx0aWYgKG9wdHMuY29udGFpbmVyKSB7XG5cdFx0XHRcdFx0XHRcdC8qIEVuc3VyZSB0aGF0IGVpdGhlciBhIGpRdWVyeSBvYmplY3Qgb3IgYSByYXcgRE9NIGVsZW1lbnQgd2FzIHBhc3NlZCBpbi4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNXcmFwcGVkKG9wdHMuY29udGFpbmVyKSB8fCBUeXBlLmlzTm9kZShvcHRzLmNvbnRhaW5lcikpIHtcblx0XHRcdFx0XHRcdFx0XHQvKiBFeHRyYWN0IHRoZSByYXcgRE9NIGVsZW1lbnQgZnJvbSB0aGUgalF1ZXJ5IHdyYXBwZXIuICovXG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5jb250YWluZXIgPSBvcHRzLmNvbnRhaW5lclswXSB8fCBvcHRzLmNvbnRhaW5lcjtcblx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBVbmxpa2Ugb3RoZXIgcHJvcGVydGllcyBpbiBWZWxvY2l0eSwgdGhlIGJyb3dzZXIncyBzY3JvbGwgcG9zaXRpb24gaXMgbmV2ZXIgY2FjaGVkIHNpbmNlIGl0IHNvIGZyZXF1ZW50bHkgY2hhbmdlc1xuXHRcdFx0XHRcdFx0XHRcdCAoZHVlIHRvIHRoZSB1c2VyJ3MgbmF0dXJhbCBpbnRlcmFjdGlvbiB3aXRoIHRoZSBwYWdlKS4gKi9cblx0XHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkN1cnJlbnQgPSBvcHRzLmNvbnRhaW5lcltcInNjcm9sbFwiICsgc2Nyb2xsRGlyZWN0aW9uXTsgLyogR0VUICovXG5cblx0XHRcdFx0XHRcdFx0XHQvKiAkLnBvc2l0aW9uKCkgdmFsdWVzIGFyZSByZWxhdGl2ZSB0byB0aGUgY29udGFpbmVyJ3MgY3VycmVudGx5IHZpZXdhYmxlIGFyZWEgKHdpdGhvdXQgdGFraW5nIGludG8gYWNjb3VudCB0aGUgY29udGFpbmVyJ3MgdHJ1ZSBkaW1lbnNpb25zXG5cdFx0XHRcdFx0XHRcdFx0IC0tIHNheSwgZm9yIGV4YW1wbGUsIGlmIHRoZSBjb250YWluZXIgd2FzIG5vdCBvdmVyZmxvd2luZykuIFRodXMsIHRoZSBzY3JvbGwgZW5kIHZhbHVlIGlzIHRoZSBzdW0gb2YgdGhlIGNoaWxkIGVsZW1lbnQncyBwb3NpdGlvbiAqYW5kKlxuXHRcdFx0XHRcdFx0XHRcdCB0aGUgc2Nyb2xsIGNvbnRhaW5lcidzIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLiAqL1xuXHRcdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uRW5kID0gKHNjcm9sbFBvc2l0aW9uQ3VycmVudCArICQoZWxlbWVudCkucG9zaXRpb24oKVtzY3JvbGxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKV0pICsgc2Nyb2xsT2Zmc2V0OyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdFx0XHQvKiBJZiBhIHZhbHVlIG90aGVyIHRoYW4gYSBqUXVlcnkgb2JqZWN0IG9yIGEgcmF3IERPTSBlbGVtZW50IHdhcyBwYXNzZWQgaW4sIGRlZmF1bHQgdG8gbnVsbCBzbyB0aGF0IHRoaXMgb3B0aW9uIGlzIGlnbm9yZWQuICovXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0cy5jb250YWluZXIgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgd2luZG93IGl0c2VsZiBpcyBiZWluZyBzY3JvbGxlZCAtLSBub3QgYSBjb250YWluaW5nIGVsZW1lbnQgLS0gcGVyZm9ybSBhIGxpdmUgc2Nyb2xsIHBvc2l0aW9uIGxvb2t1cCB1c2luZ1xuXHRcdFx0XHRcdFx0XHQgdGhlIGFwcHJvcHJpYXRlIGNhY2hlZCBwcm9wZXJ0eSBuYW1lcyAod2hpY2ggZGlmZmVyIGJhc2VkIG9uIGJyb3dzZXIgdHlwZSkuICovXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uQ3VycmVudCA9IFZlbG9jaXR5LlN0YXRlLnNjcm9sbEFuY2hvcltWZWxvY2l0eS5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIgKyBzY3JvbGxEaXJlY3Rpb25dXTsgLyogR0VUICovXG5cdFx0XHRcdFx0XHRcdC8qIFdoZW4gc2Nyb2xsaW5nIHRoZSBicm93c2VyIHdpbmRvdywgY2FjaGUgdGhlIGFsdGVybmF0ZSBheGlzJ3MgY3VycmVudCB2YWx1ZSBzaW5jZSB3aW5kb3cuc2Nyb2xsVG8oKSBkb2Vzbid0IGxldCB1cyBjaGFuZ2Ugb25seSBvbmUgdmFsdWUgYXQgYSB0aW1lLiAqL1xuXHRcdFx0XHRcdFx0XHRzY3JvbGxQb3NpdGlvbkN1cnJlbnRBbHRlcm5hdGUgPSBWZWxvY2l0eS5TdGF0ZS5zY3JvbGxBbmNob3JbVmVsb2NpdHkuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiICsgKHNjcm9sbERpcmVjdGlvbiA9PT0gXCJMZWZ0XCIgPyBcIlRvcFwiIDogXCJMZWZ0XCIpXV07IC8qIEdFVCAqL1xuXG5cdFx0XHRcdFx0XHRcdC8qIFVubGlrZSAkLnBvc2l0aW9uKCksICQub2Zmc2V0KCkgdmFsdWVzIGFyZSByZWxhdGl2ZSB0byB0aGUgYnJvd3NlciB3aW5kb3cncyB0cnVlIGRpbWVuc2lvbnMgLS0gbm90IG1lcmVseSBpdHMgY3VycmVudGx5IHZpZXdhYmxlIGFyZWEgLS1cblx0XHRcdFx0XHRcdFx0IGFuZCB0aGVyZWZvcmUgZW5kIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBjb21wb3VuZGVkIG9udG8gY3VycmVudCB2YWx1ZXMuICovXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvc2l0aW9uRW5kID0gJChlbGVtZW50KS5vZmZzZXQoKVtzY3JvbGxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKV0gKyBzY3JvbGxPZmZzZXQ7IC8qIEdFVCAqL1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBTaW5jZSB0aGVyZSdzIG9ubHkgb25lIGZvcm1hdCB0aGF0IHNjcm9sbCdzIGFzc29jaWF0ZWQgdHdlZW5zQ29udGFpbmVyIGNhbiB0YWtlLCB3ZSBjcmVhdGUgaXQgbWFudWFsbHkuICovXG5cdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXIgPSB7XG5cdFx0XHRcdFx0XHRcdHNjcm9sbDoge1xuXHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlOiBzY3JvbGxQb3NpdGlvbkN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlOiBzY3JvbGxQb3NpdGlvbkN1cnJlbnQsXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWU6IHNjcm9sbFBvc2l0aW9uRW5kLFxuXHRcdFx0XHRcdFx0XHRcdHVuaXRUeXBlOiBcIlwiLFxuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogb3B0cy5lYXNpbmcsXG5cdFx0XHRcdFx0XHRcdFx0c2Nyb2xsRGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFpbmVyOiBvcHRzLmNvbnRhaW5lcixcblx0XHRcdFx0XHRcdFx0XHRcdGRpcmVjdGlvbjogc2Nyb2xsRGlyZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0ZXJuYXRlVmFsdWU6IHNjcm9sbFBvc2l0aW9uQ3VycmVudEFsdGVybmF0ZVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudDogZWxlbWVudFxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIiwgdHdlZW5zQ29udGFpbmVyLnNjcm9sbCwgZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdCBUd2VlbiBEYXRhIENvbnN0cnVjdGlvbiAoZm9yIFJldmVyc2UpXG5cdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHQvKiBSZXZlcnNlIGFjdHMgbGlrZSBhIFwic3RhcnRcIiBhY3Rpb24gaW4gdGhhdCBhIHByb3BlcnR5IG1hcCBpcyBhbmltYXRlZCB0b3dhcmQuIFRoZSBvbmx5IGRpZmZlcmVuY2UgaXNcblx0XHRcdFx0XHRcdCB0aGF0IHRoZSBwcm9wZXJ0eSBtYXAgdXNlZCBmb3IgcmV2ZXJzZSBpcyB0aGUgaW52ZXJzZSBvZiB0aGUgbWFwIHVzZWQgaW4gdGhlIHByZXZpb3VzIGNhbGwuIFRodXMsIHdlIG1hbmlwdWxhdGVcblx0XHRcdFx0XHRcdCB0aGUgcHJldmlvdXMgY2FsbCB0byBjb25zdHJ1Y3Qgb3VyIG5ldyBtYXA6IHVzZSB0aGUgcHJldmlvdXMgbWFwJ3MgZW5kIHZhbHVlcyBhcyBvdXIgbmV3IG1hcCdzIHN0YXJ0IHZhbHVlcy4gQ29weSBvdmVyIGFsbCBvdGhlciBkYXRhLiAqL1xuXHRcdFx0XHRcdFx0LyogTm90ZTogUmV2ZXJzZSBjYW4gYmUgZGlyZWN0bHkgY2FsbGVkIHZpYSB0aGUgXCJyZXZlcnNlXCIgcGFyYW1ldGVyLCBvciBpdCBjYW4gYmUgaW5kaXJlY3RseSB0cmlnZ2VyZWQgdmlhIHRoZSBsb29wIG9wdGlvbi4gKExvb3BzIGFyZSBjb21wb3NlZCBvZiBtdWx0aXBsZSByZXZlcnNlcy4pICovXG5cdFx0XHRcdFx0XHQvKiBOb3RlOiBSZXZlcnNlIGNhbGxzIGRvIG5vdCBuZWVkIHRvIGJlIGNvbnNlY3V0aXZlbHkgY2hhaW5lZCBvbnRvIGEgY3VycmVudGx5LWFuaW1hdGluZyBlbGVtZW50IGluIG9yZGVyIHRvIG9wZXJhdGUgb24gY2FjaGVkIHZhbHVlcztcblx0XHRcdFx0XHRcdCB0aGVyZSBpcyBubyBoYXJtIHRvIHJldmVyc2UgYmVpbmcgY2FsbGVkIG9uIGEgcG90ZW50aWFsbHkgc3RhbGUgZGF0YSBjYWNoZSBzaW5jZSByZXZlcnNlJ3MgYmVoYXZpb3IgaXMgc2ltcGx5IGRlZmluZWRcblx0XHRcdFx0XHRcdCBhcyByZXZlcnRpbmcgdG8gdGhlIGVsZW1lbnQncyB2YWx1ZXMgYXMgdGhleSB3ZXJlIHByaW9yIHRvIHRoZSBwcmV2aW91cyAqVmVsb2NpdHkqIGNhbGwuICovXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmV2ZXJzZVwiKSB7XG5cdFx0XHRcdFx0XHRkYXRhID0gRGF0YShlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0LyogQWJvcnQgaWYgdGhlcmUgaXMgbm8gcHJpb3IgYW5pbWF0aW9uIGRhdGEgdG8gcmV2ZXJzZSB0by4gKi9cblx0XHRcdFx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghZGF0YS50d2VlbnNDb250YWluZXIpIHtcblx0XHRcdFx0XHRcdFx0LyogRGVxdWV1ZSB0aGUgZWxlbWVudCBzbyB0aGF0IHRoaXMgcXVldWUgZW50cnkgcmVsZWFzZXMgaXRzZWxmIGltbWVkaWF0ZWx5LCBhbGxvd2luZyBzdWJzZXF1ZW50IHF1ZXVlIGVudHJpZXMgdG8gcnVuLiAqL1xuXHRcdFx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbWVudCwgb3B0cy5xdWV1ZSk7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHQgT3B0aW9ucyBQYXJzaW5nXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGVsZW1lbnQgd2FzIGhpZGRlbiB2aWEgdGhlIGRpc3BsYXkgb3B0aW9uIGluIHRoZSBwcmV2aW91cyBjYWxsLFxuXHRcdFx0XHRcdFx0XHQgcmV2ZXJ0IGRpc3BsYXkgdG8gXCJhdXRvXCIgcHJpb3IgdG8gcmV2ZXJzYWwgc28gdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGFnYWluLiAqL1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5vcHRzLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5vcHRzLmRpc3BsYXkgPSBcImF1dG9cIjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLm9wdHMudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuXHRcdFx0XHRcdFx0XHRcdGRhdGEub3B0cy52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvKiBJZiB0aGUgbG9vcCBvcHRpb24gd2FzIHNldCBpbiB0aGUgcHJldmlvdXMgY2FsbCwgZGlzYWJsZSBpdCBzbyB0aGF0IFwicmV2ZXJzZVwiIGNhbGxzIGFyZW4ndCByZWN1cnNpdmVseSBnZW5lcmF0ZWQuXG5cdFx0XHRcdFx0XHRcdCBGdXJ0aGVyLCByZW1vdmUgdGhlIHByZXZpb3VzIGNhbGwncyBjYWxsYmFjayBvcHRpb25zOyB0eXBpY2FsbHksIHVzZXJzIGRvIG5vdCB3YW50IHRoZXNlIHRvIGJlIHJlZmlyZWQuICovXG5cdFx0XHRcdFx0XHRcdGRhdGEub3B0cy5sb29wID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGRhdGEub3B0cy5iZWdpbiA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdGRhdGEub3B0cy5jb21wbGV0ZSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0LyogU2luY2Ugd2UncmUgZXh0ZW5kaW5nIGFuIG9wdHMgb2JqZWN0IHRoYXQgaGFzIGFscmVhZHkgYmVlbiBleHRlbmRlZCB3aXRoIHRoZSBkZWZhdWx0cyBvcHRpb25zIG9iamVjdCxcblx0XHRcdFx0XHRcdFx0IHdlIHJlbW92ZSBub24tZXhwbGljaXRseS1kZWZpbmVkIHByb3BlcnRpZXMgdGhhdCBhcmUgYXV0by1hc3NpZ25lZCB2YWx1ZXMuICovXG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5lYXNpbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgb3B0cy5lYXNpbmc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuZHVyYXRpb24pIHtcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgb3B0cy5kdXJhdGlvbjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8qIFRoZSBvcHRzIG9iamVjdCB1c2VkIGZvciByZXZlcnNhbCBpcyBhbiBleHRlbnNpb24gb2YgdGhlIG9wdGlvbnMgb2JqZWN0IG9wdGlvbmFsbHkgcGFzc2VkIGludG8gdGhpc1xuXHRcdFx0XHRcdFx0XHQgcmV2ZXJzZSBjYWxsIHBsdXMgdGhlIG9wdGlvbnMgdXNlZCBpbiB0aGUgcHJldmlvdXMgVmVsb2NpdHkgY2FsbC4gKi9cblx0XHRcdFx0XHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBkYXRhLm9wdHMsIG9wdHMpO1xuXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0XHRcdCBUd2VlbnMgQ29udGFpbmVyIFJlY29uc3RydWN0aW9uXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdC8qIENyZWF0ZSBhIGRlZXB5IGNvcHkgKGluZGljYXRlZCB2aWEgdGhlIHRydWUgZmxhZykgb2YgdGhlIHByZXZpb3VzIGNhbGwncyB0d2VlbnNDb250YWluZXIuICovXG5cdFx0XHRcdFx0XHRcdGxhc3RUd2VlbnNDb250YWluZXIgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGF0YSA/IGRhdGEudHdlZW5zQ29udGFpbmVyIDogbnVsbCk7XG5cblx0XHRcdFx0XHRcdFx0LyogTWFuaXB1bGF0ZSB0aGUgcHJldmlvdXMgdHdlZW5zQ29udGFpbmVyIGJ5IHJlcGxhY2luZyBpdHMgZW5kIHZhbHVlcyBhbmQgY3VycmVudFZhbHVlcyB3aXRoIGl0cyBzdGFydCB2YWx1ZXMuICovXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGxhc3RUd2VlbiBpbiBsYXN0VHdlZW5zQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogSW4gYWRkaXRpb24gdG8gdHdlZW4gZGF0YSwgdHdlZW5zQ29udGFpbmVycyBjb250YWluIGFuIGVsZW1lbnQgcHJvcGVydHkgdGhhdCB3ZSBpZ25vcmUgaGVyZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRpZiAobGFzdFR3ZWVuc0NvbnRhaW5lci5oYXNPd25Qcm9wZXJ0eShsYXN0VHdlZW4pICYmIGxhc3RUd2VlbiAhPT0gXCJlbGVtZW50XCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBsYXN0U3RhcnRWYWx1ZSA9IGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5zdGFydFZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uc3RhcnRWYWx1ZSA9IGxhc3RUd2VlbnNDb250YWluZXJbbGFzdFR3ZWVuXS5jdXJyZW50VmFsdWUgPSBsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uZW5kVmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYXN0VHdlZW5zQ29udGFpbmVyW2xhc3RUd2Vlbl0uZW5kVmFsdWUgPSBsYXN0U3RhcnRWYWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0LyogRWFzaW5nIGlzIHRoZSBvbmx5IG9wdGlvbiB0aGF0IGVtYmVkcyBpbnRvIHRoZSBpbmRpdmlkdWFsIHR3ZWVuIGRhdGEgKHNpbmNlIGl0IGNhbiBiZSBkZWZpbmVkIG9uIGEgcGVyLXByb3BlcnR5IGJhc2lzKS5cblx0XHRcdFx0XHRcdFx0XHRcdCBBY2NvcmRpbmdseSwgZXZlcnkgcHJvcGVydHkncyBlYXNpbmcgdmFsdWUgbXVzdCBiZSB1cGRhdGVkIHdoZW4gYW4gb3B0aW9ucyBvYmplY3QgaXMgcGFzc2VkIGluIHdpdGggYSByZXZlcnNlIGNhbGwuXG5cdFx0XHRcdFx0XHRcdFx0XHQgVGhlIHNpZGUgZWZmZWN0IG9mIHRoaXMgZXh0ZW5zaWJpbGl0eSBpcyB0aGF0IGFsbCBwZXItcHJvcGVydHkgZWFzaW5nIHZhbHVlcyBhcmUgZm9yY2VmdWxseSByZXNldCB0byB0aGUgbmV3IHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFUeXBlLmlzRW1wdHlPYmplY3Qob3B0aW9ucykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFzdFR3ZWVuc0NvbnRhaW5lcltsYXN0VHdlZW5dLmVhc2luZyA9IG9wdHMuZWFzaW5nO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIgKyBsYXN0VHdlZW4gKyBcIik6IFwiICsgSlNPTi5zdHJpbmdpZnkobGFzdFR3ZWVuc0NvbnRhaW5lcltsYXN0VHdlZW5dKSwgZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dHdlZW5zQ29udGFpbmVyID0gbGFzdFR3ZWVuc0NvbnRhaW5lcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0XHQgVHdlZW4gRGF0YSBDb25zdHJ1Y3Rpb24gKGZvciBTdGFydClcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInN0YXJ0XCIpIHtcblxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdCBWYWx1ZSBUcmFuc2ZlcnJpbmdcblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHQvKiBJZiB0aGlzIHF1ZXVlIGVudHJ5IGZvbGxvd3MgYSBwcmV2aW91cyBWZWxvY2l0eS1pbml0aWF0ZWQgcXVldWUgZW50cnkgKmFuZCogaWYgdGhpcyBlbnRyeSB3YXMgY3JlYXRlZFxuXHRcdFx0XHRcdFx0IHdoaWxlIHRoZSBlbGVtZW50IHdhcyBpbiB0aGUgcHJvY2VzcyBvZiBiZWluZyBhbmltYXRlZCBieSBWZWxvY2l0eSwgdGhlbiB0aGlzIGN1cnJlbnQgY2FsbCBpcyBzYWZlIHRvIHVzZVxuXHRcdFx0XHRcdFx0IHRoZSBlbmQgdmFsdWVzIGZyb20gdGhlIHByaW9yIGNhbGwgYXMgaXRzIHN0YXJ0IHZhbHVlcy4gVmVsb2NpdHkgYXR0ZW1wdHMgdG8gcGVyZm9ybSB0aGlzIHZhbHVlIHRyYW5zZmVyXG5cdFx0XHRcdFx0XHQgcHJvY2VzcyB3aGVuZXZlciBwb3NzaWJsZSBpbiBvcmRlciB0byBhdm9pZCByZXF1ZXJ5aW5nIHRoZSBET00uICovXG5cdFx0XHRcdFx0XHQvKiBJZiB2YWx1ZXMgYXJlbid0IHRyYW5zZmVycmVkIGZyb20gYSBwcmlvciBjYWxsIGFuZCBzdGFydCB2YWx1ZXMgd2VyZSBub3QgZm9yY2VmZWQgYnkgdGhlIHVzZXIgKG1vcmUgb24gdGhpcyBiZWxvdyksXG5cdFx0XHRcdFx0XHQgdGhlbiB0aGUgRE9NIGlzIHF1ZXJpZWQgZm9yIHRoZSBlbGVtZW50J3MgY3VycmVudCB2YWx1ZXMgYXMgYSBsYXN0IHJlc29ydC4gKi9cblx0XHRcdFx0XHRcdC8qIE5vdGU6IENvbnZlcnNlbHksIGFuaW1hdGlvbiByZXZlcnNhbCAoYW5kIGxvb3BpbmcpICphbHdheXMqIHBlcmZvcm0gaW50ZXItY2FsbCB2YWx1ZSB0cmFuc2ZlcnM7IHRoZXkgbmV2ZXIgcmVxdWVyeSB0aGUgRE9NLiAqL1xuXG5cdFx0XHRcdFx0XHRkYXRhID0gRGF0YShlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0LyogVGhlIHBlci1lbGVtZW50IGlzQW5pbWF0aW5nIGZsYWcgaXMgdXNlZCB0byBpbmRpY2F0ZSB3aGV0aGVyIGl0J3Mgc2FmZSAoaS5lLiB0aGUgZGF0YSBpc24ndCBzdGFsZSlcblx0XHRcdFx0XHRcdCB0byB0cmFuc2ZlciBvdmVyIGVuZCB2YWx1ZXMgdG8gdXNlIGFzIHN0YXJ0IHZhbHVlcy4gSWYgaXQncyBzZXQgdG8gdHJ1ZSBhbmQgdGhlcmUgaXMgYSBwcmV2aW91c1xuXHRcdFx0XHRcdFx0IFZlbG9jaXR5IGNhbGwgdG8gcHVsbCB2YWx1ZXMgZnJvbSwgZG8gc28uICovXG5cdFx0XHRcdFx0XHRpZiAoZGF0YSAmJiBkYXRhLnR3ZWVuc0NvbnRhaW5lciAmJiBkYXRhLmlzQW5pbWF0aW5nID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RUd2VlbnNDb250YWluZXIgPSBkYXRhLnR3ZWVuc0NvbnRhaW5lcjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0IFR3ZWVuIERhdGEgQ2FsY3VsYXRpb25cblx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdC8qIFRoaXMgZnVuY3Rpb24gcGFyc2VzIHByb3BlcnR5IGRhdGEgYW5kIGRlZmF1bHRzIGVuZFZhbHVlLCBlYXNpbmcsIGFuZCBzdGFydFZhbHVlIGFzIGFwcHJvcHJpYXRlLiAqL1xuXHRcdFx0XHRcdFx0LyogUHJvcGVydHkgbWFwIHZhbHVlcyBjYW4gZWl0aGVyIHRha2UgdGhlIGZvcm0gb2YgMSkgYSBzaW5nbGUgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBlbmQgdmFsdWUsXG5cdFx0XHRcdFx0XHQgb3IgMikgYW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgWyBlbmRWYWx1ZSwgWywgZWFzaW5nXSBbLCBzdGFydFZhbHVlXSBdLlxuXHRcdFx0XHRcdFx0IFRoZSBvcHRpb25hbCB0aGlyZCBwYXJhbWV0ZXIgaXMgYSBmb3JjZWZlZCBzdGFydFZhbHVlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiBxdWVyeWluZyB0aGUgRE9NIGZvclxuXHRcdFx0XHRcdFx0IHRoZSBlbGVtZW50J3MgY3VycmVudCB2YWx1ZS4gUmVhZCBWZWxvY2l0eSdzIGRvY21lbnRhdGlvbiB0byBsZWFybiBtb3JlIGFib3V0IGZvcmNlZmVlZGluZzogVmVsb2NpdHlKUy5vcmcvI2ZvcmNlZmVlZGluZyAqL1xuXHRcdFx0XHRcdFx0dmFyIHBhcnNlUHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlRGF0YSwgc2tpcFJlc29sdmluZ0Vhc2luZykge1xuXHRcdFx0XHRcdFx0XHR2YXIgZW5kVmFsdWUsIGVhc2luZywgc3RhcnRWYWx1ZTtcblxuXHRcdFx0XHRcdFx0XHQvKiBJZiB3ZSBoYXZlIGEgZnVuY3Rpb24gYXMgdGhlIG1haW4gYXJndW1lbnQgdGhlbiByZXNvbHZlIGl0IGZpcnN0LCBpbiBjYXNlIGl0IHJldHVybnMgYW4gYXJyYXkgdGhhdCBuZWVkcyB0byBiZSBzcGxpdCAqL1xuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKHZhbHVlRGF0YSkpIHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZURhdGEgPSB2YWx1ZURhdGEuY2FsbChlbGVtZW50LCBlbGVtZW50QXJyYXlJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyogSGFuZGxlIHRoZSBhcnJheSBmb3JtYXQsIHdoaWNoIGNhbiBiZSBzdHJ1Y3R1cmVkIGFzIG9uZSBvZiB0aHJlZSBwb3RlbnRpYWwgb3ZlcmxvYWRzOlxuXHRcdFx0XHRcdFx0XHQgQSkgWyBlbmRWYWx1ZSwgZWFzaW5nLCBzdGFydFZhbHVlIF0sIEIpIFsgZW5kVmFsdWUsIGVhc2luZyBdLCBvciBDKSBbIGVuZFZhbHVlLCBzdGFydFZhbHVlIF0gKi9cblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNBcnJheSh2YWx1ZURhdGEpKSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogZW5kVmFsdWUgaXMgYWx3YXlzIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheS4gRG9uJ3QgYm90aGVyIHZhbGlkYXRpbmcgZW5kVmFsdWUncyB2YWx1ZSBub3dcblx0XHRcdFx0XHRcdFx0XHQgc2luY2UgdGhlIGVuc3VpbmcgcHJvcGVydHkgY3ljbGluZyBsb2dpYyBkb2VzIHRoYXQuICovXG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSB2YWx1ZURhdGFbMF07XG5cblx0XHRcdFx0XHRcdFx0XHQvKiBUd28taXRlbSBhcnJheSBmb3JtYXQ6IElmIHRoZSBzZWNvbmQgaXRlbSBpcyBhIG51bWJlciwgZnVuY3Rpb24sIG9yIGhleCBzdHJpbmcsIHRyZWF0IGl0IGFzIGFcblx0XHRcdFx0XHRcdFx0XHQgc3RhcnQgdmFsdWUgc2luY2UgZWFzaW5ncyBjYW4gb25seSBiZSBub24taGV4IHN0cmluZ3Mgb3IgYXJyYXlzLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmICgoIVR5cGUuaXNBcnJheSh2YWx1ZURhdGFbMV0pICYmIC9eW1xcZC1dLy50ZXN0KHZhbHVlRGF0YVsxXSkpIHx8IFR5cGUuaXNGdW5jdGlvbih2YWx1ZURhdGFbMV0pIHx8IENTUy5SZWdFeC5pc0hleC50ZXN0KHZhbHVlRGF0YVsxXSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSB2YWx1ZURhdGFbMV07XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBUd28gb3IgdGhyZWUtaXRlbSBhcnJheTogSWYgdGhlIHNlY29uZCBpdGVtIGlzIGEgbm9uLWhleCBzdHJpbmcgZWFzaW5nIG5hbWUgb3IgYW4gYXJyYXksIHRyZWF0IGl0IGFzIGFuIGVhc2luZy4gKi9cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChUeXBlLmlzU3RyaW5nKHZhbHVlRGF0YVsxXSkgJiYgIUNTUy5SZWdFeC5pc0hleC50ZXN0KHZhbHVlRGF0YVsxXSkgJiYgVmVsb2NpdHkuRWFzaW5nc1t2YWx1ZURhdGFbMV1dKSB8fCBUeXBlLmlzQXJyYXkodmFsdWVEYXRhWzFdKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nID0gc2tpcFJlc29sdmluZ0Vhc2luZyA/IHZhbHVlRGF0YVsxXSA6IGdldEVhc2luZyh2YWx1ZURhdGFbMV0sIG9wdHMuZHVyYXRpb24pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBEb24ndCBib3RoZXIgdmFsaWRhdGluZyBzdGFydFZhbHVlJ3MgdmFsdWUgbm93IHNpbmNlIHRoZSBlbnN1aW5nIHByb3BlcnR5IGN5Y2xpbmcgbG9naWMgaW5oZXJlbnRseSBkb2VzIHRoYXQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gdmFsdWVEYXRhWzJdO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gdmFsdWVEYXRhWzFdIHx8IHZhbHVlRGF0YVsyXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0LyogSGFuZGxlIHRoZSBzaW5nbGUtdmFsdWUgZm9ybWF0LiAqL1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gdmFsdWVEYXRhO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyogRGVmYXVsdCB0byB0aGUgY2FsbCdzIGVhc2luZyBpZiBhIHBlci1wcm9wZXJ0eSBlYXNpbmcgdHlwZSB3YXMgbm90IGRlZmluZWQuICovXG5cdFx0XHRcdFx0XHRcdGlmICghc2tpcFJlc29sdmluZ0Vhc2luZykge1xuXHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IGVhc2luZyB8fCBvcHRzLmVhc2luZztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8qIElmIGZ1bmN0aW9ucyB3ZXJlIHBhc3NlZCBpbiBhcyB2YWx1ZXMsIHBhc3MgdGhlIGZ1bmN0aW9uIHRoZSBjdXJyZW50IGVsZW1lbnQgYXMgaXRzIGNvbnRleHQsXG5cdFx0XHRcdFx0XHRcdCBwbHVzIHRoZSBlbGVtZW50J3MgaW5kZXggYW5kIHRoZSBlbGVtZW50IHNldCdzIHNpemUgYXMgYXJndW1lbnRzLiBUaGVuLCBhc3NpZ24gdGhlIHJldHVybmVkIHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRpZiAoVHlwZS5pc0Z1bmN0aW9uKGVuZFZhbHVlKSkge1xuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gZW5kVmFsdWUuY2FsbChlbGVtZW50LCBlbGVtZW50QXJyYXlJbmRleCwgZWxlbWVudHNMZW5ndGgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNGdW5jdGlvbihzdGFydFZhbHVlKSkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlLmNhbGwoZWxlbWVudCwgZWxlbWVudEFycmF5SW5kZXgsIGVsZW1lbnRzTGVuZ3RoKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8qIEFsbG93IHN0YXJ0VmFsdWUgdG8gYmUgbGVmdCBhcyB1bmRlZmluZWQgdG8gaW5kaWNhdGUgdG8gdGhlIGVuc3VpbmcgY29kZSB0aGF0IGl0cyB2YWx1ZSB3YXMgbm90IGZvcmNlZmVkLiAqL1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gW2VuZFZhbHVlIHx8IDAsIGVhc2luZywgc3RhcnRWYWx1ZV07XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHR2YXIgZml4UHJvcGVydHlWYWx1ZSA9IGZ1bmN0aW9uKHByb3BlcnR5LCB2YWx1ZURhdGEpIHtcblx0XHRcdFx0XHRcdFx0LyogSW4gY2FzZSB0aGlzIHByb3BlcnR5IGlzIGEgaG9vaywgdGhlcmUgYXJlIGNpcmN1bXN0YW5jZXMgd2hlcmUgd2Ugd2lsbCBpbnRlbmQgdG8gd29yayBvbiB0aGUgaG9vaydzIHJvb3QgcHJvcGVydHkgYW5kIG5vdCB0aGUgaG9va2VkIHN1YnByb3BlcnR5LiAqL1xuXHRcdFx0XHRcdFx0XHR2YXIgcm9vdFByb3BlcnR5ID0gQ1NTLkhvb2tzLmdldFJvb3QocHJvcGVydHkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdC8qIFBhcnNlIG91dCBlbmRWYWx1ZSwgZWFzaW5nLCBhbmQgc3RhcnRWYWx1ZSBmcm9tIHRoZSBwcm9wZXJ0eSdzIGRhdGEuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHZhbHVlRGF0YVswXSxcblx0XHRcdFx0XHRcdFx0XHRcdGVhc2luZyA9IHZhbHVlRGF0YVsxXSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSB2YWx1ZURhdGFbMl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuO1xuXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHQgU3RhcnQgVmFsdWUgU291cmNpbmdcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdC8qIE90aGVyIHRoYW4gZm9yIHRoZSBkdW1teSB0d2VlbiBwcm9wZXJ0eSwgcHJvcGVydGllcyB0aGF0IGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyIChhbmQgZG8gbm90IGhhdmUgYW4gYXNzb2NpYXRlZCBub3JtYWxpemF0aW9uKSB3aWxsXG5cdFx0XHRcdFx0XHRcdCBpbmhlcmVudGx5IHByb2R1Y2Ugbm8gc3R5bGUgY2hhbmdlcyB3aGVuIHNldCwgc28gdGhleSBhcmUgc2tpcHBlZCBpbiBvcmRlciB0byBkZWNyZWFzZSBhbmltYXRpb24gdGljayBvdmVyaGVhZC5cblx0XHRcdFx0XHRcdFx0IFByb3BlcnR5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZCB2aWEgcHJlZml4Q2hlY2soKSwgd2hpY2ggcmV0dXJucyBhIGZhbHNlIGZsYWcgd2hlbiBubyBzdXBwb3J0ZWQgaXMgZGV0ZWN0ZWQuICovXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFNpbmNlIFNWRyBlbGVtZW50cyBoYXZlIHNvbWUgb2YgdGhlaXIgcHJvcGVydGllcyBkaXJlY3RseSBhcHBsaWVkIGFzIEhUTUwgYXR0cmlidXRlcyxcblx0XHRcdFx0XHRcdFx0IHRoZXJlIGlzIG5vIHdheSB0byBjaGVjayBmb3IgdGhlaXIgZXhwbGljaXQgYnJvd3NlciBzdXBwb3J0LCBhbmQgc28gd2Ugc2tpcCBza2lwIHRoaXMgY2hlY2sgZm9yIHRoZW0uICovXG5cdFx0XHRcdFx0XHRcdGlmICgoIWRhdGEgfHwgIWRhdGEuaXNTVkcpICYmIHJvb3RQcm9wZXJ0eSAhPT0gXCJ0d2VlblwiICYmIENTUy5OYW1lcy5wcmVmaXhDaGVjayhyb290UHJvcGVydHkpWzFdID09PSBmYWxzZSAmJiBDU1MuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyb290UHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgW1wiICsgcm9vdFByb3BlcnR5ICsgXCJdIGR1ZSB0byBhIGxhY2sgb2YgYnJvd3NlciBzdXBwb3J0LlwiKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGRpc3BsYXkgb3B0aW9uIGlzIGJlaW5nIHNldCB0byBhIG5vbi1cIm5vbmVcIiAoZS5nLiBcImJsb2NrXCIpIGFuZCBvcGFjaXR5IChmaWx0ZXIgb24gSUU8PTgpIGlzIGJlaW5nXG5cdFx0XHRcdFx0XHRcdCBhbmltYXRlZCB0byBhbiBlbmRWYWx1ZSBvZiBub24temVybywgdGhlIHVzZXIncyBpbnRlbnRpb24gaXMgdG8gZmFkZSBpbiBmcm9tIGludmlzaWJsZSwgdGh1cyB3ZSBmb3JjZWZlZWQgb3BhY2l0eVxuXHRcdFx0XHRcdFx0XHQgYSBzdGFydFZhbHVlIG9mIDAgaWYgaXRzIHN0YXJ0VmFsdWUgaGFzbid0IGFscmVhZHkgYmVlbiBzb3VyY2VkIGJ5IHZhbHVlIHRyYW5zZmVycmluZyBvciBwcmlvciBmb3JjZWZlZWRpbmcuICovXG5cdFx0XHRcdFx0XHRcdGlmICgoKG9wdHMuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG9wdHMuZGlzcGxheSAhPT0gbnVsbCAmJiBvcHRzLmRpc3BsYXkgIT09IFwibm9uZVwiKSB8fCAob3B0cy52aXNpYmlsaXR5ICE9PSB1bmRlZmluZWQgJiYgb3B0cy52aXNpYmlsaXR5ICE9PSBcImhpZGRlblwiKSkgJiYgL29wYWNpdHl8ZmlsdGVyLy50ZXN0KHByb3BlcnR5KSAmJiAhc3RhcnRWYWx1ZSAmJiBlbmRWYWx1ZSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyogSWYgdmFsdWVzIGhhdmUgYmVlbiB0cmFuc2ZlcnJlZCBmcm9tIHRoZSBwcmV2aW91cyBWZWxvY2l0eSBjYWxsLCBleHRyYWN0IHRoZSBlbmRWYWx1ZSBhbmQgcm9vdFByb3BlcnR5VmFsdWVcblx0XHRcdFx0XHRcdFx0IGZvciBhbGwgb2YgdGhlIGN1cnJlbnQgY2FsbCdzIHByb3BlcnRpZXMgdGhhdCB3ZXJlICphbHNvKiBhbmltYXRlZCBpbiB0aGUgcHJldmlvdXMgY2FsbC4gKi9cblx0XHRcdFx0XHRcdFx0LyogTm90ZTogVmFsdWUgdHJhbnNmZXJyaW5nIGNhbiBvcHRpb25hbGx5IGJlIGRpc2FibGVkIGJ5IHRoZSB1c2VyIHZpYSB0aGUgX2NhY2hlVmFsdWVzIG9wdGlvbi4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMuX2NhY2hlVmFsdWVzICYmIGxhc3RUd2VlbnNDb250YWluZXIgJiYgbGFzdFR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0pIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gbGFzdFR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0uZW5kVmFsdWUgKyBsYXN0VHdlZW5zQ29udGFpbmVyW3Byb3BlcnR5XS51bml0VHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvKiBUaGUgcHJldmlvdXMgY2FsbCdzIHJvb3RQcm9wZXJ0eVZhbHVlIGlzIGV4dHJhY3RlZCBmcm9tIHRoZSBlbGVtZW50J3MgZGF0YSBjYWNoZSBzaW5jZSB0aGF0J3MgdGhlXG5cdFx0XHRcdFx0XHRcdFx0IGluc3RhbmNlIG9mIHJvb3RQcm9wZXJ0eVZhbHVlIHRoYXQgZ2V0cyBmcmVzaGx5IHVwZGF0ZWQgYnkgdGhlIHR3ZWVuaW5nIHByb2Nlc3MsIHdoZXJlYXMgdGhlIHJvb3RQcm9wZXJ0eVZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0IGF0dGFjaGVkIHRvIHRoZSBpbmNvbWluZyBsYXN0VHdlZW5zQ29udGFpbmVyIGlzIGVxdWFsIHRvIHRoZSByb290IHByb3BlcnR5J3MgdmFsdWUgcHJpb3IgdG8gYW55IHR3ZWVuaW5nLiAqL1xuXHRcdFx0XHRcdFx0XHRcdHJvb3RQcm9wZXJ0eVZhbHVlID0gZGF0YS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW3Jvb3RQcm9wZXJ0eV07XG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgdmFsdWVzIHdlcmUgbm90IHRyYW5zZmVycmVkIGZyb20gYSBwcmV2aW91cyBWZWxvY2l0eSBjYWxsLCBxdWVyeSB0aGUgRE9NIGFzIG5lZWRlZC4gKi9cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQvKiBIYW5kbGUgaG9va2VkIHByb3BlcnRpZXMuICovXG5cdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHN0YXJ0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb290UHJvcGVydHlWYWx1ZSA9IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIHJvb3RQcm9wZXJ0eSk7IC8qIEdFVCAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBUaGUgZm9sbG93aW5nIGdldFByb3BlcnR5VmFsdWUoKSBjYWxsIGRvZXMgbm90IGFjdHVhbGx5IHRyaWdnZXIgYSBET00gcXVlcnk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBnZXRQcm9wZXJ0eVZhbHVlKCkgd2lsbCBleHRyYWN0IHRoZSBob29rIGZyb20gcm9vdFByb3BlcnR5VmFsdWUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgPSBDU1MuZ2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBwcm9wZXJ0eSwgcm9vdFByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiBzdGFydFZhbHVlIGlzIGFscmVhZHkgZGVmaW5lZCB2aWEgZm9yY2VmZWVkaW5nLCBkbyBub3QgcXVlcnkgdGhlIERPTSBmb3IgdGhlIHJvb3QgcHJvcGVydHkncyB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGp1c3QgZ3JhYiByb290UHJvcGVydHkncyB6ZXJvLXZhbHVlIHRlbXBsYXRlIGZyb20gQ1NTLkhvb2tzLiBUaGlzIG92ZXJ3cml0ZXMgdGhlIGVsZW1lbnQncyBhY3R1YWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHJvb3QgcHJvcGVydHkgdmFsdWUgKGlmIG9uZSBpcyBzZXQpLCBidXQgdGhpcyBpcyBhY2NlcHRhYmxlIHNpbmNlIHRoZSBwcmltYXJ5IHJlYXNvbiB1c2VycyBmb3JjZWZlZWQgaXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHRvIGF2b2lkIERPTSBxdWVyaWVzLCBhbmQgdGh1cyB3ZSBsaWtld2lzZSBhdm9pZCBxdWVyeWluZyB0aGUgRE9NIGZvciB0aGUgcm9vdCBwcm9wZXJ0eSdzIHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogR3JhYiB0aGlzIGhvb2sncyB6ZXJvLXZhbHVlIHRlbXBsYXRlLCBlLmcuIFwiMHB4IDBweCAwcHggYmxhY2tcIi4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWUgPSBDU1MuSG9va3MudGVtcGxhdGVzW3Jvb3RQcm9wZXJ0eV1bMV07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBIYW5kbGUgbm9uLWhvb2tlZCBwcm9wZXJ0aWVzIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gZGVmaW5lZCB2aWEgZm9yY2VmZWVkaW5nLiAqL1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoc3RhcnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHkpOyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdFx0IFZhbHVlIERhdGEgRXh0cmFjdGlvblxuXHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdFx0dmFyIHNlcGFyYXRlZFZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWVVbml0VHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdG9wZXJhdG9yID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0LyogU2VwYXJhdGVzIGEgcHJvcGVydHkgdmFsdWUgaW50byBpdHMgbnVtZXJpYyB2YWx1ZSBhbmQgaXRzIHVuaXQgdHlwZS4gKi9cblx0XHRcdFx0XHRcdFx0dmFyIHNlcGFyYXRlVmFsdWUgPSBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgdW5pdFR5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG51bWVyaWNWYWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRcdG51bWVyaWNWYWx1ZSA9ICh2YWx1ZSB8fCBcIjBcIilcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogTWF0Y2ggdGhlIHVuaXQgdHlwZSBhdCB0aGUgZW5kIG9mIHRoZSB2YWx1ZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL1slQS16XSskLywgZnVuY3Rpb24obWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBHcmFiIHRoZSB1bml0IHR5cGUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pdFR5cGUgPSBtYXRjaDtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIFN0cmlwIHRoZSB1bml0IHR5cGUgb2ZmIG9mIHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIG5vIHVuaXQgdHlwZSB3YXMgc3VwcGxpZWQsIGFzc2lnbiBvbmUgdGhhdCBpcyBhcHByb3ByaWF0ZSBmb3IgdGhpcyBwcm9wZXJ0eSAoZS5nLiBcImRlZ1wiIGZvciByb3RhdGVaIG9yIFwicHhcIiBmb3Igd2lkdGgpLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdW5pdFR5cGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRUeXBlID0gQ1NTLlZhbHVlcy5nZXRVbml0VHlwZShwcm9wZXJ0eSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFtudW1lcmljVmFsdWUsIHVuaXRUeXBlXTtcblx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRWYWx1ZSAhPT0gZW5kVmFsdWUgJiYgVHlwZS5pc1N0cmluZyhzdGFydFZhbHVlKSAmJiBUeXBlLmlzU3RyaW5nKGVuZFZhbHVlKSkge1xuXHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBpU3RhcnQgPSAwLCAvLyBpbmRleCBpbiBzdGFydFZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlFbmQgPSAwLCAvLyBpbmRleCBpbiBlbmRWYWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhU3RhcnQgPSBbXSwgLy8gYXJyYXkgb2Ygc3RhcnRWYWx1ZSBudW1iZXJzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFFbmQgPSBbXSwgLy8gYXJyYXkgb2YgZW5kVmFsdWUgbnVtYmVyc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbkNhbGMgPSAwLCAvLyBLZWVwIHRyYWNrIG9mIGJlaW5nIGluc2lkZSBhIFwiY2FsYygpXCIgc28gd2UgZG9uJ3QgZHVwbGljYXRlIGl0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCID0gMCwgLy8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYW4gUkdCIGFzIHdlIGNhbid0IHVzZSBmcmFjdGlvbmFsIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpblJHQkEgPSAwOyAvLyBLZWVwIHRyYWNrIG9mIGJlaW5nIGluc2lkZSBhbiBSR0JBIGFzIHdlIG11c3QgcGFzcyBmcmFjdGlvbmFsIGZvciB0aGUgYWxwaGEgY2hhbm5lbFxuXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IENTUy5Ib29rcy5maXhDb2xvcnMoc3RhcnRWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBDU1MuSG9va3MuZml4Q29sb3JzKGVuZFZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoaVN0YXJ0IDwgc3RhcnRWYWx1ZS5sZW5ndGggJiYgaUVuZCA8IGVuZFZhbHVlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNTdGFydCA9IHN0YXJ0VmFsdWVbaVN0YXJ0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjRW5kID0gZW5kVmFsdWVbaUVuZF07XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmICgvW1xcZFxcLi1dLy50ZXN0KGNTdGFydCkgJiYgL1tcXGRcXC4tXS8udGVzdChjRW5kKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdFN0YXJ0ID0gY1N0YXJ0LCAvLyB0ZW1wb3JhcnkgY2hhcmFjdGVyIGJ1ZmZlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dEVuZCA9IGNFbmQsIC8vIHRlbXBvcmFyeSBjaGFyYWN0ZXIgYnVmZmVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb3RTdGFydCA9IFwiLlwiLCAvLyBNYWtlIHN1cmUgd2UgY2FuIG9ubHkgZXZlciBtYXRjaCBhIHNpbmdsZSBkb3QgaW4gYSBkZWNpbWFsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb3RFbmQgPSBcIi5cIjsgLy8gTWFrZSBzdXJlIHdlIGNhbiBvbmx5IGV2ZXIgbWF0Y2ggYSBzaW5nbGUgZG90IGluIGEgZGVjaW1hbFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlICgrK2lTdGFydCA8IHN0YXJ0VmFsdWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y1N0YXJ0ID0gc3RhcnRWYWx1ZVtpU3RhcnRdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjU3RhcnQgPT09IGRvdFN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb3RTdGFydCA9IFwiLi5cIjsgLy8gQ2FuIG5ldmVyIG1hdGNoIHR3byBjaGFyYWN0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICghL1xcZC8udGVzdChjU3RhcnQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dFN0YXJ0ICs9IGNTdGFydDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoKytpRW5kIDwgZW5kVmFsdWUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y0VuZCA9IGVuZFZhbHVlW2lFbmRdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjRW5kID09PSBkb3RFbmQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvdEVuZCA9IFwiLi5cIjsgLy8gQ2FuIG5ldmVyIG1hdGNoIHR3byBjaGFyYWN0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICghL1xcZC8udGVzdChjRW5kKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRFbmQgKz0gY0VuZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgdVN0YXJ0ID0gQ1NTLkhvb2tzLmdldFVuaXQoc3RhcnRWYWx1ZSwgaVN0YXJ0KSwgLy8gdGVtcG9yYXJ5IHVuaXQgdHlwZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dUVuZCA9IENTUy5Ib29rcy5nZXRVbml0KGVuZFZhbHVlLCBpRW5kKTsgLy8gdGVtcG9yYXJ5IHVuaXQgdHlwZVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlTdGFydCArPSB1U3RhcnQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpRW5kICs9IHVFbmQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodVN0YXJ0ID09PSB1RW5kKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU2FtZSB1bml0c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0U3RhcnQgPT09IHRFbmQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNhbWUgbnVtYmVycywgc28ganVzdCBjb3B5IG92ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm4gKz0gdFN0YXJ0ICsgdVN0YXJ0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEaWZmZXJlbnQgbnVtYmVycywgc28gc3RvcmUgdGhlbVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybiArPSBcIntcIiArIGFTdGFydC5sZW5ndGggKyAoaW5SR0IgPyBcIiFcIiA6IFwiXCIpICsgXCJ9XCIgKyB1U3RhcnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhU3RhcnQucHVzaChwYXJzZUZsb2F0KHRTdGFydCkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YUVuZC5wdXNoKHBhcnNlRmxvYXQodEVuZCkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEaWZmZXJlbnQgdW5pdHMsIHNvIHB1dCBpbnRvIGEgXCJjYWxjKGZyb20gKyB0bylcIiBhbmQgYW5pbWF0ZSBlYWNoIHNpZGUgdG8vZnJvbSB6ZXJvXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIG5TdGFydCA9IHBhcnNlRmxvYXQodFN0YXJ0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bkVuZCA9IHBhcnNlRmxvYXQodEVuZCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuICs9IChpbkNhbGMgPCA1ID8gXCJjYWxjXCIgOiBcIlwiKSArIFwiKFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgKG5TdGFydCA/IFwie1wiICsgYVN0YXJ0Lmxlbmd0aCArIChpblJHQiA/IFwiIVwiIDogXCJcIikgKyBcIn1cIiA6IFwiMFwiKSArIHVTdGFydFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIFwiICsgXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyAobkVuZCA/IFwie1wiICsgKGFTdGFydC5sZW5ndGggKyAoblN0YXJ0ID8gMSA6IDApKSArIChpblJHQiA/IFwiIVwiIDogXCJcIikgKyBcIn1cIiA6IFwiMFwiKSArIHVFbmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KyBcIilcIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoblN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhU3RhcnQucHVzaChuU3RhcnQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YUVuZC5wdXNoKDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAobkVuZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YVN0YXJ0LnB1c2goMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhRW5kLnB1c2gobkVuZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGNTdGFydCA9PT0gY0VuZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuICs9IGNTdGFydDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aVN0YXJ0Kys7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlFbmQrKztcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYSBjYWxjKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGluQ2FsYyA9PT0gMCAmJiBjU3RhcnQgPT09IFwiY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPT09IDEgJiYgY1N0YXJ0ID09PSBcImFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5DYWxjID09PSAyICYmIGNTdGFydCA9PT0gXCJsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluQ2FsYyA9PT0gMyAmJiBjU3RhcnQgPT09IFwiY1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPj0gNCAmJiBjU3RhcnQgPT09IFwiKFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbkNhbGMrKztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgoaW5DYWxjICYmIGluQ2FsYyA8IDUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR8fCBpbkNhbGMgPj0gNCAmJiBjU3RhcnQgPT09IFwiKVwiICYmIC0taW5DYWxjIDwgNSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluQ2FsYyA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gS2VlcCB0cmFjayBvZiBiZWluZyBpbnNpZGUgYW4gcmdiKCkgLyByZ2JhKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGluUkdCID09PSAwICYmIGNTdGFydCA9PT0gXCJyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID09PSAxICYmIGNTdGFydCA9PT0gXCJnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID09PSAyICYmIGNTdGFydCA9PT0gXCJiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID09PSAzICYmIGNTdGFydCA9PT0gXCJhXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8IGluUkdCID49IDMgJiYgY1N0YXJ0ID09PSBcIihcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGluUkdCID09PSAzICYmIGNTdGFydCA9PT0gXCJhXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCQSA9IDE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluUkdCKys7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoaW5SR0JBICYmIGNTdGFydCA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKytpblJHQkEgPiAzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpblJHQiA9IGluUkdCQSA9IDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChpblJHQkEgJiYgaW5SR0IgPCAoaW5SR0JBID8gNSA6IDQpKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgaW5SR0IgPj0gKGluUkdCQSA/IDQgOiAzKSAmJiBjU3RhcnQgPT09IFwiKVwiICYmIC0taW5SR0IgPCAoaW5SR0JBID8gNSA6IDQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5SR0IgPSBpblJHQkEgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbkNhbGMgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBjaGFuZ2luZyB1bml0cywgZml4aW5nIGNvbG91cnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmIChpU3RhcnQgIT09IHN0YXJ0VmFsdWUubGVuZ3RoIHx8IGlFbmQgIT09IGVuZFZhbHVlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUcnlpbmcgdG8gcGF0dGVybiBtYXRjaCBtaXMtbWF0Y2hlZCBzdHJpbmdzIFtcXFwiXCIgKyBlbmRWYWx1ZSArIFwiXFxcIiwgXFxcIlwiICsgc3RhcnRWYWx1ZSArIFwiXFxcIl1cIik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAocGF0dGVybikge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFTdGFydC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LmRlYnVnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJQYXR0ZXJuIGZvdW5kIFxcXCJcIiArIHBhdHRlcm4gKyBcIlxcXCIgLT4gXCIsIGFTdGFydCwgYUVuZCwgXCJbXCIgKyBzdGFydFZhbHVlICsgXCIsXCIgKyBlbmRWYWx1ZSArIFwiXVwiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gYVN0YXJ0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IGFFbmQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBzdGFydFZhbHVlVW5pdFR5cGUgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoIXBhdHRlcm4pIHtcblx0XHRcdFx0XHRcdFx0XHQvKiBTZXBhcmF0ZSBzdGFydFZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdHNlcGFyYXRlZFZhbHVlID0gc2VwYXJhdGVWYWx1ZShwcm9wZXJ0eSwgc3RhcnRWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHNlcGFyYXRlZFZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWVVbml0VHlwZSA9IHNlcGFyYXRlZFZhbHVlWzFdO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogU2VwYXJhdGUgZW5kVmFsdWUsIGFuZCBleHRyYWN0IGEgdmFsdWUgb3BlcmF0b3IgKGUuZy4gXCIrPVwiLCBcIi09XCIpIGlmIG9uZSBleGlzdHMuICovXG5cdFx0XHRcdFx0XHRcdFx0c2VwYXJhdGVkVmFsdWUgPSBzZXBhcmF0ZVZhbHVlKHByb3BlcnR5LCBlbmRWYWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzZXBhcmF0ZWRWYWx1ZVswXS5yZXBsYWNlKC9eKFsrLVxcLypdKT0vLCBmdW5jdGlvbihtYXRjaCwgc3ViTWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG9wZXJhdG9yID0gc3ViTWF0Y2g7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qIFN0cmlwIHRoZSBvcGVyYXRvciBvZmYgb2YgdGhlIHZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSA9IHNlcGFyYXRlZFZhbHVlWzFdO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogUGFyc2UgZmxvYXQgdmFsdWVzIGZyb20gZW5kVmFsdWUgYW5kIHN0YXJ0VmFsdWUuIERlZmF1bHQgdG8gMCBpZiBOYU4gaXMgcmV0dXJuZWQuICovXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnRWYWx1ZSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcblx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpIHx8IDA7XG5cblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0XHRcdFx0IFByb3BlcnR5LVNwZWNpZmljIFZhbHVlIENvbnZlcnNpb25cblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogQ3VzdG9tIHN1cHBvcnQgZm9yIHByb3BlcnRpZXMgdGhhdCBkb24ndCBhY3R1YWxseSBhY2NlcHQgdGhlICUgdW5pdCB0eXBlLCBidXQgd2hlcmUgcG9sbHlmaWxsaW5nIGlzIHRyaXZpYWwgYW5kIHJlbGF0aXZlbHkgZm9vbHByb29mLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlbmRWYWx1ZVVuaXRUeXBlID09PSBcIiVcIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogQSAlLXZhbHVlIGZvbnRTaXplL2xpbmVIZWlnaHQgaXMgcmVsYXRpdmUgdG8gdGhlIHBhcmVudCdzIGZvbnRTaXplIChhcyBvcHBvc2VkIHRvIHRoZSBwYXJlbnQncyBkaW1lbnNpb25zKSxcblx0XHRcdFx0XHRcdFx0XHRcdCB3aGljaCBpcyBpZGVudGljYWwgdG8gdGhlIGVtIHVuaXQncyBiZWhhdmlvciwgc28gd2UgcGlnZ3liYWNrIG9mZiBvZiB0aGF0LiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKC9eKGZvbnRTaXplfGxpbmVIZWlnaHQpJC8udGVzdChwcm9wZXJ0eSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCAlIGludG8gYW4gZW0gZGVjaW1hbCB2YWx1ZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBlbmRWYWx1ZSAvIDEwMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSA9IFwiZW1cIjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogRm9yIHNjYWxlWCBhbmQgc2NhbGVZLCBjb252ZXJ0IHRoZSB2YWx1ZSBpbnRvIGl0cyBkZWNpbWFsIGZvcm1hdCBhbmQgc3RyaXAgb2ZmIHRoZSB1bml0IHR5cGUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9ec2NhbGUvLnRlc3QocHJvcGVydHkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gZW5kVmFsdWUgLyAxMDA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgUkdCIGNvbXBvbmVudHMsIHRha2UgdGhlIGRlZmluZWQgcGVyY2VudGFnZSBvZiAyNTUgYW5kIHN0cmlwIG9mZiB0aGUgdW5pdCB0eXBlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgvKFJlZHxHcmVlbnxCbHVlKSQvaS50ZXN0KHByb3BlcnR5KSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IChlbmRWYWx1ZSAvIDEwMCkgKiAyNTU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdFx0IFVuaXQgUmF0aW8gQ2FsY3VsYXRpb25cblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdFx0XHQvKiBXaGVuIHF1ZXJpZWQsIHRoZSBicm93c2VyIHJldHVybnMgKG1vc3QpIENTUyBwcm9wZXJ0eSB2YWx1ZXMgaW4gcGl4ZWxzLiBUaGVyZWZvcmUsIGlmIGFuIGVuZFZhbHVlIHdpdGggYSB1bml0IHR5cGUgb2Zcblx0XHRcdFx0XHRcdFx0ICUsIGVtLCBvciByZW0gaXMgYW5pbWF0ZWQgdG93YXJkLCBzdGFydFZhbHVlIG11c3QgYmUgY29udmVydGVkIGZyb20gcGl4ZWxzIGludG8gdGhlIHNhbWUgdW5pdCB0eXBlIGFzIGVuZFZhbHVlIGluIG9yZGVyXG5cdFx0XHRcdFx0XHRcdCBmb3IgdmFsdWUgbWFuaXB1bGF0aW9uIGxvZ2ljIChpbmNyZW1lbnQvZGVjcmVtZW50KSB0byBwcm9jZWVkLiBGdXJ0aGVyLCBpZiB0aGUgc3RhcnRWYWx1ZSB3YXMgZm9yY2VmZWQgb3IgdHJhbnNmZXJyZWRcblx0XHRcdFx0XHRcdFx0IGZyb20gYSBwcmV2aW91cyBjYWxsLCBzdGFydFZhbHVlIG1heSBhbHNvIG5vdCBiZSBpbiBwaXhlbHMuIFVuaXQgY29udmVyc2lvbiBsb2dpYyB0aGVyZWZvcmUgY29uc2lzdHMgb2YgdHdvIHN0ZXBzOlxuXHRcdFx0XHRcdFx0XHQgMSkgQ2FsY3VsYXRpbmcgdGhlIHJhdGlvIG9mICUvZW0vcmVtL3ZoL3Z3IHJlbGF0aXZlIHRvIHBpeGVsc1xuXHRcdFx0XHRcdFx0XHQgMikgQ29udmVydGluZyBzdGFydFZhbHVlIGludG8gdGhlIHNhbWUgdW5pdCBvZiBtZWFzdXJlbWVudCBhcyBlbmRWYWx1ZSBiYXNlZCBvbiB0aGVzZSByYXRpb3MuICovXG5cdFx0XHRcdFx0XHRcdC8qIFVuaXQgY29udmVyc2lvbiByYXRpb3MgYXJlIGNhbGN1bGF0ZWQgYnkgaW5zZXJ0aW5nIGEgc2libGluZyBub2RlIG5leHQgdG8gdGhlIHRhcmdldCBub2RlLCBjb3B5aW5nIG92ZXIgaXRzIHBvc2l0aW9uIHByb3BlcnR5LFxuXHRcdFx0XHRcdFx0XHQgc2V0dGluZyB2YWx1ZXMgd2l0aCB0aGUgdGFyZ2V0IHVuaXQgdHlwZSB0aGVuIGNvbXBhcmluZyB0aGUgcmV0dXJuZWQgcGl4ZWwgdmFsdWUuICovXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IEV2ZW4gaWYgb25seSBvbmUgb2YgdGhlc2UgdW5pdCB0eXBlcyBpcyBiZWluZyBhbmltYXRlZCwgYWxsIHVuaXQgcmF0aW9zIGFyZSBjYWxjdWxhdGVkIGF0IG9uY2Ugc2luY2UgdGhlIG92ZXJoZWFkXG5cdFx0XHRcdFx0XHRcdCBvZiBiYXRjaGluZyB0aGUgU0VUcyBhbmQgR0VUcyB0b2dldGhlciB1cGZyb250IG91dHdlaWdodHMgdGhlIHBvdGVudGlhbCBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHQgb2YgbGF5b3V0IHRocmFzaGluZyBjYXVzZWQgYnkgcmUtcXVlcnlpbmcgZm9yIHVuY2FsY3VsYXRlZCByYXRpb3MgZm9yIHN1YnNlcXVlbnRseS1wcm9jZXNzZWQgcHJvcGVydGllcy4gKi9cblx0XHRcdFx0XHRcdFx0LyogVG9kbzogU2hpZnQgdGhpcyBsb2dpYyBpbnRvIHRoZSBjYWxscycgZmlyc3QgdGljayBpbnN0YW5jZSBzbyB0aGF0IGl0J3Mgc3luY2VkIHdpdGggUkFGLiAqL1xuXHRcdFx0XHRcdFx0XHR2YXIgY2FsY3VsYXRlVW5pdFJhdGlvcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHRcdCBTYW1lIFJhdGlvIENoZWNrc1xuXHRcdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdFx0XHQvKiBUaGUgcHJvcGVydGllcyBiZWxvdyBhcmUgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgZWxlbWVudCBkaWZmZXJzIHN1ZmZpY2llbnRseSBmcm9tIHRoaXMgY2FsbCdzXG5cdFx0XHRcdFx0XHRcdFx0IHByZXZpb3VzbHkgaXRlcmF0ZWQgZWxlbWVudCB0byBhbHNvIGRpZmZlciBpbiBpdHMgdW5pdCBjb252ZXJzaW9uIHJhdGlvcy4gSWYgdGhlIHByb3BlcnRpZXMgbWF0Y2ggdXAgd2l0aCB0aG9zZVxuXHRcdFx0XHRcdFx0XHRcdCBvZiB0aGUgcHJpb3IgZWxlbWVudCwgdGhlIHByaW9yIGVsZW1lbnQncyBjb252ZXJzaW9uIHJhdGlvcyBhcmUgdXNlZC4gTGlrZSBtb3N0IG9wdGltaXphdGlvbnMgaW4gVmVsb2NpdHksXG5cdFx0XHRcdFx0XHRcdFx0IHRoaXMgaXMgZG9uZSB0byBtaW5pbWl6ZSBET00gcXVlcnlpbmcuICovXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHNhbWVSYXRpb0luZGljYXRvcnMgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRteVBhcmVudDogZWxlbWVudC5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHksIC8qIEdFVCAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwicG9zaXRpb25cIiksIC8qIEdFVCAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IENTUy5nZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZm9udFNpemVcIikgLyogR0VUICovXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogRGV0ZXJtaW5lIGlmIHRoZSBzYW1lICUgcmF0aW8gY2FuIGJlIHVzZWQuICUgaXMgYmFzZWQgb24gdGhlIGVsZW1lbnQncyBwb3NpdGlvbiB2YWx1ZSBhbmQgaXRzIHBhcmVudCdzIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9ucy4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2FtZVBlcmNlbnRSYXRpbyA9ICgoc2FtZVJhdGlvSW5kaWNhdG9ycy5wb3NpdGlvbiA9PT0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UG9zaXRpb24pICYmIChzYW1lUmF0aW9JbmRpY2F0b3JzLm15UGFyZW50ID09PSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQYXJlbnQpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyogRGV0ZXJtaW5lIGlmIHRoZSBzYW1lIGVtIHJhdGlvIGNhbiBiZSB1c2VkLiBlbSBpcyByZWxhdGl2ZSB0byB0aGUgZWxlbWVudCdzIGZvbnRTaXplLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzYW1lRW1SYXRpbyA9IChzYW1lUmF0aW9JbmRpY2F0b3JzLmZvbnRTaXplID09PSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RGb250U2l6ZSk7XG5cblx0XHRcdFx0XHRcdFx0XHQvKiBTdG9yZSB0aGVzZSByYXRpbyBpbmRpY2F0b3JzIGNhbGwtd2lkZSBmb3IgdGhlIG5leHQgZWxlbWVudCB0byBjb21wYXJlIGFnYWluc3QuICovXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGFyZW50ID0gc2FtZVJhdGlvSW5kaWNhdG9ycy5teVBhcmVudDtcblx0XHRcdFx0XHRcdFx0XHRjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQb3NpdGlvbiA9IHNhbWVSYXRpb0luZGljYXRvcnMucG9zaXRpb247XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0Rm9udFNpemUgPSBzYW1lUmF0aW9JbmRpY2F0b3JzLmZvbnRTaXplO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHRcdCBFbGVtZW50LVNwZWNpZmljIFVuaXRzXG5cdFx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IElFOCByb3VuZHMgdG8gdGhlIG5lYXJlc3QgcGl4ZWwgd2hlbiByZXR1cm5pbmcgQ1NTIHZhbHVlcywgdGh1cyB3ZSBwZXJmb3JtIGNvbnZlcnNpb25zIHVzaW5nIGEgbWVhc3VyZW1lbnRcblx0XHRcdFx0XHRcdFx0XHQgb2YgMTAwIChpbnN0ZWFkIG9mIDEpIHRvIGdpdmUgb3VyIHJhdGlvcyBhIHByZWNpc2lvbiBvZiBhdCBsZWFzdCAyIGRlY2ltYWwgdmFsdWVzLiAqL1xuXHRcdFx0XHRcdFx0XHRcdHZhciBtZWFzdXJlbWVudCA9IDEwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcyA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzYW1lRW1SYXRpbyB8fCAhc2FtZVBlcmNlbnRSYXRpbykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGR1bW15ID0gZGF0YSAmJiBkYXRhLmlzU1ZHID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuaW5pdChkdW1teSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRzYW1lUmF0aW9JbmRpY2F0b3JzLm15UGFyZW50LmFwcGVuZENoaWxkKGR1bW15KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0LyogVG8gYWNjdXJhdGVseSBhbmQgY29uc2lzdGVudGx5IGNhbGN1bGF0ZSBjb252ZXJzaW9uIHJhdGlvcywgdGhlIGVsZW1lbnQncyBjYXNjYWRlZCBvdmVyZmxvdyBhbmQgYm94LXNpemluZyBhcmUgc3RyaXBwZWQuXG5cdFx0XHRcdFx0XHRcdFx0XHQgU2ltaWxhcmx5LCBzaW5jZSB3aWR0aC9oZWlnaHQgY2FuIGJlIGFydGlmaWNpYWxseSBjb25zdHJhaW5lZCBieSB0aGVpciBtaW4tL21heC0gZXF1aXZhbGVudHMsIHRoZXNlIGFyZSBjb250cm9sbGVkIGZvciBhcyB3ZWxsLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogT3ZlcmZsb3cgbXVzdCBiZSBhbHNvIGJlIGNvbnRyb2xsZWQgZm9yIHBlci1heGlzIHNpbmNlIHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBvdmVyd3JpdGVzIGl0cyBwZXItYXhpcyB2YWx1ZXMuICovXG5cdFx0XHRcdFx0XHRcdFx0XHQkLmVhY2goW1wib3ZlcmZsb3dcIiwgXCJvdmVyZmxvd1hcIiwgXCJvdmVyZmxvd1lcIl0sIGZ1bmN0aW9uKGksIHByb3BlcnR5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBwcm9wZXJ0eSwgXCJoaWRkZW5cIik7XG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XHRcdFZlbG9jaXR5LkNTUy5zZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcInBvc2l0aW9uXCIsIHNhbWVSYXRpb0luZGljYXRvcnMucG9zaXRpb24pO1xuXHRcdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuQ1NTLnNldFByb3BlcnR5VmFsdWUoZHVtbXksIFwiZm9udFNpemVcIiwgc2FtZVJhdGlvSW5kaWNhdG9ycy5mb250U2l6ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1Muc2V0UHJvcGVydHlWYWx1ZShkdW1teSwgXCJib3hTaXppbmdcIiwgXCJjb250ZW50LWJveFwiKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Lyogd2lkdGggYW5kIGhlaWdodCBhY3QgYXMgb3VyIHByb3h5IHByb3BlcnRpZXMgZm9yIG1lYXN1cmluZyB0aGUgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgJSByYXRpb3MuICovXG5cdFx0XHRcdFx0XHRcdFx0XHQkLmVhY2goW1wibWluV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIndpZHRoXCIsIFwibWluSGVpZ2h0XCIsIFwibWF4SGVpZ2h0XCIsIFwiaGVpZ2h0XCJdLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5DU1Muc2V0UHJvcGVydHlWYWx1ZShkdW1teSwgcHJvcGVydHksIG1lYXN1cmVtZW50ICsgXCIlXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBwYWRkaW5nTGVmdCBhcmJpdHJhcmlseSBhY3RzIGFzIG91ciBwcm94eSBwcm9wZXJ0eSBmb3IgdGhlIGVtIHJhdGlvLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuQ1NTLnNldFByb3BlcnR5VmFsdWUoZHVtbXksIFwicGFkZGluZ0xlZnRcIiwgbWVhc3VyZW1lbnQgKyBcImVtXCIpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBEaXZpZGUgdGhlIHJldHVybmVkIHZhbHVlIGJ5IHRoZSBtZWFzdXJlbWVudCB0byBnZXQgdGhlIHJhdGlvIGJldHdlZW4gMSUgYW5kIDFweC4gRGVmYXVsdCB0byAxIHNpbmNlIHdvcmtpbmcgd2l0aCAwIGNhbiBwcm9kdWNlIEluZmluaXRlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy5wZXJjZW50VG9QeFdpZHRoID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGVyY2VudFRvUHhXaWR0aCA9IChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcIndpZHRoXCIsIG51bGwsIHRydWUpKSB8fCAxKSAvIG1lYXN1cmVtZW50OyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucGVyY2VudFRvUHhIZWlnaHQgPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQZXJjZW50VG9QeEhlaWdodCA9IChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcImhlaWdodFwiLCBudWxsLCB0cnVlKSkgfHwgMSkgLyBtZWFzdXJlbWVudDsgLyogR0VUICovXG5cdFx0XHRcdFx0XHRcdFx0XHR1bml0UmF0aW9zLmVtVG9QeCA9IGNhbGxVbml0Q29udmVyc2lvbkRhdGEubGFzdEVtVG9QeCA9IChwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGR1bW15LCBcInBhZGRpbmdMZWZ0XCIpKSB8fCAxKSAvIG1lYXN1cmVtZW50OyAvKiBHRVQgKi9cblxuXHRcdFx0XHRcdFx0XHRcdFx0c2FtZVJhdGlvSW5kaWNhdG9ycy5teVBhcmVudC5yZW1vdmVDaGlsZChkdW1teSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MuZW1Ub1B4ID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0RW1Ub1B4O1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy5wZXJjZW50VG9QeFdpZHRoID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5sYXN0UGVyY2VudFRvUHhXaWR0aDtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MucGVyY2VudFRvUHhIZWlnaHQgPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLmxhc3RQZXJjZW50VG9QeEhlaWdodDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0XHRcdFx0IEVsZW1lbnQtQWdub3N0aWMgVW5pdHNcblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogV2hlcmVhcyAlIGFuZCBlbSByYXRpb3MgYXJlIGRldGVybWluZWQgb24gYSBwZXItZWxlbWVudCBiYXNpcywgdGhlIHJlbSB1bml0IG9ubHkgbmVlZHMgdG8gYmUgY2hlY2tlZFxuXHRcdFx0XHRcdFx0XHRcdCBvbmNlIHBlciBjYWxsIHNpbmNlIGl0J3MgZXhjbHVzaXZlbHkgZGVwZW5kYW50IHVwb24gZG9jdW1lbnQuYm9keSdzIGZvbnRTaXplLiBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG5cdFx0XHRcdFx0XHRcdFx0IHRoYXQgY2FsY3VsYXRlVW5pdFJhdGlvcygpIGlzIGJlaW5nIHJ1biBkdXJpbmcgdGhpcyBjYWxsLCByZW1Ub1B4IHdpbGwgc3RpbGwgYmUgc2V0IHRvIGl0cyBkZWZhdWx0IHZhbHVlIG9mIG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0IHNvIHdlIGNhbGN1bGF0ZSBpdCBub3cuICovXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxVbml0Q29udmVyc2lvbkRhdGEucmVtVG9QeCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogRGVmYXVsdCB0byBicm93c2VycycgZGVmYXVsdCBmb250U2l6ZSBvZiAxNnB4IGluIHRoZSBjYXNlIG9mIDAuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWxsVW5pdENvbnZlcnNpb25EYXRhLnJlbVRvUHggPSBwYXJzZUZsb2F0KENTUy5nZXRQcm9wZXJ0eVZhbHVlKGRvY3VtZW50LmJvZHksIFwiZm9udFNpemVcIikpIHx8IDE2OyAvKiBHRVQgKi9cblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvKiBTaW1pbGFybHksIHZpZXdwb3J0IHVuaXRzIGFyZSAlLXJlbGF0aXZlIHRvIHRoZSB3aW5kb3cncyBpbm5lciBkaW1lbnNpb25zLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmIChjYWxsVW5pdENvbnZlcnNpb25EYXRhLnZ3VG9QeCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FsbFVuaXRDb252ZXJzaW9uRGF0YS52d1RvUHggPSBwYXJzZUZsb2F0KHdpbmRvdy5pbm5lcldpZHRoKSAvIDEwMDsgLyogR0VUICovXG5cdFx0XHRcdFx0XHRcdFx0XHRjYWxsVW5pdENvbnZlcnNpb25EYXRhLnZoVG9QeCA9IHBhcnNlRmxvYXQod2luZG93LmlubmVySGVpZ2h0KSAvIDEwMDsgLyogR0VUICovXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy5yZW1Ub1B4ID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS5yZW1Ub1B4O1xuXHRcdFx0XHRcdFx0XHRcdHVuaXRSYXRpb3MudndUb1B4ID0gY2FsbFVuaXRDb252ZXJzaW9uRGF0YS52d1RvUHg7XG5cdFx0XHRcdFx0XHRcdFx0dW5pdFJhdGlvcy52aFRvUHggPSBjYWxsVW5pdENvbnZlcnNpb25EYXRhLnZoVG9QeDtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChWZWxvY2l0eS5kZWJ1ZyA+PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIiArIEpTT04uc3RyaW5naWZ5KHVuaXRSYXRpb3MpLCBlbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVuaXRSYXRpb3M7XG5cdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0XHRcdCBVbml0IENvbnZlcnNpb25cblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdC8qIFRoZSAqIGFuZCAvIG9wZXJhdG9ycywgd2hpY2ggYXJlIG5vdCBwYXNzZWQgaW4gd2l0aCBhbiBhc3NvY2lhdGVkIHVuaXQsIGluaGVyZW50bHkgdXNlIHN0YXJ0VmFsdWUncyB1bml0LiBTa2lwIHZhbHVlIGFuZCB1bml0IGNvbnZlcnNpb24uICovXG5cdFx0XHRcdFx0XHRcdGlmICgvW1xcLypdLy50ZXN0KG9wZXJhdG9yKSkge1xuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlVW5pdFR5cGUgPSBzdGFydFZhbHVlVW5pdFR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0LyogSWYgc3RhcnRWYWx1ZSBhbmQgZW5kVmFsdWUgZGlmZmVyIGluIHVuaXQgdHlwZSwgY29udmVydCBzdGFydFZhbHVlIGludG8gdGhlIHNhbWUgdW5pdCB0eXBlIGFzIGVuZFZhbHVlIHNvIHRoYXQgaWYgZW5kVmFsdWVVbml0VHlwZVxuXHRcdFx0XHRcdFx0XHRcdCBpcyBhIHJlbGF0aXZlIHVuaXQgKCUsIGVtLCByZW0pLCB0aGUgdmFsdWVzIHNldCBkdXJpbmcgdHdlZW5pbmcgd2lsbCBjb250aW51ZSB0byBiZSBhY2N1cmF0ZWx5IHJlbGF0aXZlIGV2ZW4gaWYgdGhlIG1ldHJpY3MgdGhleSBkZXBlbmRcblx0XHRcdFx0XHRcdFx0XHQgb24gYXJlIGR5bmFtaWNhbGx5IGNoYW5naW5nIGR1cmluZyB0aGUgY291cnNlIG9mIHRoZSBhbmltYXRpb24uIENvbnZlcnNlbHksIGlmIHdlIGFsd2F5cyBub3JtYWxpemVkIGludG8gcHggYW5kIHVzZWQgcHggZm9yIHNldHRpbmcgdmFsdWVzLCB0aGUgcHggcmF0aW9cblx0XHRcdFx0XHRcdFx0XHQgd291bGQgYmVjb21lIHN0YWxlIGlmIHRoZSBvcmlnaW5hbCB1bml0IGJlaW5nIGFuaW1hdGVkIHRvd2FyZCB3YXMgcmVsYXRpdmUgYW5kIHRoZSB1bmRlcmx5aW5nIG1ldHJpY3MgY2hhbmdlIGR1cmluZyB0aGUgYW5pbWF0aW9uLiAqL1xuXHRcdFx0XHRcdFx0XHRcdC8qIFNpbmNlIDAgaXMgMCBpbiBhbnkgdW5pdCB0eXBlLCBubyBjb252ZXJzaW9uIGlzIG5lY2Vzc2FyeSB3aGVuIHN0YXJ0VmFsdWUgaXMgMCAtLSB3ZSBqdXN0IHN0YXJ0IGF0IDAgd2l0aCBlbmRWYWx1ZVVuaXRUeXBlLiAqL1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKChzdGFydFZhbHVlVW5pdFR5cGUgIT09IGVuZFZhbHVlVW5pdFR5cGUpICYmIHN0YXJ0VmFsdWUgIT09IDApIHtcblx0XHRcdFx0XHRcdFx0XHQvKiBVbml0IGNvbnZlcnNpb24gaXMgYWxzbyBza2lwcGVkIHdoZW4gZW5kVmFsdWUgaXMgMCwgYnV0ICpzdGFydFZhbHVlVW5pdFR5cGUqIG11c3QgYmUgdXNlZCBmb3IgdHdlZW4gdmFsdWVzIHRvIHJlbWFpbiBhY2N1cmF0ZS4gKi9cblx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBTa2lwcGluZyB1bml0IGNvbnZlcnNpb24gaGVyZSBtZWFucyB0aGF0IGlmIGVuZFZhbHVlVW5pdFR5cGUgd2FzIG9yaWdpbmFsbHkgYSByZWxhdGl2ZSB1bml0LCB0aGUgYW5pbWF0aW9uIHdvbid0IHJlbGF0aXZlbHlcblx0XHRcdFx0XHRcdFx0XHQgbWF0Y2ggdGhlIHVuZGVybHlpbmcgbWV0cmljcyBpZiB0aGV5IGNoYW5nZSwgYnV0IHRoaXMgaXMgYWNjZXB0YWJsZSBzaW5jZSB3ZSdyZSBhbmltYXRpbmcgdG93YXJkIGludmlzaWJpbGl0eSBpbnN0ZWFkIG9mIHRvd2FyZCB2aXNpYmlsaXR5LFxuXHRcdFx0XHRcdFx0XHRcdCB3aGljaCByZW1haW5zIHBhc3QgdGhlIHBvaW50IG9mIHRoZSBhbmltYXRpb24ncyBjb21wbGV0aW9uLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlbmRWYWx1ZSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVVbml0VHlwZSA9IHN0YXJ0VmFsdWVVbml0VHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogQnkgdGhpcyBwb2ludCwgd2UgY2Fubm90IGF2b2lkIHVuaXQgY29udmVyc2lvbiAoaXQncyB1bmRlc2lyYWJsZSBzaW5jZSBpdCBjYXVzZXMgbGF5b3V0IHRocmFzaGluZykuXG5cdFx0XHRcdFx0XHRcdFx0XHQgSWYgd2UgaGF2ZW4ndCBhbHJlYWR5LCB3ZSB0cmlnZ2VyIGNhbGN1bGF0ZVVuaXRSYXRpb3MoKSwgd2hpY2ggcnVucyBvbmNlIHBlciBlbGVtZW50IHBlciBjYWxsLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YSA9IGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGEgfHwgY2FsY3VsYXRlVW5pdFJhdGlvcygpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBUaGUgZm9sbG93aW5nIFJlZ0V4IG1hdGNoZXMgQ1NTIHByb3BlcnRpZXMgdGhhdCBoYXZlIHRoZWlyICUgdmFsdWVzIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSB4LWF4aXMuICovXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBOb3RlOiBXM0Mgc3BlYyBtYW5kYXRlcyB0aGF0IGFsbCBvZiBtYXJnaW4gYW5kIHBhZGRpbmcncyBwcm9wZXJ0aWVzIChldmVuIHRvcCBhbmQgYm90dG9tKSBhcmUgJS1yZWxhdGl2ZSB0byB0aGUgKndpZHRoKiBvZiB0aGUgcGFyZW50IGVsZW1lbnQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYXhpcyA9ICgvbWFyZ2lufHBhZGRpbmd8bGVmdHxyaWdodHx3aWR0aHx0ZXh0fHdvcmR8bGV0dGVyL2kudGVzdChwcm9wZXJ0eSkgfHwgL1gkLy50ZXN0KHByb3BlcnR5KSB8fCBwcm9wZXJ0eSA9PT0gXCJ4XCIpID8gXCJ4XCIgOiBcInlcIjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0LyogSW4gb3JkZXIgdG8gYXZvaWQgZ2VuZXJhdGluZyBuXjIgYmVzcG9rZSBjb252ZXJzaW9uIGZ1bmN0aW9ucywgdW5pdCBjb252ZXJzaW9uIGlzIGEgdHdvLXN0ZXAgcHJvY2Vzczpcblx0XHRcdFx0XHRcdFx0XHRcdCAxKSBDb252ZXJ0IHN0YXJ0VmFsdWUgaW50byBwaXhlbHMuIDIpIENvbnZlcnQgdGhpcyBuZXcgcGl4ZWwgdmFsdWUgaW50byBlbmRWYWx1ZSdzIHVuaXQgdHlwZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoc3RhcnRWYWx1ZVVuaXRUeXBlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCIlXCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LyogTm90ZTogdHJhbnNsYXRlWCBhbmQgdHJhbnNsYXRlWSBhcmUgdGhlIG9ubHkgcHJvcGVydGllcyB0aGF0IGFyZSAlLXJlbGF0aXZlIHRvIGFuIGVsZW1lbnQncyBvd24gZGltZW5zaW9ucyAtLSBub3QgaXRzIHBhcmVudCdzIGRpbWVuc2lvbnMuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFZlbG9jaXR5IGRvZXMgbm90IGluY2x1ZGUgYSBzcGVjaWFsIGNvbnZlcnNpb24gcHJvY2VzcyB0byBhY2NvdW50IGZvciB0aGlzIGJlaGF2aW9yLiBUaGVyZWZvcmUsIGFuaW1hdGluZyB0cmFuc2xhdGVYL1kgZnJvbSBhICUgdmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdG8gYSBub24tJSB2YWx1ZSB3aWxsIHByb2R1Y2UgYW4gaW5jb3JyZWN0IHN0YXJ0IHZhbHVlLiBGb3J0dW5hdGVseSwgdGhpcyBzb3J0IG9mIGNyb3NzLXVuaXQgY29udmVyc2lvbiBpcyByYXJlbHkgZG9uZSBieSB1c2VycyBpbiBwcmFjdGljZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlICo9IChheGlzID09PSBcInhcIiA/IGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGEucGVyY2VudFRvUHhXaWR0aCA6IGVsZW1lbnRVbml0Q29udmVyc2lvbkRhdGEucGVyY2VudFRvUHhIZWlnaHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgXCJweFwiOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8qIHB4IGFjdHMgYXMgb3VyIG1pZHBvaW50IGluIHRoZSB1bml0IGNvbnZlcnNpb24gcHJvY2VzczsgZG8gbm90aGluZy4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWUgKj0gZWxlbWVudFVuaXRDb252ZXJzaW9uRGF0YVtzdGFydFZhbHVlVW5pdFR5cGUgKyBcIlRvUHhcIl07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qIEludmVydCB0aGUgcHggcmF0aW9zIHRvIGNvbnZlcnQgaW50byB0byB0aGUgdGFyZ2V0IHVuaXQuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGVuZFZhbHVlVW5pdFR5cGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIiVcIjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlICo9IDEgLyAoYXhpcyA9PT0gXCJ4XCIgPyBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhLnBlcmNlbnRUb1B4V2lkdGggOiBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhLnBlcmNlbnRUb1B4SGVpZ2h0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIFwicHhcIjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBzdGFydFZhbHVlIGlzIGFscmVhZHkgaW4gcHgsIGRvIG5vdGhpbmc7IHdlJ3JlIGRvbmUuICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlICo9IDEgLyBlbGVtZW50VW5pdENvbnZlcnNpb25EYXRhW2VuZFZhbHVlVW5pdFR5cGUgKyBcIlRvUHhcIl07XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHQgUmVsYXRpdmUgVmFsdWVzXG5cdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdFx0LyogT3BlcmF0b3IgbG9naWMgbXVzdCBiZSBwZXJmb3JtZWQgbGFzdCBzaW5jZSBpdCByZXF1aXJlcyB1bml0LW5vcm1hbGl6ZWQgc3RhcnQgYW5kIGVuZCB2YWx1ZXMuICovXG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFJlbGF0aXZlICpwZXJjZW50IHZhbHVlcyogZG8gbm90IGJlaGF2ZSBob3cgbW9zdCBwZW9wbGUgdGhpbms7IHdoaWxlIG9uZSB3b3VsZCBleHBlY3QgXCIrPTUwJVwiXG5cdFx0XHRcdFx0XHRcdCB0byBpbmNyZWFzZSB0aGUgcHJvcGVydHkgMS41eCBpdHMgY3VycmVudCB2YWx1ZSwgaXQgaW4gZmFjdCBpbmNyZWFzZXMgdGhlIHBlcmNlbnQgdW5pdHMgaW4gYWJzb2x1dGUgdGVybXM6XG5cdFx0XHRcdFx0XHRcdCA1MCBwb2ludHMgaXMgYWRkZWQgb24gdG9wIG9mIHRoZSBjdXJyZW50ICUgdmFsdWUuICovXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAob3BlcmF0b3IpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiK1wiOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzdGFydFZhbHVlICsgZW5kVmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgXCItXCI6XG5cdFx0XHRcdFx0XHRcdFx0XHRlbmRWYWx1ZSA9IHN0YXJ0VmFsdWUgLSBlbmRWYWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBcIipcIjpcblx0XHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlID0gc3RhcnRWYWx1ZSAqIGVuZFZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0XHRjYXNlIFwiL1wiOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWUgPSBzdGFydFZhbHVlIC8gZW5kVmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHQgdHdlZW5zQ29udGFpbmVyIFB1c2hcblx0XHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdC8qIENvbnN0cnVjdCB0aGUgcGVyLXByb3BlcnR5IHR3ZWVuIG9iamVjdCwgYW5kIHB1c2ggaXQgdG8gdGhlIGVsZW1lbnQncyB0d2VlbnNDb250YWluZXIuICovXG5cdFx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0cm9vdFByb3BlcnR5VmFsdWU6IHJvb3RQcm9wZXJ0eVZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0VmFsdWU6IHN0YXJ0VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlOiBzdGFydFZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGVuZFZhbHVlOiBlbmRWYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHR1bml0VHlwZTogZW5kVmFsdWVVbml0VHlwZSxcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6IGVhc2luZ1xuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRpZiAocGF0dGVybikge1xuXHRcdFx0XHRcdFx0XHRcdHR3ZWVuc0NvbnRhaW5lcltwcm9wZXJ0eV0ucGF0dGVybiA9IHBhdHRlcm47XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoVmVsb2NpdHkuZGVidWcpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIgKyBwcm9wZXJ0eSArIFwiKTogXCIgKyBKU09OLnN0cmluZ2lmeSh0d2VlbnNDb250YWluZXJbcHJvcGVydHldKSwgZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8qIENyZWF0ZSBhIHR3ZWVuIG91dCBvZiBlYWNoIHByb3BlcnR5LCBhbmQgYXBwZW5kIGl0cyBhc3NvY2lhdGVkIGRhdGEgdG8gdHdlZW5zQ29udGFpbmVyLiAqL1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllc01hcCkge1xuXG5cdFx0XHRcdFx0XHRcdGlmICghcHJvcGVydGllc01hcC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvKiBUaGUgb3JpZ2luYWwgcHJvcGVydHkgbmFtZSdzIGZvcm1hdCBtdXN0IGJlIHVzZWQgZm9yIHRoZSBwYXJzZVByb3BlcnR5VmFsdWUoKSBsb29rdXAsXG5cdFx0XHRcdFx0XHRcdCBidXQgd2UgdGhlbiB1c2UgaXRzIGNhbWVsQ2FzZSBzdHlsaW5nIHRvIG5vcm1hbGl6ZSBpdCBmb3IgbWFuaXB1bGF0aW9uLiAqL1xuXHRcdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlOYW1lID0gQ1NTLk5hbWVzLmNhbWVsQ2FzZShwcm9wZXJ0eSksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZURhdGEgPSBwYXJzZVByb3BlcnR5VmFsdWUocHJvcGVydGllc01hcFtwcm9wZXJ0eV0pO1xuXG5cdFx0XHRcdFx0XHRcdC8qIEZpbmQgc2hvcnRoYW5kIGNvbG9yIHByb3BlcnRpZXMgdGhhdCBoYXZlIGJlZW4gcGFzc2VkIGEgaGV4IHN0cmluZy4gKi9cblx0XHRcdFx0XHRcdFx0LyogV291bGQgYmUgcXVpY2tlciB0byB1c2UgQ1NTLkxpc3RzLmNvbG9ycy5pbmNsdWRlcygpIGlmIHBvc3NpYmxlICovXG5cdFx0XHRcdFx0XHRcdGlmIChfaW5BcnJheShDU1MuTGlzdHMuY29sb3JzLCBwcm9wZXJ0eU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogUGFyc2UgdGhlIHZhbHVlIGRhdGEgZm9yIGVhY2ggc2hvcnRoYW5kLiAqL1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlbmRWYWx1ZSA9IHZhbHVlRGF0YVswXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWFzaW5nID0gdmFsdWVEYXRhWzFdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlID0gdmFsdWVEYXRhWzJdO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5SZWdFeC5pc0hleC50ZXN0KGVuZFZhbHVlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogQ29udmVydCB0aGUgaGV4IHN0cmluZ3MgaW50byB0aGVpciBSR0IgY29tcG9uZW50IGFycmF5cy4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdHZhciBjb2xvckNvbXBvbmVudHMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIl0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kVmFsdWVSR0IgPSBDU1MuVmFsdWVzLmhleFRvUmdiKGVuZFZhbHVlKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGFydFZhbHVlUkdCID0gc3RhcnRWYWx1ZSA/IENTUy5WYWx1ZXMuaGV4VG9SZ2Ioc3RhcnRWYWx1ZSkgOiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qIEluamVjdCB0aGUgUkdCIGNvbXBvbmVudCB0d2VlbnMgaW50byBwcm9wZXJ0aWVzTWFwLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvckNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGRhdGFBcnJheSA9IFtlbmRWYWx1ZVJHQltpXV07XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVhc2luZykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFBcnJheS5wdXNoKGVhc2luZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoc3RhcnRWYWx1ZVJHQiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUFycmF5LnB1c2goc3RhcnRWYWx1ZVJHQltpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaXhQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSArIGNvbG9yQ29tcG9uZW50c1tpXSwgZGF0YUFycmF5KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIHdlIGhhdmUgcmVwbGFjZWQgYSBzaG9ydGN1dCBjb2xvciB2YWx1ZSB0aGVuIGRvbid0IHVwZGF0ZSB0aGUgc3RhbmRhcmQgcHJvcGVydHkgbmFtZSAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGZpeFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lLCB2YWx1ZURhdGEpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBBbG9uZyB3aXRoIGl0cyBwcm9wZXJ0eSBkYXRhLCBzdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCBpdHNlbGYgb250byB0d2VlbnNDb250YWluZXIuICovXG5cdFx0XHRcdFx0XHR0d2VlbnNDb250YWluZXIuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0IENhbGwgUHVzaFxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdC8qIE5vdGU6IHR3ZWVuc0NvbnRhaW5lciBjYW4gYmUgZW1wdHkgaWYgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIGluIHRoaXMgY2FsbCdzIHByb3BlcnR5IG1hcCB3ZXJlIHNraXBwZWQgZHVlIHRvIG5vdFxuXHRcdFx0XHRcdCBiZWluZyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuIFRoZSBlbGVtZW50IHByb3BlcnR5IGlzIHVzZWQgZm9yIGNoZWNraW5nIHRoYXQgdGhlIHR3ZWVuc0NvbnRhaW5lciBoYXMgYmVlbiBhcHBlbmRlZCB0by4gKi9cblx0XHRcdFx0XHRpZiAodHdlZW5zQ29udGFpbmVyLmVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdC8qIEFwcGx5IHRoZSBcInZlbG9jaXR5LWFuaW1hdGluZ1wiIGluZGljYXRvciBjbGFzcy4gKi9cblx0XHRcdFx0XHRcdENTUy5WYWx1ZXMuYWRkQ2xhc3MoZWxlbWVudCwgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIik7XG5cblx0XHRcdFx0XHRcdC8qIFRoZSBjYWxsIGFycmF5IGhvdXNlcyB0aGUgdHdlZW5zQ29udGFpbmVycyBmb3IgZWFjaCBlbGVtZW50IGJlaW5nIGFuaW1hdGVkIGluIHRoZSBjdXJyZW50IGNhbGwuICovXG5cdFx0XHRcdFx0XHRjYWxsLnB1c2godHdlZW5zQ29udGFpbmVyKTtcblxuXHRcdFx0XHRcdFx0ZGF0YSA9IERhdGEoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdFx0XHRcdC8qIFN0b3JlIHRoZSB0d2VlbnNDb250YWluZXIgYW5kIG9wdGlvbnMgaWYgd2UncmUgd29ya2luZyBvbiB0aGUgZGVmYXVsdCBlZmZlY3RzIHF1ZXVlLCBzbyB0aGF0IHRoZXkgY2FuIGJlIHVzZWQgYnkgdGhlIHJldmVyc2UgY29tbWFuZC4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMucXVldWUgPT09IFwiXCIpIHtcblxuXHRcdFx0XHRcdFx0XHRcdGRhdGEudHdlZW5zQ29udGFpbmVyID0gdHdlZW5zQ29udGFpbmVyO1xuXHRcdFx0XHRcdFx0XHRcdGRhdGEub3B0cyA9IG9wdHM7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvKiBTd2l0Y2ggb24gdGhlIGVsZW1lbnQncyBhbmltYXRpbmcgZmxhZy4gKi9cblx0XHRcdFx0XHRcdFx0ZGF0YS5pc0FuaW1hdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8qIE9uY2UgdGhlIGZpbmFsIGVsZW1lbnQgaW4gdGhpcyBjYWxsJ3MgZWxlbWVudCBzZXQgaGFzIGJlZW4gcHJvY2Vzc2VkLCBwdXNoIHRoZSBjYWxsIGFycmF5IG9udG9cblx0XHRcdFx0XHRcdCBWZWxvY2l0eS5TdGF0ZS5jYWxscyBmb3IgdGhlIGFuaW1hdGlvbiB0aWNrIHRvIGltbWVkaWF0ZWx5IGJlZ2luIHByb2Nlc3NpbmcuICovXG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCA9PT0gZWxlbWVudHNMZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdC8qIEFkZCB0aGUgY3VycmVudCBjYWxsIHBsdXMgaXRzIGFzc29jaWF0ZWQgbWV0YWRhdGEgKHRoZSBlbGVtZW50IHNldCBhbmQgdGhlIGNhbGwncyBvcHRpb25zKSBvbnRvIHRoZSBnbG9iYWwgY2FsbCBjb250YWluZXIuXG5cdFx0XHRcdFx0XHRcdCBBbnl0aGluZyBvbiB0aGlzIGNhbGwgY29udGFpbmVyIGlzIHN1YmplY3RlZCB0byB0aWNrKCkgcHJvY2Vzc2luZy4gKi9cblx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHMucHVzaChbY2FsbCwgZWxlbWVudHMsIG9wdHMsIG51bGwsIHByb21pc2VEYXRhLnJlc29sdmVyLCBudWxsLCAwXSk7XG5cblx0XHRcdFx0XHRcdFx0LyogSWYgdGhlIGFuaW1hdGlvbiB0aWNrIGlzbid0IHJ1bm5pbmcsIHN0YXJ0IGl0LiAoVmVsb2NpdHkgc2h1dHMgaXQgb2ZmIHdoZW4gdGhlcmUgYXJlIG5vIGFjdGl2ZSBjYWxscyB0byBwcm9jZXNzLikgKi9cblx0XHRcdFx0XHRcdFx0aWYgKFZlbG9jaXR5LlN0YXRlLmlzVGlja2luZyA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogU3RhcnQgdGhlIHRpY2sgbG9vcC4gKi9cblx0XHRcdFx0XHRcdFx0XHR0aWNrKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnRzSW5kZXgrKztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKiBXaGVuIHRoZSBxdWV1ZSBvcHRpb24gaXMgc2V0IHRvIGZhbHNlLCB0aGUgY2FsbCBza2lwcyB0aGUgZWxlbWVudCdzIHF1ZXVlIGFuZCBmaXJlcyBpbW1lZGlhdGVseS4gKi9cblx0XHRcdFx0aWYgKG9wdHMucXVldWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0LyogU2luY2UgdGhpcyBidWlsZFF1ZXVlIGNhbGwgZG9lc24ndCByZXNwZWN0IHRoZSBlbGVtZW50J3MgZXhpc3RpbmcgcXVldWUgKHdoaWNoIGlzIHdoZXJlIGEgZGVsYXkgb3B0aW9uIHdvdWxkIGhhdmUgYmVlbiBhcHBlbmRlZCksXG5cdFx0XHRcdFx0IHdlIG1hbnVhbGx5IGluamVjdCB0aGUgZGVsYXkgcHJvcGVydHkgaGVyZSB3aXRoIGFuIGV4cGxpY2l0IHNldFRpbWVvdXQuICovXG5cdFx0XHRcdFx0aWYgKG9wdHMuZGVsYXkpIHtcblxuXHRcdFx0XHRcdFx0LyogVGVtcG9yYXJpbHkgc3RvcmUgZGVsYXllZCBlbGVtZW50cyB0byBmYWNpbGl0YXRlIGFjY2VzcyBmb3IgZ2xvYmFsIHBhdXNlL3Jlc3VtZSAqL1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxJbmRleCA9IFZlbG9jaXR5LlN0YXRlLmRlbGF5ZWRFbGVtZW50cy5jb3VudCsrO1xuXHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzW2NhbGxJbmRleF0gPSBlbGVtZW50O1xuXG5cdFx0XHRcdFx0XHR2YXIgZGVsYXlDb21wbGV0ZSA9IChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0LyogQ2xlYXIgdGhlIHRlbXBvcmFyeSBlbGVtZW50ICovXG5cdFx0XHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuZGVsYXllZEVsZW1lbnRzW2luZGV4XSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdFx0LyogRmluYWxseSwgaXNzdWUgdGhlIGNhbGwgKi9cblx0XHRcdFx0XHRcdFx0XHRidWlsZFF1ZXVlKCk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KShjYWxsSW5kZXgpO1xuXG5cdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLmRlbGF5QmVnaW4gPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuXHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5kZWxheSA9IHBhcnNlRmxvYXQob3B0cy5kZWxheSk7XG5cdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLmRlbGF5VGltZXIgPSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQ6IHNldFRpbWVvdXQoYnVpbGRRdWV1ZSwgcGFyc2VGbG9hdChvcHRzLmRlbGF5KSksXG5cdFx0XHRcdFx0XHRcdG5leHQ6IGRlbGF5Q29tcGxldGVcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJ1aWxkUXVldWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LyogT3RoZXJ3aXNlLCB0aGUgY2FsbCB1bmRlcmdvZXMgZWxlbWVudCBxdWV1ZWluZyBhcyBub3JtYWwuICovXG5cdFx0XHRcdFx0LyogTm90ZTogVG8gaW50ZXJvcGVyYXRlIHdpdGggalF1ZXJ5LCBWZWxvY2l0eSB1c2VzIGpRdWVyeSdzIG93biAkLnF1ZXVlKCkgc3RhY2sgZm9yIHF1ZXVpbmcgbG9naWMuICovXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5xdWV1ZShlbGVtZW50LCBvcHRzLnF1ZXVlLCBmdW5jdGlvbihuZXh0LCBjbGVhclF1ZXVlKSB7XG5cdFx0XHRcdFx0XHQvKiBJZiB0aGUgY2xlYXJRdWV1ZSBmbGFnIHdhcyBwYXNzZWQgaW4gYnkgdGhlIHN0b3AgY29tbWFuZCwgcmVzb2x2ZSB0aGlzIGNhbGwncyBwcm9taXNlLiAoUHJvbWlzZXMgY2FuIG9ubHkgYmUgcmVzb2x2ZWQgb25jZSxcblx0XHRcdFx0XHRcdCBzbyBpdCdzIGZpbmUgaWYgdGhpcyBpcyByZXBlYXRlZGx5IHRyaWdnZXJlZCBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBhc3NvY2lhdGVkIGNhbGwuKSAqL1xuXHRcdFx0XHRcdFx0aWYgKGNsZWFyUXVldWUgPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHByb21pc2VEYXRhLnByb21pc2UpIHtcblx0XHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcihlbGVtZW50cyk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvKiBEbyBub3QgY29udGludWUgd2l0aCBhbmltYXRpb24gcXVldWVpbmcuICovXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBUaGlzIGZsYWcgaW5kaWNhdGVzIHRvIHRoZSB1cGNvbWluZyBjb21wbGV0ZUNhbGwoKSBmdW5jdGlvbiB0aGF0IHRoaXMgcXVldWUgZW50cnkgd2FzIGluaXRpYXRlZCBieSBWZWxvY2l0eS5cblx0XHRcdFx0XHRcdCBTZWUgY29tcGxldGVDYWxsKCkgZm9yIGZ1cnRoZXIgZGV0YWlscy4gKi9cblx0XHRcdFx0XHRcdFZlbG9jaXR5LnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHRidWlsZFF1ZXVlKG5leHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHQgQXV0by1EZXF1ZXVpbmdcblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHQvKiBBcyBwZXIgalF1ZXJ5J3MgJC5xdWV1ZSgpIGJlaGF2aW9yLCB0byBmaXJlIHRoZSBmaXJzdCBub24tY3VzdG9tLXF1ZXVlIGVudHJ5IG9uIGFuIGVsZW1lbnQsIHRoZSBlbGVtZW50XG5cdFx0XHRcdCBtdXN0IGJlIGRlcXVldWVkIGlmIGl0cyBxdWV1ZSBzdGFjayBjb25zaXN0cyAqc29sZWx5KiBvZiB0aGUgY3VycmVudCBjYWxsLiAoVGhpcyBjYW4gYmUgZGV0ZXJtaW5lZCBieSBjaGVja2luZ1xuXHRcdFx0XHQgZm9yIHRoZSBcImlucHJvZ3Jlc3NcIiBpdGVtIHRoYXQgalF1ZXJ5IHByZXBlbmRzIHRvIGFjdGl2ZSBxdWV1ZSBzdGFjayBhcnJheXMuKSBSZWdhcmRsZXNzLCB3aGVuZXZlciB0aGUgZWxlbWVudCdzXG5cdFx0XHRcdCBxdWV1ZSBpcyBmdXJ0aGVyIGFwcGVuZGVkIHdpdGggYWRkaXRpb25hbCBpdGVtcyAtLSBpbmNsdWRpbmcgJC5kZWxheSgpJ3Mgb3IgZXZlbiAkLmFuaW1hdGUoKSBjYWxscywgdGhlIHF1ZXVlJ3Ncblx0XHRcdFx0IGZpcnN0IGVudHJ5IGlzIGF1dG9tYXRpY2FsbHkgZmlyZWQuIFRoaXMgYmVoYXZpb3IgY29udHJhc3RzIHRoYXQgb2YgY3VzdG9tIHF1ZXVlcywgd2hpY2ggbmV2ZXIgYXV0by1maXJlLiAqL1xuXHRcdFx0XHQvKiBOb3RlOiBXaGVuIGFuIGVsZW1lbnQgc2V0IGlzIGJlaW5nIHN1YmplY3RlZCB0byBhIG5vbi1wYXJhbGxlbCBWZWxvY2l0eSBjYWxsLCB0aGUgYW5pbWF0aW9uIHdpbGwgbm90IGJlZ2luIHVudGlsXG5cdFx0XHRcdCBlYWNoIG9uZSBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIHNldCBoYXMgcmVhY2hlZCB0aGUgZW5kIG9mIGl0cyBpbmRpdmlkdWFsbHkgcHJlLWV4aXN0aW5nIHF1ZXVlIGNoYWluLiAqL1xuXHRcdFx0XHQvKiBOb3RlOiBVbmZvcnR1bmF0ZWx5LCBtb3N0IHBlb3BsZSBkb24ndCBmdWxseSBncmFzcCBqUXVlcnkncyBwb3dlcmZ1bCwgeWV0IHF1aXJreSwgJC5xdWV1ZSgpIGZ1bmN0aW9uLlxuXHRcdFx0XHQgTGVhbiBtb3JlIGhlcmU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1ODE1OC9jYW4tc29tZWJvZHktZXhwbGFpbi1qcXVlcnktcXVldWUtdG8tbWUgKi9cblx0XHRcdFx0aWYgKChvcHRzLnF1ZXVlID09PSBcIlwiIHx8IG9wdHMucXVldWUgPT09IFwiZnhcIikgJiYgJC5xdWV1ZShlbGVtZW50KVswXSAhPT0gXCJpbnByb2dyZXNzXCIpIHtcblx0XHRcdFx0XHQkLmRlcXVldWUoZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgRWxlbWVudCBTZXQgSXRlcmF0aW9uXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdC8qIElmIHRoZSBcIm5vZGVUeXBlXCIgcHJvcGVydHkgZXhpc3RzIG9uIHRoZSBlbGVtZW50cyB2YXJpYWJsZSwgd2UncmUgYW5pbWF0aW5nIGEgc2luZ2xlIGVsZW1lbnQuXG5cdFx0XHQgUGxhY2UgaXQgaW4gYW4gYXJyYXkgc28gdGhhdCAkLmVhY2goKSBjYW4gaXRlcmF0ZSBvdmVyIGl0LiAqL1xuXHRcdFx0JC5lYWNoKGVsZW1lbnRzLCBmdW5jdGlvbihpLCBlbGVtZW50KSB7XG5cdFx0XHRcdC8qIEVuc3VyZSBlYWNoIGVsZW1lbnQgaW4gYSBzZXQgaGFzIGEgbm9kZVR5cGUgKGlzIGEgcmVhbCBlbGVtZW50KSB0byBhdm9pZCB0aHJvd2luZyBlcnJvcnMuICovXG5cdFx0XHRcdGlmIChUeXBlLmlzTm9kZShlbGVtZW50KSkge1xuXHRcdFx0XHRcdHByb2Nlc3NFbGVtZW50KGVsZW1lbnQsIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKlxuXHRcdFx0IE9wdGlvbjogTG9vcFxuXHRcdFx0ICoqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0LyogVGhlIGxvb3Agb3B0aW9uIGFjY2VwdHMgYW4gaW50ZWdlciBpbmRpY2F0aW5nIGhvdyBtYW55IHRpbWVzIHRoZSBlbGVtZW50IHNob3VsZCBsb29wIGJldHdlZW4gdGhlIHZhbHVlcyBpbiB0aGVcblx0XHRcdCBjdXJyZW50IGNhbGwncyBwcm9wZXJ0aWVzIG1hcCBhbmQgdGhlIGVsZW1lbnQncyBwcm9wZXJ0eSB2YWx1ZXMgcHJpb3IgdG8gdGhpcyBjYWxsLiAqL1xuXHRcdFx0LyogTm90ZTogVGhlIGxvb3Agb3B0aW9uJ3MgbG9naWMgaXMgcGVyZm9ybWVkIGhlcmUgLS0gYWZ0ZXIgZWxlbWVudCBwcm9jZXNzaW5nIC0tIGJlY2F1c2UgdGhlIGN1cnJlbnQgY2FsbCBuZWVkc1xuXHRcdFx0IHRvIHVuZGVyZ28gaXRzIHF1ZXVlIGluc2VydGlvbiBwcmlvciB0byB0aGUgbG9vcCBvcHRpb24gZ2VuZXJhdGluZyBpdHMgc2VyaWVzIG9mIGNvbnN0aXR1ZW50IFwicmV2ZXJzZVwiIGNhbGxzLFxuXHRcdFx0IHdoaWNoIGNoYWluIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwuIFR3byByZXZlcnNlIGNhbGxzICh0d28gXCJhbHRlcm5hdGlvbnNcIikgY29uc3RpdHV0ZSBvbmUgbG9vcC4gKi9cblx0XHRcdG9wdHMgPSAkLmV4dGVuZCh7fSwgVmVsb2NpdHkuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXHRcdFx0b3B0cy5sb29wID0gcGFyc2VJbnQob3B0cy5sb29wLCAxMCk7XG5cdFx0XHR2YXIgcmV2ZXJzZUNhbGxzQ291bnQgPSAob3B0cy5sb29wICogMikgLSAxO1xuXG5cdFx0XHRpZiAob3B0cy5sb29wKSB7XG5cdFx0XHRcdC8qIERvdWJsZSB0aGUgbG9vcCBjb3VudCB0byBjb252ZXJ0IGl0IGludG8gaXRzIGFwcHJvcHJpYXRlIG51bWJlciBvZiBcInJldmVyc2VcIiBjYWxscy5cblx0XHRcdFx0IFN1YnRyYWN0IDEgZnJvbSB0aGUgcmVzdWx0aW5nIHZhbHVlIHNpbmNlIHRoZSBjdXJyZW50IGNhbGwgaXMgaW5jbHVkZWQgaW4gdGhlIHRvdGFsIGFsdGVybmF0aW9uIGNvdW50LiAqL1xuXHRcdFx0XHRmb3IgKHZhciB4ID0gMDsgeCA8IHJldmVyc2VDYWxsc0NvdW50OyB4KyspIHtcblx0XHRcdFx0XHQvKiBTaW5jZSB0aGUgbG9naWMgZm9yIHRoZSByZXZlcnNlIGFjdGlvbiBvY2N1cnMgaW5zaWRlIFF1ZXVlaW5nIGFuZCB0aGVyZWZvcmUgdGhpcyBjYWxsJ3Mgb3B0aW9ucyBvYmplY3Rcblx0XHRcdFx0XHQgaXNuJ3QgcGFyc2VkIHVudGlsIHRoZW4gYXMgd2VsbCwgdGhlIGN1cnJlbnQgY2FsbCdzIGRlbGF5IG9wdGlvbiBtdXN0IGJlIGV4cGxpY2l0bHkgcGFzc2VkIGludG8gdGhlIHJldmVyc2Vcblx0XHRcdFx0XHQgY2FsbCBzbyB0aGF0IHRoZSBkZWxheSBsb2dpYyB0aGF0IG9jY3VycyBpbnNpZGUgKlByZS1RdWV1ZWluZyogY2FuIHByb2Nlc3MgaXQuICovXG5cdFx0XHRcdFx0dmFyIHJldmVyc2VPcHRpb25zID0ge1xuXHRcdFx0XHRcdFx0ZGVsYXk6IG9wdHMuZGVsYXksXG5cdFx0XHRcdFx0XHRwcm9ncmVzczogb3B0cy5wcm9ncmVzc1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHQvKiBJZiBhIGNvbXBsZXRlIGNhbGxiYWNrIHdhcyBwYXNzZWQgaW50byB0aGlzIGNhbGwsIHRyYW5zZmVyIGl0IHRvIHRoZSBsb29wIHJlZGlyZWN0J3MgZmluYWwgXCJyZXZlcnNlXCIgY2FsbFxuXHRcdFx0XHRcdCBzbyB0aGF0IGl0J3MgdHJpZ2dlcmVkIHdoZW4gdGhlIGVudGlyZSByZWRpcmVjdCBpcyBjb21wbGV0ZSAoYW5kIG5vdCB3aGVuIHRoZSB2ZXJ5IGZpcnN0IGFuaW1hdGlvbiBpcyBjb21wbGV0ZSkuICovXG5cdFx0XHRcdFx0aWYgKHggPT09IHJldmVyc2VDYWxsc0NvdW50IC0gMSkge1xuXHRcdFx0XHRcdFx0cmV2ZXJzZU9wdGlvbnMuZGlzcGxheSA9IG9wdHMuZGlzcGxheTtcblx0XHRcdFx0XHRcdHJldmVyc2VPcHRpb25zLnZpc2liaWxpdHkgPSBvcHRzLnZpc2liaWxpdHk7XG5cdFx0XHRcdFx0XHRyZXZlcnNlT3B0aW9ucy5jb21wbGV0ZSA9IG9wdHMuY29tcGxldGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZShlbGVtZW50cywgXCJyZXZlcnNlXCIsIHJldmVyc2VPcHRpb25zKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKioqKioqKioqKioqKioqXG5cdFx0XHQgQ2hhaW5pbmdcblx0XHRcdCAqKioqKioqKioqKioqKiovXG5cblx0XHRcdC8qIFJldHVybiB0aGUgZWxlbWVudHMgYmFjayB0byB0aGUgY2FsbCBjaGFpbiwgd2l0aCB3cmFwcGVkIGVsZW1lbnRzIHRha2luZyBwcmVjZWRlbmNlIGluIGNhc2UgVmVsb2NpdHkgd2FzIGNhbGxlZCB2aWEgdGhlICQuZm4uIGV4dGVuc2lvbi4gKi9cblx0XHRcdHJldHVybiBnZXRDaGFpbigpO1xuXHRcdH07XG5cblx0XHQvKiBUdXJuIFZlbG9jaXR5IGludG8gdGhlIGFuaW1hdGlvbiBmdW5jdGlvbiwgZXh0ZW5kZWQgd2l0aCB0aGUgcHJlLWV4aXN0aW5nIFZlbG9jaXR5IG9iamVjdC4gKi9cblx0XHRWZWxvY2l0eSA9ICQuZXh0ZW5kKGFuaW1hdGUsIFZlbG9jaXR5KTtcblx0XHQvKiBGb3IgbGVnYWN5IHN1cHBvcnQsIGFsc28gZXhwb3NlIHRoZSBsaXRlcmFsIGFuaW1hdGUgbWV0aG9kLiAqL1xuXHRcdFZlbG9jaXR5LmFuaW1hdGUgPSBhbmltYXRlO1xuXG5cdFx0LyoqKioqKioqKioqKioqXG5cdFx0IFRpbWluZ1xuXHRcdCAqKioqKioqKioqKioqKi9cblxuXHRcdC8qIFRpY2tlciBmdW5jdGlvbi4gKi9cblx0XHR2YXIgdGlja2VyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByQUZTaGltO1xuXG5cdFx0LyogSW5hY3RpdmUgYnJvd3NlciB0YWJzIHBhdXNlIHJBRiwgd2hpY2ggcmVzdWx0cyBpbiBhbGwgYWN0aXZlIGFuaW1hdGlvbnMgaW1tZWRpYXRlbHkgc3ByaW50aW5nIHRvIHRoZWlyIGNvbXBsZXRpb24gc3RhdGVzIHdoZW4gdGhlIHRhYiByZWZvY3VzZXMuXG5cdFx0IFRvIGdldCBhcm91bmQgdGhpcywgd2UgZHluYW1pY2FsbHkgc3dpdGNoIHJBRiB0byBzZXRUaW1lb3V0ICh3aGljaCB0aGUgYnJvd3NlciAqZG9lc24ndCogcGF1c2UpIHdoZW4gdGhlIHRhYiBsb3NlcyBmb2N1cy4gV2Ugc2tpcCB0aGlzIGZvciBtb2JpbGVcblx0XHQgZGV2aWNlcyB0byBhdm9pZCB3YXN0aW5nIGJhdHRlcnkgcG93ZXIgb24gaW5hY3RpdmUgdGFicy4gKi9cblx0XHQvKiBOb3RlOiBUYWIgZm9jdXMgZGV0ZWN0aW9uIGRvZXNuJ3Qgd29yayBvbiBvbGRlciB2ZXJzaW9ucyBvZiBJRSwgYnV0IHRoYXQncyBva2F5IHNpbmNlIHRoZXkgZG9uJ3Qgc3VwcG9ydCByQUYgdG8gYmVnaW4gd2l0aC4gKi9cblx0XHRpZiAoIVZlbG9jaXR5LlN0YXRlLmlzTW9iaWxlICYmIGRvY3VtZW50LmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgdXBkYXRlVGlja2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8qIFJlYXNzaWduIHRoZSByQUYgZnVuY3Rpb24gKHdoaWNoIHRoZSBnbG9iYWwgdGljaygpIGZ1bmN0aW9uIHVzZXMpIGJhc2VkIG9uIHRoZSB0YWIncyBmb2N1cyBzdGF0ZS4gKi9cblx0XHRcdFx0aWYgKGRvY3VtZW50LmhpZGRlbikge1xuXHRcdFx0XHRcdHRpY2tlciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHQvKiBUaGUgdGljayBmdW5jdGlvbiBuZWVkcyBhIHRydXRoeSBmaXJzdCBhcmd1bWVudCBpbiBvcmRlciB0byBwYXNzIGl0cyBpbnRlcm5hbCB0aW1lc3RhbXAgY2hlY2suICovXG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCAxNik7XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdC8qIFRoZSByQUYgbG9vcCBoYXMgYmVlbiBwYXVzZWQgYnkgdGhlIGJyb3dzZXIsIHNvIHdlIG1hbnVhbGx5IHJlc3RhcnQgdGhlIHRpY2suICovXG5cdFx0XHRcdFx0dGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpY2tlciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgckFGU2hpbTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0LyogUGFnZSBjb3VsZCBiZSBzaXR0aW5nIGluIHRoZSBiYWNrZ3JvdW5kIGF0IHRoaXMgdGltZSAoaS5lLiBvcGVuZWQgYXMgbmV3IHRhYikgc28gbWFraW5nIHN1cmUgd2UgdXNlIGNvcnJlY3QgdGlja2VyIGZyb20gdGhlIHN0YXJ0ICovXG5cdFx0XHR1cGRhdGVUaWNrZXIoKTtcblxuXHRcdFx0LyogQW5kIHRoZW4gcnVuIGNoZWNrIGFnYWluIGV2ZXJ5IHRpbWUgdmlzaWJpbGl0eSBjaGFuZ2VzICovXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB1cGRhdGVUaWNrZXIpO1xuXHRcdH1cblxuXHRcdC8qKioqKioqKioqKipcblx0XHQgVGlja1xuXHRcdCAqKioqKioqKioqKiovXG5cblx0XHQvKiBOb3RlOiBBbGwgY2FsbHMgdG8gVmVsb2NpdHkgYXJlIHB1c2hlZCB0byB0aGUgVmVsb2NpdHkuU3RhdGUuY2FsbHMgYXJyYXksIHdoaWNoIGlzIGZ1bGx5IGl0ZXJhdGVkIHRocm91Z2ggdXBvbiBlYWNoIHRpY2suICovXG5cdFx0ZnVuY3Rpb24gdGljayh0aW1lc3RhbXApIHtcblx0XHRcdC8qIEFuIGVtcHR5IHRpbWVzdGFtcCBhcmd1bWVudCBpbmRpY2F0ZXMgdGhhdCB0aGlzIGlzIHRoZSBmaXJzdCB0aWNrIG9jY3VyZW5jZSBzaW5jZSB0aWNraW5nIHdhcyB0dXJuZWQgb24uXG5cdFx0XHQgV2UgbGV2ZXJhZ2UgdGhpcyBtZXRhZGF0YSB0byBmdWxseSBpZ25vcmUgdGhlIGZpcnN0IHRpY2sgcGFzcyBzaW5jZSBSQUYncyBpbml0aWFsIHBhc3MgaXMgZmlyZWQgd2hlbmV2ZXJcblx0XHRcdCB0aGUgYnJvd3NlcidzIG5leHQgdGljayBzeW5jIHRpbWUgb2NjdXJzLCB3aGljaCByZXN1bHRzIGluIHRoZSBmaXJzdCBlbGVtZW50cyBzdWJqZWN0ZWQgdG8gVmVsb2NpdHlcblx0XHRcdCBjYWxscyBiZWluZyBhbmltYXRlZCBvdXQgb2Ygc3luYyB3aXRoIGFueSBlbGVtZW50cyBhbmltYXRlZCBpbW1lZGlhdGVseSB0aGVyZWFmdGVyLiBJbiBzaG9ydCwgd2UgaWdub3JlXG5cdFx0XHQgdGhlIGZpcnN0IFJBRiB0aWNrIHBhc3Mgc28gdGhhdCBlbGVtZW50cyBiZWluZyBpbW1lZGlhdGVseSBjb25zZWN1dGl2ZWx5IGFuaW1hdGVkIC0tIGluc3RlYWQgb2Ygc2ltdWx0YW5lb3VzbHkgYW5pbWF0ZWRcblx0XHRcdCBieSB0aGUgc2FtZSBWZWxvY2l0eSBjYWxsIC0tIGFyZSBwcm9wZXJseSBiYXRjaGVkIGludG8gdGhlIHNhbWUgaW5pdGlhbCBSQUYgdGljayBhbmQgY29uc2VxdWVudGx5IHJlbWFpbiBpbiBzeW5jIHRoZXJlYWZ0ZXIuICovXG5cdFx0XHRpZiAodGltZXN0YW1wKSB7XG5cdFx0XHRcdC8qIFdlIG5vcm1hbGx5IHVzZSBSQUYncyBoaWdoIHJlc29sdXRpb24gdGltZXN0YW1wIGJ1dCBhcyBpdCBjYW4gYmUgc2lnbmlmaWNhbnRseSBvZmZzZXQgd2hlbiB0aGUgYnJvd3NlciBpc1xuXHRcdFx0XHQgdW5kZXIgaGlnaCBzdHJlc3Mgd2UgZ2l2ZSB0aGUgb3B0aW9uIGZvciBjaG9wcGluZXNzIG92ZXIgYWxsb3dpbmcgdGhlIGJyb3dzZXIgdG8gZHJvcCBodWdlIGNodW5rcyBvZiBmcmFtZXMuXG5cdFx0XHRcdCBXZSB1c2UgcGVyZm9ybWFuY2Uubm93KCkgYW5kIHNoaW0gaXQgaWYgaXQgZG9lc24ndCBleGlzdCBmb3Igd2hlbiB0aGUgdGFiIGlzIGhpZGRlbi4gKi9cblx0XHRcdFx0dmFyIHRpbWVDdXJyZW50ID0gVmVsb2NpdHkudGltZXN0YW1wICYmIHRpbWVzdGFtcCAhPT0gdHJ1ZSA/IHRpbWVzdGFtcCA6IHBlcmZvcm1hbmNlLm5vdygpO1xuXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHQgQ2FsbCBJdGVyYXRpb25cblx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdHZhciBjYWxsc0xlbmd0aCA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzLmxlbmd0aDtcblxuXHRcdFx0XHQvKiBUbyBzcGVlZCB1cCBpdGVyYXRpbmcgb3ZlciB0aGlzIGFycmF5LCBpdCBpcyBjb21wYWN0ZWQgKGZhbHNleSBpdGVtcyAtLSBjYWxscyB0aGF0IGhhdmUgY29tcGxldGVkIC0tIGFyZSByZW1vdmVkKVxuXHRcdFx0XHQgd2hlbiBpdHMgbGVuZ3RoIGhhcyBiYWxsb29uZWQgdG8gYSBwb2ludCB0aGF0IGNhbiBpbXBhY3QgdGljayBwZXJmb3JtYW5jZS4gVGhpcyBvbmx5IGJlY29tZXMgbmVjZXNzYXJ5IHdoZW4gYW5pbWF0aW9uXG5cdFx0XHRcdCBoYXMgYmVlbiBjb250aW51b3VzIHdpdGggbWFueSBlbGVtZW50cyBvdmVyIGEgbG9uZyBwZXJpb2Qgb2YgdGltZTsgd2hlbmV2ZXIgYWxsIGFjdGl2ZSBjYWxscyBhcmUgY29tcGxldGVkLCBjb21wbGV0ZUNhbGwoKSBjbGVhcnMgVmVsb2NpdHkuU3RhdGUuY2FsbHMuICovXG5cdFx0XHRcdGlmIChjYWxsc0xlbmd0aCA+IDEwMDAwKSB7XG5cdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHMgPSBjb21wYWN0U3BhcnNlQXJyYXkoVmVsb2NpdHkuU3RhdGUuY2FsbHMpO1xuXHRcdFx0XHRcdGNhbGxzTGVuZ3RoID0gVmVsb2NpdHkuU3RhdGUuY2FsbHMubGVuZ3RoO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogSXRlcmF0ZSB0aHJvdWdoIGVhY2ggYWN0aXZlIGNhbGwuICovXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbHNMZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdC8qIFdoZW4gYSBWZWxvY2l0eSBjYWxsIGlzIGNvbXBsZXRlZCwgaXRzIFZlbG9jaXR5LlN0YXRlLmNhbGxzIGVudHJ5IGlzIHNldCB0byBmYWxzZS4gQ29udGludWUgb24gdG8gdGhlIG5leHQgY2FsbC4gKi9cblx0XHRcdFx0XHRpZiAoIVZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0IENhbGwtV2lkZSBWYXJpYWJsZXNcblx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0dmFyIGNhbGxDb250YWluZXIgPSBWZWxvY2l0eS5TdGF0ZS5jYWxsc1tpXSxcblx0XHRcdFx0XHRcdFx0Y2FsbCA9IGNhbGxDb250YWluZXJbMF0sXG5cdFx0XHRcdFx0XHRcdG9wdHMgPSBjYWxsQ29udGFpbmVyWzJdLFxuXHRcdFx0XHRcdFx0XHR0aW1lU3RhcnQgPSBjYWxsQ29udGFpbmVyWzNdLFxuXHRcdFx0XHRcdFx0XHRmaXJzdFRpY2sgPSAhIXRpbWVTdGFydCxcblx0XHRcdFx0XHRcdFx0dHdlZW5EdW1teVZhbHVlID0gbnVsbCxcblx0XHRcdFx0XHRcdFx0cGF1c2VPYmplY3QgPSBjYWxsQ29udGFpbmVyWzVdLFxuXHRcdFx0XHRcdFx0XHRtaWxsaXNlY29uZHNFbGxhcHNlZCA9IGNhbGxDb250YWluZXJbNl07XG5cblxuXG5cdFx0XHRcdFx0LyogSWYgdGltZVN0YXJ0IGlzIHVuZGVmaW5lZCwgdGhlbiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoYXQgdGhpcyBjYWxsIGhhcyBiZWVuIHByb2Nlc3NlZCBieSB0aWNrKCkuXG5cdFx0XHRcdFx0IFdlIGFzc2lnbiB0aW1lU3RhcnQgbm93IHNvIHRoYXQgaXRzIHZhbHVlIGlzIGFzIGNsb3NlIHRvIHRoZSByZWFsIGFuaW1hdGlvbiBzdGFydCB0aW1lIGFzIHBvc3NpYmxlLlxuXHRcdFx0XHRcdCAoQ29udmVyc2VseSwgaGFkIHRpbWVTdGFydCBiZWVuIGRlZmluZWQgd2hlbiB0aGlzIGNhbGwgd2FzIGFkZGVkIHRvIFZlbG9jaXR5LlN0YXRlLmNhbGxzLCB0aGUgZGVsYXlcblx0XHRcdFx0XHQgYmV0d2VlbiB0aGF0IHRpbWUgYW5kIG5vdyB3b3VsZCBjYXVzZSB0aGUgZmlyc3QgZmV3IGZyYW1lcyBvZiB0aGUgdHdlZW4gdG8gYmUgc2tpcHBlZCBzaW5jZVxuXHRcdFx0XHRcdCBwZXJjZW50Q29tcGxldGUgaXMgY2FsY3VsYXRlZCByZWxhdGl2ZSB0byB0aW1lU3RhcnQuKSAqL1xuXHRcdFx0XHRcdC8qIEZ1cnRoZXIsIHN1YnRyYWN0IDE2bXMgKHRoZSBhcHByb3hpbWF0ZSByZXNvbHV0aW9uIG9mIFJBRikgZnJvbSB0aGUgY3VycmVudCB0aW1lIHZhbHVlIHNvIHRoYXQgdGhlXG5cdFx0XHRcdFx0IGZpcnN0IHRpY2sgaXRlcmF0aW9uIGlzbid0IHdhc3RlZCBieSBhbmltYXRpbmcgYXQgMCUgdHdlZW4gY29tcGxldGlvbiwgd2hpY2ggd291bGQgcHJvZHVjZSB0aGVcblx0XHRcdFx0XHQgc2FtZSBzdHlsZSB2YWx1ZSBhcyB0aGUgZWxlbWVudCdzIGN1cnJlbnQgdmFsdWUuICovXG5cdFx0XHRcdFx0aWYgKCF0aW1lU3RhcnQpIHtcblx0XHRcdFx0XHRcdHRpbWVTdGFydCA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldWzNdID0gdGltZUN1cnJlbnQgLSAxNjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBJZiBhIHBhdXNlIG9iamVjdCBpcyBwcmVzZW50LCBza2lwIHByb2Nlc3NpbmcgdW5sZXNzIGl0IGhhcyBiZWVuIHNldCB0byByZXN1bWUgKi9cblx0XHRcdFx0XHRpZiAocGF1c2VPYmplY3QpIHtcblx0XHRcdFx0XHRcdGlmIChwYXVzZU9iamVjdC5yZXN1bWUgPT09IHRydWUpIHtcblx0XHRcdFx0XHRcdFx0LyogVXBkYXRlIHRoZSB0aW1lIHN0YXJ0IHRvIGFjY29tb2RhdGUgdGhlIHBhdXNlZCBjb21wbGV0aW9uIGFtb3VudCAqL1xuXHRcdFx0XHRcdFx0XHR0aW1lU3RhcnQgPSBjYWxsQ29udGFpbmVyWzNdID0gTWF0aC5yb3VuZCh0aW1lQ3VycmVudCAtIG1pbGxpc2Vjb25kc0VsbGFwc2VkIC0gMTYpO1xuXG5cdFx0XHRcdFx0XHRcdC8qIFJlbW92ZSBwYXVzZSBvYmplY3QgYWZ0ZXIgcHJvY2Vzc2luZyAqL1xuXHRcdFx0XHRcdFx0XHRjYWxsQ29udGFpbmVyWzVdID0gbnVsbDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1pbGxpc2Vjb25kc0VsbGFwc2VkID0gY2FsbENvbnRhaW5lcls2XSA9IHRpbWVDdXJyZW50IC0gdGltZVN0YXJ0O1xuXG5cdFx0XHRcdFx0LyogVGhlIHR3ZWVuJ3MgY29tcGxldGlvbiBwZXJjZW50YWdlIGlzIHJlbGF0aXZlIHRvIHRoZSB0d2VlbidzIHN0YXJ0IHRpbWUsIG5vdCB0aGUgdHdlZW4ncyBzdGFydCB2YWx1ZVxuXHRcdFx0XHRcdCAod2hpY2ggd291bGQgcmVzdWx0IGluIHVucHJlZGljdGFibGUgdHdlZW4gZHVyYXRpb25zIHNpbmNlIEphdmFTY3JpcHQncyB0aW1lcnMgYXJlIG5vdCBwYXJ0aWN1bGFybHkgYWNjdXJhdGUpLlxuXHRcdFx0XHRcdCBBY2NvcmRpbmdseSwgd2UgZW5zdXJlIHRoYXQgcGVyY2VudENvbXBsZXRlIGRvZXMgbm90IGV4Y2VlZCAxLiAqL1xuXHRcdFx0XHRcdHZhciBwZXJjZW50Q29tcGxldGUgPSBNYXRoLm1pbigobWlsbGlzZWNvbmRzRWxsYXBzZWQpIC8gb3B0cy5kdXJhdGlvbiwgMSk7XG5cblx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdCBFbGVtZW50IEl0ZXJhdGlvblxuXHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0LyogRm9yIGV2ZXJ5IGNhbGwsIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIG9mIHRoZSBlbGVtZW50cyBpbiBpdHMgc2V0LiAqL1xuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwLCBjYWxsTGVuZ3RoID0gY2FsbC5sZW5ndGg7IGogPCBjYWxsTGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdHZhciB0d2VlbnNDb250YWluZXIgPSBjYWxsW2pdLFxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQgPSB0d2VlbnNDb250YWluZXIuZWxlbWVudDtcblxuXHRcdFx0XHRcdFx0LyogQ2hlY2sgdG8gc2VlIGlmIHRoaXMgZWxlbWVudCBoYXMgYmVlbiBkZWxldGVkIG1pZHdheSB0aHJvdWdoIHRoZSBhbmltYXRpb24gYnkgY2hlY2tpbmcgZm9yIHRoZVxuXHRcdFx0XHRcdFx0IGNvbnRpbnVlZCBleGlzdGVuY2Ugb2YgaXRzIGRhdGEgY2FjaGUuIElmIGl0J3MgZ29uZSwgb3IgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IHBhdXNlZCwgc2tpcCBhbmltYXRpbmcgdGhpcyBlbGVtZW50LiAqL1xuXHRcdFx0XHRcdFx0aWYgKCFEYXRhKGVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgdHJhbnNmb3JtUHJvcGVydHlFeGlzdHMgPSBmYWxzZTtcblxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdCBEaXNwbGF5ICYgVmlzaWJpbGl0eSBUb2dnbGluZ1xuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdC8qIElmIHRoZSBkaXNwbGF5IG9wdGlvbiBpcyBzZXQgdG8gbm9uLVwibm9uZVwiLCBzZXQgaXQgdXBmcm9udCBzbyB0aGF0IHRoZSBlbGVtZW50IGNhbiBiZWNvbWUgdmlzaWJsZSBiZWZvcmUgdHdlZW5pbmcgYmVnaW5zLlxuXHRcdFx0XHRcdFx0IChPdGhlcndpc2UsIGRpc3BsYXkncyBcIm5vbmVcIiB2YWx1ZSBpcyBzZXQgaW4gY29tcGxldGVDYWxsKCkgb25jZSB0aGUgYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQuKSAqL1xuXHRcdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG9wdHMuZGlzcGxheSAhPT0gbnVsbCAmJiBvcHRzLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRzLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGZsZXhWYWx1ZXMgPSBbXCItd2Via2l0LWJveFwiLCBcIi1tb3otYm94XCIsIFwiLW1zLWZsZXhib3hcIiwgXCItd2Via2l0LWZsZXhcIl07XG5cblx0XHRcdFx0XHRcdFx0XHQkLmVhY2goZmxleFZhbHVlcywgZnVuY3Rpb24oaSwgZmxleFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcImRpc3BsYXlcIiwgZmxleFZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdENTUy5zZXRQcm9wZXJ0eVZhbHVlKGVsZW1lbnQsIFwiZGlzcGxheVwiLCBvcHRzLmRpc3BsYXkpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvKiBTYW1lIGdvZXMgd2l0aCB0aGUgdmlzaWJpbGl0eSBvcHRpb24sIGJ1dCBpdHMgXCJub25lXCIgZXF1aXZhbGVudCBpcyBcImhpZGRlblwiLiAqL1xuXHRcdFx0XHRcdFx0aWYgKG9wdHMudmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIG9wdHMudmlzaWJpbGl0eSAhPT0gXCJoaWRkZW5cIikge1xuXHRcdFx0XHRcdFx0XHRDU1Muc2V0UHJvcGVydHlWYWx1ZShlbGVtZW50LCBcInZpc2liaWxpdHlcIiwgb3B0cy52aXNpYmlsaXR5KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0IFByb3BlcnR5IEl0ZXJhdGlvblxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdFx0LyogRm9yIGV2ZXJ5IGVsZW1lbnQsIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIHByb3BlcnR5LiAqL1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gdHdlZW5zQ29udGFpbmVyKSB7XG5cdFx0XHRcdFx0XHRcdC8qIE5vdGU6IEluIGFkZGl0aW9uIHRvIHByb3BlcnR5IHR3ZWVuIGRhdGEsIHR3ZWVuc0NvbnRhaW5lciBjb250YWlucyBhIHJlZmVyZW5jZSB0byBpdHMgYXNzb2NpYXRlZCBlbGVtZW50LiAqL1xuXHRcdFx0XHRcdFx0XHRpZiAodHdlZW5zQ29udGFpbmVyLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gXCJlbGVtZW50XCIpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgdHdlZW4gPSB0d2VlbnNDb250YWluZXJbcHJvcGVydHldLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qIEVhc2luZyBjYW4gZWl0aGVyIGJlIGEgcHJlLWdlbmVyZWF0ZWQgZnVuY3Rpb24gb3IgYSBzdHJpbmcgdGhhdCByZWZlcmVuY2VzIGEgcHJlLXJlZ2lzdGVyZWQgZWFzaW5nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBvbiB0aGUgVmVsb2NpdHkuRWFzaW5ncyBvYmplY3QuIEluIGVpdGhlciBjYXNlLCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGVhc2luZyAqZnVuY3Rpb24qLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlYXNpbmcgPSBUeXBlLmlzU3RyaW5nKHR3ZWVuLmVhc2luZykgPyBWZWxvY2l0eS5FYXNpbmdzW3R3ZWVuLmVhc2luZ10gOiB0d2Vlbi5lYXNpbmc7XG5cblx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdFx0XHRcdFx0IEN1cnJlbnQgVmFsdWUgQ2FsY3VsYXRpb25cblx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKFR5cGUuaXNTdHJpbmcodHdlZW4ucGF0dGVybikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBwYXR0ZXJuUmVwbGFjZSA9IHBlcmNlbnRDb21wbGV0ZSA9PT0gMSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oJDAsIGluZGV4LCByb3VuZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHR3ZWVuLmVuZFZhbHVlW2luZGV4XTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJvdW5kID8gTWF0aC5yb3VuZChyZXN1bHQpIDogcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCQwLCBpbmRleCwgcm91bmQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBzdGFydFZhbHVlID0gdHdlZW4uc3RhcnRWYWx1ZVtpbmRleF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHdlZW5EZWx0YSA9IHR3ZWVuLmVuZFZhbHVlW2luZGV4XSAtIHN0YXJ0VmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gc3RhcnRWYWx1ZSArICh0d2VlbkRlbHRhICogZWFzaW5nKHBlcmNlbnRDb21wbGV0ZSwgb3B0cywgdHdlZW5EZWx0YSkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcm91bmQgPyBNYXRoLnJvdW5kKHJlc3VsdCkgOiByZXN1bHQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlID0gdHdlZW4ucGF0dGVybi5yZXBsYWNlKC97KFxcZCspKCEpP30vZywgcGF0dGVyblJlcGxhY2UpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocGVyY2VudENvbXBsZXRlID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBJZiB0aGlzIGlzIHRoZSBsYXN0IHRpY2sgcGFzcyAoaWYgd2UndmUgcmVhY2hlZCAxMDAlIGNvbXBsZXRpb24gZm9yIHRoaXMgdHdlZW4pLFxuXHRcdFx0XHRcdFx0XHRcdFx0IGVuc3VyZSB0aGF0IGN1cnJlbnRWYWx1ZSBpcyBleHBsaWNpdGx5IHNldCB0byBpdHMgdGFyZ2V0IGVuZFZhbHVlIHNvIHRoYXQgaXQncyBub3Qgc3ViamVjdGVkIHRvIGFueSByb3VuZGluZy4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuLmVuZFZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBPdGhlcndpc2UsIGNhbGN1bGF0ZSBjdXJyZW50VmFsdWUgYmFzZWQgb24gdGhlIGN1cnJlbnQgZGVsdGEgZnJvbSBzdGFydFZhbHVlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHR3ZWVuRGVsdGEgPSB0d2Vlbi5lbmRWYWx1ZSAtIHR3ZWVuLnN0YXJ0VmFsdWU7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuLnN0YXJ0VmFsdWUgKyAodHdlZW5EZWx0YSAqIGVhc2luZyhwZXJjZW50Q29tcGxldGUsIG9wdHMsIHR3ZWVuRGVsdGEpKTtcblx0XHRcdFx0XHRcdFx0XHRcdC8qIElmIG5vIHZhbHVlIGNoYW5nZSBpcyBvY2N1cnJpbmcsIGRvbid0IHByb2NlZWQgd2l0aCBET00gdXBkYXRpbmcuICovXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGlmICghZmlyc3RUaWNrICYmIChjdXJyZW50VmFsdWUgPT09IHR3ZWVuLmN1cnJlbnRWYWx1ZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHR3ZWVuLmN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcblxuXHRcdFx0XHRcdFx0XHRcdC8qIElmIHdlJ3JlIHR3ZWVuaW5nIGEgZmFrZSAndHdlZW4nIHByb3BlcnR5IGluIG9yZGVyIHRvIGxvZyB0cmFuc2l0aW9uIHZhbHVlcywgdXBkYXRlIHRoZSBvbmUtcGVyLWNhbGwgdmFyaWFibGUgc28gdGhhdFxuXHRcdFx0XHRcdFx0XHRcdCBpdCBjYW4gYmUgcGFzc2VkIGludG8gdGhlIHByb2dyZXNzIGNhbGxiYWNrLiAqL1xuXHRcdFx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA9PT0gXCJ0d2VlblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0d2VlbkR1bW15VmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdFx0XHRcdCBIb29rczogUGFydCBJXG5cdFx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqL1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGhvb2tSb290O1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBGb3IgaG9va2VkIHByb3BlcnRpZXMsIHRoZSBuZXdseS11cGRhdGVkIHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGUgaXMgY2FjaGVkIG9udG8gdGhlIGVsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgdXNlZFxuXHRcdFx0XHRcdFx0XHRcdFx0IGZvciBzdWJzZXF1ZW50IGhvb2tzIGluIHRoaXMgY2FsbCB0aGF0IGFyZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNhbWUgcm9vdCBwcm9wZXJ0eS4gSWYgd2UgZGlkbid0IGNhY2hlIHRoZSB1cGRhdGVkXG5cdFx0XHRcdFx0XHRcdFx0XHQgcm9vdFByb3BlcnR5VmFsdWUsIGVhY2ggc3Vic2VxdWVudCB1cGRhdGUgdG8gdGhlIHJvb3QgcHJvcGVydHkgaW4gdGhpcyB0aWNrIHBhc3Mgd291bGQgcmVzZXQgdGhlIHByZXZpb3VzIGhvb2snc1xuXHRcdFx0XHRcdFx0XHRcdFx0IHVwZGF0ZXMgdG8gcm9vdFByb3BlcnR5VmFsdWUgcHJpb3IgdG8gaW5qZWN0aW9uLiBBIG5pY2UgcGVyZm9ybWFuY2UgYnlwcm9kdWN0IG9mIHJvb3RQcm9wZXJ0eVZhbHVlIGNhY2hpbmcgaXMgdGhhdFxuXHRcdFx0XHRcdFx0XHRcdFx0IHN1YnNlcXVlbnRseSBjaGFpbmVkIGFuaW1hdGlvbnMgdXNpbmcgdGhlIHNhbWUgaG9va1Jvb3QgYnV0IGEgZGlmZmVyZW50IGhvb2sgY2FuIHVzZSB0aGlzIGNhY2hlZCByb290UHJvcGVydHlWYWx1ZS4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdGlmIChDU1MuSG9va3MucmVnaXN0ZXJlZFtwcm9wZXJ0eV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aG9va1Jvb3QgPSBDU1MuSG9va3MuZ2V0Um9vdChwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGUgPSBEYXRhKGVsZW1lbnQpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbaG9va1Jvb3RdO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyb290UHJvcGVydHlWYWx1ZUNhY2hlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHdlZW4ucm9vdFByb3BlcnR5VmFsdWUgPSByb290UHJvcGVydHlWYWx1ZUNhY2hlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHRcdFx0IERPTSBVcGRhdGVcblx0XHRcdFx0XHRcdFx0XHRcdCAqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdFx0XHRcdFx0Lyogc2V0UHJvcGVydHlWYWx1ZSgpIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHByb3BlcnR5IG5hbWUgYW5kIHByb3BlcnR5IHZhbHVlIHBvc3QgYW55IG5vcm1hbGl6YXRpb24gdGhhdCBtYXkgaGF2ZSBiZWVuIHBlcmZvcm1lZC4gKi9cblx0XHRcdFx0XHRcdFx0XHRcdC8qIE5vdGU6IFRvIHNvbHZlIGFuIElFPD04IHBvc2l0aW9uaW5nIGJ1ZywgdGhlIHVuaXQgdHlwZSBpcyBkcm9wcGVkIHdoZW4gc2V0dGluZyBhIHByb3BlcnR5IHZhbHVlIG9mIDAuICovXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYWRqdXN0ZWRTZXREYXRhID0gQ1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgLyogU0VUICovXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvcGVydHksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHdlZW4uY3VycmVudFZhbHVlICsgKElFIDwgOSAmJiBwYXJzZUZsb2F0KGN1cnJlbnRWYWx1ZSkgPT09IDAgPyBcIlwiIDogdHdlZW4udW5pdFR5cGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuLnJvb3RQcm9wZXJ0eVZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR3ZWVuLnNjcm9sbERhdGEpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHRcdFx0XHRcdFx0IEhvb2tzOiBQYXJ0IElJXG5cdFx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRcdFx0XHRcdFx0LyogTm93IHRoYXQgd2UgaGF2ZSB0aGUgaG9vaydzIHVwZGF0ZWQgcm9vdFByb3BlcnR5VmFsdWUgKHRoZSBwb3N0LXByb2Nlc3NlZCB2YWx1ZSBwcm92aWRlZCBieSBhZGp1c3RlZFNldERhdGEpLCBjYWNoZSBpdCBvbnRvIHRoZSBlbGVtZW50LiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKENTUy5Ib29rcy5yZWdpc3RlcmVkW3Byb3BlcnR5XSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKiBTaW5jZSBhZGp1c3RlZFNldERhdGEgY29udGFpbnMgbm9ybWFsaXplZCBkYXRhIHJlYWR5IGZvciBET00gdXBkYXRpbmcsIHRoZSByb290UHJvcGVydHlWYWx1ZSBuZWVkcyB0byBiZSByZS1leHRyYWN0ZWQgZnJvbSBpdHMgbm9ybWFsaXplZCBmb3JtLiA/PyAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoQ1NTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbaG9va1Jvb3RdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RGF0YShlbGVtZW50KS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW2hvb2tSb290XSA9IENTUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2hvb2tSb290XShcImV4dHJhY3RcIiwgbnVsbCwgYWRqdXN0ZWRTZXREYXRhWzFdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbaG9va1Jvb3RdID0gYWRqdXN0ZWRTZXREYXRhWzFdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8qKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdFx0XHRcdCBUcmFuc2Zvcm1zXG5cdFx0XHRcdFx0XHRcdFx0XHQgKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvKiBGbGFnIHdoZXRoZXIgYSB0cmFuc2Zvcm0gcHJvcGVydHkgaXMgYmVpbmcgYW5pbWF0ZWQgc28gdGhhdCBmbHVzaFRyYW5zZm9ybUNhY2hlKCkgY2FuIGJlIHRyaWdnZXJlZCBvbmNlIHRoaXMgdGljayBwYXNzIGlzIGNvbXBsZXRlLiAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFkanVzdGVkU2V0RGF0YVswXSA9PT0gXCJ0cmFuc2Zvcm1cIikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1Qcm9wZXJ0eUV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyoqKioqKioqKioqKioqKipcblx0XHRcdFx0XHRcdCBtb2JpbGVIQVxuXHRcdFx0XHRcdFx0ICoqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0XHRcdC8qIElmIG1vYmlsZUhBIGlzIGVuYWJsZWQsIHNldCB0aGUgdHJhbnNsYXRlM2QgdHJhbnNmb3JtIHRvIG51bGwgdG8gZm9yY2UgaGFyZHdhcmUgYWNjZWxlcmF0aW9uLlxuXHRcdFx0XHRcdFx0IEl0J3Mgc2FmZSB0byBvdmVycmlkZSB0aGlzIHByb3BlcnR5IHNpbmNlIFZlbG9jaXR5IGRvZXNuJ3QgYWN0dWFsbHkgc3VwcG9ydCBpdHMgYW5pbWF0aW9uIChob29rcyBhcmUgdXNlZCBpbiBpdHMgcGxhY2UpLiAqL1xuXHRcdFx0XHRcdFx0aWYgKG9wdHMubW9iaWxlSEEpIHtcblx0XHRcdFx0XHRcdFx0LyogRG9uJ3Qgc2V0IHRoZSBudWxsIHRyYW5zZm9ybSBoYWNrIGlmIHdlJ3ZlIGFscmVhZHkgZG9uZSBzby4gKi9cblx0XHRcdFx0XHRcdFx0aWYgKERhdGEoZWxlbWVudCkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdC8qIEFsbCBlbnRyaWVzIG9uIHRoZSB0cmFuc2Zvcm1DYWNoZSBvYmplY3QgYXJlIGxhdGVyIGNvbmNhdGVuYXRlZCBpbnRvIGEgc2luZ2xlIHRyYW5zZm9ybSBzdHJpbmcgdmlhIGZsdXNoVHJhbnNmb3JtQ2FjaGUoKS4gKi9cblx0XHRcdFx0XHRcdFx0XHREYXRhKGVsZW1lbnQpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID0gXCIoMHB4LCAwcHgsIDBweClcIjtcblxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybVByb3BlcnR5RXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAodHJhbnNmb3JtUHJvcGVydHlFeGlzdHMpIHtcblx0XHRcdFx0XHRcdFx0Q1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogVGhlIG5vbi1cIm5vbmVcIiBkaXNwbGF5IHZhbHVlIGlzIG9ubHkgYXBwbGllZCB0byBhbiBlbGVtZW50IG9uY2UgLS0gd2hlbiBpdHMgYXNzb2NpYXRlZCBjYWxsIGlzIGZpcnN0IHRpY2tlZCB0aHJvdWdoLlxuXHRcdFx0XHRcdCBBY2NvcmRpbmdseSwgaXQncyBzZXQgdG8gZmFsc2Ugc28gdGhhdCBpdCBpc24ndCByZS1wcm9jZXNzZWQgYnkgdGhpcyBjYWxsIGluIHRoZSBuZXh0IHRpY2suICovXG5cdFx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG9wdHMuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcblx0XHRcdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzW2ldWzJdLmRpc3BsYXkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKG9wdHMudmlzaWJpbGl0eSAhPT0gdW5kZWZpbmVkICYmIG9wdHMudmlzaWJpbGl0eSAhPT0gXCJoaWRkZW5cIikge1xuXHRcdFx0XHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHNbaV1bMl0udmlzaWJpbGl0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIFBhc3MgdGhlIGVsZW1lbnRzIGFuZCB0aGUgdGltaW5nIGRhdGEgKHBlcmNlbnRDb21wbGV0ZSwgbXNSZW1haW5pbmcsIHRpbWVTdGFydCwgdHdlZW5EdW1teVZhbHVlKSBpbnRvIHRoZSBwcm9ncmVzcyBjYWxsYmFjay4gKi9cblx0XHRcdFx0XHRpZiAob3B0cy5wcm9ncmVzcykge1xuXHRcdFx0XHRcdFx0b3B0cy5wcm9ncmVzcy5jYWxsKGNhbGxDb250YWluZXJbMV0sXG5cdFx0XHRcdFx0XHRcdFx0Y2FsbENvbnRhaW5lclsxXSxcblx0XHRcdFx0XHRcdFx0XHRwZXJjZW50Q29tcGxldGUsXG5cdFx0XHRcdFx0XHRcdFx0TWF0aC5tYXgoMCwgKHRpbWVTdGFydCArIG9wdHMuZHVyYXRpb24pIC0gdGltZUN1cnJlbnQpLFxuXHRcdFx0XHRcdFx0XHRcdHRpbWVTdGFydCxcblx0XHRcdFx0XHRcdFx0XHR0d2VlbkR1bW15VmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIElmIHRoaXMgY2FsbCBoYXMgZmluaXNoZWQgdHdlZW5pbmcsIHBhc3MgaXRzIGluZGV4IHRvIGNvbXBsZXRlQ2FsbCgpIHRvIGhhbmRsZSBjYWxsIGNsZWFudXAuICovXG5cdFx0XHRcdFx0aWYgKHBlcmNlbnRDb21wbGV0ZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0Y29tcGxldGVDYWxsKGkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKiBOb3RlOiBjb21wbGV0ZUNhbGwoKSBzZXRzIHRoZSBpc1RpY2tpbmcgZmxhZyB0byBmYWxzZSB3aGVuIHRoZSBsYXN0IGNhbGwgb24gVmVsb2NpdHkuU3RhdGUuY2FsbHMgaGFzIGNvbXBsZXRlZC4gKi9cblx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcpIHtcblx0XHRcdFx0dGlja2VyKHRpY2spO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKioqKioqKioqKioqKioqKioqKioqXG5cdFx0IENhbGwgQ29tcGxldGlvblxuXHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0LyogTm90ZTogVW5saWtlIHRpY2soKSwgd2hpY2ggcHJvY2Vzc2VzIGFsbCBhY3RpdmUgY2FsbHMgYXQgb25jZSwgY2FsbCBjb21wbGV0aW9uIGlzIGhhbmRsZWQgb24gYSBwZXItY2FsbCBiYXNpcy4gKi9cblx0XHRmdW5jdGlvbiBjb21wbGV0ZUNhbGwoY2FsbEluZGV4LCBpc1N0b3BwZWQpIHtcblx0XHRcdC8qIEVuc3VyZSB0aGUgY2FsbCBleGlzdHMuICovXG5cdFx0XHRpZiAoIVZlbG9jaXR5LlN0YXRlLmNhbGxzW2NhbGxJbmRleF0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiBQdWxsIHRoZSBtZXRhZGF0YSBmcm9tIHRoZSBjYWxsLiAqL1xuXHRcdFx0dmFyIGNhbGwgPSBWZWxvY2l0eS5TdGF0ZS5jYWxsc1tjYWxsSW5kZXhdWzBdLFxuXHRcdFx0XHRcdGVsZW1lbnRzID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XVsxXSxcblx0XHRcdFx0XHRvcHRzID0gVmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XVsyXSxcblx0XHRcdFx0XHRyZXNvbHZlciA9IFZlbG9jaXR5LlN0YXRlLmNhbGxzW2NhbGxJbmRleF1bNF07XG5cblx0XHRcdHZhciByZW1haW5pbmdDYWxsc0V4aXN0ID0gZmFsc2U7XG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHQgRWxlbWVudCBGaW5hbGl6YXRpb25cblx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgY2FsbExlbmd0aCA9IGNhbGwubGVuZ3RoOyBpIDwgY2FsbExlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gY2FsbFtpXS5lbGVtZW50O1xuXG5cdFx0XHRcdC8qIElmIHRoZSB1c2VyIHNldCBkaXNwbGF5IHRvIFwibm9uZVwiIChpbnRlbmRpbmcgdG8gaGlkZSB0aGUgZWxlbWVudCksIHNldCBpdCBub3cgdGhhdCB0aGUgYW5pbWF0aW9uIGhhcyBjb21wbGV0ZWQuICovXG5cdFx0XHRcdC8qIE5vdGU6IGRpc3BsYXk6bm9uZSBpc24ndCBzZXQgd2hlbiBjYWxscyBhcmUgbWFudWFsbHkgc3RvcHBlZCAodmlhIFZlbG9jaXR5KFwic3RvcFwiKS4gKi9cblx0XHRcdFx0LyogTm90ZTogRGlzcGxheSBnZXRzIGlnbm9yZWQgd2l0aCBcInJldmVyc2VcIiBjYWxscyBhbmQgaW5maW5pdGUgbG9vcHMsIHNpbmNlIHRoaXMgYmVoYXZpb3Igd291bGQgYmUgdW5kZXNpcmFibGUuICovXG5cdFx0XHRcdGlmICghaXNTdG9wcGVkICYmICFvcHRzLmxvb3ApIHtcblx0XHRcdFx0XHRpZiAob3B0cy5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuXHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJkaXNwbGF5XCIsIG9wdHMuZGlzcGxheSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKG9wdHMudmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIikge1xuXHRcdFx0XHRcdFx0Q1NTLnNldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgXCJ2aXNpYmlsaXR5XCIsIG9wdHMudmlzaWJpbGl0eSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogSWYgdGhlIGVsZW1lbnQncyBxdWV1ZSBpcyBlbXB0eSAoaWYgb25seSB0aGUgXCJpbnByb2dyZXNzXCIgaXRlbSBpcyBsZWZ0IGF0IHBvc2l0aW9uIDApIG9yIGlmIGl0cyBxdWV1ZSBpcyBhYm91dCB0byBydW5cblx0XHRcdFx0IGEgbm9uLVZlbG9jaXR5LWluaXRpYXRlZCBlbnRyeSwgdHVybiBvZmYgdGhlIGlzQW5pbWF0aW5nIGZsYWcuIEEgbm9uLVZlbG9jaXR5LWluaXRpYXRpZWQgcXVldWUgZW50cnkncyBsb2dpYyBtaWdodCBhbHRlclxuXHRcdFx0XHQgYW4gZWxlbWVudCdzIENTUyB2YWx1ZXMgYW5kIHRoZXJlYnkgY2F1c2UgVmVsb2NpdHkncyBjYWNoZWQgdmFsdWUgZGF0YSB0byBnbyBzdGFsZS4gVG8gZGV0ZWN0IGlmIGEgcXVldWUgZW50cnkgd2FzIGluaXRpYXRlZCBieSBWZWxvY2l0eSxcblx0XHRcdFx0IHdlIGNoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIG91ciBzcGVjaWFsIFZlbG9jaXR5LnF1ZXVlRW50cnlGbGFnIGRlY2xhcmF0aW9uLCB3aGljaCBtaW5pZmllcnMgd29uJ3QgcmVuYW1lIHNpbmNlIHRoZSBmbGFnXG5cdFx0XHRcdCBpcyBhc3NpZ25lZCB0byBqUXVlcnkncyBnbG9iYWwgJCBvYmplY3QgYW5kIHRodXMgZXhpc3RzIG91dCBvZiBWZWxvY2l0eSdzIG93biBzY29wZS4gKi9cblx0XHRcdFx0dmFyIGRhdGEgPSBEYXRhKGVsZW1lbnQpO1xuXG5cdFx0XHRcdGlmIChvcHRzLmxvb3AgIT09IHRydWUgJiYgKCQucXVldWUoZWxlbWVudClbMV0gPT09IHVuZGVmaW5lZCB8fCAhL1xcLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcvaS50ZXN0KCQucXVldWUoZWxlbWVudClbMV0pKSkge1xuXHRcdFx0XHRcdC8qIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gZGVsZXRlZC4gRW5zdXJlIHRoYXQgaXRzIGRhdGEgY2FjaGUgc3RpbGwgZXhpc3RzIGJlZm9yZSBhY3Rpbmcgb24gaXQuICovXG5cdFx0XHRcdFx0aWYgKGRhdGEpIHtcblx0XHRcdFx0XHRcdGRhdGEuaXNBbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdC8qIENsZWFyIHRoZSBlbGVtZW50J3Mgcm9vdFByb3BlcnR5VmFsdWVDYWNoZSwgd2hpY2ggd2lsbCBiZWNvbWUgc3RhbGUuICovXG5cdFx0XHRcdFx0XHRkYXRhLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGUgPSB7fTtcblxuXHRcdFx0XHRcdFx0dmFyIHRyYW5zZm9ybUhBUHJvcGVydHlFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRcdC8qIElmIGFueSAzRCB0cmFuc2Zvcm0gc3VicHJvcGVydHkgaXMgYXQgaXRzIGRlZmF1bHQgdmFsdWUgKHJlZ2FyZGxlc3Mgb2YgdW5pdCB0eXBlKSwgcmVtb3ZlIGl0LiAqL1xuXHRcdFx0XHRcdFx0JC5lYWNoKENTUy5MaXN0cy50cmFuc2Zvcm1zM0QsIGZ1bmN0aW9uKGksIHRyYW5zZm9ybU5hbWUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlZmF1bHRWYWx1ZSA9IC9ec2NhbGUvLnRlc3QodHJhbnNmb3JtTmFtZSkgPyAxIDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGRhdGEudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV07XG5cblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEudHJhbnNmb3JtQ2FjaGVbdHJhbnNmb3JtTmFtZV0gIT09IHVuZGVmaW5lZCAmJiBuZXcgUmVnRXhwKFwiXlxcXFwoXCIgKyBkZWZhdWx0VmFsdWUgKyBcIlteLl1cIikudGVzdChjdXJyZW50VmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtSEFQcm9wZXJ0eUV4aXN0cyA9IHRydWU7XG5cblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgZGF0YS50cmFuc2Zvcm1DYWNoZVt0cmFuc2Zvcm1OYW1lXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdC8qIE1vYmlsZSBkZXZpY2VzIGhhdmUgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIHJlbW92ZWQgYXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uIGluIG9yZGVyIHRvIGF2b2lkIGhvZ2dpbmcgdGhlIEdQVSdzIG1lbW9yeS4gKi9cblx0XHRcdFx0XHRcdGlmIChvcHRzLm1vYmlsZUhBKSB7XG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybUhBUHJvcGVydHlFeGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgZGF0YS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyogRmx1c2ggdGhlIHN1YnByb3BlcnR5IHJlbW92YWxzIHRvIHRoZSBET00uICovXG5cdFx0XHRcdFx0XHRpZiAodHJhbnNmb3JtSEFQcm9wZXJ0eUV4aXN0cykge1xuXHRcdFx0XHRcdFx0XHRDU1MuZmx1c2hUcmFuc2Zvcm1DYWNoZShlbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LyogUmVtb3ZlIHRoZSBcInZlbG9jaXR5LWFuaW1hdGluZ1wiIGluZGljYXRvciBjbGFzcy4gKi9cblx0XHRcdFx0XHRcdENTUy5WYWx1ZXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKlxuXHRcdFx0XHQgT3B0aW9uOiBDb21wbGV0ZVxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdC8qIENvbXBsZXRlIGlzIGZpcmVkIG9uY2UgcGVyIGNhbGwgKG5vdCBvbmNlIHBlciBlbGVtZW50KSBhbmQgaXMgcGFzc2VkIHRoZSBmdWxsIHJhdyBET00gZWxlbWVudCBzZXQgYXMgYm90aCBpdHMgY29udGV4dCBhbmQgaXRzIGZpcnN0IGFyZ3VtZW50LiAqL1xuXHRcdFx0XHQvKiBOb3RlOiBDYWxsYmFja3MgYXJlbid0IGZpcmVkIHdoZW4gY2FsbHMgYXJlIG1hbnVhbGx5IHN0b3BwZWQgKHZpYSBWZWxvY2l0eShcInN0b3BcIikuICovXG5cdFx0XHRcdGlmICghaXNTdG9wcGVkICYmIG9wdHMuY29tcGxldGUgJiYgIW9wdHMubG9vcCAmJiAoaSA9PT0gY2FsbExlbmd0aCAtIDEpKSB7XG5cdFx0XHRcdFx0LyogV2UgdGhyb3cgY2FsbGJhY2tzIGluIGEgc2V0VGltZW91dCBzbyB0aGF0IHRocm93biBlcnJvcnMgZG9uJ3QgaGFsdCB0aGUgZXhlY3V0aW9uIG9mIFZlbG9jaXR5IGl0c2VsZi4gKi9cblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0b3B0cy5jb21wbGV0ZS5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHRcdFx0fSwgMSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdFx0IFByb21pc2UgUmVzb2x2aW5nXG5cdFx0XHRcdCAqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHRcdC8qIE5vdGU6IEluZmluaXRlIGxvb3BzIGRvbid0IHJldHVybiBwcm9taXNlcy4gKi9cblx0XHRcdFx0aWYgKHJlc29sdmVyICYmIG9wdHMubG9vcCAhPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJlc29sdmVyKGVsZW1lbnRzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0XHRcdCBPcHRpb246IExvb3AgKEluZmluaXRlKVxuXHRcdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRcdFx0XHRpZiAoZGF0YSAmJiBvcHRzLmxvb3AgPT09IHRydWUgJiYgIWlzU3RvcHBlZCkge1xuXHRcdFx0XHRcdC8qIElmIGEgcm90YXRlWC9ZL1ogcHJvcGVydHkgaXMgYmVpbmcgYW5pbWF0ZWQgYnkgMzYwIGRlZyB3aXRoIGxvb3A6dHJ1ZSwgc3dhcCB0d2VlbiBzdGFydC9lbmQgdmFsdWVzIHRvIGVuYWJsZVxuXHRcdFx0XHRcdCBjb250aW51b3VzIGl0ZXJhdGl2ZSByb3RhdGlvbiBsb29waW5nLiAoT3RoZXJpc2UsIHRoZSBlbGVtZW50IHdvdWxkIGp1c3Qgcm90YXRlIGJhY2sgYW5kIGZvcnRoLikgKi9cblx0XHRcdFx0XHQkLmVhY2goZGF0YS50d2VlbnNDb250YWluZXIsIGZ1bmN0aW9uKHByb3BlcnR5TmFtZSwgdHdlZW5Db250YWluZXIpIHtcblx0XHRcdFx0XHRcdGlmICgvXnJvdGF0ZS8udGVzdChwcm9wZXJ0eU5hbWUpICYmICgocGFyc2VGbG9hdCh0d2VlbkNvbnRhaW5lci5zdGFydFZhbHVlKSAtIHBhcnNlRmxvYXQodHdlZW5Db250YWluZXIuZW5kVmFsdWUpKSAlIDM2MCA9PT0gMCkpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG9sZFN0YXJ0VmFsdWUgPSB0d2VlbkNvbnRhaW5lci5zdGFydFZhbHVlO1xuXG5cdFx0XHRcdFx0XHRcdHR3ZWVuQ29udGFpbmVyLnN0YXJ0VmFsdWUgPSB0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZTtcblx0XHRcdFx0XHRcdFx0dHdlZW5Db250YWluZXIuZW5kVmFsdWUgPSBvbGRTdGFydFZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoL15iYWNrZ3JvdW5kUG9zaXRpb24vLnRlc3QocHJvcGVydHlOYW1lKSAmJiBwYXJzZUZsb2F0KHR3ZWVuQ29udGFpbmVyLmVuZFZhbHVlKSA9PT0gMTAwICYmIHR3ZWVuQ29udGFpbmVyLnVuaXRUeXBlID09PSBcIiVcIikge1xuXHRcdFx0XHRcdFx0XHR0d2VlbkNvbnRhaW5lci5lbmRWYWx1ZSA9IDA7XG5cdFx0XHRcdFx0XHRcdHR3ZWVuQ29udGFpbmVyLnN0YXJ0VmFsdWUgPSAxMDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRWZWxvY2l0eShlbGVtZW50LCBcInJldmVyc2VcIiwge2xvb3A6IHRydWUsIGRlbGF5OiBvcHRzLmRlbGF5fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKioqKioqKioqKioqKioqXG5cdFx0XHRcdCBEZXF1ZXVlaW5nXG5cdFx0XHRcdCAqKioqKioqKioqKioqKiovXG5cblx0XHRcdFx0LyogRmlyZSB0aGUgbmV4dCBjYWxsIGluIHRoZSBxdWV1ZSBzbyBsb25nIGFzIHRoaXMgY2FsbCdzIHF1ZXVlIHdhc24ndCBzZXQgdG8gZmFsc2UgKHRvIHRyaWdnZXIgYSBwYXJhbGxlbCBhbmltYXRpb24pLFxuXHRcdFx0XHQgd2hpY2ggd291bGQgaGF2ZSBhbHJlYWR5IGNhdXNlZCB0aGUgbmV4dCBjYWxsIHRvIGZpcmUuIE5vdGU6IEV2ZW4gaWYgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uIHF1ZXVlIGhhcyBiZWVuIHJlYWNoZWQsXG5cdFx0XHRcdCAkLmRlcXVldWUoKSBtdXN0IHN0aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjb21wbGV0ZWx5IGNsZWFyIGpRdWVyeSdzIGFuaW1hdGlvbiBxdWV1ZS4gKi9cblx0XHRcdFx0aWYgKG9wdHMucXVldWUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0JC5kZXF1ZXVlKGVsZW1lbnQsIG9wdHMucXVldWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRcdCBDYWxscyBBcnJheSBDbGVhbnVwXG5cdFx0XHQgKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0XHQvKiBTaW5jZSB0aGlzIGNhbGwgaXMgY29tcGxldGUsIHNldCBpdCB0byBmYWxzZSBzbyB0aGF0IHRoZSByQUYgdGljayBza2lwcyBpdC4gVGhpcyBhcnJheSBpcyBsYXRlciBjb21wYWN0ZWQgdmlhIGNvbXBhY3RTcGFyc2VBcnJheSgpLlxuXHRcdFx0IChGb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgdGhlIGNhbGwgaXMgc2V0IHRvIGZhbHNlIGluc3RlYWQgb2YgYmVpbmcgZGVsZXRlZCBmcm9tIHRoZSBhcnJheTogaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS9lbi90dXRvcmlhbHMvc3BlZWQvdjgvKSAqL1xuXHRcdFx0VmVsb2NpdHkuU3RhdGUuY2FsbHNbY2FsbEluZGV4XSA9IGZhbHNlO1xuXG5cdFx0XHQvKiBJdGVyYXRlIHRocm91Z2ggdGhlIGNhbGxzIGFycmF5IHRvIGRldGVybWluZSBpZiB0aGlzIHdhcyB0aGUgZmluYWwgaW4tcHJvZ3Jlc3MgYW5pbWF0aW9uLlxuXHRcdFx0IElmIHNvLCBzZXQgYSBmbGFnIHRvIGVuZCB0aWNraW5nIGFuZCBjbGVhciB0aGUgY2FsbHMgYXJyYXkuICovXG5cdFx0XHRmb3IgKHZhciBqID0gMCwgY2FsbHNMZW5ndGggPSBWZWxvY2l0eS5TdGF0ZS5jYWxscy5sZW5ndGg7IGogPCBjYWxsc0xlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChWZWxvY2l0eS5TdGF0ZS5jYWxsc1tqXSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRyZW1haW5pbmdDYWxsc0V4aXN0ID0gdHJ1ZTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZW1haW5pbmdDYWxsc0V4aXN0ID09PSBmYWxzZSkge1xuXHRcdFx0XHQvKiB0aWNrKCkgd2lsbCBkZXRlY3QgdGhpcyBmbGFnIHVwb24gaXRzIG5leHQgaXRlcmF0aW9uIGFuZCBzdWJzZXF1ZW50bHkgdHVybiBpdHNlbGYgb2ZmLiAqL1xuXHRcdFx0XHRWZWxvY2l0eS5TdGF0ZS5pc1RpY2tpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHQvKiBDbGVhciB0aGUgY2FsbHMgYXJyYXkgc28gdGhhdCBpdHMgbGVuZ3RoIGlzIHJlc2V0LiAqL1xuXHRcdFx0XHRkZWxldGUgVmVsb2NpdHkuU3RhdGUuY2FsbHM7XG5cdFx0XHRcdFZlbG9jaXR5LlN0YXRlLmNhbGxzID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqKioqKioqKioqKioqKioqKlxuXHRcdCBGcmFtZXdvcmtzXG5cdFx0ICoqKioqKioqKioqKioqKioqKi9cblxuXHRcdC8qIEJvdGggalF1ZXJ5IGFuZCBaZXB0byBhbGxvdyB0aGVpciAkLmZuIG9iamVjdCB0byBiZSBleHRlbmRlZCB0byBhbGxvdyB3cmFwcGVkIGVsZW1lbnRzIHRvIGJlIHN1YmplY3RlZCB0byBwbHVnaW4gY2FsbHMuXG5cdFx0IElmIGVpdGhlciBmcmFtZXdvcmsgaXMgbG9hZGVkLCByZWdpc3RlciBhIFwidmVsb2NpdHlcIiBleHRlbnNpb24gcG9pbnRpbmcgdG8gVmVsb2NpdHkncyBjb3JlIGFuaW1hdGUoKSBtZXRob2QuICBWZWxvY2l0eVxuXHRcdCBhbHNvIHJlZ2lzdGVycyBpdHNlbGYgb250byBhIGdsb2JhbCBjb250YWluZXIgKHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdykgc28gdGhhdCBjZXJ0YWluIGZlYXR1cmVzIGFyZVxuXHRcdCBhY2Nlc3NpYmxlIGJleW9uZCBqdXN0IGEgcGVyLWVsZW1lbnQgc2NvcGUuIFRoaXMgbWFzdGVyIG9iamVjdCBjb250YWlucyBhbiAuYW5pbWF0ZSgpIG1ldGhvZCwgd2hpY2ggaXMgbGF0ZXIgYXNzaWduZWQgdG8gJC5mblxuXHRcdCAoaWYgalF1ZXJ5IG9yIFplcHRvIGFyZSBwcmVzZW50KS4gQWNjb3JkaW5nbHksIFZlbG9jaXR5IGNhbiBib3RoIGFjdCBvbiB3cmFwcGVkIERPTSBlbGVtZW50cyBhbmQgc3RhbmQgYWxvbmUgZm9yIHRhcmdldGluZyByYXcgRE9NIGVsZW1lbnRzLiAqL1xuXHRcdGdsb2JhbC5WZWxvY2l0eSA9IFZlbG9jaXR5O1xuXG5cdFx0aWYgKGdsb2JhbCAhPT0gd2luZG93KSB7XG5cdFx0XHQvKiBBc3NpZ24gdGhlIGVsZW1lbnQgZnVuY3Rpb24gdG8gVmVsb2NpdHkncyBjb3JlIGFuaW1hdGUoKSBtZXRob2QuICovXG5cdFx0XHRnbG9iYWwuZm4udmVsb2NpdHkgPSBhbmltYXRlO1xuXHRcdFx0LyogQXNzaWduIHRoZSBvYmplY3QgZnVuY3Rpb24ncyBkZWZhdWx0cyB0byBWZWxvY2l0eSdzIGdsb2JhbCBkZWZhdWx0cyBvYmplY3QuICovXG5cdFx0XHRnbG9iYWwuZm4udmVsb2NpdHkuZGVmYXVsdHMgPSBWZWxvY2l0eS5kZWZhdWx0cztcblx0XHR9XG5cblx0XHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0XHQgUGFja2FnZWQgUmVkaXJlY3RzXG5cdFx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdFx0Lyogc2xpZGVVcCwgc2xpZGVEb3duICovXG5cdFx0JC5lYWNoKFtcIkRvd25cIiwgXCJVcFwiXSwgZnVuY3Rpb24oaSwgZGlyZWN0aW9uKSB7XG5cdFx0XHRWZWxvY2l0eS5SZWRpcmVjdHNbXCJzbGlkZVwiICsgZGlyZWN0aW9uXSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMsIGVsZW1lbnRzSW5kZXgsIGVsZW1lbnRzU2l6ZSwgZWxlbWVudHMsIHByb21pc2VEYXRhKSB7XG5cdFx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe30sIG9wdGlvbnMpLFxuXHRcdFx0XHRcdFx0YmVnaW4gPSBvcHRzLmJlZ2luLFxuXHRcdFx0XHRcdFx0Y29tcGxldGUgPSBvcHRzLmNvbXBsZXRlLFxuXHRcdFx0XHRcdFx0aW5saW5lVmFsdWVzID0ge30sXG5cdFx0XHRcdFx0XHRjb21wdXRlZFZhbHVlcyA9IHtoZWlnaHQ6IFwiXCIsIG1hcmdpblRvcDogXCJcIiwgbWFyZ2luQm90dG9tOiBcIlwiLCBwYWRkaW5nVG9wOiBcIlwiLCBwYWRkaW5nQm90dG9tOiBcIlwifTtcblxuXHRcdFx0XHRpZiAob3B0cy5kaXNwbGF5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQvKiBTaG93IHRoZSBlbGVtZW50IGJlZm9yZSBzbGlkZURvd24gYmVnaW5zIGFuZCBoaWRlIHRoZSBlbGVtZW50IGFmdGVyIHNsaWRlVXAgY29tcGxldGVzLiAqL1xuXHRcdFx0XHRcdC8qIE5vdGU6IElubGluZSBlbGVtZW50cyBjYW5ub3QgaGF2ZSBkaW1lbnNpb25zIGFuaW1hdGVkLCBzbyB0aGV5J3JlIHJldmVydGVkIHRvIGlubGluZS1ibG9jay4gKi9cblx0XHRcdFx0XHRvcHRzLmRpc3BsYXkgPSAoZGlyZWN0aW9uID09PSBcIkRvd25cIiA/IChWZWxvY2l0eS5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKGVsZW1lbnQpID09PSBcImlubGluZVwiID8gXCJpbmxpbmUtYmxvY2tcIiA6IFwiYmxvY2tcIikgOiBcIm5vbmVcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvcHRzLmJlZ2luID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0LyogSWYgdGhlIHVzZXIgcGFzc2VkIGluIGEgYmVnaW4gY2FsbGJhY2ssIGZpcmUgaXQgbm93LiAqL1xuXHRcdFx0XHRcdGlmIChlbGVtZW50c0luZGV4ID09PSAwICYmIGJlZ2luKSB7XG5cdFx0XHRcdFx0XHRiZWdpbi5jYWxsKGVsZW1lbnRzLCBlbGVtZW50cyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogQ2FjaGUgdGhlIGVsZW1lbnRzJyBvcmlnaW5hbCB2ZXJ0aWNhbCBkaW1lbnNpb25hbCBwcm9wZXJ0eSB2YWx1ZXMgc28gdGhhdCB3ZSBjYW4gYW5pbWF0ZSBiYWNrIHRvIHRoZW0uICovXG5cdFx0XHRcdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gY29tcHV0ZWRWYWx1ZXMpIHtcblx0XHRcdFx0XHRcdGlmICghY29tcHV0ZWRWYWx1ZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aW5saW5lVmFsdWVzW3Byb3BlcnR5XSA9IGVsZW1lbnQuc3R5bGVbcHJvcGVydHldO1xuXG5cdFx0XHRcdFx0XHQvKiBGb3Igc2xpZGVEb3duLCB1c2UgZm9yY2VmZWVkaW5nIHRvIGFuaW1hdGUgYWxsIHZlcnRpY2FsIHByb3BlcnRpZXMgZnJvbSAwLiBGb3Igc2xpZGVVcCxcblx0XHRcdFx0XHRcdCB1c2UgZm9yY2VmZWVkaW5nIHRvIHN0YXJ0IGZyb20gY29tcHV0ZWQgdmFsdWVzIGFuZCBhbmltYXRlIGRvd24gdG8gMC4gKi9cblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVZhbHVlID0gQ1NTLmdldFByb3BlcnR5VmFsdWUoZWxlbWVudCwgcHJvcGVydHkpO1xuXHRcdFx0XHRcdFx0Y29tcHV0ZWRWYWx1ZXNbcHJvcGVydHldID0gKGRpcmVjdGlvbiA9PT0gXCJEb3duXCIpID8gW3Byb3BlcnR5VmFsdWUsIDBdIDogWzAsIHByb3BlcnR5VmFsdWVdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIEZvcmNlIHZlcnRpY2FsIG92ZXJmbG93IGNvbnRlbnQgdG8gY2xpcCBzbyB0aGF0IHNsaWRpbmcgd29ya3MgYXMgZXhwZWN0ZWQuICovXG5cdFx0XHRcdFx0aW5saW5lVmFsdWVzLm92ZXJmbG93ID0gZWxlbWVudC5zdHlsZS5vdmVyZmxvdztcblx0XHRcdFx0XHRlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRvcHRzLmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0LyogUmVzZXQgZWxlbWVudCB0byBpdHMgcHJlLXNsaWRlIGlubGluZSB2YWx1ZXMgb25jZSBpdHMgc2xpZGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLiAqL1xuXHRcdFx0XHRcdGZvciAodmFyIHByb3BlcnR5IGluIGlubGluZVZhbHVlcykge1xuXHRcdFx0XHRcdFx0aWYgKGlubGluZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBpbmxpbmVWYWx1ZXNbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8qIElmIHRoZSB1c2VyIHBhc3NlZCBpbiBhIGNvbXBsZXRlIGNhbGxiYWNrLCBmaXJlIGl0IG5vdy4gKi9cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCA9PT0gZWxlbWVudHNTaXplIC0gMSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlLmNhbGwoZWxlbWVudHMsIGVsZW1lbnRzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwcm9taXNlRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcihlbGVtZW50cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdFZlbG9jaXR5KGVsZW1lbnQsIGNvbXB1dGVkVmFsdWVzLCBvcHRzKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHQvKiBmYWRlSW4sIGZhZGVPdXQgKi9cblx0XHQkLmVhY2goW1wiSW5cIiwgXCJPdXRcIl0sIGZ1bmN0aW9uKGksIGRpcmVjdGlvbikge1xuXHRcdFx0VmVsb2NpdHkuUmVkaXJlY3RzW1wiZmFkZVwiICsgZGlyZWN0aW9uXSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMsIGVsZW1lbnRzSW5kZXgsIGVsZW1lbnRzU2l6ZSwgZWxlbWVudHMsIHByb21pc2VEYXRhKSB7XG5cdFx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe30sIG9wdGlvbnMpLFxuXHRcdFx0XHRcdFx0Y29tcGxldGUgPSBvcHRzLmNvbXBsZXRlLFxuXHRcdFx0XHRcdFx0cHJvcGVydGllc01hcCA9IHtvcGFjaXR5OiAoZGlyZWN0aW9uID09PSBcIkluXCIpID8gMSA6IDB9O1xuXG5cdFx0XHRcdC8qIFNpbmNlIHJlZGlyZWN0cyBhcmUgdHJpZ2dlcmVkIGluZGl2aWR1YWxseSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBhbmltYXRlZCBzZXQsIGF2b2lkIHJlcGVhdGVkbHkgdHJpZ2dlcmluZ1xuXHRcdFx0XHQgY2FsbGJhY2tzIGJ5IGZpcmluZyB0aGVtIG9ubHkgd2hlbiB0aGUgZmluYWwgZWxlbWVudCBoYXMgYmVlbiByZWFjaGVkLiAqL1xuXHRcdFx0XHRpZiAoZWxlbWVudHNJbmRleCAhPT0gMCkge1xuXHRcdFx0XHRcdG9wdHMuYmVnaW4gPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbGVtZW50c0luZGV4ICE9PSBlbGVtZW50c1NpemUgLSAxKSB7XG5cdFx0XHRcdFx0b3B0cy5jb21wbGV0ZSA9IG51bGw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b3B0cy5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlLmNhbGwoZWxlbWVudHMsIGVsZW1lbnRzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwcm9taXNlRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRwcm9taXNlRGF0YS5yZXNvbHZlcihlbGVtZW50cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qIElmIGEgZGlzcGxheSB3YXMgcGFzc2VkIGluLCB1c2UgaXQuIE90aGVyd2lzZSwgZGVmYXVsdCB0byBcIm5vbmVcIiBmb3IgZmFkZU91dCBvciB0aGUgZWxlbWVudC1zcGVjaWZpYyBkZWZhdWx0IGZvciBmYWRlSW4uICovXG5cdFx0XHRcdC8qIE5vdGU6IFdlIGFsbG93IHVzZXJzIHRvIHBhc3MgaW4gXCJudWxsXCIgdG8gc2tpcCBkaXNwbGF5IHNldHRpbmcgYWx0b2dldGhlci4gKi9cblx0XHRcdFx0aWYgKG9wdHMuZGlzcGxheSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0b3B0cy5kaXNwbGF5ID0gKGRpcmVjdGlvbiA9PT0gXCJJblwiID8gXCJhdXRvXCIgOiBcIm5vbmVcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRWZWxvY2l0eSh0aGlzLCBwcm9wZXJ0aWVzTWFwLCBvcHRzKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gVmVsb2NpdHk7XG5cdH0oKHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvIHx8IHdpbmRvdyksIHdpbmRvdywgKHdpbmRvdyA/IHdpbmRvdy5kb2N1bWVudCA6IHVuZGVmaW5lZCkpO1xufSkpO1xuXG4vKioqKioqKioqKioqKioqKioqXG4gS25vd24gSXNzdWVzXG4gKioqKioqKioqKioqKioqKioqL1xuXG4vKiBUaGUgQ1NTIHNwZWMgbWFuZGF0ZXMgdGhhdCB0aGUgdHJhbnNsYXRlWC9ZL1ogdHJhbnNmb3JtcyBhcmUgJS1yZWxhdGl2ZSB0byB0aGUgZWxlbWVudCBpdHNlbGYgLS0gbm90IGl0cyBwYXJlbnQuXG4gVmVsb2NpdHksIGhvd2V2ZXIsIGRvZXNuJ3QgbWFrZSB0aGlzIGRpc3RpbmN0aW9uLiBUaHVzLCBjb252ZXJ0aW5nIHRvIG9yIGZyb20gdGhlICUgdW5pdCB3aXRoIHRoZXNlIHN1YnByb3BlcnRpZXNcbiB3aWxsIHByb2R1Y2UgYW4gaW5hY2N1cmF0ZSBjb252ZXJzaW9uIHZhbHVlLiBUaGUgc2FtZSBpc3N1ZSBleGlzdHMgd2l0aCB0aGUgY3gvY3kgYXR0cmlidXRlcyBvZiBTVkcgY2lyY2xlcyBhbmQgZWxsaXBzZXMuICovXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92ZWxvY2l0eS1hbmltYXRlL3ZlbG9jaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=