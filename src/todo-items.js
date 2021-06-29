import {makeElement} from './header.js'

const makeTask = ({
    title = 'Grind',
    description = 'Make my dreams come true',
    dueDate = 'No due date',
    priority = 'ASAP',
    project = 'Never give up!'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    project
});

let myTasks = [];

let loadTasks = () => {
    document.getElementById('submission').addEventListener('click', () => {
        let submission = makeTask({
            title: `${document.getElementById("titleInput").value}`,
            description: `${document.getElementById("descriptionInput").value}`,
            priority: `${document.getElementById("priorityInput").value}`,
        });
        myTasks.push(submission);
})};

let submitTask = () => {
    document.getElementById('submission').addEventListener('click', () => {
        for (let i = (myTasks.length-1); i < myTasks.length; i++) {
            let newTask = makeElement({type: 'li', id: `createdTask${i}`, 
        className: 'createdTask'});
            let title = makeElement({ type: 'p', id: `title${i}`,
        className: 'property'});
            let description = makeElement({ type: 'p', id: `description${i}`,
        className: 'property'});
            let taskDate = makeElement({ type: 'p', id: `taskDate${i}`,
        className: 'property'});
            let taskPriority = makeElement({ type: 'p', id: `taskPriority${i}`,
        className: 'property'});
        
        document.getElementById('list').appendChild(newTask);

        document.getElementById(`createdTask${i}`).appendChild(title);
        document.getElementById(`title${i}`).innerHTML = `Title: ${myTasks[i].title}`;
        document.getElementById(`createdTask${i}`).appendChild(description);
        document.getElementById(`description${i}`).innerHTML = `Description: ${myTasks[i].description}`;
        document.getElementById(`createdTask${i}`).appendChild(taskDate);
        document.getElementById(`taskDate${i}`).innerHTML = `Date: ${document.getElementById("dateInput").value}`;
        document.getElementById(`createdTask${i}`).appendChild(taskPriority);
        document.getElementById(`taskPriority${i}`).innerHTML = `Priority: ${myTasks[i].priority}`;
        };
    });
};

export {makeTask, submitTask, loadTasks}