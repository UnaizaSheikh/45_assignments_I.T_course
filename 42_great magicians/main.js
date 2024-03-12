// copy of exercise 40
// make a function called show_magicians
// function show magicians(maicians : string[]){
// magicians.forEach((magicians)=> {
// console.log(magicians);
// })
// }
// array of magicians names
var magiciansName = ["Ali Azmat", "Saad Hashmi", "Moiz Raza", "Zohaib Ali"];
// calling the function to show magician names
// show_magicians(magicianNames);
function make_great(magicians) {
    magicians.forEach(function (magician) {
        console.log("The great magicain, ".concat(magicians));
    });
}
make_great(magiciansName);
