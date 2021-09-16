class stackElement {
  constructor(current, prev) {
    this.current = current;
    this.prev = prev;
  }
}

class Stack {
  constructor(maxLength = 10) {
    this.maxLength = maxLength;
    this.last = null;
    this.stackLength = 0;
    if (typeof maxLength !== 'number') {
      throw new Error('Передано неверное значение');
    }
  }
  push(element) {
    if (this.stackLength >= this.maxLength) {
      throw new Error('Стэк переполнен');
    }
    this.last = new stackElement(element, this.last);
    this.stackLength += 1;
  }

  pop() {
    if (!this.last) {
      throw new Error('Стэк пуст');
    }
    let result;
    result = this.last.current;
    this.last = this.last.prev;
    this.stackLength -= 1;
  }

  peek() {
    if (!this.last) {
      return null;
    }
    return this.last.current;
  }

  isEmpty() {
    return !this.stack;
  }

  toArray() {
    let arr = [];
    let copylast = this.last;
    let element;
    while (copylast) {
      element = copylast.current;
      copylast = copylast.prev;
      arr = [element, ...arr];
    }
    return arr;
  }

  static fromIterable(element) {
    if (!element[Symbol.iterator]) {
      throw new Error('Не итерируемая сущность');
    }
    let arr = [...element];
    let stackFromIterable = new Stack(arr.length);
    arr.forEach((item) => {
      stackFromIterable.push(item);
    });
    return stackFromIterable;
  }
}

module.exports = { Stack };
