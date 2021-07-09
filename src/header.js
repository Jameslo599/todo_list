import {makeElement} from './make-items.js'

const content = document.getElementById('content');

let makeNavbar = () => {
    let navBar = makeElement({ type: 'ul', id: 'navbar', 
    className: 'navbar'});
    content.appendChild(navBar);

    let hamburgerLink = makeElement({type: 'a', href: '#'});
    hamburgerLink.addEventListener('click', () => {
        document.getElementById('sidenav').classList.toggle('sidenav--active');
        if (document.getElementById('sidenav').classList
        .contains('widenav--active')) {
            
        }
    })
    navBar.appendChild(hamburgerLink);

    let hamburger = makeElement({type: 'i', id: 'hamburger', 
    className: 'fal fa-bars'});
    hamburgerLink.appendChild(hamburger);

    let navLogo = makeElement({type: 'i', id: 'navLogo', 
    className: 'far fa-check-square'});
    navBar.appendChild(navLogo);

    let navItems = makeElement({ type: 'li', id: 'nav', 
    className: 'nav'});
    navItems.innerHTML = 'To-Do List'
    navBar.appendChild(navItems);

    let taskLink = makeElement({type: 'a', href: '#'});
    navBar.appendChild(taskLink);
};

export {makeNavbar};