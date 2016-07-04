const React = require('react'); // eslint-disable-line no-unused-vars
const Header = require('./header.js'); // eslint-disable-line no-unused-vars
const Main = require('./main.js'); // eslint-disable-line no-unused-vars
const Footer = require('./footer.js'); // eslint-disable-line no-unused-vars
const todosActions = require('../actions/todos.js');
const filterActions = require('../actions/filter.js');

const getTitle = ({todos}) => {
    switch(todos.length){
        case 0: return 'no todos'; // eslint-disable-line no-magic-numbers
        case 1: return '1 todo'; // eslint-disable-line no-magic-numbers
        default: return `${todos.length} todos`;
    }
};

const filterTodo = (filter) => (todo) => {
    switch (filter) {
        case 'completed': return todo.done;
        case 'active': return !todo.done;
        default: return true;
    }
};
const getVisibleTodos = (state) => state.todos.filter(filterTodo(state.filter));

const countUndone = ({todos}) => todos.filter((t) => !t.done).length;

const anyTodo = (state) => state.todos.length > 0;

const App = ({state, onAction}) => 
    <div>
        <section className="todoapp">
            <Header title={getTitle(state)}
                    onNewTodo={onAction(todosActions.add)}
            />
			<Main todos={getVisibleTodos(state)}
                  onToggleAll={onAction(todosActions.toggleAll)}
                  onToggle={onAction(todosActions.toggle)}
                  onDelete={onAction(todosActions.clear)}
                  onEdit={onAction(todosActions.edit)}
			/>
			<Footer visible={anyTodo(state)}
					todosLeft={countUndone(state)}
                    activeFilter={state.filter}
                    onClearCompleted={onAction(todosActions.clearCompleted)}
                    onFilter={onAction(filterActions.set)} />
		</section>
		<footer className="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
			<p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
			<p>Reactified by Oli</p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
        </div>;

module.exports = App;
