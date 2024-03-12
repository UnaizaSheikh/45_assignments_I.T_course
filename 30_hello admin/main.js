// make a array of five users_name
var users_name = ["Admin", "Ali", "Usman", "Hamza", "Mahad"];
// write greeting statements
for (var i = 0; i < users_name.length; i++) {
    if (users_name[i] == "Admin") {
        console.log("Hello ".concat(users_name[i], ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(users_name[i], ", Thank you for logging in again."));
    }
}
;
