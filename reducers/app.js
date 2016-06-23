const todos = require('./todos.js');
const filter = require('./filter.js');

const app = (state = {}, action) => ({
    todos : todos(state.todos, action),
    filter : filter(state.filter, action)
});

module.exports = app;