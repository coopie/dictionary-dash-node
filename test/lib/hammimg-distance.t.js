var assert = require('assert');
var path = require('path');
var moduleName = path.basename(__filename).split('.')[0];

var hammingDistance = require('../../src/lib/hamming-distance');

describe(moduleName, function() {
    var shouldReturn = 'should return: ';
    describe('Same String', function() {
        it(shouldReturn + '0', function() {
            assert.equal(hammingDistance('hello', 'hello'), 0);
            assert.equal(hammingDistance('worlderino', 'worlderino'), 0);
        });
    });
    describe('One letter different', function() {
        it(shouldReturn + '1', function() {
            assert.equal(hammingDistance('hello', 'lello'), 1);
            assert.equal(hammingDistance('sam', 'ham'), 1);
        });
    });
    describe('All different', function() {
        it(shouldReturn + 'length of string', function() {
            assert.equal(hammingDistance('hello', 'bbbbb'), 'hello'.length);
            assert.equal(hammingDistance('zas', 'lll'), 'zas'.length);
        });
    });
    describe('Complex difference', function() {
        it('should not break', function() {
            assert.equal(hammingDistance('hello', 'world'), 4);
            assert.equal(hammingDistance('tramp', 'clamp'), 2);
            assert.equal(hammingDistance('abcdefghi', 'bcdefghij'), 9);
        });
    });
});
