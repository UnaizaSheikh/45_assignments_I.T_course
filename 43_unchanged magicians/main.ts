// array of magician names unchanged
let magicianNames : string[] = ["Ali Azmat", "Saad Hashmi", "Moiz Raza", "Zohaib Ali"];

// make the great magicians 
function make_great(magicians : string[]){
    magicians.forEach((magician) =>{
        console.log(`The great magicain, ${magicians}`);
    });
}
make_great(magicianNames);

// make a function called show_magicians original array unchanged
function show_magicians(magicians : string[]){
    magicians.forEach((magician) =>{
        console.log(magician);
 });
}

// calling the function to show magician names
show_magicians(magicianNames);