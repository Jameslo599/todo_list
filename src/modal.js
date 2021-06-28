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
    className: 'modalTitle'});
    title.innerHTML = `Title:<br>`
    body.appendChild(title);

    let titleInput = makeElement({ type: 'input', id: 'titleInput', 
    className: 'titleInput'});
    title.type = 'text'
    title.appendChild(titleInput);

    let date = makeElement({ type: 'div', id: 'date', 
    className: 'date'});
    date.innerHTML = 'Due Date:'
    body.appendChild(date);
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