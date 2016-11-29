/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _header = __webpack_require__(6);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _feeds = __webpack_require__(8);
	
	var _feeds2 = _interopRequireDefault(_feeds);
	
	var _utils = __webpack_require__(9);
	
	var _indexController = __webpack_require__(10);
	
	var _indexController2 = _interopRequireDefault(_indexController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _utils.qs)('body').appendChild((0, _utils.strToEls)(_header2.default));
	(0, _utils.qs)('body').appendChild((0, _utils.strToEls)(_feeds2.default));
	
	new _indexController2.default();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  font-family: Arial;\n  margin: 0;\n  padding: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  max-width: 600px;\n  margin: 0 auto; }\n\nheader {\n  margin: 0;\n  height: 60px;\n  background: #8B7E7F;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 0 15px #999; }\n  header .container {\n    position: relative; }\n  header .title {\n    margin: 0;\n    color: #fff; }\n    header .title span {\n      font-size: 26px;\n      line-height: 60px;\n      position: absolute; }\n    header .title img {\n      height: 50px;\n      margin-top: 5px;\n      padding: 0 20px; }\n  header .refresh-button {\n    width: 30px;\n    height: 30px;\n    background: url(" + __webpack_require__(4) + ");\n    position: absolute;\n    top: 15px;\n    right: 20px;\n    border: none; }\n\n.feeds {\n  margin-top: 75px; }\n  .feeds .feeds-list {\n    list-style: none;\n    margin: 0;\n    padding: 0 1em; }\n    .feeds .feeds-list li {\n      box-shadow: 1px 1px 10px #bbb;\n      padding: 1em;\n      margin: 1em 0; }\n      .feeds .feeds-list li .publishedAt {\n        float: right; }\n      .feeds .feeds-list li a {\n        color: #EA4540;\n        text-decoration: none;\n        font-style: italic; }\n  .feeds img {\n    max-width: 100%; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI1OS4yNDQgMjU5LjI0NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU5LjI0NCAyNTkuMjQ0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyIgZD0iTTI0OC4zNDgsMTI5LjNoLTE1Ljg0OUMyMzIuNDEsNjUuMjc3LDE4MC44MzEsMTMuMzk0LDExNy4yMDIsMTMuMzk0DQoJCWMtMzEuODQxLDAtNjAuNjYxLDEyLjk5OC04MS41MzQsMzMuOTk2QzE0LjAxNyw2OC41NDksMC4yNSw5Ny4wOTIsMC4wMzYsMTI5LjNIMGwwLjAxOCwwLjMzMUwwLDEzMC4wMzNoMC4wMzYNCgkJYzAuMzkzLDYzLjg1Myw1MS43NTgsMTE1LjgxNiwxMTUuMTksMTE1LjgxNmMzMS44NDEsMCw2MC42NjEtMTMuMDA3LDgxLjUzNC0zNC4wNDlsLTI1Ljg1Mi0yNC45MzENCgkJYy0xNC4xNzgsMTQuMzAzLTM0LjA1OCwyMy4wMjctNTUuNjgyLDIzLjEzNWMtNDQuNDAxLDAuMjA2LTc5LjIwMS0zNi40OS03OS4yMDEtODAuMTIyYy0wLjEwNy0yMi44OTMsMTAuMDkyLTQyLjkwOCwyNS40ODYtNTcuNTk1DQoJCWMxNC4xODYtMTQuMjg1LDM0LjA1OC0yMy4wMDEsNTUuNjkxLTIzLjEwOGM0NC40MS0wLjIwNiw3OS4yMDEsMzYuNDQ1LDc5LjIwMSw3OS45OTd2MC4xMjVoLTE1LjY2MQ0KCQljLTkuNzA4LDAtMTMuNjY4LDYuNDk5LTguODE0LDE0LjQxbDMzLjc5OSwzMy40MzNjNy43MzIsNy43MzIsOS45NjcsNy42NjEsMTcuNjQ2LDBsMzMuNzk5LTMzLjQzMw0KCQlDMjYyLjAyNSwxMzUuNzgxLDI1OC4wNTYsMTI5LjMsMjQ4LjM0OCwxMjkuM3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = " <header class=\"title-bar\">\n    <div class=\"container\">\n        <h1 class=\"title\">\n            <img src=\"" + __webpack_require__(7) + "\" class=\"header-logo\" alt=\"site-logo\">\n            <span>TechNews</span>\n        </h1>\n        <button class=\"refresh-button\"></button>\n    </div>\n</header>";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFQ0U3RUE7IiBwb2ludHM9IjUxMiw3My45NTYgNTEyLDQ5NC45MzMgMCw0OTQuOTMzIDAsNzMuOTU2IDI1Niw1MS4yICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YxNDc0MjsiIHBvaW50cz0iNTEyLDE3LjA2NyA1MTIsNzMuOTU2IDQ1NS4xMTEsNzMuOTU2IDQyMC45NzgsNDUuNTExIDQ1NS4xMTEsMTcuMDY3ICIvPg0KPHJlY3QgeT0iMTcuMDY3IiBzdHlsZT0iZmlsbDojMUI0MTQ1OyIgd2lkdGg9IjQ1NS4xMTEiIGhlaWdodD0iNTYuODg5Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDZDRUQxOyIgZD0iTTQ0My43MzMsMjU4Ljg0NEg2OC4yNjdjLTQuNzE0LDAtOC41MzMtMy44MjEtOC41MzMtOC41MzNjMC00LjcxMywzLjgyLTguNTMzLDguNTMzLTguNTMzaDM3NS40NjcNCgljNC43MTQsMCw4LjUzMywzLjgyMSw4LjUzMyw4LjUzM0M0NTIuMjY3LDI1NS4wMjQsNDQ4LjQ0NywyNTguODQ0LDQ0My43MzMsMjU4Ljg0NHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMjMzLjI0NCwzMDQuMzU2SDY4LjI2N2MtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM3MzLjgyLTguNTMzLDguNTMzLTguNTMzaDE2NC45NzgNCgkJYzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzNTMjM3Ljk1OCwzMDQuMzU2LDIzMy4yNDQsMzA0LjM1NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojOEI3RTdGOyIgZD0iTTIzMy4yNDQsMzQ5Ljg2N0g2OC4yNjdjLTQuNzE0LDAtOC41MzMtMy44MjEtOC41MzMtOC41MzNzMy44Mi04LjUzMyw4LjUzMy04LjUzM2gxNjQuOTc4DQoJCWM0LjcxNCwwLDguNTMzLDMuODIxLDguNTMzLDguNTMzUzIzNy45NTgsMzQ5Ljg2NywyMzMuMjQ0LDM0OS44Njd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzhCN0U3RjsiIGQ9Ik0yMzMuMjQ0LDM5NS4zNzhINjguMjY3Yy00LjcxNCwwLTguNTMzLTMuODIxLTguNTMzLTguNTMzczMuODItOC41MzMsOC41MzMtOC41MzNoMTY0Ljk3OA0KCQljNC43MTQsMCw4LjUzMywzLjgyMSw4LjUzMyw4LjUzM1MyMzcuOTU4LDM5NS4zNzgsMjMzLjI0NCwzOTUuMzc4eiIvPg0KPC9nPg0KPHJlY3QgeD0iMjc4Ljc1NiIgeT0iMjk1LjgyMiIgc3R5bGU9ImZpbGw6I0YxNDc0MjsiIHdpZHRoPSIxNjQuOTc4IiBoZWlnaHQ9IjEzNi41MzMiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMjMzLjI0NCw0NDAuODg5SDY4LjI2N2MtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM3MzLjgyLTguNTMzLDguNTMzLTguNTMzaDE2NC45NzgNCgkJYzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzNTMjM3Ljk1OCw0NDAuODg5LDIzMy4yNDQsNDQwLjg4OXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojOEI3RTdGOyIgZD0iTTM5NS4wNCwyMTMuMzMzYy0xNS4zNjYsMC0yNy4zNDQtNi43MjUtMzEuMjYzLTE3LjU1Yy0xLjYwMy00LjQzMiwwLjY4OC05LjMyNCw1LjEyMS0xMC45MjcNCgkJYzQuNDI2LTEuNjA0LDkuMzIzLDAuNjg3LDEwLjkyNyw1LjEyYzEuMzYxLDMuNzY0LDcuNDc1LDYuMjkyLDE1LjIxMyw2LjI5MmM1Ljc4NiwwLDE1LjU3Ni0xLjc5OSwxNS41NzYtOC41NA0KCQljMC00LjYxOS0yLjExMS02LjIxNi0xNi45NTktOC42NDVjLTYuNTk5LTEuMDc5LTEzLjQyMS0yLjE5NS0xOS4xNjktNS4yMTljLTcuOTExLTQuMTYzLTEyLjA5Mi0xMS4xNjctMTIuMDkyLTIwLjI1Nw0KCQljMC0xNS4wNzcsMTMuNDIzLTI1LjYwNywzMi42NDMtMjUuNjA3YzE1LjM1OSwwLDI3LjMzNiw2LjcyMSwzMS4yNTksMTcuNTRjMS42MDcsNC40MzEtMC42ODQsOS4zMjQtNS4xMTQsMTAuOTMxDQoJCWMtNC40MzQsMS42MTEtOS4zMjQtMC42ODUtMTAuOTI5LTUuMTE0Yy0xLjM2NC0zLjc2MS03LjQ3Ny02LjI5LTE1LjIxNC02LjI5Yy01Ljc4NiwwLTE1LjU3NiwxLjc5OS0xNS41NzYsOC41NA0KCQljMCw0LjYxMSwyLjEwOSw2LjIwNSwxNi45NDksOC42MzJjNi42LDEuMDgsMTMuNDI2LDIuMTk2LDE5LjE3NSw1LjIyMWM3LjkxMyw0LjE2NCwxMi4wOTYsMTEuMTcyLDEyLjA5NiwyMC4yNjYNCgkJQzQyNy42ODQsMjAyLjgwMyw0MTQuMjYsMjEzLjMzMywzOTUuMDQsMjEzLjMzM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojOEI3RTdGOyIgZD0iTTMxOS40OTYsMjEzLjMzM2MtMy4xODcsMC02LjE0My0xLjc4Ni03LjYwOS00LjY3NmwtOS42ODYtMTkuMTE0bC05LjY4NiwxOS4xMTQNCgkJYy0xLjYwOCwzLjE3NC01LjAyOSw1LjAyMi04LjU1Myw0LjYyNGMtMy41MzYtMC4zOTEtNi40NTgtMi45MzctNy4zMzItNi4zODVsLTE3LjI5OC02OC4yNjdjLTEuMTU4LTQuNTY4LDEuNjA4LTkuMjEsNi4xNzctMTAuMzY3DQoJCWM0LjU2Ny0xLjE1NSw5LjIxLDEuNjA3LDEwLjM2Nyw2LjE3NmwxMS43MDUsNDYuMTk3bDcuMDA1LTEzLjgyNWMxLjQ1NC0yLjg2OCw0LjM5Ni00LjY3Niw3LjYxMi00LjY3Ng0KCQljMy4yMTUsMCw2LjE1OCwxLjgwOCw3LjYxMiw0LjY3Nmw3LjAwNSwxMy44MjVsMTEuNzA1LTQ2LjE5N2MxLjE1OS00LjU2OSw1LjgwMi03LjMzMywxMC4zNjctNi4xNzYNCgkJYzQuNTY5LDEuMTU3LDcuMzM0LDUuNzk5LDYuMTc3LDEwLjM2N2wtMTcuMjk4LDY4LjI2N2MtMC44NzUsMy40NDktMy43OTYsNS45OTQtNy4zMzIsNi4zODUNCgkJQzMyMC4xMjMsMjEzLjMxNiwzMTkuODA5LDIxMy4zMzMsMzE5LjQ5NiwyMTMuMzMzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMjMzLjQ3MiwyMTMuMzMzaC00OC4yMmMtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM3YtNjguMjY3YzAtNC43MTMsMy44Mi04LjUzMyw4LjUzMy04LjUzMw0KCQloNDguMjJjNC43MTQsMCw4LjUzMywzLjgyMSw4LjUzMyw4LjUzM3MtMy44Miw4LjUzMy04LjUzMyw4LjUzM2gtMzkuNjg3djUxLjJoMzkuNjg3YzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzMNCgkJUzIzOC4xODYsMjEzLjMzMywyMzMuNDcyLDIxMy4zMzN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzhCN0U3RjsiIGQ9Ik0yMTcuMzk5LDE3OS4yaC0zMi4xNDdjLTQuNzE0LDAtOC41MzMtMy44MjEtOC41MzMtOC41MzNzMy44Mi04LjUzMyw4LjUzMy04LjUzM2gzMi4xNDcNCgkJYzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzNTMjIyLjExMiwxNzkuMiwyMTcuMzk5LDE3OS4yeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMTUxLjEyMSwyMTMuMzMzYy0yLjQ1LDAtNC44MzktMS4wNTctNi40OTItMi45OTNsLTQzLjI0Ni01MC42NjVWMjA0LjgNCgkJYzAsNC43MTMtMy44Miw4LjUzMy04LjUzMyw4LjUzM2MtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM3YtNjguMjY3YzAtMy41NzUsMi4yMjgtNi43Nyw1LjU4MS04LjAwNw0KCQljMy4zNTItMS4yMzgsNy4xMjItMC4yNTMsOS40NDIsMi40NjZsNDMuMjQ2LDUwLjY2NXYtNDUuMTI0YzAtNC43MTMsMy44Mi04LjUzMyw4LjUzMy04LjUzM3M4LjUzMywzLjgyMSw4LjUzMyw4LjUzM1YyMDQuOA0KCQljMCwzLjU3NS0yLjIyOCw2Ljc3LTUuNTgxLDguMDA3QzE1My4xMDcsMjEzLjE2MiwxNTIuMTA4LDIxMy4zMzMsMTUxLjEyMSwyMTMuMzMzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<section class=\"feeds\">\n    <div class=\"container\">\n        <ul class=\"feeds-list\">\n\n        </ul>\n    </div>\n</section>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.checkStatus = checkStatus;
	exports.toJson = toJson;
	exports.qs = qs;
	exports.$on = $on;
	exports.strToEls = strToEls;
	exports.$prepend = $prepend;
	function checkStatus(response) {
	    if (response.status >= 200 && response.status < 300) {
	        return Promise.resolve(response);
	    } else {
	        return Promise.reject(new Error(response.statusText));
	    }
	}
	
	function toJson(response) {
	    return response.json();
	}
	
	function qs(selector, scope) {
	    return (scope || document).querySelector(selector);
	}
	
	function $on(target, type, callback, capture) {
	    target.addEventListener(type, callback, !!capture);
	}
	
	var contextRange = document.createRange();
	contextRange.setStart(document.body, 0);
	
	function strToEls(str) {
	    return contextRange.createContextualFragment(str);
	}
	
	function $prepend(target, el) {
	    return target.insertBefore(el, target.firstChild);
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(9);
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _idb = __webpack_require__(12);
	
	var _idb2 = _interopRequireDefault(_idb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IndexController = function () {
	    function IndexController() {
	        _classCallCheck(this, IndexController);
	
	        this.template = new _template2.default();
	        this.feedsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=a9f426d48c7b4c6192affe4ce2c18b2c';
	        this.container = (0, _utils.qs)('.feeds-list', (0, _utils.qs)('.feeds'));
	        this._openDatabase();
	        this._showCachedArticles();
	        this._getFeeds();
	        this._clickToRefresh();
	        this._registerServiceWorker();
	    }
	
	    _createClass(IndexController, [{
	        key: '_openDatabase',
	        value: function _openDatabase() {
	            // 有service worker再创建数据库
	            if (!navigator.serviceWorker) {
	                return Promise.resolve();
	            }
	
	            this._dbPromise = _idb2.default.open('TechNews', 1, function (upgradeDB) {
	                var store = upgradeDB.createObjectStore('articles', {
	                    keyPath: 'title'
	                });
	                store.createIndex('time', 'publishedAt');
	            });
	        }
	    }, {
	        key: '_clickToRefresh',
	        value: function _clickToRefresh() {
	            var self = this;
	            (0, _utils.$on)((0, _utils.qs)('.refresh-button'), 'click', function () {
	                self._getFeeds();
	            });
	        }
	    }, {
	        key: '_getFeeds',
	        value: function _getFeeds() {
	            var self = this;
	            fetch(this.feedsUrl).then(_utils.checkStatus).then(_utils.toJson).then(function (data) {
	                return self._extractNew(data);
	            }).then(function (data) {
	                return self._renderFeeds(data);
	            }).catch();
	        }
	    }, {
	        key: '_extractNew',
	        value: function _extractNew(data) {
	            var _this = this;
	
	            if (this._latestfeed) {
	                (function () {
	                    var feeds = data.articles;
	                    var latestfeed = _this._latestfeed;
	                    data.articles = feeds.filter(function (item) {
	                        return Date.parse(item.publishedAt) > Date.parse(latestfeed.publishedAt);
	                    });
	                })();
	            }
	            this._cacheArticles(data.articles);
	            return Promise.resolve(data.articles);
	        }
	    }, {
	        key: '_renderFeeds',
	        value: function _renderFeeds(data) {
	            var feeds = data;
	            if (feeds.length) {
	                this._latestfeed = feeds[0];
	            }
	            (0, _utils.$prepend)(this.container, this.template.feedsList(feeds));
	        }
	    }, {
	        key: '_cacheArticles',
	        value: function _cacheArticles(articles) {
	            // cache the new articles in indexedDB
	            this._dbPromise.then(function (db) {
	                if (!db) return;
	
	                var tx = db.transaction('articles', 'readwrite');
	                var store = tx.objectStore('articles');
	                articles.forEach(function (article) {
	                    store.put(article);
	                });
	
	                store.index('time').openCursor(null, 'prev').then(function (cursor) {
	                    return cursor.advance(50);
	                }).then(function deleteRest(cursor) {
	                    if (!cursor) return;
	                    cursor.delete();
	                    return cursor.continue().then(deleteRest);
	                });
	            });
	        }
	    }, {
	        key: '_showCachedArticles',
	        value: function _showCachedArticles() {
	            var self = this;
	            this._dbPromise.then(function (db) {
	                if (!db || self.container.children.length) {
	                    return;
	                }
	                var index = db.transaction('articles').objectStore('articles').index('time');
	
	                index.getAll().then(function (articles) {
	                    articles.sort(function (a, b) {
	                        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
	                    });
	                    self._renderFeeds(articles);
	                });
	            });
	        }
	        /****************** service worker related *******************/
	        // 注册serviceWorker
	
	    }, {
	        key: '_registerServiceWorker',
	        value: function _registerServiceWorker() {
	            // 功能检测
	            if (!navigator.serviceWorker) {
	                return;
	            }
	
	            var self = this;
	
	            navigator.serviceWorker.register('/serviceWorker.js').then(function (reg) {
	                // 如果当前页面没有被service worker控制，也就不必处理更新了
	                if (!navigator.serviceWorker.controller) {
	                    return;
	                }
	
	                // 如果有 service worker正在等待被激活，说明新的service worker安装成功，update ready
	                if (reg.waiting) {
	                    self._updateWorker(reg.waiting);
	                    return;
	                }
	
	                // 如果有 service worker正在被安装，跟踪安装状态
	                if (reg.installing) {
	                    self._trackInstalling(reg.installing);
	                    return;
	                }
	
	                // 监听updatefound事件，跟踪更新的安装状态
	                reg.addEventListener('updatefound', function () {
	                    self._trackInstalling(reg.installing);
	                });
	            });
	
	            // 当控制页面的service worker发生改变，刷新页面以加载更新的资源
	            var refreshing;
	            navigator.serviceWorker.addEventListener('controllerchange', function () {
	                if (refreshing) return;
	                window.location.reload();
	                refreshing = true;
	            });
	        }
	    }, {
	        key: '_trackInstalling',
	        value: function _trackInstalling(sw) {
	            var self = this;
	            sw.addEventListener('statechange', function () {
	                if (sw.state == 'installed') {
	                    self._updateWorker(sw);
	                }
	            });
	        }
	    }, {
	        key: '_updateWorker',
	        value: function _updateWorker(sw) {
	            sw.postMessage('skipWaiting');
	        }
	    }]);
	
	    return IndexController;
	}();
	
	exports.default = IndexController;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Template = function () {
	    function Template() {
	        _classCallCheck(this, Template);
	    }
	
	    _createClass(Template, [{
	        key: 'feedsList',
	        value: function feedsList(feeds) {
	            var HTMLString = feeds.reduce(function (a, item) {
	                return a + ('\n                <li>\n                    <h3 class="title">' + item.title + '</h3>\n                    <div class="img-container"><img src="' + item.urlToImage + '" alt="news image" /></div>\n                    <p class="info"><span class="author">' + item.author + '</span><span class="publishedAt">' + item.publishedAt + '</span></p>\n                    <p class="description">' + item.description + '<a href="' + item.url + '" target="blank">read more</a></p>\n                </li>\n            ');
	            }, '');
	
	            return (0, _utils.strToEls)(HTMLString);
	        }
	    }]);
	
	    return Template;
	}();
	
	exports.default = Template;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function() {
	  function toArray(arr) {
	    return Array.prototype.slice.call(arr);
	  }
	
	  function promisifyRequest(request) {
	    return new Promise(function(resolve, reject) {
	      request.onsuccess = function() {
	        resolve(request.result);
	      };
	
	      request.onerror = function() {
	        reject(request.error);
	      };
	    });
	  }
	
	  function promisifyRequestCall(obj, method, args) {
	    var request;
	    var p = new Promise(function(resolve, reject) {
	      request = obj[method].apply(obj, args);
	      promisifyRequest(request).then(resolve, reject);
	    });
	
	    p.request = request;
	    return p;
	  }
	  
	  function promisifyCursorRequestCall(obj, method, args) {
	    var p = promisifyRequestCall(obj, method, args);
	    return p.then(function(value) {
	      if (!value) return;
	      return new Cursor(value, p.request);
	    });
	  }
	
	  function proxyProperties(ProxyClass, targetProp, properties) {
	    properties.forEach(function(prop) {
	      Object.defineProperty(ProxyClass.prototype, prop, {
	        get: function() {
	          return this[targetProp][prop];
	        }
	      });
	    });
	  }
	
	  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
	    properties.forEach(function(prop) {
	      if (!(prop in Constructor.prototype)) return;
	      ProxyClass.prototype[prop] = function() {
	        return promisifyRequestCall(this[targetProp], prop, arguments);
	      };
	    });
	  }
	
	  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
	    properties.forEach(function(prop) {
	      if (!(prop in Constructor.prototype)) return;
	      ProxyClass.prototype[prop] = function() {
	        return this[targetProp][prop].apply(this[targetProp], arguments);
	      };
	    });
	  }
	
	  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
	    properties.forEach(function(prop) {
	      if (!(prop in Constructor.prototype)) return;
	      ProxyClass.prototype[prop] = function() {
	        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
	      };
	    });
	  }
	
	  function Index(index) {
	    this._index = index;
	  }
	
	  proxyProperties(Index, '_index', [
	    'name',
	    'keyPath',
	    'multiEntry',
	    'unique'
	  ]);
	
	  proxyRequestMethods(Index, '_index', IDBIndex, [
	    'get',
	    'getKey',
	    'getAll',
	    'getAllKeys',
	    'count'
	  ]);
	
	  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
	    'openCursor',
	    'openKeyCursor'
	  ]);
	
	  function Cursor(cursor, request) {
	    this._cursor = cursor;
	    this._request = request;
	  }
	
	  proxyProperties(Cursor, '_cursor', [
	    'direction',
	    'key',
	    'primaryKey',
	    'value'
	  ]);
	
	  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
	    'update',
	    'delete'
	  ]);
	
	  // proxy 'next' methods
	  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
	    if (!(methodName in IDBCursor.prototype)) return;
	    Cursor.prototype[methodName] = function() {
	      var cursor = this;
	      var args = arguments;
	      return Promise.resolve().then(function() {
	        cursor._cursor[methodName].apply(cursor._cursor, args);
	        return promisifyRequest(cursor._request).then(function(value) {
	          if (!value) return;
	          return new Cursor(value, cursor._request);
	        });
	      });
	    };
	  });
	
	  function ObjectStore(store) {
	    this._store = store;
	  }
	
	  ObjectStore.prototype.createIndex = function() {
	    return new Index(this._store.createIndex.apply(this._store, arguments));
	  };
	
	  ObjectStore.prototype.index = function() {
	    return new Index(this._store.index.apply(this._store, arguments));
	  };
	
	  proxyProperties(ObjectStore, '_store', [
	    'name',
	    'keyPath',
	    'indexNames',
	    'autoIncrement'
	  ]);
	
	  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
	    'put',
	    'add',
	    'delete',
	    'clear',
	    'get',
	    'getAll',
	    'getAllKeys',
	    'count'
	  ]);
	
	  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
	    'openCursor',
	    'openKeyCursor'
	  ]);
	
	  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
	    'deleteIndex'
	  ]);
	
	  function Transaction(idbTransaction) {
	    this._tx = idbTransaction;
	    this.complete = new Promise(function(resolve, reject) {
	      idbTransaction.oncomplete = function() {
	        resolve();
	      };
	      idbTransaction.onerror = function() {
	        reject(idbTransaction.error);
	      };
	    });
	  }
	
	  Transaction.prototype.objectStore = function() {
	    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
	  };
	
	  proxyProperties(Transaction, '_tx', [
	    'objectStoreNames',
	    'mode'
	  ]);
	
	  proxyMethods(Transaction, '_tx', IDBTransaction, [
	    'abort'
	  ]);
	
	  function UpgradeDB(db, oldVersion, transaction) {
	    this._db = db;
	    this.oldVersion = oldVersion;
	    this.transaction = new Transaction(transaction);
	  }
	
	  UpgradeDB.prototype.createObjectStore = function() {
	    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
	  };
	
	  proxyProperties(UpgradeDB, '_db', [
	    'name',
	    'version',
	    'objectStoreNames'
	  ]);
	
	  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
	    'deleteObjectStore',
	    'close'
	  ]);
	
	  function DB(db) {
	    this._db = db;
	  }
	
	  DB.prototype.transaction = function() {
	    return new Transaction(this._db.transaction.apply(this._db, arguments));
	  };
	
	  proxyProperties(DB, '_db', [
	    'name',
	    'version',
	    'objectStoreNames'
	  ]);
	
	  proxyMethods(DB, '_db', IDBDatabase, [
	    'close'
	  ]);
	
	  // Add cursor iterators
	  // TODO: remove this once browsers do the right thing with promises
	  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
	    [ObjectStore, Index].forEach(function(Constructor) {
	      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
	        var args = toArray(arguments);
	        var callback = args[args.length - 1];
	        var nativeObject = this._store || this._index;
	        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
	        request.onsuccess = function() {
	          callback(request.result);
	        };
	      };
	    });
	  });
	
	  // polyfill getAll
	  [Index, ObjectStore].forEach(function(Constructor) {
	    if (Constructor.prototype.getAll) return;
	    Constructor.prototype.getAll = function(query, count) {
	      var instance = this;
	      var items = [];
	
	      return new Promise(function(resolve) {
	        instance.iterateCursor(query, function(cursor) {
	          if (!cursor) {
	            resolve(items);
	            return;
	          }
	          items.push(cursor.value);
	
	          if (count !== undefined && items.length == count) {
	            resolve(items);
	            return;
	          }
	          cursor.continue();
	        });
	      });
	    };
	  });
	
	  var exp = {
	    open: function(name, version, upgradeCallback) {
	      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
	      var request = p.request;
	
	      request.onupgradeneeded = function(event) {
	        if (upgradeCallback) {
	          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
	        }
	      };
	
	      return p.then(function(db) {
	        return new DB(db);
	      });
	    },
	    delete: function(name) {
	      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
	    }
	  };
	
	  if (true) {
	    module.exports = exp;
	  }
	  else {
	    self.idb = exp;
	  }
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJhMzI1NDhkOGM1ZGY5MTZhYWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzA2OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVmcmVzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGV4dC1saW5lcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvZmVlZHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZGIvbGliL2lkYi5qcyJdLCJuYW1lcyI6WyJhcHBlbmRDaGlsZCIsImNoZWNrU3RhdHVzIiwidG9Kc29uIiwicXMiLCIkb24iLCJzdHJUb0VscyIsIiRwcmVwZW5kIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJzZWxlY3RvciIsInNjb3BlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwidHlwZSIsImNhbGxiYWNrIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250ZXh0UmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNldFN0YXJ0IiwiYm9keSIsInN0ciIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImVsIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIkluZGV4Q29udHJvbGxlciIsInRlbXBsYXRlIiwiZmVlZHNVcmwiLCJjb250YWluZXIiLCJfb3BlbkRhdGFiYXNlIiwiX3Nob3dDYWNoZWRBcnRpY2xlcyIsIl9nZXRGZWVkcyIsIl9jbGlja1RvUmVmcmVzaCIsIl9yZWdpc3RlclNlcnZpY2VXb3JrZXIiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwiX2RiUHJvbWlzZSIsIm9wZW4iLCJzdG9yZSIsInVwZ3JhZGVEQiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImNyZWF0ZUluZGV4Iiwic2VsZiIsImZldGNoIiwidGhlbiIsImRhdGEiLCJfZXh0cmFjdE5ldyIsIl9yZW5kZXJGZWVkcyIsImNhdGNoIiwiX2xhdGVzdGZlZWQiLCJmZWVkcyIsImFydGljbGVzIiwibGF0ZXN0ZmVlZCIsImZpbHRlciIsIml0ZW0iLCJEYXRlIiwicGFyc2UiLCJwdWJsaXNoZWRBdCIsIl9jYWNoZUFydGljbGVzIiwibGVuZ3RoIiwiZmVlZHNMaXN0IiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJmb3JFYWNoIiwiYXJ0aWNsZSIsInB1dCIsImluZGV4Iiwib3BlbkN1cnNvciIsImN1cnNvciIsImFkdmFuY2UiLCJkZWxldGVSZXN0IiwiZGVsZXRlIiwiY29udGludWUiLCJjaGlsZHJlbiIsImdldEFsbCIsInNvcnQiLCJhIiwiYiIsInJlZ2lzdGVyIiwicmVnIiwiY29udHJvbGxlciIsIndhaXRpbmciLCJfdXBkYXRlV29ya2VyIiwiaW5zdGFsbGluZyIsIl90cmFja0luc3RhbGxpbmciLCJyZWZyZXNoaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzdyIsInN0YXRlIiwicG9zdE1lc3NhZ2UiLCJUZW1wbGF0ZSIsIkhUTUxTdHJpbmciLCJyZWR1Y2UiLCJ0aXRsZSIsInVybFRvSW1hZ2UiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsInVybCJdLCJtYXBwaW5n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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYyYTMyNTQ4ZDhjNWRmOTE2YWFiIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEhUTUxIZWFkZXIgZnJvbSAnLi4vaHRtbC9oZWFkZXIuaHRtbCc7XG5pbXBvcnQgSFRNTEZlZWRzQ29udGFpbmVyIGZyb20gJy4uL2h0bWwvZmVlZHMuaHRtbCc7XG5pbXBvcnQge3FzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBJbmRleENvbnRyb2xsZXIgZnJvbSAnLi9pbmRleENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHtzdHJUb0Vsc30gZnJvbSAnLi91dGlscy5qcyc7XG5cbnFzKCdib2R5JykuYXBwZW5kQ2hpbGQoc3RyVG9FbHMoSFRNTEhlYWRlcikpO1xucXMoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHJUb0VscyhIVE1MRmVlZHNDb250YWluZXIpKTtcblxuXG5uZXcgSW5kZXhDb250cm9sbGVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbmhlYWRlciB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjOEI3RTdGO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjOTk5OyB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgaGVhZGVyIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgaGVhZGVyIC50aXRsZSBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAgIGhlYWRlciAudGl0bGUgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMjBweDsgfVxcbiAgaGVhZGVyIC5yZWZyZXNoLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVmcmVzaC5zdmdcIikgKyBcIik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLmZlZWRzIHtcXG4gIG1hcmdpbi10b3A6IDc1cHg7IH1cXG4gIC5mZWVkcyAuZmVlZHMtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAxZW07IH1cXG4gICAgLmZlZWRzIC5mZWVkcy1saXN0IGxpIHtcXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2JiYjtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgbWFyZ2luOiAxZW0gMDsgfVxcbiAgICAgIC5mZWVkcyAuZmVlZHMtbGlzdCBsaSAucHVibGlzaGVkQXQge1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgICAgLmZlZWRzIC5mZWVkcy1saXN0IGxpIGEge1xcbiAgICAgICAgY29sb3I6ICNFQTQ1NDA7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIC5mZWVkcyBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnMEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTVMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGcwS1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJTkNna2dkbWxsZDBKdmVEMGlNQ0F3SURJMU9TNHlORFFnTWpVNUxqSTBOQ0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNalU1TGpJME5DQXlOVGt1TWpRME95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krRFFvOFp6NE5DZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qWm1abVptWm1PeUlnWkQwaVRUSTBPQzR6TkRnc01USTVMak5vTFRFMUxqZzBPVU15TXpJdU5ERXNOalV1TWpjM0xERTRNQzQ0TXpFc01UTXVNemswTERFeE55NHlNRElzTVRNdU16azBEUW9KQ1dNdE16RXVPRFF4TERBdE5qQXVOall4TERFeUxqazVPQzA0TVM0MU16UXNNek11T1RrMlF6RTBMakF4Tnl3Mk9DNDFORGtzTUM0eU5TdzVOeTR3T1RJc01DNHdNellzTVRJNUxqTklNR3d3TGpBeE9Dd3dMak16TVV3d0xERXpNQzR3TXpOb01DNHdNellOQ2drSll6QXVNemt6TERZekxqZzFNeXcxTVM0M05UZ3NNVEUxTGpneE5pd3hNVFV1TVRrc01URTFMamd4Tm1Nek1TNDROREVzTUN3Mk1DNDJOakV0TVRNdU1EQTNMRGd4TGpVek5DMHpOQzR3TkRsc0xUSTFMamcxTWkweU5DNDVNekVOQ2drSll5MHhOQzR4Tnpnc01UUXVNekF6TFRNMExqQTFPQ3d5TXk0d01qY3ROVFV1TmpneUxESXpMakV6TldNdE5EUXVOREF4TERBdU1qQTJMVGM1TGpJd01TMHpOaTQwT1MwM09TNHlNREV0T0RBdU1USXlZeTB3TGpFd055MHlNaTQ0T1RNc01UQXVNRGt5TFRReUxqa3dPQ3d5TlM0ME9EWXROVGN1TlRrMURRb0pDV014TkM0eE9EWXRNVFF1TWpnMUxETTBMakExT0MweU15NHdNREVzTlRVdU5qa3hMVEl6TGpFd09HTTBOQzQwTVMwd0xqSXdOaXczT1M0eU1ERXNNell1TkRRMUxEYzVMakl3TVN3M09TNDVPVGQyTUM0eE1qVm9MVEUxTGpZMk1RMEtDUWxqTFRrdU56QTRMREF0TVRNdU5qWTRMRFl1TkRrNUxUZ3VPREUwTERFMExqUXhiRE16TGpjNU9Td3pNeTQwTXpOak55NDNNeklzTnk0M016SXNPUzQ1Tmpjc055NDJOakVzTVRjdU5qUTJMREJzTXpNdU56azVMVE16TGpRek13MEtDUWxETWpZeUxqQXlOU3d4TXpVdU56Z3hMREkxT0M0d05UWXNNVEk1TGpNc01qUTRMak0wT0N3eE1qa3VNM29pTHo0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL3JlZnJlc2guc3ZnXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8aGVhZGVyIGNsYXNzPVxcXCJ0aXRsZS1iYXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy90ZXh0LWxpbmVzLnN2Z1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxvZ29cXFwiIGFsdD1cXFwic2l0ZS1sb2dvXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj5UZWNoTmV3czwvc3Bhbj5cXG4gICAgICAgIDwvaDE+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyZWZyZXNoLWJ1dHRvblxcXCI+PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvaGVhZGVyPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2h0bWwvaGVhZGVyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh3YjJ4NVoyOXVJSE4wZVd4bFBTSm1hV3hzT2lORlEwVTNSVUU3SWlCd2IybHVkSE05SWpVeE1pdzNNeTQ1TlRZZ05URXlMRFE1TkM0NU16TWdNQ3cwT1RRdU9UTXpJREFzTnpNdU9UVTJJREkxTml3MU1TNHlJQ0l2UGcwS1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFl4TkRjME1qc2lJSEJ2YVc1MGN6MGlOVEV5TERFM0xqQTJOeUExTVRJc056TXVPVFUySURRMU5TNHhNVEVzTnpNdU9UVTJJRFF5TUM0NU56Z3NORFV1TlRFeElEUTFOUzR4TVRFc01UY3VNRFkzSUNJdlBnMEtQSEpsWTNRZ2VUMGlNVGN1TURZM0lpQnpkSGxzWlQwaVptbHNiRG9qTVVJME1UUTFPeUlnZDJsa2RHZzlJalExTlM0eE1URWlJR2hsYVdkb2REMGlOVFl1T0RnNUlpOCtEUW84Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUkRaRFJVUXhPeUlnWkQwaVRUUTBNeTQzTXpNc01qVTRMamcwTkVnMk9DNHlOamRqTFRRdU56RTBMREF0T0M0MU16TXRNeTQ0TWpFdE9DNDFNek10T0M0MU16TmpNQzAwTGpjeE15d3pMamd5TFRndU5UTXpMRGd1TlRNekxUZ3VOVE16YURNM05TNDBOamNOQ2dsak5DNDNNVFFzTUN3NExqVXpNeXd6TGpneU1TdzRMalV6TXl3NExqVXpNME0wTlRJdU1qWTNMREkxTlM0d01qUXNORFE0TGpRME55d3lOVGd1T0RRMExEUTBNeTQzTXpNc01qVTRMamcwTkhvaUx6NE5DanhuUGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTRRamRGTjBZN0lpQmtQU0pOTWpNekxqSTBOQ3d6TURRdU16VTJTRFk0TGpJMk4yTXROQzQzTVRRc01DMDRMalV6TXkwekxqZ3lNUzA0TGpVek15MDRMalV6TTNNekxqZ3lMVGd1TlRNekxEZ3VOVE16TFRndU5UTXphREUyTkM0NU56Z05DZ2tKWXpRdU56RTBMREFzT0M0MU16TXNNeTQ0TWpFc09DNDFNek1zT0M0MU16TlRNak0zTGprMU9Dd3pNRFF1TXpVMkxESXpNeTR5TkRRc016QTBMak0xTm5vaUx6NE5DZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qT0VJM1JUZEdPeUlnWkQwaVRUSXpNeTR5TkRRc016UTVMamcyTjBnMk9DNHlOamRqTFRRdU56RTBMREF0T0M0MU16TXRNeTQ0TWpFdE9DNDFNek10T0M0MU16TnpNeTQ0TWkwNExqVXpNeXc0TGpVek15MDRMalV6TTJneE5qUXVPVGM0RFFvSkNXTTBMamN4TkN3d0xEZ3VOVE16TERNdU9ESXhMRGd1TlRNekxEZ3VOVE16VXpJek55NDVOVGdzTXpRNUxqZzJOeXd5TXpNdU1qUTBMRE0wT1M0NE5qZDZJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3Nkl6aENOMFUzUmpzaUlHUTlJazB5TXpNdU1qUTBMRE01TlM0ek56aElOamd1TWpZM1l5MDBMamN4TkN3d0xUZ3VOVE16TFRNdU9ESXhMVGd1TlRNekxUZ3VOVE16Y3pNdU9ESXRPQzQxTXpNc09DNDFNek10T0M0MU16Tm9NVFkwTGprM09BMEtDUWxqTkM0M01UUXNNQ3c0TGpVek15d3pMamd5TVN3NExqVXpNeXc0TGpVek0xTXlNemN1T1RVNExETTVOUzR6Tnpnc01qTXpMakkwTkN3ek9UVXVNemM0ZWlJdlBnMEtQQzluUGcwS1BISmxZM1FnZUQwaU1qYzRMamMxTmlJZ2VUMGlNamsxTGpneU1pSWdjM1I1YkdVOUltWnBiR3c2STBZeE5EYzBNanNpSUhkcFpIUm9QU0l4TmpRdU9UYzRJaUJvWldsbmFIUTlJakV6Tmk0MU16TWlMejROQ2p4blBnMEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU00UWpkRk4wWTdJaUJrUFNKTk1qTXpMakkwTkN3ME5EQXVPRGc1U0RZNExqSTJOMk10TkM0M01UUXNNQzA0TGpVek15MHpMamd5TVMwNExqVXpNeTA0TGpVek0zTXpMamd5TFRndU5UTXpMRGd1TlRNekxUZ3VOVE16YURFMk5DNDVOemdOQ2drSll6UXVOekUwTERBc09DNDFNek1zTXk0NE1qRXNPQzQxTXpNc09DNDFNek5UTWpNM0xqazFPQ3cwTkRBdU9EZzVMREl6TXk0eU5EUXNORFF3TGpnNE9Yb2lMejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak9FSTNSVGRHT3lJZ1pEMGlUVE01TlM0d05Dd3lNVE11TXpNell5MHhOUzR6TmpZc01DMHlOeTR6TkRRdE5pNDNNalV0TXpFdU1qWXpMVEUzTGpVMVl5MHhMall3TXkwMExqUXpNaXd3TGpZNE9DMDVMak15TkN3MUxqRXlNUzB4TUM0NU1qY05DZ2tKWXpRdU5ESTJMVEV1TmpBMExEa3VNekl6TERBdU5qZzNMREV3TGpreU55dzFMakV5WXpFdU16WXhMRE11TnpZMExEY3VORGMxTERZdU1qa3lMREUxTGpJeE15dzJMakk1TW1NMUxqYzROaXd3TERFMUxqVTNOaTB4TGpjNU9Td3hOUzQxTnpZdE9DNDFOQTBLQ1Fsak1DMDBMall4T1MweUxqRXhNUzAyTGpJeE5pMHhOaTQ1TlRrdE9DNDJORFZqTFRZdU5UazVMVEV1TURjNUxURXpMalF5TVMweUxqRTVOUzB4T1M0eE5qa3ROUzR5TVRsakxUY3VPVEV4TFRRdU1UWXpMVEV5TGpBNU1pMHhNUzR4TmpjdE1USXVNRGt5TFRJd0xqSTFOdzBLQ1Fsak1DMHhOUzR3Tnpjc01UTXVOREl6TFRJMUxqWXdOeXd6TWk0Mk5ETXRNalV1TmpBM1l6RTFMak0xT1N3d0xESTNMak16Tml3MkxqY3lNU3d6TVM0eU5Ua3NNVGN1TlRSak1TNDJNRGNzTkM0ME16RXRNQzQyT0RRc09TNHpNalF0TlM0eE1UUXNNVEF1T1RNeERRb0pDV010TkM0ME16UXNNUzQyTVRFdE9TNHpNalF0TUM0Mk9EVXRNVEF1T1RJNUxUVXVNVEUwWXkweExqTTJOQzB6TGpjMk1TMDNMalEzTnkwMkxqSTVMVEUxTGpJeE5DMDJMakk1WXkwMUxqYzROaXd3TFRFMUxqVTNOaXd4TGpjNU9TMHhOUzQxTnpZc09DNDFOQTBLQ1Fsak1DdzBMall4TVN3eUxqRXdPU3cyTGpJd05Td3hOaTQ1TkRrc09DNDJNekpqTmk0MkxERXVNRGdzTVRNdU5ESTJMREl1TVRrMkxERTVMakUzTlN3MUxqSXlNV00zTGpreE15dzBMakUyTkN3eE1pNHdPVFlzTVRFdU1UY3lMREV5TGpBNU5pd3lNQzR5TmpZTkNna0pRelF5Tnk0Mk9EUXNNakF5TGpnd015dzBNVFF1TWpZc01qRXpMak16TXl3ek9UVXVNRFFzTWpFekxqTXpNM29pTHo0TkNnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pPRUkzUlRkR095SWdaRDBpVFRNeE9TNDBPVFlzTWpFekxqTXpNMk10TXk0eE9EY3NNQzAyTGpFME15MHhMamM0TmkwM0xqWXdPUzAwTGpZM05td3RPUzQyT0RZdE1Ua3VNVEUwYkMwNUxqWTROaXd4T1M0eE1UUU5DZ2tKWXkweExqWXdPQ3d6TGpFM05DMDFMakF5T1N3MUxqQXlNaTA0TGpVMU15dzBMall5TkdNdE15NDFNell0TUM0ek9URXROaTQwTlRndE1pNDVNemN0Tnk0ek16SXROaTR6T0RWc0xURTNMakk1T0MwMk9DNHlOamRqTFRFdU1UVTRMVFF1TlRZNExERXVOakE0TFRrdU1qRXNOaTR4TnpjdE1UQXVNelkzRFFvSkNXTTBMalUyTnkweExqRTFOU3c1TGpJeExERXVOakEzTERFd0xqTTJOeXcyTGpFM05td3hNUzQzTURVc05EWXVNVGszYkRjdU1EQTFMVEV6TGpneU5XTXhMalExTkMweUxqZzJPQ3cwTGpNNU5pMDBMalkzTml3M0xqWXhNaTAwTGpZM05nMEtDUWxqTXk0eU1UVXNNQ3cyTGpFMU9Dd3hMamd3T0N3M0xqWXhNaXcwTGpZM05tdzNMakF3TlN3eE15NDRNalZzTVRFdU56QTFMVFEyTGpFNU4yTXhMakUxT1MwMExqVTJPU3cxTGpnd01pMDNMak16TXl3eE1DNHpOamN0Tmk0eE56WU5DZ2tKWXpRdU5UWTVMREV1TVRVM0xEY3VNek0wTERVdU56azVMRFl1TVRjM0xERXdMak0yTjJ3dE1UY3VNams0TERZNExqSTJOMk10TUM0NE56VXNNeTQwTkRrdE15NDNPVFlzTlM0NU9UUXROeTR6TXpJc05pNHpPRFVOQ2drSlF6TXlNQzR4TWpNc01qRXpMak14Tml3ek1Ua3VPREE1TERJeE15NHpNek1zTXpFNUxqUTVOaXd5TVRNdU16TXplaUl2UGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTRRamRGTjBZN0lpQmtQU0pOTWpNekxqUTNNaXd5TVRNdU16TXphQzAwT0M0eU1tTXROQzQzTVRRc01DMDRMalV6TXkwekxqZ3lNUzA0TGpVek15MDRMalV6TTNZdE5qZ3VNalkzWXpBdE5DNDNNVE1zTXk0NE1pMDRMalV6TXl3NExqVXpNeTA0TGpVek13MEtDUWxvTkRndU1qSmpOQzQzTVRRc01DdzRMalV6TXl3ekxqZ3lNU3c0TGpVek15dzRMalV6TTNNdE15NDRNaXc0TGpVek15MDRMalV6TXl3NExqVXpNMmd0TXprdU5qZzNkalV4TGpKb016a3VOamczWXpRdU56RTBMREFzT0M0MU16TXNNeTQ0TWpFc09DNDFNek1zT0M0MU16TU5DZ2tKVXpJek9DNHhPRFlzTWpFekxqTXpNeXd5TXpNdU5EY3lMREl4TXk0ek16TjZJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3Nkl6aENOMFUzUmpzaUlHUTlJazB5TVRjdU16azVMREUzT1M0eWFDMHpNaTR4TkRkakxUUXVOekUwTERBdE9DNDFNek10TXk0NE1qRXRPQzQxTXpNdE9DNDFNek56TXk0NE1pMDRMalV6TXl3NExqVXpNeTA0TGpVek0yZ3pNaTR4TkRjTkNna0pZelF1TnpFMExEQXNPQzQxTXpNc015NDRNakVzT0M0MU16TXNPQzQxTXpOVE1qSXlMakV4TWl3eE56a3VNaXd5TVRjdU16azVMREUzT1M0eWVpSXZQZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNNFFqZEZOMFk3SWlCa1BTSk5NVFV4TGpFeU1Td3lNVE11TXpNell5MHlMalExTERBdE5DNDRNemt0TVM0d05UY3ROaTQwT1RJdE1pNDVPVE5zTFRRekxqSTBOaTAxTUM0Mk5qVldNakEwTGpnTkNna0pZekFzTkM0M01UTXRNeTQ0TWl3NExqVXpNeTA0TGpVek15dzRMalV6TTJNdE5DNDNNVFFzTUMwNExqVXpNeTB6TGpneU1TMDRMalV6TXkwNExqVXpNM1l0TmpndU1qWTNZekF0TXk0MU56VXNNaTR5TWpndE5pNDNOeXcxTGpVNE1TMDRMakF3TncwS0NRbGpNeTR6TlRJdE1TNHlNemdzTnk0eE1qSXRNQzR5TlRNc09TNDBORElzTWk0ME5qWnNORE11TWpRMkxEVXdMalkyTlhZdE5EVXVNVEkwWXpBdE5DNDNNVE1zTXk0NE1pMDRMalV6TXl3NExqVXpNeTA0TGpVek0zTTRMalV6TXl3ekxqZ3lNU3c0TGpVek15dzRMalV6TTFZeU1EUXVPQTBLQ1Fsak1Dd3pMalUzTlMweUxqSXlPQ3cyTGpjM0xUVXVOVGd4TERndU1EQTNRekUxTXk0eE1EY3NNakV6TGpFMk1pd3hOVEl1TVRBNExESXhNeTR6TXpNc01UVXhMakV5TVN3eU1UTXVNek16ZWlJdlBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQQzl6ZG1jK0RRbz1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy90ZXh0LWxpbmVzLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcImZlZWRzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZmVlZHMtbGlzdFxcXCI+XFxuXFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaHRtbC9mZWVkcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1czwgMzAwKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSnNvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxcyhzZWxlY3Rvciwgc2NvcGUpIHtcbiAgICByZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRvbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssICEhY2FwdHVyZSk7XG59XG5cbmNvbnN0IGNvbnRleHRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5jb250ZXh0UmFuZ2Uuc2V0U3RhcnQoZG9jdW1lbnQuYm9keSwgMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJUb0VscyhzdHIpIHtcbiAgICByZXR1cm4gY29udGV4dFJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJHByZXBlbmQodGFyZ2V0LCBlbCkge1xuICAgIHJldHVybiB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzLmpzIiwiaW1wb3J0IHtjaGVja1N0YXR1c30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge3RvSnNvbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge3FzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmltcG9ydCB7JG9ufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7JHByZXBlbmR9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGlkYiBmcm9tICdpZGInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy5mZWVkc1VybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT10ZWNoY3J1bmNoJnNvcnRCeT1sYXRlc3QmYXBpS2V5PWE5ZjQyNmQ0OGM3YjRjNjE5MmFmZmU0Y2UyYzE4YjJjJztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBxcygnLmZlZWRzLWxpc3QnLCBxcygnLmZlZWRzJykpO1xuICAgICAgICB0aGlzLl9vcGVuRGF0YWJhc2UoKTtcbiAgICAgICAgdGhpcy5fc2hvd0NhY2hlZEFydGljbGVzKCk7XG4gICAgICAgIHRoaXMuX2dldEZlZWRzKCk7XG4gICAgICAgIHRoaXMuX2NsaWNrVG9SZWZyZXNoKCk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG4gICAgfVxuXG4gICAgX29wZW5EYXRhYmFzZSgpIHtcbiAgICAgICAgLy8g5pyJc2VydmljZSB3b3JrZXLlho3liJvlu7rmlbDmja7lupNcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGJQcm9taXNlID0gaWRiLm9wZW4oJ1RlY2hOZXdzJywgMSwgdXBncmFkZURCID0+IHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHVwZ3JhZGVEQi5jcmVhdGVPYmplY3RTdG9yZSgnYXJ0aWNsZXMnLCB7XG4gICAgICAgICAgICAgICAga2V5UGF0aDogJ3RpdGxlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgndGltZScsICdwdWJsaXNoZWRBdCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2xpY2tUb1JlZnJlc2goKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgJG9uKHFzKCcucmVmcmVzaC1idXR0b24nKSwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fZ2V0RmVlZHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldEZlZWRzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZldGNoKHRoaXMuZmVlZHNVcmwpXG4gICAgICAgICAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHRvSnNvbilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZWxmLl9leHRyYWN0TmV3KGRhdGEpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNlbGYuX3JlbmRlckZlZWRzKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKCk7XG4gICAgfVxuXG4gICAgX2V4dHJhY3ROZXcoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5fbGF0ZXN0ZmVlZCkge1xuICAgICAgICAgICAgbGV0IGZlZWRzID0gZGF0YS5hcnRpY2xlcztcbiAgICAgICAgICAgIGxldCBsYXRlc3RmZWVkID0gdGhpcy5fbGF0ZXN0ZmVlZDtcbiAgICAgICAgICAgIGRhdGEuYXJ0aWNsZXMgPSBmZWVkcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShpdGVtLnB1Ymxpc2hlZEF0KSA+IERhdGUucGFyc2UobGF0ZXN0ZmVlZC5wdWJsaXNoZWRBdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWNoZUFydGljbGVzKGRhdGEuYXJ0aWNsZXMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEuYXJ0aWNsZXMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJGZWVkcyhkYXRhKSB7XG4gICAgICAgIGxldCBmZWVkcyA9IGRhdGE7XG4gICAgICAgIGlmIChmZWVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhdGVzdGZlZWQgPSBmZWVkc1swXTtcbiAgICAgICAgfVxuICAgICAgICAkcHJlcGVuZCh0aGlzLmNvbnRhaW5lciwgdGhpcy50ZW1wbGF0ZS5mZWVkc0xpc3QoZmVlZHMpKTtcbiAgICB9XG5cbiAgICBfY2FjaGVBcnRpY2xlcyhhcnRpY2xlcykge1xuICAgICAgICAvLyBjYWNoZSB0aGUgbmV3IGFydGljbGVzIGluIGluZGV4ZWREQlxuICAgICAgICB0aGlzLl9kYlByb21pc2UudGhlbigoZGIpID0+IHtcbiAgICAgICAgICAgIGlmICghZGIpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIHR4ID0gZGIudHJhbnNhY3Rpb24oJ2FydGljbGVzJywgJ3JlYWR3cml0ZScpO1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ2FydGljbGVzJyk7XG4gICAgICAgICAgICBhcnRpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXQoYXJ0aWNsZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3RvcmUuaW5kZXgoJ3RpbWUnKS5vcGVuQ3Vyc29yKG51bGwsICdwcmV2JykudGhlbigoY3Vyc29yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnNvci5hZHZhbmNlKDUwKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gZGVsZXRlUmVzdChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGN1cnNvci5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3Vyc29yLmNvbnRpbnVlKCkudGhlbihkZWxldGVSZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2hvd0NhY2hlZEFydGljbGVzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2RiUHJvbWlzZS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYiB8fCBzZWxmLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBkYi50cmFuc2FjdGlvbignYXJ0aWNsZXMnKS5vYmplY3RTdG9yZSgnYXJ0aWNsZXMnKS5pbmRleCgndGltZScpO1xuXG4gICAgICAgICAgICBpbmRleC5nZXRBbGwoKS50aGVuKChhcnRpY2xlcykgPT4ge1xuICAgICAgICAgICAgICAgIGFydGljbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5wdWJsaXNoZWRBdCkgLSBEYXRlLnBhcnNlKGEucHVibGlzaGVkQXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlbmRlckZlZWRzKGFydGljbGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqKioqKioqKioqKioqKioqKiBzZXJ2aWNlIHdvcmtlciByZWxhdGVkICoqKioqKioqKioqKioqKioqKiovXG4gICAgLy8g5rOo5YaMc2VydmljZVdvcmtlclxuICAgIF9yZWdpc3RlclNlcnZpY2VXb3JrZXIoKSB7XG4gICAgICAgIC8vIOWKn+iDveajgOa1i1xuICAgICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zZXJ2aWNlV29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWcpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjemhtemdouayoeacieiiq3NlcnZpY2Ugd29ya2Vy5o6n5Yi277yM5Lmf5bCx5LiN5b+F5aSE55CG5pu05paw5LqGXG4gICAgICAgICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOaciSBzZXJ2aWNlIHdvcmtlcuato+WcqOetieW+heiiq+a/gOa0u++8jOivtOaYjuaWsOeahHNlcnZpY2Ugd29ya2Vy5a6J6KOF5oiQ5Yqf77yMdXBkYXRlIHJlYWR5XG4gICAgICAgICAgICBpZiAocmVnLndhaXRpbmcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVXb3JrZXIocmVnLndhaXRpbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5pyJIHNlcnZpY2Ugd29ya2Vy5q2j5Zyo6KKr5a6J6KOF77yM6Lef6Liq5a6J6KOF54q25oCBXG4gICAgICAgICAgICBpZiAocmVnLmluc3RhbGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl90cmFja0luc3RhbGxpbmcocmVnLmluc3RhbGxpbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g55uR5ZCsdXBkYXRlZm91bmTkuovku7bvvIzot5/ouKrmm7TmlrDnmoTlronoo4XnirbmgIFcbiAgICAgICAgICAgIHJlZy5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVmb3VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3RyYWNrSW5zdGFsbGluZyhyZWcuaW5zdGFsbGluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5b2T5o6n5Yi26aG16Z2i55qEc2VydmljZSB3b3JrZXLlj5HnlJ/mlLnlj5jvvIzliLfmlrDpobXpnaLku6XliqDovb3mm7TmlrDnmoTotYTmupBcbiAgICAgICAgdmFyIHJlZnJlc2hpbmc7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChyZWZyZXNoaW5nKSByZXR1cm47XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3RyYWNrSW5zdGFsbGluZyhzdykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHN3LmFkZEV2ZW50TGlzdGVuZXIoJ3N0YXRlY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc3cuc3RhdGUgPT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVXb3JrZXIoc3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlV29ya2VyKHN3KSB7XG4gICAgICAgIHN3LnBvc3RNZXNzYWdlKCdza2lwV2FpdGluZycpO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleENvbnRyb2xsZXIuanMiLCJpbXBvcnQge3N0clRvRWxzfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGUge1xuICAgIGZlZWRzTGlzdChmZWVkcykge1xuICAgICAgICBsZXQgSFRNTFN0cmluZyA9IGZlZWRzLnJlZHVjZSgoYSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPjxpbWcgc3JjPVwiJHtpdGVtLnVybFRvSW1hZ2V9XCIgYWx0PVwibmV3cyBpbWFnZVwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiPjxzcGFuIGNsYXNzPVwiYXV0aG9yXCI+JHtpdGVtLmF1dGhvcn08L3NwYW4+PHNwYW4gY2xhc3M9XCJwdWJsaXNoZWRBdFwiPiR7aXRlbS5wdWJsaXNoZWRBdH08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtpdGVtLmRlc2NyaXB0aW9ufTxhIGhyZWY9XCIke2l0ZW0udXJsfVwiIHRhcmdldD1cImJsYW5rXCI+cmVhZCBtb3JlPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfSwgJycpO1xuXG4gICAgICAgIHJldHVybiBzdHJUb0VscyhIVE1MU3RyaW5nKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RlbXBsYXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHRvQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdENhbGwob2JqLCBtZXRob2QsIGFyZ3MpIHtcbiAgICB2YXIgcmVxdWVzdDtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVxdWVzdCA9IG9ialttZXRob2RdLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcblxuICAgIHAucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHByb21pc2lmeUN1cnNvclJlcXVlc3RDYWxsKG9iaiwgbWV0aG9kLCBhcmdzKSB7XG4gICAgdmFyIHAgPSBwcm9taXNpZnlSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncyk7XG4gICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIG5ldyBDdXJzb3IodmFsdWUsIHAucmVxdWVzdCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eVByb3BlcnRpZXMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgcHJvcGVydGllcykge1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJveHlDbGFzcy5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1t0YXJnZXRQcm9wXVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eVJlcXVlc3RNZXRob2RzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIENvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmICghKHByb3AgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuICAgICAgUHJveHlDbGFzcy5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3RDYWxsKHRoaXNbdGFyZ2V0UHJvcF0sIHByb3AsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHlNZXRob2RzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIENvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmICghKHByb3AgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuICAgICAgUHJveHlDbGFzcy5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0UHJvcF1bcHJvcF0uYXBwbHkodGhpc1t0YXJnZXRQcm9wXSwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eUN1cnNvclJlcXVlc3RNZXRob2RzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIENvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmICghKHByb3AgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuICAgICAgUHJveHlDbGFzcy5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeUN1cnNvclJlcXVlc3RDYWxsKHRoaXNbdGFyZ2V0UHJvcF0sIHByb3AsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHJveHlQcm9wZXJ0aWVzKEluZGV4LCAnX2luZGV4JywgW1xuICAgICduYW1lJyxcbiAgICAna2V5UGF0aCcsXG4gICAgJ211bHRpRW50cnknLFxuICAgICd1bmlxdWUnXG4gIF0pO1xuXG4gIHByb3h5UmVxdWVzdE1ldGhvZHMoSW5kZXgsICdfaW5kZXgnLCBJREJJbmRleCwgW1xuICAgICdnZXQnLFxuICAgICdnZXRLZXknLFxuICAgICdnZXRBbGwnLFxuICAgICdnZXRBbGxLZXlzJyxcbiAgICAnY291bnQnXG4gIF0pO1xuXG4gIHByb3h5Q3Vyc29yUmVxdWVzdE1ldGhvZHMoSW5kZXgsICdfaW5kZXgnLCBJREJJbmRleCwgW1xuICAgICdvcGVuQ3Vyc29yJyxcbiAgICAnb3BlbktleUN1cnNvcidcbiAgXSk7XG5cbiAgZnVuY3Rpb24gQ3Vyc29yKGN1cnNvciwgcmVxdWVzdCkge1xuICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvcjtcbiAgICB0aGlzLl9yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIHByb3h5UHJvcGVydGllcyhDdXJzb3IsICdfY3Vyc29yJywgW1xuICAgICdkaXJlY3Rpb24nLFxuICAgICdrZXknLFxuICAgICdwcmltYXJ5S2V5JyxcbiAgICAndmFsdWUnXG4gIF0pO1xuXG4gIHByb3h5UmVxdWVzdE1ldGhvZHMoQ3Vyc29yLCAnX2N1cnNvcicsIElEQkN1cnNvciwgW1xuICAgICd1cGRhdGUnLFxuICAgICdkZWxldGUnXG4gIF0pO1xuXG4gIC8vIHByb3h5ICduZXh0JyBtZXRob2RzXG4gIFsnYWR2YW5jZScsICdjb250aW51ZScsICdjb250aW51ZVByaW1hcnlLZXknXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcbiAgICBpZiAoIShtZXRob2ROYW1lIGluIElEQkN1cnNvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgQ3Vyc29yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnNvciA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJzb3IuX2N1cnNvclttZXRob2ROYW1lXS5hcHBseShjdXJzb3IuX2N1cnNvciwgYXJncyk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KGN1cnNvci5fcmVxdWVzdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgICAgICByZXR1cm4gbmV3IEN1cnNvcih2YWx1ZSwgY3Vyc29yLl9yZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBPYmplY3RTdG9yZShzdG9yZSkge1xuICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gIH1cblxuICBPYmplY3RTdG9yZS5wcm90b3R5cGUuY3JlYXRlSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEluZGV4KHRoaXMuX3N0b3JlLmNyZWF0ZUluZGV4LmFwcGx5KHRoaXMuX3N0b3JlLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBPYmplY3RTdG9yZS5wcm90b3R5cGUuaW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEluZGV4KHRoaXMuX3N0b3JlLmluZGV4LmFwcGx5KHRoaXMuX3N0b3JlLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoT2JqZWN0U3RvcmUsICdfc3RvcmUnLCBbXG4gICAgJ25hbWUnLFxuICAgICdrZXlQYXRoJyxcbiAgICAnaW5kZXhOYW1lcycsXG4gICAgJ2F1dG9JbmNyZW1lbnQnXG4gIF0pO1xuXG4gIHByb3h5UmVxdWVzdE1ldGhvZHMoT2JqZWN0U3RvcmUsICdfc3RvcmUnLCBJREJPYmplY3RTdG9yZSwgW1xuICAgICdwdXQnLFxuICAgICdhZGQnLFxuICAgICdkZWxldGUnLFxuICAgICdjbGVhcicsXG4gICAgJ2dldCcsXG4gICAgJ2dldEFsbCcsXG4gICAgJ2dldEFsbEtleXMnLFxuICAgICdjb3VudCdcbiAgXSk7XG5cbiAgcHJveHlDdXJzb3JSZXF1ZXN0TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ29wZW5DdXJzb3InLFxuICAgICdvcGVuS2V5Q3Vyc29yJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoT2JqZWN0U3RvcmUsICdfc3RvcmUnLCBJREJPYmplY3RTdG9yZSwgW1xuICAgICdkZWxldGVJbmRleCdcbiAgXSk7XG5cbiAgZnVuY3Rpb24gVHJhbnNhY3Rpb24oaWRiVHJhbnNhY3Rpb24pIHtcbiAgICB0aGlzLl90eCA9IGlkYlRyYW5zYWN0aW9uO1xuICAgIHRoaXMuY29tcGxldGUgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlkYlRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIGlkYlRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KGlkYlRyYW5zYWN0aW9uLmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBUcmFuc2FjdGlvbi5wcm90b3R5cGUub2JqZWN0U3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE9iamVjdFN0b3JlKHRoaXMuX3R4Lm9iamVjdFN0b3JlLmFwcGx5KHRoaXMuX3R4LCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoVHJhbnNhY3Rpb24sICdfdHgnLCBbXG4gICAgJ29iamVjdFN0b3JlTmFtZXMnLFxuICAgICdtb2RlJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoVHJhbnNhY3Rpb24sICdfdHgnLCBJREJUcmFuc2FjdGlvbiwgW1xuICAgICdhYm9ydCdcbiAgXSk7XG5cbiAgZnVuY3Rpb24gVXBncmFkZURCKGRiLCBvbGRWZXJzaW9uLCB0cmFuc2FjdGlvbikge1xuICAgIHRoaXMuX2RiID0gZGI7XG4gICAgdGhpcy5vbGRWZXJzaW9uID0gb2xkVmVyc2lvbjtcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgfVxuXG4gIFVwZ3JhZGVEQi5wcm90b3R5cGUuY3JlYXRlT2JqZWN0U3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IE9iamVjdFN0b3JlKHRoaXMuX2RiLmNyZWF0ZU9iamVjdFN0b3JlLmFwcGx5KHRoaXMuX2RiLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoVXBncmFkZURCLCAnX2RiJywgW1xuICAgICduYW1lJyxcbiAgICAndmVyc2lvbicsXG4gICAgJ29iamVjdFN0b3JlTmFtZXMnXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhVcGdyYWRlREIsICdfZGInLCBJREJEYXRhYmFzZSwgW1xuICAgICdkZWxldGVPYmplY3RTdG9yZScsXG4gICAgJ2Nsb3NlJ1xuICBdKTtcblxuICBmdW5jdGlvbiBEQihkYikge1xuICAgIHRoaXMuX2RiID0gZGI7XG4gIH1cblxuICBEQi5wcm90b3R5cGUudHJhbnNhY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKHRoaXMuX2RiLnRyYW5zYWN0aW9uLmFwcGx5KHRoaXMuX2RiLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoREIsICdfZGInLCBbXG4gICAgJ25hbWUnLFxuICAgICd2ZXJzaW9uJyxcbiAgICAnb2JqZWN0U3RvcmVOYW1lcydcbiAgXSk7XG5cbiAgcHJveHlNZXRob2RzKERCLCAnX2RiJywgSURCRGF0YWJhc2UsIFtcbiAgICAnY2xvc2UnXG4gIF0pO1xuXG4gIC8vIEFkZCBjdXJzb3IgaXRlcmF0b3JzXG4gIC8vIFRPRE86IHJlbW92ZSB0aGlzIG9uY2UgYnJvd3NlcnMgZG8gdGhlIHJpZ2h0IHRoaW5nIHdpdGggcHJvbWlzZXNcbiAgWydvcGVuQ3Vyc29yJywgJ29wZW5LZXlDdXJzb3InXS5mb3JFYWNoKGZ1bmN0aW9uKGZ1bmNOYW1lKSB7XG4gICAgW09iamVjdFN0b3JlLCBJbmRleF0uZm9yRWFjaChmdW5jdGlvbihDb25zdHJ1Y3Rvcikge1xuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlW2Z1bmNOYW1lLnJlcGxhY2UoJ29wZW4nLCAnaXRlcmF0ZScpXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgbmF0aXZlT2JqZWN0ID0gdGhpcy5fc3RvcmUgfHwgdGhpcy5faW5kZXg7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmF0aXZlT2JqZWN0W2Z1bmNOYW1lXS5hcHBseShuYXRpdmVPYmplY3QsIGFyZ3Muc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBwb2x5ZmlsbCBnZXRBbGxcbiAgW0luZGV4LCBPYmplY3RTdG9yZV0uZm9yRWFjaChmdW5jdGlvbihDb25zdHJ1Y3Rvcikge1xuICAgIGlmIChDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0QWxsKSByZXR1cm47XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKHF1ZXJ5LCBjb3VudCkge1xuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBpbnN0YW5jZS5pdGVyYXRlQ3Vyc29yKHF1ZXJ5LCBmdW5jdGlvbihjdXJzb3IpIHtcbiAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zLnB1c2goY3Vyc29yLnZhbHVlKTtcblxuICAgICAgICAgIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLmxlbmd0aCA9PSBjb3VudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIHZhciBleHAgPSB7XG4gICAgb3BlbjogZnVuY3Rpb24obmFtZSwgdmVyc2lvbiwgdXBncmFkZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgcCA9IHByb21pc2lmeVJlcXVlc3RDYWxsKGluZGV4ZWREQiwgJ29wZW4nLCBbbmFtZSwgdmVyc2lvbl0pO1xuICAgICAgdmFyIHJlcXVlc3QgPSBwLnJlcXVlc3Q7XG5cbiAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHVwZ3JhZGVDYWxsYmFjaykge1xuICAgICAgICAgIHVwZ3JhZGVDYWxsYmFjayhuZXcgVXBncmFkZURCKHJlcXVlc3QucmVzdWx0LCBldmVudC5vbGRWZXJzaW9uLCByZXF1ZXN0LnRyYW5zYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwLnRoZW4oZnVuY3Rpb24oZGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEQihkYik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3RDYWxsKGluZGV4ZWREQiwgJ2RlbGV0ZURhdGFiYXNlJywgW25hbWVdKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBleHA7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VsZi5pZGIgPSBleHA7XG4gIH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaWRiL2xpYi9pZGIuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=