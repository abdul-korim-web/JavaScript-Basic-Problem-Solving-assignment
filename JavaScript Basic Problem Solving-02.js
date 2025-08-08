"use strict"
// 1/ Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
function celsiusToFahrenheit(celsius){
    return (celsius *9/5)+32;

};
console.log(celsiusToFahrenheit(0)); //32
console.log(celsiusToFahrenheit(100));//212
// 2 / Write a function to check if a number is even. The function should take a single argument, which is the number to check. 
function isEven(envenChackNumber){
    let envenChack = envenChackNumber%2==0 ? console.log(`yea! this number ${envenChackNumber} is Even .It is ${true}`) : console.log(`Noo! this number ${envenChackNumber} is odd . it is ${false} `);
}
isEven(4); // even
isEven(7); // odd

// 3 / Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sum(a,b){
    return a+b
};
console.log(sum(52,402)); //454
console.log(sum(215,22)); //237
// 4 / Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
function findSmallestNum(x){
    let result = Math.min(...x);
    console.log(result);
}
findSmallestNum([5,8,25,47,2,5,23,52,52,2,5])

// 5 / 2. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str){
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if (vowels.includes(char)){
            count++
        }
        
    }
    return count
}
console.log(countVowels(`hello world`)); //3
console.log(countVowels(`Hello Javascript`));//5

// 6 / Write a function to get the first element of an array. The function should take a single argument, which is the array.
function getFirstElement(arr){
    console.log(arr[0]);

}
getFirstElement([1,2,58,1,54,1,4]) //1
getFirstElement([`a`,`b`,`c`,`d`]) // a

// 7 / Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr){
    console.log(arr.length===0);
}
isArrayEmpty([])
isArrayEmpty([1,2,34,45])

// 8 / Write a function to return the factorial of a number. The function should take a single argument, which is the number.
function factorialize(num){
    let  result =1;
    if (num==0 || num==1) {
        result= 1;
    } else{
        for(let i= 1; i<=num; i++){
            result = result*i
        }
    }
    return result
}
console.log(factorialize(5)); //120
console.log(factorialize(7)); //5040

// 9 / Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str){
    let revarce = str.split("").reverse().join("");
    return revarce
}
console.log(reverseString(`hello`)); // olleh
console.log(reverseString(`world`)); // dlrow

// 10 / Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
function toLowerCase(str){
    return str.toLowerCase();
}
console.log(toLowerCase(`HELLO WORLD`)); // hello world
console.log(toLowerCase(`JavaScript`)); // javascript

// 11 / Write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str){
    return str.length;
}
console.log(stringLength(`hello`)); // 5
console.log(stringLength(`world`)); // 5

// 12 / Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
function mergeArrays(arr1,arr2){
    return arr1.concat(arr2) ;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// 13 / Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getLastElement(arr){
    return arr[arr.length-1]
}
console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

// 14 / Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str){
    return str[0]
}
console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// 15 / Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumArray(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5

