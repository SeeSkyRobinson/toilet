var bowl = document.querySelector('.bowl')


bowl.addEventListener('click', poop)


function poop() {
    bowl.style.backgroundColor = 'rgb(124, 99, 44)'
}

var flushBtn = document.querySelector('.flush-btn')

flushBtn.addEventListener('click', flush)

function flush() {
    bowl.style.backgroundColor = 'mintcream'
}