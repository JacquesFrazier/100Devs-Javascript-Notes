//--- Easy
//create a variable and assign it a number
let varA = 23;

//minus 10 from that number
varA -= 10;

//print that number to the console
console.log(varA);

//--- Medium
//create a variable that holds a value from the input
let varB = Number(document.querySelector('input').value);
//wrap varB in Number to make sure we actually have number;

//add 25 to that number
varB += 25;

//alert that number
alert(varB);

//--- Hard
//create a variable that holds the h1
const varC = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
varC.addEventListener('click', sum );
function sum(){
    console.log(varA + varB);
}


