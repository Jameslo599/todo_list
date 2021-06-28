import {makeElement} from './header.js'

const makePile = () => {
    let taskPile = makeElement({type: 'div', id: 'pile', 
    className: 'pile'});
    content.appendChild(taskPile);

    let taskList = makeElement({type: 'ul', id: 'list', 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = makeElement({type: 'li', id: 'task', 
    className: 'task'});
    task.innerHTML = 'james'
    taskList.appendChild(task);
};

export default makePile