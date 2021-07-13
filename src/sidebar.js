import { loopElements, makeElement } from "./make-items";

const grid = document.getElementById("grid");
let projectArray = ["Inbox", "Today"];

const makeSidebar = () => {
  const sidebar = makeElement({
    type: "div",
    id: "sidenav",
    className: "sidenav",
  });
  grid.appendChild(sidebar.element);

  const sideItem = loopElements({
    type: "button",
    id: `sideButton`,
    className: "project",
    href: "#",
  });
  sideItem.makeMultiple(0, 2, "button", "sidenav");
  document.getElementById("sideButton0").innerHTML = "Inbox";

  const inbox = makeElement({ type: "h1", id: `customList0`, text: `Inbox` });
  inbox.makeList({ id: `customList0`, text: `Inbox` });
  document.getElementById("sideButton0").addEventListener("click", () => {
    if (document.getElementById("customList0").style.display === "none") {
      document.querySelectorAll(`h2[class^="lists"]`).forEach((element) => {
        element.style.display = "none";
      });
      document.getElementById("customList0").style.display = "block";
      document.querySelectorAll(`ul[class^="list"]`).forEach((element) => {
        element.style.display = "none";
      });
      document.getElementById(`customList0List`).style.display = "block";
      document.getElementById(`customList0List`).setAttribute = `Inbox0`;
    }
  });

  const today = makeElement({ type: "h1", id: `customList1`, text: `Today` });
  today.makeList({ id: `customList1`, text: `Today` });
  document.getElementById("sideButton1").addEventListener("click", () => {
    if (document.getElementById("customList1").style.display === "none") {
      document.querySelectorAll(`h2[class^="lists"]`).forEach((element) => {
        element.style.display = "none";
      });
      document.getElementById("customList1").style.display = "block";
      document.querySelectorAll(`ul[class^="list"]`).forEach((element) => {
        element.style.display = "none";
      });
      document.getElementById(`customList1List`).style.display = "block";
    }
  });
  document.getElementById("customList1").style.display = "none";
  document.getElementById(`customList1List`).setAttribute("name", `Today1`);

  const inboxIcon = makeElement({
    type: "i",
    id: "homeIcon",
    className: "fad fa-inbox",
  });
  document.getElementById("sideButton0").prepend(inboxIcon.element);

  document.getElementById("sideButton1").innerHTML = "Today";
  const todayIcon = makeElement({
    type: "i",
    id: "calendarIcon",
    className: "fas fa-calendar-day",
  });
  document.getElementById("sideButton1").prepend(todayIcon.element);

  document.getElementById("sideButton2").innerHTML = "Projects";
  const diagramIcon = makeElement({
    type: "i",
    id: "listIcon",
    className: "fas fa-list",
  });
  document.getElementById("sideButton2").prepend(diagramIcon.element);

  const projectList = makeElement({
    type: "div",
    id: `projectList`,
    className: "project",
    href: "#",
  });

  const inputForm = makeElement({ type: "form", id: `projectForm` });
  sidebar.element.appendChild(projectList.element);
  projectList.element.appendChild(inputForm.element);
};

const showAllProjects = () => {
  const projectHolder = document.getElementById("sideButton2");
  projectHolder.className = "sideButton2";
  projectHolder.addEventListener("click", () => {
    const projectContent = projectHolder.nextElementSibling;

    projectHolder.classList.toggle("sideButton2--active");

    if (projectHolder.classList.contains("sideButton2--active")) {
      projectContent.style.maxHeight = `100%`;
    } else {
      projectContent.style.maxHeight = 0;
    }
  });
};

const makeProjectList = () => {
  const inputBar = makeElement({
    type: "input",
    id: `inputBar`,
    className: "inputBar",
    href: "#",
  });
  inputBar.element.type = "text";
  inputBar.element.required = true;
  inputBar.element.placeholder = "Add Project";

  const approvedProject = makeElement({
    type: "button",
    id: `approvedProject`,
    className: "fas fa-check-square",
    href: "#",
  });
  approvedProject.element.type = "submit";

  const rejectedProject = makeElement({
    type: "button",
    id: "rejectedProject",
    className: "fas fa-window-close",
  });
  rejectedProject.element.type = "reset";

  document.getElementById("projectForm").appendChild(inputBar.element);
  document.getElementById("projectForm").appendChild(rejectedProject.element);
  document.getElementById("projectForm").appendChild(approvedProject.element);
};

