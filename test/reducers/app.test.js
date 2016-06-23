/* eslint-env node, mocha */
const expect = require('expect');
const app = require('../../reducers/app.js');

describe('App reducer', () => {
    it('should return initial state when initialized',  () => {
        expect(app(undefined, {})).toEqual({todos:[], filter:'all'}); // eslint-disable-line no-undefined
    });
});