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
/*
function checkMonth()
{
    //get input from console using prompt
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
*/
/* -------------------------------UC3---------------------------------------------- */
/*
function checkLeapYear()
{
    //get input from console using prompt
    var year = prompt('Enter the year?');
    //check lenggth of year is 4 or not
    if(year.length ==4)
    {
        //convert to integer
        let n  = parseInt(year);
        //validate its leap year or not
        if (n % 400 == 0)
            return true;
        else if (n % 100 == 0)
            return false;
        else if (n % 4 == 0)
            return true;
        else
            return false;
    }
    else
    {
        //recusrsively call
        console.log("Enter the correct year");
        checkLeapYear();
    }
}
console.log(checkLeapYear()?"LeapYear":"Not Leap Year");
*/
/* ----------------------------------------Uc4------------------------------------------- */
//function to get coin flip
function getCoinFlip()
{
    return Math.floor((Math.random() * 10))%2;
    //returns either 0 or 1
}
//0 is head , 1 is tail
//console.log(getCoinFlip()==0?"Head":"Tail");

//exports.flip = getCoinFlip();
