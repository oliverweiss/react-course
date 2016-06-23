const add = (text) => ({type:'ADD_TODO', text});
const toggleAll = () => ({type:'TOGGLE_ALL_TODOS'});
const toggle = (position) => ({type: 'TOGGLE_TODO', position});
const clear = (position) => ({type: 'CLEAR_TODO', position});
const edit = (position, text) => ({type: 'EDIT_TODO', position, text});
const clearCompleted = () => ({type: 'CLEAR_COMPLETED_TODOS'});

module.exports = {add, toggleAll, toggle, clear, edit, clearCompleted};