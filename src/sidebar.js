import {makeElement, makeList} from './make-items.js'

const grid = document.getElementById('grid');

const makeSidebar = () => {
    let sidebar = makeElement({type: 'div', id: 'sidenav', 
    className: 'sidenav'});
    grid.appendChild(sidebar);

    for (let i = 0; i <= 2; i++) {
    let sideItem = makeElement({type: 'button', id: `project${i}`, 
    className: 'project', href: '#'});
    sidebar.appendChild(sideItem);
    };
    document.getElementById('project0').innerHTML = 'Inbox';
    document.getElementById('project1').innerHTML = 'Today';
    document.getElementById('project2').innerHTML = 'Projects';
    let projectList = makeElement({type: 'div', id: `projectList`, 
    className: 'project', href: '#'});
    let inputForm = makeElement({type: 'form', id: `projectForm`,});
    sidebar.appendChild(projectList);
    projectList.appendChild(inputForm);
};

const showAllProjects = () => {
    let projectHolder = document.getElementById('project2');
    projectHolder.className = 'project2';
    projectHolder.addEventListener('click', () => {
        const projectContent = projectHolder.nextElementSibling;

        projectHolder.classList.toggle('project2--active');

                if (projectHolder.classList.contains('project2--active')) {
                    projectContent.style.maxHeight = 100 + '%';
                } else {
                    projectContent.style.maxHeight = 0;
                };
    }); 
};

const makeProjectList = () => {
    let inputBar = makeElement({type: 'input', id: `inputBar`, 
    className: 'inputBar', href: '#'});
    inputBar.type = 'text';
    inputBar.required = true;
    inputBar.placeholder = 'Add Project';

    let approvedProject = makeElement({type: 'input', id: `approvedProject`, 
    className: 'approvedProject', href: '#'});
    approvedProject.type = 'submit';

    let rejectedProject = makeElement({ type: 'input', id: 'rejectedProject', 
    className: 'rejectedProject'});
    rejectedProject.type = 'reset'

    document.getElementById('projectForm').appendChild(inputBar);
    document.getElementById('projectForm').appendChild(approvedProject);
    document.getElementById('projectForm').appendChild(rejectedProject );

}

const addProject = () => {
    let projectArray = [];
    document.getElementById('projectForm').addEventListener('submit', (event) => {
        event.preventDefault();
        let textValue = document.getElementById('inputBar').value;
        projectArray.push(textValue);
        document.getElementById('projectForm').reset();
        for (let i = (projectArray.length - 1); i < projectArray.length; i++ ) {
            let project = makeElement({type: 'button', id: `customButton${i}`, 
            className: 'project', href: '#'});
            project.innerHTML = `${projectArray[i]}`
            document.getElementById('projectList').appendChild(project);
            makeList({id: `customProject${i}`, text: `${textValue}`});
            let customProject = document.getElementById(`customProject${i}`);
            customProject.style.display = 'none';
            document.getElementById(`customButton${i}`).addEventListener('click', () => {
                if (customProject.style.display = 'none') {
                    document.querySelectorAll(`h2[class^="lists"]`).forEach(element => {
                        element.style.display = 'none';
                    });
                    customProject.style.display = 'block';
                };
            });
        };
    });
};

export {grid, makeSidebar, showAllProjects, makeProjectList, addProject}