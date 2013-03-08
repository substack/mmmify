var test = require('tap').test;
var browserify = require('browserify');

test('transform', function (t) {
    t.plan(1);
    
    var b = browserify();
    b.transform(__dirname + '/..')
    b.add(__dirname + '/files/main.js');
    b.bundle(function (err, src) {
        Function('t', src)(t)
    });
});
