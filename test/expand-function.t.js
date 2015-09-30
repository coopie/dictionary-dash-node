var assert = require('assert');
var path = require('path');
var moduleName = path.basename(__filename).split('.')[0];

var expandFunction = require('../src/expand-function');

describe(moduleName, function() {
    var shouldReturn = 'should return: ';
    describe('empty dictionary', function() {
        it(shouldReturn + '[]', function() {
            var expand = expandFunction({
                dictionary: [],
                distance: 1
            });
            assert.deepEqual(expand('node'), []);
        });
    });
    describe('0 distance', function() {
        it(shouldReturn + '["hello"]', function() {
            var expand = expandFunction({
                dictionary: ['hello'],
                distance: 0
            });
            assert.deepEqual(expand('hello'), [simpleNodeInfo('hello')]);
        });
    });
    describe('1 distance', function() {
        it(shouldReturn + '[]', function() {
            var expand = expandFunction({
                dictionary: ['rick'],
                distance: 1
            });
            assert.deepEqual(expand('rick'), []);
        });
        it(shouldReturn + '["pick"]', function() {
            var expand = expandFunction({
                dictionary: ['pick'],
                distance: 1
            });
            assert.deepEqual(expand('rick'), [simpleNodeInfo('pick')]);
        });
        it(shouldReturn + '["pick", "sick"]', function() {
            var expand = expandFunction({
                dictionary: ['pick', 'sick', 'blob'],
                distance: 1
            });
            assert.deepEqual(expand('rick'), [simpleNodeInfo('pick'), simpleNodeInfo('sick')]);
        });
    });
});

function simpleNodeInfo(nodeId) {
    return {
        id: nodeId,
        distanceFromParent: 1
    };
}
