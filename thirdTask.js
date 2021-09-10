Array.prototype.myFilter = function (callback, arr) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(arr, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

function createDebounceFunction(callback, wait) {
  let timeout;
  return function (...args) {
    const later = function () {
      callback.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
