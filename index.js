const {createStore} = require('redux');
const reducer = require('./reducers/todos.js');
const React = require('react'); // eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom');
const List = require('./components/list.js'); // eslint-disable-line no-unused-vars

const store = createStore(reducer);

const render = () => ReactDOM.render(
    <List
        values={store.getState()}
        onIncrement={(index) => store.dispatch({type:'INCREMENT', position: index})}
        onDecrement={(index) => store.dispatch({type:'DECREMENT', position: index})}
        onAdd={() => store.dispatch({type:'ADD_COUNTER'})}
        onDelete={(index) => store.dispatch({type:'DELETE_COUNTER', position: index})}
    />,
    document.getElementById('app')
);

store.subscribe(render);
render();
