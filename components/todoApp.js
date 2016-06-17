const React = require('react'); // eslint-disable-line no-unused-vars
const Header = require('./header.js'); // eslint-disable-line no-unused-vars

const getTitle = (state) => {
    switch(state.length){
        case 0: return 'no todos'; // eslint-disable-line no-magic-numbers
        case 1: return '1 todo'; // eslint-disable-line no-magic-numbers
        default: return `${state.length} todos`;
    }
};

const App = ({state, dispatch}) => 
    <div>
        <section className="todoapp">
            <Header title={getTitle(state)}
                    onEdit={(text) => dispatch({type:'EDIT_TEXT', text})}
                    onNewTodo={(text) => dispatch({type:'ADD_TODO', text})}
            />
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
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
			</section>
			<footer className="footer">
				<span className="todo-count"></span>
				<ul className="filters">
					<li>
						<a href="#/" className="selected">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
		</section>
		<footer className="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
			<p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
        </div>;

module.exports = App;
