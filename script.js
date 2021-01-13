function appendTable(result) {
    let multBox = document.createElement('h2')
    multBox.style.margin = '5px';
    let textResult = document.createTextNode(result);     
    multBox.appendChild(textResult);                                

    let calContainer = document.querySelector('.calculateContainer');
    calContainer.appendChild(multBox);
}

function clear() {
    let textboxNumber = document.getElementById('TextboxNumber')
    textboxNumber.value = '';

    clearTable()
}

function clearTable() {
    let calContainer = document.querySelector('.calculateContainer');
    calContainer.innerHTML = '';
}

function calculate(event) {
    let textboxNumber = document.getElementById('TextboxNumber')
    let number = textboxNumber.value

    if (number && number >= 0) {
        clearTable()
        for (let index = 1; index <= 12; index++) {
            let result = number + " X " + index + " = " + (number * index)
            appendTable(result);
        }
    }
}

function run() {
    let btnCal = document.getElementById('ButtonCalculate');
    let btnClear = document.getElementById('ButtonClear');

    btnCal.addEventListener('click', calculate);
    btnClear.addEventListener('click', clear);
}

run();