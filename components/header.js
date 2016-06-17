const React = require('react'); // eslint-disable-line no-unused-vars

class InputField extends React.Component { // eslint-disable-line no-unused-vars 
    onCommit (value) {
        const text = value.trim();

        if (text) {
            this.props.onSave(text);
        }
        this.input.value = '';
    }

    saveNode (node) {
        this.input = node;
    }

    render () {
        return <input
            {...this.props}
            ref={(node) => {
                this.input = node;
            }}
            onBlur={() => this.onCommit(this.input.value)}
            onSubmit={() => this.onCommit(this.input.value)}
        />;
    }    
}

const Header = ({title, onNewTodo}) =>
    <header className="header">
        <h1>{title}</h1>
        <InputField
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus
            onSave={onNewTodo}
        />
    </header>;

module.exports = Header;