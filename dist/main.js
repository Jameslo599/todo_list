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

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grid": () => (/* binding */ grid),
/* harmony export */   "makeSidebar": () => (/* binding */ makeSidebar)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const grid = document.getElementById('grid');

const makeSidebar = () => {
    let sidebar = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'div', id: 'sidenav', 
    className: 'sidenav'});
    grid.appendChild(sidebar);

    for (let i = 0; i <= 2; i++) {
    let sideItem = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'a', id: `project${i}`, 
    className: 'project', href: '#'});
    sidebar.appendChild(sideItem);
    };
    document.getElementById('project0').innerHTML = 'Inbox';
    document.getElementById('project1').innerHTML = 'Today';
    document.getElementById('project2').innerHTML = 'Projects';

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
    project = 'Never give up!'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    project
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
/* harmony export */   "makePile": () => (/* binding */ makePile),
/* harmony export */   "makeTitle": () => (/* binding */ makeTitle)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");



const makeTitle = () => {
    let title = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'h2', id: 'title', 
    className: 'title'});
    title.innerHTML = 'Inbox'
    _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.grid.appendChild(title);
}
const makePile = () => {
    let taskPile = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'div', id: 'pile', 
    className: 'pile'});
    _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.grid.appendChild(taskPile);

    let taskList = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'ul', id: 'list', 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'li', id: 'task', 
    className: 'task'});
    task.innerHTML = 'Add Task ';
    taskList.appendChild(task);

    let taskLink = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'a', href: '#'});
    task.appendChild(taskLink);

    let taskIcon = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'i', id: 'taskIcon', 
    className: 'fal fa-plus-circle'});
    taskLink.appendChild(taskIcon);
};



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
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");





//import addTask from './modal.js'

