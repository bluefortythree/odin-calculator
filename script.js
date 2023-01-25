add = (a,b) => a+b;
subtract = (a,b) => a-b;
multiply = (a,b) => a*b;
divide = (a,b) => a/b;

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

    const input = document.getElementById('input');
    // const buttons = document.querySelectorAll('button').forEach(e => e.addEventListener('click', () => {
    //     console.log(e.textContent);
    //     input.append(e.textContent);
    // }));

    // the three dots is called spread operator which converts the nodelist into an array

    let numberClicked = 0;
    let string = '';

    [...document.getElementsByClassName('number')].forEach(e => e.addEventListener('click', () => {
        if(numberClicked<9) {
            input.append(e.textContent);
            string += e.textContent;
            console.log(string);
            }
            numberClicked++
        }
    ));
    
    
    const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        input.innerText = '';
        string = '';
        numberClicked = 0;
    })

