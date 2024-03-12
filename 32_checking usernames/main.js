// create a current program
var current_users = ["Admin", "ali", "usman", "Umar", "Hamza"];
// list a new user names list
var new_users = ["Hadi", "Azan", "Bari", "ali", "usman", "Hashir", "Muhammad"];
// function apply for each
new_users.forEach(function (new_users) {
    new_users = new_users.toLowerCase();
    // function apply for .Some
    var user_name = current_users.some(function (current_users) { return current_users.toLocaleLowerCase() === new_users; });
    // apply conditions
    if (user_name) {
        console.log("".concat(new_users, " need to new users name because it is already taken"));
    }
    else {
        console.log("".concat(new_users, " is the new member added"));
        current_users.push(new_users);
        console.log(current_users);
    }
});
