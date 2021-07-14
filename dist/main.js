/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/copyrightbar.js":
/*!*****************************!*\
  !*** ./src/copyrightbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");
 //	Houses copyright bar

var container = document.getElementById("copyrightHolder"); //	Generates complete copyright bar

var makeCopyright = function makeCopyright() {
  var copyright = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "div",
    id: "copyright",
    className: "clearfix"
  });
  container.appendChild(copyright);
  var copyrightText = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "div",
    id: "copyrightText",
    className: "text float left"
  });
  copyright.appendChild(copyrightText);
  var copyrightLinks = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "ul",
    id: "links",
    className: "links float right"
  });
  copyright.appendChild(copyrightLinks);
  var gitIcon = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "li"
  });
  var gitLink = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "a"
  });
  var gitFont = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeButton)({
    type: "i",
    className: "fab fa-github-square"
  });
  gitLink.href = "https://github.com/Jameslo599";
  gitLink.target = "_blank";
  gitLink.rel = "noreferrer noopener";
  gitLink.appendChild(gitFont);
  gitIcon.appendChild(gitLink);
  copyrightLinks.appendChild(gitIcon);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCopyright);

/***/ }),

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

var content = document.getElementById("content"); // Generates complete navbar

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

var grid = document.getElementById("grid"); // Generates DOM elements with desired methods

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
}; // Generates DOM elements that need to be looped.


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
}; // Generates task objects


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
}; // Generates DOM elements that don't require namespacing for ease of use


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


 // Houses project names to match with the selected project user wants task to go into

var choiceArray = ["CustomList0List", "CustomList1List"]; // Generates modal to input task information

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
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "showSavedProjects": () => (/* binding */ showSavedProjects)
/* harmony export */ });
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");

var grid = document.getElementById("grid"); // Houses names for all created project folders

var projectArray = ["Inbox", "Today"]; // Generates complete sidebar

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
}; // Creates a button that contains text input to create custom projects


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
}; // Creates project input text bar


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
}; // Generates new project button along with associated titles and lists


var addProject = function addProject() {
  document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var textValue = document.getElementById("inputBar").value;
    document.getElementById("projectForm").reset();
    projectArray.push(textValue);

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
        href: "#",
        text: "".concat(textValue)
      });
      projectButton.element.innerHTML = "".concat(textValue);
      localStorage.setItem("currentProjects", JSON.stringify(projectArray));
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
}; // Generates any projects on window load that are saved in local storage


var showSavedProjects = function showSavedProjects() {
  if (!localStorage.getItem("currentProjects")) {
    localStorage.setItem("currentProjects", JSON.stringify(projectArray));
  } else {
    projectArray = JSON.parse(localStorage.getItem("currentProjects"));
  }

  var _loop2 = function _loop2(i) {
    var makeProject = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: "option",
      id: "".concat(projectArray[i] + i),
      text: "".concat(projectArray[i])
    });
    makeProject.element.innerHTML = "".concat(projectArray[i]);
    document.getElementById("projectInput").appendChild(makeProject.element);
    makeProject.element.setAttribute("name", "customList".concat(i, "List"));
    var projectButton = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: "button",
      id: "customButton".concat(i),
      className: "project",
      href: "#",
      text: "".concat(projectArray[i])
    });
    projectButton.element.innerHTML = "".concat(projectArray[i]);
    localStorage.setItem("currentProjects", JSON.stringify(projectArray));
    document.getElementById("projectList").appendChild(projectButton.element);
    var list = (0,_make_items__WEBPACK_IMPORTED_MODULE_0__.makeElement)({
      type: "h1",
      id: "customList".concat(i),
      text: "".concat(projectArray[i])
    });
    list.makeList({
      id: "customList".concat(i),
      text: "".concat(projectArray[i])
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
        document.getElementById("customList".concat(i, "List")).setAttribute("name", "".concat(projectArray[i] + i));
      }
    });
  };

  for (var i = 2; i < projectArray.length; i += 1) {
    _loop2(i);
  }
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
/* harmony export */   "showTodo": () => (/* binding */ showTodo),
/* harmony export */   "showSavedTodo": () => (/* binding */ showSavedTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _make_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-items */ "./src/make-items.js");

 // 0 for new tasks, 1 for task edits

var submitType = 0; // Houses all created tasks

var myTasks = []; // Retrieves saved tasks on local storage

var setTasks = function setTasks() {
  myTasks = JSON.parse(localStorage.getItem("currentTasks"));
}; // Saves tasks on local storage


var populateTodo = function populateTodo() {
  localStorage.setItem("currentTasks", JSON.stringify(myTasks));
}; // Collects information from user inputs to create new task


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
}; // Generates completed task


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
}; // Holds idNumber value that is create inside function in global scope to be used in other functions


var idNumber = {}; // Creates edit button with associated methods

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
      document.getElementById("modalHeader").childNodes[0].nodeValue = "Update Task";
      document.getElementById("submission").value = "Update Task";
      document.getElementById("titleInput").value = myTasks[idNumber.id].title;
      document.getElementById("descriptionInput").value = myTasks[idNumber.id].description;
      document.getElementById("dateInput").value = myTasks[idNumber.id].dueDate;
      document.getElementById("priorityInput").value = myTasks[idNumber.id].priority;
      document.getElementById("projectInput").disabled = true;
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

    if (myTasks[idNumber.id].priority === "ASAP") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#150485";
    } else if (myTasks[idNumber.id].priority === "High") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#590995";
    } else if (myTasks[idNumber.id].priority === "Medium") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#C62A88";
    } else if (myTasks[idNumber.id].priority === "Low") {
      document.getElementById("createdTask".concat(idNumber.id)).style.background = "#03C4A1";
    }

    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("newTask").reset();
  };

  return {
    appendEdit: appendEdit,
    editTask: editTask,
    submitEdit: submitEdit
  };
}; // Creates trash button with associated methods


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
      populateTodo();
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
}; // Retrieves saved tasks on window load


