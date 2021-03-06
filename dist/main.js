/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url(\"https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap\"); */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n:root {\n  --dark-blue: #0000e0;\n  --light-blue: #b3b3ff;\n  --white: #fff;\n  --main-color: #69db7c;\n  --main-color-light: #a6e9b2;\n  --gray-color: #112a46;\n  --gray-color-light: #6c747f;\n}\n\nul {\n  list-style: none;\n  text-align: left;\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Montserrat\", sans-serif;\n  line-height: 1.2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: var(--grey-color-light);\n}\n\n.container {\n  max-width: 125rem;\n  margin: 0 auto;\n}\n\n.navigation {\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.navigation > h2 {\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.search-form {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.search-form > input {\n  padding: 1rem;\n  outline: none;\n  width: 45%;\n  height: 100%;\n  border: 0.2rem solid black;\n  font-size: 1.7rem;\n  text-align: left;\n  border-radius: 3rem;\n}\n\n.search-form button {\n  padding: 0.5rem 0.7rem;\n  cursor: pointer;\n  height: 80%;\n  background-color: var(--main-color);\n  border: none;\n  color: var(--grey-color);\n  border-radius: 3rem;\n  position: absolute;\n  top: 10%;\n  left: 66.5%;\n}\n\n::placeholder {\n  font-size: 1.7rem;\n}\n\n.search-form img {\n  height: 1.5rem;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10vh;\n  width: 100%;\n  border-top: 0.2rem solid black;\n  color: var(--grey-color-light);\n}\n\nfooter p {\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nfooter img {\n  height: 3rem;\n}\n\narticle {\n  padding: 2rem;\n}\n\n.card {\n  height: 30rem;\n  border-radius: 3rem;\n  max-width: 70rem;\n  margin: 0 auto;\n  box-shadow: 0.6rem 0.6rem 1rem #d3d5d9;\n  background-color: var(--main-color);\n  color: var(--grey-color-light);\n}\n\n.back-to-form-button button {\n  padding: 1rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.card-container {\n  display: flex;\n  align-items: center;\n}\n\n.card img {\n  height: 18rem;\n}\n\n.card .top {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.top button {\n  padding: 0.5rem 0.7rem;\n  cursor: pointer;\n  height: 100%;\n  background-color: var(--white);\n  border: 0.1rem solid var(--dark-blue);\n  border-radius: 100%;\n}\n\n.left-side {\n  width: 40%;\n  text-align: center;\n  font-size: 1.5rem;\n  border-right: 0.2rem solid black;\n}\n\n.city {\n  font-weight: bold;\n}\n\n.right-side {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n}\n\n.right {\n  color: var(--dark-blue);\n}\n\n.temperature {\n  font-size: 7rem;\n  text-align: center;\n}\n\n.details-container {\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.3rem;\n}\n\n.bottom {\n  text-align: center;\n}\n\n.bottom h2 {\n  font-size: 1rem;\n  color: var(--grey-color-light);\n}\n\n.loader {\n  border: 1.2rem solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 1rem solid black;\n  width: 10rem;\n  height: 10rem;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n  max-width: 58rem;\n  margin: 0 auto;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA,uFAAuF;;AAGvF;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,aAAa;EACb,qBAAqB;EACrB,2BAA2B;EAC3B,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,UAAU;EACV,YAAY;EACZ,0BAA0B;EAC1B,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,WAAW;EACX,mCAAmC;EACnC,YAAY;EACZ,wBAAwB;EACxB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,sCAAsC;EACtC,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,qCAAqC;EACrC,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,0CAA0C,EAAE,WAAW;EACvD,kCAAkC;EAClC,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE;IACE,+BAA+B;EACjC;EACA;IACE,iCAAiC;EACnC;AACF;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* @import url(\"https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap\"); */\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n:root {\n  --dark-blue: #0000e0;\n  --light-blue: #b3b3ff;\n  --white: #fff;\n  --main-color: #69db7c;\n  --main-color-light: #a6e9b2;\n  --gray-color: #112a46;\n  --gray-color-light: #6c747f;\n}\n\nul {\n  list-style: none;\n  text-align: left;\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Montserrat\", sans-serif;\n  line-height: 1.2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: var(--grey-color-light);\n}\n\n.container {\n  max-width: 125rem;\n  margin: 0 auto;\n}\n\n.navigation {\n  height: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.navigation > h2 {\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.search-form {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.search-form > input {\n  padding: 1rem;\n  outline: none;\n  width: 45%;\n  height: 100%;\n  border: 0.2rem solid black;\n  font-size: 1.7rem;\n  text-align: left;\n  border-radius: 3rem;\n}\n\n.search-form button {\n  padding: 0.5rem 0.7rem;\n  cursor: pointer;\n  height: 80%;\n  background-color: var(--main-color);\n  border: none;\n  color: var(--grey-color);\n  border-radius: 3rem;\n  position: absolute;\n  top: 10%;\n  left: 66.5%;\n}\n\n::placeholder {\n  font-size: 1.7rem;\n}\n\n.search-form img {\n  height: 1.5rem;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10vh;\n  width: 100%;\n  border-top: 0.2rem solid black;\n  color: var(--grey-color-light);\n}\n\nfooter p {\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\nfooter img {\n  height: 3rem;\n}\n\narticle {\n  padding: 2rem;\n}\n\n.card {\n  height: 30rem;\n  border-radius: 3rem;\n  max-width: 70rem;\n  margin: 0 auto;\n  box-shadow: 0.6rem 0.6rem 1rem #d3d5d9;\n  background-color: var(--main-color);\n  color: var(--grey-color-light);\n}\n\n.back-to-form-button button {\n  padding: 1rem;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.card-container {\n  display: flex;\n  align-items: center;\n}\n\n.card img {\n  height: 18rem;\n}\n\n.card .top {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.top button {\n  padding: 0.5rem 0.7rem;\n  cursor: pointer;\n  height: 100%;\n  background-color: var(--white);\n  border: 0.1rem solid var(--dark-blue);\n  border-radius: 100%;\n}\n\n.left-side {\n  width: 40%;\n  text-align: center;\n  font-size: 1.5rem;\n  border-right: 0.2rem solid black;\n}\n\n.city {\n  font-weight: bold;\n}\n\n.right-side {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n}\n\n.right {\n  color: var(--dark-blue);\n}\n\n.temperature {\n  font-size: 7rem;\n  text-align: center;\n}\n\n.details-container {\n  display: flex;\n  justify-content: space-around;\n  font-size: 1.3rem;\n}\n\n.bottom {\n  text-align: center;\n}\n\n.bottom h2 {\n  font-size: 1rem;\n  color: var(--grey-color-light);\n}\n\n.loader {\n  border: 1.2rem solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 1rem solid black;\n  width: 10rem;\n  height: 10rem;\n  -webkit-animation: spin 2s linear infinite; /* Safari */\n  animation: spin 2s linear infinite;\n  max-width: 58rem;\n  margin: 0 auto;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.error {\n  color: red;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApi */ "./src/getApi.js");
/* harmony import */ var _uiView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiView */ "./src/uiView.js");



