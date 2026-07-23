/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a035-execicio-video/a035-execicio-video.ts"
/*!********************************************************!*\
  !*** ./src/a035-execicio-video/a035-execicio-video.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
class VideoPlayer {
    constructor(videoElements) {
        this.videoPlayer = videoElements.videoPlayer;
        this.botaoPlay = videoElements.botaoPlay;
        this.botaoStop = videoElements.botaoStop;
    }
    trocarBotao() {
        if (this.botaoPlay.innerText === "Play") {
            this.videoPlayer.play();
            this.botaoPlay.innerText = "Pause";
        }
        else {
            this.videoPlayer.pause();
            this.botaoPlay.innerText = "Play";
        }
    }
    parar() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.botaoPlay.innerText = 'Play';
    }
    iniciarEventos() {
        this.botaoPlay.addEventListener('click', () => this.trocarBotao());
        this.botaoStop.addEventListener('click', () => this.parar());
    }
}
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video"),
    botaoPlay: document.querySelector(".play"),
    botaoStop: document.querySelector(".stop")
});
videoPlayer.iniciarEventos();


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./src/a019-exercicio/a019-exercicio.ts ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a035_execicio_video_a035_execicio_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../a035-execicio-video/a035-execicio-video */ "./src/a035-execicio-video/a035-execicio-video.ts");
//import './form-control'


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map