"use strict";
//Uc1
//genrate random value b/w 0-9
let randomValue = Math.floor(Math.random() *10); 
//console.log(randomValue);

//Uc2
//dice roll b/w 1-6
let diceRoll;
diceRoll = (Math.floor(Math.random() *10)%6)+1;
//console.log(diceRoll);

//Uc3
let count =0,sum=0;
while(count<2)
{
    diceRoll = (Math.floor(Math.random() *10)%6)+1;
    //appending all dicerolls to sum
    sum +=diceRoll;
    count++;
}
//console.log(`Sum of two dicerolls is ${sum}`);

//Uc4
//intialising variables
let twoDigNum;
count=0;
sum=0;
while(count<5)
{
    twoDigNum = Math.floor(Math.random() *100);
    console.log(`Number = ${twoDigNum}`);
    //addinng random digits
    sum +=twoDigNum;
    count++;
}
console.log(`Sum of 5 two digits number is = ${sum}`);
console.log(`Average of the sum of the 5 two digits number is = ${sum/5}`);