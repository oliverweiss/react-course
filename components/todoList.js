const React = require('react'); // eslint-disable-line no-unused-vars
const Todo = require('./todo.js'); // eslint-disable-line no-unused-vars

const TodoList = ({todos, onToggle, onDelete, onEdit}) =>
    <ul className="todo-list">
        {todos.map((todo, index) =>
            <Todo key={index}
                    completed={todo.done}
                    text={todo.text}
                    onToggle={() => onToggle(index)}
                    onDelete={() => onDelete(index)}
                    onEdit={(text) => onEdit(index, text)} />)}
    </ul>;

module.exports = TodoList;