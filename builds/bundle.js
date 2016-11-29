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
	
	            navigator.serviceWorker.register('/service-worker-demo/serviceWorker.js').then(function (reg) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGFmYTZkMmMxMDk3ZDQ5ZjQ1ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzA2OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmVmcmVzaC5zdmciLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdGV4dC1saW5lcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvZmVlZHMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZGIvbGliL2lkYi5qcyJdLCJuYW1lcyI6WyJhcHBlbmRDaGlsZCIsImNoZWNrU3RhdHVzIiwidG9Kc29uIiwicXMiLCIkb24iLCJzdHJUb0VscyIsIiRwcmVwZW5kIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJzZWxlY3RvciIsInNjb3BlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwidHlwZSIsImNhbGxiYWNrIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250ZXh0UmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNldFN0YXJ0IiwiYm9keSIsInN0ciIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImVsIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIkluZGV4Q29udHJvbGxlciIsInRlbXBsYXRlIiwiZmVlZHNVcmwiLCJjb250YWluZXIiLCJfb3BlbkRhdGFiYXNlIiwiX3Nob3dDYWNoZWRBcnRpY2xlcyIsIl9nZXRGZWVkcyIsIl9jbGlja1RvUmVmcmVzaCIsIl9yZWdpc3RlclNlcnZpY2VXb3JrZXIiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwiX2RiUHJvbWlzZSIsIm9wZW4iLCJzdG9yZSIsInVwZ3JhZGVEQiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImNyZWF0ZUluZGV4Iiwic2VsZiIsImZldGNoIiwidGhlbiIsImRhdGEiLCJfZXh0cmFjdE5ldyIsIl9yZW5kZXJGZWVkcyIsImNhdGNoIiwiX2xhdGVzdGZlZWQiLCJmZWVkcyIsImFydGljbGVzIiwibGF0ZXN0ZmVlZCIsImZpbHRlciIsIml0ZW0iLCJEYXRlIiwicGFyc2UiLCJwdWJsaXNoZWRBdCIsIl9jYWNoZUFydGljbGVzIiwibGVuZ3RoIiwiZmVlZHNMaXN0IiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJmb3JFYWNoIiwiYXJ0aWNsZSIsInB1dCIsImluZGV4Iiwib3BlbkN1cnNvciIsImN1cnNvciIsImFkdmFuY2UiLCJkZWxldGVSZXN0IiwiZGVsZXRlIiwiY29udGludWUiLCJjaGlsZHJlbiIsImdldEFsbCIsInNvcnQiLCJhIiwiYiIsInJlZ2lzdGVyIiwicmVnIiwiY29udHJvbGxlciIsIndhaXRpbmciLCJfdXBkYXRlV29ya2VyIiwiaW5zdGFsbGluZyIsIl90cmFja0luc3RhbGxpbmciLCJyZWZyZXNoaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzdyIsInN0YXRlIiwicG9zdE1lc3NhZ2UiLCJUZW1wbGF0ZSIsIkhUTUxTdHJpbmciLCJyZWR1Y2UiLCJ0aXRsZSIsInVybFRvSW1hZ2UiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsInVybCJdLCJtYXBwaW5n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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRhZmE2ZDJjMTA5N2Q0OWY0NWYwIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IEhUTUxIZWFkZXIgZnJvbSAnLi4vaHRtbC9oZWFkZXIuaHRtbCc7XG5pbXBvcnQgSFRNTEZlZWRzQ29udGFpbmVyIGZyb20gJy4uL2h0bWwvZmVlZHMuaHRtbCc7XG5pbXBvcnQge3FzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBJbmRleENvbnRyb2xsZXIgZnJvbSAnLi9pbmRleENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHtzdHJUb0Vsc30gZnJvbSAnLi91dGlscy5qcyc7XG5cbnFzKCdib2R5JykuYXBwZW5kQ2hpbGQoc3RyVG9FbHMoSFRNTEhlYWRlcikpO1xucXMoJ2JvZHknKS5hcHBlbmRDaGlsZChzdHJUb0VscyhIVE1MRmVlZHNDb250YWluZXIpKTtcblxuXG5uZXcgSW5kZXhDb250cm9sbGVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbmhlYWRlciB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjOEI3RTdGO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjOTk5OyB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgaGVhZGVyIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG4gICAgaGVhZGVyIC50aXRsZSBzcGFuIHtcXG4gICAgICBmb250LXNpemU6IDI2cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAgIGhlYWRlciAudGl0bGUgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMjBweDsgfVxcbiAgaGVhZGVyIC5yZWZyZXNoLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWFnZXMvcmVmcmVzaC5zdmdcIikgKyBcIik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLmZlZWRzIHtcXG4gIG1hcmdpbi10b3A6IDc1cHg7IH1cXG4gIC5mZWVkcyAuZmVlZHMtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAxZW07IH1cXG4gICAgLmZlZWRzIC5mZWVkcy1saXN0IGxpIHtcXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggI2JiYjtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgbWFyZ2luOiAxZW0gMDsgfVxcbiAgICAgIC5mZWVkcyAuZmVlZHMtbGlzdCBsaSAucHVibGlzaGVkQXQge1xcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAgICAgLmZlZWRzIC5mZWVkcy1saXN0IGxpIGEge1xcbiAgICAgICAgY29sb3I6ICNFQTQ1NDA7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG4gIC5mZWVkcyBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlUR0Y1WlhKZk1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJREkxT1M0eU5EUWdNalU1TGpJME5DSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qVTVMakkwTkNBeU5Ua3VNalEwT3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanhuUGdvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1abVptWmpzaUlHUTlJazB5TkRndU16UTRMREV5T1M0emFDMHhOUzQ0TkRsRE1qTXlMalF4TERZMUxqSTNOeXd4T0RBdU9ETXhMREV6TGpNNU5Dd3hNVGN1TWpBeUxERXpMak01TkFvSkNXTXRNekV1T0RReExEQXROakF1TmpZeExERXlMams1T0MwNE1TNDFNelFzTXpNdU9UazJRekUwTGpBeE55dzJPQzQxTkRrc01DNHlOU3c1Tnk0d09USXNNQzR3TXpZc01USTVMak5JTUd3d0xqQXhPQ3d3TGpNek1Vd3dMREV6TUM0d016Tm9NQzR3TXpZS0NRbGpNQzR6T1RNc05qTXVPRFV6TERVeExqYzFPQ3d4TVRVdU9ERTJMREV4TlM0eE9Td3hNVFV1T0RFMll6TXhMamcwTVN3d0xEWXdMalkyTVMweE15NHdNRGNzT0RFdU5UTTBMVE0wTGpBME9Xd3RNalV1T0RVeUxUSTBMamt6TVFvSkNXTXRNVFF1TVRjNExERTBMak13TXkwek5DNHdOVGdzTWpNdU1ESTNMVFUxTGpZNE1pd3lNeTR4TXpWakxUUTBMalF3TVN3d0xqSXdOaTAzT1M0eU1ERXRNell1TkRrdE56a3VNakF4TFRnd0xqRXlNbU10TUM0eE1EY3RNakl1T0RrekxERXdMakE1TWkwME1pNDVNRGdzTWpVdU5EZzJMVFUzTGpVNU5Rb0pDV014TkM0eE9EWXRNVFF1TWpnMUxETTBMakExT0MweU15NHdNREVzTlRVdU5qa3hMVEl6TGpFd09HTTBOQzQwTVMwd0xqSXdOaXczT1M0eU1ERXNNell1TkRRMUxEYzVMakl3TVN3M09TNDVPVGQyTUM0eE1qVm9MVEUxTGpZMk1Rb0pDV010T1M0M01EZ3NNQzB4TXk0Mk5qZ3NOaTQwT1RrdE9DNDRNVFFzTVRRdU5ERnNNek11TnprNUxETXpMalF6TTJNM0xqY3pNaXczTGpjek1pdzVMamsyTnl3M0xqWTJNU3d4Tnk0Mk5EWXNNR3d6TXk0M09Ua3RNek11TkRNekNna0pRekkyTWk0d01qVXNNVE0xTGpjNE1Td3lOVGd1TURVMkxERXlPUzR6TERJME9DNHpORGdzTVRJNUxqTjZJaTgrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQQzl6ZG1jK0NnPT1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9yZWZyZXNoLnN2Z1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGhlYWRlciBjbGFzcz1cXFwidGl0bGUtYmFyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi9pbWFnZXMvdGV4dC1saW5lcy5zdmdcIikgKyBcIlxcXCIgY2xhc3M9XFxcImhlYWRlci1sb2dvXFxcIiBhbHQ9XFxcInNpdGUtbG9nb1xcXCI+XFxuICAgICAgICAgICAgPHNwYW4+VGVjaE5ld3M8L3NwYW4+XFxuICAgICAgICA8L2gxPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicmVmcmVzaC1idXR0b25cXFwiPjwvYnV0dG9uPlxcbiAgICA8L2Rpdj5cXG48L2hlYWRlcj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9odG1sL2hlYWRlci5odG1sXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRrdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDanh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHRjVaWEpmTVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lDZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSEJ2YkhsbmIyNGdjM1I1YkdVOUltWnBiR3c2STBWRFJUZEZRVHNpSUhCdmFXNTBjejBpTlRFeUxEY3pMamsxTmlBMU1USXNORGswTGprek15QXdMRFE1TkM0NU16TWdNQ3czTXk0NU5UWWdNalUyTERVeExqSWdJaTgrQ2p4d2IyeDVaMjl1SUhOMGVXeGxQU0ptYVd4c09pTkdNVFEzTkRJN0lpQndiMmx1ZEhNOUlqVXhNaXd4Tnk0d05qY2dOVEV5TERjekxqazFOaUEwTlRVdU1URXhMRGN6TGprMU5pQTBNakF1T1RjNExEUTFMalV4TVNBME5UVXVNVEV4TERFM0xqQTJOeUFpTHo0S1BISmxZM1FnZVQwaU1UY3VNRFkzSWlCemRIbHNaVDBpWm1sc2JEb2pNVUkwTVRRMU95SWdkMmxrZEdnOUlqUTFOUzR4TVRFaUlHaGxhV2RvZEQwaU5UWXVPRGc1SWk4K0NqeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkVOa05GUkRFN0lpQmtQU0pOTkRRekxqY3pNeXd5TlRndU9EUTBTRFk0TGpJMk4yTXROQzQzTVRRc01DMDRMalV6TXkwekxqZ3lNUzA0TGpVek15MDRMalV6TTJNd0xUUXVOekV6TERNdU9ESXRPQzQxTXpNc09DNDFNek10T0M0MU16Tm9NemMxTGpRMk53b0pZelF1TnpFMExEQXNPQzQxTXpNc015NDRNakVzT0M0MU16TXNPQzQxTXpORE5EVXlMakkyTnl3eU5UVXVNREkwTERRME9DNDBORGNzTWpVNExqZzBOQ3cwTkRNdU56TXpMREkxT0M0NE5EUjZJaTgrQ2p4blBnb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJemhDTjBVM1Jqc2lJR1E5SWsweU16TXVNalEwTERNd05DNHpOVFpJTmpndU1qWTNZeTAwTGpjeE5Dd3dMVGd1TlRNekxUTXVPREl4TFRndU5UTXpMVGd1TlRNemN6TXVPREl0T0M0MU16TXNPQzQxTXpNdE9DNDFNek5vTVRZMExqazNPQW9KQ1dNMExqY3hOQ3d3TERndU5UTXpMRE11T0RJeExEZ3VOVE16TERndU5UTXpVekl6Tnk0NU5UZ3NNekEwTGpNMU5pd3lNek11TWpRMExETXdOQzR6TlRaNklpOCtDZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qT0VJM1JUZEdPeUlnWkQwaVRUSXpNeTR5TkRRc016UTVMamcyTjBnMk9DNHlOamRqTFRRdU56RTBMREF0T0M0MU16TXRNeTQ0TWpFdE9DNDFNek10T0M0MU16TnpNeTQ0TWkwNExqVXpNeXc0TGpVek15MDRMalV6TTJneE5qUXVPVGM0Q2drSll6UXVOekUwTERBc09DNDFNek1zTXk0NE1qRXNPQzQxTXpNc09DNDFNek5UTWpNM0xqazFPQ3d6TkRrdU9EWTNMREl6TXk0eU5EUXNNelE1TGpnMk4zb2lMejRLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNNFFqZEZOMFk3SWlCa1BTSk5Nak16TGpJME5Dd3pPVFV1TXpjNFNEWTRMakkyTjJNdE5DNDNNVFFzTUMwNExqVXpNeTB6TGpneU1TMDRMalV6TXkwNExqVXpNM016TGpneUxUZ3VOVE16TERndU5UTXpMVGd1TlRNemFERTJOQzQ1TnpnS0NRbGpOQzQzTVRRc01DdzRMalV6TXl3ekxqZ3lNU3c0TGpVek15dzRMalV6TTFNeU16Y3VPVFU0TERNNU5TNHpOemdzTWpNekxqSTBOQ3d6T1RVdU16YzRlaUl2UGdvOEwyYytDanh5WldOMElIZzlJakkzT0M0M05UWWlJSGs5SWpJNU5TNDRNaklpSUhOMGVXeGxQU0ptYVd4c09pTkdNVFEzTkRJN0lpQjNhV1IwYUQwaU1UWTBMamszT0NJZ2FHVnBaMmgwUFNJeE16WXVOVE16SWk4K0NqeG5QZ29KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpoQ04wVTNSanNpSUdROUlrMHlNek11TWpRMExEUTBNQzQ0T0RsSU5qZ3VNalkzWXkwMExqY3hOQ3d3TFRndU5UTXpMVE11T0RJeExUZ3VOVE16TFRndU5UTXpjek11T0RJdE9DNDFNek1zT0M0MU16TXRPQzQxTXpOb01UWTBMamszT0FvSkNXTTBMamN4TkN3d0xEZ3VOVE16TERNdU9ESXhMRGd1TlRNekxEZ3VOVE16VXpJek55NDVOVGdzTkRRd0xqZzRPU3d5TXpNdU1qUTBMRFEwTUM0NE9EbDZJaTgrQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvak9FSTNSVGRHT3lJZ1pEMGlUVE01TlM0d05Dd3lNVE11TXpNell5MHhOUzR6TmpZc01DMHlOeTR6TkRRdE5pNDNNalV0TXpFdU1qWXpMVEUzTGpVMVl5MHhMall3TXkwMExqUXpNaXd3TGpZNE9DMDVMak15TkN3MUxqRXlNUzB4TUM0NU1qY0tDUWxqTkM0ME1qWXRNUzQyTURRc09TNHpNak1zTUM0Mk9EY3NNVEF1T1RJM0xEVXVNVEpqTVM0ek5qRXNNeTQzTmpRc055NDBOelVzTmk0eU9USXNNVFV1TWpFekxEWXVNamt5WXpVdU56ZzJMREFzTVRVdU5UYzJMVEV1TnprNUxERTFMalUzTmkwNExqVTBDZ2tKWXpBdE5DNDJNVGt0TWk0eE1URXROaTR5TVRZdE1UWXVPVFU1TFRndU5qUTFZeTAyTGpVNU9TMHhMakEzT1MweE15NDBNakV0TWk0eE9UVXRNVGt1TVRZNUxUVXVNakU1WXkwM0xqa3hNUzAwTGpFMk15MHhNaTR3T1RJdE1URXVNVFkzTFRFeUxqQTVNaTB5TUM0eU5UY0tDUWxqTUMweE5TNHdOemNzTVRNdU5ESXpMVEkxTGpZd055d3pNaTQyTkRNdE1qVXVOakEzWXpFMUxqTTFPU3d3TERJM0xqTXpOaXcyTGpjeU1Td3pNUzR5TlRrc01UY3VOVFJqTVM0Mk1EY3NOQzQwTXpFdE1DNDJPRFFzT1M0ek1qUXROUzR4TVRRc01UQXVPVE14Q2drSll5MDBMalF6TkN3eExqWXhNUzA1TGpNeU5DMHdMalk0TlMweE1DNDVNamt0TlM0eE1UUmpMVEV1TXpZMExUTXVOell4TFRjdU5EYzNMVFl1TWprdE1UVXVNakUwTFRZdU1qbGpMVFV1TnpnMkxEQXRNVFV1TlRjMkxERXVOems1TFRFMUxqVTNOaXc0TGpVMENna0pZekFzTkM0Mk1URXNNaTR4TURrc05pNHlNRFVzTVRZdU9UUTVMRGd1TmpNeVl6WXVOaXd4TGpBNExERXpMalF5Tml3eUxqRTVOaXd4T1M0eE56VXNOUzR5TWpGak55NDVNVE1zTkM0eE5qUXNNVEl1TURrMkxERXhMakUzTWl3eE1pNHdPVFlzTWpBdU1qWTJDZ2tKUXpReU55NDJPRFFzTWpBeUxqZ3dNeXcwTVRRdU1qWXNNakV6TGpNek15d3pPVFV1TURRc01qRXpMak16TTNvaUx6NEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU00UWpkRk4wWTdJaUJrUFNKTk16RTVMalE1Tml3eU1UTXVNek16WXkwekxqRTROeXd3TFRZdU1UUXpMVEV1TnpnMkxUY3VOakE1TFRRdU5qYzJiQzA1TGpZNE5pMHhPUzR4TVRSc0xUa3VOamcyTERFNUxqRXhOQW9KQ1dNdE1TNDJNRGdzTXk0eE56UXROUzR3TWprc05TNHdNakl0T0M0MU5UTXNOQzQyTWpSakxUTXVOVE0yTFRBdU16a3hMVFl1TkRVNExUSXVPVE0zTFRjdU16TXlMVFl1TXpnMWJDMHhOeTR5T1RndE5qZ3VNalkzWXkweExqRTFPQzAwTGpVMk9Dd3hMall3T0MwNUxqSXhMRFl1TVRjM0xURXdMak0yTndvSkNXTTBMalUyTnkweExqRTFOU3c1TGpJeExERXVOakEzTERFd0xqTTJOeXcyTGpFM05td3hNUzQzTURVc05EWXVNVGszYkRjdU1EQTFMVEV6TGpneU5XTXhMalExTkMweUxqZzJPQ3cwTGpNNU5pMDBMalkzTml3M0xqWXhNaTAwTGpZM05nb0pDV016TGpJeE5Td3dMRFl1TVRVNExERXVPREE0TERjdU5qRXlMRFF1TmpjMmJEY3VNREExTERFekxqZ3lOV3d4TVM0M01EVXRORFl1TVRrM1l6RXVNVFU1TFRRdU5UWTVMRFV1T0RBeUxUY3VNek16TERFd0xqTTJOeTAyTGpFM05nb0pDV00wTGpVMk9Td3hMakUxTnl3M0xqTXpOQ3cxTGpjNU9TdzJMakUzTnl3eE1DNHpOamRzTFRFM0xqSTVPQ3cyT0M0eU5qZGpMVEF1T0RjMUxETXVORFE1TFRNdU56azJMRFV1T1RrMExUY3VNek15TERZdU16ZzFDZ2tKUXpNeU1DNHhNak1zTWpFekxqTXhOaXd6TVRrdU9EQTVMREl4TXk0ek16TXNNekU1TGpRNU5pd3lNVE11TXpNemVpSXZQZ29KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2SXpoQ04wVTNSanNpSUdROUlrMHlNek11TkRjeUxESXhNeTR6TXpOb0xUUTRMakl5WXkwMExqY3hOQ3d3TFRndU5UTXpMVE11T0RJeExUZ3VOVE16TFRndU5UTXpkaTAyT0M0eU5qZGpNQzAwTGpjeE15d3pMamd5TFRndU5UTXpMRGd1TlRNekxUZ3VOVE16Q2drSmFEUTRMakl5WXpRdU56RTBMREFzT0M0MU16TXNNeTQ0TWpFc09DNDFNek1zT0M0MU16TnpMVE11T0RJc09DNDFNek10T0M0MU16TXNPQzQxTXpOb0xUTTVMalk0TjNZMU1TNHlhRE01TGpZNE4yTTBMamN4TkN3d0xEZ3VOVE16TERNdU9ESXhMRGd1TlRNekxEZ3VOVE16Q2drSlV6SXpPQzR4T0RZc01qRXpMak16TXl3eU16TXVORGN5TERJeE15NHpNek42SWk4K0NnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pPRUkzUlRkR095SWdaRDBpVFRJeE55NHpPVGtzTVRjNUxqSm9MVE15TGpFME4yTXROQzQzTVRRc01DMDRMalV6TXkwekxqZ3lNUzA0TGpVek15MDRMalV6TTNNekxqZ3lMVGd1TlRNekxEZ3VOVE16TFRndU5UTXphRE15TGpFME53b0pDV00wTGpjeE5Dd3dMRGd1TlRNekxETXVPREl4TERndU5UTXpMRGd1TlRNelV6SXlNaTR4TVRJc01UYzVMaklzTWpFM0xqTTVPU3d4TnprdU1ub2lMejRLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lNNFFqZEZOMFk3SWlCa1BTSk5NVFV4TGpFeU1Td3lNVE11TXpNell5MHlMalExTERBdE5DNDRNemt0TVM0d05UY3ROaTQwT1RJdE1pNDVPVE5zTFRRekxqSTBOaTAxTUM0Mk5qVldNakEwTGpnS0NRbGpNQ3cwTGpjeE15MHpMamd5TERndU5UTXpMVGd1TlRNekxEZ3VOVE16WXkwMExqY3hOQ3d3TFRndU5UTXpMVE11T0RJeExUZ3VOVE16TFRndU5UTXpkaTAyT0M0eU5qZGpNQzB6TGpVM05Td3lMakl5T0MwMkxqYzNMRFV1TlRneExUZ3VNREEzQ2drSll6TXVNelV5TFRFdU1qTTRMRGN1TVRJeUxUQXVNalV6TERrdU5EUXlMREl1TkRZMmJEUXpMakkwTml3MU1DNDJOalYyTFRRMUxqRXlOR013TFRRdU56RXpMRE11T0RJdE9DNDFNek1zT0M0MU16TXRPQzQxTXpOek9DNDFNek1zTXk0NE1qRXNPQzQxTXpNc09DNDFNek5XTWpBMExqZ0tDUWxqTUN3ekxqVTNOUzB5TGpJeU9DdzJMamMzTFRVdU5UZ3hMRGd1TURBM1F6RTFNeTR4TURjc01qRXpMakUyTWl3eE5USXVNVEE0TERJeE15NHpNek1zTVRVeExqRXlNU3d5TVRNdU16TXplaUl2UGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy90ZXh0LWxpbmVzLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcImZlZWRzXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZmVlZHMtbGlzdFxcXCI+XFxuXFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaHRtbC9mZWVkcy5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1czwgMzAwKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSnNvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxcyhzZWxlY3Rvciwgc2NvcGUpIHtcbiAgICByZXR1cm4gKHNjb3BlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRvbih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssICEhY2FwdHVyZSk7XG59XG5cbmNvbnN0IGNvbnRleHRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5jb250ZXh0UmFuZ2Uuc2V0U3RhcnQoZG9jdW1lbnQuYm9keSwgMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJUb0VscyhzdHIpIHtcbiAgICByZXR1cm4gY29udGV4dFJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gJHByZXBlbmQodGFyZ2V0LCBlbCkge1xuICAgIHJldHVybiB0YXJnZXQuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzLmpzIiwiaW1wb3J0IHtjaGVja1N0YXR1c30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge3RvSnNvbn0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge3FzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmltcG9ydCB7JG9ufSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7JHByZXBlbmR9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGlkYiBmcm9tICdpZGInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy5mZWVkc1VybCA9ICdodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT10ZWNoY3J1bmNoJnNvcnRCeT1sYXRlc3QmYXBpS2V5PWE5ZjQyNmQ0OGM3YjRjNjE5MmFmZmU0Y2UyYzE4YjJjJztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBxcygnLmZlZWRzLWxpc3QnLCBxcygnLmZlZWRzJykpO1xuICAgICAgICB0aGlzLl9vcGVuRGF0YWJhc2UoKTtcbiAgICAgICAgdGhpcy5fc2hvd0NhY2hlZEFydGljbGVzKCk7XG4gICAgICAgIHRoaXMuX2dldEZlZWRzKCk7XG4gICAgICAgIHRoaXMuX2NsaWNrVG9SZWZyZXNoKCk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG4gICAgfVxuXG4gICAgX29wZW5EYXRhYmFzZSgpIHtcbiAgICAgICAgLy8g5pyJc2VydmljZSB3b3JrZXLlho3liJvlu7rmlbDmja7lupNcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGJQcm9taXNlID0gaWRiLm9wZW4oJ1RlY2hOZXdzJywgMSwgdXBncmFkZURCID0+IHtcbiAgICAgICAgICAgIGxldCBzdG9yZSA9IHVwZ3JhZGVEQi5jcmVhdGVPYmplY3RTdG9yZSgnYXJ0aWNsZXMnLCB7XG4gICAgICAgICAgICAgICAga2V5UGF0aDogJ3RpdGxlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgndGltZScsICdwdWJsaXNoZWRBdCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2xpY2tUb1JlZnJlc2goKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgJG9uKHFzKCcucmVmcmVzaC1idXR0b24nKSwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fZ2V0RmVlZHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldEZlZWRzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZldGNoKHRoaXMuZmVlZHNVcmwpXG4gICAgICAgICAgICAudGhlbihjaGVja1N0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHRvSnNvbilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBzZWxmLl9leHRyYWN0TmV3KGRhdGEpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNlbGYuX3JlbmRlckZlZWRzKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKCk7XG4gICAgfVxuXG4gICAgX2V4dHJhY3ROZXcoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5fbGF0ZXN0ZmVlZCkge1xuICAgICAgICAgICAgbGV0IGZlZWRzID0gZGF0YS5hcnRpY2xlcztcbiAgICAgICAgICAgIGxldCBsYXRlc3RmZWVkID0gdGhpcy5fbGF0ZXN0ZmVlZDtcbiAgICAgICAgICAgIGRhdGEuYXJ0aWNsZXMgPSBmZWVkcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGF0ZS5wYXJzZShpdGVtLnB1Ymxpc2hlZEF0KSA+IERhdGUucGFyc2UobGF0ZXN0ZmVlZC5wdWJsaXNoZWRBdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jYWNoZUFydGljbGVzKGRhdGEuYXJ0aWNsZXMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEuYXJ0aWNsZXMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJGZWVkcyhkYXRhKSB7XG4gICAgICAgIGxldCBmZWVkcyA9IGRhdGE7XG4gICAgICAgIGlmIChmZWVkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhdGVzdGZlZWQgPSBmZWVkc1swXTtcbiAgICAgICAgfVxuICAgICAgICAkcHJlcGVuZCh0aGlzLmNvbnRhaW5lciwgdGhpcy50ZW1wbGF0ZS5mZWVkc0xpc3QoZmVlZHMpKTtcbiAgICB9XG5cbiAgICBfY2FjaGVBcnRpY2xlcyhhcnRpY2xlcykge1xuICAgICAgICAvLyBjYWNoZSB0aGUgbmV3IGFydGljbGVzIGluIGluZGV4ZWREQlxuICAgICAgICB0aGlzLl9kYlByb21pc2UudGhlbigoZGIpID0+IHtcbiAgICAgICAgICAgIGlmICghZGIpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIHR4ID0gZGIudHJhbnNhY3Rpb24oJ2FydGljbGVzJywgJ3JlYWR3cml0ZScpO1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ2FydGljbGVzJyk7XG4gICAgICAgICAgICBhcnRpY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5wdXQoYXJ0aWNsZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3RvcmUuaW5kZXgoJ3RpbWUnKS5vcGVuQ3Vyc29yKG51bGwsICdwcmV2JykudGhlbigoY3Vyc29yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnNvci5hZHZhbmNlKDUwKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gZGVsZXRlUmVzdChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGN1cnNvci5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3Vyc29yLmNvbnRpbnVlKCkudGhlbihkZWxldGVSZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2hvd0NhY2hlZEFydGljbGVzKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2RiUHJvbWlzZS50aGVuKChkYikgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYiB8fCBzZWxmLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBkYi50cmFuc2FjdGlvbignYXJ0aWNsZXMnKS5vYmplY3RTdG9yZSgnYXJ0aWNsZXMnKS5pbmRleCgndGltZScpO1xuXG4gICAgICAgICAgICBpbmRleC5nZXRBbGwoKS50aGVuKChhcnRpY2xlcykgPT4ge1xuICAgICAgICAgICAgICAgIGFydGljbGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5wdWJsaXNoZWRBdCkgLSBEYXRlLnBhcnNlKGEucHVibGlzaGVkQXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuX3JlbmRlckZlZWRzKGFydGljbGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqKioqKioqKioqKioqKioqKiBzZXJ2aWNlIHdvcmtlciByZWxhdGVkICoqKioqKioqKioqKioqKioqKiovXG4gICAgLy8g5rOo5YaMc2VydmljZVdvcmtlclxuICAgIF9yZWdpc3RlclNlcnZpY2VXb3JrZXIoKSB7XG4gICAgICAgIC8vIOWKn+iDveajgOa1i1xuICAgICAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci1kZW1vL3NlcnZpY2VXb3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uKHJlZykge1xuICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN6aG16Z2i5rKh5pyJ6KKrc2VydmljZSB3b3JrZXLmjqfliLbvvIzkuZ/lsLHkuI3lv4XlpITnkIbmm7TmlrDkuoZcbiAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5pyJIHNlcnZpY2Ugd29ya2Vy5q2j5Zyo562J5b6F6KKr5r+A5rS777yM6K+05piO5paw55qEc2VydmljZSB3b3JrZXLlronoo4XmiJDlip/vvIx1cGRhdGUgcmVhZHlcbiAgICAgICAgICAgIGlmIChyZWcud2FpdGluZykge1xuICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZVdvcmtlcihyZWcud2FpdGluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzmnIkgc2VydmljZSB3b3JrZXLmraPlnKjooqvlronoo4XvvIzot5/ouKrlronoo4XnirbmgIFcbiAgICAgICAgICAgIGlmIChyZWcuaW5zdGFsbGluZykge1xuICAgICAgICAgICAgICAgIHNlbGYuX3RyYWNrSW5zdGFsbGluZyhyZWcuaW5zdGFsbGluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnm5HlkKx1cGRhdGVmb3VuZOS6i+S7tu+8jOi3n+i4quabtOaWsOeahOWuieijheeKtuaAgVxuICAgICAgICAgICAgcmVnLmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWZvdW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fdHJhY2tJbnN0YWxsaW5nKHJlZy5pbnN0YWxsaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDlvZPmjqfliLbpobXpnaLnmoRzZXJ2aWNlIHdvcmtlcuWPkeeUn+aUueWPmO+8jOWIt+aWsOmhtemdouS7peWKoOi9veabtOaWsOeahOi1hOa6kFxuICAgICAgICB2YXIgcmVmcmVzaGluZztcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHJlZnJlc2hpbmcpIHJldHVybjtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdHJhY2tJbnN0YWxsaW5nKHN3KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGVjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChzdy5zdGF0ZSA9PSAnaW5zdGFsbGVkJykge1xuICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZVdvcmtlcihzdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF91cGRhdGVXb3JrZXIoc3cpIHtcbiAgICAgICAgc3cucG9zdE1lc3NhZ2UoJ3NraXBXYWl0aW5nJyk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4Q29udHJvbGxlci5qcyIsImltcG9ydCB7c3RyVG9FbHN9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgZmVlZHNMaXN0KGZlZWRzKSB7XG4gICAgICAgIGxldCBIVE1MU3RyaW5nID0gZmVlZHMucmVkdWNlKChhLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+PGltZyBzcmM9XCIke2l0ZW0udXJsVG9JbWFnZX1cIiBhbHQ9XCJuZXdzIGltYWdlXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+PHNwYW4gY2xhc3M9XCJhdXRob3JcIj4ke2l0ZW0uYXV0aG9yfTwvc3Bhbj48c3BhbiBjbGFzcz1cInB1Ymxpc2hlZEF0XCI+JHtpdGVtLnB1Ymxpc2hlZEF0fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2l0ZW0uZGVzY3JpcHRpb259PGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgdGFyZ2V0PVwiYmxhbmtcIj5yZWFkIG1vcmU8L2E+PC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9LCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIHN0clRvRWxzKEhUTUxTdHJpbmcpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGVtcGxhdGUuanMiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gdG9BcnJheShhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncykge1xuICAgIHZhciByZXF1ZXN0O1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXF1ZXN0ID0gb2JqW21ldGhvZF0uYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuXG4gICAgcC5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICByZXR1cm4gcDtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwob2JqLCBtZXRob2QsIGFyZ3MpIHtcbiAgICB2YXIgcCA9IHByb21pc2lmeVJlcXVlc3RDYWxsKG9iaiwgbWV0aG9kLCBhcmdzKTtcbiAgICByZXR1cm4gcC50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgICByZXR1cm4gbmV3IEN1cnNvcih2YWx1ZSwgcC5yZXF1ZXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UHJvcGVydGllcyhQcm94eUNsYXNzLCB0YXJnZXRQcm9wLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcm94eUNsYXNzLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzW3RhcmdldFByb3BdW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5UmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eU1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpc1t0YXJnZXRQcm9wXVtwcm9wXS5hcHBseSh0aGlzW3RhcmdldFByb3BdLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb3h5Q3Vyc29yUmVxdWVzdE1ldGhvZHMoUHJveHlDbGFzcywgdGFyZ2V0UHJvcCwgQ29uc3RydWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgaWYgKCEocHJvcCBpbiBDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgICBQcm94eUNsYXNzLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5Q3Vyc29yUmVxdWVzdENhbGwodGhpc1t0YXJnZXRQcm9wXSwgcHJvcCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBJbmRleChpbmRleCkge1xuICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gIH1cblxuICBwcm94eVByb3BlcnRpZXMoSW5kZXgsICdfaW5kZXgnLCBbXG4gICAgJ25hbWUnLFxuICAgICdrZXlQYXRoJyxcbiAgICAnbXVsdGlFbnRyeScsXG4gICAgJ3VuaXF1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ2dldCcsXG4gICAgJ2dldEtleScsXG4gICAgJ2dldEFsbCcsXG4gICAgJ2dldEFsbEtleXMnLFxuICAgICdjb3VudCdcbiAgXSk7XG5cbiAgcHJveHlDdXJzb3JSZXF1ZXN0TWV0aG9kcyhJbmRleCwgJ19pbmRleCcsIElEQkluZGV4LCBbXG4gICAgJ29wZW5DdXJzb3InLFxuICAgICdvcGVuS2V5Q3Vyc29yJ1xuICBdKTtcblxuICBmdW5jdGlvbiBDdXJzb3IoY3Vyc29yLCByZXF1ZXN0KSB7XG4gICAgdGhpcy5fY3Vyc29yID0gY3Vyc29yO1xuICAgIHRoaXMuX3JlcXVlc3QgPSByZXF1ZXN0O1xuICB9XG5cbiAgcHJveHlQcm9wZXJ0aWVzKEN1cnNvciwgJ19jdXJzb3InLCBbXG4gICAgJ2RpcmVjdGlvbicsXG4gICAgJ2tleScsXG4gICAgJ3ByaW1hcnlLZXknLFxuICAgICd2YWx1ZSdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhDdXJzb3IsICdfY3Vyc29yJywgSURCQ3Vyc29yLCBbXG4gICAgJ3VwZGF0ZScsXG4gICAgJ2RlbGV0ZSdcbiAgXSk7XG5cbiAgLy8gcHJveHkgJ25leHQnIG1ldGhvZHNcbiAgWydhZHZhbmNlJywgJ2NvbnRpbnVlJywgJ2NvbnRpbnVlUHJpbWFyeUtleSddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIGlmICghKG1ldGhvZE5hbWUgaW4gSURCQ3Vyc29yLnByb3RvdHlwZSkpIHJldHVybjtcbiAgICBDdXJzb3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY3Vyc29yID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnNvci5fY3Vyc29yW21ldGhvZE5hbWVdLmFwcGx5KGN1cnNvci5fY3Vyc29yLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QoY3Vyc29yLl9yZXF1ZXN0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgICAgICAgIHJldHVybiBuZXcgQ3Vyc29yKHZhbHVlLCBjdXJzb3IuX3JlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIE9iamVjdFN0b3JlKHN0b3JlKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5jcmVhdGVJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuY3JlYXRlSW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIE9iamVjdFN0b3JlLnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgSW5kZXgodGhpcy5fc3RvcmUuaW5kZXguYXBwbHkodGhpcy5fc3RvcmUsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIFtcbiAgICAnbmFtZScsXG4gICAgJ2tleVBhdGgnLFxuICAgICdpbmRleE5hbWVzJyxcbiAgICAnYXV0b0luY3JlbWVudCdcbiAgXSk7XG5cbiAgcHJveHlSZXF1ZXN0TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ3B1dCcsXG4gICAgJ2FkZCcsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2NsZWFyJyxcbiAgICAnZ2V0JyxcbiAgICAnZ2V0QWxsJyxcbiAgICAnZ2V0QWxsS2V5cycsXG4gICAgJ2NvdW50J1xuICBdKTtcblxuICBwcm94eUN1cnNvclJlcXVlc3RNZXRob2RzKE9iamVjdFN0b3JlLCAnX3N0b3JlJywgSURCT2JqZWN0U3RvcmUsIFtcbiAgICAnb3BlbkN1cnNvcicsXG4gICAgJ29wZW5LZXlDdXJzb3InXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ2RlbGV0ZUluZGV4J1xuICBdKTtcblxuICBmdW5jdGlvbiBUcmFuc2FjdGlvbihpZGJUcmFuc2FjdGlvbikge1xuICAgIHRoaXMuX3R4ID0gaWRiVHJhbnNhY3Rpb247XG4gICAgdGhpcy5jb21wbGV0ZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgaWRiVHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QoaWRiVHJhbnNhY3Rpb24uZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIFRyYW5zYWN0aW9uLnByb3RvdHlwZS5vYmplY3RTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U3RvcmUodGhpcy5fdHgub2JqZWN0U3RvcmUuYXBwbHkodGhpcy5fdHgsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhUcmFuc2FjdGlvbiwgJ190eCcsIFtcbiAgICAnb2JqZWN0U3RvcmVOYW1lcycsXG4gICAgJ21vZGUnXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhUcmFuc2FjdGlvbiwgJ190eCcsIElEQlRyYW5zYWN0aW9uLCBbXG4gICAgJ2Fib3J0J1xuICBdKTtcblxuICBmdW5jdGlvbiBVcGdyYWRlREIoZGIsIG9sZFZlcnNpb24sIHRyYW5zYWN0aW9uKSB7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgICB0aGlzLm9sZFZlcnNpb24gPSBvbGRWZXJzaW9uO1xuICAgIHRoaXMudHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICB9XG5cbiAgVXBncmFkZURCLnByb3RvdHlwZS5jcmVhdGVPYmplY3RTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U3RvcmUodGhpcy5fZGIuY3JlYXRlT2JqZWN0U3RvcmUuYXBwbHkodGhpcy5fZGIsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhVcGdyYWRlREIsICdfZGInLCBbXG4gICAgJ25hbWUnLFxuICAgICd2ZXJzaW9uJyxcbiAgICAnb2JqZWN0U3RvcmVOYW1lcydcbiAgXSk7XG5cbiAgcHJveHlNZXRob2RzKFVwZ3JhZGVEQiwgJ19kYicsIElEQkRhdGFiYXNlLCBbXG4gICAgJ2RlbGV0ZU9iamVjdFN0b3JlJyxcbiAgICAnY2xvc2UnXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIERCKGRiKSB7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgfVxuXG4gIERCLnByb3RvdHlwZS50cmFuc2FjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24odGhpcy5fZGIudHJhbnNhY3Rpb24uYXBwbHkodGhpcy5fZGIsIGFyZ3VtZW50cykpO1xuICB9O1xuXG4gIHByb3h5UHJvcGVydGllcyhEQiwgJ19kYicsIFtcbiAgICAnbmFtZScsXG4gICAgJ3ZlcnNpb24nLFxuICAgICdvYmplY3RTdG9yZU5hbWVzJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoREIsICdfZGInLCBJREJEYXRhYmFzZSwgW1xuICAgICdjbG9zZSdcbiAgXSk7XG5cbiAgLy8gQWRkIGN1cnNvciBpdGVyYXRvcnNcbiAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgb25jZSBicm93c2VycyBkbyB0aGUgcmlnaHQgdGhpbmcgd2l0aCBwcm9taXNlc1xuICBbJ29wZW5DdXJzb3InLCAnb3BlbktleUN1cnNvciddLmZvckVhY2goZnVuY3Rpb24oZnVuY05hbWUpIHtcbiAgICBbT2JqZWN0U3RvcmUsIEluZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGVbZnVuY05hbWUucmVwbGFjZSgnb3BlbicsICdpdGVyYXRlJyldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBuYXRpdmVPYmplY3QgPSB0aGlzLl9zdG9yZSB8fCB0aGlzLl9pbmRleDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuYXRpdmVPYmplY3RbZnVuY05hbWVdLmFwcGx5KG5hdGl2ZU9iamVjdCwgYXJncy5zbGljZSgwLCAtMSkpO1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHBvbHlmaWxsIGdldEFsbFxuICBbSW5kZXgsIE9iamVjdFN0b3JlXS5mb3JFYWNoKGZ1bmN0aW9uKENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRBbGwpIHJldHVybjtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24ocXVlcnksIGNvdW50KSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIGluc3RhbmNlLml0ZXJhdGVDdXJzb3IocXVlcnksIGZ1bmN0aW9uKGN1cnNvcikge1xuICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbXMucHVzaChjdXJzb3IudmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGNvdW50ICE9PSB1bmRlZmluZWQgJiYgaXRlbXMubGVuZ3RoID09IGNvdW50KSB7XG4gICAgICAgICAgICByZXNvbHZlKGl0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIGV4cCA9IHtcbiAgICBvcGVuOiBmdW5jdGlvbihuYW1lLCB2ZXJzaW9uLCB1cGdyYWRlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBwID0gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnb3BlbicsIFtuYW1lLCB2ZXJzaW9uXSk7XG4gICAgICB2YXIgcmVxdWVzdCA9IHAucmVxdWVzdDtcblxuICAgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAodXBncmFkZUNhbGxiYWNrKSB7XG4gICAgICAgICAgdXBncmFkZUNhbGxiYWNrKG5ldyBVcGdyYWRlREIocmVxdWVzdC5yZXN1bHQsIGV2ZW50Lm9sZFZlcnNpb24sIHJlcXVlc3QudHJhbnNhY3Rpb24pKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbihkYikge1xuICAgICAgICByZXR1cm4gbmV3IERCKGRiKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdENhbGwoaW5kZXhlZERCLCAnZGVsZXRlRGF0YWJhc2UnLCBbbmFtZV0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cDtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWxmLmlkYiA9IGV4cDtcbiAgfVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pZGIvbGliL2lkYi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==