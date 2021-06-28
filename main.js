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
    href = '',
} = {}) => {
    let element = document.createElement(type);
    element.setAttribute('id', id);
    element.setAttribute('class', className);
    element.setAttribute('href', href);
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

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const addTask = () => {
    let modalContainer = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'modalContainer', 
    className: 'modalContainer'});
    content.appendChild(modalContainer);

    let newTask = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'form', id: 'newTask', 
    className: 'newTask'});
    modalContainer.appendChild(newTask);

    let header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'h2', id: 'modalHeader', 
    className: 'modalHeader'});
    header.innerHTML = 'New Task'
    newTask.appendChild(header);

    let body = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'modalBody', 
    className: 'modalBody'});
    newTask.appendChild(body);

    let title = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'modalTitle', 
    className: 'modalTitle'});
    title.innerHTML = `Title:<br>`
    body.appendChild(title);

    let titleInput = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'input', id: 'titleInput', 
    className: 'titleInput'});
    title.type = 'text'
    title.appendChild(titleInput);

    let date = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'date', 
    className: 'date'});
    date.innerHTML = 'Due Date:'
    body.appendChild(date);
};

//
//let modal = document.getElementById("modalContainer");
//let button = document.getElementById("newBook");
//let span = document.getElementById("close");
//button.onclick = function() {
//    modal.style.display = "block";
//};
//span.onclick = function() {
//    modal.style.display = "none";
//};
//
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//        document.getElementById("author").value = "";
//        document.getElementById("title").value = "";
//        document.getElementById("pages").value = "";
//        checkBox.checked = false;
//    }
//}
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);

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
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
//import { formatDistance, subDays } from 'date-fns'
//import makeTask from './todo-items.js'
//import {makeNavbar} from './header.js'
//import {makePile, makeTitle} from './todo-pile.js'
//import {makeSidebar} from './sidebar.js'


//makeNavbar();
//makeTitle();
//makePile();
//makeSidebar();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBSztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEI7O0FBRUEsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ1Qzs7QUFFdkM7QUFDQSx5QkFBeUIsdURBQVcsRUFBRTtBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUEsa0JBQWtCLHVEQUFXLEVBQUU7QUFDL0IseUJBQXlCO0FBQ3pCOztBQUVBLGlCQUFpQix1REFBVyxFQUFFO0FBQzlCLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBLGVBQWUsdURBQVcsRUFBRTtBQUM1QiwyQkFBMkI7QUFDM0I7O0FBRUEsZ0JBQWdCLHVEQUFXLEVBQUU7QUFDN0IsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUEscUJBQXFCLHVEQUFXLEVBQUU7QUFDbEMsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUEsZUFBZSx1REFBVyxFQUFFO0FBQzVCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7OztVQzFEZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCLFVBQVUsb0JBQW9CO0FBQzlCLFVBQVUsWUFBWTtBQUNVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgbWFrZUVsZW1lbnQgPSAoe1xuICAgIHR5cGUsXG4gICAgaWQgPSAnJyxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgICBocmVmID0gJycsXG59ID0ge30pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmxldCBtYWtlTmF2YmFyID0gKCkgPT4ge1xuICAgIGxldCBuYXZCYXIgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICd1bCcsIGlkOiAnbmF2YmFyJywgXG4gICAgY2xhc3NOYW1lOiAnbmF2YmFyJ30pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIGxldCBuYXZJdGVtcyA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2xpJywgaWQ6ICduYXYnLCBcbiAgICBjbGFzc05hbWU6ICduYXYnfSk7XG4gICAgbmF2SXRlbXMuaW5uZXJIVE1MID0gJ1RvLURvIExpc3QnXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcbn07XG5cbmV4cG9ydCB7bWFrZUVsZW1lbnQsIG1ha2VOYXZiYXJ9OyIsImltcG9ydCB7bWFrZUVsZW1lbnR9IGZyb20gJy4vaGVhZGVyLmpzJ1xuXG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnbW9kYWxDb250YWluZXInLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbENvbnRhaW5lcid9KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGxldCBuZXdUYXNrID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZm9ybScsIGlkOiAnbmV3VGFzaycsIFxuICAgIGNsYXNzTmFtZTogJ25ld1Rhc2snfSk7XG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgICBsZXQgaGVhZGVyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnaDInLCBpZDogJ21vZGFsSGVhZGVyJywgXG4gICAgY2xhc3NOYW1lOiAnbW9kYWxIZWFkZXInfSk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdOZXcgVGFzaydcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBsZXQgYm9keSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnbW9kYWxCb2R5JywgXG4gICAgY2xhc3NOYW1lOiAnbW9kYWxCb2R5J30pO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBsZXQgdGl0bGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ21vZGFsVGl0bGUnLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbFRpdGxlJ30pO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaXRsZTo8YnI+YFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdpbnB1dCcsIGlkOiAndGl0bGVJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ3RpdGxlSW5wdXQnfSk7XG4gICAgdGl0bGUudHlwZSA9ICd0ZXh0J1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgbGV0IGRhdGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2RhdGUnLCBcbiAgICBjbGFzc05hbWU6ICdkYXRlJ30pO1xuICAgIGRhdGUuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlOidcbiAgICBib2R5LmFwcGVuZENoaWxkKGRhdGUpO1xufTtcblxuLy9cbi8vbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKTtcbi8vbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Qm9va1wiKTtcbi8vbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlXCIpO1xuLy9idXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vfTtcbi8vc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vL307XG4vL1xuLy93aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4vLyAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yXCIpLnZhbHVlID0gXCJcIjtcbi8vICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbi8vICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2VzXCIpLnZhbHVlID0gXCJcIjtcbi8vICAgICAgICBjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG4vLyAgICB9XG4vL31cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2siLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbi8vaW1wb3J0IG1ha2VUYXNrIGZyb20gJy4vdG9kby1pdGVtcy5qcydcbi8vaW1wb3J0IHttYWtlTmF2YmFyfSBmcm9tICcuL2hlYWRlci5qcydcbi8vaW1wb3J0IHttYWtlUGlsZSwgbWFrZVRpdGxlfSBmcm9tICcuL3RvZG8tcGlsZS5qcydcbi8vaW1wb3J0IHttYWtlU2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyLmpzJ1xuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9tb2RhbC5qcydcblxuLy9tYWtlTmF2YmFyKCk7XG4vL21ha2VUaXRsZSgpO1xuLy9tYWtlUGlsZSgpO1xuLy9tYWtlU2lkZWJhcigpO1xuYWRkVGFzaygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==