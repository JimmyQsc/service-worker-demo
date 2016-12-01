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
	exports.push([module.id, "body {\n  font-family: Arial;\n  margin: 0;\n  padding: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  max-width: 600px;\n  margin: 0 auto; }\n\nheader {\n  margin: 0;\n  height: 60px;\n  background: red;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 0 15px #999; }\n  header .container {\n    position: relative; }\n  header .title {\n    margin: 0;\n    color: #fff; }\n    header .title span {\n      font-size: 26px;\n      line-height: 60px;\n      position: absolute; }\n    header .title img {\n      height: 50px;\n      margin-top: 5px;\n      padding: 0 20px; }\n  header .refresh-button {\n    width: 30px;\n    height: 30px;\n    background: url(" + __webpack_require__(4) + ");\n    position: absolute;\n    top: 15px;\n    right: 20px;\n    border: none; }\n\n.feeds {\n  margin-top: 75px; }\n  .feeds .feeds-list {\n    list-style: none;\n    margin: 0;\n    padding: 0 1em; }\n    .feeds .feeds-list li {\n      box-shadow: 1px 1px 10px #bbb;\n      padding: 1em;\n      margin: 1em 0; }\n      .feeds .feeds-list li .publishedAt {\n        float: right; }\n      .feeds .feeds-list li a {\n        color: #EA4540;\n        text-decoration: none;\n        font-style: italic; }\n  .feeds img {\n    max-width: 100%; }\n\n.toast-container {\n  position: fixed;\n  left: 2em;\n  bottom: 1em;\n  max-height: 60vh;\n  overflow: auto; }\n", ""]);
	
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

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI1OS4yNDQgMjU5LjI0NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU5LjI0NCAyNTkuMjQ0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjsiIGQ9Ik0yNDguMzQ4LDEyOS4zaC0xNS44NDlDMjMyLjQxLDY1LjI3NywxODAuODMxLDEzLjM5NCwxMTcuMjAyLDEzLjM5NAoJCWMtMzEuODQxLDAtNjAuNjYxLDEyLjk5OC04MS41MzQsMzMuOTk2QzE0LjAxNyw2OC41NDksMC4yNSw5Ny4wOTIsMC4wMzYsMTI5LjNIMGwwLjAxOCwwLjMzMUwwLDEzMC4wMzNoMC4wMzYKCQljMC4zOTMsNjMuODUzLDUxLjc1OCwxMTUuODE2LDExNS4xOSwxMTUuODE2YzMxLjg0MSwwLDYwLjY2MS0xMy4wMDcsODEuNTM0LTM0LjA0OWwtMjUuODUyLTI0LjkzMQoJCWMtMTQuMTc4LDE0LjMwMy0zNC4wNTgsMjMuMDI3LTU1LjY4MiwyMy4xMzVjLTQ0LjQwMSwwLjIwNi03OS4yMDEtMzYuNDktNzkuMjAxLTgwLjEyMmMtMC4xMDctMjIuODkzLDEwLjA5Mi00Mi45MDgsMjUuNDg2LTU3LjU5NQoJCWMxNC4xODYtMTQuMjg1LDM0LjA1OC0yMy4wMDEsNTUuNjkxLTIzLjEwOGM0NC40MS0wLjIwNiw3OS4yMDEsMzYuNDQ1LDc5LjIwMSw3OS45OTd2MC4xMjVoLTE1LjY2MQoJCWMtOS43MDgsMC0xMy42NjgsNi40OTktOC44MTQsMTQuNDFsMzMuNzk5LDMzLjQzM2M3LjczMiw3LjczMiw5Ljk2Nyw3LjY2MSwxNy42NDYsMGwzMy43OTktMzMuNDMzCgkJQzI2Mi4wMjUsMTM1Ljc4MSwyNTguMDU2LDEyOS4zLDI0OC4zNDgsMTI5LjN6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

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

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VDRTdFQTsiIHBvaW50cz0iNTEyLDczLjk1NiA1MTIsNDk0LjkzMyAwLDQ5NC45MzMgMCw3My45NTYgMjU2LDUxLjIgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGMTQ3NDI7IiBwb2ludHM9IjUxMiwxNy4wNjcgNTEyLDczLjk1NiA0NTUuMTExLDczLjk1NiA0MjAuOTc4LDQ1LjUxMSA0NTUuMTExLDE3LjA2NyAiLz4KPHJlY3QgeT0iMTcuMDY3IiBzdHlsZT0iZmlsbDojMUI0MTQ1OyIgd2lkdGg9IjQ1NS4xMTEiIGhlaWdodD0iNTYuODg5Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNENkNFRDE7IiBkPSJNNDQzLjczMywyNTguODQ0SDY4LjI2N2MtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM2MwLTQuNzEzLDMuODItOC41MzMsOC41MzMtOC41MzNoMzc1LjQ2NwoJYzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzNDNDUyLjI2NywyNTUuMDI0LDQ0OC40NDcsMjU4Ljg0NCw0NDMuNzMzLDI1OC44NDR6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzhCN0U3RjsiIGQ9Ik0yMzMuMjQ0LDMwNC4zNTZINjguMjY3Yy00LjcxNCwwLTguNTMzLTMuODIxLTguNTMzLTguNTMzczMuODItOC41MzMsOC41MzMtOC41MzNoMTY0Ljk3OAoJCWM0LjcxNCwwLDguNTMzLDMuODIxLDguNTMzLDguNTMzUzIzNy45NTgsMzA0LjM1NiwyMzMuMjQ0LDMwNC4zNTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojOEI3RTdGOyIgZD0iTTIzMy4yNDQsMzQ5Ljg2N0g2OC4yNjdjLTQuNzE0LDAtOC41MzMtMy44MjEtOC41MzMtOC41MzNzMy44Mi04LjUzMyw4LjUzMy04LjUzM2gxNjQuOTc4CgkJYzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzNTMjM3Ljk1OCwzNDkuODY3LDIzMy4yNDQsMzQ5Ljg2N3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMjMzLjI0NCwzOTUuMzc4SDY4LjI2N2MtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM3MzLjgyLTguNTMzLDguNTMzLTguNTMzaDE2NC45NzgKCQljNC43MTQsMCw4LjUzMywzLjgyMSw4LjUzMyw4LjUzM1MyMzcuOTU4LDM5NS4zNzgsMjMzLjI0NCwzOTUuMzc4eiIvPgo8L2c+CjxyZWN0IHg9IjI3OC43NTYiIHk9IjI5NS44MjIiIHN0eWxlPSJmaWxsOiNGMTQ3NDI7IiB3aWR0aD0iMTY0Ljk3OCIgaGVpZ2h0PSIxMzYuNTMzIi8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzhCN0U3RjsiIGQ9Ik0yMzMuMjQ0LDQ0MC44ODlINjguMjY3Yy00LjcxNCwwLTguNTMzLTMuODIxLTguNTMzLTguNTMzczMuODItOC41MzMsOC41MzMtOC41MzNoMTY0Ljk3OAoJCWM0LjcxNCwwLDguNTMzLDMuODIxLDguNTMzLDguNTMzUzIzNy45NTgsNDQwLjg4OSwyMzMuMjQ0LDQ0MC44ODl6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojOEI3RTdGOyIgZD0iTTM5NS4wNCwyMTMuMzMzYy0xNS4zNjYsMC0yNy4zNDQtNi43MjUtMzEuMjYzLTE3LjU1Yy0xLjYwMy00LjQzMiwwLjY4OC05LjMyNCw1LjEyMS0xMC45MjcKCQljNC40MjYtMS42MDQsOS4zMjMsMC42ODcsMTAuOTI3LDUuMTJjMS4zNjEsMy43NjQsNy40NzUsNi4yOTIsMTUuMjEzLDYuMjkyYzUuNzg2LDAsMTUuNTc2LTEuNzk5LDE1LjU3Ni04LjU0CgkJYzAtNC42MTktMi4xMTEtNi4yMTYtMTYuOTU5LTguNjQ1Yy02LjU5OS0xLjA3OS0xMy40MjEtMi4xOTUtMTkuMTY5LTUuMjE5Yy03LjkxMS00LjE2My0xMi4wOTItMTEuMTY3LTEyLjA5Mi0yMC4yNTcKCQljMC0xNS4wNzcsMTMuNDIzLTI1LjYwNywzMi42NDMtMjUuNjA3YzE1LjM1OSwwLDI3LjMzNiw2LjcyMSwzMS4yNTksMTcuNTRjMS42MDcsNC40MzEtMC42ODQsOS4zMjQtNS4xMTQsMTAuOTMxCgkJYy00LjQzNCwxLjYxMS05LjMyNC0wLjY4NS0xMC45MjktNS4xMTRjLTEuMzY0LTMuNzYxLTcuNDc3LTYuMjktMTUuMjE0LTYuMjljLTUuNzg2LDAtMTUuNTc2LDEuNzk5LTE1LjU3Niw4LjU0CgkJYzAsNC42MTEsMi4xMDksNi4yMDUsMTYuOTQ5LDguNjMyYzYuNiwxLjA4LDEzLjQyNiwyLjE5NiwxOS4xNzUsNS4yMjFjNy45MTMsNC4xNjQsMTIuMDk2LDExLjE3MiwxMi4wOTYsMjAuMjY2CgkJQzQyNy42ODQsMjAyLjgwMyw0MTQuMjYsMjEzLjMzMywzOTUuMDQsMjEzLjMzM3oiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMzE5LjQ5NiwyMTMuMzMzYy0zLjE4NywwLTYuMTQzLTEuNzg2LTcuNjA5LTQuNjc2bC05LjY4Ni0xOS4xMTRsLTkuNjg2LDE5LjExNAoJCWMtMS42MDgsMy4xNzQtNS4wMjksNS4wMjItOC41NTMsNC42MjRjLTMuNTM2LTAuMzkxLTYuNDU4LTIuOTM3LTcuMzMyLTYuMzg1bC0xNy4yOTgtNjguMjY3Yy0xLjE1OC00LjU2OCwxLjYwOC05LjIxLDYuMTc3LTEwLjM2NwoJCWM0LjU2Ny0xLjE1NSw5LjIxLDEuNjA3LDEwLjM2Nyw2LjE3NmwxMS43MDUsNDYuMTk3bDcuMDA1LTEzLjgyNWMxLjQ1NC0yLjg2OCw0LjM5Ni00LjY3Niw3LjYxMi00LjY3NgoJCWMzLjIxNSwwLDYuMTU4LDEuODA4LDcuNjEyLDQuNjc2bDcuMDA1LDEzLjgyNWwxMS43MDUtNDYuMTk3YzEuMTU5LTQuNTY5LDUuODAyLTcuMzMzLDEwLjM2Ny02LjE3NgoJCWM0LjU2OSwxLjE1Nyw3LjMzNCw1Ljc5OSw2LjE3NywxMC4zNjdsLTE3LjI5OCw2OC4yNjdjLTAuODc1LDMuNDQ5LTMuNzk2LDUuOTk0LTcuMzMyLDYuMzg1CgkJQzMyMC4xMjMsMjEzLjMxNiwzMTkuODA5LDIxMy4zMzMsMzE5LjQ5NiwyMTMuMzMzeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzhCN0U3RjsiIGQ9Ik0yMzMuNDcyLDIxMy4zMzNoLTQ4LjIyYy00LjcxNCwwLTguNTMzLTMuODIxLTguNTMzLTguNTMzdi02OC4yNjdjMC00LjcxMywzLjgyLTguNTMzLDguNTMzLTguNTMzCgkJaDQ4LjIyYzQuNzE0LDAsOC41MzMsMy44MjEsOC41MzMsOC41MzNzLTMuODIsOC41MzMtOC41MzMsOC41MzNoLTM5LjY4N3Y1MS4yaDM5LjY4N2M0LjcxNCwwLDguNTMzLDMuODIxLDguNTMzLDguNTMzCgkJUzIzOC4xODYsMjEzLjMzMywyMzMuNDcyLDIxMy4zMzN6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojOEI3RTdGOyIgZD0iTTIxNy4zOTksMTc5LjJoLTMyLjE0N2MtNC43MTQsMC04LjUzMy0zLjgyMS04LjUzMy04LjUzM3MzLjgyLTguNTMzLDguNTMzLTguNTMzaDMyLjE0NwoJCWM0LjcxNCwwLDguNTMzLDMuODIxLDguNTMzLDguNTMzUzIyMi4xMTIsMTc5LjIsMjE3LjM5OSwxNzkuMnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiM4QjdFN0Y7IiBkPSJNMTUxLjEyMSwyMTMuMzMzYy0yLjQ1LDAtNC44MzktMS4wNTctNi40OTItMi45OTNsLTQzLjI0Ni01MC42NjVWMjA0LjgKCQljMCw0LjcxMy0zLjgyLDguNTMzLTguNTMzLDguNTMzYy00LjcxNCwwLTguNTMzLTMuODIxLTguNTMzLTguNTMzdi02OC4yNjdjMC0zLjU3NSwyLjIyOC02Ljc3LDUuNTgxLTguMDA3CgkJYzMuMzUyLTEuMjM4LDcuMTIyLTAuMjUzLDkuNDQyLDIuNDY2bDQzLjI0Niw1MC42NjV2LTQ1LjEyNGMwLTQuNzEzLDMuODItOC41MzMsOC41MzMtOC41MzNzOC41MzMsMy44MjEsOC41MzMsOC41MzNWMjA0LjgKCQljMCwzLjU3NS0yLjIyOCw2Ljc3LTUuNTgxLDguMDA3QzE1My4xMDcsMjEzLjE2MiwxNTIuMTA4LDIxMy4zMzMsMTUxLjEyMSwyMTMuMzMzeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

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
	
	var _toast = __webpack_require__(13);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IndexController = function () {
	    function IndexController() {
	        _classCallCheck(this, IndexController);
	
	        this.template = new _template2.default();
	        this.feedsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=a9f426d48c7b4c6192affe4ce2c18b2c';
	        this.container = (0, _utils.qs)('.feeds-list', (0, _utils.qs)('.feeds'));
	        this.toastContainer = (0, _utils.qs)('.toast-container');
	        this._detectFeature();
	        // 创建数据库空间
	        this._openDatabase();
	        // 首先显示缓存的资源
	        this._showCachedArticles();
	        // 请求网络
	        this._getFeeds();
	        this._clickToRefresh();
	        this._registerServiceWorker();
	    }
	
	    // 功能检测
	
	
	    _createClass(IndexController, [{
	        key: '_detectFeature',
	        value: function _detectFeature() {
	            var unsupports = [];
	
	            if (!navigator.serviceWorker) {
	                unsupports.push('Service worker');
	            }
	
	            if (!window.fetch) {
	                unsupports.push('fetch API');
	            }
	
	            if (!window.caches) {
	                unsupports.push('cache API');
	            }
	
	            if (unsupports.length) {
	                new _toast2.default({
	                    message: '你的浏览器不支持' + unsupports.join(',')
	                });
	            }
	        }
	    }, {
	        key: '_openDatabase',
	        value: function _openDatabase() {
	            // 有service worker再创建数据库
	            if (!navigator.serviceWorker) {
	                this._dbPromise = Promise.resolve();
	                return;
	            }
	            // 打开数据库，后面的callback在第一次打开或数据库升级时会执行
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
	            if (!data.articles.length) {
	                new _toast2.default({
	                    message: '还没有新文章'
	                });
	                return Promise.resolve([]);
	            }
	            // 缓存新文章
	            this._cacheArticles(data.articles);
	            return Promise.resolve(data.articles);
	        }
	    }, {
	        key: '_renderFeeds',
	        value: function _renderFeeds(data) {
	            var feeds = data;
	            if (!feeds.length) {
	                return;
	            }
	            this._latestfeed = feeds[0];
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
	                // 最多存50条
	                store.index('time').openCursor(null, 'prev').then(function (cursor) {
	                    return cursor.advance(50);
	                }).then(function deleteRest(cursor) {
	                    if (!cursor) return;
	                    cursor.delete();
	                    return cursor.continue().then(deleteRest);
	                });
	            });
	
	            this._syncImageCache();
	        }
	
	        // 显示已缓存的文章
	
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
	                    // 按时间排序
	                    articles.sort(function (a, b) {
	                        return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
	                    });
	                    self._renderFeeds(articles);
	                });
	            });
	        }
	
	        // 使文章缓存和图片缓存一致
	
	    }, {
	        key: '_syncImageCache',
	        value: function _syncImageCache() {
	            return this._dbPromise.then(function (db) {
	                if (!db) return;
	
	                var imagesNeeded = [];
	
	                var tx = db.transaction('articles');
	                return tx.objectStore('articles').getAll().then(function (articles) {
	                    articles.forEach(function (article) {
	                        if (article.urlToImage) {
	                            var imageUrl = new URL(article.urlToImage);
	                            var cacheUrl = imageUrl.origin + imageUrl.pathname;
	                            imagesNeeded.push(cacheUrl);
	                        }
	                    });
	
	                    return caches.open('TechNews-image-cache').then(function (cache) {
	                        return cache.keys().then(function (requests) {
	                            requests.forEach(function (request) {
	                                console.log(request);
	                                if (!imagesNeeded.includes(request.url)) {
	                                    cache.delete(request);
	                                }
	                            });
	                        });
	                    });
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
	
	                // 如果有 service worker正在等待被激活，说明新的service worker安装成功，通知用户更新
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
	
	        // 跟踪安装状态
	
	    }, {
	        key: '_trackInstalling',
	        value: function _trackInstalling(sw) {
	            var self = this;
	            sw.addEventListener('statechange', function () {
	                new _toast2.default({
	                    message: 'ServiceWorker:' + sw.state
	                });
	                if (sw.state == 'installed') {
	                    self._updateWorker(sw);
	                }
	            });
	        }
	
	        // 通知用户更新
	
	    }, {
	        key: '_updateWorker',
	        value: function _updateWorker(sw) {
	            new _toast2.default({
	                message: '检测到更新。点击更新刷新页面',
	                type: 'success',
	                customButtons: [{
	                    text: '更新',
	                    onClick: function onClick() {
	                        sw.postMessage('skipWaiting');
	                    }
	                }]
	            });
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


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Toast;
	
	__webpack_require__(14);
	
	function Toast(options) {
	
	    this.options = options;
	    this.options.type = options.type || 'default';
	
	    this.toastContainerEl = document.querySelector('.toastjs-container');
	    this.toastEl = document.querySelector('.toastjs');
	
	    this._init();
	} // author: ireade@github
	
	
	Toast.prototype._createElements = function () {
	    var _this = this;
	
	    return new Promise(function (resolve, reject) {
	
	        _this.toastContainerEl = document.createElement('div');
	        _this.toastContainerEl.classList.add('toastjs-container');
	        _this.toastContainerEl.setAttribute('role', 'alert');
	        _this.toastContainerEl.setAttribute('aria-hidden', true);
	
	        _this.toastEl = document.createElement('div');
	        _this.toastEl.classList.add('toastjs');
	
	        _this.toastContainerEl.appendChild(_this.toastEl);
	        document.body.appendChild(_this.toastContainerEl);
	
	        setTimeout(function () {
	            return resolve();
	        }, 500);
	    });
	};
	
	Toast.prototype._addEventListeners = function () {
	    var _this2 = this;
	
	    document.querySelector('.toastjs-btn--close').addEventListener('click', function () {
	        _this2._close();
	    });
	
	    if (this.options.customButtons) {
	        var customButtonsElArray = Array.prototype.slice.call(document.querySelectorAll('.toastjs-btn--custom'));
	        customButtonsElArray.map(function (el, index) {
	            el.addEventListener('click', function (event) {
	                return _this2.options.customButtons[index].onClick(event);
	            });
	        });
	    }
	};
	
	Toast.prototype._close = function () {
	    var _this3 = this;
	
	    return new Promise(function (resolve, reject) {
	        _this3.toastContainerEl.setAttribute('aria-hidden', true);
	        setTimeout(function () {
	
	            _this3.toastEl.innerHTML = '';
	            _this3.toastEl.classList.remove('default', 'success', 'warning', 'danger');
	
	            if (_this3.focusedElBeforeOpen) {
	                _this3.focusedElBeforeOpen.focus();
	            }
	
	            resolve();
	        }, 1000);
	    });
	};
	
	Toast.prototype._open = function () {
	
	    this.toastEl.classList.add(this.options.type);
	    this.toastContainerEl.setAttribute('aria-hidden', false);
	
	    var customButtons = '';
	    if (this.options.customButtons) {
	        customButtons = this.options.customButtons.map(function (customButton, index) {
	            return '<button type="button" class="toastjs-btn toastjs-btn--custom">' + customButton.text + '</button>';
	        });
	        customButtons = customButtons.join('');
	    }
	
	    this.toastEl.innerHTML = '\n        <p>' + this.options.message + '</p>\n        <button type="button" class="toastjs-btn toastjs-btn--close">忽略</button>\n        ' + customButtons + '\n    ';
	
	    this.focusedElBeforeOpen = document.activeElement;
	    document.querySelector('.toastjs-btn--close').focus();
	};
	
	Toast.prototype._init = function () {
	    var _this4 = this;
	
	    Promise.resolve().then(function () {
	        if (_this4.toastContainerEl) {
	            return Promise.resolve();
	        }
	        return _this4._createElements();
	    }).then(function () {
	        if (_this4.toastContainerEl.getAttribute('aria-hidden') == 'false') {
	            return _this4._close();
	        }
	        return Promise.resolve();
	    }).then(function () {
	        _this4._open();
	        _this4._addEventListeners();
	    });
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./toast.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./toast.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".toastjs-container {\n  position: absolute;\n  /* Fallback */\n  position: fixed;\n  bottom: 20px;\n  left: 15px;\n  width: calc(100% - 80px);\n  max-width: 400px;\n  transform: translateX(-150%);\n  transition: transform 1s;\n  z-index: 100;\n  /* */ }\n\n.toastjs-container[aria-hidden=\"false\"] {\n  transform: translateX(0%); }\n\n.toastjs {\n  background: #fff;\n  padding: 10px 15px 0;\n  /* No bottom padding because the buttons have a margin-bottom */\n  border-left-style: solid;\n  border-left-width: 5px;\n  border-radius: 4px;\n  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.4); }\n\n.toastjs.default {\n  border-left-color: #AAAAAA; }\n\n.toastjs.success {\n  border-left-color: #2ECC40; }\n\n.toastjs.warning {\n  border-left-color: #FF851B; }\n\n.toastjs.danger {\n  border-left-color: #FF4136; }\n\n.toastjs-btn {\n  background: #f0f0f0;\n  padding: 5px 10px;\n  border: 0;\n  border-radius: 4px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 14px;\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  cursor: pointer; }\n\n.toastjs-btn--custom {\n  background: #323232;\n  color: #fff; }\n\n.toastjs-btn:hover,\n.toastjs-btn:focus {\n  outline: none;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2); }\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQ1ZjgyMDA1ZWUyYmYwZjhiZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzA2OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVmcmVzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGV4dC1saW5lcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvZmVlZHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZGIvbGliL2lkYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9hc3Quc2Nzcz9iMDNkIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvYXN0LnNjc3MiXSwibmFtZXMiOlsiYXBwZW5kQ2hpbGQiLCJjaGVja1N0YXR1cyIsInRvSnNvbiIsInFzIiwiJG9uIiwic3RyVG9FbHMiLCIkcHJlcGVuZCIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwic2VsZWN0b3IiLCJzY29wZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsInR5cGUiLCJjYWxsYmFjayIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGV4dFJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsImJvZHkiLCJzdHIiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJlbCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJJbmRleENvbnRyb2xsZXIiLCJ0ZW1wbGF0ZSIsImZlZWRzVXJsIiwiY29udGFpbmVyIiwidG9hc3RDb250YWluZXIiLCJfZGV0ZWN0RmVhdHVyZSIsIl9vcGVuRGF0YWJhc2UiLCJfc2hvd0NhY2hlZEFydGljbGVzIiwiX2dldEZlZWRzIiwiX2NsaWNrVG9SZWZyZXNoIiwiX3JlZ2lzdGVyU2VydmljZVdvcmtlciIsInVuc3VwcG9ydHMiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicHVzaCIsIndpbmRvdyIsImZldGNoIiwiY2FjaGVzIiwibGVuZ3RoIiwibWVzc2FnZSIsImpvaW4iLCJfZGJQcm9taXNlIiwib3BlbiIsInN0b3JlIiwidXBncmFkZURCIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJzZWxmIiwidGhlbiIsImRhdGEiLCJfZXh0cmFjdE5ldyIsIl9yZW5kZXJGZWVkcyIsImNhdGNoIiwiX2xhdGVzdGZlZWQiLCJmZWVkcyIsImFydGljbGVzIiwibGF0ZXN0ZmVlZCIsImZpbHRlciIsIml0ZW0iLCJEYXRlIiwicGFyc2UiLCJwdWJsaXNoZWRBdCIsIl9jYWNoZUFydGljbGVzIiwiZmVlZHNMaXN0IiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJmb3JFYWNoIiwiYXJ0aWNsZSIsInB1dCIsImluZGV4Iiwib3BlbkN1cnNvciIsImN1cnNvciIsImFkdmFuY2UiLCJkZWxldGVSZXN0IiwiZGVsZXRlIiwiY29udGludWUiLCJfc3luY0ltYWdlQ2FjaGUiLCJjaGlsZHJlbiIsImdldEFsbCIsInNvcnQiLCJhIiwiYiIsImltYWdlc05lZWRlZCIsInVybFRvSW1hZ2UiLCJpbWFnZVVybCIsIlVSTCIsImNhY2hlVXJsIiwib3JpZ2luIiwicGF0aG5hbWUiLCJjYWNoZSIsImtleXMiLCJyZXF1ZXN0cyIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJ1cmwiLCJyZWdpc3RlciIsInJlZyIsImNvbnRyb2xsZXIiLCJ3YWl0aW5nIiwiX3VwZGF0ZVdvcmtlciIsImluc3RhbGxpbmciLCJfdHJhY2tJbnN0YWxsaW5nIiwicmVmcmVzaGluZyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3ciLCJzdGF0ZSIsImN1c3RvbUJ1dHRvbnMiLCJ0ZXh0Iiwib25DbGljayIsInBvc3RNZXNzYWdlIiwiVGVtcGxhdGUiLCJIVE1MU3RyaW5nIiwicmVkdWNlIiwidGl0bGUiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsIlRvYXN0Iiwib3B0aW9ucyIsInRvYXN0Q29udGFpbmVyRWwiLCJ0b2FzdEVsIiwiX2luaXQiLCJwcm90b3R5cGUiLCJfY3JlYXRlRWxlbWVudHMiLCJfdGhpcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3RoaXMyIiwiX2Nsb3NlIiwiY3VzdG9tQnV0dG9uc0VsQXJyYXkiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJldmVudCIsIl90aGlzMyIsImlubmVySFRNTCIsInJlbW92ZSIsImZvY3VzZWRFbEJlZm9yZU9wZW4iLCJmb2N1cyIsIl9vcGVuIiwiY3VzdG9tQnV0dG9uIiwiYWN0aXZlRWxlbWVudCIsIl90aGlzNCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7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T0FBM0QsRUFBb0U7QUFDaEUsb0JBQU9ELE9BQU9oQixNQUFQLEVBQVA7QUFDSDtBQUNELGdCQUFPN0ksUUFBUUMsT0FBUixFQUFQO0FBQ0gsTUFWRCxFQVVHb0QsSUFWSCxDQVVRLFlBQVk7QUFDaEJ3RyxnQkFBT0gsS0FBUDtBQUNBRyxnQkFBT2xCLGtCQUFQO0FBQ0gsTUFiRDtBQWNILEVBakJELEM7Ozs7OztBQzNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsK0NBQThDLHVCQUF1QixzQ0FBc0MsaUJBQWlCLGVBQWUsNkJBQTZCLHFCQUFxQixpQ0FBaUMsNkJBQTZCLGlCQUFpQixXQUFXLCtDQUErQyw4QkFBOEIsRUFBRSxjQUFjLHFCQUFxQix5QkFBeUIsaUdBQWlHLDJCQUEyQix1QkFBdUIsZ0RBQWdELEVBQUUsc0JBQXNCLCtCQUErQixFQUFFLHNCQUFzQiwrQkFBK0IsRUFBRSxzQkFBc0IsK0JBQStCLEVBQUUscUJBQXFCLCtCQUErQixFQUFFLGtCQUFrQix3QkFBd0Isc0JBQXNCLGNBQWMsdUJBQXVCLCtDQUErQyxvQkFBb0IsMEJBQTBCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLEVBQUUsMEJBQTBCLHdCQUF3QixnQkFBZ0IsRUFBRSw2Q0FBNkMsa0JBQWtCLCtDQUErQyxFQUFFOztBQUU3dkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTQ1ZjgyMDA1ZWUyYmYwZjhiZjkiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgSFRNTEhlYWRlciBmcm9tICcuLi9odG1sL2hlYWRlci5odG1sJztcbmltcG9ydCBIVE1MRmVlZHNDb250YWluZXIgZnJvbSAnLi4vaHRtbC9mZWVkcy5odG1sJztcbmltcG9ydCB7cXN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IEluZGV4Q29udHJvbGxlciBmcm9tICcuL2luZGV4Q29udHJvbGxlci5qcyc7XG5pbXBvcnQge3N0clRvRWxzfSBmcm9tICcuL3V0aWxzLmpzJztcblxucXMoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHJUb0VscyhIVE1MSGVhZGVyKSk7XG5xcygnYm9keScpLmFwcGVuZENoaWxkKHN0clRvRWxzKEhUTUxGZWVkc0NvbnRhaW5lcikpO1xuXG5cbm5ldyBJbmRleENvbnRyb2xsZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvOyB9XFxuXFxuaGVhZGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzk5OTsgfVxcbiAgaGVhZGVyIC5jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIGhlYWRlciAudGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuICAgIGhlYWRlciAudGl0bGUgc3BhbiB7XFxuICAgICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgICBoZWFkZXIgLnRpdGxlIGltZyB7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nOiAwIDIwcHg7IH1cXG4gIGhlYWRlciAucmVmcmVzaC1idXR0b24ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2VzL3JlZnJlc2guc3ZnXCIpICsgXCIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcblxcbi5mZWVkcyB7XFxuICBtYXJnaW4tdG9wOiA3NXB4OyB9XFxuICAuZmVlZHMgLmZlZWRzLWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMWVtOyB9XFxuICAgIC5mZWVkcyAuZmVlZHMtbGlzdCBsaSB7XFxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICNiYmI7XFxuICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgIG1hcmdpbjogMWVtIDA7IH1cXG4gICAgICAuZmVlZHMgLmZlZWRzLWxpc3QgbGkgLnB1Ymxpc2hlZEF0IHtcXG4gICAgICAgIGZsb2F0OiByaWdodDsgfVxcbiAgICAgIC5mZWVkcyAuZmVlZHMtbGlzdCBsaSBhIHtcXG4gICAgICAgIGNvbG9yOiAjRUE0NTQwO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuICAuZmVlZHMgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLnRvYXN0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAyZW07XFxuICBib3R0b206IDFlbTtcXG4gIG1heC1oZWlnaHQ6IDYwdmg7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRrdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDanh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lDZ2tnZG1sbGQwSnZlRDBpTUNBd0lESTFPUzR5TkRRZ01qVTVMakkwTkNJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWpVNUxqSTBOQ0F5TlRrdU1qUTBPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeG5QZ29KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVptWm1aanNpSUdROUlrMHlORGd1TXpRNExERXlPUzR6YUMweE5TNDRORGxETWpNeUxqUXhMRFkxTGpJM055d3hPREF1T0RNeExERXpMak01TkN3eE1UY3VNakF5TERFekxqTTVOQW9KQ1dNdE16RXVPRFF4TERBdE5qQXVOall4TERFeUxqazVPQzA0TVM0MU16UXNNek11T1RrMlF6RTBMakF4Tnl3Mk9DNDFORGtzTUM0eU5TdzVOeTR3T1RJc01DNHdNellzTVRJNUxqTklNR3d3TGpBeE9Dd3dMak16TVV3d0xERXpNQzR3TXpOb01DNHdNellLQ1Fsak1DNHpPVE1zTmpNdU9EVXpMRFV4TGpjMU9Dd3hNVFV1T0RFMkxERXhOUzR4T1N3eE1UVXVPREUyWXpNeExqZzBNU3d3TERZd0xqWTJNUzB4TXk0d01EY3NPREV1TlRNMExUTTBMakEwT1d3dE1qVXVPRFV5TFRJMExqa3pNUW9KQ1dNdE1UUXVNVGM0TERFMExqTXdNeTB6TkM0d05UZ3NNak11TURJM0xUVTFMalk0TWl3eU15NHhNelZqTFRRMExqUXdNU3d3TGpJd05pMDNPUzR5TURFdE16WXVORGt0TnprdU1qQXhMVGd3TGpFeU1tTXRNQzR4TURjdE1qSXVPRGt6TERFd0xqQTVNaTAwTWk0NU1EZ3NNalV1TkRnMkxUVTNMalU1TlFvSkNXTXhOQzR4T0RZdE1UUXVNamcxTERNMExqQTFPQzB5TXk0d01ERXNOVFV1TmpreExUSXpMakV3T0dNME5DNDBNUzB3TGpJd05pdzNPUzR5TURFc016WXVORFExTERjNUxqSXdNU3czT1M0NU9UZDJNQzR4TWpWb0xURTFMalkyTVFvSkNXTXRPUzQzTURnc01DMHhNeTQyTmpnc05pNDBPVGt0T0M0NE1UUXNNVFF1TkRGc016TXVOems1TERNekxqUXpNMk0zTGpjek1pdzNMamN6TWl3NUxqazJOeXczTGpZMk1Td3hOeTQyTkRZc01Hd3pNeTQzT1RrdE16TXVORE16Q2drSlF6STJNaTR3TWpVc01UTTFMamM0TVN3eU5UZ3VNRFUyTERFeU9TNHpMREkwT0M0ek5EZ3NNVEk1TGpONklpOCtDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BDOXpkbWMrQ2c9PVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL3JlZnJlc2guc3ZnXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiA8aGVhZGVyIGNsYXNzPVxcXCJ0aXRsZS1iYXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uL2ltYWdlcy90ZXh0LWxpbmVzLnN2Z1wiKSArIFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWxvZ29cXFwiIGFsdD1cXFwic2l0ZS1sb2dvXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj5UZWNoTmV3czwvc3Bhbj5cXG4gICAgICAgIDwvaDE+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyZWZyZXNoLWJ1dHRvblxcXCI+PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvaGVhZGVyPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2h0bWwvaGVhZGVyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVGt1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0NqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaUNna2dkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV4TWlBMU1USTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJMFZEUlRkRlFUc2lJSEJ2YVc1MGN6MGlOVEV5TERjekxqazFOaUExTVRJc05EazBMamt6TXlBd0xEUTVOQzQ1TXpNZ01DdzNNeTQ1TlRZZ01qVTJMRFV4TGpJZ0lpOCtDanh3YjJ4NVoyOXVJSE4wZVd4bFBTSm1hV3hzT2lOR01UUTNOREk3SWlCd2IybHVkSE05SWpVeE1pd3hOeTR3TmpjZ05URXlMRGN6TGprMU5pQTBOVFV1TVRFeExEY3pMamsxTmlBME1qQXVPVGM0TERRMUxqVXhNU0EwTlRVdU1URXhMREUzTGpBMk55QWlMejRLUEhKbFkzUWdlVDBpTVRjdU1EWTNJaUJ6ZEhsc1pUMGlabWxzYkRvak1VSTBNVFExT3lJZ2QybGtkR2c5SWpRMU5TNHhNVEVpSUdobGFXZG9kRDBpTlRZdU9EZzVJaTgrQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lORU5rTkZSREU3SWlCa1BTSk5ORFF6TGpjek15d3lOVGd1T0RRMFNEWTRMakkyTjJNdE5DNDNNVFFzTUMwNExqVXpNeTB6TGpneU1TMDRMalV6TXkwNExqVXpNMk13TFRRdU56RXpMRE11T0RJdE9DNDFNek1zT0M0MU16TXRPQzQxTXpOb016YzFMalEyTndvSll6UXVOekUwTERBc09DNDFNek1zTXk0NE1qRXNPQzQxTXpNc09DNDFNek5ETkRVeUxqSTJOeXd5TlRVdU1ESTBMRFEwT0M0ME5EY3NNalU0TGpnME5DdzBORE11TnpNekxESTFPQzQ0TkRSNklpOCtDanhuUGdvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3Nkl6aENOMFUzUmpzaUlHUTlJazB5TXpNdU1qUTBMRE13TkM0ek5UWklOamd1TWpZM1l5MDBMamN4TkN3d0xUZ3VOVE16TFRNdU9ESXhMVGd1TlRNekxUZ3VOVE16Y3pNdU9ESXRPQzQxTXpNc09DNDFNek10T0M0MU16Tm9NVFkwTGprM09Bb0pDV00wTGpjeE5Dd3dMRGd1TlRNekxETXVPREl4TERndU5UTXpMRGd1TlRNelV6SXpOeTQ1TlRnc016QTBMak0xTml3eU16TXVNalEwTERNd05DNHpOVFo2SWk4K0NnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pPRUkzUlRkR095SWdaRDBpVFRJek15NHlORFFzTXpRNUxqZzJOMGcyT0M0eU5qZGpMVFF1TnpFMExEQXRPQzQxTXpNdE15NDRNakV0T0M0MU16TXRPQzQxTXpOek15NDRNaTA0TGpVek15dzRMalV6TXkwNExqVXpNMmd4TmpRdU9UYzRDZ2tKWXpRdU56RTBMREFzT0M0MU16TXNNeTQ0TWpFc09DNDFNek1zT0M0MU16TlRNak0zTGprMU9Dd3pORGt1T0RZM0xESXpNeTR5TkRRc016UTVMamcyTjNvaUx6NEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU00UWpkRk4wWTdJaUJrUFNKTk1qTXpMakkwTkN3ek9UVXVNemM0U0RZNExqSTJOMk10TkM0M01UUXNNQzA0TGpVek15MHpMamd5TVMwNExqVXpNeTA0TGpVek0zTXpMamd5TFRndU5UTXpMRGd1TlRNekxUZ3VOVE16YURFMk5DNDVOemdLQ1Fsak5DNDNNVFFzTUN3NExqVXpNeXd6TGpneU1TdzRMalV6TXl3NExqVXpNMU15TXpjdU9UVTRMRE01TlM0ek56Z3NNak16TGpJME5Dd3pPVFV1TXpjNGVpSXZQZ284TDJjK0NqeHlaV04wSUhnOUlqSTNPQzQzTlRZaUlIazlJakk1TlM0NE1qSWlJSE4wZVd4bFBTSm1hV3hzT2lOR01UUTNOREk3SWlCM2FXUjBhRDBpTVRZMExqazNPQ0lnYUdWcFoyaDBQU0l4TXpZdU5UTXpJaTgrQ2p4blBnb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJemhDTjBVM1Jqc2lJR1E5SWsweU16TXVNalEwTERRME1DNDRPRGxJTmpndU1qWTNZeTAwTGpjeE5Dd3dMVGd1TlRNekxUTXVPREl4TFRndU5UTXpMVGd1TlRNemN6TXVPREl0T0M0MU16TXNPQzQxTXpNdE9DNDFNek5vTVRZMExqazNPQW9KQ1dNMExqY3hOQ3d3TERndU5UTXpMRE11T0RJeExEZ3VOVE16TERndU5UTXpVekl6Tnk0NU5UZ3NORFF3TGpnNE9Td3lNek11TWpRMExEUTBNQzQ0T0RsNklpOCtDZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qT0VJM1JUZEdPeUlnWkQwaVRUTTVOUzR3TkN3eU1UTXVNek16WXkweE5TNHpOallzTUMweU55NHpORFF0Tmk0M01qVXRNekV1TWpZekxURTNMalUxWXkweExqWXdNeTAwTGpRek1pd3dMalk0T0MwNUxqTXlOQ3cxTGpFeU1TMHhNQzQ1TWpjS0NRbGpOQzQwTWpZdE1TNDJNRFFzT1M0ek1qTXNNQzQyT0Rjc01UQXVPVEkzTERVdU1USmpNUzR6TmpFc015NDNOalFzTnk0ME56VXNOaTR5T1RJc01UVXVNakV6TERZdU1qa3lZelV1TnpnMkxEQXNNVFV1TlRjMkxURXVOems1TERFMUxqVTNOaTA0TGpVMENna0pZekF0TkM0Mk1Ua3RNaTR4TVRFdE5pNHlNVFl0TVRZdU9UVTVMVGd1TmpRMVl5MDJMalU1T1MweExqQTNPUzB4TXk0ME1qRXRNaTR4T1RVdE1Ua3VNVFk1TFRVdU1qRTVZeTAzTGpreE1TMDBMakUyTXkweE1pNHdPVEl0TVRFdU1UWTNMVEV5TGpBNU1pMHlNQzR5TlRjS0NRbGpNQzB4TlM0d056Y3NNVE11TkRJekxUSTFMall3Tnl3ek1pNDJORE10TWpVdU5qQTNZekUxTGpNMU9Td3dMREkzTGpNek5pdzJMamN5TVN3ek1TNHlOVGtzTVRjdU5UUmpNUzQyTURjc05DNDBNekV0TUM0Mk9EUXNPUzR6TWpRdE5TNHhNVFFzTVRBdU9UTXhDZ2tKWXkwMExqUXpOQ3d4TGpZeE1TMDVMak15TkMwd0xqWTROUzB4TUM0NU1qa3ROUzR4TVRSakxURXVNelkwTFRNdU56WXhMVGN1TkRjM0xUWXVNamt0TVRVdU1qRTBMVFl1TWpsakxUVXVOemcyTERBdE1UVXVOVGMyTERFdU56azVMVEUxTGpVM05pdzRMalUwQ2drSll6QXNOQzQyTVRFc01pNHhNRGtzTmk0eU1EVXNNVFl1T1RRNUxEZ3VOak15WXpZdU5pd3hMakE0TERFekxqUXlOaXd5TGpFNU5pd3hPUzR4TnpVc05TNHlNakZqTnk0NU1UTXNOQzR4TmpRc01USXVNRGsyTERFeExqRTNNaXd4TWk0d09UWXNNakF1TWpZMkNna0pRelF5Tnk0Mk9EUXNNakF5TGpnd015dzBNVFF1TWpZc01qRXpMak16TXl3ek9UVXVNRFFzTWpFekxqTXpNM29pTHo0S0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTRRamRGTjBZN0lpQmtQU0pOTXpFNUxqUTVOaXd5TVRNdU16TXpZeTB6TGpFNE55d3dMVFl1TVRRekxURXVOemcyTFRjdU5qQTVMVFF1TmpjMmJDMDVMalk0TmkweE9TNHhNVFJzTFRrdU5qZzJMREU1TGpFeE5Bb0pDV010TVM0Mk1EZ3NNeTR4TnpRdE5TNHdNamtzTlM0d01qSXRPQzQxTlRNc05DNDJNalJqTFRNdU5UTTJMVEF1TXpreExUWXVORFU0TFRJdU9UTTNMVGN1TXpNeUxUWXVNemcxYkMweE55NHlPVGd0TmpndU1qWTNZeTB4TGpFMU9DMDBMalUyT0N3eExqWXdPQzA1TGpJeExEWXVNVGMzTFRFd0xqTTJOd29KQ1dNMExqVTJOeTB4TGpFMU5TdzVMakl4TERFdU5qQTNMREV3TGpNMk55dzJMakUzTm13eE1TNDNNRFVzTkRZdU1UazNiRGN1TURBMUxURXpMamd5TldNeExqUTFOQzB5TGpnMk9DdzBMak01TmkwMExqWTNOaXczTGpZeE1pMDBMalkzTmdvSkNXTXpMakl4TlN3d0xEWXVNVFU0TERFdU9EQTRMRGN1TmpFeUxEUXVOamMyYkRjdU1EQTFMREV6TGpneU5Xd3hNUzQzTURVdE5EWXVNVGszWXpFdU1UVTVMVFF1TlRZNUxEVXVPREF5TFRjdU16TXpMREV3TGpNMk55MDJMakUzTmdvSkNXTTBMalUyT1N3eExqRTFOeXczTGpNek5DdzFMamM1T1N3MkxqRTNOeXd4TUM0ek5qZHNMVEUzTGpJNU9DdzJPQzR5TmpkakxUQXVPRGMxTERNdU5EUTVMVE11TnprMkxEVXVPVGswTFRjdU16TXlMRFl1TXpnMUNna0pRek15TUM0eE1qTXNNakV6TGpNeE5pd3pNVGt1T0RBNUxESXhNeTR6TXpNc016RTVMalE1Tml3eU1UTXVNek16ZWlJdlBnb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJemhDTjBVM1Jqc2lJR1E5SWsweU16TXVORGN5TERJeE15NHpNek5vTFRRNExqSXlZeTAwTGpjeE5Dd3dMVGd1TlRNekxUTXVPREl4TFRndU5UTXpMVGd1TlRNemRpMDJPQzR5Tmpkak1DMDBMamN4TXl3ekxqZ3lMVGd1TlRNekxEZ3VOVE16TFRndU5UTXpDZ2tKYURRNExqSXlZelF1TnpFMExEQXNPQzQxTXpNc015NDRNakVzT0M0MU16TXNPQzQxTXpOekxUTXVPRElzT0M0MU16TXRPQzQxTXpNc09DNDFNek5vTFRNNUxqWTROM1kxTVM0eWFETTVMalk0TjJNMExqY3hOQ3d3TERndU5UTXpMRE11T0RJeExEZ3VOVE16TERndU5UTXpDZ2tKVXpJek9DNHhPRFlzTWpFekxqTXpNeXd5TXpNdU5EY3lMREl4TXk0ek16TjZJaTgrQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak9FSTNSVGRHT3lJZ1pEMGlUVEl4Tnk0ek9Ua3NNVGM1TGpKb0xUTXlMakUwTjJNdE5DNDNNVFFzTUMwNExqVXpNeTB6TGpneU1TMDRMalV6TXkwNExqVXpNM016TGpneUxUZ3VOVE16TERndU5UTXpMVGd1TlRNemFETXlMakUwTndvSkNXTTBMamN4TkN3d0xEZ3VOVE16TERNdU9ESXhMRGd1TlRNekxEZ3VOVE16VXpJeU1pNHhNVElzTVRjNUxqSXNNakUzTGpNNU9Td3hOemt1TW5vaUx6NEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU00UWpkRk4wWTdJaUJrUFNKTk1UVXhMakV5TVN3eU1UTXVNek16WXkweUxqUTFMREF0TkM0NE16a3RNUzR3TlRjdE5pNDBPVEl0TWk0NU9UTnNMVFF6TGpJME5pMDFNQzQyTmpWV01qQTBMamdLQ1Fsak1DdzBMamN4TXkwekxqZ3lMRGd1TlRNekxUZ3VOVE16TERndU5UTXpZeTAwTGpjeE5Dd3dMVGd1TlRNekxUTXVPREl4TFRndU5UTXpMVGd1TlRNemRpMDJPQzR5Tmpkak1DMHpMalUzTlN3eUxqSXlPQzAyTGpjM0xEVXVOVGd4TFRndU1EQTNDZ2tKWXpNdU16VXlMVEV1TWpNNExEY3VNVEl5TFRBdU1qVXpMRGt1TkRReUxESXVORFkyYkRRekxqSTBOaXcxTUM0Mk5qVjJMVFExTGpFeU5HTXdMVFF1TnpFekxETXVPREl0T0M0MU16TXNPQzQxTXpNdE9DNDFNek56T0M0MU16TXNNeTQ0TWpFc09DNDFNek1zT0M0MU16TldNakEwTGpnS0NRbGpNQ3d6TGpVM05TMHlMakl5T0N3MkxqYzNMVFV1TlRneExEZ3VNREEzUXpFMU15NHhNRGNzTWpFekxqRTJNaXd4TlRJdU1UQTRMREl4TXk0ek16TXNNVFV4TGpFeU1Td3lNVE11TXpNemVpSXZQZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1hZ2VzL3RleHQtbGluZXMuc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VjdGlvbiBjbGFzcz1cXFwiZmVlZHNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJmZWVkcy1saXN0XFxcIj5cXG5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9odG1sL2ZlZWRzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzPCAzMDApIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Kc29uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHFzKHNlbGVjdG9yLCBzY29wZSkge1xuICAgIHJldHVybiAoc2NvcGUgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJG9uKHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgISFjYXB0dXJlKTtcbn1cblxuY29uc3QgY29udGV4dFJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbmNvbnRleHRSYW5nZS5zZXRTdGFydChkb2N1bWVudC5ib2R5LCAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0clRvRWxzKHN0cikge1xuICAgIHJldHVybiBjb250ZXh0UmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkcHJlcGVuZCh0YXJnZXQsIGVsKSB7XG4gICAgcmV0dXJuIHRhcmdldC5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldC5maXJzdENoaWxkKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMuanMiLCJpbXBvcnQge2NoZWNrU3RhdHVzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7dG9Kc29ufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7cXN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUuanMnO1xuaW1wb3J0IHskb259IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHskcHJlcGVuZH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgaWRiIGZyb20gJ2lkYic7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi90b2FzdC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLmZlZWRzVXJsID0gJ2h0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/c291cmNlPXRlY2hjcnVuY2gmc29ydEJ5PWxhdGVzdCZhcGlLZXk9YTlmNDI2ZDQ4YzdiNGM2MTkyYWZmZTRjZTJjMThiMmMnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHFzKCcuZmVlZHMtbGlzdCcsIHFzKCcuZmVlZHMnKSk7XG4gICAgICAgIHRoaXMudG9hc3RDb250YWluZXIgPSBxcygnLnRvYXN0LWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLl9kZXRlY3RGZWF0dXJlKCk7XG4gICAgICAgIC8vIOWIm+W7uuaVsOaNruW6k+epuumXtFxuICAgICAgICB0aGlzLl9vcGVuRGF0YWJhc2UoKTtcbiAgICAgICAgLy8g6aaW5YWI5pi+56S657yT5a2Y55qE6LWE5rqQXG4gICAgICAgIHRoaXMuX3Nob3dDYWNoZWRBcnRpY2xlcygpO1xuICAgICAgICAvLyDor7fmsYLnvZHnu5xcbiAgICAgICAgdGhpcy5fZ2V0RmVlZHMoKTtcbiAgICAgICAgdGhpcy5fY2xpY2tUb1JlZnJlc2goKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XG4gICAgfVxuXG4gICAgLy8g5Yqf6IO95qOA5rWLXG4gICAgX2RldGVjdEZlYXR1cmUoKSB7XG4gICAgICAgIGxldCB1bnN1cHBvcnRzID0gW107XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgdW5zdXBwb3J0cy5wdXNoKCdTZXJ2aWNlIHdvcmtlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF3aW5kb3cuZmV0Y2gpIHtcbiAgICAgICAgICAgIHVuc3VwcG9ydHMucHVzaCgnZmV0Y2ggQVBJJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXdpbmRvdy5jYWNoZXMpIHtcbiAgICAgICAgICAgIHVuc3VwcG9ydHMucHVzaCgnY2FjaGUgQVBJJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodW5zdXBwb3J0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5ldyBUb2FzdCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+S9oOeahOa1j+iniOWZqOS4jeaUr+aMgScgKyB1bnN1cHBvcnRzLmpvaW4oJywnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb3BlbkRhdGFiYXNlKCkge1xuICAgICAgICAvLyDmnIlzZXJ2aWNlIHdvcmtlcuWGjeWIm+W7uuaVsOaNruW6k1xuICAgICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9kYlByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmiZPlvIDmlbDmja7lupPvvIzlkI7pnaLnmoRjYWxsYmFja+WcqOesrOS4gOasoeaJk+W8gOaIluaVsOaNruW6k+WNh+e6p+aXtuS8muaJp+ihjFxuICAgICAgICB0aGlzLl9kYlByb21pc2UgPSBpZGIub3BlbignVGVjaE5ld3MnLCAxLCB1cGdyYWRlREIgPT4ge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdXBncmFkZURCLmNyZWF0ZU9iamVjdFN0b3JlKCdhcnRpY2xlcycsIHtcbiAgICAgICAgICAgICAgICBrZXlQYXRoOiAndGl0bGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lJywgJ3B1Ymxpc2hlZEF0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jbGlja1RvUmVmcmVzaCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAkb24ocXMoJy5yZWZyZXNoLWJ1dHRvbicpLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9nZXRGZWVkcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0RmVlZHMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgZmV0Y2godGhpcy5mZWVkc1VybClcbiAgICAgICAgICAgIC50aGVuKGNoZWNrU3RhdHVzKVxuICAgICAgICAgICAgLnRoZW4odG9Kc29uKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNlbGYuX2V4dHJhY3ROZXcoZGF0YSkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2VsZi5fcmVuZGVyRmVlZHMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKTtcbiAgICB9XG5cbiAgICBfZXh0cmFjdE5ldyhkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLl9sYXRlc3RmZWVkKSB7XG4gICAgICAgICAgICBsZXQgZmVlZHMgPSBkYXRhLmFydGljbGVzO1xuICAgICAgICAgICAgbGV0IGxhdGVzdGZlZWQgPSB0aGlzLl9sYXRlc3RmZWVkO1xuICAgICAgICAgICAgZGF0YS5hcnRpY2xlcyA9IGZlZWRzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLnBhcnNlKGl0ZW0ucHVibGlzaGVkQXQpID4gRGF0ZS5wYXJzZShsYXRlc3RmZWVkLnB1Ymxpc2hlZEF0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGF0YS5hcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5ldyBUb2FzdCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+i/mOayoeacieaWsOaWh+eroCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g57yT5a2Y5paw5paH56ugXG4gICAgICAgIHRoaXMuX2NhY2hlQXJ0aWNsZXMoZGF0YS5hcnRpY2xlcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YS5hcnRpY2xlcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckZlZWRzKGRhdGEpIHtcbiAgICAgICAgbGV0IGZlZWRzID0gZGF0YTtcbiAgICAgICAgaWYgKCFmZWVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXRlc3RmZWVkID0gZmVlZHNbMF07XG4gICAgICAgICRwcmVwZW5kKHRoaXMuY29udGFpbmVyLCB0aGlzLnRlbXBsYXRlLmZlZWRzTGlzdChmZWVkcykpO1xuICAgIH1cblxuICAgIF9jYWNoZUFydGljbGVzKGFydGljbGVzKSB7XG4gICAgICAgIC8vIGNhY2hlIHRoZSBuZXcgYXJ0aWNsZXMgaW4gaW5kZXhlZERCXG4gICAgICAgIHRoaXMuX2RiUHJvbWlzZS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYikgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgdHggPSBkYi50cmFuc2FjdGlvbignYXJ0aWNsZXMnLCAncmVhZHdyaXRlJyk7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSgnYXJ0aWNsZXMnKTtcbiAgICAgICAgICAgIGFydGljbGVzLmZvckVhY2goZnVuY3Rpb24oYXJ0aWNsZSkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnB1dChhcnRpY2xlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5pyA5aSa5a2YNTDmnaFcbiAgICAgICAgICAgIHN0b3JlLmluZGV4KCd0aW1lJykub3BlbkN1cnNvcihudWxsLCAncHJldicpLnRoZW4oKGN1cnNvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJzb3IuYWR2YW5jZSg1MCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIGRlbGV0ZVJlc3QoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjdXJzb3IuZGVsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnNvci5jb250aW51ZSgpLnRoZW4oZGVsZXRlUmVzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc3luY0ltYWdlQ2FjaGUoKTtcbiAgICB9XG5cbiAgICAvLyDmmL7npLrlt7LnvJPlrZjnmoTmlofnq6BcbiAgICBfc2hvd0NhY2hlZEFydGljbGVzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2RiUHJvbWlzZS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYiB8fCBzZWxmLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBkYi50cmFuc2FjdGlvbignYXJ0aWNsZXMnKS5vYmplY3RTdG9yZSgnYXJ0aWNsZXMnKS5pbmRleCgndGltZScpO1xuXG4gICAgICAgICAgICBpbmRleC5nZXRBbGwoKS50aGVuKChhcnRpY2xlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOaMieaXtumXtOaOkuW6j1xuICAgICAgICAgICAgICAgIGFydGljbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5wdWJsaXNoZWRBdCkgLSBEYXRlLnBhcnNlKGEucHVibGlzaGVkQXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlbmRlckZlZWRzKGFydGljbGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDkvb/mlofnq6DnvJPlrZjlkozlm77niYfnvJPlrZjkuIDoh7RcbiAgICBfc3luY0ltYWdlQ2FjaGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihmdW5jdGlvbihkYikge1xuICAgICAgICAgICAgaWYgKCFkYikgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2VzTmVlZGVkID0gW107XG5cbiAgICAgICAgICAgIGxldCB0eCA9IGRiLnRyYW5zYWN0aW9uKCdhcnRpY2xlcycpO1xuICAgICAgICAgICAgcmV0dXJuIHR4Lm9iamVjdFN0b3JlKCdhcnRpY2xlcycpLmdldEFsbCgpLnRoZW4oKGFydGljbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJ0aWNsZS51cmxUb0ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IG5ldyBVUkwoYXJ0aWNsZS51cmxUb0ltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlVXJsID0gaW1hZ2VVcmwub3JpZ2luICsgaW1hZ2VVcmwucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNOZWVkZWQucHVzaChjYWNoZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZXMub3BlbignVGVjaE5ld3MtaW1hZ2UtY2FjaGUnKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGUua2V5cygpLnRoZW4oKHJlcXVlc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0cy5mb3JFYWNoKChyZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZXNOZWVkZWQuaW5jbHVkZXMocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLmRlbGV0ZShyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKioqKioqKioqKioqKioqKiogc2VydmljZSB3b3JrZXIgcmVsYXRlZCAqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vIOazqOWGjHNlcnZpY2VXb3JrZXJcbiAgICBfcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCkge1xuICAgICAgICAvLyDlip/og73mo4DmtYtcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZVdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3pobXpnaLmsqHmnInooqtzZXJ2aWNlIHdvcmtlcuaOp+WItu+8jOS5n+WwseS4jeW/heWkhOeQhuabtOaWsOS6hlxuICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmnIkgc2VydmljZSB3b3JrZXLmraPlnKjnrYnlvoXooqvmv4DmtLvvvIzor7TmmI7mlrDnmoRzZXJ2aWNlIHdvcmtlcuWuieijheaIkOWKn++8jOmAmuefpeeUqOaIt+abtOaWsFxuICAgICAgICAgICAgaWYgKHJlZy53YWl0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlV29ya2VyKHJlZy53YWl0aW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOaciSBzZXJ2aWNlIHdvcmtlcuato+WcqOiiq+Wuieijhe+8jOi3n+i4quWuieijheeKtuaAgVxuICAgICAgICAgICAgaWYgKHJlZy5pbnN0YWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdHJhY2tJbnN0YWxsaW5nKHJlZy5pbnN0YWxsaW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOebkeWQrHVwZGF0ZWZvdW5k5LqL5Lu277yM6Lef6Liq5pu05paw55qE5a6J6KOF54q25oCBXG4gICAgICAgICAgICByZWcuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlZm91bmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl90cmFja0luc3RhbGxpbmcocmVnLmluc3RhbGxpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOW9k+aOp+WItumhtemdoueahHNlcnZpY2Ugd29ya2Vy5Y+R55Sf5pS55Y+Y77yM5Yi35paw6aG16Z2i5Lul5Yqg6L295pu05paw55qE6LWE5rqQXG4gICAgICAgIHZhciByZWZyZXNoaW5nO1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAocmVmcmVzaGluZykgcmV0dXJuO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmVmcmVzaGluZyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOi3n+i4quWuieijheeKtuaAgVxuICAgIF90cmFja0luc3RhbGxpbmcoc3cpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbmV3IFRvYXN0KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2VydmljZVdvcmtlcjonICsgc3cuc3RhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN3LnN0YXRlID09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlV29ya2VyKHN3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g6YCa55+l55So5oi35pu05pawXG4gICAgX3VwZGF0ZVdvcmtlcihzdykge1xuICAgICAgICBuZXcgVG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ+ajgOa1i+WIsOabtOaWsOOAgueCueWHu+abtOaWsOWIt+aWsOmhtemdoicsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBjdXN0b21CdXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5pu05pawJyxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdy5wb3N0TWVzc2FnZSgnc2tpcFdhaXRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsImltcG9ydCB7c3RyVG9FbHN9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgZmVlZHNMaXN0KGZlZWRzKSB7XG4gICAgICAgIGxldCBIVE1MU3RyaW5nID0gZmVlZHMucmVkdWNlKChhLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+PGltZyBzcmM9XCIke2l0ZW0udXJsVG9JbWFnZX1cIiBhbHQ9XCJuZXdzIGltYWdlXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+PHNwYW4gY2xhc3M9XCJhdXRob3JcIj4ke2l0ZW0uYXV0aG9yfTwvc3Bhbj48c3BhbiBjbGFzcz1cInB1Ymxpc2hlZEF0XCI+JHtpdGVtLnB1Ymxpc2hlZEF0fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiYmxhbmtcIj5yZWFkIG1vcmU8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9LCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIHN0clRvRWxzKEhUTUxTdHJpbmcpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGVtcGxhdGUuanMiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gdG9BcnJheShhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncykge1xuICAgIHZhciByZXF1ZXN0O1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXF1ZXN0ID0gb2JqW21ldGhvZF0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgcC5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwob2JqLCBtZXRob2QsIGFyZ3MpIHtcbiAgICB2YXIgcCA9IHByb21pc2lmeVJlcXVlc3RDYWxsKG9iaiwgbWV0aG9kLCBhcmdzKTtcbiAgICByZXR1cm4gcC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICByZXR1cm4gbmV3IEN1cnNvcih2YWx1ZSwgcC5yZXF1ZXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UHJvcGVydGllcyhQcm94eUNsYXNzLCB0YXJnZXRQcm9wLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcm94eUNsYXNzLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzW3RhcmdldFByb3BdW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eU1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1t0YXJnZXRQcm9wXVtwcm9wXS5hcHBseSh0aGlzW3RhcmdldFByb3BdLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5Q3Vyc29yUmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBJbmRleChpbmRleCkge1xuICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gIH1cblxuICBwcm94eVByb3BlcnRpZXMoSW5kZXgsICdfaW5kZXgnLCBbXG4gICAgJ25hbWUnLFxuICAgICdrZXlQYXRoJyxcbiAgICAnbXVsdGlFbnRyeScsXG4gICAgJ3VuaXF1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ2dldCcsXG4gICAgJ2dldEtleScsXG4gICAgJ2dldEFsbCcsXG4gICAgJ2dldEFsbEtleXMnLFxuICAgICdjb3VudCdcbiAgXSk7XG5cbiAgcHJveHlDdXJzb3JSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ29wZW5DdXJzb3InLFxuICAgICdvcGVuS2V5Q3Vyc29yJ1xuICBdKTtcblxuICBmdW5jdGlvbiBDdXJzb3IoY3Vyc29yLCByZXF1ZXN0KSB7XG4gICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yO1xuICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgcHJveHlQcm9wZXJ0aWVzKEN1cnNvciwgJ19jdXJzb3InLCBbXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ2tleScsXG4gICAgJ3ByaW1hcnlLZXknLFxuICAgICd2YWx1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhDdXJzb3IsICdfY3Vyc29yJywgSURCQ3Vyc29yLCBbXG4gICAgJ3VwZGF0ZScsXG4gICAgJ2RlbGV0ZSdcbiAgXSk7XG5cbiAgLy8gcHJveHkgJ25leHQnIG1ldGhvZHNcbiAgWydhZHZhbmNlJywgJ2NvbnRpbnVlJywgJ2NvbnRpbnVlUHJpbWFyeUtleSddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIGlmICghKG1ldGhvZE5hbWUgaW4gSURCQ3Vyc29yLnByb3RvdHlwZSkpIHJldHVybjtcbiAgICBDdXJzb3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3Vyc29yID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnNvci5fY3Vyc29yW21ldGhvZE5hbWVdLmFwcGx5KGN1cnNvci5fY3Vyc29yLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QoY3Vyc29yLl9yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiBuZXcgQ3Vyc29yKHZhbHVlLCBjdXJzb3IuX3JlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIE9iamVjdFN0b3JlKHN0b3JlKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5jcmVhdGVJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuY3JlYXRlSW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuaW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIFtcbiAgICAnbmFtZScsXG4gICAgJ2tleVBhdGgnLFxuICAgICdpbmRleE5hbWVzJyxcbiAgICAnYXV0b0luY3JlbWVudCdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ3B1dCcsXG4gICAgJ2FkZCcsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2NsZWFyJyxcbiAgICAnZ2V0JyxcbiAgICAnZ2V0QWxsJyxcbiAgICAnZ2V0QWxsS2V5cycsXG4gICAgJ2NvdW50J1xuICBdKTtcblxuICBwcm94eUN1cnNvclJlcXVlc3RNZXRob2RzKE9iamVjdFN0b3JlLCAnX3N0b3JlJywgSURCT2JqZWN0U3RvcmUsIFtcbiAgICAnb3BlbkN1cnNvcicsXG4gICAgJ29wZW5LZXlDdXJzb3InXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ2RlbGV0ZUluZGV4J1xuICBdKTtcblxuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihpZGJUcmFuc2FjdGlvbikge1xuICAgIHRoaXMuX3R4ID0gaWRiVHJhbnNhY3Rpb247XG4gICAgdGhpcy5jb21wbGV0ZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaWRiVHJhbnNhY3Rpb24uZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5vYmplY3RTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U3RvcmUodGhpcy5fdHgub2JqZWN0U3RvcmUuYXBwbHkodGhpcy5fdHgsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhUcmFuc2FjdGlvbiwgJ190eCcsIFtcbiAgICAnb2JqZWN0U3RvcmVOYW1lcycsXG4gICAgJ21vZGUnXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhUcmFuc2FjdGlvbiwgJ190eCcsIElEQlRyYW5zYWN0aW9uLCBbXG4gICAgJ2Fib3J0J1xuICBdKTtcblxuICBmdW5jdGlvbiBVcGdyYWRlREIoZGIsIG9sZFZlcnNpb24sIHRyYW5zYWN0aW9uKSB7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgICB0aGlzLm9sZFZlcnNpb24gPSBvbGRWZXJzaW9uO1xuICAgIHRoaXMudHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICB9XG5cbiAgVXBncmFkZURCLnByb3RvdHlwZS5jcmVhdGVPYmplY3RTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U3RvcmUodGhpcy5fZGIuY3JlYXRlT2JqZWN0U3RvcmUuYXBwbHkodGhpcy5fZGIsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhVcGdyYWRlREIsICdfZGInLCBbXG4gICAgJ25hbWUnLFxuICAgICd2ZXJzaW9uJyxcbiAgICAnb2JqZWN0U3RvcmVOYW1lcydcbiAgXSk7XG5cbiAgcHJveHlNZXRob2RzKFVwZ3JhZGVEQiwgJ19kYicsIElEQkRhdGFiYXNlLCBbXG4gICAgJ2RlbGV0ZU9iamVjdFN0b3JlJyxcbiAgICAnY2xvc2UnXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIERCKGRiKSB7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgfVxuXG4gIERCLnByb3RvdHlwZS50cmFuc2FjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24odGhpcy5fZGIudHJhbnNhY3Rpb24uYXBwbHkodGhpcy5fZGIsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhEQiwgJ19kYicsIFtcbiAgICAnbmFtZScsXG4gICAgJ3ZlcnNpb24nLFxuICAgICdvYmplY3RTdG9yZU5hbWVzJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoREIsICdfZGInLCBJREJEYXRhYmFzZSwgW1xuICAgICdjbG9zZSdcbiAgXSk7XG5cbiAgLy8gQWRkIGN1cnNvciBpdGVyYXRvcnNcbiAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgb25jZSBicm93c2VycyBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aCBwcm9taXNlc1xuICBbJ29wZW5DdXJzb3InLCAnb3BlbktleUN1cnNvciddLmZvckVhY2goZnVuY3Rpb24oZnVuY05hbWUpIHtcbiAgICBbT2JqZWN0U3RvcmUsIEluZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGVbZnVuY05hbWUucmVwbGFjZSgnb3BlbicsICdpdGVyYXRlJyldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBuYXRpdmVPYmplY3QgPSB0aGlzLl9zdG9yZSB8fCB0aGlzLl9pbmRleDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuYXRpdmVPYmplY3RbZnVuY05hbWVdLmFwcGx5KG5hdGl2ZU9iamVjdCwgYXJncy5zbGljZSgwLCAtMSkpO1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHBvbHlmaWxsIGdldEFsbFxuICBbSW5kZXgsIE9iamVjdFN0b3JlXS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRBbGwpIHJldHVybjtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24ocXVlcnksIGNvdW50KSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIGluc3RhbmNlLml0ZXJhdGVDdXJzb3IocXVlcnksIGZ1bmN0aW9uKGN1cnNvcikge1xuICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMucHVzaChjdXJzb3IudmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9PSB1bmRlZmluZWQgJiYgaXRlbXMubGVuZ3RoID09IGNvdW50KSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIGV4cCA9IHtcbiAgICBvcGVuOiBmdW5jdGlvbihuYW1lLCB2ZXJzaW9uLCB1cGdyYWRlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwID0gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnb3BlbicsIFtuYW1lLCB2ZXJzaW9uXSk7XG4gICAgICB2YXIgcmVxdWVzdCA9IHAucmVxdWVzdDtcblxuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAodXBncmFkZUNhbGxiYWNrKSB7XG4gICAgICAgICAgdXBncmFkZUNhbGxiYWNrKG5ldyBVcGdyYWRlREIocmVxdWVzdC5yZXN1bHQsIGV2ZW50Lm9sZFZlcnNpb24sIHJlcXVlc3QudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbihkYikge1xuICAgICAgICByZXR1cm4gbmV3IERCKGRiKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnZGVsZXRlRGF0YWJhc2UnLCBbbmFtZV0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cDtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWxmLmlkYiA9IGV4cDtcbiAgfVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pZGIvbGliL2lkYi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYXV0aG9yOiBpcmVhZGVAZ2l0aHViXG5pbXBvcnQgJy4uL3Njc3MvdG9hc3Quc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvYXN0KG9wdGlvbnMpIHtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgdGhpcy50b2FzdENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0anMtY29udGFpbmVyJyk7XG4gICAgdGhpcy50b2FzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0anMnKTtcblxuICAgIHRoaXMuX2luaXQoKTtcbn1cblxuVG9hc3QucHJvdG90eXBlLl9jcmVhdGVFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICBfdGhpcy50b2FzdENvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIF90aGlzLnRvYXN0Q29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgndG9hc3Rqcy1jb250YWluZXInKTtcbiAgICAgICAgX3RoaXMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgICAgICAgX3RoaXMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgICAgX3RoaXMudG9hc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBfdGhpcy50b2FzdEVsLmNsYXNzTGlzdC5hZGQoJ3RvYXN0anMnKTtcblxuICAgICAgICBfdGhpcy50b2FzdENvbnRhaW5lckVsLmFwcGVuZENoaWxkKF90aGlzLnRvYXN0RWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLnRvYXN0Q29udGFpbmVyRWwpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbn07XG5cblRvYXN0LnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3Rqcy1idG4tLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tQnV0dG9ucykge1xuICAgICAgICB2YXIgY3VzdG9tQnV0dG9uc0VsQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9hc3Rqcy1idG4tLWN1c3RvbScpKTtcbiAgICAgICAgY3VzdG9tQnV0dG9uc0VsQXJyYXkubWFwKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLmN1c3RvbUJ1dHRvbnNbaW5kZXhdLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblRvYXN0LnByb3RvdHlwZS5fY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpczMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBfdGhpczMudG9hc3RFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIF90aGlzMy50b2FzdEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RlZmF1bHQnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicpO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMzLmZvY3VzZWRFbEJlZm9yZU9wZW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuZm9jdXNlZEVsQmVmb3JlT3Blbi5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xufTtcblxuVG9hc3QucHJvdG90eXBlLl9vcGVuID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy50b2FzdEVsLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnR5cGUpO1xuICAgIHRoaXMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuXG4gICAgdmFyIGN1c3RvbUJ1dHRvbnMgPSAnJztcbiAgICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbUJ1dHRvbnMpIHtcbiAgICAgICAgY3VzdG9tQnV0dG9ucyA9IHRoaXMub3B0aW9ucy5jdXN0b21CdXR0b25zLm1hcChmdW5jdGlvbiAoY3VzdG9tQnV0dG9uLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRvYXN0anMtYnRuIHRvYXN0anMtYnRuLS1jdXN0b21cIj4nICsgY3VzdG9tQnV0dG9uLnRleHQgKyAnPC9idXR0b24+JztcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbUJ1dHRvbnMgPSBjdXN0b21CdXR0b25zLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHRoaXMudG9hc3RFbC5pbm5lckhUTUwgPSAnXFxuICAgICAgICA8cD4nICsgdGhpcy5vcHRpb25zLm1lc3NhZ2UgKyAnPC9wPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0b2FzdGpzLWJ0biB0b2FzdGpzLWJ0bi0tY2xvc2VcIj7lv73nlaU8L2J1dHRvbj5cXG4gICAgICAgICcgKyBjdXN0b21CdXR0b25zICsgJ1xcbiAgICAnO1xuXG4gICAgdGhpcy5mb2N1c2VkRWxCZWZvcmVPcGVuID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3Rqcy1idG4tLWNsb3NlJykuZm9jdXMoKTtcbn07XG5cblRvYXN0LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM0LnRvYXN0Q29udGFpbmVyRWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM0Ll9jcmVhdGVFbGVtZW50cygpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM0LnRvYXN0Q29udGFpbmVyRWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuX2Nsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczQuX29wZW4oKTtcbiAgICAgICAgX3RoaXM0Ll9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9hc3QuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvYXN0LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9hc3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvYXN0LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9hc3Quc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9hc3Rqcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLyogRmFsbGJhY2sgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC8qICovIH1cXG5cXG4udG9hc3Rqcy1jb250YWluZXJbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIl0ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgfVxcblxcbi50b2FzdGpzIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcXG4gIC8qIE5vIGJvdHRvbSBwYWRkaW5nIGJlY2F1c2UgdGhlIGJ1dHRvbnMgaGF2ZSBhIG1hcmdpbi1ib3R0b20gKi9cXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuLnRvYXN0anMuZGVmYXVsdCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI0FBQUFBQTsgfVxcblxcbi50b2FzdGpzLnN1Y2Nlc3Mge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyRUNDNDA7IH1cXG5cXG4udG9hc3Rqcy53YXJuaW5nIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRkY4NTFCOyB9XFxuXFxuLnRvYXN0anMuZGFuZ2VyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRkY0MTM2OyB9XFxuXFxuLnRvYXN0anMtYnRuIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udG9hc3Rqcy1idG4tLWN1c3RvbSB7XFxuICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4udG9hc3Rqcy1idG46aG92ZXIsXFxuLnRvYXN0anMtYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc2Nzcy90b2FzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9