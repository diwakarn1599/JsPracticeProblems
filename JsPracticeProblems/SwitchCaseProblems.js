//----------------------------------UC1--------------------------------------------

const prompt = require('prompt-sync')();
/*
const num = parseInt(prompt('Enter the number?'));
switch(num)
{
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 0:
        console.log("Zero");
        break;
    default:
        console.log("Enter the correct number");
        break;
}
*/
//-------------------------------------------------UC2--------------------------------
/*
const num = parseInt(prompt('Enter the number of day in week?'));

switch(num)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter the day");
        break;
}
*/ 
//-----------------------------------UC3------------------------------------
/** 
const num = parseInt(prompt('Enter the number?'));
switch(num)
{
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("1 Lakh");
        break;
    default:
        console.log("enter correct number");
        break;
}
*/
//------------------------------------------------------UC4--------------------------------------
console.log("1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");
switch(parseInt(prompt('Enter the Choice?')))
{
    case 1:
        let feet = parseInt(prompt('Enter the feets?'));
        console.log(` ${feet} feets = ${feet*12} inches`);
        break;
    case 2:
        let feets = parseInt(prompt('Enter the feets?'));
        console.log(` ${feets} feets = ${feets/3.281} meter`);
        break;
    case 3:
        let inch = parseInt(prompt('Enter the inches?'));
        console.log(` ${inch} inches = ${inch/12} feets`);
        break;
    case 4:
        let meter = parseInt(prompt('Enter the meter?'));
        console.log(` ${meter} meters = ${meter*3.281} feets`);
        break;
    default:
        console.log("Enter the correct value");
        break;
}