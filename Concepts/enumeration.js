/* Enumerable properties are those you can loop through using for-in
 *
 * By default, newly added properties are enumerable (have their internal [[Enumerable]] attr set to true
 */


function Person(name) {
	this.name = name || 'Adam';
	this.sayHello = function() {
		console.log('Hi my name is '+ this.name);
	};
}

var p1 = new Person;
var property;

// Returns all properties including the prototype's
for (property in p1) {
	console.log("Property Name: " + property);
	console.log("Property Value: " + p1[property]);
}


// Since ES5 Object.keys() returns Array of enumerable properties
// returns only own properties
var properties = Object.keys(p1);

// mimic the for in loop
var i, len;

for (i = 0, len = properties.length; i < len; i++){
	console.log("Property Name: " + properties[i]);
	console.log("Property Value: " + p1[properties[i]]);
}


// 'in' operator checks also prototype's properties
console.log("name" in p1);							// true
console.log("toString" in p1);						// true

console.log(p1.hasOwnProperty("name"));				// true
console.log(p1.hasOwnProperty("toString"));			// false

console.log(p1.propertyIsEnumerable("name"));		// true
console.log(p1.propertyIsEnumerable("toString"));	// false

