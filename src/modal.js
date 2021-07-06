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

    let formClone = document.getElementById('newTask').cloneNode(true);
        formClone.id = 'formClone';
        formClone.style.display = 'none';
        modalContainer.appendChild(formClone);

    return {modalContainer, cancel, closeIcon, submission};
};

const editTask = () => {
    let newTaskClone = makeElement({ type: 'form', id: 'newTaskClone', 
    className: 'newTask'});
    newTaskClone.style.display = 'none';
    modalContainer.appendChild(newTaskClone);

    let headerClone = makeElement({ type: 'h2', id: 'modalHeaderClone', 
    className: 'modalHeader'});
    headerClone.innerHTML = 'New Task'
    newTaskClone.appendChild(headerClone);

    let closeLinkClone = makeElement({type: 'a', href: '#'});
    headerClone.appendChild(closeLinkClone);

    let closeIconClone = makeElement({type: 'i', id: 'closeIcon', 
    className: 'fas fa-times'});
    closeLinkClone.appendChild(closeIconClone);

    let bodyClone = makeElement({ type: 'div', id: 'modalBodyClone', 
    className: 'modalBody'});
    newTaskClone.appendChild(bodyClone);

    let titleClone = makeElement({ type: 'div', id: 'modalTitleClone', 
    className: 'left-side'});
    titleClone.innerHTML = `Title:<br>`
    bodyClone.appendChild(titleClone);

    let titleInputClone = makeElement({ type: 'input', id: 'titleInputClone', 
    className: 'input'});
    titleInputClone.type = 'text'
    titleInputClone.required = true;
    titleClone.appendChild(titleInputClone);

    let dateClone = makeElement({ type: 'div', id: 'dateClone', 
    className: 'right-side'});
    dateClone.innerHTML = `Due Date:<br>`
    bodyClone.appendChild(dateClone);

    let dateInputClone = makeElement({ type: 'input', id: 'dateInputClone', 
    className: 'input'});
    dateInputClone.type = 'datetime-local'
    dateInputClone.min = `${format(new Date(), 'yyyy-MM-dd\'T\'HH:mm')}`;
    dateInputClone.required = true;
    dateClone.appendChild(dateInputClone);

    let descriptionClone = makeElement({ type: 'div', id: 'descriptionClone', 
    className: 'left-side'});
    descriptionClone.innerHTML = `Description:<br>`
    bodyClone.appendChild(descriptionClone);

    let descriptionInputClone = makeElement({ type: 'textarea', id: 'descriptionInputClone', 
    className: 'input'});
    descriptionInputClone.rows = '6';
    descriptionInputClone.cols = '21';
    descriptionInputClone.required = true;
    descriptionClone.appendChild(descriptionInputClone);

    let priorityClone = makeElement({ type: 'div', id: 'priorityClone', 
    className: 'right-side'});
    priorityClone.innerHTML = `Priority:<br>`
    bodyClone.appendChild(priorityClone);

    let priorityInputClone = makeElement({ type: 'select', id: 'priorityInputClone', 
    className: 'input'});
    priorityClone.appendChild(priorityInputClone);

    for (let i = 0; i <= 3; i++) {
        let choosePriority = makeElement({ type: 'option', id: `priorityClone${i}`});
        priorityInputClone.appendChild(choosePriority);
    };
    document.getElementById('priorityClone0').innerHTML = 'ASAP'
    document.getElementById('priorityClone1').innerHTML = 'High'
    document.getElementById('priorityClone2').innerHTML = 'Medium'
    document.getElementById('priorityClone3').innerHTML = 'Low'

    let projectClone = makeElement({ type: 'div', id: 'projectClone', 
    className: 'right-side'});
    projectClone.innerHTML = `Project:<br>`
    priorityClone.appendChild(projectClone);

    let projectInputClone = makeElement({ type: 'select', id: 'projectInputClone', 
    className: 'input'});
    projectClone.appendChild(projectInputClone);

    for (let i = 0; i <= 1; i++) {
        let chooseProject = makeElement({ type: 'option', id: `projectChoiceClone${i}`});
        projectInputClone.appendChild(chooseProject);
    };
    document.getElementById('projectChoiceClone0').innerHTML = 'Inbox'
    document.getElementById('projectChoiceClone1').innerHTML = 'Project'

    let buttonHolderLeftClone = makeElement({ type: 'div', id: 'buttonHolderClone', 
    className: 'left-side'});
    bodyClone.appendChild(buttonHolderLeftClone);

    let buttonHolderRightClone = makeElement({ type: 'div', id: 'buttonHolderClone', 
    className: 'right-side'});
    bodyClone.appendChild(buttonHolderRightClone);

    let cancelClone = makeElement({ type: 'input', id: 'cancelClone', 
    className: 'button'});
    cancelClone.type = 'reset'
    buttonHolderRightClone.appendChild(cancelClone);

    let submissionClone = makeElement({ type: 'input', id: 'submissionClone', 
    className: 'button'});
    submissionClone.type = 'submit'
    submissionClone.value = 'Add Task';
    buttonHolderRightClone.appendChild(submissionClone);

    return {cancelClone, closeIconClone, submissionClone};
};

const toggleModal = () => {
    const {modalContainer, closeIcon} = addTask();
    const {closeIconClone} = editTask();
    let navButton = document.getElementById('navTask');

    navButton.onclick = function() {
        modalContainer.style.display = 'none';
    };

    closeIcon.onclick = function() {
        modalContainer.style.display = 'none';
        document.getElementById('newTask').reset();
    };

    closeIconClone.onclick = function() {
        modalContainer.style.display = 'none';
        document.getElementById('newTaskClone').reset();
    };

    window.onclick = function(event) {
        if (event.target == modalContainer) {
            modalContainer.style.display = 'none';
            document.getElementById('newTask').style.display = 'block';
            document.getElementById('newTask').reset();
            document.getElementById('newTaskClone').style.display = 'none';
            document.getElementById('newTaskClone').reset();
        };
    };
};


export default toggleModal