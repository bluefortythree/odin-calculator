add = (a,b) => a+b;
subtract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

// console.log(add(4,5));
// console.log(subtract(4,5));
// console.log(multiply(4,5));
// console.log(divide(4,5));

function operate(operator, a, b) {
    if(operator === add) {
        console.log(add(a,b));
    } else if(operator === subtract) {
        console.log(subtract(a,b));
    } else if(operator === multiply) {
        console.log(multiply(a,b));
    } else if(operator === divide) {
        console.log(divide(a,b));
    } else {
        console.log("ERROR");
    }
    }


operate(divide, 10, 15);