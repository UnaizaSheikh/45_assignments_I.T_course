// make a function called show_magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// array of magician names
var magicianNames = ["Ali Azmat", "Saad Hashmi", "Moiz Raza", "Zohaib Ali"];
// calling the function to show maician names
show_magicians(magicianNames);
