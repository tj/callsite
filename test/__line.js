
/**
 * Module dependencies.
 */

require('../');

describe('__line', function(){
  it('should return the current lineno', function(){
    __line.should.equal(10);
  })
})