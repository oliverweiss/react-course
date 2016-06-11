const expect = require('expect');
const list = require('../../reducers/list.js');

expect(list(undefined, {})).toEqual([]);

describe('List reducer', function() {
    it('should return an empty list when initialized', function () {
        expect(list(undefined, {})).toEqual([]);
    });
    it('should ignore unknown actions', function () {
        expect(list([1,2,3], {type:'UNKNOWN'})).toEqual([1,2,3]);
    });
    it('should append 0 when ADD_COUNTER', function () {
        expect(list([1,2,3], {type:'ADD_COUNTER'})).toEqual([1,2,3,0]);
    });
    it('should remove counter when DELETE_COUNTER', function () {
        expect(list([1,2,3], {type:'DELETE_COUNTER', position: 0})).toEqual([2,3]);
        expect(list([1,2,3], {type:'DELETE_COUNTER', position: 1})).toEqual([1,3]);
        expect(list([1,2,3], {type:'DELETE_COUNTER', position: 2})).toEqual([1,2]);
    });
    it('should increment counter when INCREMENT', function () {
        expect(list([1,2,3], {type:'INCREMENT', position: 0})).toEqual([2,2,3]);
        expect(list([1,2,3], {type:'INCREMENT', position: 1})).toEqual([1,3,3]);
        expect(list([1,2,3], {type:'INCREMENT', position: 2})).toEqual([1,2,4]);
    });
    it('should decrement counter when DECREMENT', function () {
        expect(list([1,2,3], {type:'DECREMENT', position: 0})).toEqual([0,2,3]);
        expect(list([1,2,3], {type:'DECREMENT', position: 1})).toEqual([1,1,3]);
        expect(list([1,2,3], {type:'DECREMENT', position: 2})).toEqual([1,2,2]);
    });

});