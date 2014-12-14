/*
The in operator returns true if the specified property is in the specified object.

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
	http://www.bennadel.com/blog/1918-Javascript-s-IN-Operator-Does-Not-Work-With-Strings.htm
	http://www.bennadel.com/blog/1724-Using-Javascript-s-IN-Operator-To-Test-For-Object-Property-Existence.htm
*/

var object = {};
var array = [];
var string = "";
var number = new Number( 1 );
var date = new Date();

console.log( "Object", ("length" in object) );
console.log( "Array", ("length" in array) );
console.log( "String", ("length" in string) );
console.log( "Date", ("length" in date) );
console.log( "Number", ("length" in number) );

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
console.log( 0 in trees );       		// returns true
console.log( 3 in trees );       		// returns true
console.log( 6 in trees );       		// returns false
console.log( "bay" in trees );   		// returns false (you must specify the index number,
                 				 		// not the value at that index)
console.log( "length" in trees );		// returns true (length is an Array property)

// If you delete a property with the delete operator, the in operator returns false for that property.
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
console.log( 3 in trees ); 				// returns false

var car = {make: "Honda", model: "Odyssey", year: 2015};
delete car.year;
console.log( "year" in car );  			// returns false

// If you set a property to undefined but do not delete it, the in operator returns true for that property.
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
console.log( 3 in trees ); 				// returns true

var car = {make: "Honda", model: "Odyssey", year: 2015};
car.year = undefined;
console.log( "year" in car );  			// returns true