const allEventListeners = function () {
  const searchForm = document.querySelector(".search-form");
  const articleContainer = document.querySelector("article");
  // get search input value
  const getSearchValue = function (e) {
    const searchValue = document.querySelector(".location").value.trim();
    e.preventDefault();
    clearSeachValue();
    // clear all content in article tag
    (0,_uiView__WEBPACK_IMPORTED_MODULE_1__.clearView)();
    // show loader
    (0,_uiView__WEBPACK_IMPORTED_MODULE_1__.loaderView)();
    (0,_getApi__WEBPACK_IMPORTED_MODULE_0__["default"])(searchValue, "metric");
  };
  // clear search input value
  const clearSeachValue = function () {
    document.querySelector(".location").value = "";
  };
  // listen to form submit event
  searchForm.addEventListener("submit", getSearchValue);
  articleContainer.addEventListener("click", function (e) {
    const bottomContainer = document.querySelector(".top-button");
    if (!e.target.classList.contains("temp-display")) return;
    const currentCard = e.target.closest(".card");
    const leftSide = currentCard.querySelector(".left-side");
    const cityNameCard = leftSide.querySelector(".city");
    const cityName = cityNameCard.textContent.slice(0, -1).trim();
    // clear all content in article tag
    (0,_uiView__WEBPACK_IMPORTED_MODULE_1__.clearView)();
    // show loader
    (0,_uiView__WEBPACK_IMPORTED_MODULE_1__.loaderView)();
    if (e.target.textContent === "C") {
      (0,_getApi__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName, "imperial");
    } else {
      (0,_getApi__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName, "metric");
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allEventListeners);


/***/ }),

/***/ "./src/getApi.js":
/*!***********************!*\
  !*** ./src/getApi.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _uiView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiView */ "./src/uiView.js");


