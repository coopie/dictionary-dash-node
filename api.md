# api#

The program uses a generic A* algorithm to find the shortest route using the hamming distance of the string to the end word as the heuristic distance measure.

The A* function takes in 4 arguments:

* `start`: the starting word in the dictionary
* `end`: the end word we are trying to arrive at
* `expand`: a function which given a nodeId from the graph, will return the nodeIds their distances connected to it. In this case the distance from one node to another is always one, as we are only changing one letter per word jump.
* `heuristic`: a function which calculates the estimated distance from a node to the end word.

Both the `expand` and `heuristic` functions are *made* by the modules `expandFunction` and `heuristicFunction`. 
