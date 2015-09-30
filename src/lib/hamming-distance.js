var zipwith = require('zipwith').zipwith;

function hammingDistance(str1, str2) {
    return zipwith(equal, str1, str2).reduce(sumFalse, 0);

    function equal(ch1, ch2) {
        return ch1 === ch2;
    }

    // booleans cast to integers when added to numbers
    function sumFalse(previous, current) {
        var val = current ? 0 : 1;
        return previous + val;
    }
}

module.exports = hammingDistance;
