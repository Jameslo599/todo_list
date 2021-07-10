import { makeElement, makeTask } from "./make-items.js";
import { format } from "date-fns";

let myTasks = [];

const storeInfo = (array) => {
  let submission = makeTask({
    id: myTasks.length,
    title: `${document.getElementById("titleInput").value}`,
    description: `${document.getElementById("descriptionInput").value}`,
    dueDate: `${document.getElementById("dateInput").value}`,
    priority: `${document.getElementById("priorityInput").value}`,
    project: `${document.getElementById("projectInput").value}`,
  });

  let pushInfo = () => array.push(submission);

  return { pushInfo };
};

let loadTasks = () => {
  document
    .getElementById("newTask")
    .addEventListener("submit", function sendInfo(event) {
      event.preventDefault();
      let info = storeInfo(myTasks);
      info.pushInfo();
      console.log(myTasks);
      document
        .getElementById("newTask")
        .removeEventListener("submit", sendInfo);
    });
};

const createTaskButton = (i) => {
  let title = makeElement({
    type: "p",
    id: `title${i}`,
    className: "property",
  });
  title.innerHTML = `Title: ${myTasks[i].title}`;

  let description = makeElement({
    type: "p",
    id: `description${i}`,
    className: "property",
  });
  description.innerHTML = `Description: ${myTasks[i].description}`;

  let taskDate = makeElement({
    type: "p",
    id: `taskDate${i}`,
    className: "property",
  });
  taskDate.innerHTML = `Date: ${format(new Date(myTasks[i].dueDate), "PPpp")}`;

  let taskPriority = makeElement({
    type: "p",
    id: `taskPriority${i}`,
    className: "property",
  });
  taskPriority.innerHTML = `Priority: ${myTasks[i].priority}`;

  let contentHolder = makeElement({
    type: "div",
    id: `createdHolder${i}`,
    className: "createdHolder",
  });

  let newTask = makeElement({
    type: "button",
    id: `createdTask${i}`,
    className: "createdTask",
  });
  newTask.innerHTML = `${myTasks[i].title}`;

  let clearInputs = () => document.getElementById("newTask").reset();

  let appendToList = () => {
    contentHolder.appendChild(title);
    contentHolder.appendChild(description);
    contentHolder.appendChild(taskDate);
    contentHolder.appendChild(taskPriority);
  };

  let collapseTask = (newTask) => {
    newTask.addEventListener("click", () => {
      const taskContent = newTask.nextElementSibling;
      newTask.classList.toggle("createdTask--active");
      if (newTask.classList.contains("createdTask--active")) {
        taskContent.style.maxHeight = 150 + "px";
      } else {
        taskContent.style.maxHeight = 0;
      }
    });
  };

  //let insertBeforeList = (i) => {
  //    document.querySelectorAll(`ul[class^="list"]`).forEach(element => {
  //        if (element.name = myTasks[i].project) {
  //            console.log(element.name);
  //            console.log(myTasks[i].project);
  //            element.lastChild.before(newTask);
  //            element.lastChild.before(contentHolder);
  //        };
  //    });
  //}
  let insertBeforeList = (i) => {
    if ((document.getElementsByTagName("ul").name = myTasks[i].project)) {
      console.log(myTasks[i].project);
      let id = myTasks[i].project;
      document.getElementById(`${id}List`).lastChild.before(newTask);
      document.getElementById(`${id}List`).lastChild.before(contentHolder);
    }
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
  };
};

