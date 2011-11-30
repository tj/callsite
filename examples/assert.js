
require('../');

var fs = require('fs');

function assert(expr) {
  if (expr) return;

  var call = __stack[1]
    , file = call.getFileName()
    , lineno = call.getLineNumber()
    , src = fs.readFileSync(file, 'utf8')
    , line = src.split('\n')[lineno-1]
    , src = parse(line);

  var fmt = '  \033[91massert: \033[31m%s\033[0m'
    + '\n  \033[90min: %s:%d'
    + '\n  value: %j\033[0m'
    + '\n';

  console.error(fmt, src, file, lineno, expr);
}

function parse(str) {
  return str.match(/assert\((.*)\)/)[1];
}

assert('wahoo');

var user = { authenticated: false };
assert(user.authenticated);

user.authenticated = true;
assert(user.authenticated);

user.authenticated = 0;
assert(user.authenticated);

