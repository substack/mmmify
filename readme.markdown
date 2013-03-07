# mmmify

maximally minimal modules that are *ACTUALLY* minimal

This is a proof of concept for what ES6 should be doing for modules, instead of
what they are actually doing which is so terrible you have no idea.

ES6 modules are some namespacey thing that doesn't care about the right things
to make modularity really work. This proposal is by no means perfect but it
would be *so much* better.

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

```
