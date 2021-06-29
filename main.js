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
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "toggleModal": () => (/* binding */ toggleModal)
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

    let closeLink = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'a', href: '#'});
    header.appendChild(closeLink);

    let closeIcon = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'i', id: 'closeIcon', 
    className: 'fas fa-times'});
    closeLink.appendChild(closeIcon);

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

    return {modalContainer, cancel, closeIcon};
};


const toggleModal = () => {
    const {modalContainer, cancel, closeIcon} = addTask();
    let button = document.getElementById("taskIcon");

    button.onclick = function() {
        modalContainer.style.display = "block";
    };

    cancel.onclick = function() {
        modalContainer.style.display = "none";
    };

    closeIcon.onclick = function() {
        modalContainer.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
        };
    };
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

    //let task1 = makeElement({type: 'li', id: 'task', 
    //className: 'task'});
    //task1.innerHTML = 'Add Task1 ';
    //taskList.prepend(task1);
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
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");







(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.makeTitle)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.makePile)();
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.makeSidebar)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.toggleModal)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.addTask)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1waWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ1Qzs7QUFFdkM7QUFDQSx5QkFBeUIsdURBQVcsRUFBRTtBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUEsa0JBQWtCLHVEQUFXLEVBQUU7QUFDL0IseUJBQXlCO0FBQ3pCOztBQUVBLGlCQUFpQix1REFBVyxFQUFFO0FBQzlCLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBLG9CQUFvQix1REFBVyxFQUFFLHFCQUFxQjtBQUN0RDs7QUFFQSxvQkFBb0IsdURBQVcsRUFB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Q0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDWjtBQUNBO0FBQ1k7QUFDVjtBQUNPOztBQUUvQyxzREFBVTtBQUNWLHdEQUFTO0FBQ1QsdURBQVE7QUFDUix3REFBVztBQUNYLHNEQUFXO0FBQ1gsa0RBQU8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBtYWtlRWxlbWVudCA9ICh7XG4gICAgdHlwZSxcbiAgICBpZCA9ICcnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGhyZWYgPSAnJyxcbn0gPSB7fSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxubGV0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3VsJywgaWQ6ICduYXZiYXInLCBcbiAgICBjbGFzc05hbWU6ICduYXZiYXInfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgbGV0IG5hdkl0ZW1zID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnbGknLCBpZDogJ25hdicsIFxuICAgIGNsYXNzTmFtZTogJ25hdid9KTtcbiAgICBuYXZJdGVtcy5pbm5lckhUTUwgPSAnVG8tRG8gTGlzdCdcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xufTtcblxuZXhwb3J0IHttYWtlRWxlbWVudCwgbWFrZU5hdmJhcn07IiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtb2RhbENvbnRhaW5lcicsIFxuICAgIGNsYXNzTmFtZTogJ21vZGFsQ29udGFpbmVyJ30pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgbGV0IG5ld1Rhc2sgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdmb3JtJywgaWQ6ICduZXdUYXNrJywgXG4gICAgY2xhc3NOYW1lOiAnbmV3VGFzayd9KTtcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIGxldCBoZWFkZXIgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdoMicsIGlkOiAnbW9kYWxIZWFkZXInLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbEhlYWRlcid9KTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ05ldyBUYXNrJ1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGxldCBjbG9zZUxpbmsgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2EnLCBocmVmOiAnIyd9KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VMaW5rKTtcblxuICAgIGxldCBjbG9zZUljb24gPSBtYWtlRWxlbWVudCh7dHlwZTogJ2knLCBpZDogJ2Nsb3NlSWNvbicsIFxuICAgIGNsYXNzTmFtZTogJ2ZhcyBmYS10aW1lcyd9KTtcbiAgICBjbG9zZUxpbmsuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgIGxldCBib2R5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtb2RhbEJvZHknLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbEJvZHknfSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChib2R5KTtcblxuICAgIGxldCB0aXRsZSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnbW9kYWxUaXRsZScsIFxuICAgIGNsYXNzTmFtZTogJ2xlZnQtc2lkZSd9KTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgVGl0bGU6PGJyPmBcbiAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGxldCB0aXRsZUlucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnaW5wdXQnLCBpZDogJ3RpdGxlSW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGxldCBkYXRlID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdkYXRlJywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBkYXRlLmlubmVySFRNTCA9IGBEdWUgRGF0ZTo8YnI+YFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnaW5wdXQnLCBpZDogJ2RhdGVJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJ1xuICAgIGRhdGUuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnZGVzY3JpcHRpb24nLCBcbiAgICBjbGFzc05hbWU6ICdsZWZ0LXNpZGUnfSk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOjxicj5gXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3RleHRhcmVhJywgaWQ6ICdkZXNjcmlwdGlvbklucHV0JywgXG4gICAgY2xhc3NOYW1lOiAnaW5wdXQnfSk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gJzYnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9ICcyMSc7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ3ByaW9yaXR5JywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6PGJyPmBcbiAgICBib2R5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnc2VsZWN0JywgaWQ6ICdwcmlvcml0eUlucHV0JywgXG4gICAgY2xhc3NOYW1lOiAnaW5wdXQnfSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgbGV0IGNob29zZVByaW9yaXR5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnb3B0aW9uJywgaWQ6IGBwcmlvcml0eSR7aX1gfSk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoY2hvb3NlUHJpb3JpdHkpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5MCcpLmlubmVySFRNTCA9ICdQcmlvcml0eSAxJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eTEnKS5pbm5lckhUTUwgPSAnUHJpb3JpdHkgMidcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHkyJykuaW5uZXJIVE1MID0gJ1ByaW9yaXR5IDMnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5MycpLmlubmVySFRNTCA9ICdQcmlvcml0eSA0J1xuXG4gICAgbGV0IHByb2plY3QgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ3Byb2plY3QnLCBcbiAgICBjbGFzc05hbWU6ICdyaWdodC1zaWRlJ30pO1xuICAgIHByb2plY3QuaW5uZXJIVE1MID0gYFByb2plY3Q6PGJyPmBcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdzZWxlY3QnLCBpZDogJ3Byb2plY3RJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDE7IGkrKykge1xuICAgICAgICBsZXQgY2hvb3NlUHJvamVjdCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ29wdGlvbicsIGlkOiBgcHJvamVjdCR7aX1gfSk7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChjaG9vc2VQcm9qZWN0KTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0MCcpLmlubmVySFRNTCA9ICdJbmJveCdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDEnKS5pbm5lckhUTUwgPSAnUHJvamVjdCdcblxuICAgIGxldCBidXR0b25Ib2xkZXJMZWZ0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdidXR0b25Ib2xkZXInLCBcbiAgICBjbGFzc05hbWU6ICdsZWZ0LXNpZGUnfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXJMZWZ0KTtcblxuICAgIGxldCBidXR0b25Ib2xkZXJSaWdodCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnYnV0dG9uSG9sZGVyJywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlclJpZ2h0KTtcblxuICAgIGxldCBjYW5jZWwgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdidXR0b24nLCBpZDogJ2NhbmNlbCcsIFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbid9KTtcbiAgICBjYW5jZWwuaW5uZXJIVE1MID0gJ0NhbmNlbCc7XG4gICAgYnV0dG9uSG9sZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgIGxldCBzdWJtaXNzaW9uID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnYnV0dG9uJywgaWQ6ICdzdWJtaXNzaW9uJywgXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uJ30pO1xuICAgIHN1Ym1pc3Npb24uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcbiAgICBidXR0b25Ib2xkZXJSaWdodC5hcHBlbmRDaGlsZChzdWJtaXNzaW9uKTtcblxuICAgIHJldHVybiB7bW9kYWxDb250YWluZXIsIGNhbmNlbCwgY2xvc2VJY29ufTtcbn07XG5cblxuY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qge21vZGFsQ29udGFpbmVyLCBjYW5jZWwsIGNsb3NlSWNvbn0gPSBhZGRUYXNrKCk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0ljb25cIik7XG5cbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH07XG5cbiAgICBjYW5jZWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIGNsb3NlSWNvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cblxuXG5leHBvcnQgeyBhZGRUYXNrLCB0b2dnbGVNb2RhbH0iLCJpbXBvcnQge21ha2VFbGVtZW50fSBmcm9tICcuL2hlYWRlci5qcydcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkJyk7XG5cbmNvbnN0IG1ha2VTaWRlYmFyID0gKCkgPT4ge1xuICAgIGxldCBzaWRlYmFyID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ3NpZGVuYXYnLCBcbiAgICBjbGFzc05hbWU6ICdzaWRlbmF2J30pO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcbiAgICBsZXQgc2lkZUl0ZW0gPSBtYWtlRWxlbWVudCh7dHlwZTogJ2EnLCBpZDogYHByb2plY3Qke2l9YCwgXG4gICAgY2xhc3NOYW1lOiAncHJvamVjdCcsIGhyZWY6ICcjJ30pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZUl0ZW0pO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QwJykuaW5uZXJIVE1MID0gJ0luYm94JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDEnKS5pbm5lckhUTUwgPSAnVG9kYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0MicpLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XG5cbn07XG5cbmV4cG9ydCB7Z3JpZCwgbWFrZVNpZGViYXJ9IiwiY29uc3QgbWFrZVRhc2sgPSAoe1xuICAgIHRpdGxlID0gJ0dyaW5kJyxcbiAgICBkZXNjcmlwdGlvbiA9ICdNYWtlIG15IGRyZWFtcyBjb21lIHRydWUnLFxuICAgIGR1ZURhdGUgPSAnTm8gZHVlIGRhdGUnLFxuICAgIHByaW9yaXR5ID0gJ1ByaW9yaXR5IDEnLFxuICAgIHByb2plY3QgPSAnTmV2ZXIgZ2l2ZSB1cCEnXG59ID0ge30pID0+ICh7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVRhc2siLCJpbXBvcnQge21ha2VFbGVtZW50fSBmcm9tICcuL2hlYWRlci5qcydcbmltcG9ydCB7Z3JpZH0gZnJvbSAnLi9zaWRlYmFyLmpzJ1xuXG5jb25zdCBtYWtlVGl0bGUgPSAoKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdoMicsIGlkOiAndGl0bGUnLCBcbiAgICBjbGFzc05hbWU6ICd0aXRsZSd9KTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnSW5ib3gnXG4gICAgZ3JpZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG59XG5jb25zdCBtYWtlUGlsZSA9ICgpID0+IHtcbiAgICBsZXQgdGFza1BpbGUgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2RpdicsIGlkOiAncGlsZScsIFxuICAgIGNsYXNzTmFtZTogJ3BpbGUnfSk7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZCh0YXNrUGlsZSk7XG5cbiAgICBsZXQgdGFza0xpc3QgPSBtYWtlRWxlbWVudCh7dHlwZTogJ3VsJywgaWQ6ICdsaXN0JywgXG4gICAgY2xhc3NOYW1lOiAnbGlzdCd9KTtcbiAgICB0YXNrUGlsZS5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gICAgXG4gICAgbGV0IHRhc2sgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2xpJywgaWQ6ICd0YXNrJywgXG4gICAgY2xhc3NOYW1lOiAndGFzayd9KTtcbiAgICB0YXNrLmlubmVySFRNTCA9ICdBZGQgVGFzayAnO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2spO1xuXG4gICAgbGV0IHRhc2tMaW5rID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdhJywgaHJlZjogJyMnfSk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTGluayk7XG5cbiAgICBsZXQgdGFza0ljb24gPSBtYWtlRWxlbWVudCh7dHlwZTogJ2knLCBpZDogJ3Rhc2tJY29uJywgXG4gICAgY2xhc3NOYW1lOiAnZmFsIGZhLXBsdXMtY2lyY2xlJ30pO1xuICAgIHRhc2tMaW5rLmFwcGVuZENoaWxkKHRhc2tJY29uKTtcblxuICAgIC8vbGV0IHRhc2sxID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdsaScsIGlkOiAndGFzaycsIFxuICAgIC8vY2xhc3NOYW1lOiAndGFzayd9KTtcbiAgICAvL3Rhc2sxLmlubmVySFRNTCA9ICdBZGQgVGFzazEgJztcbiAgICAvL3Rhc2tMaXN0LnByZXBlbmQodGFzazEpO1xufTtcblxuZXhwb3J0IHttYWtlUGlsZSwgbWFrZVRpdGxlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCBtYWtlVGFzayBmcm9tICcuL3RvZG8taXRlbXMuanMnXG5pbXBvcnQge21ha2VOYXZiYXJ9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IHttYWtlUGlsZSwgbWFrZVRpdGxlfSBmcm9tICcuL3RvZG8tcGlsZS5qcydcbmltcG9ydCB7bWFrZVNpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcbmltcG9ydCB7YWRkVGFzaywgdG9nZ2xlTW9kYWx9IGZyb20gJy4vbW9kYWwuanMnXG5cbm1ha2VOYXZiYXIoKTtcbm1ha2VUaXRsZSgpO1xubWFrZVBpbGUoKTtcbm1ha2VTaWRlYmFyKCk7XG50b2dnbGVNb2RhbCgpO1xuYWRkVGFzaygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==