const React = require('react'); // eslint-disable-line no-unused-vars
const Todo = require('./todo.js'); // eslint-disable-line no-unused-vars

const Main = ({todos, onToggleAll, onToggle, onClear, onEdit}) =>
    <section className="main">
        <input className="toggle-all"
               type="checkbox"
               onClick={onToggleAll} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
            {todos.map((todo, index) =>
                <Todo todo={todo}
                      key={index}
                      onToggle={() => onToggle(index)}
                      onDelete={() => onClear(index)}
                      onEdit={(text) => onEdit(index, text)} />)}
        </ul>
    </section>;

module.exports = Main;