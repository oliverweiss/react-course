const React = require('react'); // eslint-disable-line no-unused-vars
const Todo = require('./todo.js'); // eslint-disable-line no-unused-vars

const Main = ({todos, onToggleAll, onToggle, onClear, onEdit}) =>
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
            {todos.map((todo, index) =>
                <Todo todo={todo}
                      key={index}
                      onToggle={() => onToggle(index)}
                      onDelete={() => onClear(index)}/>)}
            <li data-id="1465924753575" className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Task</label>
                    <button className="destroy"></button>
                </div>
            </li>
            <li data-id="1465924844445" className="">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>Task</label>
                    <button className="destroy"></button>
                </div>
            </li>
        </ul>
    </section>;

module.exports = Main;