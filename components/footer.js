const React = require('react'); // eslint-disable-line no-unused-vars


const capitalize = (str) => str[0].toUpperCase() + str.slice(1); 

const Filter = ({title, isActive, onFilter}) => // eslint-disable-line no-unused-vars
	<li>
		<a
			href="#"
			className={isActive ? 'selected' : ''}
			onClick={onFilter}>
			{title}
		</a>
	</li>;


const Footer = ({visible, todosLeft, activeFilter, onClearCompleted, onFilter}) =>
    <footer className="footer" style={{display: visible ? 'block' : 'none'}}>
				<span className="todo-count">{todosLeft} items left</span>
				<ul className="filters">
					{['all', 'active', 'completed'].map((f) =>
						<Filter key={f}
								title={capitalize(f)}
								isActive={activeFilter === f}
								onFilter={() => onFilter(f)}
						/>
					)}
				</ul>
				<button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
			</footer>;

module.exports = Footer;