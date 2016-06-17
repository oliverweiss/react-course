const {createStore} = require('redux');
const reducer = require('./reducers/todos.js');
const React = require('react'); // eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom');
const App = require('./components/todoApp.js'); // eslint-disable-line no-unused-vars

const store = createStore(reducer);

const dispatchAction = (action) => {
    console.dir(action);
    store.dispatch(action);
};

const render = () => ReactDOM.render(
    // <List
    //     values={store.getState()}
    //     onIncrement={(index) => store.dispatch({type:'INCREMENT', position: index})}
    //     onDecrement={(index) => store.dispatch({type:'DECREMENT', position: index})}
    //     onAdd={() => store.dispatch({type:'ADD_COUNTER'})}
    //     onDelete={(index) => store.dispatch({type:'DELETE_COUNTER', position: index})}
    // />,
    <App
        state={store.getState()}
        dispatch={dispatchAction}
    />,
    document.getElementById('app')
);

store.subscribe(render);
render();
