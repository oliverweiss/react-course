/* eslint-env node, mocha */
const expect = require('expect');
const todos = require('../../reducers/todos.js');

describe('Todos reducer', () => {
    it('should return an empty list when initialized',  () => {
        expect(todos(undefined, {})).toEqual([]); // eslint-disable-line no-undefined
    });
    it('should ignore unknown actions',  () => {
        expect(todos([{}, {}, {}], {type:'UNKNOWN'})).toEqual([{}, {}, {}]);
    });
    it('should add a todo when ADD_TODO',  () => {
        expect(todos([], {type:'ADD_TODO', text:'Learn Redux'})).toEqual([{text:'Learn Redux', done:false}]);
    });
    const todoA = {text:'Learn Redux', done:false};
    const todoB = {text:'Have fun', done:true};

    it('should prepend a todo when ADD_TODO',  () => {        
        expect(todos([todoA, todoB], {type:'ADD_TODO', text:'Take over the world'})).toEqual([{text:'Take over the world', done:false}, todoA, todoB]);
    });    
    it('should edit a todo when EDIT_TODO',  () => {        
        expect(todos(
            [todoA, {text:'Learn Redux', done:false}],
            {type:'EDIT_TODO', position:1, text: 'Learn React'})
        ).toEqual(
            [todoA, {text:'Learn React', done:false}]);
    });
    it('should delete a todo when CLEAR_TODO',  () => {        
        expect(todos(
            [todoA, {text:'Learn Redux', done:false}],
            {type:'CLEAR_TODO', position:1})
        ).toEqual(
            [todoA]);
    });
    it('should toggle a todo when TOGGLE_TODO', () => {
        expect(todos([todoA, {text:'Learn Redux', done:false}], {type:'TOGGLE_TODO', position:1})).toEqual([todoA, {text:'Learn Redux', done:true}]);
    });
    it('should complete all todos when TOGGLE_ALL_TODOS and at least one is undone', () => {
        expect(todos([todoB, {text:'Learn Redux', done:false}], {type:'TOGGLE_ALL_TODOS'})).toEqual([todoB, {text:'Learn Redux', done:true}]);
    });
    it('should uncomplete all todos when TOGGLE_ALL_TODOS and all complete', () => {
        expect(todos(
            [
                {text: 'Have fun', done:true},
                {text:'Learn Redux', done:true}
            ],
            {type:'TOGGLE_ALL_TODOS'})
        ).toEqual(
            [
                {text: 'Have fun', done:false},
                {text:'Learn Redux', done:false}
            ]);
    });
    it('should clear all completed todos when CLEAR_COMPLETED_TODOS', () => {
        expect(todos(
            [
                {text: 'Have fun', done:true},
                {text:'Learn Redux', done:true},
                {text:'Take over the world', done:false}
            ],
            {type:'CLEAR_COMPLETED_TODOS'})
        ).toEqual(
            [
                {text:'Take over the world', done:false}
            ]);
    });

});