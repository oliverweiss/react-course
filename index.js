const {createStore} = require('redux');
const counter = require('./counter.js');

const store = createStore(counter);

const render = () => document.body.innerText = store.getState();

store.subscribe(render);
document.addEventListener("click", () => store.dispatch({type:'INCREMENT'}));
render();