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

let submitTask = () => {
    document.getElementById('submission').addEventListener('click', () => {
        let newTask = makeElement({type: 'li', id: 'createdTask', 
        className: 'createdTask'});
        //task1.innerHTML = `${document.getElementById("titleInput").value}`;

        for (let i = 0; i <= 3; i++) {
            let property = makeElement({ type: 'p', id: `property${i}`,
        className: 'property'});
            newTask.appendChild(property);
        };
        document.getElementById('list').appendChild(newTask);
        
        document.getElementById('property0').innerHTML = 
        `Title: ${document.getElementById("titleInput").value}`
        document.getElementById('property1').innerHTML = 
        `Description: ${document.getElementById("descriptionInput").value}`
        document.getElementById('property2').innerHTML = 
        `Due Date:${document.getElementById("dateInput").value}`
        document.getElementById('property3').innerHTML = 
        `Priority: ${document.getElementById("priorityInput").value}`
        //document.getElementById('property4').innerHTML = 
        //`Location: ${document.getElementById("projectInput").value}`


        makeTask({
            title: `${document.getElementById("titleInput").value}`,
            description: `${document.getElementById("descriptionInput").value}`,
            dueDate: `${document.getElementById("dateInput").value}`,
            priority: `${document.getElementById("priorityInput").value}`,
            project: `${document.getElementById("projectInput").value}`,
        });});
};


export {makeTask, submitTask}