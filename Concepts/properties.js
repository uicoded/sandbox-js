// Object properties

var p1 = {
	name: 'Adam',
	age: 0
};


/*
Good practice: Property existence - use `in` operator
Because of false negatives:

	if (p1.age) { alert('Your are rookie!'); }

 - p1.age is truthy when p1.age is an object, a nonempty string, a nonzero number or true
 - p1.age is falsy when p1.age is null, undefined, 0 (like here), false, NaN, or empty string

*/

// Check if the property exists in the Object
// `in` operator checks also prototype!!! not just own properties (which are enumerable by default)

console.log("name" in p1);							// true
console.log(p1.hasOwnProperty("name"));				// true


console.log("toString" in p1);						// true
console.log(p1.hasOwnProperty("toString"));			// false
