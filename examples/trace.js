
require('../');

foo();

function foo() {
  bar();
}

function bar() {
  baz();
}

function baz() {
  console.log();
  __stack.forEach(function(call){
    console.log('  \033[36m%s\033[90m in %s:%d\033[0m'
      , call.getFunctionName() || 'anonymous'
      , call.getFileName()
      , call.getLineNumber());
  });
  console.log();
}