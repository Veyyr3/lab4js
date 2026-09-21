// 1 задание: счетчик

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

// 2 задание: лото
let loto = document.getElementById('loto');

// функция для генерации случайного числа
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6 числе
let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0
let n5 = 0
let n6 = 0

// функция для генерации 6 чисел
function generate() {
    let n1 = String(getRandomInt(1, 99)).padStart(2, '0')
    let n2 = String(getRandomInt(1, 99)).padStart(2, '0')
    let n3 = String(getRandomInt(1, 99)).padStart(2, '0')
    let n4 = String(getRandomInt(1, 99)).padStart(2, '0')
    let n5 = String(getRandomInt(1, 99)).padStart(2, '0')
    let n6 = String(getRandomInt(1, 99)).padStart(2, '0')

    // все 6 чисел через пробел в один текст
    loto.innerHTML = `
    <div style="display: inline-flex; align-items: center; justify-content: center; height: 50px; margin: 5px; gap: 10px;">
        <div style="padding: 20px; border-radius: 50%; border: 1px solid #ccc; background-color: blue;">${n1}</div> 
        <div style="padding: 20px; border-radius: 50%; border: 1px solid #ccc; background-color: blue;">${n2}</div> 
        <div style="padding: 20px; border-radius: 50%; border: 1px solid #ccc; background-color: blue;">${n3}</div> 
        <div style="padding: 20px; border-radius: 50%; border: 1px solid #ccc; background-color: blue;">${n4}</div> 
        <div style="padding: 20px; border-radius: 50%; border: 1px solid #ccc; background-color: blue;">${n5}</div>
        <div style="padding: 20px; border-radius: 50%; border: 1px solid #ccc; background-color: blue;">${n6}</div>
    </div>
    `
}