const content = document.getElementById('content');

const makeElement = ({
    type,
    id = '',
    className = '',
    href = '',
} = {}) => {
    let element = document.createElement(type);
    element.setAttribute('id', id);
    element.setAttribute('class', className);
    element.setAttribute('href', href);
    return element;
};

let makeNavbar = () => {
    let navBar = makeElement({ type: 'ul', id: 'navbar', 
    className: 'navbar'});
    content.appendChild(navBar);

    let navItems = makeElement({ type: 'li', id: 'nav', 
    className: 'nav'});
    navItems.innerHTML = 'To-Do List'
    navBar.appendChild(navItems);

    let navLogo = makeElement({type: 'i', id: 'navLogo', 
    className: 'far fa-check-square'});
    navBar.appendChild(navLogo);

    let taskLink = makeElement({type: 'a', href: '#'});
    navBar.appendChild(taskLink);

    let addTask = makeElement({type: 'i', id: 'navTask', 
    className: 'fas fa-plus'});
    taskLink.appendChild(addTask);
};

export {makeElement, makeNavbar};