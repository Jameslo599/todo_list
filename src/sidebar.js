import { makeElement } from "./make-items";

const grid = document.getElementById("grid");

const makeSidebar = () => {
  let sidebar = makeElement({
    type: "div",
    id: "sidenav",
    className: "sidenav",
  });
  grid.appendChild(sidebar);

  for (let i = 0; i <= 2; i++) {
    let sideItem = makeElement({
      type: "button",
      id: `project${i}`,
      className: "project",
      href: "#",
    });
    sidebar.appendChild(sideItem);
  }
  document.getElementById("project0").innerHTML = "Inbox";
  let inboxIcon = makeElement({
    type: "i",
    id: "homeIcon",
    className: "fad fa-inbox",
  });
  document.getElementById("project0").prepend(inboxIcon);

  document.getElementById("project1").innerHTML = "Today";
  let todayIcon = makeElement({
    type: "i",
    id: "calendarIcon",
    className: "fas fa-calendar-day",
  });
  document.getElementById("project1").prepend(todayIcon);

  document.getElementById("project2").innerHTML = "Projects";
  let diagramIcon = makeElement({
    type: "i",
    id: "listIcon",
    className: "fas fa-list",
  });
  document.getElementById("project2").prepend(diagramIcon);

  let projectList = makeElement({
    type: "div",
    id: `projectList`,
    className: "project",
    href: "#",
  });

  let inputForm = makeElement({ type: "form", id: `projectForm` });
  sidebar.appendChild(projectList);
  projectList.appendChild(inputForm);
};

const showAllProjects = () => {
  let projectHolder = document.getElementById("project2");
  projectHolder.className = "project2";
  projectHolder.addEventListener("click", () => {
    const projectContent = projectHolder.nextElementSibling;

    projectHolder.classList.toggle("project2--active");

    if (projectHolder.classList.contains("project2--active")) {
      projectContent.style.maxHeight = 100 + "%";
    } else {
      projectContent.style.maxHeight = 0;
    }
  });
};

const makeProjectList = () => {
  let inputBar = makeElement({
    type: "input",
    id: `inputBar`,
    className: "inputBar",
    href: "#",
  });
  inputBar.type = "text";
  inputBar.required = true;
  inputBar.placeholder = "Add Project";

  let approvedProject = makeElement({
    type: "button",
    id: `approvedProject`,
    className: "fas fa-check-square",
    href: "#",
  });
  approvedProject.type = "submit";

  let rejectedProject = makeElement({
    type: "button",
    id: "rejectedProject",
    className: "fas fa-window-close",
  });
  rejectedProject.type = "reset";

  document.getElementById("projectForm").appendChild(inputBar);
  document.getElementById("projectForm").appendChild(rejectedProject);
  document.getElementById("projectForm").appendChild(approvedProject);
};

const addProject = () => {
  let projectArray = [];
  document.getElementById("projectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let textValue = document.getElementById("inputBar").value;
    projectArray.push(textValue);
    document.getElementById("projectForm").reset();

    for (let i = projectArray.length - 1; i < projectArray.length; i++) {
      let makeProject = makeElement({ type: "option", id: `${textValue + i}` });
      makeProject.innerHTML = `${textValue}`;
      document.getElementById("projectInput").appendChild(makeProject);

      let project = makeElement({
        type: "button",
        id: `customButton${i}`,
        className: "project",
        href: "#",
      });
      project.innerHTML = `${projectArray[i]}`;

      let icon = makeElement({
        type: "i",
        id: "icon",
        className: "fas fa-circle",
      });
      project.prepend(icon);
      document.getElementById("projectList").appendChild(project);

      makeList({ id: `customProject${i}`, text: `${textValue}` });
      let customProject = document.getElementById(`customProject${i}`);
      customProject.style.display = "none";
      document
        .getElementById(`customButton${i}`)
        .addEventListener("click", () => {
          if ((customProject.style.display = "none")) {
            document
              .querySelectorAll(`h2[class^="lists"]`)
              .forEach((element) => {
                element.style.display = "none";
              });
            customProject.style.display = "block";

            document
              .querySelectorAll(`ul[class^="list"]`)
              .forEach((element) => {
                element.style.display = "none";
              });
            document.getElementById(`customProject${i}List`).style.display =
              "block";
            document
              .getElementById(`customProject${i}List`)
              .setAttribute("name", `${textValue + i}`);
          }
        });
    }
  });
};

export { grid, makeSidebar, showAllProjects, makeProjectList, addProject };
