Array.prototype.myFilter = function (callback, arr) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(arr, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const createDebounceFunction = (callback, timeout) => {
  let customTimeout;
  return () => {
    clearTimeout(customTimeout);
    customTimeout = setTimeout(() => callback.apply(this, args), timeout);
  };
};
