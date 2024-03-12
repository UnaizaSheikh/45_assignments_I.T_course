// create a current program
let current_users : string[] = ["Admin","ali","usman","Umar","Hamza"]

// list a new user names list
let new_users : string[] = ["Hadi","Azan","Bari","ali","usman","Hashir","Muhammad"]

// function apply for each
new_users.forEach(new_users =>{
    new_users = new_users.toLowerCase();
// function apply for .Some
let user_name = current_users.some(current_users => current_users.toLocaleLowerCase()=== new_users);

// apply conditions
if(user_name){
    console.log(`${new_users} need to new users name because it is already taken`);
}else{
    console.log(`${new_users} is the new member added`);
    current_users.push(new_users);
    console.log(current_users);
}
})