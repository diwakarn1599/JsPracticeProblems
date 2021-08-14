"use strict";
const prompt = require('prompt-sync')();
//-=----------------------------------Uc1--------------------------------------------
//fahrenheit to celsius conversion
let fahrenheitToCelsius = (val) =>
{
    return ((val - 32) * 5) / 9;
}
// celsius to fahrenheit conversion
let celsiusToFahrenheit = (val) =>
{
    return (val * 9) / 5 + 32;
}
let ConvertTemperatures = () => 
{
    console.log("Enter 1 for Fahrenheit To Celsius(degC) \nEnter 2 for Celsius To Fahrenheit(degF)");
    switch(parseInt(prompt("Enter the choice \n")))
    {
        case 1:
            let f = prompt("Enter the fahrenheit value");
            if(f>=32 && f<=212)
                console.log(`${f} fahrenheit = ${fahrenheitToCelsius(f)} celcius`);
            else
                console.log("Value is not Between the freezing and boiling point!!!");
            break;
        case 2:
            let c = prompt("Enter the Celsius  value");
            if(c>=0 && c<=100)
                console.log(`${c} celcius = ${celsiusToFahrenheit(c)} fahrenheit`);
            else
                console.log("Value is not Between the freezing and boiling point!!!");
            break;
        default:
            break;
    }
}
//ConvertTemperatures();
//----------------------------------------UC2-------------------------------------------
//function to check whether the number palindrome or not
let checkPalindrome = (n) =>
{
        var r, temp, rev=0;
		//var n = parseInt(prompt("Enter the number\n"));

		temp = n;
		while(n>0)
		{
			r = n%10;
            		rev= rev*10+r;
			n = parseInt(n/10);
		}
		if(rev==temp)
		    return (`${temp} is palindrome`);
		else
		    return (`${temp} is not a palindrome`);
		
}
//checkPalindrome();
//---------------------------------UC3-------------------------------------------------------
let number  = parseInt(prompt("Enter the number\n"));
//function to check whether number is prime or not
let checkPrime = (num) =>
{
    let flag=0;
    if(num==2)
        console.log(`${num} is prime number and ${checkPalindrome(num)}`);
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
            console.log(`${num} is prime number and ${checkPalindrome(num)}`);;
        
}
checkPrime(number);
