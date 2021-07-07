const makeElement = ({
    type,
    id = '',
    className = '',
    href = '',
} = {}) => {
    let element = document.createElement(type);
    element.setAttribute('id', id);
    element.setAttribute('class', className);
    element.setAttribute('href', href);
    return element;
};

const makeTask = ({
    id,
    title = 'Grind',
    description = 'Make my dreams come true',
    dueDate = 'No due date',
    priority = 'ASAP',
    project = 'Never give up!'
} = {}) => ({
    id,
    title,
    description,
    dueDate,
    priority,
    project
});

const activateButton = (name) => {
    name.onclick = function() {
        document.getElementById('modalContainer').style.display = "block";
    };
};

const makeList = ({id, text}) => {
    const subject = makeElement({type: 'h2', id: `${id}`, 
    className: `lists`});
    subject.innerHTML = `${text}`;
    grid.prepend(subject);

    let taskPile = makeElement({type: 'div', id: `${id}Pile`, 
    className: 'pile'});
    subject.appendChild(taskPile);

    let taskList = makeElement({type: 'ul', id: `${id}List`, 
    className: 'list'});
    taskPile.appendChild(taskList);
    
    let task = makeElement({type: 'li', id: `${id}Task`, 
    className: 'task'});
    task.innerHTML = 'Add Task ';
    taskList.appendChild(task);

    let taskLink = makeElement({type: 'a', href: '#'});
    task.appendChild(taskLink);

    let taskIcon = makeElement({type: 'i', id: `${id}Icon`, 
    className: 'fal fa-plus-circle'});
    taskLink.appendChild(taskIcon);
    activateButton(taskIcon);
};

export {makeElement, makeTask, makeList}