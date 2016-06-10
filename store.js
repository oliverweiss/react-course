const {createStore} = require('redux');
const counter = require('./counter.js');

const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
