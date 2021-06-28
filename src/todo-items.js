const makeTask = ({
    title = 'Grind',
    description = 'Make my dreams come true',
    dueDate = 'No due date',
    priority = 'Priority 1',
    project = 'Never give up!'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    project
});

export default makeTask