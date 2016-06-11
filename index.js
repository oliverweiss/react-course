const {createStore} = require('redux');
const reducer = require('./reducers/counter.js');
const React = require('react');
const ReactDOM = require('react-dom');
const Counter = require('./components/counter.js');

const store = createStore(reducer);

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type:'INCREMENT'})}
        onDecrement={() => store.dispatch({type:'DECREMENT'})}
    />,
    document.getElementById('app')
);

store.subscribe(render);
render();
