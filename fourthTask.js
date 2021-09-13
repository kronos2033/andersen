function concatStrings(string, sep) {
  const validation = (v) => typeof v === 'string';
  let result = string;
  let exit = false;
  let separator = validation(sep) ? sep : '';
  function curryingString(string) {
    if (validation(string)) {
      result += !exit ? separator + string : '';
    } else {
      exit = true;
      return result;
    }
    return curryingString;
  }
  return curryingString;
}

class Calculator {
  constructor(numberOne, numberTwo) {
    if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
      throw new Error('Необходипо передать два числа');
    }
    this.first = numberOne;
    this.second = numberTwo;
  }

  setX = (num) => {
    if (typeof num !== 'number') {
      throw new Error('Новое значение должно быть числом');
    } else {
      this.first = num;
    }
  };

  setY = (num) => {
    if (typeof num !== 'number') {
      throw new Error('Новое значение должно быть числом');
    } else {
      this.second = num;
    }
  };

  logSum = () => {
    console.log(this.first + this.second);
  };

  logMul = () => {
    console.log(this.first * this.second);
  };

  logSub = () => {
    console.log(this.first - this.second);
  };

  logDiv = () => {
    if (this.second === 0) {
      throw new Error('На 0 делить нельзя');
    } else {
      console.log(this.first / this.second);
    }
  };
}
