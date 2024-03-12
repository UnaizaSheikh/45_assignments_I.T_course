// list of guests
let guests_list: string[] = ["Hashir","Usman","Muhammad"];

// invite each guest to dinner
for (let i=0; i<guests_list.length; i++){
    console.log("Dear",guests_list[i]+ ",\n   We invited you on a dinner tomorrow at 9:00 pm\n Thank You\n");
}

//one guest not attend the dinner
let guest_absent : string = "Muhammad";

// replace absent guest with a new guest
let new_guest : string = "Haider";

// print a second set of invitation
guests_list[1] = new_guest;
for (let i=0; i<guests_list.length; i++){
    console.log("Dear",guests_list[i]+ ",\n   We invited you on a dinner tomorrow at 9:00 pm\n Thank You\n");
}
console.log(`Mr ${guest_absent} will not attend the dinner.`)




