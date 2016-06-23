/* eslint-env node, mocha */
const expect = require('expect');
const filter = require('../../reducers/filter.js');

describe('Filter reducer', () => {
    it('should return \'all\' when initialized',  () => {
        expect(filter(undefined, {})).toEqual('all'); // eslint-disable-line no-undefined
    });
    it('should return the filter when SET_FILTER',  () => {
        expect(filter('oldFilter', {type:'SET_FILTER', filter:'newFilter'})).toEqual('newFilter');
    });
});