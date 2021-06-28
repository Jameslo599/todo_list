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
    className: 'left-side'});
    title.innerHTML = `Title:<br>`
    body.appendChild(title);

    let titleInput = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'input', id: 'titleInput', 
    className: 'input'});
    titleInput.type = 'text'
    title.appendChild(titleInput);

    let date = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'date', 
    className: 'right-side'});
    date.innerHTML = `Due Date:<br>`
    body.appendChild(date);

    let dateInput = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'input', id: 'dateInput', 
    className: 'input'});
    dateInput.type = 'datetime-local'
    date.appendChild(dateInput);

    let description = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'description', 
    className: 'left-side'});
    description.innerHTML = `Description:<br>`
    body.appendChild(description);

    let descriptionInput = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'textarea', id: 'descriptionInput', 
    className: 'input'});
    descriptionInput.rows = '6';
    descriptionInput.cols = '21';
    description.appendChild(descriptionInput);

    let priority = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'priority', 
    className: 'right-side'});
    priority.innerHTML = `Priority:<br>`
    body.appendChild(priority);

    let priorityInput = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'select', id: 'priorityInput', 
    className: 'input'});
    priority.appendChild(priorityInput);

    for (let i = 0; i <= 3; i++) {
        let choosePriority = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'option', id: `priority${i}`});
        priorityInput.appendChild(choosePriority);
    };
    document.getElementById('priority0').innerHTML = 'Priority 1'
    document.getElementById('priority1').innerHTML = 'Priority 2'
    document.getElementById('priority2').innerHTML = 'Priority 3'
    document.getElementById('priority3').innerHTML = 'Priority 4'

    let project = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'project', 
    className: 'right-side'});
    project.innerHTML = `Project:<br>`
    priority.appendChild(project);

    let projectInput = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'select', id: 'projectInput', 
    className: 'input'});
    project.appendChild(projectInput);

    for (let i = 0; i <= 1; i++) {
        let chooseProject = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'option', id: `project${i}`});
        projectInput.appendChild(chooseProject);
    };
    document.getElementById('project0').innerHTML = 'Inbox'
    document.getElementById('project1').innerHTML = 'Project'

    let buttonHolderLeft = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'buttonHolder', 
    className: 'left-side'});
    body.appendChild(buttonHolderLeft);

    let buttonHolderRight = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'div', id: 'buttonHolder', 
    className: 'right-side'});
    body.appendChild(buttonHolderRight);

    let cancel = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'button', id: 'cancel', 
    className: 'button'});
    cancel.innerHTML = 'Cancel';
    buttonHolderRight.appendChild(cancel);

    let submission = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'button', id: 'submission', 
    className: 'button'});
    submission.innerHTML = 'Add Task';
    buttonHolderRight.appendChild(submission);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBSztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEI7O0FBRUEsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ1Qzs7QUFFdkM7QUFDQSx5QkFBeUIsdURBQVcsRUFBRTtBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUEsa0JBQWtCLHVEQUFXLEVBQUU7QUFDL0IseUJBQXlCO0FBQ3pCOztBQUVBLGlCQUFpQix1REFBVyxFQUFFO0FBQzlCLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBLGVBQWUsdURBQVcsRUFBRTtBQUM1QiwyQkFBMkI7QUFDM0I7O0FBRUEsZ0JBQWdCLHVEQUFXLEVBQUU7QUFDN0IsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUEscUJBQXFCLHVEQUFXLEVBQUU7QUFDbEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUEsZUFBZSx1REFBVyxFQUFFO0FBQzVCLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBLG9CQUFvQix1REFBVyxFQUFFO0FBQ2pDLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBLHNCQUFzQix1REFBVyxFQUFFO0FBQ25DLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBLDJCQUEyQix1REFBVyxFQUFFO0FBQ3hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVEQUFXLEVBQUU7QUFDaEMsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUEsd0JBQXdCLHVEQUFXLEVBQUU7QUFDckMsdUJBQXVCO0FBQ3ZCOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCLDZCQUE2Qix1REFBVyxFQUFFLGdDQUFnQyxFQUFFLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix1REFBVyxFQUFFO0FBQy9CLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBLHVCQUF1Qix1REFBVyxFQUFFO0FBQ3BDLHVCQUF1QjtBQUN2Qjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQiw0QkFBNEIsdURBQVcsRUFBRSwrQkFBK0IsRUFBRSxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQix1REFBVyxFQUFFO0FBQ3hDLDJCQUEyQjtBQUMzQjs7QUFFQSw0QkFBNEIsdURBQVcsRUFBRTtBQUN6Qyw0QkFBNEI7QUFDNUI7O0FBRUEsaUJBQWlCLHVEQUFXLEVBQUU7QUFDOUIsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUEscUJBQXFCLHVEQUFXLEVBQUU7QUFDbEMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE87Ozs7OztVQy9IZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCLFVBQVUsb0JBQW9CO0FBQzlCLFVBQVUsWUFBWTtBQUNVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgbWFrZUVsZW1lbnQgPSAoe1xuICAgIHR5cGUsXG4gICAgaWQgPSAnJyxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgICBocmVmID0gJycsXG59ID0ge30pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmxldCBtYWtlTmF2YmFyID0gKCkgPT4ge1xuICAgIGxldCBuYXZCYXIgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICd1bCcsIGlkOiAnbmF2YmFyJywgXG4gICAgY2xhc3NOYW1lOiAnbmF2YmFyJ30pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIGxldCBuYXZJdGVtcyA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2xpJywgaWQ6ICduYXYnLCBcbiAgICBjbGFzc05hbWU6ICduYXYnfSk7XG4gICAgbmF2SXRlbXMuaW5uZXJIVE1MID0gJ1RvLURvIExpc3QnXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcbn07XG5cbmV4cG9ydCB7bWFrZUVsZW1lbnQsIG1ha2VOYXZiYXJ9OyIsImltcG9ydCB7bWFrZUVsZW1lbnR9IGZyb20gJy4vaGVhZGVyLmpzJ1xuXG5jb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnbW9kYWxDb250YWluZXInLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbENvbnRhaW5lcid9KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGxldCBuZXdUYXNrID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZm9ybScsIGlkOiAnbmV3VGFzaycsIFxuICAgIGNsYXNzTmFtZTogJ25ld1Rhc2snfSk7XG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5cbiAgICBsZXQgaGVhZGVyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnaDInLCBpZDogJ21vZGFsSGVhZGVyJywgXG4gICAgY2xhc3NOYW1lOiAnbW9kYWxIZWFkZXInfSk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdOZXcgVGFzaydcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBsZXQgYm9keSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnbW9kYWxCb2R5JywgXG4gICAgY2xhc3NOYW1lOiAnbW9kYWxCb2R5J30pO1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYm9keSk7XG5cbiAgICBsZXQgdGl0bGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ21vZGFsVGl0bGUnLCBcbiAgICBjbGFzc05hbWU6ICdsZWZ0LXNpZGUnfSk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gYFRpdGxlOjxicj5gXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgdGl0bGVJbnB1dCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2lucHV0JywgaWQ6ICd0aXRsZUlucHV0JywgXG4gICAgY2xhc3NOYW1lOiAnaW5wdXQnfSk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBsZXQgZGF0ZSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnZGF0ZScsIFxuICAgIGNsYXNzTmFtZTogJ3JpZ2h0LXNpZGUnfSk7XG4gICAgZGF0ZS5pbm5lckhUTUwgPSBgRHVlIERhdGU6PGJyPmBcbiAgICBib2R5LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgbGV0IGRhdGVJbnB1dCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2lucHV0JywgaWQ6ICdkYXRlSW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRldGltZS1sb2NhbCdcbiAgICBkYXRlLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2Rlc2NyaXB0aW9uJywgXG4gICAgY2xhc3NOYW1lOiAnbGVmdC1zaWRlJ30pO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGBEZXNjcmlwdGlvbjo8YnI+YFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICd0ZXh0YXJlYScsIGlkOiAnZGVzY3JpcHRpb25JbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9ICc2JztcbiAgICBkZXNjcmlwdGlvbklucHV0LmNvbHMgPSAnMjEnO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgbGV0IHByaW9yaXR5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdwcmlvcml0eScsIFxuICAgIGNsYXNzTmFtZTogJ3JpZ2h0LXNpZGUnfSk7XG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5Ojxicj5gXG4gICAgYm9keS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3NlbGVjdCcsIGlkOiAncHJpb3JpdHlJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgIGxldCBjaG9vc2VQcmlvcml0eSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ29wdGlvbicsIGlkOiBgcHJpb3JpdHkke2l9YH0pO1xuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGNob29zZVByaW9yaXR5KTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eTAnKS5pbm5lckhUTUwgPSAnUHJpb3JpdHkgMSdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHkxJykuaW5uZXJIVE1MID0gJ1ByaW9yaXR5IDInXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5MicpLmlubmVySFRNTCA9ICdQcmlvcml0eSAzJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eTMnKS5pbm5lckhUTUwgPSAnUHJpb3JpdHkgNCdcblxuICAgIGxldCBwcm9qZWN0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdwcm9qZWN0JywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IGBQcm9qZWN0Ojxicj5gXG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBsZXQgcHJvamVjdElucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnc2VsZWN0JywgaWQ6ICdwcm9qZWN0SW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxOyBpKyspIHtcbiAgICAgICAgbGV0IGNob29zZVByb2plY3QgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdvcHRpb24nLCBpZDogYHByb2plY3Qke2l9YH0pO1xuICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoY2hvb3NlUHJvamVjdCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDAnKS5pbm5lckhUTUwgPSAnSW5ib3gnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QxJykuaW5uZXJIVE1MID0gJ1Byb2plY3QnXG5cbiAgICBsZXQgYnV0dG9uSG9sZGVyTGVmdCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnYnV0dG9uSG9sZGVyJywgXG4gICAgY2xhc3NOYW1lOiAnbGVmdC1zaWRlJ30pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyTGVmdCk7XG5cbiAgICBsZXQgYnV0dG9uSG9sZGVyUmlnaHQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2J1dHRvbkhvbGRlcicsIFxuICAgIGNsYXNzTmFtZTogJ3JpZ2h0LXNpZGUnfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXJSaWdodCk7XG5cbiAgICBsZXQgY2FuY2VsID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnYnV0dG9uJywgaWQ6ICdjYW5jZWwnLCBcbiAgICBjbGFzc05hbWU6ICdidXR0b24nfSk7XG4gICAgY2FuY2VsLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuICAgIGJ1dHRvbkhvbGRlclJpZ2h0LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBsZXQgc3VibWlzc2lvbiA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2J1dHRvbicsIGlkOiAnc3VibWlzc2lvbicsIFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbid9KTtcbiAgICBzdWJtaXNzaW9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgYnV0dG9uSG9sZGVyUmlnaHQuYXBwZW5kQ2hpbGQoc3VibWlzc2lvbik7XG59O1xuXG5cbi8vXG4vL2xldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4vL2xldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0Jvb2tcIik7XG4vL2xldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcbi8vYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vL307XG4vL3NwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy99O1xuLy9cbi8vd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuLy8gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuLy8gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvclwiKS52YWx1ZSA9IFwiXCI7XG4vLyAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4vLyAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKS52YWx1ZSA9IFwiXCI7XG4vLyAgICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IGZhbHNlO1xuLy8gICAgfVxuLy99XG4vL1xuXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXG4vL2ltcG9ydCBtYWtlVGFzayBmcm9tICcuL3RvZG8taXRlbXMuanMnXG4vL2ltcG9ydCB7bWFrZU5hdmJhcn0gZnJvbSAnLi9oZWFkZXIuanMnXG4vL2ltcG9ydCB7bWFrZVBpbGUsIG1ha2VUaXRsZX0gZnJvbSAnLi90b2RvLXBpbGUuanMnXG4vL2ltcG9ydCB7bWFrZVNpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcbmltcG9ydCBhZGRUYXNrIGZyb20gJy4vbW9kYWwuanMnXG5cbi8vbWFrZU5hdmJhcigpO1xuLy9tYWtlVGl0bGUoKTtcbi8vbWFrZVBpbGUoKTtcbi8vbWFrZVNpZGViYXIoKTtcbmFkZFRhc2soKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=