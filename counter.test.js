const expect = require('expect');
const counter = require('./counter.js');

expect(counter(undefined, {}))
    .toEqual(0);

expect(counter(4, {type: 'UNKNOWN'}))
    .toEqual(4);

expect(counter(0, {type:'INCREMENT'}))
    .toEqual(1);

expect(counter(2, {type:'INCREMENT'}))
    .toEqual(3);

expect(counter(1, {type:'DECREMENT'}))
    .toEqual(0);

expect(counter(4, {type:'DECREMENT'}))
    .toEqual(3);

console.log("All tests passed!");