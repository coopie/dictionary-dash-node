var hammingDistance = require('./lib/hamming-distance');

//builds the function for exanding the graph, given a node of the graph
function expandFunction(args) {
    var dicitonary = args.dicitonary;
    var distance = args.distance;

    function expand(nodeId) {
        return dicitonary.filter(withinHammingDistance(nodeId, distance));
    }

    function withinHammingDistance(nodeId, distance) {
        return function(str) {
            return hammingDistance(str, nodeId) == distance;
        };
    }

    return expand;
}

module.exports = expandFunction;
