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
/* harmony export */   "makeNavbar": () => (/* binding */ makeNavbar),
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");

var content = document.getElementById("content");

var makeNavbar = function makeNavbar() {
  var navBar = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "ul",
    id: "navbar",
    className: "navbar"
  });
  content.appendChild(navBar.element);
  var hamburgerLink = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "a",
    href: "#"
  });
  hamburgerLink.element.addEventListener("click", function () {
    document.getElementById("sidenav").classList.toggle("sidenav--active");

    if (document.getElementById("sidenav").classList.contains("widenav--active")) {// nothing required
    }
  });
  navBar.element.appendChild(hamburgerLink.element);
  var hamburger = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "hamburger",
    className: "fal fa-bars"
  });
  hamburgerLink.element.appendChild(hamburger.element);
  var navLogo = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "navLogo",
    className: "far fa-check-square"
  });
  navBar.element.appendChild(navLogo.element);
  var navItems = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "li",
    id: "nav",
    className: "nav"
  });
  navItems.element.innerHTML = "To-Do List";
  navBar.element.appendChild(navItems.element);
  var taskLink = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "a",
    href: "#"
  });
  navBar.element.appendChild(taskLink.element);
};



/***/ }),

/***/ "./src/make-items.js":
/*!***************************!*\
  !*** ./src/make-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "makeTask": () => (/* binding */ makeTask),
/* harmony export */   "loopElements": () => (/* binding */ loopElements),
/* harmony export */   "makeButton": () => (/* binding */ makeButton)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var grid = document.getElementById("grid");

var makeElement = function makeElement() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "" : _ref$type,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? "#" : _ref$href,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? "" : _ref$text;

  var element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  element.setAttribute("href", href);

  var retrieveId = function retrieveId() {
    var elementId = element.id;
    return elementId;
  };

  var openModal = function openModal(name) {
    name.onclick = function () {
      document.getElementById("modalContainer").style.display = "block";
    };
  };

  var closeModal = function closeModal(name) {
    name.onclick = function () {
      document.getElementById("modalContainer").style.display = "none";
      document.getElementById("newTask").reset();
    };
  };

  var makeList = function makeList() {
    var listName = makeElement({
      type: "h2",
      id: "".concat(id),
      className: "lists"
    });
    listName.element.innerHTML = "".concat(text);
    grid.prepend(listName.element);
    var taskPile = makeElement({
      type: "div",
      id: "".concat(id, "Pile"),
      className: "pile"
    });
    listName.element.appendChild(taskPile.element);
    var taskList = makeElement({
      type: "ul",
      id: "".concat(id, "List"),
      className: "list"
    });
    taskPile.element.appendChild(taskList.element);
    var task = makeElement({
      type: "li",
      id: "".concat(id, "Task"),
      className: "task"
    });
    task.element.innerHTML = "Add Task ";
    taskList.element.appendChild(task.element);
    var taskLink = makeElement({
      type: "a",
      href: "#"
    });
    task.element.appendChild(taskLink.element);
    var taskIcon = makeElement({
      type: "i",
      id: "".concat(id, "Icon"),
      className: "fas fa-plus"
    });
    taskLink.element.appendChild(taskIcon.element);
    openModal(taskIcon.element);
  };

  return {
    element: element,
    retrieveId: retrieveId,
    makeList: makeList,
    closeModal: closeModal
  };
};

var loopElements = function loopElements() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? "" : _ref2$type,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? "" : _ref2$id,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? "" : _ref2$className,
      _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? "#" : _ref2$href,
      _ref2$text = _ref2.text,
      text = _ref2$text === void 0 ? "" : _ref2$text;

  var prototype = makeElement({
    type: type,
    id: id,
    className: className,
    href: href,
    text: text
  });

  var makeMultiple = function makeMultiple(startingValue, length, elementType, inputId) {
    for (var i = startingValue; i <= length; i += 1) {
      var choice = makeElement({
        type: "".concat(elementType),
        id: "".concat(id + i)
      }).element;
      document.getElementById("".concat(inputId)).appendChild(choice);
    }
  };

  return _objectSpread(_objectSpread({}, prototype), {}, {
    makeMultiple: makeMultiple
  });
};

var makeTask = function makeTask(_ref3) {
  var id = _ref3.id,
      title = _ref3.title,
      description = _ref3.description,
      dueDate = _ref3.dueDate,
      priority = _ref3.priority,
      project = _ref3.project;
  return {
    id: id,
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    getTaskId: function getTaskId() {
      return id;
    },
    getTaskTitle: function getTaskTitle() {
      return title;
    },
    getTaskDescription: function getTaskDescription() {
      return description;
    },
    getTaskDate: function getTaskDate() {
      return dueDate;
    },
    getTaskPriority: function getTaskPriority() {
      return priority;
    },
    getTaskProject: function getTaskProject() {
      return project;
    }
  };
};

var makeButton = function makeButton() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$type = _ref4.type,
      type = _ref4$type === void 0 ? "" : _ref4$type,
      _ref4$id = _ref4.id,
      id = _ref4$id === void 0 ? "" : _ref4$id,
      _ref4$className = _ref4.className,
      className = _ref4$className === void 0 ? "" : _ref4$className,
      _ref4$href = _ref4.href,
      href = _ref4$href === void 0 ? "#" : _ref4$href;

  var element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  element.setAttribute("href", href);
  return element;
};



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeModal": () => (/* binding */ makeModal),
/* harmony export */   "choiceArray": () => (/* binding */ choiceArray)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");



var choiceArray = ["CustomList0List", "CustomList1List"];

var makeModal = function makeModal() {
  var modalContainer = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "modalContainer",
    className: "modalContainer"
  });
  _header__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(modalContainer.element);

  window.onclick = function (event) {
    if (event.target === modalContainer.element) {
      modalContainer.element.style.display = "none";
      document.getElementById("newTask").reset();
    }
  };

  var newTask = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "form",
    id: "newTask",
    className: "newTask"
  });
  modalContainer.element.appendChild(newTask.element);
  var header = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "h2",
    id: "modalHeader",
    className: "modalHeader"
  });
  header.element.innerHTML = "New Task";
  newTask.element.appendChild(header.element);
  var closeLink = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "a",
    href: "#"
  });
  header.element.appendChild(closeLink.element);
  var closeIcon = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "closeIcon",
    className: "fas fa-times"
  });
  closeIcon.closeModal(closeIcon.element);
  closeLink.element.appendChild(closeIcon.element);
  var body = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "modalBody",
    className: "modalBody"
  });
  newTask.element.appendChild(body.element);
  var title = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "modalTitle",
    className: "left-side"
  });
  title.element.innerHTML = "Title:<br>";
  body.element.appendChild(title.element);
  var titleInput = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "input",
    id: "titleInput",
    className: "input"
  });
  titleInput.element.type = "text";
  titleInput.element.required = true;
  title.element.appendChild(titleInput.element);
  var date = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "date",
    className: "right-side"
  });
  date.element.innerHTML = "Due Date:<br>";
  body.element.appendChild(date.element);
  var dateInput = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "input",
    id: "dateInput",
    className: "input"
  });
  dateInput.element.type = "datetime-local";
  dateInput.element.min = "".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(new Date(), "yyyy-MM-dd'T'HH:mm"));
  dateInput.element.required = true;
  date.element.appendChild(dateInput.element);
  var description = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "description",
    className: "left-side"
  });
  description.element.innerHTML = "Description:<br>";
  body.element.appendChild(description.element);
  var descriptionInput = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "textarea",
    id: "descriptionInput",
    className: "input"
  });
  descriptionInput.element.rows = "6";
  descriptionInput.element.cols = "21";
  descriptionInput.element.required = true;
  description.element.appendChild(descriptionInput.element);
  var priority = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "priority",
    className: "right-side"
  });
  priority.element.innerHTML = "Priority:<br>";
  body.element.appendChild(priority.element);
  var priorityInput = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "select",
    id: "priorityInput",
    className: "input"
  });
  priority.element.appendChild(priorityInput.element);
  var priorityChoice = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.loopElements)({
    type: "option",
    id: "priorityChoice",
    className: "input"
  });
  priorityChoice.makeMultiple(0, 3, "Option", "priorityInput");
  document.getElementById("priorityChoice0").innerHTML = "ASAP";
  document.getElementById("priorityChoice1").innerHTML = "High";
  document.getElementById("priorityChoice2").innerHTML = "Medium";
  document.getElementById("priorityChoice3").innerHTML = "Low";
  var project = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "project",
    name: "",
    className: "right-side"
  });
  project.element.innerHTML = "Project:<br>";
  priority.element.appendChild(project.element);
  var projectInput = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "select",
    id: "projectInput",
    className: "input"
  });
  projectInput.element.required = true;
  project.element.appendChild(projectInput.element);
  var projectChoice = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.loopElements)({
    type: "select",
    id: "projectChoice",
    className: "input"
  });
  projectChoice.makeMultiple(0, 1, "Option", "projectInput");
  document.getElementById("projectChoice0").innerHTML = "Inbox";
  document.getElementById("projectChoice1").innerHTML = "Today";
  document.getElementById("projectChoice0").setAttribute("name", "customList0List");
  document.getElementById("projectChoice1").setAttribute("name", "customList1List");
  var buttonHolderLeft = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "buttonHolder",
    className: "left-side"
  });
  body.element.appendChild(buttonHolderLeft.element);
  var buttonHolderRight = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "buttonHolder",
    className: "right-side"
  });
  body.element.appendChild(buttonHolderRight.element);
  var cancel = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "input",
    id: "cancel",
    className: "button"
  });
  cancel.element.type = "reset";
  buttonHolderRight.element.appendChild(cancel.element);
  var submission = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "input",
    id: "submission",
    className: "button"
  });
  submission.element.type = "submit";
  submission.element.value = "Add Task";
  buttonHolderRight.element.appendChild(submission.element);
  return {
    modalContainer: modalContainer,
    cancel: cancel,
    closeIcon: closeIcon,
    submission: submission
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
/* harmony export */   "makeSidebar": () => (/* binding */ makeSidebar),
/* harmony export */   "showAllProjects": () => (/* binding */ showAllProjects),
/* harmony export */   "makeProjectList": () => (/* binding */ makeProjectList),
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");

var grid = document.getElementById("grid");

var makeSidebar = function makeSidebar() {
  var sidebar = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "sidenav",
    className: "sidenav"
  });
  grid.appendChild(sidebar.element);
  var sideItem = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.loopElements)({
    type: "button",
    id: "sideButton",
    className: "project",
    href: "#"
  });
  sideItem.makeMultiple(0, 2, "button", "sidenav");
  document.getElementById("sideButton0").innerHTML = "Inbox";
  var inbox = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "h1",
    id: "customList0",
    text: "Inbox"
  });
  inbox.makeList({
    id: "customList0",
    text: "Inbox"
  });
  document.getElementById("sideButton0").addEventListener("click", function () {
    if (document.getElementById("customList0").style.display === "none") {
      document.querySelectorAll("h2[class^=\"lists\"]").forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementById("customList0").style.display = "block";
      document.querySelectorAll("ul[class^=\"list\"]").forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementById("customList0List").style.display = "block";
      document.getElementById("customList0List").setAttribute = "Inbox0";
    }
  });
  var today = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "h1",
    id: "customList1",
    text: "Today"
  });
  today.makeList({
    id: "customList1",
    text: "Today"
  });
  document.getElementById("sideButton1").addEventListener("click", function () {
    if (document.getElementById("customList1").style.display === "none") {
      document.querySelectorAll("h2[class^=\"lists\"]").forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementById("customList1").style.display = "block";
      document.querySelectorAll("ul[class^=\"list\"]").forEach(function (element) {
        element.style.display = "none";
      });
      document.getElementById("customList1List").style.display = "block";
    }
  });
  document.getElementById("customList1").style.display = "none";
  document.getElementById("customList1List").setAttribute("name", "Today1");
  var inboxIcon = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "homeIcon",
    className: "fad fa-inbox"
  });
  document.getElementById("sideButton0").prepend(inboxIcon.element);
  document.getElementById("sideButton1").innerHTML = "Today";
  var todayIcon = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "calendarIcon",
    className: "fas fa-calendar-day"
  });
  document.getElementById("sideButton1").prepend(todayIcon.element);
  document.getElementById("sideButton2").innerHTML = "Projects";
  var diagramIcon = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "i",
    id: "listIcon",
    className: "fas fa-list"
  });
  document.getElementById("sideButton2").prepend(diagramIcon.element);
  var projectList = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "div",
    id: "projectList",
    className: "project",
    href: "#"
  });
  var inputForm = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "form",
    id: "projectForm"
  });
  sidebar.element.appendChild(projectList.element);
  projectList.element.appendChild(inputForm.element);
};

