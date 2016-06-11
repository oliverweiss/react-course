const todos =  (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {text: action.text, done:false}];
        case 'TOGGLE_TODO':
            return state.map((todo, index) => action.position === index ? {...todo, done: !todo.done} : todo);
        default:
            return state;
    }
};

module.exports = todos;