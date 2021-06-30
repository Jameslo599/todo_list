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

export {makeElement, makeTask}