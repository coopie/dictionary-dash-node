function parse(file) {
    return file.split(/\s+/).filter(notWhiteSpace);

    function notWhiteSpace(str) {
        return str.match(/\S/);
    }
}

module.exports = {
    parse: parse
};
