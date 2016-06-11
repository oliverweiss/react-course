const expect = require('expect');
const counter = require('../../reducers/counter.js');

describe('Counter reducer', function(){
    it('should return 0 when initialized', function() {
        expect(counter(undefined, {})).toEqual(0);
    });
    it('should ignore unknown actions', function() {
        expect(counter(4, {type: 'UNKNOWN'})).toEqual(4);
    });
    it('should increment', function() {
        expect(counter(0, {type:'INCREMENT'})).toEqual(1);
        expect(counter(2, {type:'INCREMENT'})).toEqual(3);
    });
    it('should decrement', function() {
        expect(counter(1, {type:'DECREMENT'})).toEqual(0);
        expect(counter(4, {type:'DECREMENT'})).toEqual(3);
    });
});