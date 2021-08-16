"use strict";
const prompt = require('prompt-sync')();
//------------------------------------------------------Uc1---------------------------------------------------
//1-A
let getDiceRoll = () => Math.floor(Math.random()*6)+1;

let diceRollFunctions = () =>
{
    console.log("Uc1");
    let limit=10,count=0;
    //map to store diceroll and count
    let diceMap = new Map();
    while(count<limit)
    {
        let diceRoll = getDiceRoll();
        let c=1;
        //check whether map already has the element
        if(diceMap.has(diceRoll))
            c = diceMap.get(diceRoll)+1
        //set the map with diceroll and count of occurance
        diceMap.set(diceRoll,c);
        if(c>count)
            count=c;
    }
    console.log(diceMap);
    //initialising max and min, keys
    let max=0,min=11,maxKey,minkey;
    for(let [key,value] of diceMap)
    {
        if(value>max)
        {
            max=value;
            maxKey = key;
        }
        if(value<min)
        {
            min=value;
            minkey=key;
        }
    }
    console.log(`MaxKey = ${maxKey} Min Key = ${minkey}`);
}
diceRollFunctions();
//-------------------------------------------------------------Uc2----------------------------------------------------------------
//function to genrate random b/w 1-12 i.e get month
let getBirthmonthNumber = () => Math.floor(Math.random()*12)+1;
let getBdayMonth = () =>
{
    console.log("Uc2");
    //map to store month and individuals having bday on that month
    let bDayMap = new Map();
    for(let i=0;i<50;i++)
    {
        let month = getBirthmonthNumber();
        let personsHavingSameBdayMonth = '';
        //check whether it already has values
        if(bDayMap.has(month))
            personsHavingSameBdayMonth = bDayMap.get(month);
        //appending old value with new one
        personsHavingSameBdayMonth = personsHavingSameBdayMonth + (`${i},`);
        //seeting it to dictionary
        bDayMap.set(month,personsHavingSameBdayMonth);
    }
    console.log(bDayMap);
}
getBdayMonth();