var showSavedTodo = function showSavedTodo() {
  if (!localStorage.getItem("currentTasks")) {
    populateTodo();
  } else {
    setTasks();
  }

  for (var i = 0; i < myTasks.length; i += 1) {
    var taskObject = trash(i);
    taskObject.changeColors(taskObject);
    taskObject.appendToList();
    taskObject.insertBeforeList(i);
    taskObject.collapseTask(taskObject.newTask);
    taskObject.appendEdit(taskObject.newTask);
    taskObject.appendTrash();
    taskObject.removeTask(i);
    taskObject.editTask();
  }
}; // Displays user submitted information on the task button


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
        populateTodo();
      }
    } else if (submitType === 1) {
      var taskEdit = edit();
      taskEdit.submitEdit();
      populateTodo();
    }
  };

  document.getElementById("newTask").addEventListener("submit", submitInfo);
  document.querySelectorAll("i[class^=\"fas fa-plus\"]").forEach(function (element) {
    return element.addEventListener("click", function () {
      submitType = 0;
      document.getElementById("modalHeader").nodeValue = "New Task";
      document.getElementById("submission").value = "Add Task";
      document.getElementById("projectInput").disabled = false;
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
/* harmony import */ var _copyrightbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyrightbar */ "./src/copyrightbar.js");




 // Generates complete application!

(function createSidebar() {
  (0,_header__WEBPACK_IMPORTED_MODULE_1__.makeNavbar)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.makeSidebar)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.makeProjectList)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.showAllProjects)();
  (0,_copyrightbar__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.addProject)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_3__.makeModal)();
  (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.showSavedProjects)();
  (0,_todo_items__WEBPACK_IMPORTED_MODULE_0__.showSavedTodo)();
  (0,_todo_items__WEBPACK_IMPORTED_MODULE_0__.showTodo)();
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21ha2UtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1ha2VDb3B5cmlnaHQiLCJjb3B5cmlnaHQiLCJtYWtlQnV0dG9uIiwidHlwZSIsImlkIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjb3B5cmlnaHRUZXh0IiwiY29weXJpZ2h0TGlua3MiLCJnaXRJY29uIiwiZ2l0TGluayIsImdpdEZvbnQiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiY29udGVudCIsIm1ha2VOYXZiYXIiLCJuYXZCYXIiLCJtYWtlRWxlbWVudCIsImVsZW1lbnQiLCJoYW1idXJnZXJMaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiaGFtYnVyZ2VyIiwibmF2TG9nbyIsIm5hdkl0ZW1zIiwiaW5uZXJIVE1MIiwidGFza0xpbmsiLCJncmlkIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyZXRyaWV2ZUlkIiwiZWxlbWVudElkIiwib3Blbk1vZGFsIiwibmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJjbG9zZU1vZGFsIiwicmVzZXQiLCJtYWtlTGlzdCIsImxpc3ROYW1lIiwicHJlcGVuZCIsInRhc2tQaWxlIiwidGFza0xpc3QiLCJ0YXNrIiwidGFza0ljb24iLCJsb29wRWxlbWVudHMiLCJwcm90b3R5cGUiLCJtYWtlTXVsdGlwbGUiLCJzdGFydGluZ1ZhbHVlIiwibGVuZ3RoIiwiZWxlbWVudFR5cGUiLCJpbnB1dElkIiwiaSIsImNob2ljZSIsIm1ha2VUYXNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJnZXRUYXNrSWQiLCJnZXRUYXNrVGl0bGUiLCJnZXRUYXNrRGVzY3JpcHRpb24iLCJnZXRUYXNrRGF0ZSIsImdldFRhc2tQcmlvcml0eSIsImdldFRhc2tQcm9qZWN0IiwiY2hvaWNlQXJyYXkiLCJtYWtlTW9kYWwiLCJtb2RhbENvbnRhaW5lciIsIndpbmRvdyIsImV2ZW50IiwibmV3VGFzayIsImhlYWRlciIsImNsb3NlTGluayIsImNsb3NlSWNvbiIsImJvZHkiLCJ0aXRsZUlucHV0IiwicmVxdWlyZWQiLCJkYXRlIiwiZGF0ZUlucHV0IiwibWluIiwiZm9ybWF0IiwiRGF0ZSIsImRlc2NyaXB0aW9uSW5wdXQiLCJyb3dzIiwiY29scyIsInByaW9yaXR5SW5wdXQiLCJwcmlvcml0eUNob2ljZSIsInByb2plY3RJbnB1dCIsInByb2plY3RDaG9pY2UiLCJidXR0b25Ib2xkZXJMZWZ0IiwiYnV0dG9uSG9sZGVyUmlnaHQiLCJjYW5jZWwiLCJzdWJtaXNzaW9uIiwidmFsdWUiLCJwcm9qZWN0QXJyYXkiLCJtYWtlU2lkZWJhciIsInNpZGViYXIiLCJzaWRlSXRlbSIsImluYm94IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0b2RheSIsImluYm94SWNvbiIsInRvZGF5SWNvbiIsImRpYWdyYW1JY29uIiwicHJvamVjdExpc3QiLCJpbnB1dEZvcm0iLCJzaG93QWxsUHJvamVjdHMiLCJwcm9qZWN0SG9sZGVyIiwicHJvamVjdENvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJtYWtlUHJvamVjdExpc3QiLCJpbnB1dEJhciIsInBsYWNlaG9sZGVyIiwiYXBwcm92ZWRQcm9qZWN0IiwicmVqZWN0ZWRQcm9qZWN0IiwiYWRkUHJvamVjdCIsInByZXZlbnREZWZhdWx0IiwidGV4dFZhbHVlIiwicHVzaCIsIm1ha2VQcm9qZWN0IiwicHJvamVjdEJ1dHRvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibGlzdCIsImN1c3RvbUxpc3QiLCJzaG93U2F2ZWRQcm9qZWN0cyIsImdldEl0ZW0iLCJwYXJzZSIsInN1Ym1pdFR5cGUiLCJteVRhc2tzIiwic2V0VGFza3MiLCJwb3B1bGF0ZVRvZG8iLCJzdG9yZUluZm8iLCJhcnJheSIsInByb2plY3RNZW51SWQiLCJvcHRpb25NZW51SWQiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsImdldEF0dHJpYnV0ZSIsInB1c2hJbmZvIiwibG9hZFRhc2tzIiwiaW5mbyIsImNyZWF0ZVRhc2tCdXR0b24iLCJ0YXNrRGF0ZSIsInRhc2tQcmlvcml0eSIsImNvbnRlbnRIb2xkZXIiLCJjbGVhcklucHV0cyIsImFwcGVuZFRvTGlzdCIsImNvbGxhcHNlVGFzayIsInRhc2tDb250ZW50IiwiY2hhbmdlQ29sb3JzIiwiYmFja2dyb3VuZCIsImluc2VydEJlZm9yZUxpc3QiLCJudW0iLCJsYXN0Q2hpbGQiLCJiZWZvcmUiLCJpZE51bWJlciIsImVkaXQiLCJlZGl0QnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiYXBwZW5kRWRpdCIsImVkaXRUYXNrIiwib3BlbkVkaXRvciIsInNwZWNpZmljSWQiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImNoaWxkTm9kZXMiLCJub2RlVmFsdWUiLCJkaXNhYmxlZCIsInN1Ym1pdEVkaXQiLCJjaG9zZW5JZCIsImNob3NlbkhvbGRlcklkIiwidHJhc2giLCJ0cmFzaEJ1dHRvbiIsImFwcGVuZFRyYXNoIiwicmVtb3ZlVGFzayIsInNpYmxpbmciLCJyZW1vdmUiLCJpbmRleCIsIm1hcCIsIngiLCJpbmRleE9mIiwic3BsaWNlIiwic2hvd1NhdmVkVG9kbyIsInRhc2tPYmplY3QiLCJzaG93VG9kbyIsInN1Ym1pdEluZm8iLCJ0YXNrRWRpdCIsImNyZWF0ZVNpZGViYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFsQixDLENBRUE7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLE1BQU1DLFNBQVMsR0FBR0MsdURBQVUsQ0FBQztBQUMzQkMsUUFBSSxFQUFFLEtBRHFCO0FBRTNCQyxNQUFFLEVBQUUsV0FGdUI7QUFHM0JDLGFBQVMsRUFBRTtBQUhnQixHQUFELENBQTVCO0FBS0FSLFdBQVMsQ0FBQ1MsV0FBVixDQUFzQkwsU0FBdEI7QUFFQSxNQUFNTSxhQUFhLEdBQUdMLHVEQUFVLENBQUM7QUFDL0JDLFFBQUksRUFBRSxLQUR5QjtBQUUvQkMsTUFBRSxFQUFFLGVBRjJCO0FBRy9CQyxhQUFTLEVBQUU7QUFIb0IsR0FBRCxDQUFoQztBQUtBSixXQUFTLENBQUNLLFdBQVYsQ0FBc0JDLGFBQXRCO0FBRUEsTUFBTUMsY0FBYyxHQUFHTix1REFBVSxDQUFDO0FBQ2hDQyxRQUFJLEVBQUUsSUFEMEI7QUFFaENDLE1BQUUsRUFBRSxPQUY0QjtBQUdoQ0MsYUFBUyxFQUFFO0FBSHFCLEdBQUQsQ0FBakM7QUFLQUosV0FBUyxDQUFDSyxXQUFWLENBQXNCRSxjQUF0QjtBQUVBLE1BQU1DLE9BQU8sR0FBR1AsdURBQVUsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBQTFCO0FBQ0EsTUFBTU8sT0FBTyxHQUFHUix1REFBVSxDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsQ0FBMUI7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QUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFD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Q3hCO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0IwQztBQUNXO0FBQ0s7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFGQUFxRjtBQUNyRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQU9BO0NBR0E7O0FBQ0EsQ0FBQyxTQUFTb0IsYUFBVCxHQUF5QjtBQUN4QnRMLHFEQUFVO0FBQ1ZxRix1REFBVztBQUNYaUIsMkRBQWU7QUFDZkwsMkRBQWU7QUFDZmpILHdEQUFhO0FBQ2IySCxzREFBVTtBQUNWbkQsbURBQVM7QUFDVCtELDZEQUFpQjtBQUNqQjBELDREQUFhO0FBQ2JFLHVEQUFRO0FBQ1QsQ0FYRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQnV0dG9uIH0gZnJvbSBcIi4vbWFrZS1pdGVtc1wiO1xuXG4vL1x0SG91c2VzIGNvcHlyaWdodCBiYXJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29weXJpZ2h0SG9sZGVyXCIpO1xuXG4vL1x0R2VuZXJhdGVzIGNvbXBsZXRlIGNvcHlyaWdodCBiYXJcbmNvbnN0IG1ha2VDb3B5cmlnaHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvcHlyaWdodCA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiY29weXJpZ2h0XCIsXG4gICAgY2xhc3NOYW1lOiBcImNsZWFyZml4XCIsXG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICBjb25zdCBjb3B5cmlnaHRUZXh0ID0gbWFrZUJ1dHRvbih7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJjb3B5cmlnaHRUZXh0XCIsXG4gICAgY2xhc3NOYW1lOiBcInRleHQgZmxvYXQgbGVmdFwiLFxuICB9KTtcbiAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQpO1xuXG4gIGNvbnN0IGNvcHlyaWdodExpbmtzID0gbWFrZUJ1dHRvbih7XG4gICAgdHlwZTogXCJ1bFwiLFxuICAgIGlkOiBcImxpbmtzXCIsXG4gICAgY2xhc3NOYW1lOiBcImxpbmtzIGZsb2F0IHJpZ2h0XCIsXG4gIH0pO1xuICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoY29weXJpZ2h0TGlua3MpO1xuXG4gIGNvbnN0IGdpdEljb24gPSBtYWtlQnV0dG9uKHsgdHlwZTogXCJsaVwiIH0pO1xuICBjb25zdCBnaXRMaW5rID0gbWFrZUJ1dHRvbih7IHR5cGU6IFwiYVwiIH0pO1xuICBjb25zdCBnaXRGb250ID0gbWFrZUJ1dHRvbih7IHR5cGU6IFwiaVwiLCBjbGFzc05hbWU6IFwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIiB9KTtcbiAgZ2l0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmFtZXNsbzU5OVwiO1xuICBnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGdpdExpbmsucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG5cbiAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRGb250KTtcbiAgZ2l0SWNvbi5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgY29weXJpZ2h0TGlua3MuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29weXJpZ2h0O1xuIiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9tYWtlLWl0ZW1zXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIEdlbmVyYXRlcyBjb21wbGV0ZSBuYXZiYXJcbmNvbnN0IG1ha2VOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkJhciA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJ1bFwiLCBpZDogXCJuYXZiYXJcIiwgY2xhc3NOYW1lOiBcIm5hdmJhclwiIH0pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhci5lbGVtZW50KTtcblxuICBjb25zdCBoYW1idXJnZXJMaW5rID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImFcIiwgaHJlZjogXCIjXCIgfSk7XG4gIGhhbWJ1cmdlckxpbmsuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZW5hdlwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2lkZW5hdi0tYWN0aXZlXCIpO1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZW5hdlwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aWRlbmF2LS1hY3RpdmVcIilcbiAgICApIHtcbiAgICAgIC8vIG5vdGhpbmcgcmVxdWlyZWRcbiAgICB9XG4gIH0pO1xuICBuYXZCYXIuZWxlbWVudC5hcHBlbmRDaGlsZChoYW1idXJnZXJMaW5rLmVsZW1lbnQpO1xuXG4gIGNvbnN0IGhhbWJ1cmdlciA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImlcIixcbiAgICBpZDogXCJoYW1idXJnZXJcIixcbiAgICBjbGFzc05hbWU6IFwiZmFsIGZhLWJhcnNcIixcbiAgfSk7XG4gIGhhbWJ1cmdlckxpbmsuZWxlbWVudC5hcHBlbmRDaGlsZChoYW1idXJnZXIuZWxlbWVudCk7XG5cbiAgY29uc3QgbmF2TG9nbyA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImlcIixcbiAgICBpZDogXCJuYXZMb2dvXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhciBmYS1jaGVjay1zcXVhcmVcIixcbiAgfSk7XG4gIG5hdkJhci5lbGVtZW50LmFwcGVuZENoaWxkKG5hdkxvZ28uZWxlbWVudCk7XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwibGlcIiwgaWQ6IFwibmF2XCIsIGNsYXNzTmFtZTogXCJuYXZcIiB9KTtcbiAgbmF2SXRlbXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlRvLURvIExpc3RcIjtcbiAgbmF2QmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2SXRlbXMuZWxlbWVudCk7XG5cbiAgY29uc3QgdGFza0xpbmsgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiYVwiLCBocmVmOiBcIiNcIiB9KTtcbiAgbmF2QmFyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xpbmsuZWxlbWVudCk7XG59O1xuXG5leHBvcnQgeyBtYWtlTmF2YmFyLCBjb250ZW50IH07XG4iLCJjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xuXG4vLyBHZW5lcmF0ZXMgRE9NIGVsZW1lbnRzIHdpdGggZGVzaXJlZCBtZXRob2RzXG5jb25zdCBtYWtlRWxlbWVudCA9ICh7XG4gIHR5cGUgPSBcIlwiLFxuICBpZCA9IFwiXCIsXG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIGhyZWYgPSBcIiNcIixcbiAgdGV4dCA9IFwiXCIsXG59ID0ge30pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcblxuICBjb25zdCByZXRyaWV2ZUlkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGVsZW1lbnQuaWQ7XG4gICAgcmV0dXJuIGVsZW1lbnRJZDtcbiAgfTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAobmFtZSkgPT4ge1xuICAgIG5hbWUub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAobmFtZSkgPT4ge1xuICAgIG5hbWUub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnJlc2V0KCk7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBtYWtlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0TmFtZSA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaDJcIixcbiAgICAgIGlkOiBgJHtpZH1gLFxuICAgICAgY2xhc3NOYW1lOiBgbGlzdHNgLFxuICAgIH0pO1xuICAgIGxpc3ROYW1lLmVsZW1lbnQuaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xuICAgIGdyaWQucHJlcGVuZChsaXN0TmFtZS5lbGVtZW50KTtcblxuICAgIGNvbnN0IHRhc2tQaWxlID0gbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgIGlkOiBgJHtpZH1QaWxlYCxcbiAgICAgIGNsYXNzTmFtZTogXCJwaWxlXCIsXG4gICAgfSk7XG4gICAgbGlzdE5hbWUuZWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrUGlsZS5lbGVtZW50KTtcblxuICAgIGNvbnN0IHRhc2tMaXN0ID0gbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJ1bFwiLFxuICAgICAgaWQ6IGAke2lkfUxpc3RgLFxuICAgICAgY2xhc3NOYW1lOiBcImxpc3RcIixcbiAgICB9KTtcbiAgICB0YXNrUGlsZS5lbGVtZW50LmFwcGVuZENoaWxkKHRhc2tMaXN0LmVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFzayA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwibGlcIixcbiAgICAgIGlkOiBgJHtpZH1UYXNrYCxcbiAgICAgIGNsYXNzTmFtZTogXCJ0YXNrXCIsXG4gICAgfSk7XG4gICAgdGFzay5lbGVtZW50LmlubmVySFRNTCA9IFwiQWRkIFRhc2sgXCI7XG4gICAgdGFza0xpc3QuZWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrLmVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGFza0xpbmsgPSBtYWtlRWxlbWVudCh7IHR5cGU6IFwiYVwiLCBocmVmOiBcIiNcIiB9KTtcbiAgICB0YXNrLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xpbmsuZWxlbWVudCk7XG5cbiAgICBjb25zdCB0YXNrSWNvbiA9IG1ha2VFbGVtZW50KHtcbiAgICAgIHR5cGU6IFwiaVwiLFxuICAgICAgaWQ6IGAke2lkfUljb25gLFxuICAgICAgY2xhc3NOYW1lOiBcImZhcyBmYS1wbHVzXCIsXG4gICAgfSk7XG4gICAgdGFza0xpbmsuZWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrSWNvbi5lbGVtZW50KTtcbiAgICBvcGVuTW9kYWwodGFza0ljb24uZWxlbWVudCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZWxlbWVudCwgcmV0cmlldmVJZCwgbWFrZUxpc3QsIGNsb3NlTW9kYWwgfTtcbn07XG5cbi8vIEdlbmVyYXRlcyBET00gZWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIGxvb3BlZC5cbmNvbnN0IGxvb3BFbGVtZW50cyA9ICh7XG4gIHR5cGUgPSBcIlwiLFxuICBpZCA9IFwiXCIsXG4gIGNsYXNzTmFtZSA9IFwiXCIsXG4gIGhyZWYgPSBcIiNcIixcbiAgdGV4dCA9IFwiXCIsXG59ID0ge30pID0+IHtcbiAgY29uc3QgcHJvdG90eXBlID0gbWFrZUVsZW1lbnQoeyB0eXBlLCBpZCwgY2xhc3NOYW1lLCBocmVmLCB0ZXh0IH0pO1xuXG4gIGNvbnN0IG1ha2VNdWx0aXBsZSA9IChzdGFydGluZ1ZhbHVlLCBsZW5ndGgsIGVsZW1lbnRUeXBlLCBpbnB1dElkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nVmFsdWU7IGkgPD0gbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNob2ljZSA9IG1ha2VFbGVtZW50KHtcbiAgICAgICAgdHlwZTogYCR7ZWxlbWVudFR5cGV9YCxcbiAgICAgICAgaWQ6IGAke2lkICsgaX1gLFxuICAgICAgfSkuZWxlbWVudDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0SWR9YCkuYXBwZW5kQ2hpbGQoY2hvaWNlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IC4uLnByb3RvdHlwZSwgbWFrZU11bHRpcGxlIH07XG59O1xuXG4vLyBHZW5lcmF0ZXMgdGFzayBvYmplY3RzXG5jb25zdCBtYWtlVGFzayA9ICh7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH0pID0+ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0LFxuXG4gIGdldFRhc2tJZCgpIHtcbiAgICByZXR1cm4gaWQ7XG4gIH0sXG4gIGdldFRhc2tUaXRsZSgpIHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH0sXG4gIGdldFRhc2tEZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH0sXG4gIGdldFRhc2tEYXRlKCkge1xuICAgIHJldHVybiBkdWVEYXRlO1xuICB9LFxuICBnZXRUYXNrUHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9LFxuICBnZXRUYXNrUHJvamVjdCgpIHtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfSxcbn0pO1xuXG4vLyBHZW5lcmF0ZXMgRE9NIGVsZW1lbnRzIHRoYXQgZG9uJ3QgcmVxdWlyZSBuYW1lc3BhY2luZyBmb3IgZWFzZSBvZiB1c2VcbmNvbnN0IG1ha2VCdXR0b24gPSAoe1xuICB0eXBlID0gXCJcIixcbiAgaWQgPSBcIlwiLFxuICBjbGFzc05hbWUgPSBcIlwiLFxuICBocmVmID0gXCIjXCIsXG59ID0ge30pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgeyBtYWtlRWxlbWVudCwgbWFrZVRhc2ssIGxvb3BFbGVtZW50cywgbWFrZUJ1dHRvbiB9O1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBtYWtlRWxlbWVudCwgbG9vcEVsZW1lbnRzIH0gZnJvbSBcIi4vbWFrZS1pdGVtc1wiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2hlYWRlclwiO1xuXG4vLyBIb3VzZXMgcHJvamVjdCBuYW1lcyB0byBtYXRjaCB3aXRoIHRoZSBzZWxlY3RlZCBwcm9qZWN0IHVzZXIgd2FudHMgdGFzayB0byBnbyBpbnRvXG5jb25zdCBjaG9pY2VBcnJheSA9IFtcIkN1c3RvbUxpc3QwTGlzdFwiLCBcIkN1c3RvbUxpc3QxTGlzdFwiXTtcblxuLy8gR2VuZXJhdGVzIG1vZGFsIHRvIGlucHV0IHRhc2sgaW5mb3JtYXRpb25cbmNvbnN0IG1ha2VNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJtb2RhbENvbnRhaW5lclwiLFxuICAgIGNsYXNzTmFtZTogXCJtb2RhbENvbnRhaW5lclwiLFxuICB9KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5lbGVtZW50KTtcblxuICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyLmVsZW1lbnQpIHtcbiAgICAgIG1vZGFsQ29udGFpbmVyLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnJlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJmb3JtXCIsXG4gICAgaWQ6IFwibmV3VGFza1wiLFxuICAgIGNsYXNzTmFtZTogXCJuZXdUYXNrXCIsXG4gIH0pO1xuICBtb2RhbENvbnRhaW5lci5lbGVtZW50LmFwcGVuZENoaWxkKG5ld1Rhc2suZWxlbWVudCk7XG5cbiAgY29uc3QgaGVhZGVyID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaDJcIixcbiAgICBpZDogXCJtb2RhbEhlYWRlclwiLFxuICAgIGNsYXNzTmFtZTogXCJtb2RhbEhlYWRlclwiLFxuICB9KTtcbiAgaGVhZGVyLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJOZXcgVGFza1wiO1xuICBuZXdUYXNrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyLmVsZW1lbnQpO1xuXG4gIGNvbnN0IGNsb3NlTGluayA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJhXCIsIGhyZWY6IFwiI1wiIH0pO1xuICBoZWFkZXIuZWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUxpbmsuZWxlbWVudCk7XG5cbiAgY29uc3QgY2xvc2VJY29uID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcImNsb3NlSWNvblwiLFxuICAgIGNsYXNzTmFtZTogXCJmYXMgZmEtdGltZXNcIixcbiAgfSk7XG4gIGNsb3NlSWNvbi5jbG9zZU1vZGFsKGNsb3NlSWNvbi5lbGVtZW50KTtcbiAgY2xvc2VMaW5rLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VJY29uLmVsZW1lbnQpO1xuXG4gIGNvbnN0IGJvZHkgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJtb2RhbEJvZHlcIixcbiAgICBjbGFzc05hbWU6IFwibW9kYWxCb2R5XCIsXG4gIH0pO1xuICBuZXdUYXNrLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keS5lbGVtZW50KTtcblxuICBjb25zdCB0aXRsZSA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcIm1vZGFsVGl0bGVcIixcbiAgICBjbGFzc05hbWU6IFwibGVmdC1zaWRlXCIsXG4gIH0pO1xuICB0aXRsZS5lbGVtZW50LmlubmVySFRNTCA9IGBUaXRsZTo8YnI+YDtcbiAgYm9keS5lbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlLmVsZW1lbnQpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBcInRpdGxlSW5wdXRcIixcbiAgICBjbGFzc05hbWU6IFwiaW5wdXRcIixcbiAgfSk7XG4gIHRpdGxlSW5wdXQuZWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlSW5wdXQuZWxlbWVudC5yZXF1aXJlZCA9IHRydWU7XG4gIHRpdGxlLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dC5lbGVtZW50KTtcblxuICBjb25zdCBkYXRlID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiZGF0ZVwiLFxuICAgIGNsYXNzTmFtZTogXCJyaWdodC1zaWRlXCIsXG4gIH0pO1xuICBkYXRlLmVsZW1lbnQuaW5uZXJIVE1MID0gYER1ZSBEYXRlOjxicj5gO1xuICBib2R5LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZS5lbGVtZW50KTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBcImRhdGVJbnB1dFwiLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dFwiLFxuICB9KTtcbiAgZGF0ZUlucHV0LmVsZW1lbnQudHlwZSA9IFwiZGF0ZXRpbWUtbG9jYWxcIjtcbiAgZGF0ZUlucHV0LmVsZW1lbnQubWluID0gYCR7Zm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZCdUJ0hIOm1tXCIpfWA7XG4gIGRhdGVJbnB1dC5lbGVtZW50LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGF0ZS5lbGVtZW50LmFwcGVuZENoaWxkKGRhdGVJbnB1dC5lbGVtZW50KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgY2xhc3NOYW1lOiBcImxlZnQtc2lkZVwiLFxuICB9KTtcbiAgZGVzY3JpcHRpb24uZWxlbWVudC5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246PGJyPmA7XG4gIGJvZHkuZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5lbGVtZW50KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICBpZDogXCJkZXNjcmlwdGlvbklucHV0XCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBkZXNjcmlwdGlvbklucHV0LmVsZW1lbnQucm93cyA9IFwiNlwiO1xuICBkZXNjcmlwdGlvbklucHV0LmVsZW1lbnQuY29scyA9IFwiMjFcIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5lbGVtZW50LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb24uZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwicHJpb3JpdHlcIixcbiAgICBjbGFzc05hbWU6IFwicmlnaHQtc2lkZVwiLFxuICB9KTtcbiAgcHJpb3JpdHkuZWxlbWVudC5pbm5lckhUTUwgPSBgUHJpb3JpdHk6PGJyPmA7XG4gIGJvZHkuZWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eS5lbGVtZW50KTtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgaWQ6IFwicHJpb3JpdHlJbnB1dFwiLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dFwiLFxuICB9KTtcbiAgcHJpb3JpdHkuZWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IHByaW9yaXR5Q2hvaWNlID0gbG9vcEVsZW1lbnRzKHtcbiAgICB0eXBlOiBcIm9wdGlvblwiLFxuICAgIGlkOiBcInByaW9yaXR5Q2hvaWNlXCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBwcmlvcml0eUNob2ljZS5tYWtlTXVsdGlwbGUoMCwgMywgXCJPcHRpb25cIiwgXCJwcmlvcml0eUlucHV0XCIpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlDaG9pY2UwXCIpLmlubmVySFRNTCA9IFwiQVNBUFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5Q2hvaWNlMVwiKS5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUNob2ljZTJcIikuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUNob2ljZTNcIikuaW5uZXJIVE1MID0gXCJMb3dcIjtcblxuICBjb25zdCBwcm9qZWN0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IGBwcm9qZWN0YCxcbiAgICBuYW1lOiBgYCxcbiAgICBjbGFzc05hbWU6IFwicmlnaHQtc2lkZVwiLFxuICB9KTtcbiAgcHJvamVjdC5lbGVtZW50LmlubmVySFRNTCA9IGBQcm9qZWN0Ojxicj5gO1xuICBwcmlvcml0eS5lbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3QuZWxlbWVudCk7XG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgaWQ6IFwicHJvamVjdElucHV0XCIsXG4gICAgY2xhc3NOYW1lOiBcImlucHV0XCIsXG4gIH0pO1xuICBwcm9qZWN0LmVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2plY3RDaG9pY2UgPSBsb29wRWxlbWVudHMoe1xuICAgIHR5cGU6IFwic2VsZWN0XCIsXG4gICAgaWQ6IFwicHJvamVjdENob2ljZVwiLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dFwiLFxuICB9KTtcbiAgcHJvamVjdENob2ljZS5tYWtlTXVsdGlwbGUoMCwgMSwgXCJPcHRpb25cIiwgXCJwcm9qZWN0SW5wdXRcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdENob2ljZTBcIikuaW5uZXJIVE1MID0gXCJJbmJveFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDaG9pY2UxXCIpLmlubmVySFRNTCA9IFwiVG9kYXlcIjtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Q2hvaWNlMFwiKVxuICAgIC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY3VzdG9tTGlzdDBMaXN0XCIpO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcInByb2plY3RDaG9pY2UxXCIpXG4gICAgLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjdXN0b21MaXN0MUxpc3RcIik7XG5cbiAgY29uc3QgYnV0dG9uSG9sZGVyTGVmdCA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImRpdlwiLFxuICAgIGlkOiBcImJ1dHRvbkhvbGRlclwiLFxuICAgIGNsYXNzTmFtZTogXCJsZWZ0LXNpZGVcIixcbiAgfSk7XG4gIGJvZHkuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXJMZWZ0LmVsZW1lbnQpO1xuXG4gIGNvbnN0IGJ1dHRvbkhvbGRlclJpZ2h0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IFwiYnV0dG9uSG9sZGVyXCIsXG4gICAgY2xhc3NOYW1lOiBcInJpZ2h0LXNpZGVcIixcbiAgfSk7XG4gIGJvZHkuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXJSaWdodC5lbGVtZW50KTtcblxuICBjb25zdCBjYW5jZWwgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBcImNhbmNlbFwiLFxuICAgIGNsYXNzTmFtZTogXCJidXR0b25cIixcbiAgfSk7XG4gIGNhbmNlbC5lbGVtZW50LnR5cGUgPSBcInJlc2V0XCI7XG4gIGJ1dHRvbkhvbGRlclJpZ2h0LmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FuY2VsLmVsZW1lbnQpO1xuXG4gIGNvbnN0IHN1Ym1pc3Npb24gPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBcInN1Ym1pc3Npb25cIixcbiAgICBjbGFzc05hbWU6IFwiYnV0dG9uXCIsXG4gIH0pO1xuICBzdWJtaXNzaW9uLmVsZW1lbnQudHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pc3Npb24uZWxlbWVudC52YWx1ZSA9IFwiQWRkIFRhc2tcIjtcbiAgYnV0dG9uSG9sZGVyUmlnaHQuZWxlbWVudC5hcHBlbmRDaGlsZChzdWJtaXNzaW9uLmVsZW1lbnQpO1xuXG4gIHJldHVybiB7IG1vZGFsQ29udGFpbmVyLCBjYW5jZWwsIGNsb3NlSWNvbiwgc3VibWlzc2lvbiB9O1xufTtcblxuZXhwb3J0IHsgbWFrZU1vZGFsLCBjaG9pY2VBcnJheSB9O1xuIiwiaW1wb3J0IHsgbG9vcEVsZW1lbnRzLCBtYWtlRWxlbWVudCB9IGZyb20gXCIuL21ha2UtaXRlbXNcIjtcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZFwiKTtcblxuLy8gSG91c2VzIG5hbWVzIGZvciBhbGwgY3JlYXRlZCBwcm9qZWN0IGZvbGRlcnNcbmxldCBwcm9qZWN0QXJyYXkgPSBbXCJJbmJveFwiLCBcIlRvZGF5XCJdO1xuXG4vLyBHZW5lcmF0ZXMgY29tcGxldGUgc2lkZWJhclxuY29uc3QgbWFrZVNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJkaXZcIixcbiAgICBpZDogXCJzaWRlbmF2XCIsXG4gICAgY2xhc3NOYW1lOiBcInNpZGVuYXZcIixcbiAgfSk7XG4gIGdyaWQuYXBwZW5kQ2hpbGQoc2lkZWJhci5lbGVtZW50KTtcblxuICBjb25zdCBzaWRlSXRlbSA9IGxvb3BFbGVtZW50cyh7XG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBpZDogYHNpZGVCdXR0b25gLFxuICAgIGNsYXNzTmFtZTogXCJwcm9qZWN0XCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0pO1xuICBzaWRlSXRlbS5tYWtlTXVsdGlwbGUoMCwgMiwgXCJidXR0b25cIiwgXCJzaWRlbmF2XCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24wXCIpLmlubmVySFRNTCA9IFwiSW5ib3hcIjtcblxuICBjb25zdCBpbmJveCA9IG1ha2VFbGVtZW50KHsgdHlwZTogXCJoMVwiLCBpZDogYGN1c3RvbUxpc3QwYCwgdGV4dDogYEluYm94YCB9KTtcbiAgaW5ib3gubWFrZUxpc3QoeyBpZDogYGN1c3RvbUxpc3QwYCwgdGV4dDogYEluYm94YCB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQnV0dG9uMFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbUxpc3QwXCIpLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoMltjbGFzc149XCJsaXN0c1wiXWApLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tTGlzdDBcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYHVsW2NsYXNzXj1cImxpc3RcIl1gKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3VzdG9tTGlzdDBMaXN0YCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0MExpc3RgKS5zZXRBdHRyaWJ1dGUgPSBgSW5ib3gwYDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHRvZGF5ID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImgxXCIsIGlkOiBgY3VzdG9tTGlzdDFgLCB0ZXh0OiBgVG9kYXlgIH0pO1xuICB0b2RheS5tYWtlTGlzdCh7IGlkOiBgY3VzdG9tTGlzdDFgLCB0ZXh0OiBgVG9kYXlgIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24xXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tTGlzdDFcIikuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgyW2NsYXNzXj1cImxpc3RzXCJdYCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21MaXN0MVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdWxbY2xhc3NePVwibGlzdFwiXWApLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0MUxpc3RgKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tTGlzdDFcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3VzdG9tTGlzdDFMaXN0YCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgVG9kYXkxYCk7XG5cbiAgY29uc3QgaW5ib3hJY29uID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcImhvbWVJY29uXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhZCBmYS1pbmJveFwiLFxuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQnV0dG9uMFwiKS5wcmVwZW5kKGluYm94SWNvbi5lbGVtZW50KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24xXCIpLmlubmVySFRNTCA9IFwiVG9kYXlcIjtcbiAgY29uc3QgdG9kYXlJY29uID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiaVwiLFxuICAgIGlkOiBcImNhbGVuZGFySWNvblwiLFxuICAgIGNsYXNzTmFtZTogXCJmYXMgZmEtY2FsZW5kYXItZGF5XCIsXG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24xXCIpLnByZXBlbmQodG9kYXlJY29uLmVsZW1lbnQpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJ1dHRvbjJcIikuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuICBjb25zdCBkaWFncmFtSWNvbiA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImlcIixcbiAgICBpZDogXCJsaXN0SWNvblwiLFxuICAgIGNsYXNzTmFtZTogXCJmYXMgZmEtbGlzdFwiLFxuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQnV0dG9uMlwiKS5wcmVwZW5kKGRpYWdyYW1JY29uLmVsZW1lbnQpO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IGBwcm9qZWN0TGlzdGAsXG4gICAgY2xhc3NOYW1lOiBcInByb2plY3RcIixcbiAgICBocmVmOiBcIiNcIixcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXRGb3JtID0gbWFrZUVsZW1lbnQoeyB0eXBlOiBcImZvcm1cIiwgaWQ6IGBwcm9qZWN0Rm9ybWAgfSk7XG4gIHNpZGViYXIuZWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdC5lbGVtZW50KTtcbiAgcHJvamVjdExpc3QuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEZvcm0uZWxlbWVudCk7XG59O1xuXG4vLyBDcmVhdGVzIGEgYnV0dG9uIHRoYXQgY29udGFpbnMgdGV4dCBpbnB1dCB0byBjcmVhdGUgY3VzdG9tIHByb2plY3RzXG5jb25zdCBzaG93QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCdXR0b24yXCIpO1xuICBwcm9qZWN0SG9sZGVyLmNsYXNzTmFtZSA9IFwic2lkZUJ1dHRvbjJcIjtcbiAgcHJvamVjdEhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gcHJvamVjdEhvbGRlci5uZXh0RWxlbWVudFNpYmxpbmc7XG5cbiAgICBwcm9qZWN0SG9sZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaWRlQnV0dG9uMi0tYWN0aXZlXCIpO1xuXG4gICAgaWYgKHByb2plY3RIb2xkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZUJ1dHRvbjItLWFjdGl2ZVwiKSkge1xuICAgICAgcHJvamVjdENvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYDEwMCVgO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0Q29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBDcmVhdGVzIHByb2plY3QgaW5wdXQgdGV4dCBiYXJcbmNvbnN0IG1ha2VQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRCYXIgPSBtYWtlRWxlbWVudCh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIGlkOiBgaW5wdXRCYXJgLFxuICAgIGNsYXNzTmFtZTogXCJpbnB1dEJhclwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9KTtcbiAgaW5wdXRCYXIuZWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0QmFyLmVsZW1lbnQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dEJhci5lbGVtZW50LnBsYWNlaG9sZGVyID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gIGNvbnN0IGFwcHJvdmVkUHJvamVjdCA9IG1ha2VFbGVtZW50KHtcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGlkOiBgYXBwcm92ZWRQcm9qZWN0YCxcbiAgICBjbGFzc05hbWU6IFwiZmFzIGZhLWNoZWNrLXNxdWFyZVwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9KTtcbiAgYXBwcm92ZWRQcm9qZWN0LmVsZW1lbnQudHlwZSA9IFwic3VibWl0XCI7XG5cbiAgY29uc3QgcmVqZWN0ZWRQcm9qZWN0ID0gbWFrZUVsZW1lbnQoe1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgaWQ6IFwicmVqZWN0ZWRQcm9qZWN0XCIsXG4gICAgY2xhc3NOYW1lOiBcImZhcyBmYS13aW5kb3ctY2xvc2VcIixcbiAgfSk7XG4gIHJlamVjdGVkUHJvamVjdC5lbGVtZW50LnR5cGUgPSBcInJlc2V0XCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKS5hcHBlbmRDaGlsZChpbnB1dEJhci5lbGVtZW50KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKS5hcHBlbmRDaGlsZChyZWplY3RlZFByb2plY3QuZWxlbWVudCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIikuYXBwZW5kQ2hpbGQoYXBwcm92ZWRQcm9qZWN0LmVsZW1lbnQpO1xufTtcblxuLy8gR2VuZXJhdGVzIG5ldyBwcm9qZWN0IGJ1dHRvbiBhbG9uZyB3aXRoIGFzc29jaWF0ZWQgdGl0bGVzIGFuZCBsaXN0c1xuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEJhclwiKS52YWx1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtXCIpLnJlc2V0KCk7XG4gICAgcHJvamVjdEFycmF5LnB1c2godGV4dFZhbHVlKTtcblxuICAgIGZvciAobGV0IGkgPSBwcm9qZWN0QXJyYXkubGVuZ3RoIC0gMTsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbWFrZVByb2plY3QgPSBtYWtlRWxlbWVudCh7XG4gICAgICAgIHR5cGU6IFwib3B0aW9uXCIsXG4gICAgICAgIGlkOiBgJHt0ZXh0VmFsdWUgKyBpfWAsXG4gICAgICAgIHRleHQ6IGAke3RleHRWYWx1ZX1gLFxuICAgICAgfSk7XG4gICAgICBtYWtlUHJvamVjdC5lbGVtZW50LmlubmVySFRNTCA9IGAke3RleHRWYWx1ZX1gO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIikuYXBwZW5kQ2hpbGQobWFrZVByb2plY3QuZWxlbWVudCk7XG4gICAgICBtYWtlUHJvamVjdC5lbGVtZW50LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYGN1c3RvbUxpc3Qke2l9TGlzdGApO1xuXG4gICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gbWFrZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBpZDogYGN1c3RvbUJ1dHRvbiR7aX1gLFxuICAgICAgICBjbGFzc05hbWU6IFwicHJvamVjdFwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgdGV4dDogYCR7dGV4dFZhbHVlfWAsXG4gICAgICB9KTtcbiAgICAgIHByb2plY3RCdXR0b24uZWxlbWVudC5pbm5lckhUTUwgPSBgJHt0ZXh0VmFsdWV9YDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TGlzdFwiKS5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uLmVsZW1lbnQpO1xuXG4gICAgICBjb25zdCBsaXN0ID0gbWFrZUVsZW1lbnQoe1xuICAgICAgICB0eXBlOiBcImgxXCIsXG4gICAgICAgIGlkOiBgY3VzdG9tTGlzdCR7aX1gLFxuICAgICAgICB0ZXh0OiBgJHt0ZXh0VmFsdWV9YCxcbiAgICAgIH0pO1xuICAgICAgbGlzdC5tYWtlTGlzdCh7IGlkOiBgY3VzdG9tTGlzdCR7aX1gLCB0ZXh0OiBgJHt0ZXh0VmFsdWV9YCB9KTtcblxuICAgICAgY29uc3QgY3VzdG9tTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0JHtpfWApO1xuICAgICAgY3VzdG9tTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUJ1dHRvbiR7aX1gKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAoY3VzdG9tTGlzdC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYGgyW2NsYXNzXj1cImxpc3RzXCJdYClcbiAgICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXN0b21MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChgdWxbY2xhc3NePVwibGlzdFwiXWApXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUxpc3Qke2l9TGlzdGApLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAgICAgICBcImJsb2NrXCI7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUxpc3Qke2l9TGlzdGApXG4gICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGAke3RleHRWYWx1ZSArIGl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gR2VuZXJhdGVzIGFueSBwcm9qZWN0cyBvbiB3aW5kb3cgbG9hZCB0aGF0IGFyZSBzYXZlZCBpbiBsb2NhbCBzdG9yYWdlXG5jb25zdCBzaG93U2F2ZWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRQcm9qZWN0c1wiKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UHJvamVjdHNcIikpO1xuICB9XG4gIGZvciAobGV0IGkgPSAyOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbWFrZVByb2plY3QgPSBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiBcIm9wdGlvblwiLFxuICAgICAgaWQ6IGAke3Byb2plY3RBcnJheVtpXSArIGl9YCxcbiAgICAgIHRleHQ6IGAke3Byb2plY3RBcnJheVtpXX1gLFxuICAgIH0pO1xuICAgIG1ha2VQcm9qZWN0LmVsZW1lbnQuaW5uZXJIVE1MID0gYCR7cHJvamVjdEFycmF5W2ldfWA7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIikuYXBwZW5kQ2hpbGQobWFrZVByb2plY3QuZWxlbWVudCk7XG4gICAgbWFrZVByb2plY3QuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGBjdXN0b21MaXN0JHtpfUxpc3RgKTtcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBtYWtlRWxlbWVudCh7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgaWQ6IGBjdXN0b21CdXR0b24ke2l9YCxcbiAgICAgIGNsYXNzTmFtZTogXCJwcm9qZWN0XCIsXG4gICAgICBocmVmOiBcIiNcIixcbiAgICAgIHRleHQ6IGAke3Byb2plY3RBcnJheVtpXX1gLFxuICAgIH0pO1xuICAgIHByb2plY3RCdXR0b24uZWxlbWVudC5pbm5lckhUTUwgPSBgJHtwcm9qZWN0QXJyYXlbaV19YDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24uZWxlbWVudCk7XG5cbiAgICBjb25zdCBsaXN0ID0gbWFrZUVsZW1lbnQoe1xuICAgICAgdHlwZTogXCJoMVwiLFxuICAgICAgaWQ6IGBjdXN0b21MaXN0JHtpfWAsXG4gICAgICB0ZXh0OiBgJHtwcm9qZWN0QXJyYXlbaV19YCxcbiAgICB9KTtcbiAgICBsaXN0Lm1ha2VMaXN0KHsgaWQ6IGBjdXN0b21MaXN0JHtpfWAsIHRleHQ6IGAke3Byb2plY3RBcnJheVtpXX1gIH0pO1xuXG4gICAgY29uc3QgY3VzdG9tTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0JHtpfWApO1xuICAgIGN1c3RvbUxpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUJ1dHRvbiR7aX1gKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChjdXN0b21MaXN0LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaDJbY2xhc3NePVwibGlzdHNcIl1gKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXN0b21MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdWxbY2xhc3NePVwibGlzdFwiXWApLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXN0b21MaXN0JHtpfUxpc3RgKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGN1c3RvbUxpc3Qke2l9TGlzdGApXG4gICAgICAgICAgICAuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgJHtwcm9qZWN0QXJyYXlbaV0gKyBpfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgZ3JpZCxcbiAgbWFrZVNpZGViYXIsXG4gIHNob3dBbGxQcm9qZWN0cyxcbiAgbWFrZVByb2plY3RMaXN0LFxuICBhZGRQcm9qZWN0LFxuICBzaG93U2F2ZWRQcm9qZWN0cyxcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IG1ha2VUYXNrLCBtYWtlQnV0dG9uIH0gZnJvbSBcIi4vbWFrZS1pdGVtc1wiO1xuXG4vLyAwIGZvciBuZXcgdGFza3MsIDEgZm9yIHRhc2sgZWRpdHNcbmxldCBzdWJtaXRUeXBlID0gMDtcblxuLy8gSG91c2VzIGFsbCBjcmVhdGVkIHRhc2tzXG5sZXQgbXlUYXNrcyA9IFtdO1xuXG4vLyBSZXRyaWV2ZXMgc2F2ZWQgdGFza3Mgb24gbG9jYWwgc3RvcmFnZVxuY29uc3Qgc2V0VGFza3MgPSAoKSA9PiB7XG4gIG15VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFRhc2tzXCIpKTtcbn07XG4vLyBTYXZlcyB0YXNrcyBvbiBsb2NhbCBzdG9yYWdlXG5jb25zdCBwb3B1bGF0ZVRvZG8gPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KG15VGFza3MpKTtcbn07XG5cbi8vIENvbGxlY3RzIGluZm9ybWF0aW9uIGZyb20gdXNlciBpbnB1dHMgdG8gY3JlYXRlIG5ldyB0YXNrXG5jb25zdCBzdG9yZUluZm8gPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgcHJvamVjdE1lbnVJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdElucHV0XCIpO1xuICBjb25zdCBvcHRpb25NZW51SWQgPSBwcm9qZWN0TWVudUlkLm9wdGlvbnNbcHJvamVjdE1lbnVJZC5zZWxlY3RlZEluZGV4XTtcbiAgY29uc3Qgc3VibWlzc2lvbiA9IG1ha2VUYXNrKHtcbiAgICBpZDogbXlUYXNrcy5sZW5ndGgsXG4gICAgdGl0bGU6IGAke2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZX1gLFxuICAgIGRlc2NyaXB0aW9uOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWV9YCxcbiAgICBkdWVEYXRlOiBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbnB1dFwiKS52YWx1ZX1gLFxuICAgIHByaW9yaXR5OiBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWV9YCxcbiAgICBwcm9qZWN0OiBgJHtvcHRpb25NZW51SWQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKX1gLFxuICB9KTtcblxuICBjb25zdCBwdXNoSW5mbyA9ICgpID0+IGFycmF5LnB1c2goc3VibWlzc2lvbik7XG5cbiAgcmV0dXJuIHsgcHVzaEluZm8gfTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgaW5mbyA9IHN0b3JlSW5mbyhteVRhc2tzKTtcbiAgaW5mby5wdXNoSW5mbygpO1xufTtcblxuLy8gR2VuZXJhdGVzIGNvbXBsZXRlZCB0YXNrXG5jb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gKGkpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBtYWtlQnV0dG9uKHtcbiAgICB0eXBlOiBcInBcIixcbiAgICBpZDogYHRpdGxlJHtpfWAsXG4gICAgY2xhc3NOYW1lOiBcInByb3BlcnR5XCIsXG4gIH0pO1xuICB0aXRsZS5pbm5lckhUTUwgPSBgVGl0bGU6ICR7bXlUYXNrc1tpXS50aXRsZX1gO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gbWFrZUJ1dHRvbih7XG4gICAgdHlwZTogXCJwXCIsXG4gICAgaWQ6IGBkZXNjcmlwdGlvbiR7aX1gLFxuICAgIGNsYXNzTmFtZTogXCJwcm9wZXJ0eVwiLFxuICB9KTtcbiAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiAke215VGFza3NbaV0uZGVzY3JpcHRpb259YDtcblxuICBjb25zdCB0YXNrRGF0ZSA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwicFwiLFxuICAgIGlkOiBgdGFza0RhdGUke2l9YCxcbiAgICBjbGFzc05hbWU6IFwicHJvcGVydHlcIixcbiAgfSk7XG4gIHRhc2tEYXRlLmlubmVySFRNTCA9IGBEYXRlOiAke2Zvcm1hdChuZXcgRGF0ZShteVRhc2tzW2ldLmR1ZURhdGUpLCBcIlBQcHBcIil9YDtcblxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBtYWtlQnV0dG9uKHtcbiAgICB0eXBlOiBcInBcIixcbiAgICBpZDogYHRhc2tQcmlvcml0eSR7aX1gLFxuICAgIGNsYXNzTmFtZTogXCJwcm9wZXJ0eVwiLFxuICB9KTtcbiAgdGFza1ByaW9yaXR5LmlubmVySFRNTCA9IGBQcmlvcml0eTogJHtteVRhc2tzW2ldLnByaW9yaXR5fWA7XG5cbiAgY29uc3QgY29udGVudEhvbGRlciA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgaWQ6IGBjcmVhdGVkSG9sZGVyJHtpfWAsXG4gICAgY2xhc3NOYW1lOiBcImNyZWF0ZWRIb2xkZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgbmV3VGFzayA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgaWQ6IGBjcmVhdGVkVGFzayR7aX1gLFxuICAgIGNsYXNzTmFtZTogXCJjcmVhdGVkVGFza1wiLFxuICB9KTtcbiAgbmV3VGFzay5pbm5lckhUTUwgPSBgJHtteVRhc2tzW2ldLnRpdGxlfWA7XG5cbiAgY29uc3QgY2xlYXJJbnB1dHMgPSAoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikucmVzZXQoKTtcblxuICBjb25zdCBhcHBlbmRUb0xpc3QgPSAoKSA9PiB7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICB9O1xuXG4gIGNvbnN0IGNvbGxhcHNlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBuZXdUYXNrLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LnRvZ2dsZShcImNyZWF0ZWRUYXNrLS1hY3RpdmVcIik7XG4gICAgICBpZiAobmV3VGFzay5jbGFzc0xpc3QuY29udGFpbnMoXCJjcmVhdGVkVGFzay0tYWN0aXZlXCIpKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAkezE1MH1weGA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9ycyA9IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKG15VGFza3NbaV0ucHJpb3JpdHkgPT09IFwiQVNBUFwiKSB7XG4gICAgICBlbGVtZW50Lm5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZCA9IFwiIzE1MDQ4NVwiO1xuICAgIH0gZWxzZSBpZiAobXlUYXNrc1tpXS5wcmlvcml0eSA9PT0gXCJIaWdoXCIpIHtcbiAgICAgIGVsZW1lbnQubmV3VGFzay5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjNTkwOTk1XCI7XG4gICAgfSBlbHNlIGlmIChteVRhc2tzW2ldLnByaW9yaXR5ID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICBlbGVtZW50Lm5ld1Rhc2suc3R5bGUuYmFja2dyb3VuZCA9IFwiI0M2MkE4OFwiO1xuICAgIH0gZWxzZSBpZiAobXlUYXNrc1tpXS5wcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgICAgZWxlbWVudC5uZXdUYXNrLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwM0M0QTFcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0QmVmb3JlTGlzdCA9IChudW0pID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChteVRhc2tzW251bV0ucHJvamVjdCkubGFzdENoaWxkLmJlZm9yZShuZXdUYXNrKTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKG15VGFza3NbbnVtXS5wcm9qZWN0KVxuICAgICAgLmxhc3RDaGlsZC5iZWZvcmUoY29udGVudEhvbGRlcik7XG4gIH07XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdGFza0RhdGUsXG4gICAgdGFza1ByaW9yaXR5LFxuICAgIGNvbnRlbnRIb2xkZXIsXG4gICAgbmV3VGFzayxcbiAgICBhcHBlbmRUb0xpc3QsXG4gICAgY29sbGFwc2VUYXNrLFxuICAgIGluc2VydEJlZm9yZUxpc3QsXG4gICAgY2xlYXJJbnB1dHMsXG4gICAgY2hhbmdlQ29sb3JzLFxuICB9O1xufTtcblxuLy8gSG9sZHMgaWROdW1iZXIgdmFsdWUgdGhhdCBpcyBjcmVhdGUgaW5zaWRlIGZ1bmN0aW9uIGluIGdsb2JhbCBzY29wZSB0byBiZSB1c2VkIGluIG90aGVyIGZ1bmN0aW9uc1xuY29uc3QgaWROdW1iZXIgPSB7fTtcblxuLy8gQ3JlYXRlcyBlZGl0IGJ1dHRvbiB3aXRoIGFzc29jaWF0ZWQgbWV0aG9kc1xuY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwiYVwiLFxuICAgIGlkOiBcImVkaXRJY29uXCIsXG4gICAgY2xhc3NOYW1lOiBcImZhcyBmYS1lZGl0XCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0pO1xuICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgY29uc3QgYXBwZW5kRWRpdCA9ICh0YXNrKSA9PiB0YXNrLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBvcGVuRWRpdG9yID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc3VibWl0VHlwZSA9IDE7XG4gICAgICBjb25zdCBzcGVjaWZpY0lkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICBpZE51bWJlci5pZCA9IHNwZWNpZmljSWQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbEhlYWRlclwiKS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSA9XG4gICAgICAgIFwiVXBkYXRlIFRhc2tcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzdWJtaXNzaW9uYCkudmFsdWUgPSBcIlVwZGF0ZSBUYXNrXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGl0bGVJbnB1dGApLnZhbHVlID0gbXlUYXNrc1tpZE51bWJlci5pZF0udGl0bGU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGVzY3JpcHRpb25JbnB1dGApLnZhbHVlID1cbiAgICAgICAgbXlUYXNrc1tpZE51bWJlci5pZF0uZGVzY3JpcHRpb247XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF0ZUlucHV0YCkudmFsdWUgPSBteVRhc2tzW2lkTnVtYmVyLmlkXS5kdWVEYXRlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByaW9yaXR5SW5wdXRgKS52YWx1ZSA9XG4gICAgICAgIG15VGFza3NbaWROdW1iZXIuaWRdLnByaW9yaXR5O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3RJbnB1dGApLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdG9yKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRFZGl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNob3NlbklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpZE51bWJlci5pZH1gKTtcbiAgICBjb25zdCBjaG9zZW5Ib2xkZXJJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYGNyZWF0ZWRIb2xkZXIke2lkTnVtYmVyLmlkfWBcbiAgICApO1xuXG4gICAgY2hvc2VuSWQuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUgPSBgJHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZVxuICAgIH1gO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHtpZE51bWJlci5pZH1gKS5pbm5lckhUTUwgPSBgVGl0bGU6ICR7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWVcbiAgICB9YDtcbiAgICBteVRhc2tzW2lkTnVtYmVyLmlkXS50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYGRlc2NyaXB0aW9uJHtpZE51bWJlci5pZH1gXG4gICAgKS5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246ICR7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWVcbiAgICB9YDtcbiAgICBteVRhc2tzW2lkTnVtYmVyLmlkXS5kZXNjcmlwdGlvbiA9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uSW5wdXRcIikudmFsdWU7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGB0YXNrRGF0ZSR7aWROdW1iZXIuaWR9YFxuICAgICkuaW5uZXJIVE1MID0gYERhdGU6ICR7Zm9ybWF0KFxuICAgICAgbmV3IERhdGUobXlUYXNrc1tpZE51bWJlci5pZF0uZHVlRGF0ZSksXG4gICAgICBcIlBQcHBcIlxuICAgICl9YDtcbiAgICBteVRhc2tzW2lkTnVtYmVyLmlkXS5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlSW5wdXRcIikudmFsdWU7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGB0YXNrUHJpb3JpdHkke2lkTnVtYmVyLmlkfWBcbiAgICApLmlubmVySFRNTCA9IGBQcmlvcml0eTogJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWV9YDtcbiAgICBteVRhc2tzW2lkTnVtYmVyLmlkXS5wcmlvcml0eSA9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5SW5wdXRcIikudmFsdWU7XG5cbiAgICBpZiAobXlUYXNrc1tpZE51bWJlci5pZF0ucHJpb3JpdHkgPT09IFwiQVNBUFwiKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3JlYXRlZFRhc2ske2lkTnVtYmVyLmlkfWApLnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICBcIiMxNTA0ODVcIjtcbiAgICB9IGVsc2UgaWYgKG15VGFza3NbaWROdW1iZXIuaWRdLnByaW9yaXR5ID09PSBcIkhpZ2hcIikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpZE51bWJlci5pZH1gKS5zdHlsZS5iYWNrZ3JvdW5kID1cbiAgICAgICAgXCIjNTkwOTk1XCI7XG4gICAgfSBlbHNlIGlmIChteVRhc2tzW2lkTnVtYmVyLmlkXS5wcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpZE51bWJlci5pZH1gKS5zdHlsZS5iYWNrZ3JvdW5kID1cbiAgICAgICAgXCIjQzYyQTg4XCI7XG4gICAgfSBlbHNlIGlmIChteVRhc2tzW2lkTnVtYmVyLmlkXS5wcmlvcml0eSA9PT0gXCJMb3dcIikge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNyZWF0ZWRUYXNrJHtpZE51bWJlci5pZH1gKS5zdHlsZS5iYWNrZ3JvdW5kID1cbiAgICAgICAgXCIjMDNDNEExXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrXCIpLnJlc2V0KCk7XG4gIH07XG4gIHJldHVybiB7IGFwcGVuZEVkaXQsIGVkaXRUYXNrLCBzdWJtaXRFZGl0IH07XG59O1xuXG4vLyBDcmVhdGVzIHRyYXNoIGJ1dHRvbiB3aXRoIGFzc29jaWF0ZWQgbWV0aG9kc1xuY29uc3QgdHJhc2ggPSAoaSkgPT4ge1xuICBjb25zdCB7XG4gICAgbmV3VGFzayxcbiAgICBhcHBlbmRUb0xpc3QsXG4gICAgY29sbGFwc2VUYXNrLFxuICAgIGluc2VydEJlZm9yZUxpc3QsXG4gICAgY2xlYXJJbnB1dHMsXG4gICAgY2hhbmdlQ29sb3JzLFxuICB9ID0gY3JlYXRlVGFza0J1dHRvbihpKTtcbiAgY29uc3QgeyBhcHBlbmRFZGl0LCBlZGl0VGFzayB9ID0gZWRpdCgpO1xuICBjb25zdCB0cmFzaEJ1dHRvbiA9IG1ha2VCdXR0b24oe1xuICAgIHR5cGU6IFwiYVwiLFxuICAgIGlkOiBcInRyYXNoSWNvblwiLFxuICAgIGNsYXNzTmFtZTogXCJmYXIgZmEtdHJhc2gtYWx0XCIsXG4gIH0pO1xuICBjb25zdCBhcHBlbmRUcmFzaCA9ICgpID0+IG5ld1Rhc2suYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuICBjb25zdCByZW1vdmVUYXNrID0gKG51bSkgPT5cbiAgICB0cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2libGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBgJHtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZH1gXG4gICAgICApLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHNpYmxpbmcucmVtb3ZlKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZH1gKS5yZW1vdmUoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gbXlUYXNrcy5tYXAoKHgpID0+IHguaWQpLmluZGV4T2YobnVtKTtcbiAgICAgIG15VGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHBvcHVsYXRlVG9kbygpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIHJldHVybiB7XG4gICAgYXBwZW5kVHJhc2gsXG4gICAgcmVtb3ZlVGFzayxcbiAgICBhcHBlbmRUb0xpc3QsXG4gICAgY29sbGFwc2VUYXNrLFxuICAgIGluc2VydEJlZm9yZUxpc3QsXG4gICAgY2xlYXJJbnB1dHMsXG4gICAgY2hhbmdlQ29sb3JzLFxuICAgIG5ld1Rhc2ssXG4gICAgYXBwZW5kRWRpdCxcbiAgICBlZGl0VGFzayxcbiAgfTtcbn07XG5cbi8vIFJldHJpZXZlcyBzYXZlZCB0YXNrcyBvbiB3aW5kb3cgbG9hZFxuY29uc3Qgc2hvd1NhdmVkVG9kbyA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRUYXNrc1wiKSkge1xuICAgIHBvcHVsYXRlVG9kbygpO1xuICB9IGVsc2Uge1xuICAgIHNldFRhc2tzKCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdGFza09iamVjdCA9IHRyYXNoKGkpO1xuICAgIHRhc2tPYmplY3QuY2hhbmdlQ29sb3JzKHRhc2tPYmplY3QpO1xuICAgIHRhc2tPYmplY3QuYXBwZW5kVG9MaXN0KCk7XG4gICAgdGFza09iamVjdC5pbnNlcnRCZWZvcmVMaXN0KGkpO1xuICAgIHRhc2tPYmplY3QuY29sbGFwc2VUYXNrKHRhc2tPYmplY3QubmV3VGFzayk7XG4gICAgdGFza09iamVjdC5hcHBlbmRFZGl0KHRhc2tPYmplY3QubmV3VGFzayk7XG4gICAgdGFza09iamVjdC5hcHBlbmRUcmFzaCgpO1xuICAgIHRhc2tPYmplY3QucmVtb3ZlVGFzayhpKTtcbiAgICB0YXNrT2JqZWN0LmVkaXRUYXNrKCk7XG4gIH1cbn07XG5cbi8vIERpc3BsYXlzIHVzZXIgc3VibWl0dGVkIGluZm9ybWF0aW9uIG9uIHRoZSB0YXNrIGJ1dHRvblxuY29uc3Qgc2hvd1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEluZm8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzdWJtaXRUeXBlID09PSAwKSB7XG4gICAgICBsb2FkVGFza3MoKTtcbiAgICAgIGZvciAobGV0IGkgPSBteVRhc2tzLmxlbmd0aCAtIDE7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSB0cmFzaChpKTtcbiAgICAgICAgdGFza09iamVjdC5jaGFuZ2VDb2xvcnModGFza09iamVjdCk7XG4gICAgICAgIHRhc2tPYmplY3QuYXBwZW5kVG9MaXN0KCk7XG4gICAgICAgIHRhc2tPYmplY3QuaW5zZXJ0QmVmb3JlTGlzdChpKTtcbiAgICAgICAgdGFza09iamVjdC5jb2xsYXBzZVRhc2sodGFza09iamVjdC5uZXdUYXNrKTtcbiAgICAgICAgdGFza09iamVjdC5hcHBlbmRFZGl0KHRhc2tPYmplY3QubmV3VGFzayk7XG4gICAgICAgIHRhc2tPYmplY3QuYXBwZW5kVHJhc2goKTtcbiAgICAgICAgdGFza09iamVjdC5yZW1vdmVUYXNrKGkpO1xuICAgICAgICB0YXNrT2JqZWN0LmVkaXRUYXNrKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikucmVzZXQoKTtcbiAgICAgICAgcG9wdWxhdGVUb2RvKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdWJtaXRUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCB0YXNrRWRpdCA9IGVkaXQoKTtcbiAgICAgIHRhc2tFZGl0LnN1Ym1pdEVkaXQoKTtcbiAgICAgIHBvcHVsYXRlVG9kbygpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRJbmZvKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpW2NsYXNzXj1cImZhcyBmYS1wbHVzXCJdYCkuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdWJtaXRUeXBlID0gMDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxIZWFkZXJcIikubm9kZVZhbHVlID0gXCJOZXcgVGFza1wiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHN1Ym1pc3Npb25gKS52YWx1ZSA9IFwiQWRkIFRhc2tcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0SW5wdXRgKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pXG4gICk7XG59O1xuXG5leHBvcnQgeyBtYWtlVGFzaywgY3JlYXRlVGFza0J1dHRvbiwgbG9hZFRhc2tzLCBzaG93VG9kbywgc2hvd1NhdmVkVG9kbyB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG4gIC8qXG4gICAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICAgKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gICAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAgICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICAgKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICAgKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICAgKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gICAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICAgKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gICAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICAgKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gICAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAgICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gICAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICAgKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gICAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAgICpcbiAgICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICAgKlxuICAgKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAgICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAgICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICAgKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAgICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICAgKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAgICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gICAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICAgKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAgICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICAgKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICAgKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICAgKi9cblxufTtcbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIgdmFsdWU7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhcnNlUGF0dGVybnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YWx1ZSA9IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG5cbiAgICBpZiAoIXBhcnNlUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ10gLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4gIC8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuICAvLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbiAgLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxuZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX2RpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG5cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzaG93VG9kbywgc2hvd1NhdmVkVG9kbyB9IGZyb20gXCIuL3RvZG8taXRlbXNcIjtcbmltcG9ydCB7IG1ha2VOYXZiYXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7XG4gIG1ha2VTaWRlYmFyLFxuICBzaG93QWxsUHJvamVjdHMsXG4gIG1ha2VQcm9qZWN0TGlzdCxcbiAgYWRkUHJvamVjdCxcbiAgc2hvd1NhdmVkUHJvamVjdHMsXG59IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IG1ha2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgbWFrZUNvcHlyaWdodCBmcm9tIFwiLi9jb3B5cmlnaHRiYXJcIjtcblxuLy8gR2VuZXJhdGVzIGNvbXBsZXRlIGFwcGxpY2F0aW9uIVxuKGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIG1ha2VOYXZiYXIoKTtcbiAgbWFrZVNpZGViYXIoKTtcbiAgbWFrZVByb2plY3RMaXN0KCk7XG4gIHNob3dBbGxQcm9qZWN0cygpO1xuICBtYWtlQ29weXJpZ2h0KCk7XG4gIGFkZFByb2plY3QoKTtcbiAgbWFrZU1vZGFsKCk7XG4gIHNob3dTYXZlZFByb2plY3RzKCk7XG4gIHNob3dTYXZlZFRvZG8oKTtcbiAgc2hvd1RvZG8oKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9