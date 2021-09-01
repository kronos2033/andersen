// first exercise

const firstNumber = parseInt(prompt("Введите первое число"));
const secondNumber = parseInt(prompt("Введите второе число"));
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Некорректный ввод");
} else {
  const result = firstNumber.toString(secondNumber);
  console.log(result);
}

//first exercise

const firstNumber = parseInt(prompt("Введите первое число"));
const secondNumber = parseInt(prompt("Введите второе число"));
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Некорректный ввод");
} else {
  console.log(
    `Ответ:${firstNumber + secondNumber},${firstNumber / secondNumber}`
  );
}
