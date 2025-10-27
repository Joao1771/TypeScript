/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a019-exercicio/form-control.ts":
/*!********************************************!*\
  !*** ./src/a019-exercicio/form-control.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const form = document.querySelector("#form");
// const button = document.querySelector("button")
// const inputs = Array.from(document.querySelectorAll("input"))
const formFields = Array.from(document.querySelectorAll(".form-fields"));
let motivoErro = "";
let input;
// pega o motivoErro e coloca nas spans correspondente e mostra
function erro(motivoErro, elemento) {
    let span = elemento.children[2]; // let span recebe span correspondente ao input
    elemento.classList.add('show-error-message');
    span.classList.add('show-error-message');
    if (span)
        span.innerHTML = motivoErro;
}
function verificar() {
    let senhas = [];
    for (let formField of formFields) { // para cada input
        if (formFields.indexOf(formField) === 4)
            continue; // pula o ultimo form-field do botao
        input = formField.children[1];
        if (!(input instanceof HTMLInputElement)) {
            console.error("O campo não é um HTMLInputElement válido.");
            continue; // Se não for um input válido, continua para o próximo campo
        }
        if (verificarVazio(input)) {
            motivoErro = `A caixa não pode ficar vazia.`;
            erro(motivoErro, formField);
        }
        else if (verificarCurto(input)) {
            motivoErro = `Menos de 5 caracteres`;
            erro(motivoErro, formField);
        }
        else if (verificarLongo(input)) {
            motivoErro = `Mais de 50 caracteres.`;
            erro(motivoErro, formField);
        }
        if (formFields.indexOf(formField) === 1) { // se o index do formField for 1 eh email
            if (verificarEmail(input)) {
            }
        }
        if (formFields.indexOf(formField) === 2) { // se o index do formField for 2 eh senha1
            if (input)
                senhas.push(input);
        }
        if (formFields.indexOf(formField) === 3) { // se o index do formField for 3 eh senha2
            if (input !== undefined) {
                senhas.push(input);
            }
        }
        if (senhas.length === 2) {
            if (senhas[0] !== undefined && senhas[1] !== undefined)
                verificarIguais(senhas[0], senhas[1]);
        }
    }
}
//verifica se o input esta vazio
function verificarVazio(elemento) {
    if (!elemento.value)
        return true;
    return false;
}
//verifica se eh maior q 50 caracteres
function verificarLongo(elemento) {
    if (elemento.value.length > 50)
        return true;
    return false;
}
//verifica se eh menor q 5 caracteres
function verificarCurto(elemento) {
    console.log(elemento);
    if (elemento.value.length < 5)
        return true;
    return false;
}
//verifica se senhas são iguais
function verificarIguais(senha1, senha2) {
    if (senha1.value != senha2.value) {
        return true;
    }
    return false;
}
//verifica email com o validator
function verificarEmail(elemento) {
    return false;
}
//remove as classes de erro
function tiraErro(elemento) {
    let span = elemento.children[2];
    elemento.classList.remove('show-error-message');
    span.classList.remove('show-error-message');
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    verificar();
    motivoErro = "";
});



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
/************************************************************************/
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
/* harmony import */ var _form_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-control */ "./src/a019-exercicio/form-control.ts");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map