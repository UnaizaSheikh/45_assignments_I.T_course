let personName:string = "Usman";
// lowerCase
console.log(personName.toLowerCase());

// upperCase
console.log(personName.toUpperCase());

// titleCase
console.log(personName.replace(/\b\w/g,(char)=> char.toUpperCase()));