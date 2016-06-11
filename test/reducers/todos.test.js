const expect = require('expect');
const todos = require('../../reducers/todos.js');

describe('List reducer', function() {
    it('should return an empty list when initialized', function () {
        expect(todos(undefined, {})).toEqual([]);
    });
    it('should ignore unknown actions', function () {
        expect(todos([{},{},{}], {type:'UNKNOWN'})).toEqual([{},{},{}]);
    });
    it('should append a todo when ADD_TODO', function () {
        expect(todos([], {type:'ADD_TODO', text:'Learn Redux'})).toEqual([{text:'Learn Redux', done:false}]);
    });
    it('should toggle a todo when TOGGLE_TODO', function () {
        expect(todos([{text:'Learn Redux', done:false}], {type:'TOGGLE_TODO', position:0})).toEqual([{text:'Learn Redux', done:true}]);
    });

});