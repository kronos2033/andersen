const makeObjectDeepCopy = (obj) => {
  const copyObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      copyObj[key] = obj[key];
    } else {
      copyObj[key] = makeObjectDeepCopy(obj[key]);
    }
  }
  return copyObj;
};

// _________________________________________________________________________________

const selectFromInterval = (arr, startInterval, endInterval) => {
  const validInterval =
    typeof startInterval === "number" && typeof endInterval === "number";
  const validArray =
    Array.isArray(arr) && arr.every((el) => typeof el === "number");
  if (!validInterval || !validArray) {
    throw new Error("Ошибка!");
  }
  let slicedArr =
    startInterval < endInterval
      ? arr.slice(startInterval, endInterval - 1)
      : arr.slice(endInterval - 1, startInterval);

  return slicedArr;
};

// _________________________________________________________________________________

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]: function () {
    if (
      this.from > this.to ||
      typeof this.from !== "number" ||
      typeof this.to !== "number"
    ) {
      throw new Error("Ошибка!");
    }
    return {
      from: this.from,
      to: this.to,
      next() {
        while (this.from <= this.to) {
          return { done: false, value: this.from++ };
        }
        return { done: true };
      },
    };
  },
};

for (let item of myIterable) {
  console.log(item);
}
