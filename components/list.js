const React = require('react'); // eslint-disable-line no-unused-vars
const Counter = require('./counter.js'); // eslint-disable-line no-unused-vars

const List = ({values, onIncrement, onDecrement, onAdd, onDelete}) => 
    <div>
        {values.length} counters
        <button onClick={onAdd}>Insert</button>
        {values.map((c, index) =>
            <Counter
                value={c}
                onIncrement={() => onDecrement(index)}
                onDecrement={() => onIncrement(index)}
                onDelete={() => onDelete(index)}
                Key={index}
            />
        )}
    </div>;

module.exports = List;

