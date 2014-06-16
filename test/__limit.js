
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
});

