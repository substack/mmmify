# mmmify

maximally minimal modules that are *ACTUALLY* minimal

This is a proof of concept for what ES6 should be doing for modules, instead of
what they are actually doing which is so terrible you have no idea.

ES6 modules are some namespacey thing that doesn't care about the right things
to make modularity really work. This proposal is by no means perfect but it
would be *so much* better.

[![build status](https://secure.travis-ci.org/substack/mmmify.png)](http://travis-ci.org/substack/mmmify)

# syntax

Use `import PATH` to load a module from the string `PATH`. `import` is a keyword
like `typeof` that just returns an ordinary value.

Use `export VALUE` to export functionality. Think of it like `return` that
doesn't immediately jump out of the current context.

# example

``` js
// main.js

var foo = import './foo.js'
console.log(foo(5));
```

``` js
// foo.js

var bar = import './bar.js'
export function (n) { return bar(n) * 10 };
```

``` js
// bar.js

export function (n) { return n + 3 };
```

build it with browserify:

```
$ browserify -t mmmify main.js > bundle.js
```

then run it with node (or a browser):

```
$ node bundle.js
80
```

POW.

# methods

``` js
var mmmify = require('mmmify')
```

This module is a
[browserify transform](http://github.com/substack/node-browserify#btransformtr)
but you don't need to use browserify necessarily to use it.

## mmmify()

Return a through-stream desugaring `import` and `export` keywords into
`require()` and `module.exports=...` that can be parsed by node and browserify.

# see also

This module syntax proposal is really similar to
[isaac's great es6 modules
proposal](http://blog.izs.me/post/25906678790/on-es-6-modules).

Check out [domenic's gist on node<->es6
interop](https://gist.github.com/domenic/4748675) while you're at it.

# todo

Right now `import` and `export` just desugar to `require()` and `module.exports`
but in the future they could be made to do something slightly more robust and
static analysis-y. The point of this proof of concept module is to demonstrate
how excellent and simple ES6 modules could possibly be.

# install

With [npm](https://npmjs.org) do:

```
npm install mmmify
```

# license

MIT
