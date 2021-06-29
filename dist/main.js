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
    document.getElementById('priority0').innerHTML = 'ASAP'
    document.getElementById('priority1').innerHTML = 'High'
    document.getElementById('priority2').innerHTML = 'Medium'
    document.getElementById('priority3').innerHTML = 'Low'

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

    return {modalContainer, cancel, closeIcon, submission};
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
/* harmony export */   "makeTask": () => (/* binding */ makeTask),
/* harmony export */   "submitTask": () => (/* binding */ submitTask)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const makeTask = ({
    title = 'Grind',
    description = 'Make my dreams come true',
    dueDate = 'No due date',
    priority = 'ASAP',
    project = 'Never give up!'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    project
});

let submitTask = () => {
    document.getElementById('submission').addEventListener('click', () => {
        let newTask = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'li', id: 'createdTask', 
        className: 'createdTask'});
        //task1.innerHTML = `${document.getElementById("titleInput").value}`;

        for (let i = 0; i <= 3; i++) {
            let property = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'p', id: `property${i}`,
        className: 'property'});
            newTask.appendChild(property);
        };
        document.getElementById('list').appendChild(newTask);
        
        document.getElementById('property0').innerHTML = 
        `Title: ${document.getElementById("titleInput").value}`
        document.getElementById('property1').innerHTML = 
        `Description: ${document.getElementById("descriptionInput").value}`
        document.getElementById('property2').innerHTML = 
        `Due Date:${document.getElementById("dateInput").value}`
        document.getElementById('property3').innerHTML = 
        `Priority: ${document.getElementById("priorityInput").value}`
        //document.getElementById('property4').innerHTML = 
        //`Location: ${document.getElementById("projectInput").value}`


        makeTask({
            title: `${document.getElementById("titleInput").value}`,
            description: `${document.getElementById("descriptionInput").value}`,
            dueDate: `${document.getElementById("dateInput").value}`,
            priority: `${document.getElementById("priorityInput").value}`,
            project: `${document.getElementById("projectInput").value}`,
        });});
};




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
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");







