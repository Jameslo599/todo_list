import {makeElement} from './header.js'

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
    title.appendChild(titleInput);

    let date = makeElement({ type: 'div', id: 'date', 
    className: 'right-side'});
    date.innerHTML = `Due Date:<br>`
    body.appendChild(date);

    let dateInput = makeElement({ type: 'input', id: 'dateInput', 
    className: 'input'});
    dateInput.type = 'datetime-local'
    date.appendChild(dateInput);

    let description = makeElement({ type: 'div', id: 'description', 
    className: 'left-side'});
    description.innerHTML = `Description:<br>`
    body.appendChild(description);

    let descriptionInput = makeElement({ type: 'textarea', id: 'descriptionInput', 
    className: 'input'});
    descriptionInput.rows = '6';
    descriptionInput.cols = '21';
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
    document.getElementById('priority0').innerHTML = 'Priority 1'
    document.getElementById('priority1').innerHTML = 'Priority 2'
    document.getElementById('priority2').innerHTML = 'Priority 3'
    document.getElementById('priority3').innerHTML = 'Priority 4'

    let project = makeElement({ type: 'div', id: 'project', 
    className: 'right-side'});
    project.innerHTML = `Project:<br>`
    priority.appendChild(project);

    let projectInput = makeElement({ type: 'select', id: 'projectInput', 
    className: 'input'});
    project.appendChild(projectInput);

    for (let i = 0; i <= 1; i++) {
        let chooseProject = makeElement({ type: 'option', id: `project${i}`});
        projectInput.appendChild(chooseProject);
    };
    document.getElementById('project0').innerHTML = 'Inbox'
    document.getElementById('project1').innerHTML = 'Project'

    let buttonHolderLeft = makeElement({ type: 'div', id: 'buttonHolder', 
    className: 'left-side'});
    body.appendChild(buttonHolderLeft);

    let buttonHolderRight = makeElement({ type: 'div', id: 'buttonHolder', 
    className: 'right-side'});
    body.appendChild(buttonHolderRight);

    let cancel = makeElement({ type: 'button', id: 'cancel', 
    className: 'button'});
    cancel.innerHTML = 'Cancel';
    buttonHolderRight.appendChild(cancel);

    let submission = makeElement({ type: 'button', id: 'submission', 
    className: 'button'});
    submission.innerHTML = 'Add Task';
    buttonHolderRight.appendChild(submission);
};


//
//let modal = document.getElementById("modalContainer");
//let button = document.getElementById("newBook");
//let span = document.getElementById("close");
//button.onclick = function() {
//    modal.style.display = "block";
//};
//span.onclick = function() {
//    modal.style.display = "none";
//};
//
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//        document.getElementById("author").value = "";
//        document.getElementById("title").value = "";
//        document.getElementById("pages").value = "";
//        checkBox.checked = false;
//    }
//}
//

export default addTask