"use strict";
//test 1 equality with string
var car = "sabaru";
console.log("is car == 'sabaru'? I predict true"); //true
console.log(car == "sabaru");
//test 2 equality with string
console.log("is car !== 'sabaru'? I predict false");
console.log(car !== "sabaru"); //false
//test 3 inequality with string
var van = "toyota";
console.log("is van == 'toyota'? I predict true"); //true
console.log(van == "toyota");
//test 4 inequality with string
console.log("is van !== 'toyota'? I redict false"); //false
console.log(van !== "toyota");
//test 5 equality with lowerCase
var book = "Fourty Rules Of Love";
console.log("is book.tolowerCase() == 'Fourty Rules Of Love'? I predict true"); //true
console.log(book.toLowerCase() == "Fourty Rules Of Love");
//test 6 inequality with lowerCase
console.log("is book === 'Fourty Rules Of Love.tolowerCase()'? I predict false"); //false
console.log(book === "Fourty Rules Of Love.tolowerCase()");
//test 7 numbers in equality
var age = 25;
console.log("is age == 25? I predict true"); //true
console.log(age == 25);
//test 8 numbers in inequality
console.log("is age !== 25? I predict false"); //false
console.log(age !== 25);
//test 9 number in greater then
console.log("is age > 30? I predict false"); //false
console.log(age > 30);
//test 10 less then or equal
console.log("is age <= 25? I predict true"); //true
console.log(age <= 25);
//test 11 &&
console.log("is age > 20 && age < 30? I predict true"); //true
console.log(age > 20 && age < 30);
//test 12 ||
console.log("is age > 30 || < 19? I predict false"); //false
console.log(age > 30 || age < 19);
//test 13 array
var numbers = ["1", "2", "3", "4", "5"];
console.log("is 2 in number ? I predict true"); //true
console.log(2 in numbers);
//test 14 not in array
console.log("is 6 in numbers ? I predict false"); //false
console.log(6 in numbers);
