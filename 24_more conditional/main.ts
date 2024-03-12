// test for equality and inequality
let name1:string = "Unaiza";
let name2:string = "Sheikh";
console.log(name1 !== name2); 
console.log(name1 === name2); 

// test using the lower case function
let upperCase:string = "UNAIZA";
let lowerCase:string = "sheikh";
console.log(upperCase.toLowerCase() !== lowerCase); 
console.log(upperCase.toLowerCase() === lowerCase); 

// numerical test involving equality,in equality,greater than,less than,greater than or equal to and less than or equal to
let num1:number = 15;
let num2:number = 20;
console.log(num1 !== num2); 
console.log(num1 === num2); 
console.log(num1 < num2); 
console.log(num1 > num2); 
console.log(num1 <= num2);
console.log(num1 >= num2);

// test using "and" and "or" operators
let a:number = 15;
let b:number = 20;
let c:number = 25;
let d:number = 30;
console.log((a < b) && (c < d));
console.log((a < b) || (c > d));

// test weather an item is in a array
let colors:string[] = ["Red","Black","White","Blue"];
console.log(colors.includes("Red")); 
console.log(colors.includes("Green")); 

// test weather an item is not in a array
let colours:string[] = ["Red","Black","White","Blue"];
console.log(!colors.includes("Red")); 
console.log(!colors.includes("Green"));