// change to also accept type of temperature units
const getWeatherData = async function (country, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=49b1ffc7c1a6bf06784254cac84864a9&units=${units}`,
      { mode: "cors" }
    );
    const getData = await response.json();
    if (getData.cod === "404") {
      throw Error("Country cannot be found");
    }
    return getData;
  } catch (error) {
    (0,_uiView__WEBPACK_IMPORTED_MODULE_0__.errorView)();
  }
};

const convertDataToObject = async function (country, unit) {
  const locationWeatherData = await getWeatherData(country, unit);
  const data = locationWeatherData;
  if (data !== undefined) {
    (0,_uiView__WEBPACK_IMPORTED_MODULE_0__.cardView)(data, unit);
  } else {
    (0,_uiView__WEBPACK_IMPORTED_MODULE_0__.clearView)();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertDataToObject);


/***/ }),

/***/ "./src/loadImages.js":
/*!***************************!*\
  !*** ./src/loadImages.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_github_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/github.png */ "./src/icons/github.png");
/* harmony import */ var _icons_search_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/search.png */ "./src/icons/search.png");



const loadImages = function () {
  const footerIcon = document.querySelector(".contact-github-icon");
  footerIcon.src = _icons_github_png__WEBPACK_IMPORTED_MODULE_0__;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImages);


/***/ }),

/***/ "./src/uiView.js":
/*!***********************!*\
  !*** ./src/uiView.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardView": () => (/* binding */ cardView),
/* harmony export */   "clearView": () => (/* binding */ clearView),
/* harmony export */   "errorView": () => (/* binding */ errorView),
/* harmony export */   "loaderView": () => (/* binding */ loaderView)
/* harmony export */ });
const cardView = function (data, unit) {
  const container = document.querySelector("article");
  const error = document.querySelector(".error");
  error.classList.add("hide");
  // empty article container
  clearView();
  const html = `
      <div class="card card-container">
          <div class="left-side">
              <img class="card-image" src="http://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png" />
              <p class="weather">${data.weather[0].description}</p>
              <p class="city">${data.name},</p>
              <p class="country">${data.sys.country}</p>
          </div>
          <div class="right-side">
            <div class="top">
                <p class="temperature">${data.main.temp.toFixed(1)}&deg;</p>
                  <button class="temp-display">${
                    unit === "metric" ? "C" : "F"
                  }</button>
            </div>
          <div class="bottom">
              <h2>DETAILS</h2>
              <div class="details-container">
              <ul class="right">
                  <li>feels like</li>
                  <li>humidity</li>
                  <li>pressure</li>
                  <li>min temp</li>
                  <li>max temp</li>
                  <li>wind</li>
              </ul>
              <ul class="left">
                  <li>${data.main.feels_like.toFixed(1)}&deg;</li>
                  <li>${data.main.humidity}%</li>
                  <li>${data.main.pressure}hPa</li>
                  <li>${data.main.temp_min.toFixed(1)}&deg;</li>
                  <li>${data.main.temp_max.toFixed(1)}&deg;</li>
                  <li>${data.wind.speed}km/h</li>
              </ul>
            </div>
          </div>
          </div>
      </div>
      `;
  container.insertAdjacentHTML("beforeend", html);
};

const errorView = function () {
  const error = document.querySelector(".error");
  error.classList.remove("hide");
};

const loaderView = function () {
  const container = document.querySelector("article");
  const html = `
      <div class="loader load"></div>
    `;
  container.insertAdjacentHTML("beforeend", html);
};

const clearView = function () {
  const container = document.querySelector("article");
  container.textContent = "";
};



/***/ }),

/***/ "./src/icons/github.png":
/*!******************************!*\
  !*** ./src/icons/github.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e094d235b4caa7c31fc.png";

/***/ }),

/***/ "./src/icons/search.png":
/*!******************************!*\
  !*** ./src/icons/search.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0bb1ca1caeda3e30bcc.png";

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadImages */ "./src/loadImages.js");




(0,_eventListeners__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_loadImages__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map