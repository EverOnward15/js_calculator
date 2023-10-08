function add(a, b) {
    return parseFloat(a) + parseFloat(b)
 }
 function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
 }
 function multiply(a, b) {
    return parseFloat(a) * parseFloat(b)
 
 }
 function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
 }
 
 function operate(operator, num1, num2) {
    switch (operator) {
       case '+':
          firstValue = add(+num1, +num2)
          display.innerText = firstValue
          break;
       case '-':
          firstValue = subtract(+num1, +num2)
          display.innerText = firstValue
          break;
       case '*':
          firstValue = multiply(+num1, +num2)
          display.innerText = firstValue
          break;
       case '/':
          if (secondValue === '0') {
             display.innerText = "This is an ILLEGAL OPERATION!"
             firstValue = ""
             secondValue = ""
             sign = ""
             return
          }
          firstValue = divide(+num1, +num2)
          display.innerText = firstValue
          break;
    }
 }
 let firstValue = ""
 let secondValue = ""
 let sign = ""
 let decimalCounter = 0;

 let math = document.querySelector('.math-btns')
 let display = document.querySelector('.display')
 let digits = document.querySelector('.digit-btns')
 
 digits.addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
       return
    }
    if (display.innerText === '0') {
       display.innerText = ""
    }
    if (secondValue == "" && sign == "") {
       firstValue += e.target.value
       display.innerText = firstValue
    }
    else {
       secondValue += e.target.value
       display.innerText = secondValue
    }
    if (display.innerText.includes('.')) {
       decimal.disabled = true;
       decimalCounter = 1;
    };

    if(e.target.id === "delete") {
        if (display.innerText.length === 1 && firstValue){
            display.innerText = "0";
            firstValue = 0; 
        }
        else if (display.innerText.lenth === 1 && secondValue )
        {
            display.innerText = "0";
            secondValue = 0; 
        }
        display.innerText = display.innerText.slice(0, -1); 
        if(firstValue)
        firstValue = firstValue.slice(0, -1);
        else
        secondValue = secondValue.slice(0, -1);
    }
    console.log(firstValue, sign, secondValue)
    return
 })

 const makeMathOperation = (e) => {
    if (secondValue != "" && sign != "") {
       operate(sign, firstValue, secondValue)
       secondValue = ""
    }
    decimal.disabled = false;
    decimalCounter = 0;
    if (e.target.value !== undefined)
    { 
       sign = e.target.value;
    }
    else
    {
    sign = e.key;
    }
 }
 
 math.addEventListener('click', (e) => {
    switch (e.target.id) {
       case 'clear':
          firstValue = "";
          secondValue = "";
          sign = "";
          display.innerHTML = 0;
          decimal.disabled = false;
          decimalCounter = 0;
          break
       case 'add':
          makeMathOperation(e)
          break
       case 'sub':
          makeMathOperation(e)
          break
       case 'mult':
          makeMathOperation(e)
          break
       case 'divide':
          makeMathOperation(e)
          break
       case 'equal':
          if (secondValue == "") {
             decimal.disabled = false;
             decimalCounter = 0;
             secondValue = firstValue
          }
          operate(sign, firstValue, secondValue)
          secondValue = "";
          sign = "";
          decimal.disabled = false;
          decimalCounter = 0;
          console.log(firstValue, sign, secondValue)
          break
    }
 }
 )

//  Keyboard support -- 




document.addEventListener('keydown', (e) => {
   if (e.key == '0' || e.key == '1' 
    || e.key == '2' || e.key == '3' 
    || e.key == '4' || e.key == '5' 
    || e.key == '6' || e.key == '7' 
    || e.key == '8' || e.key == '9' )
    {
        if (display.innerText === '0') {
        display.innerText = ""
        }
        if (secondValue == "" && sign == "") {
        firstValue += e.key
        display.innerText = firstValue
        }
        else {
        secondValue += e.key
        display.innerText = secondValue
        }
        if (display.innerText.includes('.')) {
        decimal.disabled = true;
        decimalCounter = 1;
        };
        console.log(firstValue, sign, secondValue)
        return
    }  
 })
 document.addEventListener('keydown', (e) => {
    if( e.key == "+" || e.key == "-" 
    || e.key == "*" || e.key == "/" 
    || e.key == "c" || e.key == "=")
        {
            switch (e.key) {
            case ( "c"):
                firstValue = "";
                secondValue = "";
                sign = "";
                display.innerHTML = 0;
                decimal.disabled = false;
                decimalCounter = 0;
                break
            case ( "+"):
                makeMathOperation(e)
                break
            case ( "-"):
                makeMathOperation(e)
                break
            case ( "*"):
                makeMathOperation(e)
                break
            case ( "/"):
                makeMathOperation(e)
                break
            case ( "="):
                if (secondValue == "") {
                    decimal.disabled = false;
                    decimalCounter = 0;
                    secondValue = firstValue
                 }
                 operate(sign, firstValue, secondValue);
 
                 secondValue = "";
                 sign = "";
                 decimal.disabled = false;
                 decimalCounter = 0;
                 console.log(firstValue, sign, secondValue)
                 break
           }
        }
 }
 )


 document.addEventListener('keydown', (e) => {
    if (decimalCounter == 0 && e.key == ".")
     {
         if (display.innerText === '0') {
         display.innerText = ""
         }
         if (secondValue == "" && sign == "") {
         firstValue += e.key
         display.innerText = firstValue
         }
         else {
         secondValue += e.key
         display.innerText = secondValue
         }
         if (display.innerText.includes('.')) {
         decimal.disabled = true;
         decimalCounter = 1;
         };
         console.log(firstValue, sign, secondValue)
         return
     }  
  })