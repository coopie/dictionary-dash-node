function parse(file) {
    return file.split(/\s+/).filter(notWhiteSpace).map(toLowerCase);

    function notWhiteSpace(str) {
        return str.match(/\S/);
    }
    function toLowerCase(str) {
        return str.toLowerCase();
    }
}

module.exports = {
    parse: parse
};
