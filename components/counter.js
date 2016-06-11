const React = require('react');

const Counter = ({value, onIncrement, onDecrement, onDelete}) => 
    <div>
        <button onClick={onDelete}>x</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        {value}
    </div>;

module.exports = Counter;