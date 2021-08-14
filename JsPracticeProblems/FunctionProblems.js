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