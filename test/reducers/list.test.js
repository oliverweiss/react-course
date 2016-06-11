const expect = require('expect');
const list = require('../../reducers/list.js');

expect(list(undefined, {})).toEqual([]);

describe('List reducer', function() {
    it('should return an empty list when initialized', function () {
        expect(list(undefined, {})).toEqual([]);
    });
});