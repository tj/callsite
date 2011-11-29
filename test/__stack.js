
/**
 * Module dependencies.
 */

require('../');

describe('__stack', function(){
  it('should return an array of CallSites', function(){
    foo();

    function foo() {
      bar();
    }

    function bar() {
      baz();
    }

    function baz() {
      __stack[0].fun.should.equal(baz);
      __stack[1].fun.should.equal(bar);
      __stack[2].fun.should.equal(foo);
    }
  })

  it('should restore stack preparation', function(){
    __stack;
    new Error().stack.should.be.a('string');
  })
})