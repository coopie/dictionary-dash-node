var assert = require('assert');
var path = require('path');
var moduleName = path.basename(__filename).split('.')[0];

var expandFunction = require('../src/expand-function');

describe(moduleName, function() {
    var shouldReturn = 'should return: ';
    describe('empty dictionary', function() {
        it(shouldReturn + '[]', function() {
            var expand = expandFunction({
                dicitonary: [],
                distance: 1
            });
            assert.deepEqual(expand('node'), []);
        });
    });
    describe('0 distance', function() {
        it(shouldReturn + '["hello"]', function() {
            var expand = expandFunction({
                dicitonary: ['hello'],
                distance: 0
            });
            assert.deepEqual(expand('hello'), ['hello']);
        });
    });
    describe('1 distance', function() {
        it(shouldReturn + '[]', function() {
            var expand = expandFunction({
                dicitonary: ['rick'],
                distance: 1
            });
            assert.deepEqual(expand('rick'), []);
        });
        it(shouldReturn + '["pick"]', function() {
            var expand = expandFunction({
                dicitonary: ['pick'],
                distance: 1
            });
            assert.deepEqual(expand('rick'), ['pick']);
        });
        it(shouldReturn + '["pick", "sick"]', function() {
            var expand = expandFunction({
                dicitonary: ['pick', 'sick', 'blob'],
                distance: 1
            });
            assert.deepEqual(expand('rick'), ['pick', 'sick']);
        });
    });
});
