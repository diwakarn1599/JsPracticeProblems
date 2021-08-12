"use strict";
//function to genrate 3 digit number
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
