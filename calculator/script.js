let input = document.querySelector(".input");
let expression = document.querySelector(".expression");
let buttons = document.querySelector(".buttons").children;
console.log(typeof input)

const operators = ["/","*","-","+"];
let expr = "";
let lhs = null;
let rhs = null;
let operator = null;
let result = 0;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', event => {
        if (button.textContent === "CLEAR"){
            expression.textContent = "";
            input.textContent = "";
            expr = "";
            lhs = null;
            rhs = null;
            operator = null;
            result = 0;
        }
        else if (button.textContent === "DELETE"){
            expr = input.textContent.slice(0,-1);
            input.textContent = expr;
        }
        else if (button.textContent === "="){
            expression.textContent = expr;
            expression.textContent = "";
            input.textContent = result;
        }
        else if (operators.includes(button.textContent))
        {
            if(!operators.includes(expr[expr.length-1]))
                expr += button.textContent;
            
            operator = button.textContent;
            input.textContent = expr;
            expression.textContent = expr;
        }
        else {
            if (!lhs)
                lhs = button.textContent;
            else
                rhs = button.textContent;
            expr += button.textContent;
            input.textContent = expr;

            if (lhs != null && rhs != null && operator != null)
            {
                result = operate(operator,lhs,rhs);
                lhs = result;
                rhs = null;
                operator = null;
                expression.textContent = result;
                input.textContent = expr;
                expr = result;
            }
        }
        console.log(expr);
            
    });
});

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

