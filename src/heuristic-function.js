var hammingDistance = require('./lib/hamming-distance');

function heuristicFunction(endWord) {

    function approxDistanceToEnd(nodeId) {
        return hammingDistance(nodeId, endWord);
    }
}
