// list of guests
var guests_list = ["Hashir", "Usman", "Muhammad"];
// invite each guest to dinner
for (var i = 0; i < guests_list.length; i++) {
    console.log("Dear", guests_list[i] + ",\n   We invited you on a dinner tomorrow at 9:00 pm\n Thank You\n");
}
//one guest not attend the dinner
var guest_absent = "Muhammad";
// replace absent guest with a new guest
var new_guest = "Haider";
// print a second set of invitation
guests_list[1] = new_guest;
for (var i = 0; i < guests_list.length; i++) {
    console.log("Dear", guests_list[i] + ",\n   We invited you on a dinner tomorrow at 9:00 pm\n Thank You\n");
}
console.log("Mr ".concat(guest_absent, " will not attend the dinner."));
