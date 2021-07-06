import {makeElement, makeTask} from './make-items.js'
import { editTask } from './modal.js';
import { format } from 'date-fns'

let myTasks = [];


let loadTasks = () => {
    document.getElementById('newTask').addEventListener('submit', function sendInfo(event) {
        event.preventDefault();
        let submission = makeTask({
            title: `${document.getElementById("titleInput").value}`,
            description: `${document.getElementById("descriptionInput").value}`,
            priority: `${document.getElementById("priorityInput").value}`,
        });
        myTasks.push(submission);
    });
};

function collapseTask(newTask) {
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

function makeTrash(newTask) {
    let trash = makeElement({type: 'a', id: 'trashIcon', className: 'far fa-trash-alt'});
    trash.addEventListener('click', (event) => {
        event.preventDefault();
        let sibling = document.getElementById(`${event.target.parentNode.id}`).nextElementSibling
        sibling.remove();
        document.getElementById(`${event.target.parentNode.id}`).remove();
        event.stopPropagation();
    });
    newTask.appendChild(trash);
};

function editInfo(newTask, i, localTime) {
    let edit = makeElement({type: 'i', id: 'editIcon', 
    className: 'fas fa-edit'});
    newTask.appendChild(edit);

    edit.addEventListener('click', (event) => {
        event.preventDefault();
        modalContainer.style.display = 'block';
        document.getElementById('newTask').style.display = 'none';
        document.getElementById(`newTaskClone${i}`).style.display = 'block';

        document.getElementById(`submissionClone${i}`).value = 'Update Task';
        document.getElementById(`titleInputClone${i}`).value = myTasks[i].title;
        document.getElementById(`descriptionInputClone${i}`).value = myTasks[i].description;
        document.getElementById(`dateInputClone${i}`).value = localTime;
        document.getElementById(`priorityInputClone${i}`).value = myTasks[i].priority;
        event.stopPropagation();
    })
};


function submitEdit(i) {
    editTask(i);
    document.getElementById(`newTaskClone${i}`).addEventListener('submit', function changeInfo(event) {
        event.preventDefault();
        let submissionEdit = makeTask({
            title: `${document.getElementById(`titleInputClone${i}`).value}`,
            description: `${document.getElementById(`descriptionInputClone${i}`).value}`,
            priority: `${document.getElementById(`priorityInputClone${i}`).value}`,
        });
        myTasks.splice(i, 1, submissionEdit);
        console.log(myTasks);
        console.log(i)
        document.getElementById(`createdTask${i}`).childNodes[0].nodeValue = `${myTasks[i].title}`;
        document.getElementById(`title${i}`).innerHTML = `Title: ${myTasks[i].title}`;
        document.getElementById(`description${i}`).innerHTML = `Description: ${myTasks[i].description}`;
        document.getElementById(`taskDate${i}`).innerHTML = `Date: ${format(new Date(document.getElementById(`dateInputClone${i}`).value), 'PPpp')}`;
        document.getElementById(`taskPriority${i}`).innerHTML = `Priority: ${myTasks[i].priority}`;
        modalContainer.style.display = 'none';
        document.getElementById('submission').value = 'Add Task';
    
        document.getElementById('newTask').style.display = 'block';
        document.getElementById(`newTaskClone${i}`).style.display = 'none';
    });
};

function makeTaskButton() {
    document.getElementById('newTask').addEventListener('submit', function logInfo(event) {
        event.preventDefault();
        let localTime = document.getElementById("dateInput").value;

        for (let i = (myTasks.length-1); i < myTasks.length; i++) {

        let newTask = makeElement({type: 'button', id: `createdTask${i}`, 
        className: 'createdTask'});
        newTask.innerHTML = `${myTasks[i].title}`;
        newTask.type = 'button';
        collapseTask(newTask);
        makeTrash(newTask);
        editInfo(newTask, i, localTime);
        submitEdit(i);        

        let title = makeElement({ type: 'p', id: `title${i}`,
        className: 'property'});
        title.innerHTML = `Title: ${myTasks[i].title}`;

        let description = makeElement({ type: 'p', id: `description${i}`,
        className: 'property'});
        description.innerHTML = `Description: ${myTasks[i].description}`;

        let taskDate = makeElement({ type: 'p', id: `taskDate${i}`,
        className: 'property'});
        taskDate.innerHTML = `Date: ${format(new Date(localTime), 'PPpp')}`;

        let taskPriority = makeElement({ type: 'p', id: `taskPriority${i}`,
        className: 'property'});
        taskPriority.innerHTML = `Priority: ${myTasks[i].priority}`;

        let contentHolder = makeElement({type: 'div', id: `createdHolder${i}`, 
        className: 'createdHolder'});

        document.querySelectorAll(`ul[class^="list"]`).forEach(element => {
            if (element.style.display === 'block') {
                element.lastChild.before(newTask);
                element.lastChild.before(contentHolder);
            };
        });

        contentHolder.appendChild(title);
        contentHolder.appendChild(description);
        contentHolder.appendChild(taskDate);
        contentHolder.appendChild(taskPriority);
        
        modalContainer.style.display = 'none';
        document.getElementById('newTask').reset();
        };
    });
};
    

export {makeTask, makeTaskButton, loadTasks}