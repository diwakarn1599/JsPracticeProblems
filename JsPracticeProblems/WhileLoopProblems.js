//Uc1
"use strict";
//initialising the prompt
const prompt = require('prompt-sync')();
//var coinFlip = require('./SelectionProblems');
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
/*
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
*/
//--------------------------------------------UC3---------------------------------------
/*
var head=0,tail=0;
var flipCoin;
// var getFlip = () =>
// {
//     var res=coinFlip.flip;
//     return res;
// }
while(head<11 && tail<11)
{
    flipCoin = Math.floor(Math.random()*10)%2;//return either 0 or 1
    if(flipCoin==0)
    {
        console.log("Head")
        head++;    
    }
    else
    {
        console.log("Tail")
        tail++;
    }
}
console.log(`Headcount:${head}\tTailcount:${tail}`);
console.log(head==11?'Winner is Head':'Winner is Tail');
*/
//----------------------------------------------------UC4--------------------------------
//initalizing user amount
let Amount=100;
let bet=0,win=0;
while(userAmount<200 && userAmount>0)
{
    let res=Math.floor(Math.random()* 10)%2;//get 0 or 1 ,indicating 1 for win and 0 for loss
    if(res==1)
    {
        Amount++;
        win++;
    }
    else
        Amount--;
    //get number of bets
    bet++;
}
console.log(`User amount =${Amount}\nNumber of Wins ${win}\nTotal Bets made ${bet}`);

console.log(userAmount==200?"User won the Match":"User lost the Match");
