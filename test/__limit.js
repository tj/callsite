
/**
 * Module dependencies.
 */

var stack = require('../');

describe('__limit', function(){
  it('should return exact CallSites as configured', function(){
    foo();

    function foo() {
      bar();
    }

    function bar() {
      baz();
    }

    function baz() {
      stack(1).length.should.equal(1);
    }
  });

  it('should return default limit of CallSites if `stackTraceLimit` not passed', function(){
    foo();

    function foo() {
      bar();
    }

    function bar() {
      baz();
    }

    function baz() {
      stack().length.should.lessThan(Error.stackTraceLimit);
    }
  });
});

