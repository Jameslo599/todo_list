const grid = document.getElementById("grid");

// Generates DOM elements with desired methods
const makeElement = ({
  type = "",
  id = "",
  className = "",
  href = "#",
  text = "",
} = {}) => {
  const element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  element.setAttribute("href", href);

  const retrieveId = () => {
    const elementId = element.id;
    return elementId;
  };

  const openModal = (name) => {
    name.onclick = () => {
      document.getElementById("modalContainer").style.display = "block";
    };
  };

  const closeModal = (name) => {
    name.onclick = () => {
      document.getElementById("modalContainer").style.display = "none";
      document.getElementById("newTask").reset();
    };
  };

  const makeList = () => {
    const listName = makeElement({
      type: "h2",
      id: `${id}`,
      className: `lists`,
    });
    listName.element.innerHTML = `${text}`;
    grid.prepend(listName.element);

    const taskPile = makeElement({
      type: "div",
      id: `${id}Pile`,
      className: "pile",
    });
    listName.element.appendChild(taskPile.element);

    const taskList = makeElement({
      type: "ul",
      id: `${id}List`,
      className: "list",
    });
    taskPile.element.appendChild(taskList.element);

    const task = makeElement({
      type: "li",
      id: `${id}Task`,
      className: "task",
    });
    task.element.innerHTML = "Add Task ";
    taskList.element.appendChild(task.element);

    const taskLink = makeElement({ type: "a", href: "#" });
    task.element.appendChild(taskLink.element);

    const taskIcon = makeElement({
      type: "i",
      id: `${id}Icon`,
      className: "fas fa-plus",
    });
    taskLink.element.appendChild(taskIcon.element);
    openModal(taskIcon.element);
  };

  return { element, retrieveId, makeList, closeModal };
};

// Generates DOM elements that need to be looped.
const loopElements = ({
  type = "",
  id = "",
  className = "",
  href = "#",
  text = "",
} = {}) => {
  const prototype = makeElement({ type, id, className, href, text });

  const makeMultiple = (startingValue, length, elementType, inputId) => {
    for (let i = startingValue; i <= length; i += 1) {
      const choice = makeElement({
        type: `${elementType}`,
        id: `${id + i}`,
      }).element;
      document.getElementById(`${inputId}`).appendChild(choice);
    }
  };
  return { ...prototype, makeMultiple };
};

// Generates task objects
const makeTask = ({ id, title, description, dueDate, priority, project }) => ({
  id,
  title,
  description,
  dueDate,
  priority,
  project,

  getTaskId() {
    return id;
  },
  getTaskTitle() {
    return title;
  },
  getTaskDescription() {
    return description;
  },
  getTaskDate() {
    return dueDate;
  },
  getTaskPriority() {
    return priority;
  },
  getTaskProject() {
    return project;
  },
});

// Generates DOM elements that don't require namespacing for ease of use
const makeButton = ({
  type = "",
  id = "",
  className = "",
  href = "#",
} = {}) => {
  const element = document.createElement(type);
  element.setAttribute("id", id);
  element.setAttribute("class", className);
  element.setAttribute("href", href);
  return element;
};

export { makeElement, makeTask, loopElements, makeButton };
