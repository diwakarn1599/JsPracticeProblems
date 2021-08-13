//Uc1
"use strict";
//initialising the prompt
const prompt = require('prompt-sync')();
//get input from the user
var n = parseInt( prompt('Enter the power?'));
let i=0;
var power;
//do -while loop to find power of 2 till given value or till 256
do{
    power=Math.pow(2,i);
    console.log(`2 ^ ${i} = ${power}`);
    i++;
} while(i<=n && power<=128)
//given 128 because do while runs 1 more time 