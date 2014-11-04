// Strings, and Numbers by Value
var a = 3;
b = a;
// b == 3

// Objects and Arrays by Reference
var a = [3,2,1];
b = a;
b[0]= 99;
// b == [99,2,1]

// function argument by reference
function changeMake(carObj) {
  carObj.make = "Ford";
}

var mycar = {make: "Honda", model: "Civic", year: 2015},
    x,
    y;

x = mycar.make;     // x == "Honda"
changeMake(mycar);
y = mycar.make;     // y == "Ford"

/*
Note: 
 Assigning a new object to the parameter will not have any effect outside the function,
 because this is changing the value of the parameter rather than the value of one
 of the object's properties

function changeMake(carObj) {
  carObj = {make: "Ford", model: "Focus", year: 2008}
}

var mycar = {make: "Honda", model: "Civic", year: 2015},
    x,
    y;

x = mycar.make;     // x == "Honda"
changeMake(mycar);
y = mycar.make;     // y == "Honda" // is still Honda
*/