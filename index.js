function counter(state, action) {
    var current = state || 0;
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        default:
            return state;
    }
}