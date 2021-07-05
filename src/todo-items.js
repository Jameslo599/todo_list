import {makeElement, makeTask} from './make-items.js'
import { format } from 'date-fns'

let myTasks = [];


let loadTasks = () => {
    document.getElementById('newTask').addEventListener('submit', (event) => {
        event.preventDefault();
        let submission = makeTask({
            title: `${document.getElementById("titleInput").value}`,
            description: `${document.getElementById("descriptionInput").value}`,
            priority: `${document.getElementById("priorityInput").value}`,
        });
        myTasks.push(submission);
})};

let submitTask = () => {
    document.getElementById('newTask').addEventListener('submit', (event) => {
        event.preventDefault();
        let localTime = document.getElementById("dateInput").value;
        for (let i = (myTasks.length-1); i < myTasks.length; i++) {
            let newTask = makeElement({type: 'button', id: `createdTask${i}`, 
        className: 'createdTask'});
            newTask.innerHTML = `${myTasks[i].title}`;
            newTask.type = 'button';
            newTask.addEventListener('click', () => {
                const taskContent = newTask.nextElementSibling;

                newTask.classList.toggle('createdTask--active');

                if (newTask.classList.contains('createdTask--active')) {
                    taskContent.style.maxHeight = 150 + 'px';
                } else {
                    taskContent.style.maxHeight = 0;
                };
            });

            let contentHolder = makeElement({type: 'div', id: `createdHolder${i}`, 
            className: 'createdHolder'})

            let title = makeElement({ type: 'p', id: `title${i}`,
        className: 'property'});
            let description = makeElement({ type: 'p', id: `description${i}`,
        className: 'property'});
            let taskDate = makeElement({ type: 'p', id: `taskDate${i}`,
        className: 'property'});
            let taskPriority = makeElement({ type: 'p', id: `taskPriority${i}`,
        className: 'property'});

       // document.querySelectorAll(`h2[class^="lists"]`).forEach(element => {
       //     if (element.style.display === 'block') {
       //         document.querySelectorAll(`ul[class^="lists"]`).forEach(element => {
       //             insertBefore(newTask, element.lastChild);
//
//
       //         element.insertBefore(contentHolder, element.lastChild);
       //         });
       //     }
       // });
        
        //if (document.getElementById('inbox').style.display === 'block') {
        //    document.getElementById('inboxList').lastChild.before(newTask);
        //    document.getElementById('inboxList').lastChild.before(contentHolder);
        //} else if (document.getElementById('today').style.display === 'block') {
        //    document.getElementById('todayList').lastChild.before(newTask);
        //    document.getElementById('todayList').lastChild.before(contentHolder);
        //} 

        document.querySelectorAll(`ul[class^="list"]`).forEach(element => {
            if (element.style.display === 'block') {
                element.lastChild.before(newTask);
                element.lastChild.before(contentHolder);
            }})

        document.getElementById(`createdHolder${i}`).appendChild(title);
        document.getElementById(`title${i}`).innerHTML = `Title: ${myTasks[i].title}`;
        document.getElementById(`createdHolder${i}`).appendChild(description);
        document.getElementById(`description${i}`).innerHTML = `Description: ${myTasks[i].description}`;
        document.getElementById(`createdHolder${i}`).appendChild(taskDate);
        document.getElementById(`taskDate${i}`).innerHTML = `Date: ${format(new Date(localTime), 'PPpp')}`;
        document.getElementById(`createdHolder${i}`).appendChild(taskPriority);
        document.getElementById(`taskPriority${i}`).innerHTML = `Priority: ${myTasks[i].priority}`;
        
        document.getElementById('newTask').reset();
        };
    })};



export {makeTask, submitTask, loadTasks}