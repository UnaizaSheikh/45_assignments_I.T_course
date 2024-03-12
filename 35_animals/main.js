// print any three animals name with same characteristics
var animalsName = ["Goat", "Cow", "Buffalow", "Sheep"];
for (var _i = 0, animalsName_1 = animalsName; _i < animalsName_1.length; _i++) {
    var i = animalsName_1[_i];
    console.log(i);
}
// modify program to print a statement about each animal
for (var _a = 0, animalsName_2 = animalsName; _a < animalsName_2.length; _a++) {
    var i = animalsName_2[_a];
    console.log("".concat(i, ",is the best pet animal."));
}
// add a line at the end stating common features
console.log(" All animals ".concat(animalsName[0], " , ").concat(animalsName[1], " , ").concat(animalsName[2], "\n").concat(animalsName[3], " gives milk which is good for health."));
