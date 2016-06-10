// const {createStore} = require('redux');
const counter = require('./counter.js');

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => listeners = listeners.filter(l => l != listener);
    };
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l => l());
    }

    dispatch({});

    return {getState, subscribe, dispatch};
};

const store = createStore(counter);

const render = () => document.body.innerText = store.getState();

store.subscribe(render);
render();

document.addEventListener("click", () => store.dispatch({type:'INCREMENT'}));
