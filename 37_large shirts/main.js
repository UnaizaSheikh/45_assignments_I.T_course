// modify the make shirt function by default large, shirt
// function make_shirt(size:string, shirtPrint:string){
//return(size + shirtPrint);
//}
// let response = make_shirt(`large`, `I love typescript`);
// console.log(response);
// by default "large", shirt modify
// function make_shirt(shirtPrint:string, size:string = "Large"){
// return(size + shirtPrint);
//}
// let response = make_shirt(`I love typescript`);
// console.log(response);
// function make_shirt(shirtPrint:string, size:string = "Medium"){
// return(size + shirtPrint);
//}
// let response = make_shirt(`I love typescript`);
// console.log(response);
function make_shirt(shirtPrint, size) {
    if (size === void 0) { size = "any size"; }
    return (size + shirtPrint);
}
var response = make_shirt("I love typescript");
console.log(response);
