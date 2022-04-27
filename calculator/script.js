let input = document.querySelector(".input");
let expression = document.querySelector(".expression");
let buttons = document.querySelector(".buttons").children;
console.log(typeof input)

const operators = ["/","*","-","+"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];

let expr = "";
let lhs = null;
let rhs = null;
let operator = null;
let result = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', event => {
        if (numbers.includes(button.textContent) && input.textContent.length < 25){
            input.textContent += button.textContent;
            rhs = input.textContent;
        }
        else if (operators.includes(button.textContent)){
            expression.textContent += input.textContent + button.textContent;

            if (numOp(expression.textContent) > 1){
                if (input.textContent != ""){
                    result = operate(operator, lhs, rhs);
                    expression.textContent = result + button.textContent;
                    lhs = result;
                }
            }
            else{
                lhs = expression.textContent.slice(0,-1);
            }

            input.textContent = "";
            operator = button.textContent;
        }
        else if (button.textContent == "="){
            if (input.textContent != ""){
                result = operate(operator, lhs, rhs);
                input.textContent = result;
                expression.textContent = "";
            }
        }     
        else if (button.textContent == "CLEAR"){
            result = 0;
            expr = "";
            lhs = null;
            rhs = null;
            operator = null;
            expression.textContent = "";
            input.textContent = "";
        }
        else if (button.textContent == "DELETE"){
            input.textContent = input.textContent.slice(0,-1);
        }
        else if (button.textContent == "."){
            if(numDot(input.textContent) < 1)
                input.textContent += ".";
            console.log(numDot(input.textContent));
        }
    });
});

function numDot(str)
{
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == '.')
            count++;
    }
    return count;
}

function numOp(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == '+' || str[i] == '-' || str[i] == '/' || str[i] == '*'){
            count++;
        }
    }
    return count;
}

function replaceLastChar(str, ch){
    let replaced = str.slice(0,-1) + ch;
    return replaced;
}

function add(lhs, rhs){
    return lhs + rhs;
}

function substract(lhs, rhs){
    return lhs - rhs;
}

function multiply(lhs, rhs){
    return lhs * rhs;
}

function divide(lhs, rhs){
    return lhs / rhs;
}

function operate(operator, lhs, rhs){
    lhs = Number(lhs);
    rhs = Number(rhs);
    switch(operator){
        case "+": return add(lhs, rhs);
        case "-": return substract(lhs, rhs);
        case "*": return multiply(lhs, rhs);
        case "/": return divide(lhs, rhs);
        default: alert("Invalid operator");
    }
}

