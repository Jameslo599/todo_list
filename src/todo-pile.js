import {makeElement} from './header.js'
import {grid} from './sidebar.js'

const makeTitle = () => {
    let title = makeElement({type: 'h2', id: 'title', 
    className: 'title'});
    title.innerHTML = 'Inbox'
    grid.appendChild(title);
}
const makePile = () => {
    let taskPile = makeElement({type: 'div', id: 'pile', 
    className: 'pile'});
    grid.appendChild(taskPile);

    let taskList = makeElement({type: 'ul', id: 'list', 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = makeElement({type: 'li', id: 'task', 
    className: 'task'});
    task.innerHTML = 'james'
    taskList.appendChild(task);
};

export {makePile, makeTitle}