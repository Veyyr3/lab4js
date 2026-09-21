const counter = document.getElementById('counter_info');

let number = 0;

function next() {
    number += 1
    counter.innerText = `${number}`
}

function reset() {
    number = 0
    counter.innerText = `${number}`
}

function back() {
    number -= 1
    counter.innerText = `${number}`
}