var showAllProjects = function showAllProjects() {
  var projectHolder = document.getElementById("sideButton2");
  projectHolder.className = "sideButton2";
  projectHolder.addEventListener("click", function () {
    var projectContent = projectHolder.nextElementSibling;
    projectHolder.classList.toggle("sideButton2--active");

    if (projectHolder.classList.contains("sideButton2--active")) {
      projectContent.style.maxHeight = "100%";
    } else {
      projectContent.style.maxHeight = 0;
    }
  });
};

var makeProjectList = function makeProjectList() {
  var inputBar = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "input",
    id: "inputBar",
    className: "inputBar",
    href: "#"
  });
  inputBar.element.type = "text";
  inputBar.element.required = true;
  inputBar.element.placeholder = "Add Project";
  var approvedProject = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "button",
    id: "approvedProject",
    className: "fas fa-check-square",
    href: "#"
  });
  approvedProject.element.type = "submit";
  var rejectedProject = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
    type: "button",
    id: "rejectedProject",
    className: "fas fa-window-close"
  });
  rejectedProject.element.type = "reset";
  document.getElementById("projectForm").appendChild(inputBar.element);
  document.getElementById("projectForm").appendChild(rejectedProject.element);
  document.getElementById("projectForm").appendChild(approvedProject.element);
};

var addProject = function addProject() {
  var projectArray = ["Inbox", "Today"];
  document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var textValue = document.getElementById("inputBar").value;
    projectArray.push(textValue);
    document.getElementById("projectForm").reset();

    var _loop = function _loop(i) {
      var makeProject = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
        type: "option",
        id: "".concat(textValue + i),
        text: "".concat(textValue)
      });
      makeProject.element.innerHTML = "".concat(textValue);
      document.getElementById("projectInput").appendChild(makeProject.element);
      makeProject.element.setAttribute("name", "customList".concat(i, "List"));
      var projectButton = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
        type: "button",
        id: "customButton".concat(i),
        className: "project",
        href: "#"
      });
      projectButton.element.innerHTML = "".concat(textValue);
      document.getElementById("projectList").appendChild(projectButton.element);
      var list = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
        type: "h1",
        id: "customList".concat(i),
        text: "".concat(textValue)
      });
      list.makeList({
        id: "customList".concat(i),
        text: "".concat(textValue)
      });
      var customList = document.getElementById("customList".concat(i));
      customList.style.display = "none";
      document.getElementById("customButton".concat(i)).addEventListener("click", function () {
        if (customList.style.display === "none") {
          document.querySelectorAll("h2[class^=\"lists\"]").forEach(function (element) {
            element.style.display = "none";
          });
          customList.style.display = "block";
          document.querySelectorAll("ul[class^=\"list\"]").forEach(function (element) {
            element.style.display = "none";
          });
          document.getElementById("customList".concat(i, "List")).style.display = "block";
          document.getElementById("customList".concat(i, "List")).setAttribute("name", "".concat(textValue + i));
        }
      });
    };

    for (var i = projectArray.length - 1; i < projectArray.length; i += 1) {
      _loop(i);
    }
  });
};



/***/ }),

/***/ "./src/todo-items.js":
/*!***************************!*\
  !*** ./src/todo-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTask": () => (/* reexport safe */ _make_items__WEBPACK_IMPORTED_MODULE_0__.makeTask),
/* harmony export */   "createTaskButton": () => (/* binding */ createTaskButton),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "showTodo": () => (/* binding */ showTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");


var submitType = 0;
var myTasks = [];

var storeInfo = function storeInfo(array) {
  var projectMenuId = document.getElementById("projectInput");
  var optionMenuId = projectMenuId.options[projectMenuId.selectedIndex];
  var submission = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeTask)({
    id: myTasks.length,
    title: "".concat(document.getElementById("titleInput").value),
    description: "".concat(document.getElementById("descriptionInput").value),
    dueDate: "".concat(document.getElementById("dateInput").value),
    priority: "".concat(document.getElementById("priorityInput").value),
    project: "".concat(optionMenuId.getAttribute("name"))
  });

  var pushInfo = function pushInfo() {
    return array.push(submission);
  };

  return {
    pushInfo: pushInfo
  };
};

var loadTasks = function loadTasks() {
  var info = storeInfo(myTasks);
  info.pushInfo();
};

var createTaskButton = function createTaskButton(i) {
  var title = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "p",
    id: "title".concat(i),
    className: "property"
  });
  title.innerHTML = "Title: ".concat(myTasks[i].title);
  var description = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "p",
    id: "description".concat(i),
    className: "property"
  });
  description.innerHTML = "Description: ".concat(myTasks[i].description);
  var taskDate = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "p",
    id: "taskDate".concat(i),
    className: "property"
  });
  taskDate.innerHTML = "Date: ".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(myTasks[i].dueDate), "PPpp"));
  var taskPriority = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "p",
    id: "taskPriority".concat(i),
    className: "property"
  });
  taskPriority.innerHTML = "Priority: ".concat(myTasks[i].priority);
  var contentHolder = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "div",
    id: "createdHolder".concat(i),
    className: "createdHolder"
  });
  var newTask = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "button",
    id: "createdTask".concat(i),
    className: "createdTask"
  });
  newTask.innerHTML = "".concat(myTasks[i].title);

  var clearInputs = function clearInputs() {
    return document.getElementById("newTask").reset();
  };

  var appendToList = function appendToList() {
    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    contentHolder.appendChild(taskDate);
    contentHolder.appendChild(taskPriority);
  };

  var collapseTask = function collapseTask(task) {
    task.addEventListener("click", function () {
      var taskContent = newTask.nextElementSibling;
      newTask.classList.toggle("createdTask--active");

      if (newTask.classList.contains("createdTask--active")) {
        taskContent.style.maxHeight = "".concat(150, "px");
      } else {
        taskContent.style.maxHeight = 0;
      }
    });
  };

  var changeColors = function changeColors(element) {
    if (myTasks[i].priority === "ASAP") {
      element.newTask.style.background = "#150485";
    } else if (myTasks[i].priority === "High") {
      element.newTask.style.background = "#590995";
    } else if (myTasks[i].priority === "Medium") {
      element.newTask.style.background = "#C62A88";
    } else if (myTasks[i].priority === "Low") {
      element.newTask.style.background = "#03C4A1";
    }
  };

  var insertBeforeList = function insertBeforeList(num) {
    document.getElementById(myTasks[num].project).lastChild.before(newTask);
    document.getElementById(myTasks[num].project).lastChild.before(contentHolder);
  };

  return {
    title: title,
    description: description,
    taskDate: taskDate,
    taskPriority: taskPriority,
    contentHolder: contentHolder,
    newTask: newTask,
    appendToList: appendToList,
    collapseTask: collapseTask,
    insertBeforeList: insertBeforeList,
    clearInputs: clearInputs,
    changeColors: changeColors
  };
};

var idNumber = {};

var edit = function edit() {
  var editButton = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "a",
    id: "editIcon",
    className: "fas fa-edit",
    href: "#"
  });

  editButton.onclick = function (event) {
    document.getElementById("modalContainer").style.display = "block";
    event.stopPropagation();
  };

  var appendEdit = function appendEdit(task) {
    return task.appendChild(editButton);
  };

  var editTask = function editTask() {
    var openEditor = function openEditor(event) {
      event.preventDefault();
      submitType = 1;
      var specificId = event.target.parentNode.id;
      idNumber.id = specificId.replace(/\D/g, "");
      document.getElementById("modalContainer").style.display = "block";
      document.getElementById('modalHeader').childNodes[0].nodeValue = 'Update Task';
      document.getElementById("submission").value = "Update Task";
      document.getElementById("titleInput").value = myTasks[idNumber.id].title;
      document.getElementById("descriptionInput").value = myTasks[idNumber.id].description;
      document.getElementById("dateInput").value = myTasks[idNumber.id].dueDate;
      document.getElementById("priorityInput").value = myTasks[idNumber.id].priority;
      document.getElementById("projectInput").value = myTasks[idNumber.id].project;
      event.stopPropagation();
    };

    editButton.addEventListener("click", openEditor);
  };

  var submitEdit = function submitEdit() {
    var chosenId = document.getElementById("createdTask".concat(idNumber.id));
    var chosenHolderId = document.getElementById("createdHolder".concat(idNumber.id));
    chosenId.childNodes[0].nodeValue = "".concat(document.getElementById("titleInput").value);
    document.getElementById("title".concat(idNumber.id)).innerHTML = "Title: ".concat(document.getElementById("titleInput").value);
    myTasks[idNumber.id].title = document.getElementById("titleInput").value;
    document.getElementById("description".concat(idNumber.id)).innerHTML = "Description: ".concat(document.getElementById("descriptionInput").value);
    myTasks[idNumber.id].description = document.getElementById("descriptionInput").value;
    document.getElementById("taskDate".concat(idNumber.id)).innerHTML = "Date: ".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(new Date(myTasks[idNumber.id].dueDate), "PPpp"));
    myTasks[idNumber.id].dueDate = document.getElementById("dateInput").value;
    document.getElementById("taskPriority".concat(idNumber.id)).innerHTML = "Priority: ".concat(document.getElementById("priorityInput").value);
    myTasks[idNumber.id].priority = document.getElementById("priorityInput").value;
    var projectMenuId = document.getElementById("projectInput");
    var optionMenuId = projectMenuId.options[projectMenuId.selectedIndex];
    myTasks[idNumber.id].project = optionMenuId.getAttribute("name");

    if (myTasks[idNumber.id].priority === "ASAP") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#150485";
    } else if (myTasks[idNumber.id].priority === "High") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#590995";
    } else if (myTasks[idNumber.id].priority === "Medium") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#C62A88";
    } else if (myTasks[idNumber.id].priority === "Low") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#03C4A1";
    }

    var cloneNodeWithEvents = function cloneNodeWithEvents(orgNode) {
      var orgNodeEvents = orgNode.getElementsByTagName('*');
      var cloneNode = orgNode.cloneNode(true);
      var cloneNodeEvents = cloneNode.getElementsByTagName('*');
      var allEvents = ['onabort', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onblur', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onerror', 'onfocus', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onselect', 'onselectstart', 'onsubmit', 'onunload']; // The node root

      for (var j = 0; j < allEvents.length; j++) {
        eval('if( orgNode.' + allEvents[j] + ' ) cloneNode.' + allEvents[j] + ' = orgNode.' + allEvents[j]);
      } // Node descendants


      for (var i = 0; i < orgNodeEvents.length; i++) {
        for (var _j = 0; _j < allEvents.length; _j++) {
          eval('if( orgNodeEvents[i].' + allEvents[_j] + ' ) cloneNodeEvents[i].' + allEvents[_j] + ' = orgNodeEvents[i].' + allEvents[_j]);
        }
      }

      return cloneNode;
    };

    if (myTasks[idNumber.id].project !== chosenId.parentNode.id) {
      var clonedTask = cloneNodeWithEvents(chosenId);

      clonedTask.onclick = function () {
        var taskContent = document.getElementById("createdTask".concat(idNumber.id)).nextElementSibling;
        document.getElementById("createdTask".concat(idNumber.id)).classList.toggle("createdTask--active");

        if (document.getElementById("createdTask".concat(idNumber.id)).classList.contains("createdTask--active")) {
          taskContent.style.maxHeight = "".concat(150, "px");
        } else {
          taskContent.style.maxHeight = 0;
        }
      };

      var clonedHolder = cloneNodeWithEvents(chosenHolderId);
      document.getElementById(chosenId.parentNode.id).removeChild(document.getElementById("createdTask".concat(idNumber.id)));
      document.getElementById(chosenHolderId.parentNode.id).removeChild(document.getElementById("createdHolder".concat(idNumber.id)));
      document.getElementById(myTasks[idNumber.id].project).lastChild.before(clonedTask);
      document.getElementById(myTasks[idNumber.id].project).lastChild.before(clonedHolder);
    }

    ;
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("newTask").reset();
    console.log(myTasks);
  };

  return {
    appendEdit: appendEdit,
    editTask: editTask,
    submitEdit: submitEdit
  };
};

