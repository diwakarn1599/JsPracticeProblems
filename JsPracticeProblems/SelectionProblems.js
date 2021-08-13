"use strict";
const prompt = require('prompt-sync')();
//function to genrate 3 digit number
/*
function getThreeDigitRandomNumber()
{
    return Math.floor((Math.random() * 900)+ 100);
}
let i=0;
let min=0,max=0,num;
num = getThreeDigitRandomNumber();
console.log(`The generated num is ${num}`);
//setting min and max as first number
min=num;
max=num;
while(i<4)
{
    //calling function
    num = getThreeDigitRandomNumber();
    console.log(`The generated num is ${num}`);
    //checking whether num is greater than max
    if(num>max)
        max=num;
    //checking whether num is less than min
    if(num<min)
        min=num;
    i++;
    
}
//printing value
console.log(`Max = ${max} \nMin = ${min}`);
*/
//----------------------------------------------UC 2 -------------------------------------------------------
function checkMonth()
{
    var day = parseInt( prompt('Enter the day?'));
    var month = parseInt(prompt('Enter the month in number?'));
        switch(month)
        {
            case 3:
                if(day>=20 && day<=31)
                {
                    return true;
                }
                return false;
            case 4:
                if(day>=1 && day<=30)
                {
                    return true;
                }
                return false;
            case 5:
                if(day>=1 && day<=31)
                {
                    return true;
                }
                return false;
            case 6:
                if(day>=1 && day<=20)
                {
                    return true;
                }
                return false;
            default:
                return false;

        }
}

console.log(checkMonth()?"Valid":"Invalid");


