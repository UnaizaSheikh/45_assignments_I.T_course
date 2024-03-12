interface item{
    name : string
    price : number
}
// create two objects
const book : item = {
    name : "The Journey",
    price : 1000
}
const chocolate : item = {
    name : "Dairy Milk",
    price : 300
}
console.log(`book name: ${"The Journey"} Price ${"1000"}`);
console.log(`chocolate name: ${"Dairy Milk"} Price ${"300"}`);