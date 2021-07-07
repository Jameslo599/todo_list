import {makeElement, makeTask} from './make-items.js'
import { format } from 'date-fns';

let myTasks = [];

const storeInfo = (array) => {
    let submission = makeTask({
        id: myTasks.length,
        title: `${document.getElementById("titleInput").value}`,
        description: `${document.getElementById("descriptionInput").value}`,
        dueDate: `${document.getElementById("dateInput").value}`,
        priority: `${document.getElementById("priorityInput").value}`,
    });

    let pushInfo = () => array.push(submission);

    return {pushInfo};
};

let loadTasks = () => {
    document.getElementById('newTask').addEventListener('submit', function sendInfo(event) {
        event.preventDefault();
        let info = storeInfo(myTasks);
        info.pushInfo();
        console.log(myTasks);
    });
};


const createTaskButton = (i) => {
    let title = makeElement({ type: 'p', id: `title${i}`,
    className: 'property'});
    title.innerHTML = `Title: ${myTasks[i].title}`;

    let description = makeElement({ type: 'p', id: `description${i}`,
    className: 'property'});
    description.innerHTML = `Description: ${myTasks[i].description}`;

    let taskDate = makeElement({ type: 'p', id: `taskDate${i}`,
    className: 'property'});
    taskDate.innerHTML = `Date: ${format(new Date(myTasks[i].dueDate), 'PPpp')}`;

    let taskPriority = makeElement({ type: 'p', id: `taskPriority${i}`,
    className: 'property'});
    taskPriority.innerHTML = `Priority: ${myTasks[i].priority}`;

    let contentHolder = makeElement({type: 'div', id: `createdHolder${i}`, 
    className: 'createdHolder'});

    let newTask = makeElement({type: 'button', id: `createdTask${i}`, 
    className: 'createdTask'});
    newTask.innerHTML = `${myTasks[i].title}`

    let clearInputs = () => document.getElementById('newTask').reset();

    let appendToList = () => {
        contentHolder.appendChild(title);
        contentHolder.appendChild(description);
        contentHolder.appendChild(taskDate);
        contentHolder.appendChild(taskPriority);
    };

    let collapseTask = (newTask) => {
        newTask.addEventListener('click', () => {
            const taskContent = newTask.nextElementSibling;
            newTask.classList.toggle('createdTask--active')
            if (newTask.classList.contains('createdTask--active')) {
                taskContent.style.maxHeight = 150 + 'px';
            } else {
                taskContent.style.maxHeight = 0;
            };
        });
    }

    let insertBeforeList = () => {
        document.querySelectorAll(`ul[class^="list"]`).forEach(element => {
            if (element.style.display === 'block') {
        
                element.lastChild.before(newTask);
                element.lastChild.before(contentHolder);
            };
        });
    }
    return {title, description, taskDate, taskPriority, contentHolder, newTask, 
        appendToList, collapseTask, insertBeforeList, clearInputs};
};

let edit = () => {
    let edit = makeElement({type: 'a', id: 'editIcon', className: 'fas fa-edit'});

    let appendEdit = (task) => task.appendChild(edit);
    let getId = () => edit.addEventListener('click', (event) => {
        event.preventDefault();
        let specificId = event.target.parentNode.id;
        let idNumber = specificId[specificId.length -1];
        let i = idNumber;
        modalContainer.style.display = 'block';
        document.getElementById(`submission`).value = 'Update Task';
        document.getElementById(`titleInput`).value = myTasks[i].title;;
        document.getElementById(`descriptionInput`).value = myTasks[i].description;
        document.getElementById(`dateInput`).value = myTasks[i].dueDate;
        document.getElementById(`priorityInput`).value = myTasks[i].priority;
        event.stopPropagation();
        
    });
    return {appendEdit, getId};
};

let trash = (i) => {
    const {newTask, appendToList, collapseTask, insertBeforeList, clearInputs} = createTaskButton(i);
    const {appendEdit, getId} = edit();
    let trash = makeElement({type: 'a', id: 'trashIcon', className: 'far fa-trash-alt'});
    let appendTrash = () => newTask.appendChild(trash);
    let removeTask = (i) => trash.addEventListener('click', (event) => {
        event.preventDefault();
        let sibling = document.getElementById(`${event.target.parentNode.id}`).nextElementSibling
        sibling.remove();
        document.getElementById(`${event.target.parentNode.id}`).remove();
        console.log(i + 'james');
        let index = myTasks.map(x => x.id).indexOf(i);
        myTasks.splice(index, 1);
        console.log(myTasks);
        event.stopPropagation();
    });
    return {appendTrash, removeTask, appendToList, collapseTask, insertBeforeList, clearInputs, newTask, 
        appendEdit, getId};
};



let showTodo = () => {
    document.getElementById('newTask').addEventListener('submit', function sendInfo(event) {
        event.preventDefault();
        for (let i = (0 +(myTasks.length-1)); i < (myTasks.length); i++) {

            let todo = trash(i);
            todo.insertBeforeList();
            todo.collapseTask(todo.newTask);
            todo.appendToList();
            todo.appendTrash();
            todo.appendEdit(todo.newTask)
            todo.getId();
            todo.removeTask(i);
            console.log(i);
            modalContainer.style.display = 'none';
            todo.clearInputs();
        };
    });
};

export {makeTask, createTaskButton, loadTasks, showTodo}