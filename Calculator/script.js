const display =document.getElementById('display');

function appendNumber(number){
    display.value += number;
}

function appendOperator(operator){
    display.value += operator;
}

function percentageOperator(){
    display.value = display
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
    display.value = eval(display.value);
    }catch{
        display.value = 'Error';
    }
}

function deleteLast(){
    display.value = display.value.slice(0, -1)
}
