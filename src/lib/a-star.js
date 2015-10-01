function shortestDistance(args) {
    var start = args.start;
    var end = args.end;
    var expand = args.expand;
    var heuristic = args.heuristic;

    return aStar(end, [node(start, 0)], {});

    function aStar(target, queue, expandedNodes) {
        if (queue.length === 0) {
            return Infinity;
        }

        var nodeToExpand = queue.shift();
        if (nodeToExpand.id === target) {
            return nodeToExpand.distanceFromStart;
        } else {
            expandedNodes[nodeToExpand.id] = true;
            var nodesToAddToQueue = expand(nodeToExpand.id).filter(function(node) {
                return !expandedNodes[node.id];
            });
            var nodesFromExpansion = makeNewNodes(nodesToAddToQueue, nodeToExpand);
            return aStar(target, queue.concat(nodesFromExpansion).sort(nodeSort), expandedNodes);
        }
    }

    function nodeSort(a, b) {
        var estimatedDistanceA = a.distanceFromStart + a.heuristic;
        var estimatedDistanceB = b.distanceFromStart + b.heuristic;
        return estimatedDistanceA - estimatedDistanceB;
    }

    function makeNewNodes(nodeInfos, parentNode) {
        return nodeInfos.map(inheritFromParent);

        function inheritFromParent(nodeInfo) {
            return node(nodeInfo.id, parentNode.distanceFromStart + nodeInfo.distanceFromParent);
        }
    }

    function node(id, distanceFromStart) {
        return {
            id: id,
            heuristic: heuristic(id),
            distanceFromStart: distanceFromStart
        };
    }
}

module.exports = shortestDistance;
