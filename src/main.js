var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var dictionaryParser = require('./dictionary-parser');

var args = process.argv;
var startWord = args[0];
var endWord = args[1];
var pathToDictionary = args[2] || 'dictionaries/simple.txt';

fs.readFileAsync(pathToDictionary)
.then(function(data) {
    var dictionary = dictionaryParser.parse(data.toString());
    console.log('dicitonary is: ', dictionary);
});
