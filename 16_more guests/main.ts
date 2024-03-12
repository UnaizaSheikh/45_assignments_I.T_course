// list of guests
let guests_list: string[] = ["Hashir","Usman","Muhammad",];

// one new guest add to list at 0 length
let new_guests_list: string[] = ["Hashir","Usman","Muhammad","Ali"];

//one guest not attend the dinner so we invite another
let guest_absent : string = "Muhammad";
let new_guest : string = "Sir Hamzah";
guests_list[0] = new_guest;
for (let i=0; i<guests_list.length; i++){
    console.log("Dear",guests_list[i]+ ",\n   We invited you on a dinner tomorrow at 9:00 pm.As we have a big dinner table for our gathering\n Thank You\n");
}
console.log(`Mr.${guest_absent} will not attend the dinner.`);

// as we have a big dinner table so we invite three more people
guests_list .unshift("Sir Zia");
guests_list .splice(2,0,"Sir Ameen Alam");
guests_list .push("Sir Ali Jawwad");
for (let i=0; i<guests_list.length; i++){
    console.log("Dear",guests_list[i]+ ",\n   We invited you on a dinner tomorrow at 9:00 pm.As we have a big dinner table for our gathering\n Thank You\n");
}






