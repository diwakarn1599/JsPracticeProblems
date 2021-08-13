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
