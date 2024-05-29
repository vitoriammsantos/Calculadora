function clearDisplay() {
    document.getElementById('display').innerText = '0';
}
//essa funçao e o valor que vai aparecer ao clicar o botao
function aparecer(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function resultado() {
    const display = document.getElementById('display');
    try {
        let result = eval(display.innerText);
        if (Number.isFinite(result)) {
            display.innerText = result.toFixed(5);
        } else {
            display.innerText = 'Error';
        }
    } catch {
        display.innerText = 'Error';
    }
}