(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.makeTitle)();
(0,_todo_pile_js__WEBPACK_IMPORTED_MODULE_2__.makePile)();
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_3__.makeSidebar)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.toggleModal)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.addTask)();
(0,_todo_items_js__WEBPACK_IMPORTED_MODULE_0__.submitTask)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1waWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ1Qzs7QUFFdkM7QUFDQSx5QkFBeUIsdURBQVcsRUFBRTtBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUEsa0JBQWtCLHVEQUFXLEVBQUU7QUFDL0IseUJBQXlCO0FBQ3pCOztBQUVBLGlCQUFpQix1REFBVyxFQUFFO0FBQzlCLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBLG9CQUFvQix1REFBVyxFQUFFLHFCQUFxQjtBQUN0RDs7QUFFQSxvQkFBb0IsdURBQVcsRUFBRTtBQUNqQyw4QkFBOEI7QUFDOUI7O0FBRUEsZUFBZSx1REFBVyxFQUFFO0FBQzVCLDJCQUEyQjtBQUMzQjs7QUFFQSxnQkFBZ0IsdURBQVcsRUFBRTtBQUM3QiwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQSxxQkFBcUIsdURBQVcsRUFBRTtBQUNsQyx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQSxlQUFlLHVEQUFXLEVBQUU7QUFDNUIsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUEsb0JBQW9CLHVEQUFXLEVBQUU7QUFDakMsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUEsc0JBQXNCLHVEQUFXLEVBQUU7QUFDbkMsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUEsMkJBQTJCLHVEQUFXLEVBQUU7QUFDeEMsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdURBQVcsRUFBRTtBQUNoQyw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQSx3QkFBd0IsdURBQVcsRUFBRTtBQUNyQyx1QkFBdUI7QUFDdkI7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0IsNkJBQTZCLHVEQUFXLEVBQUUsZ0NBQWdDLEVBQUUsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVEQUFXLEVBQUU7QUFDL0IsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUEsdUJBQXVCLHVEQUFXLEVBQUU7QUFDcEMsdUJBQXVCO0FBQ3ZCOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCLDRCQUE0Qix1REFBVyxFQUFFLCtCQUErQixFQUFFLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLHVEQUFXLEVBQUU7QUFDeEMsMkJBQTJCO0FBQzNCOztBQUVBLDRCQUE0Qix1REFBVyxFQUFFO0FBQ3pDLDRCQUE0QjtBQUM1Qjs7QUFFQSxpQkFBaUIsdURBQVcsRUFBRTtBQUM5Qix3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSxxQkFBcUIsdURBQVcsRUFBRTtBQUNsQyx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxXQUFXLGtDQUFrQztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEl1Qzs7QUFFdkM7O0FBRUE7QUFDQSxrQkFBa0IsdURBQVcsRUFBRTtBQUMvQix5QkFBeUI7QUFDekI7O0FBRUEsbUJBQW1CLFFBQVE7QUFDM0IsbUJBQW1CLHVEQUFXLEVBQUUseUJBQXlCLEVBQUU7QUFDM0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsS0FBSztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQkFBc0IsdURBQVcsRUFBRTtBQUNuQyxpQ0FBaUM7QUFDakMsK0JBQStCLDRDQUE0Qzs7QUFFM0UsdUJBQXVCLFFBQVE7QUFDL0IsMkJBQTJCLHVEQUFXLEVBQUUsMkJBQTJCLEVBQUU7QUFDckUsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw0Q0FBNEM7QUFDOUQ7QUFDQSx3QkFBd0Isa0RBQWtEO0FBQzFFO0FBQ0Esb0JBQW9CLDJDQUEyQztBQUMvRDtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7QUFDQSx1QkFBdUIsOENBQThDOzs7QUFHckU7QUFDQSxzQkFBc0IsNENBQTRDO0FBQ2xFLDRCQUE0QixrREFBa0Q7QUFDOUUsd0JBQXdCLDJDQUEyQztBQUNuRSx5QkFBeUIsK0NBQStDO0FBQ3hFLHdCQUF3Qiw4Q0FBOEM7QUFDdEUsU0FBUyxHQUFHO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaER1QztBQUNOOztBQUVqQztBQUNBLGdCQUFnQix1REFBVyxFQUFFO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBLElBQUkseURBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVcsRUFBRTtBQUNoQyxzQkFBc0I7QUFDdEIsSUFBSSx5REFBZ0I7O0FBRXBCLG1CQUFtQix1REFBVyxFQUFFO0FBQ2hDLHNCQUFzQjtBQUN0Qjs7QUFFQSxlQUFlLHVEQUFXLEVBQUU7QUFDNUIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsbUJBQW1CLHVEQUFXLEVBQUUscUJBQXFCO0FBQ3JEOztBQUVBLG1CQUFtQix1REFBVyxFQUFFO0FBQ2hDLG9DQUFvQztBQUNwQztBQUNBOzs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDUjtBQUNKO0FBQ1k7QUFDVjtBQUNPOztBQUUvQyxzREFBVTtBQUNWLHdEQUFTO0FBQ1QsdURBQVE7QUFDUix3REFBVztBQUNYLHNEQUFXO0FBQ1gsa0RBQU87QUFDUCwwREFBVSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IG1ha2VFbGVtZW50ID0gKHtcbiAgICB0eXBlLFxuICAgIGlkID0gJycsXG4gICAgY2xhc3NOYW1lID0gJycsXG4gICAgaHJlZiA9ICcnLFxufSA9IHt9KSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5sZXQgbWFrZU5hdmJhciA9ICgpID0+IHtcbiAgICBsZXQgbmF2QmFyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAndWwnLCBpZDogJ25hdmJhcicsIFxuICAgIGNsYXNzTmFtZTogJ25hdmJhcid9KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBsZXQgbmF2SXRlbXMgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdsaScsIGlkOiAnbmF2JywgXG4gICAgY2xhc3NOYW1lOiAnbmF2J30pO1xuICAgIG5hdkl0ZW1zLmlubmVySFRNTCA9ICdUby1EbyBMaXN0J1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZJdGVtcyk7XG59O1xuXG5leHBvcnQge21ha2VFbGVtZW50LCBtYWtlTmF2YmFyfTsiLCJpbXBvcnQge21ha2VFbGVtZW50fSBmcm9tICcuL2hlYWRlci5qcydcblxuY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ21vZGFsQ29udGFpbmVyJywgXG4gICAgY2xhc3NOYW1lOiAnbW9kYWxDb250YWluZXInfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICBsZXQgbmV3VGFzayA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2Zvcm0nLCBpZDogJ25ld1Rhc2snLCBcbiAgICBjbGFzc05hbWU6ICduZXdUYXNrJ30pO1xuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuXG4gICAgbGV0IGhlYWRlciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2gyJywgaWQ6ICdtb2RhbEhlYWRlcicsIFxuICAgIGNsYXNzTmFtZTogJ21vZGFsSGVhZGVyJ30pO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSAnTmV3IFRhc2snXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbGV0IGNsb3NlTGluayA9IG1ha2VFbGVtZW50KHt0eXBlOiAnYScsIGhyZWY6ICcjJ30pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUxpbmspO1xuXG4gICAgbGV0IGNsb3NlSWNvbiA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaScsIGlkOiAnY2xvc2VJY29uJywgXG4gICAgY2xhc3NOYW1lOiAnZmFzIGZhLXRpbWVzJ30pO1xuICAgIGNsb3NlTGluay5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgbGV0IGJvZHkgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ21vZGFsQm9keScsIFxuICAgIGNsYXNzTmFtZTogJ21vZGFsQm9keSd9KTtcbiAgICBuZXdUYXNrLmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gICAgbGV0IHRpdGxlID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtb2RhbFRpdGxlJywgXG4gICAgY2xhc3NOYW1lOiAnbGVmdC1zaWRlJ30pO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IGBUaXRsZTo8YnI+YFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdpbnB1dCcsIGlkOiAndGl0bGVJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgbGV0IGRhdGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2RhdGUnLCBcbiAgICBjbGFzc05hbWU6ICdyaWdodC1zaWRlJ30pO1xuICAgIGRhdGUuaW5uZXJIVE1MID0gYER1ZSBEYXRlOjxicj5gXG4gICAgYm9keS5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGxldCBkYXRlSW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdpbnB1dCcsIGlkOiAnZGF0ZUlucHV0JywgXG4gICAgY2xhc3NOYW1lOiAnaW5wdXQnfSk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXG4gICAgZGF0ZS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdkZXNjcmlwdGlvbicsIFxuICAgIGNsYXNzTmFtZTogJ2xlZnQtc2lkZSd9KTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246PGJyPmBcbiAgICBib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAndGV4dGFyZWEnLCBpZDogJ2Rlc2NyaXB0aW9uSW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSAnNic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gJzIxJztcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIGxldCBwcmlvcml0eSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAncHJpb3JpdHknLCBcbiAgICBjbGFzc05hbWU6ICdyaWdodC1zaWRlJ30pO1xuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IGBQcmlvcml0eTo8YnI+YFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdzZWxlY3QnLCBpZDogJ3ByaW9yaXR5SW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBsZXQgY2hvb3NlUHJpb3JpdHkgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdvcHRpb24nLCBpZDogYHByaW9yaXR5JHtpfWB9KTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChjaG9vc2VQcmlvcml0eSk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHkwJykuaW5uZXJIVE1MID0gJ0FTQVAnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5MScpLmlubmVySFRNTCA9ICdIaWdoJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eTInKS5pbm5lckhUTUwgPSAnTWVkaXVtJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eTMnKS5pbm5lckhUTUwgPSAnTG93J1xuXG4gICAgbGV0IHByb2plY3QgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ3Byb2plY3QnLCBcbiAgICBjbGFzc05hbWU6ICdyaWdodC1zaWRlJ30pO1xuICAgIHByb2plY3QuaW5uZXJIVE1MID0gYFByb2plY3Q6PGJyPmBcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdzZWxlY3QnLCBpZDogJ3Byb2plY3RJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDE7IGkrKykge1xuICAgICAgICBsZXQgY2hvb3NlUHJvamVjdCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ29wdGlvbicsIGlkOiBgcHJvamVjdCR7aX1gfSk7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChjaG9vc2VQcm9qZWN0KTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0MCcpLmlubmVySFRNTCA9ICdJbmJveCdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDEnKS5pbm5lckhUTUwgPSAnUHJvamVjdCdcblxuICAgIGxldCBidXR0b25Ib2xkZXJMZWZ0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdidXR0b25Ib2xkZXInLCBcbiAgICBjbGFzc05hbWU6ICdsZWZ0LXNpZGUnfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXJMZWZ0KTtcblxuICAgIGxldCBidXR0b25Ib2xkZXJSaWdodCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnYnV0dG9uSG9sZGVyJywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlclJpZ2h0KTtcblxuICAgIGxldCBjYW5jZWwgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdidXR0b24nLCBpZDogJ2NhbmNlbCcsIFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbid9KTtcbiAgICBjYW5jZWwuaW5uZXJIVE1MID0gJ0NhbmNlbCc7XG4gICAgYnV0dG9uSG9sZGVyUmlnaHQuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgIGxldCBzdWJtaXNzaW9uID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnYnV0dG9uJywgaWQ6ICdzdWJtaXNzaW9uJywgXG4gICAgY2xhc3NOYW1lOiAnYnV0dG9uJ30pO1xuICAgIHN1Ym1pc3Npb24uaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcbiAgICBidXR0b25Ib2xkZXJSaWdodC5hcHBlbmRDaGlsZChzdWJtaXNzaW9uKTtcblxuICAgIHJldHVybiB7bW9kYWxDb250YWluZXIsIGNhbmNlbCwgY2xvc2VJY29uLCBzdWJtaXNzaW9ufTtcbn07XG5cbmNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHttb2RhbENvbnRhaW5lciwgY2FuY2VsLCBjbG9zZUljb259ID0gYWRkVGFzaygpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tJY29uXCIpO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9O1xuXG4gICAgY2FuY2VsLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICBjbG9zZUljb24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfTtcblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbENvbnRhaW5lcikge1xuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5cblxuZXhwb3J0IHthZGRUYXNrLCB0b2dnbGVNb2RhbH0iLCJpbXBvcnQge21ha2VFbGVtZW50fSBmcm9tICcuL2hlYWRlci5qcydcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkJyk7XG5cbmNvbnN0IG1ha2VTaWRlYmFyID0gKCkgPT4ge1xuICAgIGxldCBzaWRlYmFyID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ3NpZGVuYXYnLCBcbiAgICBjbGFzc05hbWU6ICdzaWRlbmF2J30pO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAyOyBpKyspIHtcbiAgICBsZXQgc2lkZUl0ZW0gPSBtYWtlRWxlbWVudCh7dHlwZTogJ2EnLCBpZDogYHByb2plY3Qke2l9YCwgXG4gICAgY2xhc3NOYW1lOiAncHJvamVjdCcsIGhyZWY6ICcjJ30pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZUl0ZW0pO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QwJykuaW5uZXJIVE1MID0gJ0luYm94JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDEnKS5pbm5lckhUTUwgPSAnVG9kYXknO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0MicpLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XG5cbn07XG5cbmV4cG9ydCB7Z3JpZCwgbWFrZVNpZGViYXJ9IiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5cbmNvbnN0IG1ha2VUYXNrID0gKHtcbiAgICB0aXRsZSA9ICdHcmluZCcsXG4gICAgZGVzY3JpcHRpb24gPSAnTWFrZSBteSBkcmVhbXMgY29tZSB0cnVlJyxcbiAgICBkdWVEYXRlID0gJ05vIGR1ZSBkYXRlJyxcbiAgICBwcmlvcml0eSA9ICdBU0FQJyxcbiAgICBwcm9qZWN0ID0gJ05ldmVyIGdpdmUgdXAhJ1xufSA9IHt9KSA9PiAoe1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdFxufSk7XG5cbmxldCBzdWJtaXRUYXNrID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXNzaW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdsaScsIGlkOiAnY3JlYXRlZFRhc2snLCBcbiAgICAgICAgY2xhc3NOYW1lOiAnY3JlYXRlZFRhc2snfSk7XG4gICAgICAgIC8vdGFzazEuaW5uZXJIVE1MID0gYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlfWA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdwJywgaWQ6IGBwcm9wZXJ0eSR7aX1gLFxuICAgICAgICBjbGFzc05hbWU6ICdwcm9wZXJ0eSd9KTtcbiAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQocHJvcGVydHkpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpLmFwcGVuZENoaWxkKG5ld1Rhc2spO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5MCcpLmlubmVySFRNTCA9IFxuICAgICAgICBgVGl0bGU6ICR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlfWBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5MScpLmlubmVySFRNTCA9IFxuICAgICAgICBgRGVzY3JpcHRpb246ICR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbklucHV0XCIpLnZhbHVlfWBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5MicpLmlubmVySFRNTCA9IFxuICAgICAgICBgRHVlIERhdGU6JHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZX1gXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZXJ0eTMnKS5pbm5lckhUTUwgPSBcbiAgICAgICAgYFByaW9yaXR5OiAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlJbnB1dFwiKS52YWx1ZX1gXG4gICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnR5NCcpLmlubmVySFRNTCA9IFxuICAgICAgICAvL2BMb2NhdGlvbjogJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJbnB1dFwiKS52YWx1ZX1gXG5cblxuICAgICAgICBtYWtlVGFzayh7XG4gICAgICAgICAgICB0aXRsZTogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbklucHV0XCIpLnZhbHVlfWAsXG4gICAgICAgICAgICBkdWVEYXRlOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZX1gLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlJbnB1dFwiKS52YWx1ZX1gLFxuICAgICAgICAgICAgcHJvamVjdDogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIikudmFsdWV9YCxcbiAgICAgICAgfSk7fSk7XG59O1xuXG5cbmV4cG9ydCB7bWFrZVRhc2ssIHN1Ym1pdFRhc2t9IiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5pbXBvcnQge2dyaWR9IGZyb20gJy4vc2lkZWJhci5qcydcblxuY29uc3QgbWFrZVRpdGxlID0gKCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaDInLCBpZDogJ3RpdGxlJywgXG4gICAgY2xhc3NOYW1lOiAndGl0bGUnfSk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ0luYm94J1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuY29uc3QgbWFrZVBpbGUgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tQaWxlID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdkaXYnLCBpZDogJ3BpbGUnLCBcbiAgICBjbGFzc05hbWU6ICdwaWxlJ30pO1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQodGFza1BpbGUpO1xuXG4gICAgbGV0IHRhc2tMaXN0ID0gbWFrZUVsZW1lbnQoe3R5cGU6ICd1bCcsIGlkOiAnbGlzdCcsIFxuICAgIGNsYXNzTmFtZTogJ2xpc3QnfSk7XG4gICAgdGFza1BpbGUuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgIFxuICAgIGxldCB0YXNrID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdsaScsIGlkOiAndGFzaycsIFxuICAgIGNsYXNzTmFtZTogJ3Rhc2snfSk7XG4gICAgdGFzay5pbm5lckhUTUwgPSAnQWRkIFRhc2sgJztcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIGxldCB0YXNrTGluayA9IG1ha2VFbGVtZW50KHt0eXBlOiAnYScsIGhyZWY6ICcjJ30pO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0xpbmspO1xuXG4gICAgbGV0IHRhc2tJY29uID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdpJywgaWQ6ICd0YXNrSWNvbicsIFxuICAgIGNsYXNzTmFtZTogJ2ZhbCBmYS1wbHVzLWNpcmNsZSd9KTtcbiAgICB0YXNrTGluay5hcHBlbmRDaGlsZCh0YXNrSWNvbik7XG59O1xuXG5leHBvcnQge21ha2VQaWxlLCBtYWtlVGl0bGV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHtzdWJtaXRUYXNrfSBmcm9tICcuL3RvZG8taXRlbXMuanMnXG5pbXBvcnQge21ha2VOYXZiYXJ9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IHttYWtlUGlsZSwgbWFrZVRpdGxlfSBmcm9tICcuL3RvZG8tcGlsZS5qcydcbmltcG9ydCB7bWFrZVNpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcbmltcG9ydCB7YWRkVGFzaywgdG9nZ2xlTW9kYWx9IGZyb20gJy4vbW9kYWwuanMnXG5cbm1ha2VOYXZiYXIoKTtcbm1ha2VUaXRsZSgpO1xubWFrZVBpbGUoKTtcbm1ha2VTaWRlYmFyKCk7XG50b2dnbGVNb2RhbCgpO1xuYWRkVGFzaygpO1xuc3VibWl0VGFzaygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==