const React = require('react'); // eslint-disable-line no-unused-vars
const toCssClass = (css) => Object.keys(css).
    filter((cssClass) => css[cssClass]).
    join(' ');

const Todo = ({completed, text, onToggle, onDelete}) =>
    <li className={toCssClass({completed})}>
        <div className="view">
            <input className="toggle" type="checkbox" onClick={onToggle} checked={completed} />
            <label>{text}</label>
            <button className="destroy" onClick={onDelete}></button>
        </div>
    </li>;

module.exports = Todo;