// write function that accept array
function order_sandwich(sandwhichName : string[]){
    sandwhichName.forEach((sandwhichNames) =>{
        console.log(sandwhichNames);
    });
}
// call the function with differnet number of arguments
order_sandwich(["Club Classic", "Veggie Bliss", "Turkey Avocado", "Italiano"]);
order_sandwich(["Spicy Chicken", "Cheese Melt", "Beef Brisket", "Turkey Twist"]);
order_sandwich(["Ham Slam", "Bacon Blast", "Avocado Dream", "Eggcellent"]);