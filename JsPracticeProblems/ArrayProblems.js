"use strict";
const prompt = require('prompt-sync')();
//-------------------------------------------Uc1----------------------------------------------------------------
//function to generate 3 digit random number
function getThreeDigitRandomNumber()
{
    return Math.floor((Math.random() * 900)+ 100);
}
//initialising a array
let elementArray = new Array();
//function to find second largest and second smallesr
let findLargestAndSmallest = () =>
{
    let limit  = 10;
    //getting arrray elements
    for(let i=0;i<10;i++)
        elementArray[i] = getThreeDigitRandomNumber();
    console.log(elementArray.toString());
    //setting both values to min value
    let firstLargest=0,secondlargest=0;
    //settindng both values to max value
    let firstSmallest=1000,secondSmallest=1000;
    for(let i=0;i<elementArray.length;i++)
    {
        //checking array element is greater than first largest
        if(elementArray[i]>firstLargest)
        {
            //assign first largest to second largest and array element to first largest
            secondlargest = firstLargest;
            firstLargest= elementArray[i];
        }
        //to check if second largest lies b/w first largest and second largest
        else if(elementArray[i]>secondlargest && elementArray[i]!=firstLargest)
            secondlargest=elementArray[i];
    }
    for(let i=0;i<elementArray.length;i++)
    {
        //checking array element is lesser than first largest
        if(elementArray[i]<firstSmallest)
        {
            //assign first smallest to second smallest and array element to first smallest
            secondSmallest = firstSmallest;
            firstSmallest= elementArray[i];
        }
         //to check if second smallest lies b/w first smallest and second smallest
        else if(elementArray[i]<secondSmallest && elementArray[i]!=firstSmallest)
            secondSmallest=elementArray[i];
    }
    console.log("Uc1");
    console.log(secondSmallest != 1000?`Second smallest = ${secondSmallest}`:`There is no second smallest`);
    console.log(secondlargest != 0?`Second largest = ${secondlargest}`:`There is no seconnd largest`);

}
findLargestAndSmallest();
//-----------------------------------Uc2-----------------------
let findLargestAndSmallestSorting = () =>
{
    elementArray.sort();
    let len = elementArray.length;
    console.log(len>=1?`Second smallest = ${elementArray[1]}`:`Index out of range`);
    console.log(`Second largest = ${elementArray[len-2]}`);
}
console.log("Uc2- Using sorting");
findLargestAndSmallestSorting();