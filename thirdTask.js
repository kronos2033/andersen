Array.prototype.myFilter = function (callback, arr) {
  let context;
  arr ? (context = arr) : (context = this);
  let result = [];
  for (let i = 0; i < context.length; i++) {
    if (callback.call(context, context[i], i, context)) {
      result.push(context[i]);
    }
  }
  return result;
};

const createDebounceFunction = (callback, timeout) => {
  let customTimeout;
  return () => {
    clearTimeout(customTimeout);
    customTimeout = setTimeout(callback, timeout);
  };
};
