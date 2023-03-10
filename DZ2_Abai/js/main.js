// Задача 1.

var mass = [10, 20, 30, 50, 235, 3000]

for (var i = 0;i < mass.length; i++) {
    var number = mass[i];
    var firstDigit = String(number)[0];
    if (firstDigit === '1')  {
        console.log(number);
    }else if (firstDigit === '2') {
        console.log(number);
    }else if (firstDigit === '5') {
        console.log(number);
    }
}
console.log(' ');
// Задача 2.

for (var i = 20; i >= 0; i--) {
    console.log(i);
}

// Задача 3.

 var arg = prompt('Здравствуйте введите цвет светофора!')

switch (arg) {
    case 'красный': 
        alert('стоп');
        break
    case 'жёлтый':
        alert('ждём');
        break
    case 'зелёный':
        alert('можно ехать');
        break
    default:
        alert('Введите только три цвета светофора!')      
}