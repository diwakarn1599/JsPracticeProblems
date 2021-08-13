//Uc1
"use strict";
//initialising the prompt
const prompt = require('prompt-sync')();
//get input from the user
var n = parseInt( prompt('Enter the power?'));
//for loop to calculae power
for(let i=0;i<=n;i++)
{
    //Math.pow 
    console.log(`2 ^ ${i} = ${Math.pow(2,i)}`);
}