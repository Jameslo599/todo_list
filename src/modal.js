import { format } from "date-fns";
import { makeElement, loopElements } from "./make-items";
import { content } from "./header";

const makeModal = () => {
  const modalContainer = makeElement({
    type: "div",
    id: "modalContainer",
    className: "modalContainer",
  });
  content.appendChild(modalContainer.element);

  const newTask = makeElement({
    type: "form",
    id: "newTask",
    className: "newTask",
  });
  modalContainer.element.appendChild(newTask.element);

  const header = makeElement({
    type: "h2",
    id: "modalHeader",
    className: "modalHeader",
  });
  header.element.innerHTML = "New Task";
  newTask.element.appendChild(header.element);

  const closeLink = makeElement({ type: "a", href: "#" });
  header.element.appendChild(closeLink.element);

  const closeIcon = makeElement({
    type: "i",
    id: "closeIcon",
    className: "fas fa-times",
  });
  closeLink.element.appendChild(closeIcon.element);

  const body = makeElement({
    type: "div",
    id: "modalBody",
    className: "modalBody",
  });
  newTask.element.appendChild(body.element);

  const title = makeElement({
    type: "div",
    id: "modalTitle",
    className: "left-side",
  });
  title.element.innerHTML = `Title:<br>`;
  body.element.appendChild(title.element);

  const titleInput = makeElement({
    type: "input",
    id: "titleInput",
    className: "input",
  });
  titleInput.element.type = "text";
  titleInput.element.required = true;
  title.element.appendChild(titleInput.element);

  const date = makeElement({
    type: "div",
    id: "date",
    className: "right-side",
  });
  date.element.innerHTML = `Due Date:<br>`;
  body.element.appendChild(date.element);

  const dateInput = makeElement({
    type: "input",
    id: "dateInput",
    className: "input",
  });
  dateInput.element.type = "datetime-local";
  dateInput.element.min = `${format(new Date(), "yyyy-MM-dd'T'HH:mm")}`;
  dateInput.element.required = true;
  date.element.appendChild(dateInput.element);

  const description = makeElement({
    type: "div",
    id: "description",
    className: "left-side",
  });
  description.element.innerHTML = `Description:<br>`;
  body.element.appendChild(description.element);

  const descriptionInput = makeElement({
    type: "textarea",
    id: "descriptionInput",
    className: "input",
  });
  descriptionInput.rows = "6";
  descriptionInput.cols = "21";
  descriptionInput.required = true;
  description.element.appendChild(descriptionInput.element);

  const priority = makeElement({
    type: "div",
    id: "priority",
    className: "right-side",
  });
  priority.element.innerHTML = `Priority:<br>`;
  body.element.appendChild(priority.element);

  const priorityInput = makeElement({
    type: "select",
    id: "priorityInput",
    className: "input",
  });
  priority.element.appendChild(priorityInput.element);

  const priorityChoice = loopElements({
    type: "option",
    id: "priorityChoice",
    className: "input",
  });
  priorityChoice.makeMultiple(0, 3, 'Option', "priorityInput");

  document.getElementById("priorityChoice0").innerHTML = "ASAP";
  document.getElementById("priorityChoice1").innerHTML = "High";
  document.getElementById("priorityChoice2").innerHTML = "Medium";
  document.getElementById("priorityChoice3").innerHTML = "Low";

  const project = makeElement({
    type: "div",
    id: `project`,
    name: ``,
    className: "right-side",
  });
  project.element.innerHTML = `Project:<br>`;
  priority.element.appendChild(project.element);

  const projectInput = makeElement({
    type: "select",
    id: "projectInput",
    className: "input",
  });
  project.element.appendChild(projectInput.element);

  const projectChoice = loopElements({
    type: "select",
    id: "projectChoice",
    className: "input",
  });
  projectChoice.makeMultiple(0, 1, 'Option', "projectInput");

  const buttonHolderLeft = makeElement({
    type: "div",
    id: "buttonHolder",
    className: "left-side",
  });
  body.element.appendChild(buttonHolderLeft.element);

  const buttonHolderRight = makeElement({
    type: "div",
    id: "buttonHolder",
    className: "right-side",
  });
  body.element.appendChild(buttonHolderRight.element);

  const cancel = makeElement({
    type: "input",
    id: "cancel",
    className: "button",
  });
  cancel.element.type = "reset";
  buttonHolderRight.element.appendChild(cancel.element);

  const submission = makeElement({
    type: "input",
    id: "submission",
    className: "button",
  });
  submission.element.type = "submit";
  submission.element.value = "Add Task";
  buttonHolderRight.element.appendChild(submission.element);

  return { modalContainer, cancel, closeIcon, submission };
};

const toggleModal = () => {
  const { modalContainer, closeIcon } = makeModal();

  closeIcon.closeModal(closeIcon.element);

  window.onclick = (event) => {
    if (event.target === modalContainer.element) {
      modalContainer.element.style.display = "none";
      document.getElementById("newTask").reset();
    }
  };
};

export { makeModal, toggleModal };
