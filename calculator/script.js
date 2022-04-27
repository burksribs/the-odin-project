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
    switch(operator){
        case "+": return add(lhs, rhs);
        case "-": return substract(lhs, rhs);
        case "*": return multiply(lhs, rhs);
        case "/": return divide(lhs, rhs);
        default: alert("Invalid operator");
    }
}