let edit = () => {
  let edit = makeElement({
    type: "a",
    id: "editIcon",
    className: "fas fa-edit",
    href: "#",
  });
  edit.onclick = () => {
    modalContainer.style.display = "block";
  };

  let appendEdit = (task) => task.appendChild(edit);

  let getId = () =>
    edit.addEventListener(
      "click",
      function openEditor(event) {
        event.preventDefault();
        let specificId = event.target.parentNode.id;
        let idNumber = specificId[specificId.length - 1];
        let i = idNumber;
        modalContainer.style.display = "block";
        document.getElementById(`submission`).value = "Update Task";
        document.getElementById(`titleInput`).value = myTasks[i].title;
        document.getElementById(`descriptionInput`).value =
          myTasks[i].description;
        document.getElementById(`dateInput`).value = myTasks[i].dueDate;
        document.getElementById(`priorityInput`).value = myTasks[i].priority;
        event.stopPropagation();

        document.getElementById("newTask").addEventListener(
          "submit",
          function commitEdit(event) {
            event.preventDefault();

            let newTask = document.getElementById(`createdTask${i}`);
            newTask.childNodes[0].nodeValue = `${
              document.getElementById("titleInput").value
            }`;

            document.getElementById(`title${i}`).innerHTML = `Title: ${
              document.getElementById("titleInput").value
            }`;
            myTasks[i].title = document.getElementById("titleInput").value;

            document.getElementById(
              `description${i}`
            ).innerHTML = `Description: ${
              document.getElementById("descriptionInput").value
            }`;
            myTasks[i].description =
              document.getElementById("descriptionInput").value;
            console.log(myTasks[i].dueDate);
            document.getElementById(`taskDate${i}`).innerHTML = `Date: ${format(
              new Date(myTasks[i].dueDate),
              "PPpp"
            )}`;
            myTasks[i].dueDate = document.getElementById("dateInput").value;

            document.getElementById(
              `taskPriority${i}`
            ).innerHTML = `Priority: ${
              document.getElementById("priorityInput").value
            }`;
            myTasks[i].priority =
              document.getElementById("priorityInput").value;

            if (myTasks[i].priority === "ASAP") {
              newTask.style.background = "#150485";
            } else if (myTasks[i].priority === "High") {
              newTask.style.background = "#590995";
            } else if (myTasks[i].priority === "Medium") {
              newTask.style.background = "#C62A88";
            } else if (myTasks[i].priority === "Low") {
              newTask.style.background = "#03C4A1";
            }

            modalContainer.style.display = "none";
            document.getElementById("newTask").reset();
            document.getElementById(`submission`).value = "Add Task";
            edit.addEventListener("click", openEditor, { once: true });

            console.log(myTasks);
          },
          { once: true }
        );
      },
      { once: true }
    );
  return { appendEdit, getId };
};

let trash = (i) => {
  const { newTask, appendToList, collapseTask, insertBeforeList, clearInputs } =
    createTaskButton(i);
  const { appendEdit, getId } = edit();
  let trash = makeElement({
    type: "a",
    id: "trashIcon",
    className: "far fa-trash-alt",
  });
  let appendTrash = () => newTask.appendChild(trash);
  let removeTask = (i) =>
    trash.addEventListener("click", (event) => {
      event.preventDefault();
      let sibling = document.getElementById(
        `${event.target.parentNode.id}`
      ).nextElementSibling;
      sibling.remove();
      document.getElementById(`${event.target.parentNode.id}`).remove();
      let index = myTasks.map((x) => x.id).indexOf(i);
      myTasks.splice(index, 1);
      console.log(myTasks);
      event.stopPropagation();
    });
  return {
    appendTrash,
    removeTask,
    appendToList,
    collapseTask,
    insertBeforeList,
    clearInputs,
    newTask,
    appendEdit,
    getId,
  };
};

let showTodo = () => {
  document.getElementById("newTask").addEventListener(
    "submit",
    function sendInfo(event) {
      event.preventDefault();
      for (let i = 0 + (myTasks.length - 1); i < myTasks.length; i++) {
        let todo = trash(i);
        todo.insertBeforeList(i);
        console.log(myTasks[i].priority.toString());
        if (myTasks[i].priority === "ASAP") {
          todo.newTask.style.background = "#150485";
        } else if (myTasks[i].priority === "High") {
          todo.newTask.style.background = "#590995";
        } else if (myTasks[i].priority === "Medium") {
          todo.newTask.style.background = "#C62A88";
        } else if (myTasks[i].priority === "Low") {
          todo.newTask.style.background = "#03C4A1";
        }

        todo.collapseTask(todo.newTask);
        todo.appendToList();
        todo.appendTrash();
        todo.appendEdit(todo.newTask);
        todo.getId();
        todo.removeTask(i);
        modalContainer.style.display = "none";
        todo.clearInputs();
      }
      let plusButton = document.querySelectorAll(".fa-plus");
      plusButton.forEach((element) => {
        element.addEventListener("click", loadTasks, { once: true });
        element.addEventListener("click", showTodo, { once: true });
      });
    },
    { once: true }
  );
};

export { makeTask, createTaskButton, loadTasks, showTodo };
