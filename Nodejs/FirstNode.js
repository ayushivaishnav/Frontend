var firstName = "Ayushi";
var lastName = "Vaishnav";
console.log('First name:', firstName);
console.log('Last name:', lastName);

var cities = ['Bangalore', 'Chennai', 'Lucknow', 'Delhi', 'Hyderabad'];
for( i in cities)
console.log(cities[i]);

console.log("---------------");
for(j of cities)
console.log(j);
console.log("---------------");
console.log(("Chennai" in cities)? "Found" : "Not Found" );
console.log("---------------");
console.log(cities.includes('Delhi') ? 'Found' : 'Not Found');