var trash = function trash(i) {
  var _createTaskButton = createTaskButton(i),
      newTask = _createTaskButton.newTask,
      appendToList = _createTaskButton.appendToList,
      collapseTask = _createTaskButton.collapseTask,
      insertBeforeList = _createTaskButton.insertBeforeList,
      clearInputs = _createTaskButton.clearInputs,
      changeColors = _createTaskButton.changeColors;

  var _edit = edit(),
      appendEdit = _edit.appendEdit,
      editTask = _edit.editTask;

  var trashButton = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "a",
    id: "trashIcon",
    className: "far fa-trash-alt"
  });

  var appendTrash = function appendTrash() {
    return newTask.appendChild(trashButton);
  };

  var removeTask = function removeTask(num) {
    return trashButton.addEventListener("click", function (event) {
      event.preventDefault();
      var sibling = document.getElementById("".concat(event.target.parentNode.id)).nextElementSibling;
      sibling.remove();
      document.getElementById("".concat(event.target.parentNode.id)).remove();
      var index = myTasks.map(function (x) {
        return x.id;
      }).indexOf(num);
      myTasks.splice(index, 1);
      console.log(myTasks);
      event.stopPropagation();
    });
  };

  return {
    appendTrash: appendTrash,
    removeTask: removeTask,
    appendToList: appendToList,
    collapseTask: collapseTask,
    insertBeforeList: insertBeforeList,
    clearInputs: clearInputs,
    changeColors: changeColors,
    newTask: newTask,
    appendEdit: appendEdit,
    editTask: editTask
  };
};

var showTodo = function showTodo() {
  var submitInfo = function submitInfo(event) {
    event.preventDefault();

    if (submitType === 0) {
      loadTasks();

      for (var i = myTasks.length - 1; i < myTasks.length; i += 1) {
        var taskObject = trash(i);
        taskObject.changeColors(taskObject);
        taskObject.appendToList();
        taskObject.insertBeforeList(i);
        taskObject.collapseTask(taskObject.newTask);
        taskObject.appendEdit(taskObject.newTask);
        taskObject.appendTrash();
        taskObject.removeTask(i);
        taskObject.editTask();
        document.getElementById("modalContainer").style.display = "none";
        document.getElementById("newTask").reset();
      }
    } else if (submitType === 1) {
      var james = edit();
      james.submitEdit();
    }
  };

  document.getElementById("newTask").addEventListener("submit", submitInfo);
  document.querySelectorAll("i[class^=\"fas fa-plus\"]").forEach(function (element) {
    return element.addEventListener('click', function () {
      submitType = 0;
      document.getElementById('modalHeader').nodeValue = 'New Task';
      document.getElementById("submission").value = "Add Task";
    });
  });
};



/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items */ "./src/todo-items.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal.js");





