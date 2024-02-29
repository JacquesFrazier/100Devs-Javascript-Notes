//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtract(n, m){
    alert(n - m);
} 

//create a function that divides three numbers and console logs the quotient

function divides(n, m, f){
    console.log(n / m / f)
}

//create a function that multiplys three numbers and returns the product

function multiplys(j, k, l){
    return j * k * l
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNum(f, g, h){
   return (f + g) % h
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and console log the value. 
//If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
//If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNum(d, v, b, n){

    let product = n1 * n2
    if(product > 100){
        console.log(product + n3 + n4)
    }else if(product < 100){
        console.log(product - n3 - n4)
    }else{
        alert( (n1*n2*n3) % n4 )
    }
}
