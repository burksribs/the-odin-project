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
let oldOp = operator;


Array.from(buttons).forEach((button) => {
    button.addEventListener('click', event => {
        if (numbers.includes(button.textContent)){
            input.textContent += button.textContent;
        }
        else if (operators.includes(button.textContent))        {
            if (operators.includes(input.textContent.slice(-1))){
                {
                    input.textContent = replaceLastChar(input.textContent, button.textContent);
                    oldOp
                }
                
            }
            else
                input.textContent += button.textContent;
            operator = button.textContent;
        }
        else if (button.textContent == "="){

        }     
            
        
            
    });
});

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

