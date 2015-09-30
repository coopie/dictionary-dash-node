var hammingDistance = require('./lib/hamming-distance');

function heuristicFunction(endWord) {
    return function approxDistanceToEnd(nodeId) {
        return hammingDistance(nodeId, endWord);
    };
}

module.exports = heuristicFunction;