const addProject = () => {
  document.getElementById("projectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const textValue = document.getElementById("inputBar").value;
    document.getElementById("projectForm").reset();
    projectArray.push(textValue);

    for (let i = projectArray.length - 1; i < projectArray.length; i += 1) {
      const makeProject = makeElement({
        type: "option",
        id: `${textValue + i}`,
        text: `${textValue}`,
      });
      makeProject.element.innerHTML = `${textValue}`;
      document.getElementById("projectInput").appendChild(makeProject.element);
      makeProject.element.setAttribute("name", `customList${i}List`);

      const projectButton = makeElement({
        type: "button",
        id: `customButton${i}`,
        className: "project",
        href: "#",
        text: `${textValue}`,
      });
      projectButton.element.innerHTML = `${textValue}`;
      localStorage.setItem("currentProjects", JSON.stringify(projectArray));
      console.log(projectArray);
      document.getElementById("projectList").appendChild(projectButton.element);

      const list = makeElement({
        type: "h1",
        id: `customList${i}`,
        text: `${textValue}`,
      });
      list.makeList({ id: `customList${i}`, text: `${textValue}` });

      const customList = document.getElementById(`customList${i}`);
      customList.style.display = "none";
      document
        .getElementById(`customButton${i}`)
        .addEventListener("click", () => {
          if (customList.style.display === "none") {
            document
              .querySelectorAll(`h2[class^="lists"]`)
              .forEach((element) => {
                element.style.display = "none";
              });
            customList.style.display = "block";
            document
              .querySelectorAll(`ul[class^="list"]`)
              .forEach((element) => {
                element.style.display = "none";
              });
            document.getElementById(`customList${i}List`).style.display =
              "block";
            document
              .getElementById(`customList${i}List`)
              .setAttribute("name", `${textValue + i}`);
          }
        });
    }
  });
};

const showSavedProjects = () => {
  if (!localStorage.getItem("currentProjects")) {
    localStorage.setItem("currentProjects", JSON.stringify(projectArray));
  } else {
    projectArray = JSON.parse(localStorage.getItem("currentProjects"));
  }
  console.log(localStorage.currentTasks);
  for (let i = 2; i < projectArray.length; i += 1) {
    const makeProject = makeElement({
      type: "option",
      id: `${projectArray[i] + i}`,
      text: `${projectArray[i]}`,
    });
    makeProject.element.innerHTML = `${projectArray[i]}`;
    document.getElementById("projectInput").appendChild(makeProject.element);
    makeProject.element.setAttribute("name", `customList${i}List`);

    const projectButton = makeElement({
      type: "button",
      id: `customButton${i}`,
      className: "project",
      href: "#",
      text: `${projectArray[i]}`,
    });
    projectButton.element.innerHTML = `${projectArray[i]}`;
    localStorage.setItem("currentProjects", JSON.stringify(projectArray));
    console.log(projectArray);
    document.getElementById("projectList").appendChild(projectButton.element);

    const list = makeElement({
      type: "h1",
      id: `customList${i}`,
      text: `${projectArray[i]}`,
    });
    list.makeList({ id: `customList${i}`, text: `${projectArray[i]}` });

    const customList = document.getElementById(`customList${i}`);
    customList.style.display = "none";
    document
      .getElementById(`customButton${i}`)
      .addEventListener("click", () => {
        if (customList.style.display === "none") {
          document.querySelectorAll(`h2[class^="lists"]`).forEach((element) => {
            element.style.display = "none";
          });
          customList.style.display = "block";
          document.querySelectorAll(`ul[class^="list"]`).forEach((element) => {
            element.style.display = "none";
          });
          document.getElementById(`customList${i}List`).style.display = "block";
          document
            .getElementById(`customList${i}List`)
            .setAttribute("name", `${projectArray[i] + i}`);
        }
      });
  }
};

export {
  grid,
  makeSidebar,
  showAllProjects,
  makeProjectList,
  addProject,
  showSavedProjects,
};
