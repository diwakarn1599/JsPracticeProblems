//Uc1
"use strict";
//initialising the prompt
const prompt = require('prompt-sync')();
/** 
//get input from the user
var n = parseInt( prompt('Enter the power?'));
//for loop to calculae power
for(let i=0;i<=n;i++)
{
    //Math.pow 
    console.log(`2 ^ ${i} = ${Math.pow(2,i)}`);
}
*/
//---------------------------------------------------UC2----------------------------------------------------
/** 
let n = parseInt(prompt('Enter the value of n?'));
if(n!=0)
{
        let harmonicNum =1;
        for (let i = 2; i <= n; i++)
        {
            harmonicNum += 1 / i;
        }
        console.log(`The nth harmonic value is ${harmonicNum}`);
}
else
{
    console.log('The value should not be zero');
}
*/
//------------------------------------------------UC3---------------------------------------------------------
//let n = parseInt(prompt('Enter the value of n?'));
//function to check whether number is prime or not

let checkPrime = (num) =>
{
    let flag=0;
    if(num==2)
        return true;
    else if (num % 2 == 0)
        return false;
    else
        for(let i=3;i*i<=num;i++)
            if(num%i==0)
            {
                flag=1;
                break;
            }
        if(flag==1)
            return false;
        else
            return true;
        
}

//console.log(checkPrime(n)?`${n} is Prime number`:`${n} is not a prime number`);
//--------------------------------------------------------Uc4------------------------------------------------------
/*
//start range
let startRange = parseInt(prompt('Enter the start range?'));
//end range
let endRange = parseInt(prompt('Enter the end range?'));
//loop to find the primenumbers within range
for(let i=startRange;i<=endRange;i++)
    console.log(checkPrime(i)?`${i} is Prime number`:`${i} is not a prime number`);
*/
//-------------------------------------------------------Uc5--------------------------------------------------------
/*
let n = parseInt(prompt('Enter the value of n?'));
if(n>=0)
{
    let fact=1;
    //loop to find factorial of given number
    for(let i=1;i<=n;i++)
        fact *= i;
    console.log(`Factorial of ${n} is ${fact}`);
}
else
    console.log('Value of n should not be negative');
*/
//-------------------------------------------------------Uc6-----------------------------------------------------------
let n = parseInt(prompt('Enter the value of n?'));
let num = n;
//loop to find prime factors
for(let i=1;i<=n;i++)
    if(num%i==0)
        console.log(checkPrime(i)?`${i} is Prime factor`:``);

