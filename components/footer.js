const React = require('react'); // eslint-disable-line no-unused-vars

const Footer = ({visible, todosLeft,  onClearCompleted}) =>
    <footer className="footer" style={{display: visible ? 'block' : 'none'}}>
				<span className="todo-count">{todosLeft} items left</span>
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
				<button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
			</footer>;

module.exports = Footer;