const makeTask = ({
    title = 'Unnamed',
    description = 'No description',
    dueDate = 'No due date',
    priority = 'Priority 4',
    comment = 'No comment'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    comment
});

export default makeTask