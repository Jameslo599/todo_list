import { format } from "date-fns";
import { makeTask, makeButton } from "./make-items";

let submitType = 0;
let myTasks = [];

const setTasks = () => {
    myTasks = JSON.parse(localStorage.getItem("currentTasks"));
}
const populateTodo = () => {
localStorage.setItem("currentTasks", JSON.stringify(myTasks));
}


const storeInfo = (array) => {
  const projectMenuId = document.getElementById("projectInput");
  const optionMenuId = projectMenuId.options[projectMenuId.selectedIndex];
  const submission = makeTask({
    id: myTasks.length,
    title: `${document.getElementById("titleInput").value}`,
    description: `${document.getElementById("descriptionInput").value}`,
    dueDate: `${document.getElementById("dateInput").value}`,
    priority: `${document.getElementById("priorityInput").value}`,
    project: `${optionMenuId.getAttribute("name")}`,
  });

  const pushInfo = () => array.push(submission);

  return { pushInfo };
};

const loadTasks = () => {
  const info = storeInfo(myTasks);
  info.pushInfo();
};

const createTaskButton = (i) => {
  const title = makeButton({
    type: "p",
    id: `title${i}`,
    className: "property",
  });
  title.innerHTML = `Title: ${myTasks[i].title}`;

  const description = makeButton({
    type: "p",
    id: `description${i}`,
    className: "property",
  });
  description.innerHTML = `Description: ${myTasks[i].description}`;

  const taskDate = makeButton({
    type: "p",
    id: `taskDate${i}`,
    className: "property",
  });
  taskDate.innerHTML = `Date: ${format(new Date(myTasks[i].dueDate), "PPpp")}`;

  const taskPriority = makeButton({
    type: "p",
    id: `taskPriority${i}`,
    className: "property",
  });
  taskPriority.innerHTML = `Priority: ${myTasks[i].priority}`;

  const contentHolder = makeButton({
    type: "div",
    id: `createdHolder${i}`,
    className: "createdHolder",
  });

  const newTask = makeButton({
    type: "button",
    id: `createdTask${i}`,
    className: "createdTask",
  });
  newTask.innerHTML = `${myTasks[i].title}`;

  const clearInputs = () => document.getElementById("newTask").reset();

  const appendToList = () => {
    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    contentHolder.appendChild(taskDate);
    contentHolder.appendChild(taskPriority);
  };

  const collapseTask = (task) => {
    task.addEventListener("click", () => {
      const taskContent = newTask.nextElementSibling;
      newTask.classList.toggle("createdTask--active");
      if (newTask.classList.contains("createdTask--active")) {
        taskContent.style.maxHeight = `${150}px`;
      } else {
        taskContent.style.maxHeight = 0;
      }
    });
  };

  const changeColors = (element) => {
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

  const insertBeforeList = (num) => {
    document.getElementById(myTasks[num].project).lastChild.before(newTask);
    document
      .getElementById(myTasks[num].project)
      .lastChild.before(contentHolder);
  };
  return {
    title,
    description,
    taskDate,
    taskPriority,
    contentHolder,
    newTask,
    appendToList,
    collapseTask,
    insertBeforeList,
    clearInputs,
    changeColors,
  };
};

let idNumber = {};

const edit = () => {
  const editButton = makeButton({
    type: "a",
    id: "editIcon",
    className: "fas fa-edit",
    href: "#",
  });
  editButton.onclick = (event) => {
    document.getElementById("modalContainer").style.display = "block";
    event.stopPropagation();
  };

  const appendEdit = (task) => task.appendChild(editButton);
  const editTask = () => {
    const openEditor = (event) => {
      event.preventDefault();
      submitType = 1;
      const specificId = event.target.parentNode.id;
      idNumber.id = specificId.replace(/\D/g, "");
      document.getElementById("modalContainer").style.display = "block";
      document.getElementById("modalHeader").childNodes[0].nodeValue =
        "Update Task";
      document.getElementById(`submission`).value = "Update Task";
      document.getElementById(`titleInput`).value = myTasks[idNumber.id].title;
      document.getElementById(`descriptionInput`).value =
        myTasks[idNumber.id].description;
      document.getElementById(`dateInput`).value = myTasks[idNumber.id].dueDate;
      document.getElementById(`priorityInput`).value =
        myTasks[idNumber.id].priority;
      document.getElementById(`projectInput`).disabled = true;
      event.stopPropagation();
    };

    editButton.addEventListener("click", openEditor);
  };

  const submitEdit = () => {
    const chosenId = document.getElementById(`createdTask${idNumber.id}`);
    const chosenHolderId = document.getElementById(
      `createdHolder${idNumber.id}`
    );

    chosenId.childNodes[0].nodeValue = `${
      document.getElementById("titleInput").value
    }`;

    document.getElementById(`title${idNumber.id}`).innerHTML = `Title: ${
      document.getElementById("titleInput").value
    }`;
    myTasks[idNumber.id].title = document.getElementById("titleInput").value;

    document.getElementById(
      `description${idNumber.id}`
    ).innerHTML = `Description: ${
      document.getElementById("descriptionInput").value
    }`;
    myTasks[idNumber.id].description =
      document.getElementById("descriptionInput").value;

    document.getElementById(
      `taskDate${idNumber.id}`
    ).innerHTML = `Date: ${format(
      new Date(myTasks[idNumber.id].dueDate),
      "PPpp"
    )}`;
    myTasks[idNumber.id].dueDate = document.getElementById("dateInput").value;

    document.getElementById(
      `taskPriority${idNumber.id}`
    ).innerHTML = `Priority: ${document.getElementById("priorityInput").value}`;
    myTasks[idNumber.id].priority =
      document.getElementById("priorityInput").value;

    if (myTasks[idNumber.id].priority === "ASAP") {
      document.getElementById(`createdTask${idNumber.id}`).style.background =
        "#150485";
    } else if (myTasks[idNumber.id].priority === "High") {
      document.getElementById(`createdTask${idNumber.id}`).style.background =
        "#590995";
    } else if (myTasks[idNumber.id].priority === "Medium") {
      document.getElementById(`createdTask${idNumber.id}`).style.background =
        "#C62A88";
    } else if (myTasks[idNumber.id].priority === "Low") {
      document.getElementById(`createdTask${idNumber.id}`).style.background =
        "#03C4A1";
    }

    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("newTask").reset();

    console.log(myTasks);
  };
  return { appendEdit, editTask, submitEdit };
};

const trash = (i) => {
  const {
    newTask,
    appendToList,
    collapseTask,
    insertBeforeList,
    clearInputs,
    changeColors,
  } = createTaskButton(i);
  const { appendEdit, editTask } = edit();
  const trashButton = makeButton({
    type: "a",
    id: "trashIcon",
    className: "far fa-trash-alt",
  });
  const appendTrash = () => newTask.appendChild(trashButton);
  const removeTask = (num) =>
    trashButton.addEventListener("click", (event) => {
      event.preventDefault();
      const sibling = document.getElementById(
        `${event.target.parentNode.id}`
      ).nextElementSibling;
      sibling.remove();
      document.getElementById(`${event.target.parentNode.id}`).remove();
      const index = myTasks.map((x) => x.id).indexOf(num);
      myTasks.splice(index, 1);
      populateTodo();
      event.stopPropagation();
    });
  return {
    appendTrash,
    removeTask,
    appendToList,
    collapseTask,
    insertBeforeList,
    clearInputs,
    changeColors,
    newTask,
    appendEdit,
    editTask,
  };
};

const showSavedTodo = () => {
	if (!localStorage.getItem("currentTasks")) {
		populateTodo();
	 } else {
			setTasks();
	};
	console.log(localStorage.currentTasks)
	for (let i = 0; i < myTasks.length; i += 1) {
		const taskObject = trash(i);
		taskObject.changeColors(taskObject);
		taskObject.appendToList();
		taskObject.insertBeforeList(i);
		taskObject.collapseTask(taskObject.newTask);
		taskObject.appendEdit(taskObject.newTask);
		taskObject.appendTrash();
		taskObject.removeTask(i);
		taskObject.editTask();		
	};
};

const showTodo = () => {
  const submitInfo = (event) => {
    event.preventDefault();
    if (submitType === 0) {
      loadTasks();
      for (let i = myTasks.length - 1; i < myTasks.length; i += 1) {
        const taskObject = trash(i);
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
      const taskEdit = edit();
      taskEdit.submitEdit();
	  populateTodo()
    }
  };

  document.getElementById("newTask").addEventListener("submit", submitInfo);

  document.querySelectorAll(`i[class^="fas fa-plus"]`).forEach((element) =>
    element.addEventListener("click", () => {
      submitType = 0;
      document.getElementById("modalHeader").nodeValue = "New Task";
      document.getElementById(`submission`).value = "Add Task";
	  document.getElementById(`projectInput`).disabled = false;
    })
  );
};


//const showSavedTodo = () => {
//	const submitInfo = (event) => {
//	  event.preventDefault();
//	  if (submitType === 0) {
//		loadTasks();
//		for (let i = myTasks.length - 1; i < myTasks.length; i += 1) {
//		  const taskObject = trash(i);
//		  taskObject.changeColors(taskObject);
//		  taskObject.appendToList();
//		  taskObject.insertBeforeList(i);
//		  taskObject.collapseTask(taskObject.newTask);
//		  taskObject.appendEdit(taskObject.newTask);
//		  taskObject.appendTrash();
//		  taskObject.removeTask(i);
//		  taskObject.editTask();
//		  document.getElementById("modalContainer").style.display = "none";
//		  document.getElementById("newTask").reset();
//		}
//	  } else if (submitType === 1) {
//		let james = edit();
//		james.submitEdit();
//	  }
//	};
//
//	document.getElementById("newTask").addEventListener("submit", submitInfo);
//  
//	document.querySelectorAll(`i[class^="fas fa-plus"]`).forEach((element) =>
//	  element.addEventListener("click", () => {
//		submitType = 0;
//		document.getElementById("modalHeader").nodeValue = "New Task";
//		document.getElementById(`submission`).value = "Add Task";
//		document.getElementById(`projectInput`).disabled = false;
//	  })
//	);
//  };

export { makeTask, createTaskButton, loadTasks, showTodo, showSavedTodo };
