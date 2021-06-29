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

    let navLogo = makeElement({type: 'i', id: 'navLogo', 
    className: 'far fa-check-square'});
    navBar.appendChild(navLogo);

    let taskLink = makeElement({type: 'a', href: '#'});
    navBar.appendChild(taskLink);

    let addTask = makeElement({type: 'i', id: 'navTask', 
    className: 'fas fa-plus'});
    taskLink.appendChild(addTask);
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
    let navButton = document.getElementById('navTask');

    button.onclick = function() {
        modalContainer.style.display = "block";
    };

    navButton.onclick = function() {
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
/* harmony export */   "submitTask": () => (/* binding */ submitTask),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks)
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

let myTasks = [];

let loadTasks = () => {
    document.getElementById('submission').addEventListener('click', () => {
        let submission = makeTask({
            title: `${document.getElementById("titleInput").value}`,
            description: `${document.getElementById("descriptionInput").value}`,
            priority: `${document.getElementById("priorityInput").value}`,
        });
        myTasks.push(submission);
})};

let submitTask = () => {
    document.getElementById('submission').addEventListener('click', () => {
        for (let i = (myTasks.length-1); i < myTasks.length; i++) {
            let newTask = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({type: 'li', id: `createdTask${i}`, 
        className: 'createdTask'});
            let title = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'p', id: `title${i}`,
        className: 'property'});
            let description = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'p', id: `description${i}`,
        className: 'property'});
            let taskDate = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'p', id: `taskDate${i}`,
        className: 'property'});
            let taskPriority = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)({ type: 'p', id: `taskPriority${i}`,
        className: 'property'});
        
        document.getElementById('list').appendChild(newTask);

        document.getElementById(`createdTask${i}`).appendChild(title);
        document.getElementById(`title${i}`).innerHTML = `Title: ${myTasks[i].title}`;
        document.getElementById(`createdTask${i}`).appendChild(description);
        document.getElementById(`description${i}`).innerHTML = `Description: ${myTasks[i].description}`;
        document.getElementById(`createdTask${i}`).appendChild(taskDate);
        document.getElementById(`taskDate${i}`).innerHTML = `Date: ${document.getElementById("dateInput").value}`;
        document.getElementById(`createdTask${i}`).appendChild(taskPriority);
        document.getElementById(`taskPriority${i}`).innerHTML = `Priority: ${myTasks[i].priority}`;
        };
    });
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
(0,_todo_items_js__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();
(0,_todo_items_js__WEBPACK_IMPORTED_MODULE_0__.submitTask)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1waWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLHdCQUF3QjtBQUN4Qjs7QUFFQSxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CLHFDQUFxQztBQUNyQzs7QUFFQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEOztBQUVBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkN1Qzs7QUFFdkM7QUFDQSx5QkFBeUIsdURBQVcsRUFBRTtBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUEsa0JBQWtCLHVEQUFXLEVBQUU7QUFDL0IseUJBQXlCO0FBQ3pCOztBQUVBLGlCQUFpQix1REFB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O0FBQ1gsc0RBQVc7QUFDWCxrREFBTztBQUNQLHlEQUFTO0FBQ1QsMERBQVUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBtYWtlRWxlbWVudCA9ICh7XG4gICAgdHlwZSxcbiAgICBpZCA9ICcnLFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGhyZWYgPSAnJyxcbn0gPSB7fSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxubGV0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3VsJywgaWQ6ICduYXZiYXInLCBcbiAgICBjbGFzc05hbWU6ICduYXZiYXInfSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgbGV0IG5hdkl0ZW1zID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnbGknLCBpZDogJ25hdicsIFxuICAgIGNsYXNzTmFtZTogJ25hdid9KTtcbiAgICBuYXZJdGVtcy5pbm5lckhUTUwgPSAnVG8tRG8gTGlzdCdcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xuXG4gICAgbGV0IG5hdkxvZ28gPSBtYWtlRWxlbWVudCh7dHlwZTogJ2knLCBpZDogJ25hdkxvZ28nLCBcbiAgICBjbGFzc05hbWU6ICdmYXIgZmEtY2hlY2stc3F1YXJlJ30pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMb2dvKTtcblxuICAgIGxldCB0YXNrTGluayA9IG1ha2VFbGVtZW50KHt0eXBlOiAnYScsIGhyZWY6ICcjJ30pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZCh0YXNrTGluayk7XG5cbiAgICBsZXQgYWRkVGFzayA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaScsIGlkOiAnbmF2VGFzaycsIFxuICAgIGNsYXNzTmFtZTogJ2ZhcyBmYS1wbHVzJ30pO1xuICAgIHRhc2tMaW5rLmFwcGVuZENoaWxkKGFkZFRhc2spO1xufTtcblxuZXhwb3J0IHttYWtlRWxlbWVudCwgbWFrZU5hdmJhcn07IiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5cbmNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtb2RhbENvbnRhaW5lcicsIFxuICAgIGNsYXNzTmFtZTogJ21vZGFsQ29udGFpbmVyJ30pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgbGV0IG5ld1Rhc2sgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdmb3JtJywgaWQ6ICduZXdUYXNrJywgXG4gICAgY2xhc3NOYW1lOiAnbmV3VGFzayd9KTtcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgIGxldCBoZWFkZXIgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdoMicsIGlkOiAnbW9kYWxIZWFkZXInLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbEhlYWRlcid9KTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ05ldyBUYXNrJ1xuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGxldCBjbG9zZUxpbmsgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2EnLCBocmVmOiAnIyd9KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VMaW5rKTtcblxuICAgIGxldCBjbG9zZUljb24gPSBtYWtlRWxlbWVudCh7dHlwZTogJ2knLCBpZDogJ2Nsb3NlSWNvbicsIFxuICAgIGNsYXNzTmFtZTogJ2ZhcyBmYS10aW1lcyd9KTtcbiAgICBjbG9zZUxpbmsuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgIGxldCBib2R5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdtb2RhbEJvZHknLCBcbiAgICBjbGFzc05hbWU6ICdtb2RhbEJvZHknfSk7XG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChib2R5KTtcblxuICAgIGxldCB0aXRsZSA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnbW9kYWxUaXRsZScsIFxuICAgIGNsYXNzTmFtZTogJ2xlZnQtc2lkZSd9KTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgVGl0bGU6PGJyPmBcbiAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGxldCB0aXRsZUlucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnaW5wdXQnLCBpZDogJ3RpdGxlSW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGxldCBkYXRlID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdkYXRlJywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBkYXRlLmlubmVySFRNTCA9IGBEdWUgRGF0ZTo8YnI+YFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnaW5wdXQnLCBpZDogJ2RhdGVJbnB1dCcsIFxuICAgIGNsYXNzTmFtZTogJ2lucHV0J30pO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJ1xuICAgIGRhdGUuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnZGVzY3JpcHRpb24nLCBcbiAgICBjbGFzc05hbWU6ICdsZWZ0LXNpZGUnfSk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOjxicj5gXG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3RleHRhcmVhJywgaWQ6ICdkZXNjcmlwdGlvbklucHV0JywgXG4gICAgY2xhc3NOYW1lOiAnaW5wdXQnfSk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gJzYnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9ICcyMSc7XG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ3ByaW9yaXR5JywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6PGJyPmBcbiAgICBib2R5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnc2VsZWN0JywgaWQ6ICdwcmlvcml0eUlucHV0JywgXG4gICAgY2xhc3NOYW1lOiAnaW5wdXQnfSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgbGV0IGNob29zZVByaW9yaXR5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnb3B0aW9uJywgaWQ6IGBwcmlvcml0eSR7aX1gfSk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoY2hvb3NlUHJpb3JpdHkpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5MCcpLmlubmVySFRNTCA9ICdBU0FQJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eTEnKS5pbm5lckhUTUwgPSAnSGlnaCdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHkyJykuaW5uZXJIVE1MID0gJ01lZGl1bSdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHkzJykuaW5uZXJIVE1MID0gJ0xvdydcblxuICAgIGxldCBwcm9qZWN0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnZGl2JywgaWQ6ICdwcm9qZWN0JywgXG4gICAgY2xhc3NOYW1lOiAncmlnaHQtc2lkZSd9KTtcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IGBQcm9qZWN0Ojxicj5gXG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBsZXQgcHJvamVjdElucHV0ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnc2VsZWN0JywgaWQ6ICdwcm9qZWN0SW5wdXQnLCBcbiAgICBjbGFzc05hbWU6ICdpbnB1dCd9KTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxOyBpKyspIHtcbiAgICAgICAgbGV0IGNob29zZVByb2plY3QgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdvcHRpb24nLCBpZDogYHByb2plY3Qke2l9YH0pO1xuICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoY2hvb3NlUHJvamVjdCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDAnKS5pbm5lckhUTUwgPSAnSW5ib3gnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QxJykuaW5uZXJIVE1MID0gJ1Byb2plY3QnXG5cbiAgICBsZXQgYnV0dG9uSG9sZGVyTGVmdCA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2RpdicsIGlkOiAnYnV0dG9uSG9sZGVyJywgXG4gICAgY2xhc3NOYW1lOiAnbGVmdC1zaWRlJ30pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uSG9sZGVyTGVmdCk7XG5cbiAgICBsZXQgYnV0dG9uSG9sZGVyUmlnaHQgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdkaXYnLCBpZDogJ2J1dHRvbkhvbGRlcicsIFxuICAgIGNsYXNzTmFtZTogJ3JpZ2h0LXNpZGUnfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXJSaWdodCk7XG5cbiAgICBsZXQgY2FuY2VsID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAnYnV0dG9uJywgaWQ6ICdjYW5jZWwnLCBcbiAgICBjbGFzc05hbWU6ICdidXR0b24nfSk7XG4gICAgY2FuY2VsLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuICAgIGJ1dHRvbkhvbGRlclJpZ2h0LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBsZXQgc3VibWlzc2lvbiA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ2J1dHRvbicsIGlkOiAnc3VibWlzc2lvbicsIFxuICAgIGNsYXNzTmFtZTogJ2J1dHRvbid9KTtcbiAgICBzdWJtaXNzaW9uLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgYnV0dG9uSG9sZGVyUmlnaHQuYXBwZW5kQ2hpbGQoc3VibWlzc2lvbik7XG5cbiAgICByZXR1cm4ge21vZGFsQ29udGFpbmVyLCBjYW5jZWwsIGNsb3NlSWNvbiwgc3VibWlzc2lvbn07XG59O1xuXG5jb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCB7bW9kYWxDb250YWluZXIsIGNhbmNlbCwgY2xvc2VJY29ufSA9IGFkZFRhc2soKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrSWNvblwiKTtcbiAgICBsZXQgbmF2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlRhc2snKTtcblxuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfTtcblxuICAgIG5hdkJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfTtcblxuICAgIGNhbmNlbC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgY2xvc2VJY29uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuXG5cbmV4cG9ydCB7YWRkVGFzaywgdG9nZ2xlTW9kYWx9IiwiaW1wb3J0IHttYWtlRWxlbWVudH0gZnJvbSAnLi9oZWFkZXIuanMnXG5cbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZCcpO1xuXG5jb25zdCBtYWtlU2lkZWJhciA9ICgpID0+IHtcbiAgICBsZXQgc2lkZWJhciA9IG1ha2VFbGVtZW50KHt0eXBlOiAnZGl2JywgaWQ6ICdzaWRlbmF2JywgXG4gICAgY2xhc3NOYW1lOiAnc2lkZW5hdid9KTtcbiAgICBncmlkLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgbGV0IHNpZGVJdGVtID0gbWFrZUVsZW1lbnQoe3R5cGU6ICdhJywgaWQ6IGBwcm9qZWN0JHtpfWAsIFxuICAgIGNsYXNzTmFtZTogJ3Byb2plY3QnLCBocmVmOiAnIyd9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGVJdGVtKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0MCcpLmlubmVySFRNTCA9ICdJbmJveCc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QxJykuaW5uZXJIVE1MID0gJ1RvZGF5JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdDInKS5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuXG59O1xuXG5leHBvcnQge2dyaWQsIG1ha2VTaWRlYmFyfSIsImltcG9ydCB7bWFrZUVsZW1lbnR9IGZyb20gJy4vaGVhZGVyLmpzJ1xuXG5jb25zdCBtYWtlVGFzayA9ICh7XG4gICAgdGl0bGUgPSAnR3JpbmQnLFxuICAgIGRlc2NyaXB0aW9uID0gJ01ha2UgbXkgZHJlYW1zIGNvbWUgdHJ1ZScsXG4gICAgZHVlRGF0ZSA9ICdObyBkdWUgZGF0ZScsXG4gICAgcHJpb3JpdHkgPSAnQVNBUCcsXG4gICAgcHJvamVjdCA9ICdOZXZlciBnaXZlIHVwISdcbn0gPSB7fSkgPT4gKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3Rcbn0pO1xuXG5sZXQgbXlUYXNrcyA9IFtdO1xuXG5sZXQgbG9hZFRhc2tzID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXNzaW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBzdWJtaXNzaW9uID0gbWFrZVRhc2soe1xuICAgICAgICAgICAgdGl0bGU6IGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZX1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbnB1dFwiKS52YWx1ZX1gLFxuICAgICAgICAgICAgcHJpb3JpdHk6IGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlJbnB1dFwiKS52YWx1ZX1gLFxuICAgICAgICB9KTtcbiAgICAgICAgbXlUYXNrcy5wdXNoKHN1Ym1pc3Npb24pO1xufSl9O1xuXG5sZXQgc3VibWl0VGFzayA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWlzc2lvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gKG15VGFza3MubGVuZ3RoLTEpOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2xpJywgaWQ6IGBjcmVhdGVkVGFzayR7aX1gLCBcbiAgICAgICAgY2xhc3NOYW1lOiAnY3JlYXRlZFRhc2snfSk7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBtYWtlRWxlbWVudCh7IHR5cGU6ICdwJywgaWQ6IGB0aXRsZSR7aX1gLFxuICAgICAgICBjbGFzc05hbWU6ICdwcm9wZXJ0eSd9KTtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KHsgdHlwZTogJ3AnLCBpZDogYGRlc2NyaXB0aW9uJHtpfWAsXG4gICAgICAgIGNsYXNzTmFtZTogJ3Byb3BlcnR5J30pO1xuICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAncCcsIGlkOiBgdGFza0RhdGUke2l9YCxcbiAgICAgICAgY2xhc3NOYW1lOiAncHJvcGVydHknfSk7XG4gICAgICAgICAgICBsZXQgdGFza1ByaW9yaXR5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiAncCcsIGlkOiBgdGFza1ByaW9yaXR5JHtpfWAsXG4gICAgICAgIGNsYXNzTmFtZTogJ3Byb3BlcnR5J30pO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKS5hcHBlbmRDaGlsZChuZXdUYXNrKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3JlYXRlZFRhc2ske2l9YCkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGUke2l9YCkuaW5uZXJIVE1MID0gYFRpdGxlOiAke215VGFza3NbaV0udGl0bGV9YDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpfWApLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uJHtpfWApLmlubmVySFRNTCA9IGBEZXNjcmlwdGlvbjogJHtteVRhc2tzW2ldLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aX1gKS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrRGF0ZSR7aX1gKS5pbm5lckhUTUwgPSBgRGF0ZTogJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZX1gO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3JlYXRlZFRhc2ske2l9YCkuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRhc2tQcmlvcml0eSR7aX1gKS5pbm5lckhUTUwgPSBgUHJpb3JpdHk6ICR7bXlUYXNrc1tpXS5wcmlvcml0eX1gO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHttYWtlVGFzaywgc3VibWl0VGFzaywgbG9hZFRhc2tzfSIsImltcG9ydCB7bWFrZUVsZW1lbnR9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IHtncmlkfSBmcm9tICcuL3NpZGViYXIuanMnXG5cbmNvbnN0IG1ha2VUaXRsZSA9ICgpID0+IHtcbiAgICBsZXQgdGl0bGUgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2gyJywgaWQ6ICd0aXRsZScsIFxuICAgIGNsYXNzTmFtZTogJ3RpdGxlJ30pO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdJbmJveCdcbiAgICBncmlkLmFwcGVuZENoaWxkKHRpdGxlKTtcbn1cbmNvbnN0IG1ha2VQaWxlID0gKCkgPT4ge1xuICAgIGxldCB0YXNrUGlsZSA9IG1ha2VFbGVtZW50KHt0eXBlOiAnZGl2JywgaWQ6ICdwaWxlJywgXG4gICAgY2xhc3NOYW1lOiAncGlsZSd9KTtcbiAgICBncmlkLmFwcGVuZENoaWxkKHRhc2tQaWxlKTtcblxuICAgIGxldCB0YXNrTGlzdCA9IG1ha2VFbGVtZW50KHt0eXBlOiAndWwnLCBpZDogJ2xpc3QnLCBcbiAgICBjbGFzc05hbWU6ICdsaXN0J30pO1xuICAgIHRhc2tQaWxlLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgICBcbiAgICBsZXQgdGFzayA9IG1ha2VFbGVtZW50KHt0eXBlOiAnbGknLCBpZDogJ3Rhc2snLCBcbiAgICBjbGFzc05hbWU6ICd0YXNrJ30pO1xuICAgIHRhc2suaW5uZXJIVE1MID0gJ0FkZCBUYXNrICc7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgICBsZXQgdGFza0xpbmsgPSBtYWtlRWxlbWVudCh7dHlwZTogJ2EnLCBocmVmOiAnIyd9KTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tMaW5rKTtcblxuICAgIGxldCB0YXNrSWNvbiA9IG1ha2VFbGVtZW50KHt0eXBlOiAnaScsIGlkOiAndGFza0ljb24nLCBcbiAgICBjbGFzc05hbWU6ICdmYWwgZmEtcGx1cy1jaXJjbGUnfSk7XG4gICAgdGFza0xpbmsuYXBwZW5kQ2hpbGQodGFza0ljb24pO1xufTtcblxuZXhwb3J0IHttYWtlUGlsZSwgbWFrZVRpdGxlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7c3VibWl0VGFzaywgbG9hZFRhc2tzfSBmcm9tICcuL3RvZG8taXRlbXMuanMnXG5pbXBvcnQge21ha2VOYXZiYXJ9IGZyb20gJy4vaGVhZGVyLmpzJ1xuaW1wb3J0IHttYWtlUGlsZSwgbWFrZVRpdGxlfSBmcm9tICcuL3RvZG8tcGlsZS5qcydcbmltcG9ydCB7bWFrZVNpZGViYXJ9IGZyb20gJy4vc2lkZWJhci5qcydcbmltcG9ydCB7YWRkVGFzaywgdG9nZ2xlTW9kYWx9IGZyb20gJy4vbW9kYWwuanMnXG5cbm1ha2VOYXZiYXIoKTtcbm1ha2VUaXRsZSgpO1xubWFrZVBpbGUoKTtcbm1ha2VTaWRlYmFyKCk7XG50b2dnbGVNb2RhbCgpO1xuYWRkVGFzaygpO1xubG9hZFRhc2tzKCk7XG5zdWJtaXRUYXNrKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9