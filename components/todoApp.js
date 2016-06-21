const React = require('react'); // eslint-disable-line no-unused-vars
const Header = require('./header.js'); // eslint-disable-line no-unused-vars
const Main = require('./main.js'); // eslint-disable-line no-unused-vars

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
			<Main todos={state}
                  onToggleAll={() => dispatch({type:'TOGGLE_ALL_TODOS'})}
                  onToggle={(position) => dispatch({type: 'TOGGLE_TODO', position})}
                  onClear={(position) => dispatch({type: 'CLEAR_TODO', position})}
                  onEdit={(position, text) => dispatch({type: 'EDIT_TODO', position, text})}
			/>
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
