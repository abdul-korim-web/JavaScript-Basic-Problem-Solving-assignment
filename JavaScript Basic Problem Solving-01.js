"use strict";
// 1/ Create a variable called carName, assign the value Volvo to it.
let carName = `Volvo`;
console.log(carName);
// 2 / On one single line, declare three variables with the following names and values:
let persion2 = {
    firstName : `John`,
    lastName : `Doe`,
    fullName : function (){
        return this.firstName + ` ` + this.lastName
    },
    age : 35 
}
console.log(`My name is ${persion2.fullName()} . And my age is ${persion2.age} `);
// 3 / Use the correct assignment operator that will result in x being 50 (same as x = x * y).
function assignment(x,y){
    x= x*y
    console.log(x);
};
assignment(10,5)
// 4 / Use comments to describe the correct data type of the following variables:
let length = 16; //number
console.log(typeof length); //number
let lastName  =`Johnson`; //string
console.log(typeof lastName);//string
const x= {
    firstName : `John`,
    lastName : `Doe`,
}; //object
console.log(typeof x); //object
// 5 / Execute the function named myFunction.
function myFunction(x,y){
    x = x+y;
    console.log(x);
};
myFunction(410,2520);
// 6 / Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
const person = {
    name : `John`,
    age : 50,
}
alert(`${person.name} is ${person.age}`); 
// 7 / The <button> element should do something when someone clicks on it. Try to fix it!
function clickMe(){
    let message = document.getElementById(`pTag`);
    message.innerHTML= "Someone Clicked me!"
}

// 8 / Array Related Question 
const cars = [`Volvo`, `Jeep`, `Mercedes`];
console.log(cars.length);
// change this fast item 
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = `Ford`;
console.log(Brand);
// 9 / Math Related Problems
// Use the correct Math method to create a random number.
let math1= Math.random();
console.log(math1);
// Use the correct Math method to return the largest number of 10 and 20.
let math2= Math.max(10,20);
console.log(math2);
// Use the correct Math method to get the square root of 9.
 console.log(Math.sqrt(9));

 // 10 / comparison operator related problems! 
 // Choose the correct comparison operator to alert true, when x is greater than y.
 function comparisonMessage(){
    let x = 10;
    let y = 5;
    let comparisonMessage = x>y ? `Yea ! it is true . x is greater than y`: `noo! it is false . x is not greater than y`;
    alert(comparisonMessage);
 }
 comparisonMessage()
 //  Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
 function conditional(){
   let age = document.getElementById(`ageNumber`).value;
   let ageMessage = age<18 ? alert(`Too young`) : alert(`Old enough`); 
 }