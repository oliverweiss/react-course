const React = require('react'); // eslint-disable-line no-unused-vars
const TodoList = require('./todoList.js'); // eslint-disable-line no-unused-vars

const Main = ({todos, onToggleAll, onToggle, onDelete, onEdit}) =>
    <section className="main">
        <input className="toggle-all"
               type="checkbox"
               onClick={onToggleAll} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList {...{todos, onToggle, onDelete, onEdit}} />
    </section>;

module.exports = Main;