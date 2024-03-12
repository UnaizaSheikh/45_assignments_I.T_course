// copy of exercise 40
// make a function called show_magicians
// function show magicians(maicians : string[]){
    // magicians.forEach((magicians)=> {
        // console.log(magicians);
// })
// }
// array of magicians names
let magiciansName : string[] = ["Ali Azmat", "Saad Hashmi", "Moiz Raza", "Zohaib Ali"];

// calling the function to show magician names
// show_magicians(magicianNames);
function make_great(magicians : string[]){
    magicians.forEach((magician) =>{
        console.log(`The great magicain, ${magicians}`);
    });
}
make_great(magiciansName);