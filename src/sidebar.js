import {makeElement} from './make-items.js'

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
    projectList.innerHTML = 'Projects';
    sidebar.appendChild(projectList);
};

const showAllProjects = () => {
    let projectHolder = document.getElementById('project2');
    projectHolder.className = 'project2';
    projectHolder.addEventListener('click', () => {
        const projectContent = projectHolder.nextElementSibling;

        projectHolder.classList.toggle('project2--active');

                if (projectHolder.classList.contains('project2--active')) {
                    projectContent.style.maxHeight = 150 + 'px';
                } else {
                    projectContent.style.maxHeight = 0;
                };
    })
};

export {grid, makeSidebar, showAllProjects}