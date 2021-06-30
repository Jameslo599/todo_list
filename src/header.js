import {makeElement} from './make-items.js'

const content = document.getElementById('content');

let makeNavbar = () => {
    let navBar = makeElement({ type: 'ul', id: 'navbar', 
    className: 'navbar'});
    content.appendChild(navBar);

    let navLogo = makeElement({type: 'i', id: 'navLogo', 
    className: 'far fa-check-square'});
    navBar.appendChild(navLogo);

    let navItems = makeElement({ type: 'li', id: 'nav', 
    className: 'nav'});
    navItems.innerHTML = 'To-Do List'
    navBar.appendChild(navItems);

    let taskLink = makeElement({type: 'a', href: '#'});
    navBar.appendChild(taskLink);

    let addTask = makeElement({type: 'i', id: 'navTask', 
    className: 'fas fa-plus'});
    taskLink.appendChild(addTask);
};

export {makeNavbar};