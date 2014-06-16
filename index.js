
module.exports = function(limit){
  var origLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = ~~limit;
  var orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function(_, stack){ return stack; };
  var err = new Error;
  Error.captureStackTrace(err, arguments.callee);
  var stack = err.stack;
  Error.prepareStackTrace = orig;
  Error.stackTraceLimit = origLimit;
  return stack;
};