(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.makeTitle)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.makePile)();
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.makeSidebar)();
//addTask();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLXBpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEtBQUs7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQ3hCOztBQUVBLGdDQUFnQztBQUNoQyxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnVDOztBQUV2Qzs7QUFFQTtBQUNBLGtCQUFrQix1REFBVyxFQUFFO0FBQy9CLHlCQUF5QjtBQUN6Qjs7QUFFQSxtQkFBbUIsUUFBUTtBQUMzQixtQkFBbUIsdURBQVcsRUFBRSx5QkFBeUIsRUFBRTtBQUMzRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEtBQUs7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxROzs7Ozs7Ozs7Ozs7Ozs7OztBQ2R3QjtBQUNOOztBQUVqQztBQUNBLGdCQUFnQix1REFBVyxFQUFFO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVcsRUFBRTtBQUNoQyxzQkFBc0I7QUFDdEIsSUFBSSx5REFBZ0I7O0FBRXBCLG1CQUFtQix1REFBVyxFQUFFO0FBQ2hDLHNCQUFzQjtBQUN0Qjs7QUFFQSxlQUFlLHVEQUFXLEVBQUU7QUFDNUIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsbUJBQW1CLHVEQUFXLEVBQUUscUJBQXFCO0FBQ3JEOztBQUVBLG1CQUFtQix1REFBVyxFQUFFO0FBQ2hDLG9DQUFvQztBQUNwQztBQUNBOzs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNaO0FBQ0E7QUFDWTtBQUNWO0FBQ3hDOztBQUVBLHNEQUFVO0FBQ1Ysd0RBQVM7QUFDVCx1REFBUTtBQUNSLHdEQUFXO0FBQ1giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBtYWtlRWxlbWVudCA9ICh7XG4gICAgdHlwZSxcbiAgICBpZCA9ICcnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGhyZWYgPSAnJyxcbn0gPSB7fSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxubGV0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3VsJywgaWQ6ICduYXZiYXInLCBcbiAgICBjbGFzc05hbWU6ICduYXZiYXInfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgbGV0IG5hdkl0ZW1zID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnbGknLCBpZDogJ25hdicsIFxuICAgIGNsYXNzTmFtZTogJ25hdid9KTtcbiAgICBuYXZJdGVtcy5pbm5lckhUTUwgPSAnVG8tRG8gTGlzdCdcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xufTtcblxuZXhwb3J0IHttYWtlRWxlbWVudCwgbWFrZU5hdmJhcn07IiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5cbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpO1xuXG5jb25zdCBtYWtlU2lkZWJhciA9ICgpID0+IHtcbiAgICBsZXQgc2lkZWJhciA9IG1ha2VFbGVtZW50KHt0eXBlOiAnZGl2JywgaWQ6ICdzaWRlbmF2JywgXG4gICAgY2xhc3NOYW1lOiAnc2lkZW5hdid9KTtcbiAgICBncmlkLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgbGV0IHNpZGVJdGVtID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdhJywgaWQ6IGBwcm9qZWN0JHtpfWAsIFxuICAgIGNsYXNzTmFtZTogJ3Byb2plY3QnLCBocmVmOiAnIyd9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGVJdGVtKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0MCcpLmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QxJykuaW5uZXJIVE1MID0gJ1RvZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDInKS5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG59O1xuXG5leHBvcnQge2dyaWQsIG1ha2VTaWRlYmFyfSIsImNvbnN0IG1ha2VUYXNrID0gKHtcbiAgICB0aXRsZSA9ICdHcmluZCcsXG4gICAgZGVzY3JpcHRpb24gPSAnTWFrZSBteSBkcmVhbXMgY29tZSB0cnVlJyxcbiAgICBkdWVEYXRlID0gJ05vIGR1ZSBkYXRlJyxcbiAgICBwcmlvcml0eSA9ICdQcmlvcml0eSAxJyxcbiAgICBwcm9qZWN0ID0gJ05ldmVyIGdpdmUgdXAhJ1xufSA9IHt9KSA9PiAoe1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VUYXNrIiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5pbXBvcnQge2dyaWR9IGZyb20gJy4vc2lkZWJhci5qcydcblxuY29uc3QgbWFrZVRpdGxlID0gKCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaDInLCBpZDogJ3RpdGxlJywgXG4gICAgY2xhc3NOYW1lOiAndGl0bGUnfSk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ0luYm94J1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuY29uc3QgbWFrZVBpbGUgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tQaWxlID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ3BpbGUnLCBcbiAgICBjbGFzc05hbWU6ICdwaWxlJ30pO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQodGFza1BpbGUpO1xuXG4gICAgbGV0IHRhc2tMaXN0ID0gbWFrZUVsZW1lbnQoe3R5cGU6ICd1bCcsIGlkOiAnbGlzdCcsIFxuICAgIGNsYXNzTmFtZTogJ2xpc3QnfSk7XG4gICAgdGFza1BpbGUuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgIFxuICAgIGxldCB0YXNrID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdsaScsIGlkOiAndGFzaycsIFxuICAgIGNsYXNzTmFtZTogJ3Rhc2snfSk7XG4gICAgdGFzay5pbm5lckhUTUwgPSAnQWRkIFRhc2sgJztcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIGxldCB0YXNrTGluayA9IG1ha2VFbGVtZW50KHt0eXBlOiAnYScsIGhyZWY6ICcjJ30pO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0xpbmspO1xuXG4gICAgbGV0IHRhc2tJY29uID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdpJywgaWQ6ICd0YXNrSWNvbicsIFxuICAgIGNsYXNzTmFtZTogJ2ZhbCBmYS1wbHVzLWNpcmNsZSd9KTtcbiAgICB0YXNrTGluay5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG59O1xuXG5leHBvcnQge21ha2VQaWxlLCBtYWtlVGl0bGV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IG1ha2VUYXNrIGZyb20gJy4vdG9kby1pdGVtcy5qcydcbmltcG9ydCB7bWFrZU5hdmJhcn0gZnJvbSAnLi9oZWFkZXIuanMnXG5pbXBvcnQge21ha2VQaWxlLCBtYWtlVGl0bGV9IGZyb20gJy4vdG9kby1waWxlLmpzJ1xuaW1wb3J0IHttYWtlU2lkZWJhcn0gZnJvbSAnLi9zaWRlYmFyLmpzJ1xuLy9pbXBvcnQgYWRkVGFzayBmcm9tICcuL21vZGFsLmpzJ1xuXG5tYWtlTmF2YmFyKCk7XG5tYWtlVGl0bGUoKTtcbm1ha2VQaWxlKCk7XG5tYWtlU2lkZWJhcigpO1xuLy9hZGRUYXNrKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9