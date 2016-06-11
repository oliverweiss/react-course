const counter = require('./counter.js');

const list =  (state = [], action) => {
    switch(action.type){
        case 'ADD_COUNTER':
            return [...state, 0];
        case 'DELETE_COUNTER':
            return [
                ...state.slice(0, action.position),
                ...state.slice(action.position+1)
            ];
        case 'INCREMENT':
        case 'DECREMENT':
            return state.map((c, index) => action.position === index ? counter(c, action) : c);
        default:
            return state;
    }
};

module.exports = list;