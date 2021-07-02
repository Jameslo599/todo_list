import {makeElement} from './make-items.js'
import {grid} from './sidebar.js'

const makeTitle = () => {
    let title = makeElement({type: 'h2', id: 'title', 
    className: 'title'});
    title.innerHTML = 'Inbox'
    grid.prepend(title);
};
const makeToday = () => {
    let today = makeElement({type: 'h2', id: 'today', 
    className: 'title'});
    today.innerHTML = 'Today'
    grid.prepend(today);
}
const makePile = () => {
    let taskPile = makeElement({type: 'div', id: 'pile', 
    className: 'pile'});
    title.appendChild(taskPile);

    let taskList = makeElement({type: 'ul', id: 'list', 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = makeElement({type: 'li', id: 'task', 
    className: 'task'});
    task.innerHTML = 'Add Task ';
    taskList.appendChild(task);

    let taskLink = makeElement({type: 'a', href: '#'});
    task.appendChild(taskLink);

    let taskIcon = makeElement({type: 'i', id: 'taskIcon', 
    className: 'fal fa-plus-circle'});
    taskLink.appendChild(taskIcon);
};
const makeTodayPile = () => {
    let taskPile = makeElement({type: 'div', id: 'todayPile', 
    className: 'pile'});
    today.appendChild(taskPile);

    let taskList = makeElement({type: 'ul', id: 'todayList', 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = makeElement({type: 'li', id: 'todayTask', 
    className: 'task'});
    task.innerHTML = 'Add Task ';
    taskList.appendChild(task);

    let taskLink = makeElement({type: 'a', href: '#'});
    task.appendChild(taskLink);

    let taskIcon = makeElement({type: 'i', id: 'todayIcon', 
    className: 'fal fa-plus-circle'});
    taskLink.appendChild(taskIcon);
};

export {makePile, makeTodayPile, makeTitle, makeToday}