// print any three animals name with same characteristics
let animalsName = ["Goat", "Cow", "Buffalow", "Sheep"];
for(let i of animalsName){
    console.log(i);
}
// modify program to print a statement about each animal
for(let i of animalsName){
    console.log(`${i},is the best pet animal.`);
}
// add a line at the end stating common features
console.log(` All animals ${animalsName[0]} , ${animalsName[1]} , ${animalsName[2]}
${animalsName[3]} gives milk which is good for health.`);