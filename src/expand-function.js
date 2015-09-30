var hammingDistance = require('./lib/hamming-distance');

// Builds the function for exanding the graph, given a node of the graph
function expandFunction(args) {
    var dictionary = args.dictionary;
    var distance = args.distance; // The hamming-distance jump size we are doing (usually 1)

    function expand(nodeId) {
        return dictionary.filter(withinHammingDistance(nodeId, distance)).map(makeExpandInfo);
    }

    function withinHammingDistance(nodeId, distance) {
        return function(str) {
            return hammingDistance(str, nodeId) == distance;
        };
    }

    function makeExpandInfo(nodeId) {
        return {
            id: nodeId,
            distanceFromParent: 1
        };
    }

    return expand;
}

module.exports = expandFunction;
