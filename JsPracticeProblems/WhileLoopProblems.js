//Uc1
"use strict";
//initialising the prompt
const prompt = require('prompt-sync')();
/**
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
 */
//-----------------------------------Uc2--------------------------
var first = 0,last=100;
var found = false;
//function to find magic number
let checkValue = (mid) =>
{
    console.log(`PRESS\n1.If your number is ${mid}\n2.If your number is less than ${mid}\n3.If your number is greater than ${mid}`);
    switch (parseInt( prompt('Enter the choice?')))
        {
            case 1:
                console.log(`Your number is ${mid}`);
                found = true;
                break;
            case 2:
                last = mid - 1;
                break;
            case 3:
                first = mid + 1;
                break;
        }
}
console.log(`Think a number between ${first} - ${last} `);
//get input from user
var num = parseInt( prompt('Enter the number?'));
while (first != last && found == false)
{
    //finding the mid value
    var mid = Math.floor((first + last) / 2);
    //call the function
    checkValue(mid);
}
if (first == last)
{
    //if first == last number is reached
    console.log(`Your number is ${first}`);
    
}

