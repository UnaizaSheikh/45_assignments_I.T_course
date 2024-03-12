// set the value for variable age
var age = 18;
// person is less than 2 years old
if (age < 2) {
    console.log("The person is a baby.");
}
//person is atleast 2 years old but less less than 4  
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// person is atleast 4 years old but less than 13
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// person is atleast 13 years old but less than 20
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// person is atleast 20 years old but less than 65
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
// person age is 65 or older
else {
    console.log("The person is an elder.");
}
