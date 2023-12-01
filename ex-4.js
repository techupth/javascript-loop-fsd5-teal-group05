// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
let text = "Restaurants Name: ";
while (restaurants[i]) {
    newRestaurants.push(text + restaurants[i]);
    i++;
}

console.log(newRestaurants);
