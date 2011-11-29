
/**
 * Return the current line number
 *
 * @return {Number}
 * @api public
 */

Object.defineProperty(global, '__line', {
  get: function(){
    return __stack[1].getLineNumber();
  }
});