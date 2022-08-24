function primeDividers(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
}
  
const n = prompt("Enter a number to get it's prime divider: ");
document.querySelector('.num-result').innerHTML = "n => " + primeDividers(n).join(', ');

function validateBrackets(str)
{
    let stack = [];
 
    for(let i = 0; i < str.length; i++)
    {
        let x = str[i];
 
        if (x == '(' || x == '[' || x == '{')
        {             
            stack.push(x);
            continue;
        }
 
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;

        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    return (stack.length == 0);
}
 
let str = prompt('Input string of brackets and check if it is valid:');
 
document.querySelector('.brackets-result').innerHTML = str + " - " + validateBrackets(str);