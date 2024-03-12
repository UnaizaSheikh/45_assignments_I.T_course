// non alphabetical order
let places : string[] = ["Canada","Turkey","Singapore","Saudia Arabia","Dubai"];

// print array in its original order
console.log("original " + places);

// print array in alphabetical order
console.log("copy " + [...places].sort());

// array is still in original order
console.log("original " + places);

// print array in reverse alphabetical order without changing order
console.log("copy " + [...places].sort().reverse());
 
// show array is still in original order by printing it again
console.log("original " + places);

// reverse the order and print array to show that order has changed
console.log("original " + places.reverse());

// reverse the order again and print the list to show that its back to original order
console.log("original " + places.reverse());

// sort array in alphabetical order and print array to show that order has been changed
console.log("original " + places.sort());

// sort to change your array so its stored in reverse alphabetical order and print order to show order has changed
console.log("original " + places.sort().reverse()); 







