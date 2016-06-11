const React = require('react');

const Counter = ({value, onIncrement, onDecrement}) => 
    <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        {value}
    </div>;

module.exports = Counter;