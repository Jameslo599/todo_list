import {makeElement} from './make-items.js'
import { format } from 'date-fns'

const addTask = () => {
    let modalContainer = makeElement({ type: 'div', id: 'modalContainer', 
    className: 'modalContainer'});
    content.appendChild(modalContainer);

    let newTask = makeElement({ type: 'form', id: 'newTask', 
    className: 'newTask'});
    modalContainer.appendChild(newTask);

    let header = makeElement({ type: 'h2', id: 'modalHeader', 
    className: 'modalHeader'});
    header.innerHTML = 'New Task'
    newTask.appendChild(header);

    let closeLink = makeElement({type: 'a', href: '#'});
    header.appendChild(closeLink);

    let closeIcon = makeElement({type: 'i', id: 'closeIcon', 
    className: 'fas fa-times'});
    closeLink.appendChild(closeIcon);

    let body = makeElement({ type: 'div', id: 'modalBody', 
    className: 'modalBody'});
    newTask.appendChild(body);

    let title = makeElement({ type: 'div', id: 'modalTitle', 
    className: 'left-side'});
    title.innerHTML = `Title:<br>`
    body.appendChild(title);

    let titleInput = makeElement({ type: 'input', id: 'titleInput', 
    className: 'input'});
    titleInput.type = 'text'
    titleInput.required = true;
    title.appendChild(titleInput);

    let date = makeElement({ type: 'div', id: 'date', 
    className: 'right-side'});
    date.innerHTML = `Due Date:<br>`
    body.appendChild(date);

    let dateInput = makeElement({ type: 'input', id: 'dateInput', 
    className: 'input'});
    dateInput.type = 'datetime-local'
    dateInput.min = `${format(new Date(), 'yyyy-MM-dd\'T\'HH:mm')}`;
    dateInput.required = true;
    date.appendChild(dateInput);

    let description = makeElement({ type: 'div', id: 'description', 
    className: 'left-side'});
    description.innerHTML = `Description:<br>`
    body.appendChild(description);

    let descriptionInput = makeElement({ type: 'textarea', id: 'descriptionInput', 
    className: 'input'});
    descriptionInput.rows = '6';
    descriptionInput.cols = '21';
    descriptionInput.required = true;
    description.appendChild(descriptionInput);

    let priority = makeElement({ type: 'div', id: 'priority', 
    className: 'right-side'});
    priority.innerHTML = `Priority:<br>`
    body.appendChild(priority);

    let priorityInput = makeElement({ type: 'select', id: 'priorityInput', 
    className: 'input'});
    priority.appendChild(priorityInput);

    for (let i = 0; i <= 3; i++) {
        let choosePriority = makeElement({ type: 'option', id: `priority${i}`});
        priorityInput.appendChild(choosePriority);
    };
    document.getElementById('priority0').innerHTML = 'ASAP'
    document.getElementById('priority1').innerHTML = 'High'
    document.getElementById('priority2').innerHTML = 'Medium'
    document.getElementById('priority3').innerHTML = 'Low'

    let project = makeElement({ type: 'div', id: 'project', 
    className: 'right-side'});
    project.innerHTML = `Project:<br>`
    priority.appendChild(project);

    let projectInput = makeElement({ type: 'select', id: 'projectInput', 
    className: 'input'});
    project.appendChild(projectInput);

    for (let i = 0; i <= 1; i++) {
        let chooseProject = makeElement({ type: 'option', id: `projectChoice${i}`});
        projectInput.appendChild(chooseProject);
    };
    document.getElementById('projectChoice0').innerHTML = 'Inbox'
    document.getElementById('projectChoice1').innerHTML = 'Project'

    let buttonHolderLeft = makeElement({ type: 'div', id: 'buttonHolder', 
    className: 'left-side'});
    body.appendChild(buttonHolderLeft);

    let buttonHolderRight = makeElement({ type: 'div', id: 'buttonHolder', 
    className: 'right-side'});
    body.appendChild(buttonHolderRight);

    let cancel = makeElement({ type: 'input', id: 'cancel', 
    className: 'button'});
    cancel.type = 'reset'
    buttonHolderRight.appendChild(cancel);

    let submission = makeElement({ type: 'input', id: 'submission', 
    className: 'button'});
    submission.type = 'submit'
    submission.value = 'Add Task';
    buttonHolderRight.appendChild(submission);

    return {modalContainer, cancel, closeIcon, submission};
};

const toggleModal = () => {
    const {modalContainer, closeIcon} = addTask();
    let navButton = document.getElementById('navTask');

    navButton.onclick = function() {
        modalContainer.style.display = "block";
    };

    closeIcon.onclick = function() {
        modalContainer.style.display = "none";
        document.getElementById('newTask').reset();
    };

    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = "none";
            document.getElementById('newTask').reset();
        };
    };
};



export default toggleModal