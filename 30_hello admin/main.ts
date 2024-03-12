// make a array of five users_name
let users_name: string[] = ["Admin","Ali","Usman","Hamza","Mahad"];
// write greeting statements
for(let i = 0; i< users_name.length; i++){
    if(users_name[i] == "Admin"){
        console.log(`Hello ${users_name[i]}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${users_name[i]}, Thank you for logging in again.`)
    }
};