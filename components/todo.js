const React = require('react'); // eslint-disable-line no-unused-vars

const todoClass = (todo) => todo.done ? 'completed' : '';

const Todo = ({todo, onToggle, onDelete}) =>
    <li className={todoClass(todo)}>
        <div className="view">
            <input className="toggle" type="checkbox" onClick={onToggle} checked={todo.done} />
            <label>{todo.text}</label>
            <button className="destroy" onClick={onDelete}></button>
        </div>
    </li>;

module.exports = Todo;