const {createStore} = require('redux');
const reducer = require('./reducers/app.js');
const React = require('react'); // eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom');
const App = require('./components/todoApp.js'); // eslint-disable-line no-unused-vars

const store = createStore(reducer);

const dispatchAction = (action) => {
    console.group(action.type);
    console.log(action);
    store.dispatch(action);
    console.log(store.getState());
    console.groupEnd(action.type);
};

const dispatchActionBuilder = (dispatch) => (action) => (...args) => dispatch(action(...args));

const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        dispatch={dispatchAction}
        onAction={dispatchActionBuilder(dispatchAction)}
    />,
    document.getElementById('app')
);

store.subscribe(render);
render();
