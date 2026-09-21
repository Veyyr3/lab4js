let counter = document.getElementById('counter_info');

let number = 0;

function next() {
    number += 1
    counter.innerText = `${number}`
    check()
}

function reset() {
    number = 0
    counter.innerText = `${number}`
    check()
}

function back() {
    number -= 1
    counter.innerText = `${number}` 
    check()
}

function check(){
    if (number == 0) {
        counter.style.color = "gray"
    } else if (number > 0) {
        counter.style.color = "green"
    } else if (number < 0) {
        counter.style.color = "red"
    }
}