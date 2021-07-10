const grid = document.getElementById("grid");

const makeElement = ({
	type = '',
	id = '',
	className = '',
	href = '#',
	text = ''} = {}) => {
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
	const listName = makeElement({ type: "h2", id: `${id}`, className: `lists` });
	listName.innerHTML = `${text}`;
	grid.prepend(listName);
  
	const taskPile = makeElement({
	  type: "div",
	  id: `${id}Pile`,
	  className: "pile",
	});
	listName.appendChild(taskPile);
  
	const taskList = makeElement({
	  type: "ul",
	  id: `${id}List`,
	  className: "list",
	});
	taskPile.appendChild(taskList);
  
	const task = makeElement({ type: "li", id: `${id}Task`, className: "task" });
	task.innerHTML = "Add Task ";
	taskList.appendChild(task);
  
	const taskLink = makeElement({ type: "a", href: "#" });
	task.appendChild(taskLink);
  
	const taskIcon = makeElement({
	  type: "i",
	  id: `${id}Icon`,
	  className: "fas fa-plus",
	});
	taskLink.appendChild(taskIcon);
	openModal(taskIcon);
  };

  return { element, retrieveId, makeList, closeModal };
};

const loopElements = ({
	type = '',
	id = '',
	className = '',
	href = '#',
	text = ''} = {}) => {
	const prototype = makeElement({type, id, className, href, text});
	//const element = document.createElement(type);
  	//element.setAttribute("id", id);
  	//element.setAttribute("class", className);
  	//element.setAttribute("href", href);
	const makeOptions = (length, inputId) => {
		for (let i = 0; i <= length; i += 1) {
			const choice = makeElement({ type: "option", id: `${id + i}` }).element;
			document.getElementById(`${inputId}`).appendChild(choice);
		  };
	  };
	return { ...prototype, makeOptions}
}

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

export { makeElement, makeTask, loopElements };
