/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "makeNavbar": () => (/* binding */ makeNavbar)
/* harmony export */ });
const content = document.getElementById('content');

const makeElement = ({
    type,
    id = '',
    className = '',
} = {}) => {
    let element = document.createElement(type);
    element.setAttribute('id', id);
    element.setAttribute('class', className);
    return element;
};

let makeNavbar = () => {
    let navBar = makeElement({ type: 'ul', id: 'navbar', 
    className: 'navbar'});
    content.appendChild(navBar);

    let navItems = makeElement({ type: 'li', id: 'nav', 
    className: 'nav'});
    navItems.innerHTML = 'To-Do List'
    navBar.appendChild(navItems);
};



/***/ }),

/***/ "./src/todo-items.js":
/*!***************************!*\
  !*** ./src/todo-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeTask = ({
    title = 'Grind',
    description = 'Make my dreams come true',
    dueDate = 'No due date',
    priority = 'Priority 1',
    comment = 'Never give up!'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    comment
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeTask);

/***/ }),

/***/ "./src/todo-pile.js":
/*!**************************!*\
  !*** ./src/todo-pile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const makePile = () => {
    let taskPile = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'div', id: 'pile', 
    className: 'pile'});
    content.appendChild(taskPile);

    let taskList = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'ul', id: 'list', 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'li', id: 'task', 
    className: 'task'});
    task.innerHTML = 'james'
    taskList.appendChild(task);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makePile);

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items.js */ "./src/todo-items.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _todo_pile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-pile.js */ "./src/todo-pile.js");





(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.default)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLXBpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEI7O0FBRUEsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUTs7Ozs7Ozs7Ozs7Ozs7O0FDZHdCOztBQUV2QztBQUNBLG1CQUFtQix1REFBVyxFQUFFO0FBQ2hDLHNCQUFzQjtBQUN0Qjs7QUFFQSxtQkFBbUIsdURBQVcsRUFBRTtBQUNoQyxzQkFBc0I7QUFDdEI7O0FBRUEsZUFBZSx1REFBVyxFQUFFO0FBQzVCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUTs7Ozs7O1VDakJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDWjtBQUNBO0FBQ0Q7O0FBRXJDLHNEQUFVO0FBQ1Ysc0RBQVEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBtYWtlRWxlbWVudCA9ICh7XG4gICAgdHlwZSxcbiAgICBpZCA9ICcnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxufSA9IHt9KSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxubGV0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3VsJywgaWQ6ICduYXZiYXInLCBcbiAgICBjbGFzc05hbWU6ICduYXZiYXInfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgbGV0IG5hdkl0ZW1zID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnbGknLCBpZDogJ25hdicsIFxuICAgIGNsYXNzTmFtZTogJ25hdid9KTtcbiAgICBuYXZJdGVtcy5pbm5lckhUTUwgPSAnVG8tRG8gTGlzdCdcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xufTtcblxuZXhwb3J0IHttYWtlRWxlbWVudCwgbWFrZU5hdmJhcn07IiwiY29uc3QgbWFrZVRhc2sgPSAoe1xuICAgIHRpdGxlID0gJ0dyaW5kJyxcbiAgICBkZXNjcmlwdGlvbiA9ICdNYWtlIG15IGRyZWFtcyBjb21lIHRydWUnLFxuICAgIGR1ZURhdGUgPSAnTm8gZHVlIGRhdGUnLFxuICAgIHByaW9yaXR5ID0gJ1ByaW9yaXR5IDEnLFxuICAgIGNvbW1lbnQgPSAnTmV2ZXIgZ2l2ZSB1cCEnXG59ID0ge30pID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjb21tZW50XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVRhc2siLCJpbXBvcnQge21ha2VFbGVtZW50fSBmcm9tICcuL2hlYWRlci5qcydcblxuY29uc3QgbWFrZVBpbGUgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tQaWxlID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ3BpbGUnLCBcbiAgICBjbGFzc05hbWU6ICdwaWxlJ30pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1BpbGUpO1xuXG4gICAgbGV0IHRhc2tMaXN0ID0gbWFrZUVsZW1lbnQoe3R5cGU6ICd1bCcsIGlkOiAnbGlzdCcsIFxuICAgIGNsYXNzTmFtZTogJ2xpc3QnfSk7XG4gICAgdGFza1BpbGUuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgIFxuICAgIGxldCB0YXNrID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdsaScsIGlkOiAndGFzaycsIFxuICAgIGNsYXNzTmFtZTogJ3Rhc2snfSk7XG4gICAgdGFzay5pbm5lckhUTUwgPSAnamFtZXMnXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUGlsZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBtYWtlVGFzayBmcm9tICcuL3RvZG8taXRlbXMuanMnXG5pbXBvcnQge21ha2VOYXZiYXJ9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IG1ha2VQaWxlIGZyb20gJy4vdG9kby1waWxlLmpzJ1xuXG5tYWtlTmF2YmFyKCk7XG5tYWtlUGlsZSgpO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9