(function createSidebar() {
  (0,_header__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.makeSidebar)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.makeProjectList)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.showAllProjects)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.addProject)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.makeModal)();
  (0,_todo_items__WEBPACK_IMPORTED_MODULE_0__.showTodo)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWtlLWl0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFrZU5hdmJhciIsIm5hdkJhciIsIm1ha2VFbGVtZW50IiwidHlwZSIsImlkIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiaGFtYnVyZ2VyTGluayIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJoYW1idXJnZXIiLCJuYXZMb2dvIiwibmF2SXRlbXMiLCJpbm5lckhUTUwiLCJ0YXNrTGluayIsImdyaWQiLCJ0ZXh0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInJldHJpZXZlSWQiLCJlbGVtZW50SWQiLCJvcGVuTW9kYWwiLCJuYW1lIiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImNsb3NlTW9kYWwiLCJyZXNldCIsIm1ha2VMaXN0IiwibGlzdE5hbWUiLCJwcmVwZW5kIiwidGFza1BpbGUiLCJ0YXNrTGlzdCIsInRhc2siLCJ0YXNrSWNvbiIsImxvb3BFbGVtZW50cyIsInByb3RvdHlwZSIsIm1ha2VNdWx0aXBsZSIsInN0YXJ0aW5nVmFsdWUiLCJsZW5ndGgiLCJlbGVtZW50VHlwZSIsImlucHV0SWQiLCJpIiwiY2hvaWNlIiwibWFrZVRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsImdldFRhc2tJZCIsImdldFRhc2tUaXRsZSIsImdldFRhc2tEZXNjcmlwdGlvbiIsImdldFRhc2tEYXRlIiwiZ2V0VGFza1ByaW9yaXR5IiwiZ2V0VGFza1Byb2plY3QiLCJtYWtlQnV0dG9uIiwiY2hvaWNlQXJyYXkiLCJtYWtlTW9kYWwiLCJtb2RhbENvbnRhaW5lciIsIndpbmRvdyIsImV2ZW50IiwidGFyZ2V0IiwibmV3VGFzayIsImhlYWRlciIsImNsb3NlTGluayIsImNsb3NlSWNvbiIsImJvZHkiLCJ0aXRsZUlucHV0IiwicmVxdWlyZWQiLCJkYXRlIiwiZGF0ZUlucHV0IiwibWluIiwiZm9ybWF0IiwiRGF0ZSIsImRlc2NyaXB0aW9uSW5wdXQiLCJyb3dzIiwiY29scyIsInByaW9yaXR5SW5wdXQiLCJwcmlvcml0eUNob2ljZSIsInByb2plY3RJbnB1dCIsInByb2plY3RDaG9pY2UiLCJidXR0b25Ib2xkZXJMZWZ0IiwiYnV0dG9uSG9sZGVyUmlnaHQiLCJjYW5jZWwiLCJzdWJtaXNzaW9uIiwidmFsdWUiLCJtYWtlU2lkZWJhciIsInNpZGViYXIiLCJzaWRlSXRlbSIsImluYm94IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RheSIsImluYm94SWNvbiIsInRvZGF5SWNvbiIsImRpYWdyYW1JY29uIiwicHJvamVjdExpc3QiLCJpbnB1dEZvcm0iLCJzaG93QWxsUHJvamVjdHMiLCJwcm9qZWN0SG9sZGVyIiwicHJvamVjdENvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJtYWtlUHJvamVjdExpc3QiLCJpbnB1dEJhciIsInBsYWNlaG9sZGVyIiwiYXBwcm92ZWRQcm9qZWN0IiwicmVqZWN0ZWRQcm9qZWN0IiwiYWRkUHJvamVjdCIsInByb2plY3RBcnJheSIsInByZXZlbnREZWZhdWx0IiwidGV4dFZhbHVlIiwicHVzaCIsIm1ha2VQcm9qZWN0IiwicHJvamVjdEJ1dHRvbiIsImxpc3QiLCJjdXN0b21MaXN0Iiwic3VibWl0VHlwZSIsIm15VGFza3MiLCJzdG9yZUluZm8iLCJhcnJheSIsInByb2plY3RNZW51SWQiLCJvcHRpb25NZW51SWQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsImdldEF0dHJpYnV0ZSIsInB1c2hJbmZvIiwibG9hZFRhc2tzIiwiaW5mbyIsImNyZWF0ZVRhc2tCdXR0b24iLCJ0YXNrRGF0ZSIsInRhc2tQcmlvcml0eSIsImNvbnRlbnRIb2xkZXIiLCJjbGVhcklucHV0cyIsImFwcGVuZFRvTGlzdCIsImNvbGxhcHNlVGFzayIsInRhc2tDb250ZW50IiwiY2hhbmdlQ29sb3JzIiwiYmFja2dyb3VuZCIsImluc2VydEJlZm9yZUxpc3QiLCJudW0iLCJsYXN0Q2hpbGQiLCJiZWZvcmUiLCJpZE51bWJlciIsImVkaXQiLCJlZGl0QnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiYXBwZW5kRWRpdCIsImVkaXRUYXNrIiwib3BlbkVkaXRvciIsInNwZWNpZmljSWQiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImNoaWxkTm9kZXMiLCJub2RlVmFsdWUiLCJzdWJtaXRFZGl0IiwiY2hvc2VuSWQiLCJjaG9zZW5Ib2xkZXJJZCIsImNsb25lTm9kZVdpdGhFdmVudHMiLCJvcmdOb2RlIiwib3JnTm9kZUV2ZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xvbmVOb2RlIiwiY2xvbmVOb2RlRXZlbnRzIiwiYWxsRXZlbnRzIiwiaiIsImV2YWwiLCJjbG9uZWRUYXNrIiwiY2xvbmVkSG9sZGVyIiwicmVtb3ZlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwidHJhc2giLCJ0cmFzaEJ1dHRvbiIsImFwcGVuZFRyYXNoIiwicmVtb3ZlVGFzayIsInNpYmxpbmciLCJyZW1vdmUiLCJpbmRleCIsIm1hcCIsIngiLCJpbmRleE9mIiwic3BsaWNlIiwic2hvd1RvZG8iLCJzdWJtaXRJbmZvIiwidGFza09iamVjdCIsImphbWVzIiwiY3JlYXRlU2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxNQUFNLEdBQUdDLHdEQUFXLENBQUM7QUFBRUMsUUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBRSxFQUFFLFFBQWxCO0FBQTRCQyxhQUFTLEVBQUU7QUFBdkMsR0FBRCxDQUExQjtBQUNBUixTQUFPLENBQUNTLFdBQVIsQ0FBb0JMLE1BQU0sQ0FBQ00sT0FBM0I7QUFFQSxNQUFNQyxhQUFhLEdBQUdOLHdEQUFXLENBQUM7QUFBRUMsUUFBSSxFQUFFLEdBQVI7QUFBYU0sUUFBSSxFQUFFO0FBQW5CLEdBQUQsQ0FBakM7QUFDQUQsZUFBYSxDQUFDRCxPQUFkLENBQXNCRyxnQkFBdEIsQ0FBdUMsT0FBdkMsRUFBZ0QsWUFBTTtBQUNwRFosWUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DWSxTQUFuQyxDQUE2Q0MsTUFBN0MsQ0FBb0QsaUJBQXBEOztBQUNBLFFBQ0VkLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ1ksU0FBbkMsQ0FBNkNFLFFBQTdDLENBQXNELGlCQUF0RCxDQURGLEVBRUUsQ0FDQTtBQUNEO0FBQ0YsR0FQRDtBQVFBWixRQUFNLENBQUNNLE9BQVAsQ0FBZUQsV0FBZixDQUEyQkUsYUFBYSxDQUFDRCxPQUF6QztBQUVBLE1BQU1PLFNBQVMsR0FBR1osd0RBQVcsQ0FBQztBQUM1QkMsUUFBSSxFQUFFLEdBRHNCO0FBRTVCQyxNQUFFLEVBQUUsV0FGd0I7QUFHNUJDLGFBQVMsRUFBRTtBQUhpQixHQUFELENBQTdCO0FBS0FHLGVBQWEsQ0FBQ0QsT0FBZCxDQUFzQkQsV0FBdEIsQ0FB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QUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsZ0VBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsZ0VBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsZ0VBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsZ0VBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrRUFBZTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLGtFQUFlO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrRUFBZTtBQUNqQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrRUFBZTtBQUM3QixnQkFBZ0Isa0VBQWU7QUFDL0I7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2oyQm9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxrRUFBZTtBQUM5RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxrRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtFQUFlO0FBQzFCO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7O0FDbkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLDBEQUEwRCxNQUFNO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFOzs7Ozs7Ozs7Ozs7OztBQy9GN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ3BELG1DQUFtQztBQUNuQzs7QUFFZTtBQUNmLEVBQUUsK0RBQVk7QUFDZCxhQUFhLHlEQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QyQztBQUNtQjtBQUNRO0FBQ2xCO0FBQ3BELHFDQUFxQztBQUNyQzs7QUFFZTtBQUNmLEVBQUUsK0RBQVk7QUFDZCxhQUFhLHlEQUFNO0FBQ25CLGFBQWEsb0VBQWlCLG1CQUFtQix3RUFBcUIsaUJBQWlCO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNtQjtBQUNWO0FBQ3BEOztBQUVlO0FBQ2YsRUFBRSwrREFBWTtBQUNkLGFBQWEseURBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBaUI7O0FBRXpDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkM7QUFDYTtBQUNRO0FBQ1o7QUFDcEQscUNBQXFDO0FBQ3JDOztBQUVlO0FBQ2YsRUFBRSwrREFBWTtBQUNkLGFBQWEseURBQU07QUFDbkIsYUFBYSxpRUFBYyw0QkFBNEIscUVBQWtCLDBCQUEwQjtBQUNuRztBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjhDO0FBQ0g7QUFDYTtBQUNKO0FBQ3BEOztBQUVlO0FBQ2YsRUFBRSwrREFBWTtBQUNkLGFBQWEseURBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsNERBQVM7QUFDeEYscUdBQXFHLDREQUFTLGdDQUFnQzs7QUFFOUk7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQWM7O0FBRXRDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQSx3SUFBd0k7QUFDeEksR0FBRztBQUNILG9JQUFvSTtBQUNwSSxHQUFHO0FBQ0gsOElBQThJO0FBQzlJLEdBQUc7QUFDSCxnSkFBZ0o7QUFDaEo7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkM7QUFDUztBQUNwRDs7QUFFZTtBQUNmLEVBQUUsK0RBQVk7QUFDZDtBQUNBLGFBQWEseURBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhEO0FBQ0E7QUFDVjtBQUNwRDs7QUFFZTtBQUNmLEVBQUUsK0RBQVk7QUFDZCxhQUFhLG9FQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9FQUFpQjtBQUM5QjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhDO0FBQ0g7QUFDUztBQUNwRDs7QUFFZTtBQUNmLEVBQUUsK0RBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsNERBQVM7QUFDdEUsMEVBQTBFLDREQUFTLHVCQUF1Qjs7QUFFMUc7QUFDQTtBQUNBOztBQUVBLGFBQWEseURBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCOEM7QUFDVTtBQUNBO0FBQ0o7QUFDcEQ7O0FBRWU7QUFDZixFQUFFLCtEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLDREQUFTO0FBQ3hGLHFHQUFxRyw0REFBUztBQUM5RyxhQUFhLGlFQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUVBQWM7QUFDM0I7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ptRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLG1FQUFZO0FBQ2Qsa0JBQWtCLHlEQUFNO0FBQ3hCLGVBQWUsZ0VBQVM7QUFDeEI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjBDO0FBQ1c7QUFDSztBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUZBQXFGO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTyxrRUFBa0U7QUFDcEYsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLE9BQU87QUFDcEIsWUFBWSxVQUFVO0FBQ3RCLFlBQVksV0FBVztBQUN2QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksV0FBVztBQUN2QixZQUFZLFdBQVc7QUFDdkIsWUFBWSxXQUFXLHlHQUF5RztBQUNoSSxZQUFZLFdBQVcscUdBQXFHO0FBQzVILFlBQVksV0FBVywrR0FBK0c7QUFDdEksWUFBWSxXQUFXLGlIQUFpSDtBQUN4SSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkO0FBQ0E7QUFDQSxpQ0FBaUMsMkRBQWE7QUFDOUM7QUFDQSwrRUFBK0UsZ0VBQVM7QUFDeEYscUdBQXFHLGdFQUFTLGdDQUFnQzs7QUFFOUk7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELGdFQUFTO0FBQ3RFLDBFQUEwRSxnRUFBUyx1QkFBdUI7O0FBRTFHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix5REFBTTs7QUFFM0IsT0FBTywwREFBTztBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBLHVCQUF1QixzRkFBK0I7QUFDdEQsZ0JBQWdCLGtFQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsd0VBQWM7QUFDeEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9FQUFVOztBQUU5QjtBQUNBLGtEQUFrRCx1RkFBd0I7QUFDMUUsUUFBUSxrRkFBbUI7QUFDM0I7O0FBRUEsbURBQW1ELHdGQUF5QjtBQUM1RSxRQUFRLGtGQUFtQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaGJ3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLGFBQWEseURBQU07QUFDbkI7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2hFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDUGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNqRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILDBEQUEwRCxPQUFPO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNwRnlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNLFFBQVEsTUFBTTtBQUMvQixXQUFXLE1BQU0sUUFBUSxNQUFNO0FBQy9CLGFBQWEsTUFBTSxJQUFJLE1BQU07QUFDN0IsWUFBWSxNQUFNLElBQUksTUFBTTtBQUM1QjtBQUNBO0FBQ0EsUUFBUSx3RUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxRQUFRLHdFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFlBQVksd0VBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7O0FDakN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxzRUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsc0VBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNFQUFlO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsT0FBTyxzRUFBZTtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsc0VBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSnNEO0FBQ2Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sbUVBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxtRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLG1FQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sbUVBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSxtRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLEtBQUssRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHd0M7QUFDUjtBQUNRO0FBQ1o7QUFDTjtBQUMxQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpRUFBYztBQUNoQyxjQUFjLDZEQUFVO0FBQ3hCLGtCQUFrQixpRUFBYztBQUNoQyxZQUFZLDJEQUFRO0FBQ3BCLFNBQVMsd0RBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjhCO0FBQ087QUFDRDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxtRUFBWTtBQUNkLGVBQWUsZ0VBQVM7QUFDeEIsU0FBUyxrRUFBZTtBQUN4QixDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsbUVBQVk7QUFDZCx3REFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsdUtBQXVLOztBQUV2SztBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7VUNuREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFNQTs7QUFHQSxDQUFDLFNBQVNzRyxhQUFULEdBQXlCO0FBQ3hCaE0scURBQVU7QUFDVjJGLHVEQUFXO0FBQ1hpQiwyREFBZTtBQUNmTCwyREFBZTtBQUNmVSxzREFBVTtBQUNWbkQsbURBQVM7QUFDVDhILHVEQUFRO0FBQ1QsQ0FSRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlRWxlbWVudCB9IGZyb20gXCIuL21ha2UtaXRlbXNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgbWFrZU5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2QmFyID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcInVsXCIsIGlkOiBcIm5hdmJhclwiLCBjbGFzc05hbWU6IFwibmF2YmFyXCIgfSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyLmVsZW1lbnQpO1xuXG4gIGNvbnN0IGhhbWJ1cmdlckxpbmsgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiYVwiLCBocmVmOiBcIiNcIiB9KTtcbiAgaGFtYnVyZ2VyTGluay5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlbmF2XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlbmF2LS1hY3RpdmVcIik7XG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlbmF2XCIpLmNsYXNzTGlzdC5jb250YWlucyhcIndpZGVuYXYtLWFjdGl2ZVwiKVxuICAgICkge1xuICAgICAgLy8gbm90aGluZyByZXF1aXJlZFxuICAgIH1cbiAgfSk7XG4gIG5hdkJhci5lbGVtZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlckxpbmsuZWxlbWVudCk7XG5cbiAgY29uc3QgaGFtYnVyZ2VyID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcImhhbWJ1cmdlclwiLFxuICAgIGNsYXNzTmFtZTogXCJmYWwgZmEtYmFyc1wiLFxuICB9KTtcbiAgaGFtYnVyZ2VyTGluay5lbGVtZW50LmFwcGVuZENoaWxkKGhhbWJ1cmdlci5lbGVtZW50KTtcblxuICBjb25zdCBuYXZMb2dvID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcIm5hdkxvZ29cIixcbiAgICBjbGFzc05hbWU6IFwiZmFyIGZhLWNoZWNrLXNxdWFyZVwiLFxuICB9KTtcbiAgbmF2QmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2TG9nby5lbGVtZW50KTtcblxuICBjb25zdCBuYXZJdGVtcyA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJsaVwiLCBpZDogXCJuYXZcIiwgY2xhc3NOYW1lOiBcIm5hdlwiIH0pO1xuICBuYXZJdGVtcy5lbGVtZW50LmlubmVySFRNTCA9IFwiVG8tRG8gTGlzdFwiO1xuICBuYXZCYXIuZWxlbWVudC5hcHBlbmRDaGlsZChuYXZJdGVtcy5lbGVtZW50KTtcblxuICBjb25zdCB0YXNrTGluayA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJhXCIsIGhyZWY6IFwiI1wiIH0pO1xuICBuYXZCYXIuZWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrTGluay5lbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7IG1ha2VOYXZiYXIsIGNvbnRlbnQgfTtcbiIsImNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRcIik7XG5cbmNvbnN0IG1ha2VFbGVtZW50ID0gKHtcbiAgdHlwZSA9IFwiXCIsXG4gIGlkID0gXCJcIixcbiAgY2xhc3NOYW1lID0gXCJcIixcbiAgaHJlZiA9IFwiI1wiLFxuICB0ZXh0ID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lKTtcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xuXG4gIGNvbnN0IHJldHJpZXZlSWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudElkID0gZWxlbWVudC5pZDtcbiAgICByZXR1cm4gZWxlbWVudElkO1xuICB9O1xuXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChuYW1lKSA9PiB7XG4gICAgbmFtZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IChuYW1lKSA9PiB7XG4gICAgbmFtZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikucmVzZXQoKTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IG1ha2VMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3ROYW1lID0gbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJoMlwiLFxuICAgICAgaWQ6IGAke2lkfWAsXG4gICAgICBjbGFzc05hbWU6IGBsaXN0c2AsXG4gICAgfSk7XG4gICAgbGlzdE5hbWUuZWxlbWVudC5pbm5lckhUTUwgPSBgJHt0ZXh0fWA7XG4gICAgZ3JpZC5wcmVwZW5kKGxpc3ROYW1lLmVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFza1BpbGUgPSBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgaWQ6IGAke2lkfVBpbGVgLFxuICAgICAgY2xhc3NOYW1lOiBcInBpbGVcIixcbiAgICB9KTtcbiAgICBsaXN0TmFtZS5lbGVtZW50LmFwcGVuZENoaWxkKHRhc2tQaWxlLmVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFza0xpc3QgPSBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiBcInVsXCIsXG4gICAgICBpZDogYCR7aWR9TGlzdGAsXG4gICAgICBjbGFzc05hbWU6IFwibGlzdFwiLFxuICAgIH0pO1xuICAgIHRhc2tQaWxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xpc3QuZWxlbWVudCk7XG5cbiAgICBjb25zdCB0YXNrID0gbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJsaVwiLFxuICAgICAgaWQ6IGAke2lkfVRhc2tgLFxuICAgICAgY2xhc3NOYW1lOiBcInRhc2tcIixcbiAgICB9KTtcbiAgICB0YXNrLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJBZGQgVGFzayBcIjtcbiAgICB0YXNrTGlzdC5lbGVtZW50LmFwcGVuZENoaWxkKHRhc2suZWxlbWVudCk7XG5cbiAgICBjb25zdCB0YXNrTGluayA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJhXCIsIGhyZWY6IFwiI1wiIH0pO1xuICAgIHRhc2suZWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrTGluay5lbGVtZW50KTtcblxuICAgIGNvbnN0IHRhc2tJY29uID0gbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJpXCIsXG4gICAgICBpZDogYCR7aWR9SWNvbmAsXG4gICAgICBjbGFzc05hbWU6IFwiZmFzIGZhLXBsdXNcIixcbiAgICB9KTtcbiAgICB0YXNrTGluay5lbGVtZW50LmFwcGVuZENoaWxkKHRhc2tJY29uLmVsZW1lbnQpO1xuICAgIG9wZW5Nb2RhbCh0YXNrSWNvbi5lbGVtZW50KTtcbiAgfTtcblxuICByZXR1cm4geyBlbGVtZW50LCByZXRyaWV2ZUlkLCBtYWtlTGlzdCwgY2xvc2VNb2RhbCB9O1xufTtcblxuY29uc3QgbG9vcEVsZW1lbnRzID0gKHtcbiAgdHlwZSA9IFwiXCIsXG4gIGlkID0gXCJcIixcbiAgY2xhc3NOYW1lID0gXCJcIixcbiAgaHJlZiA9IFwiI1wiLFxuICB0ZXh0ID0gXCJcIixcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBwcm90b3R5cGUgPSBtYWtlRWxlbWVudCh7IHR5cGUsIGlkLCBjbGFzc05hbWUsIGhyZWYsIHRleHQgfSk7XG5cbiAgY29uc3QgbWFrZU11bHRpcGxlID0gKHN0YXJ0aW5nVmFsdWUsIGxlbmd0aCwgZWxlbWVudFR5cGUsIGlucHV0SWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdWYWx1ZTsgaSA8PSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2hvaWNlID0gbWFrZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBgJHtlbGVtZW50VHlwZX1gLFxuICAgICAgICBpZDogYCR7aWQgKyBpfWAsXG4gICAgICB9KS5lbGVtZW50O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXRJZH1gKS5hcHBlbmRDaGlsZChjaG9pY2UpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgLi4ucHJvdG90eXBlLCBtYWtlTXVsdGlwbGUgfTtcbn07XG5cbmNvbnN0IG1ha2VUYXNrID0gKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QgfSkgPT4gKHtcbiAgaWQsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3QsXG5cbiAgZ2V0VGFza0lkKCkge1xuICAgIHJldHVybiBpZDtcbiAgfSxcbiAgZ2V0VGFza1RpdGxlKCkge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfSxcbiAgZ2V0VGFza0Rlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfSxcbiAgZ2V0VGFza0RhdGUoKSB7XG4gICAgcmV0dXJuIGR1ZURhdGU7XG4gIH0sXG4gIGdldFRhc2tQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gcHJpb3JpdHk7XG4gIH0sXG4gIGdldFRhc2tQcm9qZWN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9LFxufSk7XG5cbmNvbnN0IG1ha2VCdXR0b24gPSAoe1xuICB0eXBlID0gXCJcIixcbiAgaWQgPSBcIlwiLFxuICBjbGFzc05hbWUgPSBcIlwiLFxuICBocmVmID0gXCIjXCIsXG59ID0ge30pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgeyBtYWtlRWxlbWVudCwgbWFrZVRhc2ssIGxvb3BFbGVtZW50cywgbWFrZUJ1dHRvbiB9O1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBtYWtlRWxlbWVudCwgbG9vcEVsZW1lbnRzIH0gZnJvbSBcIi4vbWFrZS1pdGVtc1wiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2hlYWRlclwiO1xuXG5jb25zdCBjaG9pY2VBcnJheSA9IFtcIkN1c3RvbUxpc3QwTGlzdFwiLCBcIkN1c3RvbUxpc3QxTGlzdFwiXTtcbmNvbnN0IG1ha2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJtb2RhbENvbnRhaW5lclwiLFxuICAgIGNsYXNzTmFtZTogXCJtb2RhbENvbnRhaW5lclwiLFxuICB9KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5lbGVtZW50KTtcblxuICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyLmVsZW1lbnQpIHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnJlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJmb3JtXCIsXG4gICAgaWQ6IFwibmV3VGFza1wiLFxuICAgIGNsYXNzTmFtZTogXCJuZXdUYXNrXCIsXG4gIH0pO1xuICBtb2RhbENvbnRhaW5lci5lbGVtZW50LmFwcGVuZENoaWxkKG5ld1Rhc2suZWxlbWVudCk7XG5cbiAgY29uc3QgaGVhZGVyID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaDJcIixcbiAgICBpZDogXCJtb2RhbEhlYWRlclwiLFxuICAgIGNsYXNzTmFtZTogXCJtb2RhbEhlYWRlclwiLFxuICB9KTtcbiAgaGVhZGVyLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJOZXcgVGFza1wiO1xuICBuZXdUYXNrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyLmVsZW1lbnQpO1xuXG4gIGNvbnN0IGNsb3NlTGluayA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJhXCIsIGhyZWY6IFwiI1wiIH0pO1xuICBoZWFkZXIuZWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUxpbmsuZWxlbWVudCk7XG5cbiAgY29uc3QgY2xvc2VJY29uID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcImNsb3NlSWNvblwiLFxuICAgIGNsYXNzTmFtZTogXCJmYXMgZmEtdGltZXNcIixcbiAgfSk7XG4gIGNsb3NlSWNvbi5jbG9zZU1vZGFsKGNsb3NlSWNvbi5lbGVtZW50KTtcbiAgY2xvc2VMaW5rLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VJY29uLmVsZW1lbnQpO1xuXG4gIGNvbnN0IGJvZHkgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJtb2RhbEJvZHlcIixcbiAgICBjbGFzc05hbWU6IFwibW9kYWxCb2R5XCIsXG4gIH0pO1xuICBuZXdUYXNrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keS5lbGVtZW50KTtcblxuICBjb25zdCB0aXRsZSA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcIm1vZGFsVGl0bGVcIixcbiAgICBjbGFzc05hbWU6IFwibGVmdC1zaWRlXCIsXG4gIH0pO1xuICB0aXRsZS5lbGVtZW50LmlubmVySFRNTCA9IGBUaXRsZTo8YnI+YDtcbiAgYm9keS5lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlLmVsZW1lbnQpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBcInRpdGxlSW5wdXRcIixcbiAgICBjbGFzc05hbWU6IFwiaW5wdXRcIixcbiAgfSk7XG4gIHRpdGxlSW5wdXQuZWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlSW5wdXQuZWxlbWVudC5yZXF1aXJlZCA9IHRydWU7XG4gIHRpdGxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dC5lbGVtZW50KTtcblxuICBjb25zdCBkYXRlID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiZGF0ZVwiLFxuICAgIGNsYXNzTmFtZTogXCJyaWdodC1zaWRlXCIsXG4gIH0pO1xuICBkYXRlLmVsZW1lbnQuaW5uZXJIVE1MID0gYER1ZSBEYXRlOjxicj5gO1xuICBib2R5LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZS5lbGVtZW50KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBcImRhdGVJbnB1dFwiLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dFwiLFxuICB9KTtcbiAgZGF0ZUlucHV0LmVsZW1lbnQudHlwZSA9IFwiZGF0ZXRpbWUtbG9jYWxcIjtcbiAgZGF0ZUlucHV0LmVsZW1lbnQubWluID0gYCR7Zm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZCdUJ0hIOm1tXCIpfWA7XG4gIGRhdGVJbnB1dC5lbGVtZW50LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGF0ZS5lbGVtZW50LmFwcGVuZENoaWxkKGRhdGVJbnB1dC5lbGVtZW50KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgY2xhc3NOYW1lOiBcImxlZnQtc2lkZVwiLFxuICB9KTtcbiAgZGVzY3JpcHRpb24uZWxlbWVudC5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246PGJyPmA7XG4gIGJvZHkuZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5lbGVtZW50KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICBpZDogXCJkZXNjcmlwdGlvbklucHV0XCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBkZXNjcmlwdGlvbklucHV0LmVsZW1lbnQucm93cyA9IFwiNlwiO1xuICBkZXNjcmlwdGlvbklucHV0LmVsZW1lbnQuY29scyA9IFwiMjFcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5lbGVtZW50LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb24uZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwicHJpb3JpdHlcIixcbiAgICBjbGFzc05hbWU6IFwicmlnaHQtc2lkZVwiLFxuICB9KTtcbiAgcHJpb3JpdHkuZWxlbWVudC5pbm5lckhUTUwgPSBgUHJpb3JpdHk6PGJyPmA7XG4gIGJvZHkuZWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eS5lbGVtZW50KTtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgaWQ6IFwicHJpb3JpdHlJbnB1dFwiLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dFwiLFxuICB9KTtcbiAgcHJpb3JpdHkuZWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IHByaW9yaXR5Q2hvaWNlID0gbG9vcEVsZW1lbnRzKHtcbiAgICB0eXBlOiBcIm9wdGlvblwiLFxuICAgIGlkOiBcInByaW9yaXR5Q2hvaWNlXCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBwcmlvcml0eUNob2ljZS5tYWtlTXVsdGlwbGUoMCwgMywgXCJPcHRpb25cIiwgXCJwcmlvcml0eUlucHV0XCIpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlDaG9pY2UwXCIpLmlubmVySFRNTCA9IFwiQVNBUFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5Q2hvaWNlMVwiKS5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUNob2ljZTJcIikuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUNob2ljZTNcIikuaW5uZXJIVE1MID0gXCJMb3dcIjtcblxuICBjb25zdCBwcm9qZWN0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IGBwcm9qZWN0YCxcbiAgICBuYW1lOiBgYCxcbiAgICBjbGFzc05hbWU6IFwicmlnaHQtc2lkZVwiLFxuICB9KTtcbiAgcHJvamVjdC5lbGVtZW50LmlubmVySFRNTCA9IGBQcm9qZWN0Ojxicj5gO1xuICBwcmlvcml0eS5lbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3QuZWxlbWVudCk7XG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgaWQ6IFwicHJvamVjdElucHV0XCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBwcm9qZWN0SW5wdXQuZWxlbWVudC5yZXF1aXJlZCA9IHRydWU7XG4gIHByb2plY3QuZWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQuZWxlbWVudCk7XG5cbiAgY29uc3QgcHJvamVjdENob2ljZSA9IGxvb3BFbGVtZW50cyh7XG4gICAgdHlwZTogXCJzZWxlY3RcIixcbiAgICBpZDogXCJwcm9qZWN0Q2hvaWNlXCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBwcm9qZWN0Q2hvaWNlLm1ha2VNdWx0aXBsZSgwLCAxLCBcIk9wdGlvblwiLCBcInByb2plY3RJbnB1dFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Q2hvaWNlMFwiKS5pbm5lckhUTUwgPSBcIkluYm94XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdENob2ljZTFcIikuaW5uZXJIVE1MID0gXCJUb2RheVwiO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDaG9pY2UwXCIpXG4gICAgLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjdXN0b21MaXN0MExpc3RcIik7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwicHJvamVjdENob2ljZTFcIilcbiAgICAuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImN1c3RvbUxpc3QxTGlzdFwiKTtcblxuICBjb25zdCBidXR0b25Ib2xkZXJMZWZ0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiYnV0dG9uSG9sZGVyXCIsXG4gICAgY2xhc3NOYW1lOiBcImxlZnQtc2lkZVwiLFxuICB9KTtcbiAgYm9keS5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlckxlZnQuZWxlbWVudCk7XG5cbiAgY29uc3QgYnV0dG9uSG9sZGVyUmlnaHQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJidXR0b25Ib2xkZXJcIixcbiAgICBjbGFzc05hbWU6IFwicmlnaHQtc2lkZVwiLFxuICB9KTtcbiAgYm9keS5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkhvbGRlclJpZ2h0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IGNhbmNlbCA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgaWQ6IFwiY2FuY2VsXCIsXG4gICAgY2xhc3NOYW1lOiBcImJ1dHRvblwiLFxuICB9KTtcbiAgY2FuY2VsLmVsZW1lbnQudHlwZSA9IFwicmVzZXRcIjtcbiAgYnV0dG9uSG9sZGVyUmlnaHQuZWxlbWVudC5hcHBlbmRDaGlsZChjYW5jZWwuZWxlbWVudCk7XG5cbiAgY29uc3Qgc3VibWlzc2lvbiA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgaWQ6IFwic3VibWlzc2lvblwiLFxuICAgIGNsYXNzTmFtZTogXCJidXR0b25cIixcbiAgfSk7XG4gIHN1Ym1pc3Npb24uZWxlbWVudC50eXBlID0gXCJzdWJtaXRcIjtcbiAgc3VibWlzc2lvbi5lbGVtZW50LnZhbHVlID0gXCJBZGQgVGFza1wiO1xuICBidXR0b25Ib2xkZXJSaWdodC5lbGVtZW50LmFwcGVuZENoaWxkKHN1Ym1pc3Npb24uZWxlbWVudCk7XG5cbiAgcmV0dXJuIHsgbW9kYWxDb250YWluZXIsIGNhbmNlbCwgY2xvc2VJY29uLCBzdWJtaXNzaW9uIH07XG59O1xuXG5leHBvcnQgeyBtYWtlTW9kYWwsIGNob2ljZUFycmF5IH07XG4iLCJpbXBvcnQgeyBsb29wRWxlbWVudHMsIG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vbWFrZS1pdGVtc1wiO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xuXG5jb25zdCBtYWtlU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcInNpZGVuYXZcIixcbiAgICBjbGFzc05hbWU6IFwic2lkZW5hdlwiLFxuICB9KTtcbiAgZ3JpZC5hcHBlbmRDaGlsZChzaWRlYmFyLmVsZW1lbnQpO1xuXG4gIGNvbnN0IHNpZGVJdGVtID0gbG9vcEVsZW1lbnRzKHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGlkOiBgc2lkZUJ1dHRvbmAsXG4gICAgY2xhc3NOYW1lOiBcInByb2plY3RcIixcbiAgICBocmVmOiBcIiNcIixcbiAgfSk7XG4gIHNpZGVJdGVtLm1ha2VNdWx0aXBsZSgwLCAyLCBcImJ1dHRvblwiLCBcInNpZGVuYXZcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJ1dHRvbjBcIikuaW5uZXJIVE1MID0gXCJJbmJveFwiO1xuXG4gIGNvbnN0IGluYm94ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImgxXCIsIGlkOiBgY3VzdG9tTGlzdDBgLCB0ZXh0OiBgSW5ib3hgIH0pO1xuICBpbmJveC5tYWtlTGlzdCh7IGlkOiBgY3VzdG9tTGlzdDBgLCB0ZXh0OiBgSW5ib3hgIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tTGlzdDBcIikuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgyW2NsYXNzXj1cImxpc3RzXCJdYCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21MaXN0MFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdWxbY2xhc3NePVwibGlzdFwiXWApLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0MExpc3RgKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUxpc3QwTGlzdGApLnNldEF0dHJpYnV0ZSA9IGBJbmJveDBgO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdG9kYXkgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiaDFcIiwgaWQ6IGBjdXN0b21MaXN0MWAsIHRleHQ6IGBUb2RheWAgfSk7XG4gIHRvZGF5Lm1ha2VMaXN0KHsgaWQ6IGBjdXN0b21MaXN0MWAsIHRleHQ6IGBUb2RheWAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJ1dHRvbjFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21MaXN0MVwiKS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaDJbY2xhc3NePVwibGlzdHNcIl1gKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbUxpc3QxXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGB1bFtjbGFzc149XCJsaXN0XCJdYCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUxpc3QxTGlzdGApLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21MaXN0MVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0MUxpc3RgKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGBUb2RheTFgKTtcblxuICBjb25zdCBpbmJveEljb24gPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpXCIsXG4gICAgaWQ6IFwiaG9tZUljb25cIixcbiAgICBjbGFzc05hbWU6IFwiZmFkIGZhLWluYm94XCIsXG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24wXCIpLnByZXBlbmQoaW5ib3hJY29uLmVsZW1lbnQpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJ1dHRvbjFcIikuaW5uZXJIVE1MID0gXCJUb2RheVwiO1xuICBjb25zdCB0b2RheUljb24gPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpXCIsXG4gICAgaWQ6IFwiY2FsZW5kYXJJY29uXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhcyBmYS1jYWxlbmRhci1kYXlcIixcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJ1dHRvbjFcIikucHJlcGVuZCh0b2RheUljb24uZWxlbWVudCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQnV0dG9uMlwiKS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG4gIGNvbnN0IGRpYWdyYW1JY29uID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcImxpc3RJY29uXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhcyBmYS1saXN0XCIsXG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24yXCIpLnByZXBlbmQoZGlhZ3JhbUljb24uZWxlbWVudCk7XG5cbiAgY29uc3QgcHJvamVjdExpc3QgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogYHByb2plY3RMaXN0YCxcbiAgICBjbGFzc05hbWU6IFwicHJvamVjdFwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9KTtcblxuICBjb25zdCBpbnB1dEZvcm0gPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiZm9ybVwiLCBpZDogYHByb2plY3RGb3JtYCB9KTtcbiAgc2lkZWJhci5lbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RMaXN0LmVsZW1lbnQpO1xuICBwcm9qZWN0TGlzdC5lbGVtZW50LmFwcGVuZENoaWxkKGlucHV0Rm9ybS5lbGVtZW50KTtcbn07XG5cbmNvbnN0IHNob3dBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJ1dHRvbjJcIik7XG4gIHByb2plY3RIb2xkZXIuY2xhc3NOYW1lID0gXCJzaWRlQnV0dG9uMlwiO1xuICBwcm9qZWN0SG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBwcm9qZWN0SG9sZGVyLm5leHRFbGVtZW50U2libGluZztcblxuICAgIHByb2plY3RIb2xkZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNpZGVCdXR0b24yLS1hY3RpdmVcIik7XG5cbiAgICBpZiAocHJvamVjdEhvbGRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlQnV0dG9uMi0tYWN0aXZlXCIpKSB7XG4gICAgICBwcm9qZWN0Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgMTAwJWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1ha2VQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRCYXIgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBgaW5wdXRCYXJgLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dEJhclwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9KTtcbiAgaW5wdXRCYXIuZWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0QmFyLmVsZW1lbnQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dEJhci5lbGVtZW50LnBsYWNlaG9sZGVyID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gIGNvbnN0IGFwcHJvdmVkUHJvamVjdCA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGlkOiBgYXBwcm92ZWRQcm9qZWN0YCxcbiAgICBjbGFzc05hbWU6IFwiZmFzIGZhLWNoZWNrLXNxdWFyZVwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9KTtcbiAgYXBwcm92ZWRQcm9qZWN0LmVsZW1lbnQudHlwZSA9IFwic3VibWl0XCI7XG5cbiAgY29uc3QgcmVqZWN0ZWRQcm9qZWN0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgaWQ6IFwicmVqZWN0ZWRQcm9qZWN0XCIsXG4gICAgY2xhc3NOYW1lOiBcImZhcyBmYS13aW5kb3ctY2xvc2VcIixcbiAgfSk7XG4gIHJlamVjdGVkUHJvamVjdC5lbGVtZW50LnR5cGUgPSBcInJlc2V0XCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKS5hcHBlbmRDaGlsZChpbnB1dEJhci5lbGVtZW50KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKS5hcHBlbmRDaGlsZChyZWplY3RlZFByb2plY3QuZWxlbWVudCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIikuYXBwZW5kQ2hpbGQoYXBwcm92ZWRQcm9qZWN0LmVsZW1lbnQpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEFycmF5ID0gW1wiSW5ib3hcIiwgXCJUb2RheVwiXTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0ZXh0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0QmFyXCIpLnZhbHVlO1xuICAgIHByb2plY3RBcnJheS5wdXNoKHRleHRWYWx1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKS5yZXNldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IHByb2plY3RBcnJheS5sZW5ndGggLSAxOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBtYWtlUHJvamVjdCA9IG1ha2VFbGVtZW50KHtcbiAgICAgICAgdHlwZTogXCJvcHRpb25cIixcbiAgICAgICAgaWQ6IGAke3RleHRWYWx1ZSArIGl9YCxcbiAgICAgICAgdGV4dDogYCR7dGV4dFZhbHVlfWAsXG4gICAgICB9KTtcbiAgICAgIG1ha2VQcm9qZWN0LmVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGV4dFZhbHVlfWA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJbnB1dFwiKS5hcHBlbmRDaGlsZChtYWtlUHJvamVjdC5lbGVtZW50KTtcbiAgICAgIG1ha2VQcm9qZWN0LmVsZW1lbnQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgY3VzdG9tTGlzdCR7aX1MaXN0YCk7XG5cbiAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBtYWtlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGlkOiBgY3VzdG9tQnV0dG9uJHtpfWAsXG4gICAgICAgIGNsYXNzTmFtZTogXCJwcm9qZWN0XCIsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgfSk7XG4gICAgICBwcm9qZWN0QnV0dG9uLmVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGV4dFZhbHVlfWA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24uZWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGxpc3QgPSBtYWtlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwiaDFcIixcbiAgICAgICAgaWQ6IGBjdXN0b21MaXN0JHtpfWAsXG4gICAgICAgIHRleHQ6IGAke3RleHRWYWx1ZX1gLFxuICAgICAgfSk7XG4gICAgICBsaXN0Lm1ha2VMaXN0KHsgaWQ6IGBjdXN0b21MaXN0JHtpfWAsIHRleHQ6IGAke3RleHRWYWx1ZX1gIH0pO1xuXG4gICAgICBjb25zdCBjdXN0b21MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUxpc3Qke2l9YCk7XG4gICAgICBjdXN0b21MaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChgY3VzdG9tQnV0dG9uJHtpfWApXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGlmIChjdXN0b21MaXN0LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgaDJbY2xhc3NePVwibGlzdHNcIl1gKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1c3RvbUxpc3Quc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGB1bFtjbGFzc149XCJsaXN0XCJdYClcbiAgICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3VzdG9tTGlzdCR7aX1MaXN0YCkuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgICAgIFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgY3VzdG9tTGlzdCR7aX1MaXN0YClcbiAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYCR7dGV4dFZhbHVlICsgaX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBncmlkLCBtYWtlU2lkZWJhciwgc2hvd0FsbFByb2plY3RzLCBtYWtlUHJvamVjdExpc3QsIGFkZFByb2plY3QgfTtcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgbWFrZVRhc2ssIG1ha2VCdXR0b24gfSBmcm9tIFwiLi9tYWtlLWl0ZW1zXCI7XG5cbmxldCBzdWJtaXRUeXBlID0gMDtcbmNvbnN0IG15VGFza3MgPSBbXTtcblxuY29uc3Qgc3RvcmVJbmZvID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHByb2plY3RNZW51SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJbnB1dFwiKTtcbiAgY29uc3Qgb3B0aW9uTWVudUlkID0gcHJvamVjdE1lbnVJZC5vcHRpb25zW3Byb2plY3RNZW51SWQuc2VsZWN0ZWRJbmRleF07XG4gIGNvbnN0IHN1Ym1pc3Npb24gPSBtYWtlVGFzayh7XG4gICAgaWQ6IG15VGFza3MubGVuZ3RoLFxuICAgIHRpdGxlOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWV9YCxcbiAgICBkZXNjcmlwdGlvbjogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbklucHV0XCIpLnZhbHVlfWAsXG4gICAgZHVlRGF0ZTogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWV9YCxcbiAgICBwcmlvcml0eTogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUlucHV0XCIpLnZhbHVlfWAsXG4gICAgcHJvamVjdDogYCR7b3B0aW9uTWVudUlkLmdldEF0dHJpYnV0ZShcIm5hbWVcIil9YCxcbiAgfSk7XG5cbiAgY29uc3QgcHVzaEluZm8gPSAoKSA9PiBhcnJheS5wdXNoKHN1Ym1pc3Npb24pO1xuXG4gIHJldHVybiB7IHB1c2hJbmZvIH07XG59O1xuXG5jb25zdCBsb2FkVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGluZm8gPSBzdG9yZUluZm8obXlUYXNrcyk7XG4gIGluZm8ucHVzaEluZm8oKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSAoaSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwicFwiLFxuICAgIGlkOiBgdGl0bGUke2l9YCxcbiAgICBjbGFzc05hbWU6IFwicHJvcGVydHlcIixcbiAgfSk7XG4gIHRpdGxlLmlubmVySFRNTCA9IGBUaXRsZTogJHtteVRhc2tzW2ldLnRpdGxlfWA7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBtYWtlQnV0dG9uKHtcbiAgICB0eXBlOiBcInBcIixcbiAgICBpZDogYGRlc2NyaXB0aW9uJHtpfWAsXG4gICAgY2xhc3NOYW1lOiBcInByb3BlcnR5XCIsXG4gIH0pO1xuICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246ICR7bXlUYXNrc1tpXS5kZXNjcmlwdGlvbn1gO1xuXG4gIGNvbnN0IHRhc2tEYXRlID0gbWFrZUJ1dHRvbih7XG4gICAgdHlwZTogXCJwXCIsXG4gICAgaWQ6IGB0YXNrRGF0ZSR7aX1gLFxuICAgIGNsYXNzTmFtZTogXCJwcm9wZXJ0eVwiLFxuICB9KTtcbiAgdGFza0RhdGUuaW5uZXJIVE1MID0gYERhdGU6ICR7Zm9ybWF0KG5ldyBEYXRlKG15VGFza3NbaV0uZHVlRGF0ZSksIFwiUFBwcFwiKX1gO1xuXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwicFwiLFxuICAgIGlkOiBgdGFza1ByaW9yaXR5JHtpfWAsXG4gICAgY2xhc3NOYW1lOiBcInByb3BlcnR5XCIsXG4gIH0pO1xuICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke215VGFza3NbaV0ucHJpb3JpdHl9YDtcblxuICBjb25zdCBjb250ZW50SG9sZGVyID0gbWFrZUJ1dHRvbih7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogYGNyZWF0ZWRIb2xkZXIke2l9YCxcbiAgICBjbGFzc05hbWU6IFwiY3JlYXRlZEhvbGRlclwiLFxuICB9KTtcblxuICBjb25zdCBuZXdUYXNrID0gbWFrZUJ1dHRvbih7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBpZDogYGNyZWF0ZWRUYXNrJHtpfWAsXG4gICAgY2xhc3NOYW1lOiBcImNyZWF0ZWRUYXNrXCIsXG4gIH0pO1xuICBuZXdUYXNrLmlubmVySFRNTCA9IGAke215VGFza3NbaV0udGl0bGV9YDtcblxuICBjb25zdCBjbGVhcklucHV0cyA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza1wiKS5yZXNldCgpO1xuXG4gIGNvbnN0IGFwcGVuZFRvTGlzdCA9ICgpID0+IHtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIH07XG5cbiAgY29uc3QgY29sbGFwc2VUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQ29udGVudCA9IG5ld1Rhc2submV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgbmV3VGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiY3JlYXRlZFRhc2stLWFjdGl2ZVwiKTtcbiAgICAgIGlmIChuZXdUYXNrLmNsYXNzTGlzdC5jb250YWlucyhcImNyZWF0ZWRUYXNrLS1hY3RpdmVcIikpIHtcbiAgICAgICAgdGFza0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7MTUwfXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQ29sb3JzID0gKGVsZW1lbnQpID0+IHtcbiAgICBpZiAobXlUYXNrc1tpXS5wcmlvcml0eSA9PT0gXCJBU0FQXCIpIHtcbiAgICAgIGVsZW1lbnQubmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMTUwNDg1XCI7XG4gICAgfSBlbHNlIGlmIChteVRhc2tzW2ldLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgZWxlbWVudC5uZXdUYXNrLnN0eWxlLmJhY2tncm91bmQgPSBcIiM1OTA5OTVcIjtcbiAgICB9IGVsc2UgaWYgKG15VGFza3NbaV0ucHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgIGVsZW1lbnQubmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjQzYyQTg4XCI7XG4gICAgfSBlbHNlIGlmIChteVRhc2tzW2ldLnByaW9yaXR5ID09PSBcIkxvd1wiKSB7XG4gICAgICBlbGVtZW50Lm5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAzQzRBMVwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbnNlcnRCZWZvcmVMaXN0ID0gKG51bSkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG15VGFza3NbbnVtXS5wcm9qZWN0KS5sYXN0Q2hpbGQuYmVmb3JlKG5ld1Rhc2spO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQobXlUYXNrc1tudW1dLnByb2plY3QpXG4gICAgICAubGFzdENoaWxkLmJlZm9yZShjb250ZW50SG9sZGVyKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0YXNrRGF0ZSxcbiAgICB0YXNrUHJpb3JpdHksXG4gICAgY29udGVudEhvbGRlcixcbiAgICBuZXdUYXNrLFxuICAgIGFwcGVuZFRvTGlzdCxcbiAgICBjb2xsYXBzZVRhc2ssXG4gICAgaW5zZXJ0QmVmb3JlTGlzdCxcbiAgICBjbGVhcklucHV0cyxcbiAgICBjaGFuZ2VDb2xvcnMsXG4gIH07XG59O1xuXG5sZXQgaWROdW1iZXIgPSB7fTtcblxuY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwiYVwiLFxuICAgIGlkOiBcImVkaXRJY29uXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhcyBmYS1lZGl0XCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0pO1xuICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kRWRpdCA9ICh0YXNrKSA9PiB0YXNrLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBvcGVuRWRpdG9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHQgIHN1Ym1pdFR5cGUgPSAxO1xuICAgICAgY29uc3Qgc3BlY2lmaWNJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkO1xuXHRcdGlkTnVtYmVyLmlkID0gc3BlY2lmaWNJZC5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsSGVhZGVyJykuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgPSAnVXBkYXRlIFRhc2snXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3VibWlzc2lvbmApLnZhbHVlID0gXCJVcGRhdGUgVGFza1wiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlSW5wdXRgKS52YWx1ZSA9IG15VGFza3NbaWROdW1iZXIuaWRdLnRpdGxlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRlc2NyaXB0aW9uSW5wdXRgKS52YWx1ZSA9XG4gICAgICAgIG15VGFza3NbaWROdW1iZXIuaWRdLmRlc2NyaXB0aW9uO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRhdGVJbnB1dGApLnZhbHVlID0gbXlUYXNrc1tpZE51bWJlci5pZF0uZHVlRGF0ZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmlvcml0eUlucHV0YCkudmFsdWUgPSBteVRhc2tzW2lkTnVtYmVyLmlkXS5wcmlvcml0eTtcblx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdElucHV0YCkudmFsdWUgPSBteVRhc2tzW2lkTnVtYmVyLmlkXS5wcm9qZWN0O1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0b3IpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEVkaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaG9zZW5JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aWROdW1iZXIuaWR9YCk7XG5cdCAgY29uc3QgY2hvc2VuSG9sZGVySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3JlYXRlZEhvbGRlciR7aWROdW1iZXIuaWR9YCk7XG5cbiAgICAgIGNob3NlbklkLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gYCR7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZVxuICAgICAgfWA7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZSR7aWROdW1iZXIuaWR9YCkuaW5uZXJIVE1MID0gYFRpdGxlOiAke1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWVcbiAgICAgIH1gO1xuICAgICAgbXlUYXNrc1tpZE51bWJlci5pZF0udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBgZGVzY3JpcHRpb24ke2lkTnVtYmVyLmlkfWBcbiAgICAgICkuaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiAke1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWVcbiAgICAgIH1gO1xuICAgICAgbXlUYXNrc1tpZE51bWJlci5pZF0uZGVzY3JpcHRpb24gPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWU7XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBgdGFza0RhdGUke2lkTnVtYmVyLmlkfWBcbiAgICAgICkuaW5uZXJIVE1MID0gYERhdGU6ICR7Zm9ybWF0KFxuICAgICAgICBuZXcgRGF0ZShteVRhc2tzW2lkTnVtYmVyLmlkXS5kdWVEYXRlKSxcbiAgICAgICAgXCJQUHBwXCJcbiAgICAgICl9YDtcbiAgICAgIG15VGFza3NbaWROdW1iZXIuaWRdLmR1ZURhdGUgPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZTtcblxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGB0YXNrUHJpb3JpdHkke2lkTnVtYmVyLmlkfWBcbiAgICAgICkuaW5uZXJIVE1MID0gYFByaW9yaXR5OiAke1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWVcbiAgICAgIH1gO1xuICAgICAgbXlUYXNrc1tpZE51bWJlci5pZF0ucHJpb3JpdHkgPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWU7XG5cblx0ICBjb25zdCBwcm9qZWN0TWVudUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIik7XG5cdCAgY29uc3Qgb3B0aW9uTWVudUlkID0gcHJvamVjdE1lbnVJZC5vcHRpb25zW3Byb2plY3RNZW51SWQuc2VsZWN0ZWRJbmRleF07XG5cblx0ICBteVRhc2tzW2lkTnVtYmVyLmlkXS5wcm9qZWN0ID0gXG5cdCAgb3B0aW9uTWVudUlkLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG5cbiAgICAgIGlmIChteVRhc2tzW2lkTnVtYmVyLmlkXS5wcmlvcml0eSA9PT0gXCJBU0FQXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpZE51bWJlci5pZH1gKS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMTUwNDg1XCI7XG4gICAgICB9IGVsc2UgaWYgKG15VGFza3NbaWROdW1iZXIuaWRdLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3JlYXRlZFRhc2ske2lkTnVtYmVyLmlkfWApLnN0eWxlLmJhY2tncm91bmQgPSBcIiM1OTA5OTVcIjtcbiAgICAgIH0gZWxzZSBpZiAobXlUYXNrc1tpZE51bWJlci5pZF0ucHJpb3JpdHkgPT09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpZE51bWJlci5pZH1gKS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjQzYyQTg4XCI7XG4gICAgICB9IGVsc2UgaWYgKG15VGFza3NbaWROdW1iZXIuaWRdLnByaW9yaXR5ID09PSBcIkxvd1wiKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aWROdW1iZXIuaWR9YCkuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAzQzRBMVwiO1xuICAgICAgfVxuXG5cdCAgY29uc3QgY2xvbmVOb2RlV2l0aEV2ZW50cyA9ICggb3JnTm9kZSApID0+IHtcblxuXHRcdGNvbnN0IG9yZ05vZGVFdmVudHMgPSBvcmdOb2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XG5cdFx0Y29uc3QgY2xvbmVOb2RlID0gb3JnTm9kZS5jbG9uZU5vZGUoIHRydWUgKTtcblx0XHRjb25zdCBjbG9uZU5vZGVFdmVudHMgPSBjbG9uZU5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcblx0ICAgXG5cdFx0Y29uc3QgYWxsRXZlbnRzID0gWydvbmFib3J0Jywnb25iZWZvcmVjb3B5Jywnb25iZWZvcmVjdXQnLCdvbmJlZm9yZXBhc3RlJywnb25ibHVyJywnb25jaGFuZ2UnLCdvbmNsaWNrJyxcblx0ICAgJ29uY29udGV4dG1lbnUnLCdvbmNvcHknLCdvbmRibGNsaWNrJywnb25kcmFnJywnb25kcmFnZW5kJywnb25kcmFnZW50ZXInLCAnb25kcmFnbGVhdmUnICxcblx0ICAgJ29uZHJhZ292ZXInLCdvbmRyYWdzdGFydCcsICdvbmRyb3AnLCdvbmVycm9yJywnb25mb2N1cycsJ29uaW5wdXQnLCdvbmludmFsaWQnLCdvbmtleWRvd24nLFxuXHQgICAnb25rZXlwcmVzcycsICdvbmtleXVwJywnb25sb2FkJywnb25tb3VzZWRvd24nLCdvbm1vdXNlbW92ZScsJ29ubW91c2VvdXQnLFxuXHQgICAnb25tb3VzZW92ZXInLCdvbm1vdXNldXAnLCAnb25tb3VzZXdoZWVsJywgJ29ucGFzdGUnLCdvbnJlc2V0JywgJ29ucmVzaXplJywnb25zY3JvbGwnLCdvbnNlYXJjaCcsICdvbnNlbGVjdCcsJ29uc2VsZWN0c3RhcnQnLCdvbnN1Ym1pdCcsJ29udW5sb2FkJ107XG5cdCAgIFxuXHRcdFxuXHRcdC8vIFRoZSBub2RlIHJvb3Rcblx0XHRmb3IoIGxldCBqPTA7IGo8YWxsRXZlbnRzLmxlbmd0aCA7IGorKyApe1xuXHRcdCBldmFsKCdpZiggb3JnTm9kZS4nK2FsbEV2ZW50c1tqXSsnICkgY2xvbmVOb2RlLicrYWxsRXZlbnRzW2pdKycgPSBvcmdOb2RlLicrYWxsRXZlbnRzW2pdKTtcblx0XHR9XG5cdCAgIFxuXHRcdC8vIE5vZGUgZGVzY2VuZGFudHNcblx0XHRmb3IoIGxldCBpPTAgOyBpPG9yZ05vZGVFdmVudHMubGVuZ3RoIDsgaSsrICl7XG5cdFx0IGZvciggbGV0IGo9MDsgajxhbGxFdmVudHMubGVuZ3RoIDsgaisrICl7XG5cdFx0ICBldmFsKCdpZiggb3JnTm9kZUV2ZW50c1tpXS4nK2FsbEV2ZW50c1tqXSsnICkgY2xvbmVOb2RlRXZlbnRzW2ldLicrYWxsRXZlbnRzW2pdKycgPSBvcmdOb2RlRXZlbnRzW2ldLicrYWxsRXZlbnRzW2pdKTtcblx0XHQgfVxuXHRcdH1cblx0ICAgXG5cdFx0cmV0dXJuIGNsb25lTm9kZTtcblx0ICAgXG5cdCAgIH1cblxuXG5cdCAgaWYgKG15VGFza3NbaWROdW1iZXIuaWRdLnByb2plY3QgIT09IGNob3NlbklkLnBhcmVudE5vZGUuaWQpIHtcblx0XHRcdGNvbnN0IGNsb25lZFRhc2sgPSBjbG9uZU5vZGVXaXRoRXZlbnRzKGNob3NlbklkKTtcblx0XHRcdGNsb25lZFRhc2sub25jbGljayA9ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aWROdW1iZXIuaWR9YCkubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aWROdW1iZXIuaWR9YCkuY2xhc3NMaXN0LnRvZ2dsZShcImNyZWF0ZWRUYXNrLS1hY3RpdmVcIik7XG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aWROdW1iZXIuaWR9YCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3JlYXRlZFRhc2stLWFjdGl2ZVwiKSkge1xuXHRcdFx0XHRcdCAgdGFza0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7MTUwfXB4YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCAgdGFza0NvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgfTtcblx0XHRcdFxuXHRcdCAgICBjb25zdCBjbG9uZWRIb2xkZXIgPSBjbG9uZU5vZGVXaXRoRXZlbnRzKGNob3NlbkhvbGRlcklkKTtcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNob3NlbklkLnBhcmVudE5vZGUuaWQpLnJlbW92ZUNoaWxkXG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkVGFzayR7aWROdW1iZXIuaWR9YCkpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNob3NlbkhvbGRlcklkLnBhcmVudE5vZGUuaWQpLnJlbW92ZUNoaWxkXG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjcmVhdGVkSG9sZGVyJHtpZE51bWJlci5pZH1gKSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobXlUYXNrc1tpZE51bWJlci5pZF0ucHJvamVjdCkubGFzdENoaWxkLmJlZm9yZVxuXHRcdChjbG9uZWRUYXNrKTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKG15VGFza3NbaWROdW1iZXIuaWRdLnByb2plY3QpXG4gICAgICAubGFzdENoaWxkLmJlZm9yZShjbG9uZWRIb2xkZXIpO1xufTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnJlc2V0KCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKG15VGFza3MpO1xuICAgIH07XG4gIHJldHVybiB7IGFwcGVuZEVkaXQsIGVkaXRUYXNrLCBzdWJtaXRFZGl0IH07XG59O1xuXG5jb25zdCB0cmFzaCA9IChpKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuZXdUYXNrLFxuICAgIGFwcGVuZFRvTGlzdCxcbiAgICBjb2xsYXBzZVRhc2ssXG4gICAgaW5zZXJ0QmVmb3JlTGlzdCxcbiAgICBjbGVhcklucHV0cyxcbiAgICBjaGFuZ2VDb2xvcnMsXG4gIH0gPSBjcmVhdGVUYXNrQnV0dG9uKGkpO1xuICBjb25zdCB7IGFwcGVuZEVkaXQsIGVkaXRUYXNrfSA9IGVkaXQoKTtcbiAgY29uc3QgdHJhc2hCdXR0b24gPSBtYWtlQnV0dG9uKHtcbiAgICB0eXBlOiBcImFcIixcbiAgICBpZDogXCJ0cmFzaEljb25cIixcbiAgICBjbGFzc05hbWU6IFwiZmFyIGZhLXRyYXNoLWFsdFwiLFxuICB9KTtcbiAgY29uc3QgYXBwZW5kVHJhc2ggPSAoKSA9PiBuZXdUYXNrLmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcbiAgY29uc3QgcmVtb3ZlVGFzayA9IChudW0pID0+IFxuICAgIHRyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBzaWJsaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGAke2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkfWBcbiAgICAgICkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgc2libGluZy5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkfWApLnJlbW92ZSgpO1xuICAgICAgY29uc3QgaW5kZXggPSBteVRhc2tzLm1hcCgoeCkgPT4geC5pZCkuaW5kZXhPZihudW0pO1xuICAgICAgbXlUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgY29uc29sZS5sb2cobXlUYXNrcyk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgcmV0dXJuIHtcbiAgICBhcHBlbmRUcmFzaCxcbiAgICByZW1vdmVUYXNrLFxuICAgIGFwcGVuZFRvTGlzdCxcbiAgICBjb2xsYXBzZVRhc2ssXG4gICAgaW5zZXJ0QmVmb3JlTGlzdCxcbiAgICBjbGVhcklucHV0cyxcbiAgICBjaGFuZ2VDb2xvcnMsXG4gICAgbmV3VGFzayxcbiAgICBhcHBlbmRFZGl0LFxuXHRlZGl0VGFzayxcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dUb2RvID0gKCkgPT4ge1xuXG4gIGNvbnN0IHN1Ym1pdEluZm8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzdWJtaXRUeXBlID09PSAwKSB7XG4gICAgICBsb2FkVGFza3MoKTtcbiAgICAgIGZvciAobGV0IGkgPSBteVRhc2tzLmxlbmd0aCAtIDE7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSB0cmFzaChpKTtcbiAgICAgICAgdGFza09iamVjdC5jaGFuZ2VDb2xvcnModGFza09iamVjdCk7XG4gICAgICAgIHRhc2tPYmplY3QuYXBwZW5kVG9MaXN0KCk7XG4gICAgICAgIHRhc2tPYmplY3QuaW5zZXJ0QmVmb3JlTGlzdChpKTtcbiAgICAgICAgdGFza09iamVjdC5jb2xsYXBzZVRhc2sodGFza09iamVjdC5uZXdUYXNrKTtcblx0XHR0YXNrT2JqZWN0LmFwcGVuZEVkaXQodGFza09iamVjdC5uZXdUYXNrKTtcbiAgICAgICAgdGFza09iamVjdC5hcHBlbmRUcmFzaCgpO1xuICAgICAgICB0YXNrT2JqZWN0LnJlbW92ZVRhc2soaSk7XG5cdFx0dGFza09iamVjdC5lZGl0VGFzaygpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikucmVzZXQoKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdWJtaXRUeXBlID09PSAxKSB7XG5cdFx0bGV0IGphbWVzID0gZWRpdCgpO1xuXHRcdGphbWVzLnN1Ym1pdEVkaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0SW5mbyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaVtjbGFzc149XCJmYXMgZmEtcGx1c1wiXWApLmZvckVhY2goKGVsZW1lbnQpID0+IFxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHN1Ym1pdFR5cGUgPSAwO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEhlYWRlcicpLm5vZGVWYWx1ZSA9ICdOZXcgVGFzaydcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3VibWlzc2lvbmApLnZhbHVlID0gXCJBZGQgVGFza1wiO1xuXHR9KSlcbn07XG5cbmV4cG9ydCB7IG1ha2VUYXNrLCBjcmVhdGVUYXNrQnV0dG9uLCBsb2FkVGFza3MsIHNob3dUb2RvIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbiAgLypcbiAgICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gICAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAgICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICAgKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gICAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gICAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gICAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAgICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gICAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAgICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gICAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAgICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICAgKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAgICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gICAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAgICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICAgKlxuICAgKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gICAqXG4gICAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICAgKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICAgKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gICAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICAgKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gICAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICAgKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAgICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gICAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICAgKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gICAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gICAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gICAqL1xuXG59O1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihkYXRlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGFyc2VQYXR0ZXJucykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHZhbHVlID0gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcblxuICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXSAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbiAgLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4gIC8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuICAvLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocXVhcnRlcikgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cblxudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNob3dUb2RvIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgbWFrZU5hdmJhciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHtcbiAgbWFrZVNpZGViYXIsXG4gIHNob3dBbGxQcm9qZWN0cyxcbiAgbWFrZVByb2plY3RMaXN0LFxuICBhZGRQcm9qZWN0LFxufSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBtYWtlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xuXG5cbihmdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICBtYWtlTmF2YmFyKCk7XG4gIG1ha2VTaWRlYmFyKCk7XG4gIG1ha2VQcm9qZWN0TGlzdCgpO1xuICBzaG93QWxsUHJvamVjdHMoKTtcbiAgYWRkUHJvamVjdCgpO1xuICBtYWtlTW9kYWwoKTtcbiAgc2hvd1RvZG8oKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9