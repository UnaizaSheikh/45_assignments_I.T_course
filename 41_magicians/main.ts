// make a function called show_magicians
function show_magicians(magicians : string[]){
    magicians.forEach((magician) =>{
        console.log(magician);
    });
}
// array of magician names
let magicianNames : string[] = ["Ali Azmat", "Saad Hashmi", "Moiz Raza", "Zohaib Ali"];

// calling the function to show maician names
show_magicians(magicianNames);