var firstNumber = Number(prompt('Введите первое число!'))
var operator = prompt('Введите действие!')
var secondNumber = Number(prompt('Введите второе число!'))

if (operator === '/', secondNumber === 0) {
    alert('на ноль делить нельзя')
}
var result;
calculeit = () => {
    switch (operator) {
        case "+":
          result = firstNumber + secondNumber;
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
        case "/":
          result = firstNumber / secondNumber;
          break; 
      }
      alert(result);
}
