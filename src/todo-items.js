const makeTask = ({
    title = 'Grind',
    description = 'Make my dreams come true',
    dueDate = 'No due date',
    priority = 'Priority 1',
    comment = 'Never give up!'
} = {}) => ({
    title,
    description,
    dueDate,
    priority,
    comment
});

export default makeTask