var assert = require('assert');
var path = require('path');
var moduleName = path.basename(__filename).split('.')[0];

var shortestDistance = require('../../src/lib/a-star');
var expandFunction = require('../../src/expand-function');
var heuristicFunction = require('../../src/heuristic-function');

describe(moduleName, function() {
    var shouldReturn = 'should return: ';
    describe('Start and finish the same', function() {
        it(shouldReturn + '0', function() {
            assert.equal(shortestDistance({
                start: 'hello',
                end: 'hello',
                expand: expandFunction({
                    dictionary: [],
                    distance: 1
                }),
                heuristic: heuristicFunction('hello')
            }), 0);
        });
    });
    describe('Start and finish one different', function() {
        it(shouldReturn + '1', function() {
            assert.equal(shortestDistance({
                start: 'ham',
                end: 'sam',
                expand: expandFunction({
                    dictionary: ['sam'],
                    distance: 1
                }),
                heuristic: heuristicFunction('sam')
            }), 1);
        });
    });
    describe('No solution', function() {
        it(shouldReturn + 'Infinity', function() {
            assert.equal(shortestDistance({
                start: 'ham',
                end: 'sam',
                expand: expandFunction({
                    dictionary: ['yes'],
                    distance: 1
                }),
                heuristic: heuristicFunction('sam')
            }), Infinity);
        });
    });
    describe('Several jumps', function() {
        it(shouldReturn + '3', function() {
            assert.equal(shortestDistance({
                start: 'ham',
                end: 'tog',
                expand: expandFunction({
                    dictionary: ['hag','hog','tog'],
                    distance: 1
                }),
                heuristic: heuristicFunction('tog')
            }), 3);
        });
    });
    describe('More than shortest possible path', function() {
        it(shouldReturn + '5', function() {
            assert.equal(shortestDistance({
                start: 'ham',
                end: 'tog',
                expand: expandFunction({
                    dictionary: ['him','hil','til','tol','tog'],
                    distance: 1
                }),
                heuristic: heuristicFunction('tog')
            }), 5);
        });
    });
    describe('Could choose wrong', function() {
        it(shouldReturn + '4', function() {
            assert.equal(shortestDistance({
                start: 'ham',
                end: 'tog',
                expand: expandFunction({
                    dictionary: ['hal','has','him','hil','til','tal','tol','tog'],
                    distance: 1
                }),
                heuristic: heuristicFunction('tog')
            }), 4);
        });
    });
});
