import {makeElement} from './header.js'

const makeSidebar = () => {
    let sidebar = makeElement({type: 'div', id: 'sidenav', 
    className: 'sidenav'});
    content.appendChild(sidebar);

    let sideItem = makeElement({type: 'a', id: 'project', 
    className: 'project'});
    sidebar.appendChild(sideItem);

};