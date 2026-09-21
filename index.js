// поле где увеличиваем или уменьшаем число
let counter = document.getElementById('counter_info');
// число-счетчик
let number = 0;

// функция для увеличения числа
function next() {
    number += 1 // увеличить число
    counter.innerText = `${number}`
    check() // проверить цвет
}

// функция для обнуления счетчика
function reset() {
    number = 0 // обнулить число
    counter.innerText = `${number}`
    check() // проверить цвет
}

// функция для уменьшения счетчика
function back() {
    number -= 1 // уменьшить число
    counter.innerText = `${number}` 
    check() // проверить цвет
}

// проверить число и выдать ему цвет
function check(){
    if (number == 0) {
        counter.style.color = "gray" // серый есль 0
    } else if (number > 0) {
        counter.style.color = "green" // зеленый если положительный
    } else if (number < 0) {
        counter.style.color = "red" // красный если меньше 0
    }
}