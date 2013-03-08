var through = require('through');
var falafel = require('falafel');

module.exports = function (file) {
    var data = '';
    var opts = {
        isKeyword: function (kw) {
            if (kw === 'import' || kw === 'export') return true;
        }
    };
    return through(write, end);
    
    function write (buf) { data += buf }
    function end () {
        var src = falafel(data, opts, function (node) {
            if (node.type !== 'UnaryExpression') return;
            if (node.operator === 'import') {
                node.update('require(' + node.argument.source() + ')');
            }
            if (node.operator === 'export') {
                node.update('module.exports=' + node.argument.source() + ';');
            }
        });
        this.queue(String(src));
        this.queue(null);
    }
};
