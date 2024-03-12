// array of magician names unchanged
var magicianNames = ["Ali Azmat", "Saad Hashmi", "Moiz Raza", "Zohaib Ali"];
// make the great magicians 
function make_great(magicians) {
    magicians.forEach(function (magician) {
        console.log("The great magicain, ".concat(magicians));
    });
}
make_great(magicianNames);
// make a function called show_magicians original array unchanged
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// calling the function to show magician names
show_magicians(magicianNames);
