// list of guests
var guests_list = ["Hashir", "Usman", "Muhammad",];
// one new guest add to list at 0 length
var new_guests_list = ["Hashir", "Usman", "Muhammad", "Ali"];
//one guest not attend the dinner so we invite another
var guest_absent = "Muhammad";
var new_guest = "Sir Hamzah";
guests_list[0] = new_guest;
// for (let i=0; i<guests_list.length; i++){
//  console.log("Dear",guests_list[i]+ ",\n   We invited you on a dinner tomorrow at 9:00 pm.As we have a big dinner table for our gathering\n Thank You\n");
// }
console.log("Mr.".concat(guest_absent, " will not attend the dinner."));
// as we have a big dinner table so we invite three more people
guests_list.unshift("Sir Zia");
guests_list.splice(2, 0, "Sir Ameen Alam");
guests_list.push("Sir Ali Jawwad");
for (var i = 0; i < guests_list.length; i++) {
    console.log("Dear", guests_list[i] + ",\n   We invited you on a dinner tomorrow at 9:00 pm. As we have a big dinner table for our gathering\n Thank You\n");
}
console.log("\n Sorry we can't arrange big table for dinner,Only two people will be invited.");
while (guests_list.length > 2) {
    var remove_guest = guests_list.pop();
    console.log("Sorry Mr.".concat(remove_guest, ",You are not invited for dinner"));
}
for (var i = 0; i < guests_list.length; i++) {
    console.log("Dear", guests_list[i] + ",\n You are still invited. \n Thank You\n");
}
guests_list.splice(0, 2);
console.log(guests_list);
