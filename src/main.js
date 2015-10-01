var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var dictionaryParser = require('./dictionary-parser');
var expandFunction = require('./expand-function');
var heuristicFunction = require('./heuristic-function');
var shortestDistance = require('./lib/a-star');

var args = process.argv;
var startWord = args[2];
var endWord = args[3];
var pathToDictionary = args[4] || 'dictionaries/fourletter.txt';

fs.readFileAsync(pathToDictionary)
.then(function(data) {
    var dictionary = dictionaryParser.parse(data.toString());

    if (dictionary.indexOf(endWord) === -1) {
        console.err(endWord, ' does not exist in dictionary');
        process.exit();
    }

    var expand = expandFunction({
        dictionary: dictionary,
        distance: 1
    });

    var heuristic = heuristicFunction(endWord);

    console.log('The shortest distance between ', startWord, 'and ', endWord,
        ' is: ', shortestDistance({
            start: startWord,
            end: endWord,
            expand: expand,
            heuristic: heuristic
        }));
});
