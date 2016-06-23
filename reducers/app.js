const todos = require('./todos.js');
const filter = require('./filter.js');

const combineReducers = (reducers) =>
    (state = {}, action) => 
        Object.keys(reducers).reduce((_reducer, key) =>
            ({
                ..._reducer,
                [key]: reducers[key](state[key], action)
            }), {});

const app = combineReducers({todos, filter});

// const app = (state = {}, action) => ({
//     todos : todos(state.todos, action),
//     filter : filter(state.filter, action)
// });

module.exports = app;