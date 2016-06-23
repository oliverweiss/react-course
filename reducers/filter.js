const filter = (state = 'all', action) => 
    action.type === 'SET_FILTER' ? action.filter : state;

module.exports = filter;