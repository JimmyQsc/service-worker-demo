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
	exports.push([module.id, "body {\n  font-family: Arial;\n  margin: 0;\n  padding: 0; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  max-width: 600px;\n  margin: 0 auto; }\n\nheader {\n  margin: 0;\n  height: 60px;\n  background: #8B7E7F;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 0 15px #999; }\n  header .container {\n    position: relative; }\n  header .title {\n    margin: 0;\n    color: #fff; }\n    header .title span {\n      font-size: 26px;\n      line-height: 60px;\n      position: absolute; }\n    header .title img {\n      height: 50px;\n      margin-top: 5px;\n      padding: 0 20px; }\n  header .refresh-button {\n    width: 30px;\n    height: 30px;\n    background: url(" + __webpack_require__(4) + ");\n    position: absolute;\n    top: 15px;\n    right: 20px;\n    border: none; }\n\n.feeds {\n  margin-top: 75px; }\n  .feeds .feeds-list {\n    list-style: none;\n    margin: 0;\n    padding: 0 1em; }\n    .feeds .feeds-list li {\n      box-shadow: 1px 1px 10px #bbb;\n      padding: 1em;\n      margin: 1em 0; }\n      .feeds .feeds-list li .publishedAt {\n        float: right; }\n      .feeds .feeds-list li a {\n        color: #EA4540;\n        text-decoration: none;\n        font-style: italic; }\n  .feeds img {\n    max-width: 100%; }\n\n.toast-container {\n  position: fixed;\n  left: 2em;\n  bottom: 1em;\n  max-height: 60vh;\n  overflow: auto; }\n", ""]);
	
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
	        this._openDatabase();
	        this._showCachedArticles();
	        this._getFeeds();
	        this._clickToRefresh();
	        this._registerServiceWorker();
	    }
	
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
	
	            if (!window.Promise) {
	                unsupports.push('promise');
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
	            if (!feeds.length) {
	                new _toast2.default({
	                    message: '还没有新文章'
	                });
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
	
	        // 使文章缓存和图片缓存一直
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY3ZWI0MzUwMmE5NWQ1M2I4YTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzA2OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVmcmVzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGV4dC1saW5lcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvZmVlZHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZGIvbGliL2lkYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9hc3Quc2Nzcz9iMDNkIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvYXN0LnNjc3MiXSwibmFtZXMiOlsiYXBwZW5kQ2hpbGQiLCJjaGVja1N0YXR1cyIsInRvSnNvbiIsInFzIiwiJG9uIiwic3RyVG9FbHMiLCIkcHJlcGVuZCIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwic2VsZWN0b3IiLCJzY29wZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsInR5cGUiLCJjYWxsYmFjayIsImNhcHR1cmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGV4dFJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsImJvZHkiLCJzdHIiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJlbCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJJbmRleENvbnRyb2xsZXIiLCJ0ZW1wbGF0ZSIsImZlZWRzVXJsIiwiY29udGFpbmVyIiwidG9hc3RDb250YWluZXIiLCJfZGV0ZWN0RmVhdHVyZSIsIl9vcGVuRGF0YWJhc2UiLCJfc2hvd0NhY2hlZEFydGljbGVzIiwiX2dldEZlZWRzIiwiX2NsaWNrVG9SZWZyZXNoIiwiX3JlZ2lzdGVyU2VydmljZVdvcmtlciIsInVuc3VwcG9ydHMiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicHVzaCIsIndpbmRvdyIsImZldGNoIiwiY2FjaGVzIiwibGVuZ3RoIiwibWVzc2FnZSIsImpvaW4iLCJfZGJQcm9taXNlIiwib3BlbiIsInN0b3JlIiwidXBncmFkZURCIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiLCJzZWxmIiwidGhlbiIsImRhdGEiLCJfZXh0cmFjdE5ldyIsIl9yZW5kZXJGZWVkcyIsImNhdGNoIiwiX2xhdGVzdGZlZWQiLCJmZWVkcyIsImFydGljbGVzIiwibGF0ZXN0ZmVlZCIsImZpbHRlciIsIml0ZW0iLCJEYXRlIiwicGFyc2UiLCJwdWJsaXNoZWRBdCIsIl9jYWNoZUFydGljbGVzIiwiZmVlZHNMaXN0IiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJmb3JFYWNoIiwiYXJ0aWNsZSIsInB1dCIsImluZGV4Iiwib3BlbkN1cnNvciIsImN1cnNvciIsImFkdmFuY2UiLCJkZWxldGVSZXN0IiwiZGVsZXRlIiwiY29udGludWUiLCJfc3luY0ltYWdlQ2FjaGUiLCJjaGlsZHJlbiIsImdldEFsbCIsInNvcnQiLCJhIiwiYiIsImltYWdlc05lZWRlZCIsInVybFRvSW1hZ2UiLCJpbWFnZVVybCIsIlVSTCIsImNhY2hlVXJsIiwib3JpZ2luIiwicGF0aG5hbWUiLCJjYWNoZSIsImtleXMiLCJyZXF1ZXN0cyIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJ1cmwiLCJyZWdpc3RlciIsInJlZyIsImNvbnRyb2xsZXIiLCJ3YWl0aW5nIiwiX3VwZGF0ZVdvcmtlciIsImluc3RhbGxpbmciLCJfdHJhY2tJbnN0YWxsaW5nIiwicmVmcmVzaGluZyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3ciLCJzdGF0ZSIsImN1c3RvbUJ1dHRvbnMiLCJ0ZXh0Iiwib25DbGljayIsInBvc3RNZXNzYWdlIiwiVGVtcGxhdGUiLCJIVE1MU3RyaW5nIiwicmVkdWNlIiwidGl0bGUiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsIlRvYXN0Iiwib3B0aW9ucyIsInRvYXN0Q29udGFpbmVyRWwiLCJ0b2FzdEVsIiwiX2luaXQiLCJwcm90b3R5cGUiLCJfY3JlYXRlRWxlbWVudHMiLCJfdGhpcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3RoaXMyIiwiX2Nsb3NlIiwiY3VzdG9tQnV0dG9uc0VsQXJyYXkiLCJBcnJheSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJldmVudCIsIl90aGlzMyIsImlubmVySFRNTCIsInJlbW92ZSIsImZvY3VzZWRFbEJlZm9yZU9wZW4iLCJmb2N1cyIsIl9vcGVuIiwiY3VzdG9tQnV0dG9uIiwiYWN0aXZlRWxlbWVudCIsIl90aGlzNCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFXQSxvQkFBTyxxQkFBU2tCLFVBQVQsQ0FBUDtBQUNIOzs7Ozs7bUJBZGdCRCxROzs7Ozs7QUNGckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Z0JBQU9sQixrQkFBUDtBQUNILE1BYkQ7QUFjSCxFQWpCRCxDOzs7Ozs7QUMzRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLCtDQUE4Qyx1QkFBdUIsc0NBQXNDLGlCQUFpQixlQUFlLDZCQUE2QixxQkFBcUIsaUNBQWlDLDZCQUE2QixpQkFBaUIsV0FBVywrQ0FBK0MsOEJBQThCLEVBQUUsY0FBYyxxQkFBcUIseUJBQXlCLGlHQUFpRywyQkFBMkIsdUJBQXVCLGdEQUFnRCxFQUFFLHNCQUFzQiwrQkFBK0IsRUFBRSxzQkFBc0IsK0JBQStCLEVBQUUsc0JBQXNCLCtCQUErQixFQUFFLHFCQUFxQiwrQkFBK0IsRUFBRSxrQkFBa0Isd0JBQXdCLHNCQUFzQixjQUFjLHVCQUF1QiwrQ0FBK0Msb0JBQW9CLDBCQUEwQix1QkFBdUIsd0JBQXdCLG9CQUFvQixFQUFFLDBCQUEwQix3QkFBd0IsZ0JBQWdCLEVBQUUsNkNBQTZDLGtCQUFrQiwrQ0FBK0MsRUFBRTs7QUFFN3ZDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2N2ViNDM1MDJhOTVkNTNiOGE3IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEhUTUxIZWFkZXIgZnJvbSAnLi4vaHRtbC9oZWFkZXIuaHRtbCc7XG5pbXBvcnQgSFRNTEZlZWRzQ29udGFpbmVyIGZyb20gJy4uL2h0bWwvZmVlZHMuaHRtbCc7XG5pbXBvcnQge3FzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBJbmRleENvbnRyb2xsZXIgZnJvbSAnLi9pbmRleENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHtzdHJUb0Vsc30gZnJvbSAnLi91dGlscy5qcyc7XG5cbnFzKCdib2R5JykuYXBwZW5kQ2hpbGQoc3RyVG9FbHMoSFRNTEhlYWRlcikpO1xucXMoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHJUb0VscyhIVE1MRmVlZHNDb250YWluZXIpKTtcblxuXG5uZXcgSW5kZXhDb250cm9sbGVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbmhlYWRlciB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjOEI3RTdGO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjOTk5OyB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgaGVhZGVyIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgaGVhZGVyIC50aXRsZSBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAgIGhlYWRlciAudGl0bGUgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMjBweDsgfVxcbiAgaGVhZGVyIC5yZWZyZXNoLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVmcmVzaC5zdmdcIikgKyBcIik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLmZlZWRzIHtcXG4gIG1hcmdpbi10b3A6IDc1cHg7IH1cXG4gIC5mZWVkcyAuZmVlZHMtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAxZW07IH1cXG4gICAgLmZlZWRzIC5mZWVkcy1saXN0IGxpIHtcXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2JiYjtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgbWFyZ2luOiAxZW0gMDsgfVxcbiAgICAgIC5mZWVkcyAuZmVlZHMtbGlzdCBsaSAucHVibGlzaGVkQXQge1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgICAgLmZlZWRzIC5mZWVkcy1saXN0IGxpIGEge1xcbiAgICAgICAgY29sb3I6ICNFQTQ1NDA7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIC5mZWVkcyBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG4udG9hc3QtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDJlbTtcXG4gIGJvdHRvbTogMWVtO1xcbiAgbWF4LWhlaWdodDogNjB2aDtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVGt1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0NqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaUNna2dkbWxsZDBKdmVEMGlNQ0F3SURJMU9TNHlORFFnTWpVNUxqSTBOQ0lnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNalU1TGpJME5DQXlOVGt1TWpRME95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4blBnb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMlptWm1abVpqc2lJR1E5SWsweU5EZ3VNelE0TERFeU9TNHphQzB4TlM0NE5EbERNak15TGpReExEWTFMakkzTnl3eE9EQXVPRE14TERFekxqTTVOQ3d4TVRjdU1qQXlMREV6TGpNNU5Bb0pDV010TXpFdU9EUXhMREF0TmpBdU5qWXhMREV5TGprNU9DMDRNUzQxTXpRc016TXVPVGsyUXpFMExqQXhOeXcyT0M0MU5Ea3NNQzR5TlN3NU55NHdPVElzTUM0d016WXNNVEk1TGpOSU1Hd3dMakF4T0N3d0xqTXpNVXd3TERFek1DNHdNek5vTUM0d016WUtDUWxqTUM0ek9UTXNOak11T0RVekxEVXhMamMxT0N3eE1UVXVPREUyTERFeE5TNHhPU3d4TVRVdU9ERTJZek14TGpnME1Td3dMRFl3TGpZMk1TMHhNeTR3TURjc09ERXVOVE0wTFRNMExqQTBPV3d0TWpVdU9EVXlMVEkwTGprek1Rb0pDV010TVRRdU1UYzRMREUwTGpNd015MHpOQzR3TlRnc01qTXVNREkzTFRVMUxqWTRNaXd5TXk0eE16VmpMVFEwTGpRd01Td3dMakl3TmkwM09TNHlNREV0TXpZdU5Ea3ROemt1TWpBeExUZ3dMakV5TW1NdE1DNHhNRGN0TWpJdU9Ea3pMREV3TGpBNU1pMDBNaTQ1TURnc01qVXVORGcyTFRVM0xqVTVOUW9KQ1dNeE5DNHhPRFl0TVRRdU1qZzFMRE0wTGpBMU9DMHlNeTR3TURFc05UVXVOamt4TFRJekxqRXdPR00wTkM0ME1TMHdMakl3Tml3M09TNHlNREVzTXpZdU5EUTFMRGM1TGpJd01TdzNPUzQ1T1RkMk1DNHhNalZvTFRFMUxqWTJNUW9KQ1dNdE9TNDNNRGdzTUMweE15NDJOamdzTmk0ME9Ua3RPQzQ0TVRRc01UUXVOREZzTXpNdU56azVMRE16TGpRek0yTTNMamN6TWl3M0xqY3pNaXc1TGprMk55dzNMalkyTVN3eE55NDJORFlzTUd3ek15NDNPVGt0TXpNdU5ETXpDZ2tKUXpJMk1pNHdNalVzTVRNMUxqYzRNU3d5TlRndU1EVTJMREV5T1M0ekxESTBPQzR6TkRnc01USTVMak42SWk4K0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEM5emRtYytDZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvcmVmcmVzaC5zdmdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIDxoZWFkZXIgY2xhc3M9XFxcInRpdGxlLWJhclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2VzL3RleHQtbGluZXMuc3ZnXCIpICsgXCJcXFwiIGNsYXNzPVxcXCJoZWFkZXItbG9nb1xcXCIgYWx0PVxcXCJzaXRlLWxvZ29cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPlRlY2hOZXdzPC9zcGFuPlxcbiAgICAgICAgPC9oMT5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJlZnJlc2gtYnV0dG9uXFxcIj48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC9oZWFkZXI+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaHRtbC9oZWFkZXIuaHRtbFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNaUExTVRJN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEhCdmJIbG5iMjRnYzNSNWJHVTlJbVpwYkd3NkkwVkRSVGRGUVRzaUlIQnZhVzUwY3owaU5URXlMRGN6TGprMU5pQTFNVElzTkRrMExqa3pNeUF3TERRNU5DNDVNek1nTUN3M015NDVOVFlnTWpVMkxEVXhMaklnSWk4K0NqeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5HTVRRM05ESTdJaUJ3YjJsdWRITTlJalV4TWl3eE55NHdOamNnTlRFeUxEY3pMamsxTmlBME5UVXVNVEV4TERjekxqazFOaUEwTWpBdU9UYzRMRFExTGpVeE1TQTBOVFV1TVRFeExERTNMakEyTnlBaUx6NEtQSEpsWTNRZ2VUMGlNVGN1TURZM0lpQnpkSGxzWlQwaVptbHNiRG9qTVVJME1UUTFPeUlnZDJsa2RHZzlJalExTlM0eE1URWlJR2hsYVdkb2REMGlOVFl1T0RnNUlpOCtDanh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5FTmtORlJERTdJaUJrUFNKTk5EUXpMamN6TXl3eU5UZ3VPRFEwU0RZNExqSTJOMk10TkM0M01UUXNNQzA0TGpVek15MHpMamd5TVMwNExqVXpNeTA0TGpVek0yTXdMVFF1TnpFekxETXVPREl0T0M0MU16TXNPQzQxTXpNdE9DNDFNek5vTXpjMUxqUTJOd29KWXpRdU56RTBMREFzT0M0MU16TXNNeTQ0TWpFc09DNDFNek1zT0M0MU16TkRORFV5TGpJMk55d3lOVFV1TURJMExEUTBPQzQwTkRjc01qVTRMamcwTkN3ME5ETXVOek16TERJMU9DNDRORFI2SWk4K0NqeG5QZ29KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpoQ04wVTNSanNpSUdROUlrMHlNek11TWpRMExETXdOQzR6TlRaSU5qZ3VNalkzWXkwMExqY3hOQ3d3TFRndU5UTXpMVE11T0RJeExUZ3VOVE16TFRndU5UTXpjek11T0RJdE9DNDFNek1zT0M0MU16TXRPQzQxTXpOb01UWTBMamszT0FvSkNXTTBMamN4TkN3d0xEZ3VOVE16TERNdU9ESXhMRGd1TlRNekxEZ3VOVE16VXpJek55NDVOVGdzTXpBMExqTTFOaXd5TXpNdU1qUTBMRE13TkM0ek5UWjZJaTgrQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak9FSTNSVGRHT3lJZ1pEMGlUVEl6TXk0eU5EUXNNelE1TGpnMk4wZzJPQzR5TmpkakxUUXVOekUwTERBdE9DNDFNek10TXk0NE1qRXRPQzQxTXpNdE9DNDFNek56TXk0NE1pMDRMalV6TXl3NExqVXpNeTA0TGpVek0yZ3hOalF1T1RjNENna0pZelF1TnpFMExEQXNPQzQxTXpNc015NDRNakVzT0M0MU16TXNPQzQxTXpOVE1qTTNMamsxT0N3ek5Ea3VPRFkzTERJek15NHlORFFzTXpRNUxqZzJOM29pTHo0S0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTRRamRGTjBZN0lpQmtQU0pOTWpNekxqSTBOQ3d6T1RVdU16YzRTRFk0TGpJMk4yTXROQzQzTVRRc01DMDRMalV6TXkwekxqZ3lNUzA0TGpVek15MDRMalV6TTNNekxqZ3lMVGd1TlRNekxEZ3VOVE16TFRndU5UTXphREUyTkM0NU56Z0tDUWxqTkM0M01UUXNNQ3c0TGpVek15d3pMamd5TVN3NExqVXpNeXc0TGpVek0xTXlNemN1T1RVNExETTVOUzR6Tnpnc01qTXpMakkwTkN3ek9UVXVNemM0ZWlJdlBnbzhMMmMrQ2p4eVpXTjBJSGc5SWpJM09DNDNOVFlpSUhrOUlqSTVOUzQ0TWpJaUlITjBlV3hsUFNKbWFXeHNPaU5HTVRRM05ESTdJaUIzYVdSMGFEMGlNVFkwTGprM09DSWdhR1ZwWjJoMFBTSXhNell1TlRNeklpOCtDanhuUGdvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3Nkl6aENOMFUzUmpzaUlHUTlJazB5TXpNdU1qUTBMRFEwTUM0NE9EbElOamd1TWpZM1l5MDBMamN4TkN3d0xUZ3VOVE16TFRNdU9ESXhMVGd1TlRNekxUZ3VOVE16Y3pNdU9ESXRPQzQxTXpNc09DNDFNek10T0M0MU16Tm9NVFkwTGprM09Bb0pDV00wTGpjeE5Dd3dMRGd1TlRNekxETXVPREl4TERndU5UTXpMRGd1TlRNelV6SXpOeTQ1TlRnc05EUXdMamc0T1N3eU16TXVNalEwTERRME1DNDRPRGw2SWk4K0NnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pPRUkzUlRkR095SWdaRDBpVFRNNU5TNHdOQ3d5TVRNdU16TXpZeTB4TlM0ek5qWXNNQzB5Tnk0ek5EUXROaTQzTWpVdE16RXVNall6TFRFM0xqVTFZeTB4TGpZd015MDBMalF6TWl3d0xqWTRPQzA1TGpNeU5DdzFMakV5TVMweE1DNDVNamNLQ1Fsak5DNDBNall0TVM0Mk1EUXNPUzR6TWpNc01DNDJPRGNzTVRBdU9USTNMRFV1TVRKak1TNHpOakVzTXk0M05qUXNOeTQwTnpVc05pNHlPVElzTVRVdU1qRXpMRFl1TWpreVl6VXVOemcyTERBc01UVXVOVGMyTFRFdU56azVMREUxTGpVM05pMDRMalUwQ2drSll6QXROQzQyTVRrdE1pNHhNVEV0Tmk0eU1UWXRNVFl1T1RVNUxUZ3VOalExWXkwMkxqVTVPUzB4TGpBM09TMHhNeTQwTWpFdE1pNHhPVFV0TVRrdU1UWTVMVFV1TWpFNVl5MDNMamt4TVMwMExqRTJNeTB4TWk0d09USXRNVEV1TVRZM0xURXlMakE1TWkweU1DNHlOVGNLQ1Fsak1DMHhOUzR3Tnpjc01UTXVOREl6TFRJMUxqWXdOeXd6TWk0Mk5ETXRNalV1TmpBM1l6RTFMak0xT1N3d0xESTNMak16Tml3MkxqY3lNU3d6TVM0eU5Ua3NNVGN1TlRSak1TNDJNRGNzTkM0ME16RXRNQzQyT0RRc09TNHpNalF0TlM0eE1UUXNNVEF1T1RNeENna0pZeTAwTGpRek5Dd3hMall4TVMwNUxqTXlOQzB3TGpZNE5TMHhNQzQ1TWprdE5TNHhNVFJqTFRFdU16WTBMVE11TnpZeExUY3VORGMzTFRZdU1qa3RNVFV1TWpFMExUWXVNamxqTFRVdU56ZzJMREF0TVRVdU5UYzJMREV1TnprNUxURTFMalUzTml3NExqVTBDZ2tKWXpBc05DNDJNVEVzTWk0eE1Ea3NOaTR5TURVc01UWXVPVFE1TERndU5qTXlZell1Tml3eExqQTRMREV6TGpReU5pd3lMakU1Tml3eE9TNHhOelVzTlM0eU1qRmpOeTQ1TVRNc05DNHhOalFzTVRJdU1EazJMREV4TGpFM01pd3hNaTR3T1RZc01qQXVNalkyQ2drSlF6UXlOeTQyT0RRc01qQXlMamd3TXl3ME1UUXVNallzTWpFekxqTXpNeXd6T1RVdU1EUXNNakV6TGpNek0zb2lMejRLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNNFFqZEZOMFk3SWlCa1BTSk5NekU1TGpRNU5pd3lNVE11TXpNell5MHpMakU0Tnl3d0xUWXVNVFF6TFRFdU56ZzJMVGN1TmpBNUxUUXVOamMyYkMwNUxqWTROaTB4T1M0eE1UUnNMVGt1TmpnMkxERTVMakV4TkFvSkNXTXRNUzQyTURnc015NHhOelF0TlM0d01qa3NOUzR3TWpJdE9DNDFOVE1zTkM0Mk1qUmpMVE11TlRNMkxUQXVNemt4TFRZdU5EVTRMVEl1T1RNM0xUY3VNek15TFRZdU16ZzFiQzB4Tnk0eU9UZ3ROamd1TWpZM1l5MHhMakUxT0MwMExqVTJPQ3d4TGpZd09DMDVMakl4TERZdU1UYzNMVEV3TGpNMk53b0pDV00wTGpVMk55MHhMakUxTlN3NUxqSXhMREV1TmpBM0xERXdMak0yTnl3MkxqRTNObXd4TVM0M01EVXNORFl1TVRrM2JEY3VNREExTFRFekxqZ3lOV014TGpRMU5DMHlMamcyT0N3MExqTTVOaTAwTGpZM05pdzNMall4TWkwMExqWTNOZ29KQ1dNekxqSXhOU3d3TERZdU1UVTRMREV1T0RBNExEY3VOakV5TERRdU5qYzJiRGN1TURBMUxERXpMamd5Tld3eE1TNDNNRFV0TkRZdU1UazNZekV1TVRVNUxUUXVOVFk1TERVdU9EQXlMVGN1TXpNekxERXdMak0yTnkwMkxqRTNOZ29KQ1dNMExqVTJPU3d4TGpFMU55dzNMak16TkN3MUxqYzVPU3cyTGpFM055d3hNQzR6Tmpkc0xURTNMakk1T0N3Mk9DNHlOamRqTFRBdU9EYzFMRE11TkRRNUxUTXVOemsyTERVdU9UazBMVGN1TXpNeUxEWXVNemcxQ2drSlF6TXlNQzR4TWpNc01qRXpMak14Tml3ek1Ua3VPREE1TERJeE15NHpNek1zTXpFNUxqUTVOaXd5TVRNdU16TXplaUl2UGdvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3Nkl6aENOMFUzUmpzaUlHUTlJazB5TXpNdU5EY3lMREl4TXk0ek16Tm9MVFE0TGpJeVl5MDBMamN4TkN3d0xUZ3VOVE16TFRNdU9ESXhMVGd1TlRNekxUZ3VOVE16ZGkwMk9DNHlOamRqTUMwMExqY3hNeXd6TGpneUxUZ3VOVE16TERndU5UTXpMVGd1TlRNekNna0phRFE0TGpJeVl6UXVOekUwTERBc09DNDFNek1zTXk0NE1qRXNPQzQxTXpNc09DNDFNek56TFRNdU9ESXNPQzQxTXpNdE9DNDFNek1zT0M0MU16Tm9MVE01TGpZNE4zWTFNUzR5YURNNUxqWTROMk0wTGpjeE5Dd3dMRGd1TlRNekxETXVPREl4TERndU5UTXpMRGd1TlRNekNna0pVekl6T0M0eE9EWXNNakV6TGpNek15d3lNek11TkRjeUxESXhNeTR6TXpONklpOCtDZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qT0VJM1JUZEdPeUlnWkQwaVRUSXhOeTR6T1Rrc01UYzVMakpvTFRNeUxqRTBOMk10TkM0M01UUXNNQzA0TGpVek15MHpMamd5TVMwNExqVXpNeTA0TGpVek0zTXpMamd5TFRndU5UTXpMRGd1TlRNekxUZ3VOVE16YURNeUxqRTBOd29KQ1dNMExqY3hOQ3d3TERndU5UTXpMRE11T0RJeExEZ3VOVE16TERndU5UTXpVekl5TWk0eE1USXNNVGM1TGpJc01qRTNMak01T1N3eE56a3VNbm9pTHo0S0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTRRamRGTjBZN0lpQmtQU0pOTVRVeExqRXlNU3d5TVRNdU16TXpZeTB5TGpRMUxEQXROQzQ0TXprdE1TNHdOVGN0Tmk0ME9USXRNaTQ1T1ROc0xUUXpMakkwTmkwMU1DNDJOalZXTWpBMExqZ0tDUWxqTUN3MExqY3hNeTB6TGpneUxEZ3VOVE16TFRndU5UTXpMRGd1TlRNell5MDBMamN4TkN3d0xUZ3VOVE16TFRNdU9ESXhMVGd1TlRNekxUZ3VOVE16ZGkwMk9DNHlOamRqTUMwekxqVTNOU3d5TGpJeU9DMDJMamMzTERVdU5UZ3hMVGd1TURBM0Nna0pZek11TXpVeUxURXVNak00TERjdU1USXlMVEF1TWpVekxEa3VORFF5TERJdU5EWTJiRFF6TGpJME5pdzFNQzQyTmpWMkxUUTFMakV5TkdNd0xUUXVOekV6TERNdU9ESXRPQzQxTXpNc09DNDFNek10T0M0MU16TnpPQzQxTXpNc015NDRNakVzT0M0MU16TXNPQzQxTXpOV01qQTBMamdLQ1Fsak1Dd3pMalUzTlMweUxqSXlPQ3cyTGpjM0xUVXVOVGd4TERndU1EQTNRekUxTXk0eE1EY3NNakV6TGpFMk1pd3hOVEl1TVRBNExESXhNeTR6TXpNc01UVXhMakV5TVN3eU1UTXVNek16ZWlJdlBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p3dmMzWm5QZ289XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvdGV4dC1saW5lcy5zdmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJmZWVkc1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImZlZWRzLWxpc3RcXFwiPlxcblxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2h0bWwvZmVlZHMuaHRtbFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXM8IDMwMCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0pzb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXMoc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgcmV0dXJuIChzY29wZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb24odGFyZ2V0LCB0eXBlLCBjYWxsYmFjaywgY2FwdHVyZSkge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCAhIWNhcHR1cmUpO1xufVxuXG5jb25zdCBjb250ZXh0UmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuY29udGV4dFJhbmdlLnNldFN0YXJ0KGRvY3VtZW50LmJvZHksIDApO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyVG9FbHMoc3RyKSB7XG4gICAgcmV0dXJuIGNvbnRleHRSYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRwcmVwZW5kKHRhcmdldCwgZWwpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lmluc2VydEJlZm9yZShlbCwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlscy5qcyIsImltcG9ydCB7Y2hlY2tTdGF0dXN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHt0b0pzb259IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtxc30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5pbXBvcnQgeyRvbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyRwcmVwZW5kfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBpZGIgZnJvbSAnaWRiJztcbmltcG9ydCBUb2FzdCBmcm9tICcuL3RvYXN0LmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMuZmVlZHNVcmwgPSAnaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9zb3VyY2U9dGVjaGNydW5jaCZzb3J0Qnk9bGF0ZXN0JmFwaUtleT1hOWY0MjZkNDhjN2I0YzYxOTJhZmZlNGNlMmMxOGIyYyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gcXMoJy5mZWVkcy1saXN0JywgcXMoJy5mZWVkcycpKTtcbiAgICAgICAgdGhpcy50b2FzdENvbnRhaW5lciA9IHFzKCcudG9hc3QtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuX2RldGVjdEZlYXR1cmUoKTtcbiAgICAgICAgdGhpcy5fb3BlbkRhdGFiYXNlKCk7XG4gICAgICAgIHRoaXMuX3Nob3dDYWNoZWRBcnRpY2xlcygpO1xuICAgICAgICB0aGlzLl9nZXRGZWVkcygpO1xuICAgICAgICB0aGlzLl9jbGlja1RvUmVmcmVzaCgpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlclNlcnZpY2VXb3JrZXIoKTtcbiAgICB9XG5cbiAgICBfZGV0ZWN0RmVhdHVyZSgpIHtcbiAgICAgICAgbGV0IHVuc3VwcG9ydHMgPSBbXTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyKSB7XG4gICAgICAgICAgICB1bnN1cHBvcnRzLnB1c2goJ1NlcnZpY2Ugd29ya2VyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXdpbmRvdy5mZXRjaCkge1xuICAgICAgICAgICAgdW5zdXBwb3J0cy5wdXNoKCdmZXRjaCBBUEknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd2luZG93LmNhY2hlcykge1xuICAgICAgICAgICAgdW5zdXBwb3J0cy5wdXNoKCdjYWNoZSBBUEknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd2luZG93LlByb21pc2UpIHtcbiAgICAgICAgICAgIHVuc3VwcG9ydHMucHVzaCgncHJvbWlzZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVuc3VwcG9ydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXcgVG9hc3Qoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfkvaDnmoTmtY/op4jlmajkuI3mlK/mjIEnICsgdW5zdXBwb3J0cy5qb2luKCcsJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29wZW5EYXRhYmFzZSgpIHtcbiAgICAgICAgLy8g5pyJc2VydmljZSB3b3JrZXLlho3liJvlu7rmlbDmja7lupNcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fZGJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYlByb21pc2UgPSBpZGIub3BlbignVGVjaE5ld3MnLCAxLCB1cGdyYWRlREIgPT4ge1xuICAgICAgICAgICAgbGV0IHN0b3JlID0gdXBncmFkZURCLmNyZWF0ZU9iamVjdFN0b3JlKCdhcnRpY2xlcycsIHtcbiAgICAgICAgICAgICAgICBrZXlQYXRoOiAndGl0bGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lJywgJ3B1Ymxpc2hlZEF0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jbGlja1RvUmVmcmVzaCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAkb24ocXMoJy5yZWZyZXNoLWJ1dHRvbicpLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9nZXRGZWVkcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0RmVlZHMoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgZmV0Y2godGhpcy5mZWVkc1VybClcbiAgICAgICAgICAgIC50aGVuKGNoZWNrU3RhdHVzKVxuICAgICAgICAgICAgLnRoZW4odG9Kc29uKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNlbGYuX2V4dHJhY3ROZXcoZGF0YSkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2VsZi5fcmVuZGVyRmVlZHMoZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goKTtcbiAgICB9XG5cbiAgICBfZXh0cmFjdE5ldyhkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLl9sYXRlc3RmZWVkKSB7XG4gICAgICAgICAgICBsZXQgZmVlZHMgPSBkYXRhLmFydGljbGVzO1xuICAgICAgICAgICAgbGV0IGxhdGVzdGZlZWQgPSB0aGlzLl9sYXRlc3RmZWVkO1xuICAgICAgICAgICAgZGF0YS5hcnRpY2xlcyA9IGZlZWRzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLnBhcnNlKGl0ZW0ucHVibGlzaGVkQXQpID4gRGF0ZS5wYXJzZShsYXRlc3RmZWVkLnB1Ymxpc2hlZEF0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhY2hlQXJ0aWNsZXMoZGF0YS5hcnRpY2xlcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YS5hcnRpY2xlcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckZlZWRzKGRhdGEpIHtcbiAgICAgICAgbGV0IGZlZWRzID0gZGF0YTtcbiAgICAgICAgaWYgKCFmZWVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5ldyBUb2FzdCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+i/mOayoeacieaWsOaWh+eroCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhdGVzdGZlZWQgPSBmZWVkc1swXTtcbiAgICAgICAgJHByZXBlbmQodGhpcy5jb250YWluZXIsIHRoaXMudGVtcGxhdGUuZmVlZHNMaXN0KGZlZWRzKSk7XG4gICAgfVxuXG4gICAgX2NhY2hlQXJ0aWNsZXMoYXJ0aWNsZXMpIHtcbiAgICAgICAgLy8gY2FjaGUgdGhlIG5ldyBhcnRpY2xlcyBpbiBpbmRleGVkREJcbiAgICAgICAgdGhpcy5fZGJQcm9taXNlLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRiKSByZXR1cm47XG5cbiAgICAgICAgICAgIHZhciB0eCA9IGRiLnRyYW5zYWN0aW9uKCdhcnRpY2xlcycsICdyZWFkd3JpdGUnKTtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHR4Lm9iamVjdFN0b3JlKCdhcnRpY2xlcycpO1xuICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaChmdW5jdGlvbihhcnRpY2xlKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUucHV0KGFydGljbGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHN0b3JlLmluZGV4KCd0aW1lJykub3BlbkN1cnNvcihudWxsLCAncHJldicpLnRoZW4oKGN1cnNvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJzb3IuYWR2YW5jZSg1MCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIGRlbGV0ZVJlc3QoY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjdXJzb3IuZGVsZXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnNvci5jb250aW51ZSgpLnRoZW4oZGVsZXRlUmVzdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc3luY0ltYWdlQ2FjaGUoKTtcbiAgICB9XG5cbiAgICBfc2hvd0NhY2hlZEFydGljbGVzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2RiUHJvbWlzZS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYiB8fCBzZWxmLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBkYi50cmFuc2FjdGlvbignYXJ0aWNsZXMnKS5vYmplY3RTdG9yZSgnYXJ0aWNsZXMnKS5pbmRleCgndGltZScpO1xuXG4gICAgICAgICAgICBpbmRleC5nZXRBbGwoKS50aGVuKChhcnRpY2xlcykgPT4ge1xuICAgICAgICAgICAgICAgIGFydGljbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5wdWJsaXNoZWRBdCkgLSBEYXRlLnBhcnNlKGEucHVibGlzaGVkQXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlbmRlckZlZWRzKGFydGljbGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDkvb/mlofnq6DnvJPlrZjlkozlm77niYfnvJPlrZjkuIDnm7RcbiAgICBfc3luY0ltYWdlQ2FjaGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYlByb21pc2UudGhlbihmdW5jdGlvbihkYikge1xuICAgICAgICAgICAgaWYgKCFkYikgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgaW1hZ2VzTmVlZGVkID0gW107XG5cbiAgICAgICAgICAgIGxldCB0eCA9IGRiLnRyYW5zYWN0aW9uKCdhcnRpY2xlcycpO1xuICAgICAgICAgICAgcmV0dXJuIHR4Lm9iamVjdFN0b3JlKCdhcnRpY2xlcycpLmdldEFsbCgpLnRoZW4oKGFydGljbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJ0aWNsZS51cmxUb0ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IG5ldyBVUkwoYXJ0aWNsZS51cmxUb0ltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlVXJsID0gaW1hZ2VVcmwub3JpZ2luICsgaW1hZ2VVcmwucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNOZWVkZWQucHVzaChjYWNoZVVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZXMub3BlbignVGVjaE5ld3MtaW1hZ2UtY2FjaGUnKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGUua2V5cygpLnRoZW4oKHJlcXVlc3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0cy5mb3JFYWNoKChyZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZXNOZWVkZWQuaW5jbHVkZXMocmVxdWVzdC51cmwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLmRlbGV0ZShyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKioqKioqKioqKioqKioqKiogc2VydmljZSB3b3JrZXIgcmVsYXRlZCAqKioqKioqKioqKioqKioqKioqL1xuICAgIC8vIOazqOWGjHNlcnZpY2VXb3JrZXJcbiAgICBfcmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCkge1xuICAgICAgICAvLyDlip/og73mo4DmtYtcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZVdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3pobXpnaLmsqHmnInooqtzZXJ2aWNlIHdvcmtlcuaOp+WItu+8jOS5n+WwseS4jeW/heWkhOeQhuabtOaWsOS6hlxuICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmnIkgc2VydmljZSB3b3JrZXLmraPlnKjnrYnlvoXooqvmv4DmtLvvvIzor7TmmI7mlrDnmoRzZXJ2aWNlIHdvcmtlcuWuieijheaIkOWKn++8jHVwZGF0ZSByZWFkeVxuICAgICAgICAgICAgaWYgKHJlZy53YWl0aW5nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlV29ya2VyKHJlZy53YWl0aW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOaciSBzZXJ2aWNlIHdvcmtlcuato+WcqOiiq+Wuieijhe+8jOi3n+i4quWuieijheeKtuaAgVxuICAgICAgICAgICAgaWYgKHJlZy5pbnN0YWxsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdHJhY2tJbnN0YWxsaW5nKHJlZy5pbnN0YWxsaW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOebkeWQrHVwZGF0ZWZvdW5k5LqL5Lu277yM6Lef6Liq5pu05paw55qE5a6J6KOF54q25oCBXG4gICAgICAgICAgICByZWcuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlZm91bmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl90cmFja0luc3RhbGxpbmcocmVnLmluc3RhbGxpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOW9k+aOp+WItumhtemdoueahHNlcnZpY2Ugd29ya2Vy5Y+R55Sf5pS55Y+Y77yM5Yi35paw6aG16Z2i5Lul5Yqg6L295pu05paw55qE6LWE5rqQXG4gICAgICAgIHZhciByZWZyZXNoaW5nO1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAocmVmcmVzaGluZykgcmV0dXJuO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmVmcmVzaGluZyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF90cmFja0luc3RhbGxpbmcoc3cpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHN3LnN0YXRlID09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlV29ya2VyKHN3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZVdvcmtlcihzdykge1xuICAgICAgICBuZXcgVG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ+ajgOa1i+WIsOabtOaWsOOAgueCueWHu+abtOaWsOWIt+aWsOmhtemdoicsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBjdXN0b21CdXR0b25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5pu05pawJyxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdy5wb3N0TWVzc2FnZSgnc2tpcFdhaXRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsImltcG9ydCB7c3RyVG9FbHN9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgZmVlZHNMaXN0KGZlZWRzKSB7XG4gICAgICAgIGxldCBIVE1MU3RyaW5nID0gZmVlZHMucmVkdWNlKChhLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+PGltZyBzcmM9XCIke2l0ZW0udXJsVG9JbWFnZX1cIiBhbHQ9XCJuZXdzIGltYWdlXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+PHNwYW4gY2xhc3M9XCJhdXRob3JcIj4ke2l0ZW0uYXV0aG9yfTwvc3Bhbj48c3BhbiBjbGFzcz1cInB1Ymxpc2hlZEF0XCI+JHtpdGVtLnB1Ymxpc2hlZEF0fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiYmxhbmtcIj5yZWFkIG1vcmU8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9LCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIHN0clRvRWxzKEhUTUxTdHJpbmcpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGVtcGxhdGUuanMiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gdG9BcnJheShhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncykge1xuICAgIHZhciByZXF1ZXN0O1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXF1ZXN0ID0gb2JqW21ldGhvZF0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgcC5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwob2JqLCBtZXRob2QsIGFyZ3MpIHtcbiAgICB2YXIgcCA9IHByb21pc2lmeVJlcXVlc3RDYWxsKG9iaiwgbWV0aG9kLCBhcmdzKTtcbiAgICByZXR1cm4gcC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICByZXR1cm4gbmV3IEN1cnNvcih2YWx1ZSwgcC5yZXF1ZXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UHJvcGVydGllcyhQcm94eUNsYXNzLCB0YXJnZXRQcm9wLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcm94eUNsYXNzLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzW3RhcmdldFByb3BdW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eU1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1t0YXJnZXRQcm9wXVtwcm9wXS5hcHBseSh0aGlzW3RhcmdldFByb3BdLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5Q3Vyc29yUmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBJbmRleChpbmRleCkge1xuICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gIH1cblxuICBwcm94eVByb3BlcnRpZXMoSW5kZXgsICdfaW5kZXgnLCBbXG4gICAgJ25hbWUnLFxuICAgICdrZXlQYXRoJyxcbiAgICAnbXVsdGlFbnRyeScsXG4gICAgJ3VuaXF1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ2dldCcsXG4gICAgJ2dldEtleScsXG4gICAgJ2dldEFsbCcsXG4gICAgJ2dldEFsbEtleXMnLFxuICAgICdjb3VudCdcbiAgXSk7XG5cbiAgcHJveHlDdXJzb3JSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ29wZW5DdXJzb3InLFxuICAgICdvcGVuS2V5Q3Vyc29yJ1xuICBdKTtcblxuICBmdW5jdGlvbiBDdXJzb3IoY3Vyc29yLCByZXF1ZXN0KSB7XG4gICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yO1xuICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgcHJveHlQcm9wZXJ0aWVzKEN1cnNvciwgJ19jdXJzb3InLCBbXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ2tleScsXG4gICAgJ3ByaW1hcnlLZXknLFxuICAgICd2YWx1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhDdXJzb3IsICdfY3Vyc29yJywgSURCQ3Vyc29yLCBbXG4gICAgJ3VwZGF0ZScsXG4gICAgJ2RlbGV0ZSdcbiAgXSk7XG5cbiAgLy8gcHJveHkgJ25leHQnIG1ldGhvZHNcbiAgWydhZHZhbmNlJywgJ2NvbnRpbnVlJywgJ2NvbnRpbnVlUHJpbWFyeUtleSddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIGlmICghKG1ldGhvZE5hbWUgaW4gSURCQ3Vyc29yLnByb3RvdHlwZSkpIHJldHVybjtcbiAgICBDdXJzb3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3Vyc29yID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnNvci5fY3Vyc29yW21ldGhvZE5hbWVdLmFwcGx5KGN1cnNvci5fY3Vyc29yLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QoY3Vyc29yLl9yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiBuZXcgQ3Vyc29yKHZhbHVlLCBjdXJzb3IuX3JlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIE9iamVjdFN0b3JlKHN0b3JlKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5jcmVhdGVJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuY3JlYXRlSW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuaW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIFtcbiAgICAnbmFtZScsXG4gICAgJ2tleVBhdGgnLFxuICAgICdpbmRleE5hbWVzJyxcbiAgICAnYXV0b0luY3JlbWVudCdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ3B1dCcsXG4gICAgJ2FkZCcsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2NsZWFyJyxcbiAgICAnZ2V0JyxcbiAgICAnZ2V0QWxsJyxcbiAgICAnZ2V0QWxsS2V5cycsXG4gICAgJ2NvdW50J1xuICBdKTtcblxuICBwcm94eUN1cnNvclJlcXVlc3RNZXRob2RzKE9iamVjdFN0b3JlLCAnX3N0b3JlJywgSURCT2JqZWN0U3RvcmUsIFtcbiAgICAnb3BlbkN1cnNvcicsXG4gICAgJ29wZW5LZXlDdXJzb3InXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ2RlbGV0ZUluZGV4J1xuICBdKTtcblxuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihpZGJUcmFuc2FjdGlvbikge1xuICAgIHRoaXMuX3R4ID0gaWRiVHJhbnNhY3Rpb247XG4gICAgdGhpcy5jb21wbGV0ZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaWRiVHJhbnNhY3Rpb24uZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5vYmplY3RTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U3RvcmUodGhpcy5fdHgub2JqZWN0U3RvcmUuYXBwbHkodGhpcy5fdHgsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhUcmFuc2FjdGlvbiwgJ190eCcsIFtcbiAgICAnb2JqZWN0U3RvcmVOYW1lcycsXG4gICAgJ21vZGUnXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhUcmFuc2FjdGlvbiwgJ190eCcsIElEQlRyYW5zYWN0aW9uLCBbXG4gICAgJ2Fib3J0J1xuICBdKTtcblxuICBmdW5jdGlvbiBVcGdyYWRlREIoZGIsIG9sZFZlcnNpb24sIHRyYW5zYWN0aW9uKSB7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgICB0aGlzLm9sZFZlcnNpb24gPSBvbGRWZXJzaW9uO1xuICAgIHRoaXMudHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICB9XG5cbiAgVXBncmFkZURCLnByb3RvdHlwZS5jcmVhdGVPYmplY3RTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U3RvcmUodGhpcy5fZGIuY3JlYXRlT2JqZWN0U3RvcmUuYXBwbHkodGhpcy5fZGIsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhVcGdyYWRlREIsICdfZGInLCBbXG4gICAgJ25hbWUnLFxuICAgICd2ZXJzaW9uJyxcbiAgICAnb2JqZWN0U3RvcmVOYW1lcydcbiAgXSk7XG5cbiAgcHJveHlNZXRob2RzKFVwZ3JhZGVEQiwgJ19kYicsIElEQkRhdGFiYXNlLCBbXG4gICAgJ2RlbGV0ZU9iamVjdFN0b3JlJyxcbiAgICAnY2xvc2UnXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIERCKGRiKSB7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgfVxuXG4gIERCLnByb3RvdHlwZS50cmFuc2FjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24odGhpcy5fZGIudHJhbnNhY3Rpb24uYXBwbHkodGhpcy5fZGIsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhEQiwgJ19kYicsIFtcbiAgICAnbmFtZScsXG4gICAgJ3ZlcnNpb24nLFxuICAgICdvYmplY3RTdG9yZU5hbWVzJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoREIsICdfZGInLCBJREJEYXRhYmFzZSwgW1xuICAgICdjbG9zZSdcbiAgXSk7XG5cbiAgLy8gQWRkIGN1cnNvciBpdGVyYXRvcnNcbiAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgb25jZSBicm93c2VycyBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aCBwcm9taXNlc1xuICBbJ29wZW5DdXJzb3InLCAnb3BlbktleUN1cnNvciddLmZvckVhY2goZnVuY3Rpb24oZnVuY05hbWUpIHtcbiAgICBbT2JqZWN0U3RvcmUsIEluZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGVbZnVuY05hbWUucmVwbGFjZSgnb3BlbicsICdpdGVyYXRlJyldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBuYXRpdmVPYmplY3QgPSB0aGlzLl9zdG9yZSB8fCB0aGlzLl9pbmRleDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuYXRpdmVPYmplY3RbZnVuY05hbWVdLmFwcGx5KG5hdGl2ZU9iamVjdCwgYXJncy5zbGljZSgwLCAtMSkpO1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHBvbHlmaWxsIGdldEFsbFxuICBbSW5kZXgsIE9iamVjdFN0b3JlXS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRBbGwpIHJldHVybjtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24ocXVlcnksIGNvdW50KSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIGluc3RhbmNlLml0ZXJhdGVDdXJzb3IocXVlcnksIGZ1bmN0aW9uKGN1cnNvcikge1xuICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMucHVzaChjdXJzb3IudmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9PSB1bmRlZmluZWQgJiYgaXRlbXMubGVuZ3RoID09IGNvdW50KSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIGV4cCA9IHtcbiAgICBvcGVuOiBmdW5jdGlvbihuYW1lLCB2ZXJzaW9uLCB1cGdyYWRlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwID0gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnb3BlbicsIFtuYW1lLCB2ZXJzaW9uXSk7XG4gICAgICB2YXIgcmVxdWVzdCA9IHAucmVxdWVzdDtcblxuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAodXBncmFkZUNhbGxiYWNrKSB7XG4gICAgICAgICAgdXBncmFkZUNhbGxiYWNrKG5ldyBVcGdyYWRlREIocmVxdWVzdC5yZXN1bHQsIGV2ZW50Lm9sZFZlcnNpb24sIHJlcXVlc3QudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbihkYikge1xuICAgICAgICByZXR1cm4gbmV3IERCKGRiKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnZGVsZXRlRGF0YWJhc2UnLCBbbmFtZV0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cDtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWxmLmlkYiA9IGV4cDtcbiAgfVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pZGIvbGliL2lkYi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYXV0aG9yOiBpcmVhZGVAZ2l0aHViXG5pbXBvcnQgJy4uL3Njc3MvdG9hc3Quc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvYXN0KG9wdGlvbnMpIHtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zLnR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgdGhpcy50b2FzdENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0anMtY29udGFpbmVyJyk7XG4gICAgdGhpcy50b2FzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0anMnKTtcblxuICAgIHRoaXMuX2luaXQoKTtcbn1cblxuVG9hc3QucHJvdG90eXBlLl9jcmVhdGVFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICBfdGhpcy50b2FzdENvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIF90aGlzLnRvYXN0Q29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgndG9hc3Rqcy1jb250YWluZXInKTtcbiAgICAgICAgX3RoaXMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgICAgICAgX3RoaXMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgICAgX3RoaXMudG9hc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBfdGhpcy50b2FzdEVsLmNsYXNzTGlzdC5hZGQoJ3RvYXN0anMnKTtcblxuICAgICAgICBfdGhpcy50b2FzdENvbnRhaW5lckVsLmFwcGVuZENoaWxkKF90aGlzLnRvYXN0RWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLnRvYXN0Q29udGFpbmVyRWwpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbn07XG5cblRvYXN0LnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3Rqcy1idG4tLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tQnV0dG9ucykge1xuICAgICAgICB2YXIgY3VzdG9tQnV0dG9uc0VsQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9hc3Rqcy1idG4tLWN1c3RvbScpKTtcbiAgICAgICAgY3VzdG9tQnV0dG9uc0VsQXJyYXkubWFwKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLmN1c3RvbUJ1dHRvbnNbaW5kZXhdLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblRvYXN0LnByb3RvdHlwZS5fY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpczMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBfdGhpczMudG9hc3RFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIF90aGlzMy50b2FzdEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RlZmF1bHQnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlcicpO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMzLmZvY3VzZWRFbEJlZm9yZU9wZW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuZm9jdXNlZEVsQmVmb3JlT3Blbi5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xufTtcblxuVG9hc3QucHJvdG90eXBlLl9vcGVuID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy50b2FzdEVsLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnR5cGUpO1xuICAgIHRoaXMudG9hc3RDb250YWluZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuXG4gICAgdmFyIGN1c3RvbUJ1dHRvbnMgPSAnJztcbiAgICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbUJ1dHRvbnMpIHtcbiAgICAgICAgY3VzdG9tQnV0dG9ucyA9IHRoaXMub3B0aW9ucy5jdXN0b21CdXR0b25zLm1hcChmdW5jdGlvbiAoY3VzdG9tQnV0dG9uLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInRvYXN0anMtYnRuIHRvYXN0anMtYnRuLS1jdXN0b21cIj4nICsgY3VzdG9tQnV0dG9uLnRleHQgKyAnPC9idXR0b24+JztcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbUJ1dHRvbnMgPSBjdXN0b21CdXR0b25zLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHRoaXMudG9hc3RFbC5pbm5lckhUTUwgPSAnXFxuICAgICAgICA8cD4nICsgdGhpcy5vcHRpb25zLm1lc3NhZ2UgKyAnPC9wPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ0b2FzdGpzLWJ0biB0b2FzdGpzLWJ0bi0tY2xvc2VcIj7lv73nlaU8L2J1dHRvbj5cXG4gICAgICAgICcgKyBjdXN0b21CdXR0b25zICsgJ1xcbiAgICAnO1xuXG4gICAgdGhpcy5mb2N1c2VkRWxCZWZvcmVPcGVuID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3Rqcy1idG4tLWNsb3NlJykuZm9jdXMoKTtcbn07XG5cblRvYXN0LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM0LnRvYXN0Q29udGFpbmVyRWwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM0Ll9jcmVhdGVFbGVtZW50cygpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXM0LnRvYXN0Q29udGFpbmVyRWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuX2Nsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczQuX29wZW4oKTtcbiAgICAgICAgX3RoaXM0Ll9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9hc3QuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvYXN0LnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9hc3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvYXN0LnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9hc3Quc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9hc3Rqcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLyogRmFsbGJhY2sgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC8qICovIH1cXG5cXG4udG9hc3Rqcy1jb250YWluZXJbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIl0ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgfVxcblxcbi50b2FzdGpzIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcXG4gIC8qIE5vIGJvdHRvbSBwYWRkaW5nIGJlY2F1c2UgdGhlIGJ1dHRvbnMgaGF2ZSBhIG1hcmdpbi1ib3R0b20gKi9cXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuXFxuLnRvYXN0anMuZGVmYXVsdCB7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI0FBQUFBQTsgfVxcblxcbi50b2FzdGpzLnN1Y2Nlc3Mge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyRUNDNDA7IH1cXG5cXG4udG9hc3Rqcy53YXJuaW5nIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRkY4NTFCOyB9XFxuXFxuLnRvYXN0anMuZGFuZ2VyIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjRkY0MTM2OyB9XFxuXFxuLnRvYXN0anMtYnRuIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udG9hc3Rqcy1idG4tLWN1c3RvbSB7XFxuICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4udG9hc3Rqcy1idG46aG92ZXIsXFxuLnRvYXN0anMtYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc2Nzcy90b2FzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9