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
};

export {makeElement, makeNavbar};