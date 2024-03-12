// test for equality and inequality
var name1 = "Unaiza";
var name2 = "Sheikh";
console.log(name1 !== name2); // true
console.log(name1 === name2); // false
// test using the lower case function
var upperCase = "UNAIZA";
var lowerCase = "sheikh";
console.log(upperCase.toLowerCase() !== lowerCase); //true
console.log(upperCase.toLowerCase() === lowerCase); //false
// numerical test involving equality,in equality,greater than,less than,greater than or equal to and less than or equal to
var num1 = 15;
var num2 = 20;
console.log(num1 !== num2); //true
console.log(num1 === num2); //false
console.log(num1 < num2); //true
console.log(num1 > num2); //false
console.log(num1 <= num2); //true
console.log(num1 >= num2); //false
// test using "and" and "or" operators
var a = 15;
var b = 20;
var c = 25;
var d = 30;
console.log((a < b) && (c < d)); //true
console.log((a < b) || (c > d)); //true
// test weather an item is in a array
var colors = ["Red", "Black", "White", "Blue"];
console.log(colors.includes("Red")); //true
console.log(colors.includes("Green")); //false
// test weather an item is not in a array
