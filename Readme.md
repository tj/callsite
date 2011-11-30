# callstack

  Access to v8's "raw" `CallSite`s. This module provides the following "magical" global getters:

  - `__stack` array `CallSite` objects starting from the callee
  - `__line` the current line number

## Installation

    $ npm install callsite

## __stack

 For details on the v8 `CallSite` objects view the [stack trace api docs](http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi), for example `__stack[0].getFileName()`.

```js
require('callsite');

foo();

function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  __stack[0].fun == baz;
  __stack[1].fun == bar;
  __stack[2].fun == foo;
}
```

## __line

  Returns the current lineno:

```js
require('callsite');
console.log('foo')
console.log('bar')
console.log(__line) // => 4
```

## Why?

  Because you can do weird, stupid, clever, wacky things such as:
  
    - [better-assert](https://github.com/visionmedia/better-assert)

## License 

(The MIT License)

Copyright (c) 2011 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.