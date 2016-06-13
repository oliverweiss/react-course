const addTodo = (state, text) => [{text, done:false}, ...state];
const toggle = (todo) => ({...todo, done: !todo.done});
const toggleTodo = (state, position) => state.map((todo, index) => position === index ? toggle(todo) : todo);
const editTodo = (state, position, text) => state.map((todo, index) => position === index ? {...todo, text} : todo);
const ORIGIN = 0;
const clearTodo = (state, position) => [...state.slice(ORIGIN, position), ...state.slice(position + 1)];
const toggleAllTodos = (state) => {
    const done = state.some((todo) => !todo.done);

    return state.map((todo) => ({...todo, done}));
};
const clearCompletedTodos = (state) => state.filter((todo) => !todo.done);

const todos =  (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return addTodo(state, action.text);
        case 'EDIT_TODO':
            return editTodo(state, action.position, action.text);
        case 'CLEAR_TODO':
            return clearTodo(state, action.position);
        case 'TOGGLE_TODO':
            return toggleTodo(state, action.position);
        case 'TOGGLE_ALL_TODOS':
            return toggleAllTodos(state);
        case 'CLEAR_COMPLETED_TODOS':
            return clearCompletedTodos(state);
        default:
            return state;
    }
};

module.exports = todos;